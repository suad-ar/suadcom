import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatorealityComponent } from './satoreality.component';

describe('SatorealityComponent', () => {
  let component: SatorealityComponent;
  let fixture: ComponentFixture<SatorealityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SatorealityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SatorealityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
