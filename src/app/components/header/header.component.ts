import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private navController: NavController) {}

  ngOnInit() {}

  onTitleClicked() {
    this.navController.navigateRoot('/');
  }
}
