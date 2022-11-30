import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.page.html',
  styleUrls: ['./experiences.page.scss'],
})
export class ExperiencesPage implements OnInit {

  constructor(private metaService: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Customers experience organizations digitally through experiences and journeys');

    this.metaService.updateTag(
      {
        name: 'description',
        content: 'Technology experiences or journeys provide a digital experience for customers to interface with organizations',
      },
      'name=description'
    );

    this.metaService.updateTag(
      {
        name: 'keywords',
        content: 'technology,experiences,journeys',
      },
      'name=keywords'
    );
  }
}
