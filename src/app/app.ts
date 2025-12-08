import { Component, signal } from '@angular/core';
import { Notes } from './notes/notes'

@Component({
  selector: 'app-root',
  imports: [Notes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('quicknote');
}
