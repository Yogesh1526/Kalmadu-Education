import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { FacilitiesComponent } from './pages/facilities/facilities.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { NewsComponent } from './pages/news/news.component';
import { EventsComponent } from './pages/events/events.component';
import { AcademicsComponent } from './pages/academics/academics.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { AnnouncementsComponent } from './pages/announcements/announcements.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'facilities', component: FacilitiesComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'academics', component: AcademicsComponent },
  { path: 'curriculum', component: CurriculumComponent },
  { path: 'announcements', component: AnnouncementsComponent },
  { path: '**', redirectTo: '' }
];

