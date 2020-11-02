package com.haipv.backend.controller;

import com.haipv.backend.dto.request.RequestCreateNewTestDto;
import com.haipv.backend.model.TestModel;
import com.haipv.backend.service.TestService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TestController {
    private TestService testService;

    public TestController(TestService testService) {
        this.testService = testService;
    }

    @GetMapping(path = "/getAllListTest")
    public List<TestModel> getAllListTest() {
        return this.testService.getAllListTest();
    }

    @PostMapping(path = "/createNewTest")
    public @ResponseBody
    TestModel createNewTest(@RequestBody RequestCreateNewTestDto requestCreateNewTestDto) {
        TestModel test = new TestModel();
        test.setName(requestCreateNewTestDto.getName());
        test.setAge(requestCreateNewTestDto.getAge());
        return this.testService.create(test);
    }

}
