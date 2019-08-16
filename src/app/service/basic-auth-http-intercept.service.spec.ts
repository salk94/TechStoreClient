import { TestBed } from '@angular/core/testing';



describe('BasicAuthHttpInterceptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicAuthHttpInterceptService = TestBed.get(BasicAuthHttpInterceptService);
    expect(service).toBeTruthy();
  });
});
