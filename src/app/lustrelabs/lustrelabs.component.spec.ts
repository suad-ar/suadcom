import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LustrelabsComponent } from './lustrelabs.component';

describe('LustrelabsComponent', () => {
  let component: LustrelabsComponent;
  let fixture: ComponentFixture<LustrelabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LustrelabsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LustrelabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
