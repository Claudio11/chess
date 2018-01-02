import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChessBoardComponent } from './presentational-components/chess-board/chess-board.component';
import { SquareComponent } from './presentational-components/square/square.component';
import { MatchRoomComponent } from './container-components/match-room/match-room.component';
import { MatchTableComponent } from './container-components/match-room/match-table/match-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ChessBoardComponent,
    SquareComponent,
    MatchRoomComponent,
    MatchTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
