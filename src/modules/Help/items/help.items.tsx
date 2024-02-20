export interface HelpItem {
  title: string;
  text: string;
  anchor: string;
  childrens?: HelpItem[];
}

const helpItems: HelpItem[] = [
  {
    title: 'Дорки',
    text: `Google Dorking, також відоме як Google hacking, — це техніка, яка використовується для пошуку конкретної інформації в Google за
    допомогою розширених операторів пошуку. Ці оператори дозволяють користувачам уточнити свої пошукові запити, щоб знайти
    специфічні дані, які можуть бути не так легко знайдені через звичайний пошук. Google Dorks можуть бути використані для виявлення
    вразливих серверів, помилок у конфігурації, чутливих документів, і навіть інформації про особу.`,
    anchor: 'dorks',
    childrens: [
      {
        title: 'Пошук в URL - inurl: exapple',
        text: 'Шукає слова, які містяться в URL. Наприклад, inurl:admin покаже сторінки, URL яких містить слово "admin".',
        anchor: 'inurl',
      },
      {
        title: 'Пошук в Title сторінки',
        text: `Оператор intitle використовується для пошуку веб-сторінок, заголовки яких містять певний текст. Це корисно, коли потрібно знайти сторінки, які спеціалізуються на конкретній темі.
        Приклад:
        "intitle:рецепти борщу" знайде сторінки, заголовки яких містять слово "рецепти" та "борщу".`,
        anchor: 'intitle',
      },
      {
        title: 'Пошук по конкретному сайту',
        text: `Оператор site використовується для обмеження пошуку інформацією, доступною лише на певному веб-сайті або домені.
        Приклад:
        site:example.com знайде сторінки лише з домену example.com.`,
        anchor: 'site',
      },
      {
        title: 'Пошук по файлам',
        text: `Оператор filetype використовується для пошуку файлів певного типу. Це корисно, коли шукаєте документи, презентації, PDF-файли тощо.
        Приклад:
        filetype:pdf знайде файли у форматі P`,
        anchor: 'filetype',
      },
    ],
  },
];

export default helpItems;
