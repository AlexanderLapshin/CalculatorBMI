import { Component, OnInit } from '@angular/core';
import { DataBMI } from '../DataBMI';
import { NgForm } from '@angular/forms';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private userDataService: UserDataService) {}
  userWeight: number = null;
  userHeight: number = null;
  userHistoryBMI: DataBMI[];
  ngOnInit() {
    this.userHistoryBMI = this.userDataService.getUserHistory();
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const index: number = +(
        this.userWeight / Math.pow(this.userHeight / 100, 2)
      ).toFixed(1);

      this.userDataService.addBMI(
        new DataBMI(this.userHeight, this.userWeight, index)
      );
      this.userHistoryBMI = this.userDataService.getUserHistory();
      let message: string;
      if (index > 25) {
        message = 'Overweight';
      } else if (index < 18.5) {
        message = 'Underweight';
      } else {
        message = 'Normal';
      }
      alert(`BMI: ${index}. ${message}`);
    }
  }
}
