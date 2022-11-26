import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Tasks } from '../components/tasks/tasks';
import { tap } from 'rxjs/operators';

const URL = "https://6381471f786e112fe1c5fee0.mockapi.io/api/tasks";

@Injectable({
  providedIn: 'root'
})

export class TasksDataService {

  private _refresh$ = new Subject<void>();
  constructor(private http: HttpClient) { }

  public get refresh$() {
    return this._refresh$;
  }

  /**Devuelve un observable */
  public getAll(): Observable<any> {
    return this.http.get<any>(URL);
  }

  public add(tasks: Tasks) {
    return this.http.post(URL, tasks)
      .pipe(
        tap(() => {
          this._refresh$.next();
        })
      );
  }

  public delete(id: string) {
    console.log(id);
    return this.http.delete(URL + '/' + id);
  }
}
