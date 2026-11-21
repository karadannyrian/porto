import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { provideNzIcons } from 'ng-zorro-antd/icon';
import {
  DownloadOutline,
  ArrowRightOutline,
  ArrowLeftOutline,
  MailOutline,
  SendOutline,
  CheckCircleOutline,
  CheckOutline,
  UserOutline,
} from '@ant-design/icons-angular/icons';

registerLocaleData(en);

const icons = [
  DownloadOutline,
  ArrowRightOutline,
  ArrowLeftOutline,
  MailOutline,
  SendOutline,
  CheckCircleOutline,
  CheckOutline,
  UserOutline,
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes, withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })),
    provideAnimationsAsync(),
    provideNzI18n(en_US),
    provideNzIcons(icons),
  ],
};
