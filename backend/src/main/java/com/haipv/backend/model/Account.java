package com.haipv.backend.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.ZonedDateTime;

@Entity
@Table(name = "Account")
@Getter
@Setter
public class Account {
    @Id
    @Column(name = "accountId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long accountId;

    @Column(name = "username", length = 30, nullable = false, unique = true)
    private String username;

    @Column(name = "password", length = 40, nullable = false)
    private String password;

    @Column(name = "role", length = 40, nullable = false)
    private String role;

    @Column(name = "firstName", length = 30, nullable = false)
    private String firstName;

    @Column(name = "lastName", length = 30, nullable = false)
    private String lastName;

    @Column(name = "phoneNo", length = 15, nullable = false)
    private String phoneNo;

    @Column(name = "email", length = 40, nullable = false, unique = true)
    private String email;

    @Column(name = "imageId")
    private Integer imageId;

    @Column(name = "isApproved", nullable = false)
    private Boolean isApproved;

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
