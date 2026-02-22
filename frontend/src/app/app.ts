import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComidaService } from './services/comida';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('frontend');
  comidas: any[] = []; // nao é uma boa pratica receber esse any como parametro

  constructor(private comidaService: ComidaService){}

  ngOnInit(){
    console.log("ngOnInit rodou"); // conferindo se o ng oninit rodoou para aparecer no console do browser

    this.comidaService.listar().subscribe(dados => {

      this.comidas = dados as any[]; // this is not a good practice

      console.log(dados)
      console.log(this.comidas)
    })
  }
}
