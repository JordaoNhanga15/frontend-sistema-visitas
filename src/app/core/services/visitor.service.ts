import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MockDB } from '@app/core/mock/mock-db';
import { Visitor } from '@app/core/models/index';
import { toVisitorModel, toVisitorDto } from '@app/core/mappers/index';

@Injectable({ providedIn: 'root' })
export class VisitorService {
    list(): Observable<Visitor[]> {
        return of(MockDB.visitors.map(toVisitorModel));
    }

    search(term: string): Observable<Visitor[]> {
        const t = term.toLowerCase();
        return this.list().pipe(
            // filtro simples
            // tslint:disable-next-line: no-shadowed-variable
            map => map.filter(v =>
                v.nome.toLowerCase().includes(t) ||
                (v.empresa || '').toLowerCase().includes(t) ||
                (v.documento || '').toLowerCase().includes(t)
            )
        );
    }

    create(v: Visitor): Observable<Visitor> {
        MockDB.visitors.push(toVisitorDto(v));
        return of(v);
    }
}
