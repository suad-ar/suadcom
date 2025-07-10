import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanasanaComponent } from './sanasana.component';

describe('SanasanaComponent', () => {
  let component: SanasanaComponent;
  let fixture: ComponentFixture<SanasanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SanasanaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SanasanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
