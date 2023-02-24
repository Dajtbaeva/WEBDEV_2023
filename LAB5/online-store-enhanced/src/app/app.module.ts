import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './components/item/item.component';
import { SearchItemsPipe } from './pipes/search-items.pipe';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [AppComponent, ItemComponent, SearchItemsPipe, ProductPageComponent, HomePageComponent, CategoriesPageComponent, NavigationComponent, ProductListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
