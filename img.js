import Tesseract from 'tesseract.js';

export const readText = (imgUrl) => {
  Tesseract.recognize(imgUrl, 'eng', { logger: (m) => console.log(m) }).then(
    ({ data: { text } }) => {
      console.log(text);
    }
  );
};
