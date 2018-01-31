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
  scrolling: boolean;
  pageNumber: number = 0;
  @HostListener('window:animationend', ['$event'])
  animend(event) {
    console.log(event);
  }
  @HostListener('window:wheel', ['$event'])
  scroll({ deltaY }: any) {
    if (this.scrolling) return;
    if (deltaY > 0) {
      this.page(true);
    } else {
      this.page(false);
    }
  }
  page(page: boolean) {
    this.scrolling = true;
    this.pageNumber = page ? 1 : 0;
    this.scrolling = false;
  }
}
