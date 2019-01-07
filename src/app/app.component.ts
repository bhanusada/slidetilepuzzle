import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'slidepuzzle';
  numofboxes = new Array<number>(25);
  vboxpos = 24;
  coordinates = new Map();

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    this.movebox(event.keyCode);
  }

  ngOnInit() {

    this.coordinates.set('x', 5);
    this.coordinates.set('y', 5);

    for (let i = 0; i < this.numofboxes.length - 1; i++) {
      this.numofboxes[i] = i + 1;
    }

    this.numofboxes.sort( function() { return Math.random() - 0.5; });

    console.log(this.numofboxes);
    console.log(this.coordinates);
  }

  movebox(key: number) {
    let x = this.coordinates.get('x');
    let y = this.coordinates.get('y');
    let index = 0;
    const temp = this.numofboxes;
    switch (key) {
      case 37: {
        console.log('left');
        x = x + 1;
        if ( x <= 5 ) {
          console.log('eligible');
          this.coordinates.set('x', x);
        }
        break;
      }
      case 38: {
        console.log('up');
        y = y + 1;
        if (y <= 5) {
          this.coordinates.set('y', y);
        }
        break;
      }
      case 39: {
        console.log('right');
        x = x - 1;
        if (x >= 1) {
          this.coordinates.set('x', x);
        }
        break;
      }
      case 40: {
        console.log('down');
        y = y - 1;
        if (y >= 1) {
          this.coordinates.set('y', y);
        }
        break;
      }
      default: {
        console.log('Others');
      }
    }
    x = this.coordinates.get('x');
    y = this.coordinates.get('y');
    for (let i = 1; i < y; i++) {
      index = index + 5;
    }
    index = index + x;
    console.log('x', x);
    console.log('y', y);
    console.log(index);
    temp[this.vboxpos] = this.numofboxes[index - 1];
    this.vboxpos = index - 1;
    this.numofboxes = temp;
  }

}
