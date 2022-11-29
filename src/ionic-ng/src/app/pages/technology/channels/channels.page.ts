import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }
}
