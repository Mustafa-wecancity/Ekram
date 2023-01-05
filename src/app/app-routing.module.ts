import { BranchModuleModule } from './pages/branch-module/branch-module.module';
import { NewsModuleModule } from './pages/news-module/news-module.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'project',
    loadChildren: () => import('../app/pages/project-module/project-module.module').then(m => m.ProjectModuleModule)
  },
  {
    path: 'news',
    loadChildren: () => import('../app/pages/news-module/news-module.module').then(m => m.NewsModuleModule)
  },
  {
    path: 'branch',
    loadChildren: () => import('../app/pages/branch-module/branch-module.module').then(m => m.BranchModuleModule)
  },
  {
    path: 'events',
    loadChildren: () => import('../app/pages/event-module/event-module.module').then(m => m.EventModuleModule)
  },
  {
    path:"**",
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
