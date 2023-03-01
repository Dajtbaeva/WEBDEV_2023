import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumDetailsComponent } from './components/album-details/album-details.component';
import { AlbumPhotosComponent } from './components/album-photos/album-photos.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AlbumsPageComponent } from './pages/albums-page/albums-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumDetailsComponent,
    AlbumPhotosComponent,
    AlbumsComponent,
    HomePageComponent,
    AboutPageComponent,
    NavigationComponent,
    AlbumsPageComponent,
    NotFoundPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
