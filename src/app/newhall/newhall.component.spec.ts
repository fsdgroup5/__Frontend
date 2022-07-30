import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewhallComponent } from './newhall.component';

describe('NewhallComponent', () => {
  let component: NewhallComponent;
  let fixture: ComponentFixture<NewhallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewhallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewhallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
