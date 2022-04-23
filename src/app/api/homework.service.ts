import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class ServiceHomeworkService {
    
    public url:string;
    
    constructor(private httpClient: HttpClient) { 
        this.url = environment.url;
    }
    
    getHomeworks(){
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        return this.httpClient.get(this.url + 'v1/todos'  , { headers });
    }

    setHomeworks(data:any){
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        return this.httpClient.post(this.url + 'v1/todos', data , { headers });
    }
    
    updateHomeworks(data:any, id:string){
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        return this.httpClient.put(this.url + 'v1/todos/'+id, data , { headers });
    }
    
    deleteHomeworks(id:string){
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        return this.httpClient.delete(this.url + 'v1/todos/'+id, { headers });
    }
}