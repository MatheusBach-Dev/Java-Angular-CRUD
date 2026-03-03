# Aula 001 - Como Editar Comidas no Angular

## O que vamos fazer?

Criar a funcionalidade de **editar uma comida** no frontend Angular.

## Passo a passo:

### 1. Adicionar botão "Editar" na lista (home.html)

No arquivo `home.html`, você já tem um botão de deletar. Vamos adicionar um botão de editar ao lado dele.

O botão vai:
- Aparecer ao lado do botão deletar
- Quando clicado, levar para a página de edição
- Passar o ID da comida na URL

### 2. Criar a página de edição (comida-edit)

Vamos criar um novo componente chamado `comida-edit` que vai:
- Buscar os dados da comida pelo ID
- Mostrar um formulário preenchido com os dados atuais
- Permitir editar e salvar

### 3. Adicionar a rota

No arquivo `app.routes.ts`, vamos adicionar uma rota como:
```
/editar/:id
```

O `:id` é um parâmetro que vai receber o ID da comida.

---

## Por que fazer assim?

- **Separar edição de cadastro** deixa o código mais organizado
- **Passar o ID na URL** permite que você compartilhe o link de edição
- **Buscar os dados** garante que você está editando a comida certa

---

## Próximo passo

Vamos começar adicionando o botão "Editar" no home.html!
