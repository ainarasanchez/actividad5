import { Component } from '@angular/core';
import { ILibro } from '../../interfaces/ilibro';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  arrLibros: ILibro[] = [
    {titulo: "El señor de los anillos", autor: "J.R.R. Tolkien", url: "https://www.lamarmota.es/wp-content/uploads/senor-de-los-anillos.jpeg", descripcion: "Libro de fantasia", fechaPublicacion: "1954"}
    ,{titulo: "El Principito", autor: "Antoine de Saint-Exupéry", url: "https://m.media-amazon.com/images/I/71AVK5VIAzL._AC_UF1000,1000_QL80_.jpg", descripcion: "Cuento filosófico", fechaPublicacion: "06/04/1943"}
    ,{titulo: "1984", autor: "George Orwell", url: "https://m.media-amazon.com/images/I/71sOSrd+JxL._AC_UF894,1000_QL80_.jpg", descripcion: "Clásico sobre la vigilancia y el control", fechaPublicacion: "08/06/1949"}
  ]
}
