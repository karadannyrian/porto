import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ArchitectureDiagramComponent } from '../shared/architecture-diagram.component';
import { ApiService } from '../api.service';

type SendState = 'idle' | 'sending' | 'sent' | 'error';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, ArchitectureDiagramComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private api = inject(ApiService);
  private fb = inject(FormBuilder);

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
