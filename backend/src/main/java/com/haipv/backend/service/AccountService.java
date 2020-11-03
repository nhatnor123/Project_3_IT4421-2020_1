package com.haipv.backend.service;

import com.haipv.backend.model.Account;
import com.haipv.backend.repository.AccountRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountService {
    private AccountRepo accountRepo;

    public AccountService(AccountRepo accountRepo) {
        this.accountRepo = accountRepo;
    }

    public List<Account> getAllListAccount() {
        return this.accountRepo.getAllListAccount();
    }

    public Account create(Account account) {
        return this.accountRepo.create(account);
    }
}
