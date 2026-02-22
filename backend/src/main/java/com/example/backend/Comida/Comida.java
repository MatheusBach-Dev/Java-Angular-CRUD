package com.example.backend.Comida;
// imports necessarios
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Table(name = "comida")
@Entity(name = "comidas")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")

public class Comida {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private Integer price;
    private String title;

    public Comida(ComidaRequestDTO data) {
        this.title = data.title();
        this.image = data.image();
        this.price = data.price();
    }

    @Column(columnDefinition = "TEXT")
    private String image;
}
