package com.haipv.backend.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.ZonedDateTime;

@Entity
@Table(name = "Article")
@Getter
@Setter
public class Article {
    @Id
    @Column(name = "articleId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long articleId;

    @Column(name = "title", length = 150, nullable = false)
    private String title;

    @Column(name = "description", length = 300)
    private String description;

    @Column(name = "content", length = 2000, nullable = false)
    private String content;

    @Column(name = "author", length = 60)
    private String author;

    @Column(name = "tag", length = 40)
    private String tag;

    @Column(name = "isActive", nullable = false)
    private Boolean isActive;

    @Column(name = "createdAt")
    private ZonedDateTime createdAt;

    @Column(name = "createdBy")
    private Integer createdBy;

    @Column(name = "updatedAt")
    private ZonedDateTime updatedAt;

    @Column(name = "updatedBy")
    private Integer updatedBy;
}
