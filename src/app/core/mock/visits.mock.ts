import { VisitDto } from '@app/core/dto/index';

export const VISITS_MOCK: VisitDto[] = [
  {
    id: '1',
    date: '2024-10-28',
    visitorId: 'v1',
    hostName: 'João Pedro Silva',
    department: 'Finanças',
    reason: 'Reunião de Trabalho',
    checkIn: '09:30',
    checkOut: '11:45',
  },
  {
    id: '2',
    date: '2024-10-28',
    visitorId: 'v2',
    hostName: 'Maria Santos Costa',
    department: 'Recursos Humanos',
    reason: 'Entrega de Documentos',
    checkIn: '10:15',
    checkOut: '10:45',
  },
  {
    id: '3',
    date: '2024-10-27',
    visitorId: 'v3',
    hostName: 'Carlos Manuel Neto',
    department: 'Administração',
    reason: 'Consultoria',
    checkIn: '14:00',
    checkOut: '17:30',
  },
];
