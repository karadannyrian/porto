import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { ApiService } from '../api.service';
import { ArchitectureDiagramComponent } from '../shared/architecture-diagram.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzAlertModule } from 'ng-zorro-antd/alert';

@Component({
  selector: 'app-case-study',
  standalone: true,
  imports: [
    RouterLink,
    ArchitectureDiagramComponent,
    NzButtonModule,
    NzTagModule,
    NzCardModule,
    NzIconModule,
    NzDividerModule,
    NzAlertModule,
  ],
  templateUrl: './case-study.component.html',
  styleUrl: './case-study.component.scss',
})
export class CaseStudyComponent {
  private api: ApiService = inject(ApiService);
  private route = inject(ActivatedRoute);

  project = toSignal(
    this.route.paramMap.pipe(
      map(p => p.get('slug') ?? ''),
      switchMap(slug => this.api.getProject(slug).pipe(map(p => p ?? null))),
    ),
  );
}
