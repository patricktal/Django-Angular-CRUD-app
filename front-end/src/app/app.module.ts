import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CrudComponent } from './crud/crud.component';
import { BlogComponent } from './blog/blog.component';
import { HeaderComponent } from './header/header.component';
import { AddTutorialComponent } from './add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './tutorials-list/tutorials-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleDetailComponent,
    CrudComponent,
    BlogComponent,
    HeaderComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
