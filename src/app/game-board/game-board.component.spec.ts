import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBoardComponent } from './game-board.component';

describe('GameBoardComponent', () => {
  let component: GameBoardComponent;
  let fixture: ComponentFixture<GameBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it.each([
    [4, 10],
    [5, 13],
    [10, 16],
    [20, 20],
  ])("should change snake speed depending o score: %s", (score: number, speed: number) => {
    component.food.addScore = score;

    fixture.detectChanges();

    expect(component.snakeSpeed).toBe(speed);
  });
});
