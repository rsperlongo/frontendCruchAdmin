import { Injectable } from '@angular/core';
import { Member, MemberFormValue } from './member.models';

@Injectable({ providedIn: 'root' })
export class MemberService {
  private readonly storageKey = 'church-admin-members';

  list(): Member[] {
    try {
      const storedMembers: unknown = JSON.parse(localStorage.getItem(this.storageKey) ?? '[]');
      return Array.isArray(storedMembers) ? storedMembers as Member[] : [];
    } catch {
      return [];
    }
  }

  create(value: MemberFormValue): Member {
    const member = { ...value, id: crypto.randomUUID() };
    this.save([...this.list(), member]);
    return member;
  }

  update(id: string, value: MemberFormValue): void {
    this.save(this.list().map((member) => member.id === id ? { ...value, id } : member));
  }

  delete(id: string): void {
    this.save(this.list().filter((member) => member.id !== id));
  }

  private save(members: Member[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(members));
  }
}
