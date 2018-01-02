import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchRoomComponent } from './match-room.component';

describe('MatchRoomComponent', () => {
  let component: MatchRoomComponent;
  let fixture: ComponentFixture<MatchRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
