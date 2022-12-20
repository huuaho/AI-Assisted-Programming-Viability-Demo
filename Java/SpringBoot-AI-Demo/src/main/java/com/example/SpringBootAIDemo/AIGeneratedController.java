package com.example.SpringBootAIDemo; // This line is written by a human
///A RestController for our springboot application that will handle all the requests - this line is written by a human

import org.springframework.web.bind.annotation.RestController; // - This line is written by a human
import org.springframework.web.bind.annotation.RequestMapping;
@RestController
public class AIGeneratedController {
    //A ping request to check if the server is up and running - This line is written by a human
    @RequestMapping("/ping")
    public String ping() {
        return "pong";
    }

    //A get request that returns an 2d array of numerical data for the frontend application to consume - This line is written by a human
    @RequestMapping("/getdata")
    public double[][] getData() {
        double[][] data = new double[100][2];
        for (int i = 0; i < 100; i++) {
            data[i][0] = i;
            data[i][1] = Math.sin(i);
        }
        return data;
    }
}