import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-process',
  templateUrl: './process.page.html',
  styleUrls: ['./process.page.scss'],
})
export class ProcessPage implements OnInit {

  constructor(
    private metaService: Meta,
    private titleService: Title
  ) {
  }

  ngOnInit() {
    this.titleService.setTitle('Process');

    this.metaService.updateTag(
      {
        name: 'description',
        content: 'Organizational processes including lean and agile allow people to collaborate and use technology to deliver value',
      },
      'name=description'
    );

    this.metaService.updateTag(
      {
        name: 'keywords',
        content: 'organization,process',
      },
      'name=keywords'
    );
  }
}
