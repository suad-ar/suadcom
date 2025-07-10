import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegallensComponent } from './legallens.component';

describe('LegallensComponent', () => {
  let component: LegallensComponent;
  let fixture: ComponentFixture<LegallensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegallensComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LegallensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
