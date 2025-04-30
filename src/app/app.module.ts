import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { KtdGridModule } from '@katoid/angular-grid-layout';

@NgModule({
  declarations: [AppComponent, ProjectsComponent],
  imports: [BrowserModule, KtdGridModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
