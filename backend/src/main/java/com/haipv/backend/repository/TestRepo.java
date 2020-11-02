package com.haipv.backend.repository;

import com.haipv.backend.model.TestModel;
import com.haipv.backend.util.DateTimeUtil;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.List;

@Repository
public class TestRepo {
    @PersistenceContext
    private EntityManager entityManager;

    public List<TestModel> getAllListTest() {
        String queryString = "select * from test";
        Query query = entityManager.createNativeQuery(queryString, TestModel.class);
        return query.getResultList();
    }

    @Transactional(rollbackFor = Exception.class)
    public TestModel create(TestModel testModel) {
        testModel.setCreatedAt(DateTimeUtil.currentVNTime());
        testModel.setIsActive(true);
        entityManager.persist(testModel);
        return testModel;
    }

}
