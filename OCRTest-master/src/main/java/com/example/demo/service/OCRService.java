package com.example.demo.service;

import java.io.File;

import org.springframework.stereotype.Service;

import net.sourceforge.tess4j.Tesseract;
import net.sourceforge.tess4j.TesseractException;

@Service
public class OCRService {
	
	
	public String extractTextFromImage(String inputFilePath) throws TesseractException {
	    Tesseract tesseract = new Tesseract();
	    // Set the path to the Tesseract installation directory (where the "tessdata" folder is located).
	    tesseract.setDatapath("C:\\Program Files\\Tesseract-OCR");

	    // Perform OCR on the input image file.
	    return tesseract.doOCR(new File(inputFilePath));
	}


}
