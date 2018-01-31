import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-page-nav',
  templateUrl: './page-navigation.component.html',
  styleUrls: ['./page-navigation.component.scss'],
})
export class PageNavigationComponent {
  @Input() pageNumber: number;
  @Output() viewPage = new EventEmitter();
}
