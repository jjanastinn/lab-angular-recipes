import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class IngredientsService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: Http) { }

  getIngredientList():Promise<any> {
    return this.http.get(`${this.BASE_URL}/api/ingredients`)
    .toPromise()
    .then((res: Response) => res.json());
  }

}
