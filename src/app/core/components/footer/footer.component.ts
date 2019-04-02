import { Component, OnInit } from '@angular/core';
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faLinkedIn = faLinkedin;
  email = faEnvelope;
  
  constructor() { }

  ngOnInit() {
  }

}
