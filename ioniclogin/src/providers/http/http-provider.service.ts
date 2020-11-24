import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {

  path : string = 'https://randomuser.me/api/?results=25';

  constructor(public http: HttpClient) { 
    console.log('Hello HtttProvider...')
  }

  loadUsers(){
    return this.http.get(this.path)
  }
}