import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'Madhyamik Vidyalay Kalmadu';

  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    // Initialize language on app start
    const savedLang = localStorage.getItem('language') as 'en' | 'mr';
    if (savedLang) {
      this.translationService.setLanguage(savedLang);
    }
  }
}

