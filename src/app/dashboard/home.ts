import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  imports: [MatIconModule],
  template: `<section class="welcome"><div><p class="overline">Visao geral</p><h1>Bem vindo, {{ userName }}!</h1><p class="description">Aqui esta um resumo da sua comunidade hoje.</p></div><div class="welcome-mark"><mat-icon>dashboard</mat-icon></div></section><section class="metrics" aria-label="Resumo da comunidade">@for (metric of metrics; track metric.label) { <article class="metric-card"><span class="metric-icon"><mat-icon>{{ metric.icon }}</mat-icon></span><p>{{ metric.label }}</p><strong>{{ metric.value }}</strong><span class="trend">{{ metric.trend }}</span></article> }</section><section class="section-heading"><p class="overline">Acompanhe de perto</p><h2>Atalhos da comunidade</h2></section><section class="quick-grid"><article><mat-icon>groups</mat-icon><div><strong>Membros</strong><p>Consulte e organize os cadastros.</p></div></article><article><mat-icon>event</mat-icon><div><strong>Proximos eventos</strong><p>Planeje os encontros da igreja.</p></div></article><article><mat-icon>volunteer_activism</mat-icon><div><strong>Lideranca</strong><p>Veja os responsaveis por cada area.</p></div></article></section>`,
  styleUrl: './home.scss',
})
export class Home {
  protected readonly userName = sessionStorage.getItem('church-admin-user') || 'Administrador';
  protected readonly metrics = [
    { label: 'Membros ativos', value: '248', trend: '+12% este mes', icon: 'groups' },
    { label: 'Eventos este mes', value: '08', trend: '2 nesta semana', icon: 'event' },
    { label: 'Celulas e grupos', value: '16', trend: '100% atualizados', icon: 'hub' },
  ];
}
