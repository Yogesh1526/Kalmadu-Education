import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslationService, Language } from '../../services/translation.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  openDropdown: string | null = null;
  currentLanguage: Language = 'en';
  isLangDropdownOpen = false;

  constructor(public translationService: TranslationService) {}

  ngOnInit() {
    this.translationService.getCurrentLanguage().subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.openDropdown = null;
    this.isLangDropdownOpen = false;
  }

  toggleDropdown(event: Event, dropdownName: string) {
    event.preventDefault();
    this.openDropdown = this.openDropdown === dropdownName ? null : dropdownName;
  }

  isDropdownOpen(dropdownName: string): boolean {
    return this.openDropdown === dropdownName;
  }

  toggleLangDropdown(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.isLangDropdownOpen = !this.isLangDropdownOpen;
  }

  switchLanguage(lang: Language) {
    this.translationService.setLanguage(lang);
    this.isLangDropdownOpen = false;
    this.closeMenu();
  }

  getLanguageName(lang: Language): string {
    return lang === 'en' ? 'English' : 'मराठी';
  }
}

