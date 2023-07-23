package com.example.demo;

import java.io.File;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import jakarta.annotation.PostConstruct;
import net.sourceforge.tess4j.Tesseract;
import net.sourceforge.tess4j.TesseractException;

@SpringBootApplication
public class OcrTestApplication {

	public static void main(String[] args) throws TesseractException {
		SpringApplication.run(OcrTestApplication.class, args);
	
		
	}

}
