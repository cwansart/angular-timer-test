import { Injectable, NgZone } from '@angular/core';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimerService {

  public triggerTime = '2020-07-27T11:31:00';

  constructor(private zone: NgZone) { }

  public init() {
    this.addMessage('initialized TimerService');
    this.zone.runOutsideAngular(() => {
      this.addMessage('running outside Angular');
      timer(new Date(this.triggerTime)).subscribe(() => {
        const now = new Date().toISOString();
        this.addMessage(`Timer called at: ${now}`);
      });
    });
  }

  private addMessage(message: string) {
    const list = document.querySelector('#list');
    const listElement = document.createElement('li');
    listElement.innerText = message;
    list.appendChild(listElement);
  }
}
