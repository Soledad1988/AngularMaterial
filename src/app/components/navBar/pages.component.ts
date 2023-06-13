import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit{
 
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  isLoggedIn = false;
  user:any = null;

  //constructor(public login:LoginService){}

  /*ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubjec.asObservable().subscribe(
      data => {
        this.isLoggedIn = this.login.isLoggedIn();
        this.user = this.login.getUser();
      }
    )

    public logout(){
      this.login.logout();
      window.location.reload();
    }
  }*/

}
