import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUnicornComponent } from './show-unicorn.component';

describe('ShowUnicornComponent', () => {
  let component: ShowUnicornComponent;
  let fixture: ComponentFixture<ShowUnicornComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowUnicornComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUnicornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
