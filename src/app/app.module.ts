import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

// component
import { NavigationbarComponent } from './components/navigationbar/navigationbar.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DialogueComponent } from './components/dialogue/dialogue.component';
import { MattableComponent } from './components/mattable/mattable.component';
import { TableComponent } from './components/table/table.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


// ts imports
import { appRouter } from './app.routing';
import { ToastModule } from './toast/toast.module';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationbarComponent,
    MattableComponent,
    DialogueComponent,
    TableComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    appRouter,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogueComponent]
})
export class AppModule { }
