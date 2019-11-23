import { Injectable } from '@angular/core';
import { DataBMI } from './DataBMI';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  userHistoryBMI: DataBMI[] = [];

  addBMI(record: DataBMI) {
    this.userHistoryBMI.push(record);
  }

  getUserHistory(): DataBMI[] {
    return this.userHistoryBMI;
  }
}
