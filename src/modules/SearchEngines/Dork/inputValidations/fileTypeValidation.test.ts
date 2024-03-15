import { ValidationStatus } from '../stores/Dork.store';
import { describe, expect, test } from '@jest/globals';
import { fileTypeValidation } from './fileTypeValidation';

describe('extensionValidation', () => {
  const validExtensions = ['pdf', 'docx', 'html', 'jpeg', 'js', 'css', 'xml', 'md', 'txt', '_x'];
  
  const invalidExtensions = ['..pdf', ' doc', '.txt', 'java_script', 'verylongextension1234', '', 'a', '!@#', '123', '.md'];

  validExtensions.forEach((extension) => {
    test(`повертає true для валідного розширення: ${extension}`, () => {
      expect(fileTypeValidation(extension)).toBe(ValidationStatus.true);
    });
  });

  invalidExtensions.forEach((extension) => {
    test(`повертає false для невалідного розширення: ${extension}`, () => {
      expect(fileTypeValidation(extension)).toBe(ValidationStatus.false);
    });
  });
});
