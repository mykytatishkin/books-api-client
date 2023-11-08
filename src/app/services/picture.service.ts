import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Picture } from '../model/picture.model';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  url: string =  "http://localhost:5221/api/pictures";

  constructor(private httpClient: HttpClient) { }

  getPictures(): Observable<any>{
    return this.httpClient.get(this.url);
  }

  getPictureById(id:number): Observable<any> {
    return this.httpClient.get(this.url + "/" + id);
  }

  addPicture(picture: Picture): Observable<any> {
    const headers = {
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Headers':'X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization,Accept, Accept-Encoding',
      'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE, PATCH, OPTIONS'
    };
    return this.httpClient.post(this.url, picture, {headers});
  }
}
