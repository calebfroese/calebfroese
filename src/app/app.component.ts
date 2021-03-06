import { HostBinding, HostListener, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @HostBinding('class')
  get pageClass() {
    return 'page' + this.pageNumber;
  }
  @HostListener('transitionend', ['$event'])
  animend(event) {
    this.scrolling = false;
  }
  @HostListener('wheel', ['$event'])
  scroll({ deltaY }: any) {
    if (this.scrolling) return;
    if (deltaY > 0) {
      this.pageUp();
    } else {
      this.pageDown();
    }
  }

  scrolling: boolean;
  pageAmount = 0;
  pageNumber: number = 0;

  page(num: number) {
    this.pageNumber = num;
  }
  pageUp() {
    if (this.pageNumber >= this.pageAmount) return;
    this.scrolling = true;
    this.pageNumber++;
  }

  pageDown() {
    if (this.pageNumber <= 0) return;
    this.scrolling = true;
    this.pageNumber--;
  }
}
