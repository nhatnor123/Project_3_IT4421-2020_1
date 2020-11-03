package com.haipv.backend.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.ZonedDateTime;

@Entity
@Table(name = "Profile")
@Getter
@Setter
public class Profile {
    @Id
    @Column(name = "profileId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long profileId;

    @Column(name = "name", length = 60, nullable = false)
    private String name;

    @Column(name = "age")
    private Integer age;

    @Column(name = "address", length = 100, nullable = false)
    private String address;

    @Column(name = "description", length = 1000, nullable = false)
    private String description;

    @Column(name = "isApproved", nullable = false)
    private Boolean isApproved;

    @Column(name = "isApprovedAt")
    private ZonedDateTime isApprovedAt;

    @Column(name = "isApprovedBy")
    private Integer isApprovedBy;

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
