import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, shareReplay } from 'rxjs';
import { ContactMessage, Pattern, Profile, Project, StackColumn } from './models';

interface Db {
  profile: Profile;
  projects: Project[];
  architecture: Pattern[];
  techStack: StackColumn[];
}

// Replace with your own form endpoint (see step 2)
const FORM_URL = 'https://formspree.io/f/YOUR_FORM_ID';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);

  // Relative URL, so it works under the /porto/ base path.
  // Angular 17: use 'assets/db.json'. Angular 18+: use 'db.json'.
  private db$ = this.http.get<Db>('db.json').pipe(shareReplay(1));

  getProfile(): Observable<Profile> { return this.db$.pipe(map(d => d.profile)); }
  getProjects(): Observable<Project[]> { return this.db$.pipe(map(d => d.projects)); }
  getProject(slug: string): Observable<Project | undefined> {
    return this.db$.pipe(map(d => d.projects.find(p => p.slug === slug)));
  }
  getArchitecture(): Observable<Pattern[]> { return this.db$.pipe(map(d => d.architecture)); }
  getTechStack(): Observable<StackColumn[]> { return this.db$.pipe(map(d => d.techStack)); }
  sendMessage(body: ContactMessage): Observable<unknown> {
    return this.http.post(FORM_URL, body);
  }
}