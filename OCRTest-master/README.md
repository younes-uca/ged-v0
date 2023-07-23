# OCRTest
install tesseract from this link https://github.com/UB-Mannheim/tesseract/wiki
then set the variable enviroment : TESSDATA_PREFIX for the path : C:\Program Files\Tesseract-OCR\tessdata

run the project in http://localhost:8080/api/ocr 
method "POST"
form-data -> set the two variables: 
key : DestinationLanguage  Value: eng
key : Image                Value: select your image
