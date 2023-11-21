package com.study.reactTest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ReactTestApplication {

	public static void main(String[] args) {
		System.out.println("hello world1");
		SpringApplication.run(ReactTestApplication.class, args);
		System.out.println("hello world");
	}

}
