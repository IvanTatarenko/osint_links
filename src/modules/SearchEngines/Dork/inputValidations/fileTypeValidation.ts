import { ValidationStatus } from '../stores/Dork.store';

export function fileTypeValidation(value: string): ValidationStatus {
  if (value === '') {
    return ValidationStatus.true;
  }
  const isValidExtension = /^[a-zA-Z0-9_-]{2,10}$/.test(value) && !/^\d+$/.test(value);
  return isValidExtension ? ValidationStatus.true : ValidationStatus.false;
}
