import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddListItemComponent } from './add-list-item/add-list-item.component';
import { EditListItemComponent } from './edit-list-item/edit-list-item.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { ListItemDetailsComponent } from './list-item-details/list-item-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AddListItemComponent,
    EditListItemComponent,
    ListItemsComponent,
    ListItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
