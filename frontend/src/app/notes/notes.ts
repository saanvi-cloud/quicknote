import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotesService } from '../services/notes';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notes.html',
  styleUrl: './notes.css',
})
export class Notes implements OnInit {

  noteText: string = '';
  notes: any[] = [];

  constructor(private notesService: NotesService) {}

  ngOnInit() {
    this.notesService.getNotes().subscribe({
      next: (data) => this.notes = data,
      error: (err) => console.error(err)
    });
  }

  addNote() {
    if (!this.noteText.trim()) return;

    this.notesService.addNote(this.noteText).subscribe({
      next: (note) => {
        this.notes = [...this.notes, note];
        this.noteText = '';
      },
      error: (err) => console.error(err)
    });
  }

  deleteNote(id: string) {
    this.notesService.deleteNote(id).subscribe({
      next: () => {
        this.notes = this.notes.filter(note => note._id !== id);
      },
      error: (err) => console.error(err)
    });
  }
}
