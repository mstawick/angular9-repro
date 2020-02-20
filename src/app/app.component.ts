import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sourcemap-bug';

  crashMe(): void {
    throw new Error('Bummer');
    // throw new Error($localize`Bummer crash?`);
  }
}
