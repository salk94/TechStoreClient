import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProduttoreComponent } from './create-produttore.component';

describe('CreateProduttoreComponent', () => {
  let component: CreateProduttoreComponent;
  let fixture: ComponentFixture<CreateProduttoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProduttoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProduttoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
