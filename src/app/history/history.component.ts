import { Component, OnInit } from '@angular/core';
import { DataBMI } from '../DataBMI';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  constructor(private userDataService: UserDataService) {}

  userHistoryBMI: DataBMI[];
  ngOnInit() {
    this.userHistoryBMI = this.userDataService.getUserHistory();
  }
}
