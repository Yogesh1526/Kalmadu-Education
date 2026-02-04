import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { translations } from '../translations/translations';

export type Language = 'en' | 'mr';

type TranslationKey = keyof typeof translations.en;

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguage$ = new BehaviorSubject<Language>('en');
  private translations: { [key in Language]: { [key: string]: string } } = translations;

  constructor() {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'mr')) {
      this.currentLanguage$.next(savedLang);
    }
  }

  getCurrentLanguage(): Observable<Language> {
    return this.currentLanguage$.asObservable();
  }

  getCurrentLanguageValue(): Language {
    return this.currentLanguage$.value;
  }

  setLanguage(lang: Language) {
    this.currentLanguage$.next(lang);
    localStorage.setItem('language', lang);
    // Update document direction for RTL if needed (Marathi uses LTR)
    document.documentElement.lang = lang;
  }

  translate(key: string): string {
    const lang = this.currentLanguage$.value;
    const langTranslations = this.translations[lang];
    return (langTranslations && langTranslations[key]) || key;
  }
}

