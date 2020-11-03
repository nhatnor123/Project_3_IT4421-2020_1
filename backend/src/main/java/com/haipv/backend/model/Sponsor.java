package com.haipv.backend.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.ZonedDateTime;

@Entity
@Table(name = "Sponsor")
@Getter
@Setter
public class Sponsor {
    @Id
    @Column(name = "sponsorId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long sponsorId;

    @Column(name = "name", length = 100, nullable = false)
    private String name;

    @Column(name = "address", length = 100, nullable = false)
    private String address;

    @Column(name = "phoneNo", length = 15, nullable = false)
    private String phoneNo;

    @Column(name = "description", length = 1000)
    private String description;

    @Column(name = "isActive")
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
