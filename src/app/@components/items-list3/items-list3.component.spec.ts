import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsList3Component } from './items-list3.component';

describe('ItemsList3Component', () => {
  let component: ItemsList3Component;
  let fixture: ComponentFixture<ItemsList3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsList3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsList3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
