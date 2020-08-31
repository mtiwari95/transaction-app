import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTxnComponent } from './create-txn/create-txn.component';
import { TxnComponent } from './txn/txn.component';


const routes: Routes = [
  { path: 'create', component: CreateTxnComponent },
  { path: '', component: TxnComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
