import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isOpen: boolean = false;
  navigations:any[] = [
    {
      title: "Competitions",
      path: "/competitions"
    },
    {
      title: "Members",
      path: "/members"
    }
  ]
}
