import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {  
  
  constructor(private http: HttpClient) { }

  buscarStar(url: string){
    return this.http.get<any>(url);
  }

}
