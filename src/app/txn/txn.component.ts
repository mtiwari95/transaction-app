import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { TxnService } from '../txn.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-txn',
  templateUrl: './txn.component.html',
  styleUrls: ['./txn.component.css']
})
export class TxnComponent implements OnInit {

  displayedColumns: string[] = ['date', 'description', 'credit', 'debit', 'amount'];
  datasource = new MatTableDataSource();

  constructor(private txnService: TxnService) { }

  ngOnInit() {
    this.txnService.getAllTransaction().subscribe((data: any) =>{
      this.datasource.data = data.data;
    })  
  }

}
