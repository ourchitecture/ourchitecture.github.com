import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.page.html',
  styleUrls: ['./technology.page.scss'],
})
export class TechnologyPage implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Technology');
  }
}
