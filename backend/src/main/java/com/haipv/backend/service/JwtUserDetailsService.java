package com.haipv.backend.service;

import com.haipv.backend.dto.request.account.RequestOfCreateAccountDto;
import com.haipv.backend.model.Account;
import com.haipv.backend.repository.AccountRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.parameters.P;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class JwtUserDetailsService implements UserDetailsService {
    private AccountRepo accountRepo;
    private PasswordEncoder passwordEncoder;

    public JwtUserDetailsService(AccountRepo accountRepo) {
        this.accountRepo = accountRepo;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Account account = accountRepo.findByUsername(username);

        if (account != null) {
            return new User(account.getUsername(), account.getPassword(), this.getAuthority(account));
        } else {
            throw new UsernameNotFoundException("username not found with username = " + username);
        }
    }

    private List getAuthority(Account account) {
        List authorities = new ArrayList();
        authorities.add(new SimpleGrantedAuthority("ROLE_" + account.getRole()));
        return authorities;
    }


    public Account save(RequestOfCreateAccountDto request) {
        Account account = new Account();

        account.setUsername(request.getUsername());
        account.setPassword(passwordEncoder.encode(request.getPassword()));
        account.setRole(request.getRole());
        account.setFirstName(request.getFirstName());
        account.setLastName(request.getLastName());
        account.setPhoneNo(request.getPhoneNo());
        account.setEmail(request.getEmail());
        account.setImageId(request.getImageId());
        account.setIsApproved(request.getIsApproved());
        account.setCreatedBy(request.getCreatedBy());
        account.setUpdatedBy(request.getCreatedBy());
        account.setIsActive(true);

        return this.accountRepo.create(account);
    }
}
