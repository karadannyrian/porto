import { Component } from '@angular/core';

@Component({
  selector: 'app-architecture-diagram',
  standalone: true,
  template: `
    <figure>
      <svg viewBox="0 0 720 380" role="img" aria-labelledby="arch-t arch-d">
        <title id="arch-t">Shared architecture of the four Angular apps</title>
        <desc id="arch-d">Four lazy-loaded feature modules sit on a shared UI component library and a core service layer, which talks to a REST API.</desc>

        <text x="0" y="16" class="cap">Feature modules, lazy-loaded by route</text>
        @for (f of features; track f; let i = $index) {
          <rect [attr.x]="i * 180" y="26" width="170" height="52" rx="6" class="box feat" />
          <text [attr.x]="i * 180 + 85" y="57" text-anchor="middle" class="lbl">{{ f }}</text>
        }

        <path d="M85 78v34M265 78v34M445 78v34M625 78v34" class="arrow" />

        <text x="0" y="128" class="cap">Shared</text>
        <rect x="0" y="136" width="710" height="64" rx="6" class="box shared" />
        <text x="355" y="164" text-anchor="middle" class="lbl on-blue">Shared UI component library</text>
        <text x="355" y="184" text-anchor="middle" class="sub on-blue">tables · forms · dialogs · status badges · charts</text>

        <path d="M355 200v32" class="arrow" />

        <text x="0" y="248" class="cap">Core</text>
        @for (c of core; track c; let i = $index) {
          <rect [attr.x]="i * 240" y="256" width="230" height="54" rx="6" class="box core" />
          <text [attr.x]="i * 240 + 115" y="278" text-anchor="middle" class="lbl">{{ c[0] }}</text>
          <text [attr.x]="i * 240 + 115" y="297" text-anchor="middle" class="sub">{{ c[1] }}</text>
        }

        <path d="M355 310v28" class="arrow" />
        <rect x="200" y="338" width="310" height="36" rx="6" class="box api" />
        <text x="355" y="361" text-anchor="middle" class="lbl api-t">REST API</text>
      </svg>
      <figcaption>Diagram drawn for this portfolio. It shows the pattern, not any client's system.</figcaption>
    </figure>
  `,
  styles: [`
    figure { margin: 0; }
    svg { width: 100%; height: auto; display: block; }
    .box { fill: #fff; stroke: var(--ink); stroke-width: 1.5; }
    .feat { fill: var(--bg); }
    .shared { fill: var(--blue); stroke: var(--blue); }
    .api { fill: var(--ink); }
    .arrow { stroke: var(--ink); stroke-width: 1.5; fill: none; stroke-dasharray: 4 4; }
    .lbl { font: 600 15px 'Arial', system-ui, sans-serif; fill: var(--ink); }
    .sub { font: 400 12.5px 'Arial', system-ui, sans-serif; fill: #5b6172; }
    .cap { font: 500 12.5px 'Arial', system-ui, sans-serif; fill: #5b6172; }
    .on-blue { fill: #fff; }
    .api-t { fill: #fff; }
    figcaption { margin-top: 10px; font-size: .9rem; color: #5b6172; }
  `],
})
export class ArchitectureDiagramComponent {
  features = ['Employee', 'Attendance', 'Training', 'Workload'];
  core = [
    ['ApiService', 'typed HTTP + errors'],
    ['Auth & RBAC', 'guards + permissions'],
    ['RxJS state', 'services expose streams'],
  ];
}
