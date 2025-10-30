import { Component, OnInit } from '@angular/core';

type KpiColor = 'primary' | 'accent' | 'warn';

interface Kpi {
  label: string;
  value: string;
  color: KpiColor;
  selected?: boolean;
}

/**
 * DashboardComponent
 *
 * Componente controller para o dashboard. Usa um array de KPIs para preencher a view.
 * A marcação HTML pode ser colocada em ./dashboard.component.html (ex.: o snippet que mostrou).
 *
 * Compatível com Angular 7 / CLI 7.
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // KPIs usados na view (inicialmente estáticos; podem ser populados por serviço)
  kpis: Kpi[] = [
    { label: 'Visitantes Hoje', value: '24', color: 'primary', selected: true },
    { label: 'Visitas Ativas', value: '8', color: 'accent', selected: true },
    { label: 'Tempo Médio', value: this.formatDuration(135), color: 'warn', selected: true }, // 135 minutos = 2h15m
  ];

  // Exemplo de dados dinâmicos (podem vir de um serviço)
  totalVisitorsToday = 24;
  activeVisits = 8;
  averageVisitMinutes = 135;

  constructor() {}

  ngOnInit() {
    // Aqui normalmente chamaria um serviço para buscar valores reais:
    // this.metricsService.getDashboard().subscribe(data => this.applyData(data));
  }

  // Atualiza os KPIs a partir de dados vindos de um serviço/backend
  applyData(data: { visitorsToday?: number; activeVisits?: number; averageMinutes?: number }) {
    if (typeof data.visitorsToday !== 'undefined') {
      this.totalVisitorsToday = data.visitorsToday;
      this.setKpiValue('Visitantes Hoje', String(this.totalVisitorsToday));
    }
    if (typeof data.activeVisits !== 'undefined') {
      this.activeVisits = data.activeVisits;
      this.setKpiValue('Visitas Ativas', String(this.activeVisits));
    }
    if (typeof data.averageMinutes !== 'undefined') {
      this.averageVisitMinutes = data.averageMinutes;
      this.setKpiValue('Tempo Médio', this.formatDuration(this.averageVisitMinutes));
    }
  }

  // Helper para atualizar um KPI pelo label
  private setKpiValue(label: string, value: string) {
    const k = this.kpis.find(x => x.label === label);
    if (k) {
      k.value = value;
    }
  }

  // Converte minutos para formato "Xh Ym"
  formatDuration(totalMinutes: number): string {
    if (!totalMinutes || totalMinutes <= 0) {
      return '0m';
    }
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  }
}