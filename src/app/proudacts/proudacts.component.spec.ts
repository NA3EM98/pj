import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProudactsComponent } from './proudacts.component';

describe('ProudactsComponent', () => {
  let component: ProudactsComponent;
  let fixture: ComponentFixture<ProudactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProudactsComponent]
    });
    fixture = TestBed.createComponent(ProudactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
