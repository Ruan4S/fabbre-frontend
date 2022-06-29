import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';

import { MaterialModule } from '@app/material.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { GithubSvgComponent } from './components/svgs/github-svg/github-svg.component';
import { EmailSvgComponent } from './components/svgs/email-svg/email-svg.component';
import { LinkedinSvgComponent } from './components/svgs/linkedin-svg/linkedin-svg.component';
import { LogoComponent } from './components/logo/logo.component';
import { ThemeComponent } from './components/theme/theme.component';
import { AbreviacaoComponent } from './components/abreviacao/abreviacao.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [FlexLayoutModule, MaterialModule, TranslateModule, CommonModule, RouterModule],
  declarations: [
    LoaderComponent,
    HeaderComponent,
    FooterComponent,
    GithubSvgComponent,
    EmailSvgComponent,
    LinkedinSvgComponent,
    LogoComponent,
    ThemeComponent,
    AbreviacaoComponent,
  ],
  exports: [LoaderComponent, HeaderComponent, FooterComponent, AbreviacaoComponent],
})
export class SharedModule {}
