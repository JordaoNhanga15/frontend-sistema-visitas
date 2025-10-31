import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  recentVisits = [
    {
      name: 'António Carlos Silva',
      company: 'Banco Nacional de Angola',
      department: 'Finanças',
      host: 'João Pedro Silva',
      time: '14:30',
      active: true,
    },
    {
      name: 'Maria Santos Costa',
      company: 'Sonangol EP',
      department: 'Recursos Humanos',
      host: 'Maria Santos Costa',
      time: '13:45',
      active: true,
    },
    {
      name: 'Pedro Manuel Neto',
      company: 'TAAG Linhas Aéreas',
      department: 'Administração',
      host: 'Carlos Manuel',
      time: '10:15',
      active: false,
    },
  ];

  departments = [
    { name: 'Finanças', value: 45, percent: 82 },
    { name: 'Recursos Humanos', value: 38, percent: 70 },
    { name: 'Administração', value: 32, percent: 58 },
    { name: 'Orçamento', value: 28, percent: 52 },
    { name: 'Outros', value: 19, percent: 40 },
  ];
}
