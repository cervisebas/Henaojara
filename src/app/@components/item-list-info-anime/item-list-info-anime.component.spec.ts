import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListInfoAnimeComponent } from './item-list-info-anime.component';

describe('ItemListInfoAnimeComponent', () => {
  let component: ItemListInfoAnimeComponent;
  let fixture: ComponentFixture<ItemListInfoAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemListInfoAnimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListInfoAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
