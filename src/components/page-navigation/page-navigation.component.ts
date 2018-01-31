import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-page-nav',
  templateUrl: './page-navigation.component.html',
  styleUrls: ['./page-navigation.component.scss'],
})
export class PageNavigationComponent {
  @Output() viewPage = new EventEmitter();
}
