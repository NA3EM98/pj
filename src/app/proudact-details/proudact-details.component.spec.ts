import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProudactDetailsComponent } from './proudact-details.component';

describe('ProudactDetailsComponent', () => {
  let component: ProudactDetailsComponent;
  let fixture: ComponentFixture<ProudactDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProudactDetailsComponent]
    });
    fixture = TestBed.createComponent(ProudactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
