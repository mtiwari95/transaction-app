import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TxnComponent } from './txn.component';

describe('TxnComponent', () => {
  let component: TxnComponent;
  let fixture: ComponentFixture<TxnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TxnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TxnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
