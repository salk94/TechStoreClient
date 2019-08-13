import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduttoreListComponent } from './produttore-list.component';

describe('ProduttoreListComponent', () => {
  let component: ProduttoreListComponent;
  let fixture: ComponentFixture<ProduttoreListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduttoreListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduttoreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
