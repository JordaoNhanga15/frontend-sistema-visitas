export interface User {
  id: string;
  username: string;
  nome: string;
  perfil: 'ADMIN' | 'STAFF' | 'GUARD';
}
