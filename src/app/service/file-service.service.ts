import { HttpClient,HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ifile } from '../model/ifile';

@Injectable({
  providedIn: 'root'
})
export class FileServiceService {

  private server = "http://localhost:8080";

  constructor(private http:HttpClient) { }
  
  getAllFiles(){
    return this.http.get<Ifile>(`${this.server}/allFiles`);
  }

  upload(formData:FormData){
    return this.http.post<string>(`${this.server}/upload`, formData,{
      observe:'response'
    });
  }

  
  Upload(formData: FormData): Observable<HttpEvent<string>> {
    return this.http.post<string>(`${this.server}/file/upload`, formData, {
      // reportProgress: true,
      observe: 'events'
    });
  }

}
 
