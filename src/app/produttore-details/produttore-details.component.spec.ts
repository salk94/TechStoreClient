import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduttoreDetailsComponent } from './produttore-details.component';

describe('ProduttoreDetailsComponent', () => {
  let component: ProduttoreDetailsComponent;
  let fixture: ComponentFixture<ProduttoreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduttoreDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduttoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
