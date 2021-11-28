export type User = {
  profileImg?: string;
  name: string;
  id: string;
}

export type ProjectUserType  = User & {
  role: 'owner' | 'collaborator';
}