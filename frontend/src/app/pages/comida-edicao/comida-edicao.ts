import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, Form } from '@angular/forms';
import { ComidaService } from '../../services/comida';  // Para buscar e atualizar
import { Router, RouterLink, ActivatedRoute } from '@angular/router';  // ActivatedRoute é NOVO!
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-comida-edicao',
  imports: [ReactiveFormsModule, RouterLink, NgxMaskDirective],
  providers: [provideNgxMask()],
  templateUrl: './comida-edicao.html',
  styleUrl: './comida-edicao.css',
})


export class ComidaEdicao {
  form;
  comidaId: string | null = null;

  constructor(private fb: FormBuilder,
    private comidaService: ComidaService,
    private router: Router,
    private route: ActivatedRoute) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      image: ['', Validators.required]
    });
    this.comidaId = this.route.snapshot.paramMap.get('id'); // aqui estou pegando o ID da comida
  }

  onSubmit() {
    if (this.form.invalid) {
      alert('Preencha todos os campos!');
      return;
    }

    const dados = {
      ...this.form.value,
      price: parseFloat(String(this.form.value.price || '0').replace(',', '.'))
    };

    if (this.comidaId) {
      this.comidaService.atualizar(Number(this.comidaId), dados).subscribe({
        next: () => {
          alert("Comida atualizada com sucesso!");
          this.router.navigate(['/']);
        },
        error: (err: any) => {
          console.error('Erro ao atualizar comida', err);
        }
      });
    }
  }
}
