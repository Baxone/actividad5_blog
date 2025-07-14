import { Component, Input } from '@angular/core';
import { INew } from '../../interfaces/inew.interface';

@Component({
  selector: 'app-new-card',
  imports: [],
  templateUrl: './new-card.component.html',
  styleUrl: './new-card.component.css'
})
export class NewCardComponent {
  @Input() noticia: INew = { title: "", body: "", url: "", date: "" }
}
