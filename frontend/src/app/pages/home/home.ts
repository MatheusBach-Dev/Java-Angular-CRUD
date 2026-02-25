import { Component, OnInit} from '@angular/core';
import { ComidaService } from '../../services/comida';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit{
  comidas: any [] = [];

  constructor(private comidaService: ComidaService) {}

  ngOnInit(){
    this.listar();
  }

  listar(){
    this.comidaService.listar().subscribe({
      next: (dados) => {
        this.comidas = dados as any[];
      }
    })
  }

  deletar(id: number){
    this.comidaService.deletar(id).subscribe({
      next: (dados) => {
        console.log('Comida deletada com sucesso!', dados);
        this.listar(); //atualiza a lista
      },
      error: (erro) => {
        console.error('Erro ao deletar comida:', erro);
      }
    })
  }

}
