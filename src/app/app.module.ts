import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// angular material
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NavigationbarComponent } from './components/navigationbar/navigationbar.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DialogueComponent } from './components/dialogue/dialogue.component';
import { MattableComponent } from './components/mattable/mattable.component';


import { appRouter } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from './toast/toast.module';
import { TableComponent } from './components/table/table.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

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

    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogueComponent]
})
export class AppModule { }
