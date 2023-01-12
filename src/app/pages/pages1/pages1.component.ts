import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pages1.component.html',
  styleUrls: ['./pages1.component.scss']
})
export class Pages1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
