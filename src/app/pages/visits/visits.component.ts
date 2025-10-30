import { Component } from '@angular/core';
import { VisitService } from '@app/core/services/visit.service';
import { DataProvider, PagedResult, TableColumn } from '@app/shared/types/table.types';
import { FilterField } from '@app/shared/components/app-filters/app-filters.component';
import { Visit } from '@app/core/models/visit.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-visits',
  template: `
    <app-list
      title="Histórico de Visitas"
      [columns]="columns"
      [filters]="filters"
      [provider]="provider"
      [pageSize]="10">
    </app-list>
  `
})
export class VisitsComponent {
  columns: TableColumn<Visit>[] = [
    { key: 'data', header: 'Data', type: 'date', format: 'dd/MM/yyyy' },
    { key: 'visitanteNome', header: 'Visitante' },
    { key: 'anfitriao', header: 'Anfitrião' },
    { key: 'departamento', header: 'Departamento' },
    { key: 'motivo', header: 'Motivo' },
    { key: 'entrada', header: 'Entrada', width: '100px' },
    { key: 'saida', header: 'Saída', width: '100px' }
  ];

  filters: FilterField[] = [
    { key: 'q', label: 'Pesquisars', type: 'text', placeholder: 'nome, empresa, doc...' },
    { key: 'departamento', label: 'Departamento', type: 'select',
      options: [{label:'Finanças', value:'Finanças'}, {label:'RH', value:'Recursos Humanos'}, {label:'Administração', value:'Administração'}] },
    { key: 'data', label: 'Data', type: 'date' }
  ];

  provider: DataProvider<Visit, any> = (page, size, f, sort) => this.fetch(page, size, f, sort);

  constructor(private visitService: VisitService) {}

  private fetch(page: number, size: number, f: any, sort: any): Observable<PagedResult<Visit>> {
    // Mock: usa o service e aplica filtros/paginação no front
    return this.visitService.list().pipe(<any>map((all: Visit[]) => {
      let result = all.slice();

      if (f && f.q) {
        const t = String(f.q).toLowerCase();
        result = result.filter(v =>
          v.visitanteNome.toLowerCase().includes(t) ||
          v.anfitriao.toLowerCase().includes(t) ||
          v.motivo.toLowerCase().includes(t)
        );
      }
      if (f && f.departamento) {
        result = result.filter(v => v.departamento === f.departamento);
      }
      if (f && f.data) {
        const d = new Date(f.data).toDateString();
        result = result.filter(v => v.data.toDateString() === d);
      }
      if (sort && sort.active && sort.direction) {
        result = result.sort((a: any, b: any) => {
          const av = a[sort.active]; const bv = b[sort.active];
          const comp = av > bv ? 1 : av < bv ? -1 : 0;
          return sort.direction === 'asc' ? comp : -comp;
        });
      }

      const total = result.length;
      const start = page * size;
      const items = result.slice(start, start + size);

      return { items, total };
    }));
  }
}
