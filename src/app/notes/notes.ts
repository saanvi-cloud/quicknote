import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notes',
  imports: [CommonModule, FormsModule],
  templateUrl: './notes.html',
  styleUrl: './notes.css',
})
export class Notes {
  noteText: string = '';
  notes: string[] = [];
  constructor() {
    const savedNotes = localStorage.getItem('notes');
    this.notes = savedNotes? JSON.parse(savedNotes): [];
  }
  addNote() {
    if (!this.noteText.trim()) return;
    this.notes.push(this.noteText);
    this.noteText = '';
    this.saveNotes();
  }
  deleteNote(index: number) {
    this.notes.splice(index, 1);
    this.saveNotes();
  }
  saveNotes() {
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }
}
