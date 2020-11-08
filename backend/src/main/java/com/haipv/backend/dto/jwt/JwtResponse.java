package com.haipv.backend.dto.jwt;

public class JwtResponse {
    private final String jwtToken;

    public JwtResponse(String jwtToken) {
        this.jwtToken = jwtToken;
    }

    public String getToke() {
        return this.jwtToken;
    }
}
