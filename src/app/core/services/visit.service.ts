import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { MockDB } from '@app/core/mock/mock-db';
import { Visit } from '@app/core/models/index';
import { toVisitModel, toVisitDto } from '@app/core/mappers/index';

@Injectable({ providedIn: 'root' })
export class VisitService {
  list(): Observable<Visit[]> {
    return of(MockDB.visits).pipe(
      map(dtos =>
        dtos
          .map(d => {
            const visitor = MockDB.visitors.find(v => v.id === d.visitorId);
            if (!visitor) {
              return null;
            }
            return toVisitModel(d, visitor);
          })
          .filter(Boolean) as Visit[],
      ),
    );
  }

  listActive(): Observable<Visit[]> {
    return this.list().pipe(map(list => list.filter(v => !v.saida)));
  }

  registerExit(id: string, time: string): Observable<boolean> {
    const found = MockDB.visits.find(v => v.id === id);
    if (!found) {
      return of(false);
    }
    found.checkOut = time;
    return of(true);
  }

  create(model: Visit, visitorId: string): Observable<Visit> {
    const dto = toVisitDto(model, visitorId);
    MockDB.visits.push(dto);
    const visitor = MockDB.visitors.find(v => v.id === visitorId);
    if (!visitor) {
      return of(model);
    }
    return of(toVisitModel(dto, visitor));
  }
}
