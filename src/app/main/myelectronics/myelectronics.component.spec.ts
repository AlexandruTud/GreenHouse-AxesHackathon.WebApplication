import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyelectronicsComponent } from './myelectronics.component';

describe('MyelectronicsComponent', () => {
  let component: MyelectronicsComponent;
  let fixture: ComponentFixture<MyelectronicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyelectronicsComponent]
    });
    fixture = TestBed.createComponent(MyelectronicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
