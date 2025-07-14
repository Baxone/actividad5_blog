import { Component, Input } from '@angular/core';
import { INew } from '../../interfaces/inew.interface';
import { DatePipe } from '@angular/common';
import { NewCardComponent } from "../new-card/new-card.component";

@Component({
  selector: 'app-news-list',
  imports: [NewCardComponent],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css'
})
export class NewsListComponent {
  @Input() noticias: INew[] = []

}
