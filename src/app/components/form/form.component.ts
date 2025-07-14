import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INew } from '../../interfaces/inew.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  newNoticia: INew = { title: "", body: "", url: "", date: "" }
  @Output() noticiaEmitida: EventEmitter<INew> = new EventEmitter()

  //funcion de click del formulario
  guardarNoticia(): void {
    if (this.newNoticia.title !== "" && this.newNoticia.body !== "" && this.newNoticia.date !== "" && this.newNoticia.url !== "") {
      //enviaremos al padre la noticia
      this.noticiaEmitida.emit(this.newNoticia)
      this.newNoticia = { title: "", body: "", url: "", date: "" };
    } else {
      Swal.fire({
        title: "Campos Obligatorios",
        text: "Debes rellenar todos los campos",
        icon: "error"
      });
    }
  }
}
