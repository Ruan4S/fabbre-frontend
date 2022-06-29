import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Renderer2 } from '@angular/core';
import { environment } from '@env/environment';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
})
export class ThemeComponent implements OnInit {
  public darkActive: boolean = false;
  private darkColor: string = '#131515';

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  ngOnInit(): void {}

  public toggleTheme() {
    this.darkActive = !this.darkActive;

    if (this.darkActive) {
      this.document.documentElement.style.setProperty('--color-primary', this.darkColor);
      this.document.documentElement.style.setProperty('--color-secondary', '#FFFFFF');
    } else {
      this.document.documentElement.style.setProperty('--color-primary', '#FFFFFF');
      this.document.documentElement.style.setProperty('--color-secondary', this.darkColor);
    }
  }
}
