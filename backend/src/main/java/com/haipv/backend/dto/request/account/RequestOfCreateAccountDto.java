package com.haipv.backend.dto.request.account;

import lombok.Getter;
import lombok.Setter;

import java.time.ZonedDateTime;

@Getter
@Setter
public class RequestOfCreateAccountDto {
    private String username;
    private String password;
    private String role;
    private String firstName;
    private String lastName;
    private String phoneNo;
    private String email;
    private Integer imageId;
    private Boolean isApproved;
    private Integer createdBy;
}
