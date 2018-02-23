import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class DishesService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: Http) { }

  getList():Promise<any> {
    return this.http.get(`${this.BASE_URL}/api/dishes`)
    .toPromise()
    .then((res: Response) => res.json());
  }

  getSingleEntry(entryId):Promise<any> {
    return this.http.get(`${this.BASE_URL}/api/dishes/${entryId}`)
    .toPromise()
    .then((res: Response) => res.json());
  }
}