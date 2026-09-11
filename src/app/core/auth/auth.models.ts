export interface AuthUser {
  id?: string;
  email: string;
  roles?: string[];
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface User extends AuthUser {
  id: string;
  roles: string[];
  isActive: boolean;
}

export interface UserListResponse {
  data: User[];
  pagination?: { page: number; limit: number; total: number; totalPages: number };
}

export interface UserFormValue {
  email: string;
  password: string;
  roles: string[];
}

export interface LoginResponse {
  access_token: string;
  user: AuthUser;
}

export interface LoginRequest {
  email: string;
  password: string;
}
