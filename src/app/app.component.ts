import { Component } from '@angular/core';
import { lorem } from 'faker';
import createIpsum from 'corporate-ipsum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    randomText = createIpsum();
    enteredText = '';


    onInput(value: string) {
        this.enteredText = value;
    }

    compare(randomLetter: string, enteredLetter: string) {
        if (!enteredLetter) {
            return 'pending';
        }
        return randomLetter === enteredLetter ? 'correct' : 'incorrect';
    }
}
