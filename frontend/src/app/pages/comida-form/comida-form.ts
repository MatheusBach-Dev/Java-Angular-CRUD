import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ComidaService } from '../../services/comida';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comida-form',
  imports: [ReactiveFormsModule],
  templateUrl: './comida-form.html',
  styleUrl: './comida-form.css',
})
export class ComidaForm {
  form;

  constructor(
    private fb: FormBuilder,
    private comidaService: ComidaService,
    private router: Router
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  onSubmit() {
    this.comidaService.salvar(this.form.value).subscribe({
      next: (retorno) => {
        alert("Comida cadastrada com sucesso!")
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Erro ao salvar comida', err);
      }
    })
  }

  // onFileSelected(event: any) {
  //   const file: File = event.target.files[0];

  //   if (file) {
  //     const tiposPermitidos = ['image/jpeg', 'image/png'];

  //     if (!tiposPermitidos.includes(file.type)) {
  //       alert('São permitidos apenas imagens JPEG ou PNG');
  //       return;
  //     }
  //   }
  //   const reader = new FileReader(); se quiser usar como aruivo para adicionar
  //   reader.onload = () => {          nao a URL, é so desmarcar essa parte
  //     this.form.patchValue({
  //       image: reader.result as string
  //     });
  //     reader.readAsDataURL(file);
  //   }
  // }
}
