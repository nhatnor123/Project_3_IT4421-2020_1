package com.haipv.backend.controller;

import com.haipv.backend.dto.request.account.RequestOfCreateAccountDto;
import com.haipv.backend.model.Account;
import com.haipv.backend.service.AccountService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/account")
public class AccountController {
    private AccountService accountService;

    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping(path = "/getAllListAccount")
    public List<Account> getAllListAccount() {
        return accountService.getAllListAccount();
    }

    @PostMapping(path = "/create")
    public Account create(@RequestBody RequestOfCreateAccountDto request) {
        Account account = new Account();

        account.setUsername(request.getUsername());
        account.setPassword(request.getPassword());
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

        return accountService.create(account);

    }

}
