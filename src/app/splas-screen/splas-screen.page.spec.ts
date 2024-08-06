import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SplasScreenPage } from './splas-screen.page';

describe('SplasScreenPage', () => {
  let component: SplasScreenPage;
  let fixture: ComponentFixture<SplasScreenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SplasScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
