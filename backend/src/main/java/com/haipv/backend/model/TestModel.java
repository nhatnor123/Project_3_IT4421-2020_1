package com.haipv.backend.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.ZonedDateTime;

@Entity
@Table(name = "test")
@Getter
@Setter
public class TestModel {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name", length = 300)
    private String name;

    @Column(name = "age")
    private int age;

    @Column(name = "createdAt")
    private ZonedDateTime createdAt;

    @Column(name = "isActive")
    private Boolean isActive;
}
