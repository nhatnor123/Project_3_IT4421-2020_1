package com.haipv.backend.repository;

import com.haipv.backend.model.Account;
import com.haipv.backend.util.DateTimeUtil;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.List;

@Repository
public class AccountRepo {
    @PersistenceContext
    private EntityManager entityManager;

    public List<Account> getAllListAccount() {
        String queryString = "select * from Account";
        Query query = entityManager.createNativeQuery(queryString, Account.class);
        return query.getResultList();
    }

    public Account findByUsername(String username) {
        String queryString = "select * from Account where username = :username";
        Query query = entityManager.createNativeQuery(queryString, Account.class);
        query.setParameter("username", username);
        List<Account> listAccount = query.getResultList();
        if (listAccount == null || listAccount.size() == 0) {
            return null;
        } else {
            return listAccount.get(0);
        }
    }

    @Transactional(rollbackFor = Exception.class)
    public Account create(Account account) {
        account.setCreatedAt(DateTimeUtil.currentVNTime());
        account.setUpdatedAt(DateTimeUtil.currentVNTime());
        account.setIsActive(true);
        entityManager.persist(account);
        return account;
    }

}
