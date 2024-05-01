import { Component, OnInit, ViewChild } from '@angular/core';
import {  Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  segment = 'chats';
  open_new_chat = false;
  @ViewChild('new_chat') modal!: ModalController;
  @ViewChild('popover') popover!: PopoverController
  users = [
    { id: '1', name: 'Irshad', photo: 'https://i.pravatar.cc/124' },
    { id: '2', name: 'Sreekanth', photo: 'https://i.pravatar.cc/128' },
    { id: '3', name: 'Dinil', photo: 'https://i.pravatar.cc/144' },
    { id: '4', name: 'Vaisak', photo: 'https://i.pravatar.cc/222' },
    { id: '5', name: 'Mubarak', photo: 'https://i.pravatar.cc/333' },
    { id: '6', name: 'Ibrahim', photo: 'https://i.pravatar.cc/233' },
    { id: '7', name: 'Nikhil', photo: 'https://i.pravatar.cc/444' },
    { id: '8', name: 'John', photo: 'https://i.pravatar.cc/555' },
    { id: '9', name: 'Jotheeswar', photo: 'https://i.pravatar.cc/214' },
    { id: '10', name: 'Aniket', photo: 'https://i.pravatar.cc/547' },
    { id: '11', name: 'Sunil', photo: 'https://i.pravatar.cc/248' },
    { id: '12', name: 'Kishan', photo: 'https://i.pravatar.cc/752' },

  ]
  chatRooms = [
    { id: '1', name: 'Irshad', photo: 'https://i.pravatar.cc/124' },
    { id: '2', name: 'Sreekanth', photo: 'https://i.pravatar.cc/128' },
    { id: '3', name: 'Dinil', photo: 'https://i.pravatar.cc/144' },
    { id: '4', name: 'Vaisak', photo: 'https://i.pravatar.cc/222' },
    { id: '5', name: 'Mubarak', photo: 'https://i.pravatar.cc/333' },
    { id: '6', name: 'Ibrahim', photo: 'https://i.pravatar.cc/233' },
    { id: '7', name: 'Nikhil', photo: 'https://i.pravatar.cc/444' },
    { id: '8', name: 'John', photo: 'https://i.pravatar.cc/555' },
    { id: '9', name: 'Jotheeswar', photo: 'https://i.pravatar.cc/214' },
    { id: '10', name: 'Aniket', photo: 'https://i.pravatar.cc/547' },
    { id: '11', name: 'Sunil', photo: 'https://i.pravatar.cc/248' },
    { id: '12', name: 'Kishan', photo: 'https://i.pravatar.cc/752' },
  ]
  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.popover.dismiss()
  }

  onSegmentChanged(event: any) {

  }

  newChat() {
    this.open_new_chat = true;
  }

  onWillDismiss(event: any) {

  }

  cancel() {
    this.modal.dismiss()
    this.open_new_chat = false;
  }

  startChat(event: any) {

  }

  getChat(item:any){
    this.router.navigate(['/', 'home', 'chats' ,item?.id])
  }
}
