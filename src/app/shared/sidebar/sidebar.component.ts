import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  get historial(){
    return this.gifsService.historial;
  }

  buscar(gif : string){
    return this.gifsService.buscarGifs(gif);
  }

  constructor(private gifsService : GifsService) {}

}
