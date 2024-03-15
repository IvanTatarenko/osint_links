import { ValidationStatus } from '../stores/Dork.store';

export function siteValidation(url: string): ValidationStatus {
  // костиль
  if (url === '') {
    return ValidationStatus.true;
  }
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' +
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
    'i',
  );
  if (pattern.test(url)) {
    return ValidationStatus.true;
  } else {
    return ValidationStatus.false;
  }
}
