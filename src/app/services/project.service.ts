import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../model/project.interface';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private url = environment.apiUrl;

  constructor(private _http: HttpClient) {}

  public getListProject(): Observable<Project[]> {
    return this._http.get<Project[]>(`${this.url}projects`);
  }

  public createProject(payload: Project[]): Observable<Project[]> {
    return this._http.post<Project[]>(`${this.url}/projects`, payload);
  }

  public updateProject(payload: Project[], id: number): Observable<Project[]> {
    return this._http.put<Project[]>(`${this.url}projects/${id}`, payload);
  }

  public deleteProject(id: number) {
    return this._http.delete(`${this.url}projects/${id}`);
  }
}
