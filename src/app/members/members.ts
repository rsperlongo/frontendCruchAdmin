import { ChangeDetectionStrategy, Component, inject, signal, ViewChild } from '@angular/core';
import { FormBuilder, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Member, MemberFormValue } from './member.models';
import { MemberService } from './member.service';

@Component({
  selector: 'app-members',
  imports: [ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSnackBarModule],
  templateUrl: './members.html',
  styleUrl: './members.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Members {
  @ViewChild(FormGroupDirective) private formDirective!: FormGroupDirective;
  private readonly formBuilder = inject(FormBuilder);
  private readonly memberService = inject(MemberService);
  private readonly snackBar = inject(MatSnackBar);

  protected readonly members = signal(this.memberService.list());
  protected readonly editingMemberId = signal<string | null>(null);
  protected feedback = '';
  protected readonly memberForm = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.maxLength(120)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    birthDate: ['', Validators.required],
  });

  protected submit(): void {
    if (this.memberForm.invalid) {
      this.memberForm.markAllAsTouched();
      return;
    }

    const value: MemberFormValue = this.memberForm.getRawValue();
    const memberId = this.editingMemberId();
    try {
      if (memberId) {
        this.memberService.update(memberId, value);
        this.showToast('Membro atualizado com sucesso.', 'member-toast-success');
      } else {
        this.memberService.create(value);
        this.showToast('Membro Cadastro com Sucesso', 'member-toast-success');
      }

      this.members.set(this.memberService.list());
      this.startNewMember();
    } catch {
      this.showToast(
        memberId ? 'Não foi possível atualizar membro' : 'Não foi possível cadastrar membro',
        'member-toast-error',
      );
    }
  }

  protected edit(member: Member): void {
    this.editingMemberId.set(member.id);
    this.feedback = '';
    this.formDirective.resetForm({ name: member.name, email: member.email, phone: member.phone, birthDate: member.birthDate });
  }

  protected delete(member: Member): void {
    if (!globalThis.confirm(`Deseja excluir o cadastro de ${member.name}?`)) return;

    this.memberService.delete(member.id);
    this.members.set(this.memberService.list());
    this.feedback = 'Membro excluído.';
    if (this.editingMemberId() === member.id) this.startNewMember();
  }

  protected startNewMember(): void {
    this.editingMemberId.set(null);
    this.formDirective.resetForm({ name: '', email: '', phone: '', birthDate: '' });
  }

  private showToast(message: string, panelClass: string): void {
    this.snackBar.open(message, 'Fechar', {
      duration: 4000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: [panelClass],
    });
  }
}
