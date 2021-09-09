import { Component, OnInit } from '@angular/core';
import { RoomDetailsComponent } from '../room-details/room-details.component';
import { Observable } from 'rxjs';
import { RoomService } from '../room.service';
import {Room} from "../room";
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {

  rooms: Observable<Room[]> | undefined;

  constructor(private roomService: RoomService,
              private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.rooms = this.roomService.getRoomList();
  }
}
