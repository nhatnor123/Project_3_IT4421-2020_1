package com.haipv.backend.service;

import com.haipv.backend.model.TestModel;
import com.haipv.backend.repository.TestRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestService {
    private TestRepo testRepo;

    public TestService(TestRepo testRepo) {
        this.testRepo = testRepo;
    }

    public List<TestModel> getAllListTest() {
        return this.testRepo.getAllListTest();
    }

    public TestModel create(TestModel testModel) {
        return this.testRepo.create(testModel);
    }
}
