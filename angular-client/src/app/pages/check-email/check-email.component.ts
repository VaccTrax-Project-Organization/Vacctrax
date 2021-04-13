import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-email',
  templateUrl: './check-email.component.html',
  styleUrls: ['./check-email.component.scss']
})
export class CheckEmailComponent implements OnInit {
  public email: string;
  constructor(private router: Router) {
    this.email = this.router.getCurrentNavigation()?.extras?.state?.email;
  }

  public ngOnInit(): void {
    // I didn't want to add a route guard for something so small, 
    // if the user manually enters the /checkEmail view, it will redirect them to the homepage
    if (!this.email) {
      this.router.navigateByUrl('/');
    }
  }

}
