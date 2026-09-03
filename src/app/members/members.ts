import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-members',
  imports: [MatIconModule],
  template: `<section class="members-header"><div><p class="overline">Cadastros</p><h1>Membros</h1><p>Consulte os membros da sua comunidade.</p></div><button type="button"><mat-icon>add</mat-icon>Novo membro</button></section><section class="empty-state"><mat-icon>groups</mat-icon><h2>Lista de membros</h2><p>Os membros cadastrados aparecerao aqui.</p></section>`,
  styleUrl: './members.scss',
})
export class Members {}
