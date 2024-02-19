import { create } from 'zustand';

interface UrlParamsStoreState {
  urlParams: string;
  interfaceLangValue: string;
  intefaceLangStatus: boolean;
  geoValue: string;
  geoStatus: boolean;
  contentLangValue: string,
  contentLangStatus: boolean,
}

interface UrlParamsStoreActions {
  updateUrlParams: (newUrl: string) => void;
  updateInterfaceLangValue: (newValue: string) => void;
  updateInterfaceLangStatus: () => void;
  updateGeoValue: (newValue: string) => void;
  updateGeoStatus: () => void;
  updateContentLangValue: (newValue: string) => void;
  updateContentLangStatus: () => void;
}

export type UrlParamsStore = UrlParamsStoreState & UrlParamsStoreActions;

export const useUrlParamsStore = create<UrlParamsStore>((set, get) => ({
  // Основний url
  urlParams: '',
  updateUrlParams: (newUrlParams: string) => set(() => ({ urlParams: newUrlParams })),
  // Мова інтерфейсу
  interfaceLangValue: '&hl=ru',
  intefaceLangStatus: false,
  updateInterfaceLangValue: (newValue: string) => {
    set(() => ({ interfaceLangValue: newValue }));
    combiDorks(get);
  },
  updateInterfaceLangStatus: () => {
    set((state) => ({ intefaceLangStatus: !state.intefaceLangStatus }));
    combiDorks(get);
  },
  // Локація результатів пошуку
  geoValue: '&gl=ru',
  geoStatus: false,
  updateGeoValue: (newValue: string) => {
    set(() => ({ geoValue: newValue }));
    combiDorks(get);
  },
  updateGeoStatus: () => {
    set((state) => ({ geoStatus: !state.geoStatus }));
    combiDorks(get);
  },
  // Мова контенту результатів пошуку
  contentLangValue: '&lr=lang_ru',
  contentLangStatus: false,
  updateContentLangValue: (newValue: string) => {
    set(() => ({ contentLangValue: newValue }));
    combiDorks(get);
  },
  updateContentLangStatus: () => {
    set((state) => ({ contentLangStatus: !state.contentLangStatus }));
    combiDorks(get);
  },
}));

function combiDorks(get: () => UrlParamsStore) {
  const { interfaceLangValue, intefaceLangStatus, geoValue, geoStatus, contentLangValue, contentLangStatus, updateUrlParams } =
    get();
  const statuses = [intefaceLangStatus,geoStatus, contentLangStatus];
  const texts = [interfaceLangValue, geoValue, contentLangValue];

  let combinedText = '';
  for (let index = 0; index < statuses.length; index++) {
    if (statuses[index]) {
      combinedText += texts[index];
    }
  }
  updateUrlParams(combinedText.trim());
}
