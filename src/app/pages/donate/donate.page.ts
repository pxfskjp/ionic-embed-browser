import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.page.html',
  styleUrls: ['./donate.page.scss'],
})
export class DonatePage implements OnInit {

  data = {};

  constructor() { 
    this.data = {
      title: "Donate",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor blanditiis ratione soluta accusamus reiciendis est quibusdam natus culpa maiores tempore asperiores obcaecati inventore vitae, consequuntur tempora assumenda ex sequi minus.",
      image: "assets/imgs/background/donate.jpeg",
      sub_desc: "Donar ahora"
    }
  }

  ngOnInit() {
  }

}
