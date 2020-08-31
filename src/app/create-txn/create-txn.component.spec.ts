import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTxnComponent } from './create-txn.component';

describe('CreateTxnComponent', () => {
  let component: CreateTxnComponent;
  let fixture: ComponentFixture<CreateTxnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTxnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTxnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
