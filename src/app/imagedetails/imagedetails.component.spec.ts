import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagedetailsComponent } from './imagedetails.component';

describe('ImagedetailsComponent', () => {
  let component: ImagedetailsComponent;
  let fixture: ComponentFixture<ImagedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
