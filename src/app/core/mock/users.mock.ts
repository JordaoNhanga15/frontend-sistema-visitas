import { UserDto } from '@app/core/dto/index';

export const USERS_MOCK: UserDto[] = [
  { id: 'u1', username: 'admin',  displayName: 'Administrador', role: 'ADMIN' },
  { id: 'u2', username: 'joao',   displayName: 'João Pedro',    role: 'STAFF' },
  { id: 'u3', username: 'seg-01', displayName: 'Portaria 01',   role: 'GUARD' }
];
