import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ILibro } from '../../interfaces/ilibro';


@Component({
  selector: 'app-blog',
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})

export class BlogComponent {
  newLibro: ILibro = { titulo: '', autor: '', url: '', descripcion: '', fechaPublicacion: ''}
  @Output() formularioEnviado: EventEmitter<ILibro> = new EventEmitter();
  @Input() listaLibros: ILibro[] = []
  libros: string = ""

  ngOnInit() {
    this.mostrar()
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['listaLibros']) {
      this.mostrar();
    }
  }

  agregar() {
    if (!this.newLibro.titulo || !this.newLibro.autor || !this.newLibro.url || !this.newLibro.descripcion || !this.newLibro.fechaPublicacion) {
      alert("Todos los campos son obligatorios");
      return;
    }

    this.formularioEnviado.emit(this.newLibro)
    this.newLibro = { titulo: '', autor: '', url: '', descripcion: '', fechaPublicacion: ''}
    this.mostrar()
  }
  
  
  mostrar() {
    this.libros = ""
    this.listaLibros.forEach((libro: ILibro) => {
      this.libros += 
      `<figure class="libro"> 
        <img src="${libro.url}" alt="${libro.titulo}"> 
        <h3>${libro.titulo}</h3>
        <p>Autor: <strong>${libro.autor}</strong></p>
        <p>Descripción: ${libro.descripcion}</p>
        <p>Fecha de publicación: <em>${libro.fechaPublicacion}</em></p>
      </figure>`
    })
  }

}