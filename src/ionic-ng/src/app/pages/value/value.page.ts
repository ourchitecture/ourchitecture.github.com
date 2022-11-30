import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-value',
  templateUrl: './value.page.html',
  styleUrls: ['./value.page.scss'],
})
export class ValuePage implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Value');
  }
}
