import { User } from '@app/core/models/index';
import { UserDto } from '@app/core/dto/index';

export const toUserModel = (dto: UserDto): User => ({
  id: dto.id,
  username: dto.username,
  nome: dto.displayName,
  perfil: dto.role
});

export const toUserDto = (m: User): UserDto => ({
  id: m.id,
  username: m.username,
  displayName: m.nome,
  role: m.perfil
});
