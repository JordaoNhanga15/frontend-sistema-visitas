import { VisitDto, VisitorDto } from '@app/core/dto/index';
import { Visit } from '@app/core/models/index';

export function toVisitModel(dto: VisitDto, visitor: VisitorDto): Visit {
  const start = parseTime(dto.checkIn);
  const end = dto.checkOut ? parseTime(dto.checkOut) : undefined;
  const duracaoMin = end ? Math.max(0, (end.getTime() - start.getTime()) / 60000) : undefined;

  return {
    id: dto.id,
    data: new Date(dto.date + 'T00:00:00'),
    visitanteNome: visitor.fullName,
    anfitriao: dto.hostName,
    departamento: dto.department,
    motivo: dto.reason,
    entrada: dto.checkIn,
    saida: dto.checkOut,
    duracaoMin
  };
}

export function toVisitDto(model: Visit, visitorId: string): VisitDto {
  return {
    id: model.id,
    date: model.data.toISOString().slice(0, 10),
    visitorId,
    hostName: model.anfitriao,
    department: model.departamento,
    reason: model.motivo,
    checkIn: model.entrada,
    checkOut: model.saida
  };
}

function parseTime(hhmm: string): Date {
  const [h, m] = hhmm.split(':').map(Number);
  const d = new Date();
  d.setHours(h, m, 0, 0);
  return d;
}
