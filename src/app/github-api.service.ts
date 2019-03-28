import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  baseUrl:string = 'https://api.github.com/repos/';
  constructor(private httpClient: HttpClient) { }  
  get_react(){
    return this.httpClient.get(this.baseUrl + 'facebook/react');
  }

  get_angular(){
    return this.httpClient.get(this.baseUrl + 'angular/angular');
  }

  get_vue(){
    return this.httpClient.get(this.baseUrl + 'vuejs/vue');
  }

}
