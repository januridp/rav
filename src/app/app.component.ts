import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from './profile';
import { GithubApiService } from './github-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'R.A.V'; 
  private react  = [];
  private angular  = [];
  private vue  = [];

  constructor(private githubApiService: GithubApiService){

    this.githubApiService.get_react().subscribe((res : any[])=>{
      this.react = res;
    });

    this.githubApiService.get_angular().subscribe((res : any[])=>{
      this.angular = res;
    });

      this.githubApiService.get_vue().subscribe((res : any[])=>{
        this.vue = res;
      });


  }

}
