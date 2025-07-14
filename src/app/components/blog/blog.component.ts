import { Component } from '@angular/core';
import { INew } from '../../interfaces/inew.interface';
import { NEWS } from '../../db/noticias.db';
import { FormsModule } from '@angular/forms';
import { FormComponent } from '../form/form.component';
import { NewsListComponent } from "../news-list/news-list.component";

@Component({
  selector: 'app-blog',
  imports: [FormsModule, FormComponent, NewsListComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  arrayNews: INew[] = NEWS

  insertarNoticia($event: INew) {
    this.arrayNews.push($event)
  }


}
