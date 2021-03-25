import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { UserService } from './../../services/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public userAuth:UserService) {
    
  }
  title = 'testAngular';
}
