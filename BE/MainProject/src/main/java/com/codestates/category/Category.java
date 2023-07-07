package com.codestates.category;

import com.codestates.artist.Artist;
import com.codestates.performance.Performance;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "CATEGORY")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "category_id", nullable = false, unique = true, updatable = false)
    private long categoryId;
    @Column(name = "category", nullable = false, unique = true, updatable = false)
    private String category;

    @JsonManagedReference
    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
    private List<Artist> artists;


    public Category(String category)
    {this.category = category;}

}
