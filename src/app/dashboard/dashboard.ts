import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AuthService } from '../core/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, MatBadgeModule, MatButtonModule, MatIconModule, MatSidenavModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dashboard {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  protected readonly userName = this.authService.getUser()?.email || 'Administrador';
  protected readonly isAdmin = (this.authService.getUser()?.roles ?? []).some((role) => role.toLowerCase() === 'admin');

  protected logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
