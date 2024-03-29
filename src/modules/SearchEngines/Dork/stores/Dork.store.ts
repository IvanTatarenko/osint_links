import { create } from 'zustand';
import { fileTypeValidation } from '../inputValidations/fileTypeValidation';
import { siteValidation } from '../inputValidations/siteValidation';

export enum ValidationStatus {
  true = '',
  false = 'error',
}

interface DorkStoreState {
  searchWithDork: string;
  searchText: string;
  exactSearchStatus: boolean;
  inUrlText: string;
  inUrlStatus: boolean;
  inUrlValidationStatus: ValidationStatus;
  titleText: string;
  titleStatus: boolean;
  titleValidationStatus: ValidationStatus;
  siteText: string;
  siteStatus: boolean;
  siteValidationStatus: ValidationStatus;
  fileText: string;
  fileStatus: boolean;
  fileValidationStatus: ValidationStatus;
}

interface DorkStoreActions {
  updateSearchWithDork: (newText: string) => void;
  updateSearchText: (newText: string) => void;
  toggleExactSearchStatus: () => void;
  updateInUrlText: (newText: string) => void;
  toggleInUrlStatus: () => void;
  updateTitleText: (newText: string) => void;
  toggleTitleStatus: () => void;
  updateSiteText: (newText: string) => void;
  toggleSiteStatus: () => void;
  updateFileText: (newText: string) => void;
  toggleFileStatus: () => void;
}

export type DorkStore = DorkStoreState & DorkStoreActions;

export const useDorkStore = create<DorkStore>((set, get) => ({
  // Всі дорки разом
  searchWithDork: '',
  updateSearchWithDork: (newText: string) => set(() => ({ searchWithDork: newText })),
  // Головний пошуковий запит
  searchText: '',
  updateSearchText: (newText: string) => {
    set(() => ({ searchText: '' + newText }));
    combiDorks(get);
  },
  // Точний пошук
  exactSearchStatus: false,
  toggleExactSearchStatus: () => {
    set((state) => ({ exactSearchStatus: !state.exactSearchStatus }));
    combiDorks(get);
  },
  // Пршук тексту в url
  inUrlText: '',
  inUrlStatus: false,
  inUrlValidationStatus: ValidationStatus.true,
  updateInUrlText: (newText: string) => {
    set(() => ({ inUrlText: 'inurl:' + newText }));
    combiDorks(get);
  },
  toggleInUrlStatus: () => {
    set((state) => ({ inUrlStatus: !state.inUrlStatus }));
    combiDorks(get);
  },
  // Пошук тексту в title
  titleText: '',
  titleStatus: false,
  titleValidationStatus: ValidationStatus.true,
  updateTitleText: (newText: string) => {
    set(() => ({ titleText: 'intitle:' + newText }));
    combiDorks(get);
  },
  toggleTitleStatus: () => {
    set((state) => ({ titleStatus: !state.titleStatus }));
    combiDorks(get);
  },
  // Пошук на конкретному сайті
  siteText: '',
  siteStatus: false,
  siteValidationStatus: ValidationStatus.true,
  updateSiteText: (newText: string) => {
    set(() => ({ siteValidationStatus: siteValidation(newText) }));
    set(() => ({ siteText: 'site:' + newText }));
    combiDorks(get);
  },
  toggleSiteStatus: () => {
    set((state) => ({ siteStatus: !state.siteStatus }));
    combiDorks(get);
  },
  // Пошук по файлам
  fileText: '',
  fileStatus: false,
  fileValidationStatus: ValidationStatus.true,
  updateFileText: (newText: string) => {
    set(() => ({ fileValidationStatus: fileTypeValidation(newText) }));
    set(() => ({ fileText: 'filetype:' + newText }));
    combiDorks(get);
  },
  toggleFileStatus: () => {
    set((state) => ({ fileStatus: !state.fileStatus }));
    combiDorks(get);
  },
}));

function combiDorks(get: () => DorkStore) {
  const {
    searchText,
    inUrlStatus,
    titleStatus,
    inUrlText,
    titleText,
    siteText,
    siteStatus,
    fileText,
    fileStatus,
    exactSearchStatus,
    updateSearchWithDork,
  } = get();
  const statuses = [inUrlStatus, titleStatus, siteStatus, fileStatus];
  const texts = [inUrlText, titleText, siteText, fileText];

  let combinedText = '';
  for (let index = 0; index < statuses.length; index++) {
    if (statuses[index]) {
      combinedText += texts[index] + ' ';
    }
  }
  if (exactSearchStatus) {
    combinedText += '"' + searchText + '"';
  } else {
    combinedText += searchText;
  }

  updateSearchWithDork(combinedText.trim());
}
