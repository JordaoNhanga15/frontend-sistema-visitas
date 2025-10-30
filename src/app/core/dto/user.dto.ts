export interface UserDto {
  id: string;
  username: string;
  displayName: string;
  role: 'ADMIN' | 'STAFF' | 'GUARD';
}
