import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, shareReplay } from 'rxjs';
import { Pattern, Profile, Project, StackColumn } from './models';

interface Db {
  profile: Profile;
  projects: Project[];
  architecture: Pattern[];
  techStack: StackColumn[];
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);

  private db$ = this.http.get<Db>('db.json').pipe(shareReplay(1));

  getProfile(): Observable<Profile> { return this.db$.pipe(map(d => d.profile)); }
  getProjects(): Observable<Project[]> { return this.db$.pipe(map(d => d.projects)); }
  getProject(slug: string): Observable<Project | undefined> {
    return this.db$.pipe(map(d => d.projects.find(p => p.slug === slug)));
  }
  getArchitecture(): Observable<Pattern[]> { return this.db$.pipe(map(d => d.architecture)); }
  getTechStack(): Observable<StackColumn[]> { return this.db$.pipe(map(d => d.techStack)); }
}