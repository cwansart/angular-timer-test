import { Component, AfterViewInit } from '@angular/core';
import { TimerService } from './timer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  public triggerTime: string;

  constructor(private timerService: TimerService) {
    this.triggerTime = this.timerService.triggerTime;
  }

  public ngAfterViewInit() {
    this.timerService.init();
  }
}
