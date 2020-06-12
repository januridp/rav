import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubApiService } from './github-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title   = 'RAV'; 
  react   : any;
  angular : any;
  vue     : any;

  constructor(
    private githubApiService: GithubApiService
  ){

    this.githubApiService.get_react().subscribe((reactRes : any)=>{
      this.react = reactRes;
    });

    this.githubApiService.get_angular().subscribe((angularRes : any)=>{
      this.angular = angularRes;
    });

    this.githubApiService.get_vue().subscribe((vueRes : any)=>{
      this.vue = vueRes;
    });
  }

  ngOnInit() {
    console.log("ngOnInit!!!");
  }

  refresh(): void {
    window.location.reload();
    console.log("Refresh!!!")
  }

}
