import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ContactMessage, Pattern, Profile, Project, StackColumn } from './models';

const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(`${API}/profile`);
  }
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${API}/projects`);
  }
  getProject(slug: string): Observable<Project | undefined> {
    return this.http.get<Project[]>(`${API}/projects?slug=${encodeURIComponent(slug)}`)
      .pipe(map(list => list[0]));
  }
  getArchitecture(): Observable<Pattern[]> {
    return this.http.get<Pattern[]>(`${API}/architecture`);
  }
  getTechStack(): Observable<StackColumn[]> {
    return this.http.get<StackColumn[]>(`${API}/techStack`);
  }
  sendMessage(body: ContactMessage): Observable<ContactMessage> {
    return this.http.post<ContactMessage>(`${API}/messages`, body);
  }
}
