import { Visitor } from '@app/core/models/index';
import { VisitorDto } from '@app/core/dto/index';

export const toVisitorModel = (dto: VisitorDto): Visitor => ({
  id: dto.id,
  nome: dto.fullName,
  empresa: dto.company,
  documento: dto.document,
  telefone: dto.phone
});

export const toVisitorDto = (m: Visitor): VisitorDto => ({
  id: m.id,
  fullName: m.nome,
  company: m.empresa,
  document: m.documento,
  phone: m.telefone
});
