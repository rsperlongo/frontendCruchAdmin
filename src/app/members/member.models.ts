export interface Member {
  id: string;
  name: string;
  email: string;
  phone: string;
  birthDate: string;
}

export type MemberFormValue = Omit<Member, 'id'>;
