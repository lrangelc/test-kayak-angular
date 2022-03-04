import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineGridTileComponent } from './airline-grid-tile.component';

describe('AirlineGridTileComponent', () => {
  let component: AirlineGridTileComponent;
  let fixture: ComponentFixture<AirlineGridTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirlineGridTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlineGridTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
