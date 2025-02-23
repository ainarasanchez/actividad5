import { Component } from '@angular/core';
import { BlogComponent } from "./components/blog/blog.component";
import { ILibro } from './interfaces/ilibro';

@Component({
  selector: 'app-root',
  imports: [BlogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  arrLibros: ILibro[] = [
    {titulo: "El señor de los anillos", autor: "J.R.R. Tolkien", url: "https://m.media-amazon.com/images/I/816QLZKwmIL._AC_UF894,1000_QL80_.jpg", descripcion: "Libro de fantasia", fechaPublicacion: "1954"},
    {titulo: "El Principito", autor: "Antoine de Saint-Exupéry", url: "https://m.media-amazon.com/images/I/71AVK5VIAzL._AC_UF1000,1000_QL80_.jpg", descripcion: "Cuento filosófico", fechaPublicacion: "06/04/1943"},
  ];

  nuevoLibro(event: ILibro) {
    this.arrLibros.push(event);
  }

}
