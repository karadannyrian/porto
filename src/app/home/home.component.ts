import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { ArchitectureDiagramComponent } from '../shared/architecture-diagram.component';
import { ApiService } from '../api.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    ArchitectureDiagramComponent,
    NzButtonModule,
    NzCardModule,
    NzTagModule,
    NzBadgeModule,
    NzIconModule,
    NzAlertModule,
    NzDividerModule,
    NzLayoutModule,
    NzTypographyModule,
    NzAvatarModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private api: ApiService = inject(ApiService);

  profile = toSignal(this.api.getProfile());
  projects = toSignal(this.api.getProjects(), { initialValue: [] });
  patterns = toSignal(this.api.getArchitecture(), { initialValue: [] });
  stack = toSignal(this.api.getTechStack(), { initialValue: [] });

  readonly snippet = `// Illustrative pattern — not production client code.
@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(\`\${environment.apiUrl}/\${endpoint}\`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    // Map HTTP errors to one app-wide error shape
    return throwError(() => new Error(error.message));
  }
}`;
}
