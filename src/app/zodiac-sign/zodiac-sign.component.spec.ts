import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZodiacSignComponent } from './zodiac-sign.component';

describe('ZodiacSignComponent', () => {
  let component: ZodiacSignComponent;
  let fixture: ComponentFixture<ZodiacSignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZodiacSignComponent]
    });
    fixture = TestBed.createComponent(ZodiacSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
