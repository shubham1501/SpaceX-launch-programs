import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  constructor(private http: HttpClient) { }

  /**
   * @method getSpaceXdata()
   * @desc getSpaceXdata is common method getting space programs.
   * @param pageNumber :number - page number.
   */
  getSpaceXdata(filters): Observable<any> {
    return this.http.get<any>(`https://api.spaceXdata.com/v3/launches?${filters}`);
  }
}
