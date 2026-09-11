import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../core/auth/auth.service';
import { UserService } from '../core/auth/user.service';

@Component({ selector: 'app-profile', imports: [ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule], templateUrl: './profile.html', styleUrl: './profile.scss', changeDetection: ChangeDetectionStrategy.OnPush })
export class Profile {
  private readonly formBuilder = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly userService = inject(UserService);
  private readonly router = inject(Router);
  protected isSaving = false;
  protected feedback = '';
  protected errorMessage = '';
  protected readonly profileForm = this.formBuilder.nonNullable.group({ email: ['', [Validators.required, Validators.email]], password: ['', [Validators.minLength(6)]] });

  constructor() { this.profileForm.patchValue({ email: this.authService.getUser()?.email ?? '' }); }

  protected save(): void {
    if (this.profileForm.invalid || !this.authService.getUser()?.id) { this.profileForm.markAllAsTouched(); return; }
    const { email, password } = this.profileForm.getRawValue();
    const payload = password ? { email, password } : { email };
    this.isSaving = true; this.feedback = ''; this.errorMessage = '';
    this.userService.update(this.authService.getUser()!.id!, payload).subscribe({
      next: (user) => { sessionStorage.setItem('church-admin-user', JSON.stringify(user)); this.profileForm.controls.password.reset(); this.isSaving = false; this.feedback = 'Perfil atualizado com sucesso.'; },
      error: (error: HttpErrorResponse) => { this.isSaving = false; this.errorMessage = error.status === 409 ? 'Este e-mail já está em uso.' : 'Não foi possível atualizar o perfil.'; },
    });
  }

  protected goBack(): void { this.router.navigate(['/dashboard']); }
}
