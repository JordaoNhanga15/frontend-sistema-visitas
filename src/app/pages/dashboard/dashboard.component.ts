import { Component } from '@angular/core';
@Component({ selector:'app-visits', templateUrl:'./visits.component.html' })
export class VisitsComponent {
  cols = ['data','visitante','anfitriao','departamento','motivo','entrada','saida','duracao'];
  data = [
    { data:'28/10/2024', visitante:'António Carlos', anfitriao:'João Pedro', departamento:'Finanças', motivo:'Reunião', entrada:'09:30', saida:'11:45', duracao:'2h15m' },
    { data:'28/10/2024', visitante:'Maria Costa', anfitriao:'Maria Santos', departamento:'RH', motivo:'Entrega Docs', entrada:'10:15', saida:'10:45', duracao:'30m' },
  ];
}
