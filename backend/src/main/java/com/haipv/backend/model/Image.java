package com.haipv.backend.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.ZonedDateTime;

@Entity
@Table(name = "Image")
@Getter
@Setter
public class Image {
    @Id
    @Column(name = "imageId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long imageId;

    @Column(name = "title", length = 150)
    private String title;

    @Column(name = "path", length = 300, nullable = false)
    private String path;

    @Column(name = "type", length = 20, nullable = false)
    private String type;

    @Column(name = "owner", nullable = false)
    private Integer owner;

    @Column(name = "isActive", nullable = false)
    private Boolean isActive;

    @Column(name = "createdAt")
    private ZonedDateTime createdAt;

    @Column(name = "createdBy")
    private Integer createdBy;
}
