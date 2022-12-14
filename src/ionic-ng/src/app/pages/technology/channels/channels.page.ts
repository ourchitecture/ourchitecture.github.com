import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.page.html',
  styleUrls: ['./channels.page.scss'],
})
export class ChannelsPage implements OnInit {
  content = `
## Channels

Examples of digital channels include:

- Chat
- E-mail
- Native Device Applications (including Mobile)
- Social Media
- Voice
- Web
`;

  constructor(private metaService: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Technology Channels');

    this.metaService.updateTag(
      {
        name: 'description',
        content: 'Technology channels',
      },
      'name=description'
    );

    this.metaService.updateTag(
      {
        name: 'keywords',
        content: 'technology,channels',
      },
      'name=keywords'
    );
  }
}
