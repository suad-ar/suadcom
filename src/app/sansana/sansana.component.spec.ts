import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SansanaComponent } from './sansana.component';

describe('SansanaComponent', () => {
  let component: SansanaComponent;
  let fixture: ComponentFixture<SansanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SansanaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SansanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
