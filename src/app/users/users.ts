import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { User } from '../core/auth/auth.models';
import { UserService } from '../core/auth/user.service';

@Component({
  selector: 'app-users',
  imports: [ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatSlideToggleModule],
  templateUrl: './users.html',
  styleUrl: './users.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Users {
  private readonly formBuilder = inject(FormBuilder);
  private readonly userService = inject(UserService);
  protected readonly users = signal<User[]>([]);
  protected readonly isLoading = signal(true);
  protected readonly isSaving = signal(false);
  protected editingUserId: string | null = null;
  protected feedback = '';
  protected errorMessage = '';
  protected readonly userForm = this.formBuilder.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    roles: [['user'], Validators.required],
  });

  constructor() { this.loadUsers(); }

  private loadUsers(): void {
    this.isLoading.set(true);
    this.userService.list().subscribe({
      next: (response) => { this.users.set(response.data); this.isLoading.set(false); },
      error: () => { this.errorMessage = 'Não foi possível carregar os usuários.'; this.isLoading.set(false); },
    });
  }

  protected submit(): void {
    if (this.userForm.invalid) { this.userForm.markAllAsTouched(); return; }
    const value = this.userForm.getRawValue();
    this.isSaving.set(true); this.feedback = ''; this.errorMessage = '';
    const request = this.editingUserId ? this.userService.update(this.editingUserId, value) : this.userService.create(value);
    request.subscribe({
      next: () => { this.feedback = this.editingUserId ? 'Usuário atualizado.' : 'Usuário criado.'; this.cancelEdit(); this.loadUsers(); this.isSaving.set(false); },
      error: (error: HttpErrorResponse) => { this.isSaving.set(false); this.errorMessage = error.status === 409 ? 'Este e-mail já está em uso.' : 'Não foi possível salvar o usuário.'; },
    });
  }

  protected edit(user: User): void {
    this.editingUserId = user.id;
    this.userForm.reset({ email: user.email, password: '', roles: user.roles });
    this.userForm.controls.password.clearValidators();
    this.userForm.controls.password.updateValueAndValidity();
  }

  protected cancelEdit(): void {
    this.editingUserId = null;
    this.userForm.reset({ email: '', password: '', roles: ['user'] });
    this.userForm.controls.password.setValidators([Validators.required, Validators.minLength(6)]);
    this.userForm.controls.password.updateValueAndValidity();
  }

  protected toggleStatus(user: User): void {
    const request = user.isActive ? this.userService.deactivate(user.id) : this.userService.reactivate(user.id);
    request.subscribe({ next: () => { this.users.update((users) => users.map((item) => item.id === user.id ? { ...item, isActive: !user.isActive } : item)); }, error: () => { this.errorMessage = 'Não foi possível alterar o status do usuário.'; } });
  }
}
