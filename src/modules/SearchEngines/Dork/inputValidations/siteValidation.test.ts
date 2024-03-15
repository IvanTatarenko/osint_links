import { ValidationStatus } from '../stores/Dork.store';
import { siteValidation } from './siteValidation';
import { describe, expect, test } from '@jest/globals';

describe('urlValidation', () => {
  const validUrls = [
    '',
    'https://example.com',
    'http://example.com',
    'https://www.example.com',
    'http://www.example.com',
    'https://example.com/path',
    'http://example.com/path',
    'https://example.com/path/subpath',
    'http://example.com/path/subpath',
    'https://example.com?query=param',
    'http://example.com?query=param',
    'https://example.com#anchor',
    'http://example.com#anchor',
    'https://example.com/path?query=param&another=param2',
    'http://example.com/path?query=param&another=param2',
    'https://example.com:8080',
    'http://example.com:8080',
    'https://example.com/path/subpath?query=param&another=param#anchor',
    'example.com/path?query=param',
    'www.example.com',
    'example.com',
  ];

  const invalidUrls = [
    'justastring',
    'http://',
    'https://',
    'http:/example.com',
    'https:/example.com',
    'http:example.com',
    'https:example.com',
    '://example.com',
    'ftp://example.com',
    'sftp://example.com',
    '//example.com',
    '///example.com/path',
    '/example.com',
    '/example/path',
    '?query=param',
    '#anchor',
  ];

  validUrls.forEach((url: string) => {
    test(`повертає true для валідного URL: ${url}`, () => {
      expect(siteValidation(url)).toBe(ValidationStatus.true);
    });
  });

  invalidUrls.forEach((url: string) => {
    test(`повертає false для невалідного URL: ${url}`, () => {
      expect(siteValidation(url)).toBe(ValidationStatus.false);
    });
  });
});
