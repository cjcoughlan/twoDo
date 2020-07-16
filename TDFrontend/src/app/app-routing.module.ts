import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListItemsComponent } from './list-items/list-items.component'
import { ListItemDetailsComponent } from './list-item-details/list-item-details.component'
import { EditListItemComponent } from './edit-list-item/edit-list-item.component'
import { AddListItemComponent } from './add-list-item/add-list-item.component'



const routes: Routes = [
  { path: 'list', component: ListItemsComponent, data: { title: 'TwoDo List'}},
  { path: 'list-item-details', component: ListItemDetailsComponent, data: { title: 'Item Details'}},
  { path: 'add-list-item', component: EditListItemComponent, data: { title: 'Add Items'}},
  { path: 'edit-list-item', component: AddListItemComponent, data: { title: 'Edit Items'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
