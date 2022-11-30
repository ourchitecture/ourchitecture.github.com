import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-capabilities',
  templateUrl: './capabilities.page.html',
  styleUrls: ['./capabilities.page.scss'],
})
export class CapabilitiesPage implements OnInit {
  constructor(private metaService: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Technology Capabilities');

    this.metaService.updateTag(
      {
        name: 'description',
        content: 'Technology capabilities',
      },
      'name=description'
    );

    this.metaService.updateTag(
      {
        name: 'keywords',
        content: 'technology,capabilities',
      },
      'name=keywords'
    );
  }
}
