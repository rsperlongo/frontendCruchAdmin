import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthUser, LoginRequest, LoginResponse } from './auth.models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3001';
  private readonly tokenKey = 'church-admin-access-token';
  private readonly userKey = 'church-admin-user';

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/auth/login`, credentials).pipe(
      tap(({ access_token, user }) => this.storeSession(access_token, user)),
    );
  }

  getProfile(): Observable<AuthUser> {
    return this.http.get<AuthUser>(`${this.apiUrl}/auth/profile`);
  }

  getToken(): string | null {
    return sessionStorage.getItem(this.tokenKey);
  }

  getUser(): AuthUser | null {
    const storedUser = sessionStorage.getItem(this.userKey);
    return storedUser ? JSON.parse(storedUser) as AuthUser : null;
  }

  isAuthenticated(): boolean {
    return Boolean(this.getToken());
  }

  logout(): void {
    sessionStorage.removeItem(this.tokenKey);
    sessionStorage.removeItem(this.userKey);
  }

  private storeSession(token: string, user: AuthUser): void {
    sessionStorage.setItem(this.tokenKey, token);
    sessionStorage.setItem(this.userKey, JSON.stringify(user));
  }
}
