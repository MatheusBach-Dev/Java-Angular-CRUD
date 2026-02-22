import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class ComidaService {
  private api = 'http://localhost:8081/comida';

  constructor(private http: HttpClient){}
  listar(){
    return this.http.get(this.api);
  }

  salvar(comida: any){
    return this.http.post(this.api, comida);
  }

  atualizar(id: number, comida: any) {
    return this.http.put(`${this.api}/${id}`, comida);
  }


  deletar(id: number){
    return this.http.delete(`${this.api}/${id}`);
  }
}
