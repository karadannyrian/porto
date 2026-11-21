import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { ApiService } from '../api.service';
import { ArchitectureDiagramComponent } from '../shared/architecture-diagram.component';

@Component({
  selector: 'app-case-study',
  standalone: true,
  imports: [RouterLink, ArchitectureDiagramComponent],
  templateUrl: './case-study.component.html',
  styleUrl: './case-study.component.scss',
})
export class CaseStudyComponent {
  private api = inject(ApiService);
  private route = inject(ActivatedRoute);

  project = toSignal(
    this.route.paramMap.pipe(
      map(p => p.get('slug') ?? ''),
      switchMap(slug => this.api.getProject(slug).pipe(map(p => p ?? null))),
    ),
  );
}
