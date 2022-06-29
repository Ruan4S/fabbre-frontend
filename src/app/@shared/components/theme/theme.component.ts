import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
})
export class ThemeComponent implements OnInit {
  public darkActive: boolean = false;
  private darkColor: string = '#131515';

  constructor(@Inject(DOCUMENT) private readonly document: Document, private window: Window) {}

  ngOnInit(): void {
    this.window.matchMedia('(prefers-color-scheme: dark)').matches ? this.toggleTheme() : null;
  }

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
