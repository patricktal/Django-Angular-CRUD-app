import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { BlogComponent } from './blog/blog.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { TutorialDetailsComponent } from './tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './tutorials-list/tutorials-list.component';
import { AddTutorialComponent } from './add-tutorial/add-tutorial.component';

const routes: Routes = [
  { path: '', component: CrudComponent },
  { path: 'article-list', component: ArticleListComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'tutorials', component: TutorialsListComponent },
  //{ path: 'tutorials/id', component: TutorialDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
