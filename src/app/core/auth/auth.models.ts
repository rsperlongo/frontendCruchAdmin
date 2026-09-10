export interface AuthUser {
  id?: string;
  email: string;
  roles?: string[];
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface LoginResponse {
  access_token: string;
  user: AuthUser;
}

export interface LoginRequest {
  email: string;
  password: string;
}
