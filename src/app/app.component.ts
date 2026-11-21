import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <a class="skip" href="#main">Skip to content</a>
    <header class="top">
      <a class="mark" routerLink="/">Raka Riandanny</a>
      <nav aria-label="Primary">
        <a routerLink="/" fragment="projects">Projects</a>
        <a routerLink="/" fragment="architecture">Architecture</a>
        <a routerLink="/" fragment="stack">Stack</a>
        <a routerLink="/" fragment="about">About</a>
        <a routerLink="/" fragment="contact">Contact</a>
      </nav>
    </header>
    <main id="main"><router-outlet /></main>
    <footer>© {{ year }} Raka Riandanny. Client work is shown without confidential details.</footer>
  `,
  styles: [`
    :host { display: block; max-width: 960px; margin: 0 auto; padding: 0 24px; }
    .skip { position: absolute; left: -999px; }
    .skip:focus { left: 16px; top: 16px; background: var(--ink); color: var(--bg); padding: 8px 12px; z-index: 10; }
    .top { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; padding: 20px 0; border-bottom: 1px solid var(--line); }
    .mark { font-weight: 600; text-decoration: none; }
    nav { display: flex; flex-wrap: wrap; gap: 18px; }
    footer { padding: 32px 0 56px; border-top: 1px solid var(--line); color: #5b6172; font-size: .9rem; }
    @media (max-width: 600px) { nav { gap: 12px; font-size: .9rem; } }
  `],
})
export class AppComponent {
  year = new Date().getFullYear();
}
