import { Component, OnInit } from '@angular/core';

export interface Member {
  name: string;
  picture: string;
  description: string;
  twitter: string;
  github: string;
}

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  public team: Member[] = [
    {
        name: 'Gary Großgarten',
        picture: 'https://pbs.twimg.com/profile_images/823932144473018369/vGv7gtS__400x400.jpg',
        description: 'UX Engineer',
        twitter: 'https://twitter.com/garygrossgarten',
        github: 'https://github.com/garygrossgarten'
    },
    {
        name: 'Frank Thielen',
        picture: 'https://frankthielen.de/assets/img/profile_quadrat.png',
        description: 'Software Architect & Backend Developer',
        twitter: 'https://twitter.com/frank_thi',
        github: 'https://github.com/frathi'
    },
    {
        name: 'Marc Stammerjohann',
        picture: 'https://pbs.twimg.com/profile_images/1020673483435540480/haTJfT0O_400x400.jpg',
        description: 'Full Stack Engineer',
        twitter: 'https://twitter.com/mrcjln',
        github: 'https://github.com/marcjulian'
    }
];

  constructor() { }

  ngOnInit() {
  }

}
