import { Component, inject } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NzLayoutModule, NzMenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private scroller = inject(ViewportScroller);
  year = new Date().getFullYear();

  constructor() {
    this.scroller.setOffset(() => {
      const header = document.querySelector('.app-header');
      const headerHeight = header ? header.getBoundingClientRect().height : 70;
      return [0, headerHeight + 24];
    });
  }
}
