import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.page.html',
  styleUrls: ['./technology.page.scss'],
})
export class TechnologyPage implements OnInit {

  constructor(private metaService: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Technology');

    this.metaService.updateTag(
      {
        name: 'description',
        content: 'Technology enables organizations to collaborate toward creating, building and delivering value',
      },
      'name=description'
    );

    this.metaService.updateTag(
      {
        name: 'keywords',
        content: 'technology,capabilities,channels,experiences,journeys,platforms',
      },
      'name=keywords'
    );
  }
}
