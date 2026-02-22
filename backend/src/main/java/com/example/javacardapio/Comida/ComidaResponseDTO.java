package com.example.javacardapio.Comida;

public record ComidaResponseDTO(Long id, String title, String image, Integer price) {
    public ComidaResponseDTO(Comida comida){
        this(comida.getId(), comida.getTitle(), comida.getImage(), comida.getPrice());
    }

}
