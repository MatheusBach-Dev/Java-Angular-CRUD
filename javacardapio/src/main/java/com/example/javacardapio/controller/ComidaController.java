package com.example.javacardapio.controller;

import org.springframework.web.bind.annotation.RestController;
import com.example.javacardapio.Comida.Comida;
import com.example.javacardapio.Comida.ComidaRepository;
import com.example.javacardapio.Comida.ComidaRequestDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;
import com.example.javacardapio.Comida.ComidaResponseDTO;

@RestController
@RequestMapping("comida")

public class ComidaController {

    @Autowired // Injeção de dependencia
    private ComidaRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*") // configuração de API
    @PostMapping
    public void saveComida(@RequestBody ComidaRequestDTO data) {
        Comida comidaData = new Comida(data);
        repository.save(comidaData);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*") // depois vou editar
    @GetMapping
    public List<ComidaResponseDTO> getAll() {
        List<ComidaResponseDTO> comidaList = repository.findAll().stream().map(ComidaResponseDTO::new).toList();
        return comidaList;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
