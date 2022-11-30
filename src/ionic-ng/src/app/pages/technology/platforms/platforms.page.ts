import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-platforms',
  templateUrl: './platforms.page.html',
  styleUrls: ['./platforms.page.scss'],
})
export class PlatformsPage implements OnInit {

  constructor(private metaService: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Technology Platforms');

    this.metaService.updateTag(
      {
        name: 'description',
        content: 'Technology platforms enable associates within an organization to build and deliver value',
      },
      'name=description'
    );

    this.metaService.updateTag(
      {
        name: 'keywords',
        content: 'technology,platforms,platform engineering',
      },
      'name=keywords'
    );
  }
}
