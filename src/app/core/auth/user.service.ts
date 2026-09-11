import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User, UserFormValue, UserListResponse } from './auth.models';

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3001';

  list(): Observable<UserListResponse> {
    return this.http.get<UserListResponse>(`${this.apiUrl}/users`, {
      params: new HttpParams().set('page', 1).set('limit', 100).set('sortBy', 'createdAt').set('sortOrder', 'DESC'),
    });
  }

  create(user: UserFormValue): Observable<User> {
    return this.http.post<{ data: User }>(`${this.apiUrl}/users`, user).pipe(map((response) => response.data));
  }

  update(id: string, user: Partial<UserFormValue> & { isActive?: boolean }): Observable<User> {
    return this.http.put<{ data: User }>(`${this.apiUrl}/users/${id}`, user).pipe(map((response) => response.data));
  }

  deactivate(id: string): Observable<void> { return this.http.delete<void>(`${this.apiUrl}/users/${id}`); }

  reactivate(id: string): Observable<void> { return this.http.post<void>(`${this.apiUrl}/users/${id}/reactivate`, {}); }
}
