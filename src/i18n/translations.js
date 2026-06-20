// Все тексты сайта по языкам. PL — дефолтный язык бренда (Варшава).
// Бренд-имя "OG Original Grill" и адрес "Mołdawska 5/7" не переводятся —
// это собственные имена.

const pl = {
  meta: {
    title: 'OG Original Grill — Prawdziwa kuchnia gruzińska z duszą',
    description:
      'OG Original Grill — gruzińska kuchnia i szaszłyk na węglu drzewnym w Warszawie. Otwarta kuchnia, rodzinne przepisy, rzemieślnicze przyprawy.',
  },
  nav: {
    about: 'O nas',
    menu: 'Menu',
    gallery: 'Atmosfera',
    contacts: 'Kontakt',
    findUs: 'Znajdź nas',
  },
  marquee:
    'SZASZŁYK NA WĘGLU • CHACZAPURI • SATSIVI • OTWARTA KUCHNIA • Wt–Nd 12:00–22:00 • PL · EN · GE · RU •',
  hero: {
    eyebrow: 'Kuchnia gruzińska · Warszawa',
    h1Line1: 'poczuj',
    h1Span: 'żar',
    h1OG: 'OG',
    tagline: 'pysznie każdego dnia',
    lead:
      'Grill na węglu drzewnym, gruzińskie przyprawy i przepisy przekazywane w rodzinie z pokolenia na pokolenie. Kuchnia otwarta — widać, jak przygotowywany jest każdy szaszłyk.',
    ctaPrimary: 'Otwórz menu',
    ctaSecondary: 'Zarezerwuj stolik',
    metaHours: { label: 'Wt–Nd · 12:00–22:00', value: 'Kuchnia otwarta' },
    metaAddress: { label: 'Mołdawska 5/7', value: 'Warszawa, Pawilon 84' },
    metaLang: { label: 'PL · EN · GE · RU', value: 'Mówimy Twoim językiem' },
  },
  about: {
    eyebrow: 'O nas',
    h2: 'prawdziwa',
    tagline: 'kuchnia gruzińska z duszą',
    lead:
      'Od rodzinnych przepisów do rzemieślniczych przypraw — gotujemy tak, jak w domu: na węglu, bez pośpiechu, z szacunkiem do produktu.',
    stat1: { title: 'Rodzinne przepisy', desc: 'Przekazywane z pokolenia na pokolenie' },
    stat2: { title: 'Węgiel i dym', desc: 'Tylko żywy ogień, bez gazu' },
    stat3: { title: 'Kuchnia otwarta', desc: 'Widać cały proces gotowania' },
  },
  highlights: {
    eyebrow: 'Menu i serwis',
    h2: 'Wszystko jak w naszych Highlights',
    items: [
      { title: 'Lunche', desc: 'Szybki i sycący zestaw w dni powszednie' },
      { title: 'Szaszłyk', desc: 'Autorski, na węglu, jak w domu' },
      { title: 'O OG', desc: 'Historia marki i zespołu' },
      { title: 'Gości', desc: 'Opinie i wrażenia' },
      { title: 'Gdzie OG', desc: 'Mołdawska 5/7, Warszawa' },
      { title: 'Promocje', desc: 'Rabaty i oferty specjalne' },
      { title: 'Atmosfera', desc: 'Sala, mangal, otwarta kuchnia' },
    ],
    ctaTitle: 'Pełne menu',
    ctaButton: 'Zobacz PDF',
  },
  gallery: {
    eyebrow: 'Atmosfera',
    h2: 'Mangal, dym i gruziński stół',
    items: ['Mangal przy wejściu', 'Otwarta kuchnia', 'Gruzińskie przyprawy', 'Rodzinne stoły'],
  },
  info: {
    hoursLabel: 'Godziny otwarcia',
    hoursValue: 'Wt–Nd 12:00–22:00 · Pon. zamknięte',
    addressLabel: 'Adres',
    addressValue: 'Mołdawska 5/7, Pawilon nr 84, 02-127 Warszawa',
    langLabel: 'Języki',
    langValue: 'PL · EN · GE · RU — mówimy Twoim językiem',
    instaLabel: 'Instagram',
    instaValue: '@o.g_originalgrill',
    ctaLine1: 'Gotowy',
    ctaLine2: 'poczuć żar?',
    ctaText: 'Zamów dostawę do domu albo zarezerwuj stolik — kuchnia jest otwarta i czeka na Ciebie.',
    ctaPrimary: 'Zamów dostawę',
    ctaSecondary: 'Zarezerwuj stolik',
  },
  footer: {
    tagline: 'pysznie każdego dnia',
    copyright: '© 2026 OG Original Grill · Warszawa',
  },
};

const en = {
  meta: {
    title: 'OG Original Grill — Real Georgian Cuisine with Soul',
    description:
      'OG Original Grill — Georgian cuisine and charcoal-grilled shashlik in Warsaw. Open kitchen, family recipes, craft spices.',
  },
  nav: {
    about: 'About',
    menu: 'Menu',
    gallery: 'Atmosphere',
    contacts: 'Contact',
    findUs: 'Find us',
  },
  marquee:
    'CHARCOAL SHASHLIK • KHACHAPURI • SATSIVI • OPEN KITCHEN • Tue–Sun 12:00–22:00 • PL · EN · GE · RU •',
  hero: {
    eyebrow: 'Georgian cuisine · Warsaw',
    h1Line1: 'feel',
    h1Span: 'the heat',
    h1OG: 'OG',
    tagline: 'delicious every day',
    lead:
      'Charcoal grill, Georgian spices and recipes passed down through the family for generations. The kitchen is open — you can see every skewer being made.',
    ctaPrimary: 'Open the menu',
    ctaSecondary: 'Book a table',
    metaHours: { label: 'Tue–Sun · 12:00–22:00', value: 'Open kitchen' },
    metaAddress: { label: 'Mołdawska 5/7', value: 'Warsaw, Pavilion 84' },
    metaLang: { label: 'PL · EN · GE · RU', value: 'We speak your language' },
  },
  about: {
    eyebrow: 'About us',
    h2: 'real',
    tagline: 'Georgian cuisine with soul',
    lead:
      'From family recipes to craft spices — we cook the way you would at home: over charcoal, without rushing, with respect for the produce.',
    stat1: { title: 'Family recipes', desc: 'Passed down through generations' },
    stat2: { title: 'Charcoal & smoke', desc: 'Only open fire, no gas' },
    stat3: { title: 'Open kitchen', desc: 'You can see the whole process' },
  },
  highlights: {
    eyebrow: 'Menu & service',
    h2: 'Everything from our Highlights',
    items: [
      { title: 'Lunch sets', desc: 'A quick, filling set on weekdays' },
      { title: 'Shashlik', desc: 'Signature, charcoal-grilled, homestyle' },
      { title: 'About OG', desc: 'The story of the brand and the team' },
      { title: 'Guests', desc: 'Reviews and impressions' },
      { title: 'Find OG', desc: 'Mołdawska 5/7, Warsaw' },
      { title: 'Promotions', desc: 'Discounts and special offers' },
      { title: 'Atmosphere', desc: 'Dining room, grill, open kitchen' },
    ],
    ctaTitle: 'Full menu',
    ctaButton: 'View PDF',
  },
  gallery: {
    eyebrow: 'Atmosphere',
    h2: 'Charcoal, smoke and a Georgian table',
    items: ['Grill by the entrance', 'Open kitchen', 'Georgian spices', 'Family tables'],
  },
  info: {
    hoursLabel: 'Opening hours',
    hoursValue: 'Tue–Sun 12:00–22:00 · Closed Mon',
    addressLabel: 'Address',
    addressValue: 'Mołdawska 5/7, Pavilion 84, 02-127 Warsaw',
    langLabel: 'Languages',
    langValue: 'PL · EN · GE · RU — we speak your language',
    instaLabel: 'Instagram',
    instaValue: '@o.g_originalgrill',
    ctaLine1: 'Ready',
    ctaLine2: 'to feel the heat?',
    ctaText: 'Order delivery to your door or book a table — the kitchen is open and waiting for you.',
    ctaPrimary: 'Order delivery',
    ctaSecondary: 'Book a table',
  },
  footer: {
    tagline: 'delicious every day',
    copyright: '© 2026 OG Original Grill · Warsaw',
  },
};

const ru = {
  meta: {
    title: 'OG Original Grill — Настоящая грузинская кухня с душой',
    description:
      'OG Original Grill — грузинская кухня и шашлык на углях в Варшаве. Открытая кухня, семейные рецепты, крафтовые приправы.',
  },
  nav: {
    about: 'О нас',
    menu: 'Меню',
    gallery: 'Атмосфера',
    contacts: 'Контакты',
    findUs: 'Где нас найти',
  },
  marquee:
    'ШАШЛЫК НА УГЛЯХ • ХАЧАПУРИ • САЦИВИ • ОТКРЫТАЯ КУХНЯ • Вт–Нд 12:00–22:00 • PL · EN · GE · RU •',
  hero: {
    eyebrow: 'Грузинская кухня · Варшава',
    h1Line1: 'почувствуй',
    h1Span: 'жар',
    h1OG: 'OG',
    tagline: 'вкусно каждый день',
    lead:
      'Угольный гриль, грузинские специи и рецепты, которые передаются в семье из поколения в поколение. Кухня открыта — видно, как готовится каждый шашлык.',
    ctaPrimary: 'Открыть меню',
    ctaSecondary: 'Забронировать стол',
    metaHours: { label: 'Вт–Нд · 12:00–22:00', value: 'Открытая кухня' },
    metaAddress: { label: 'Mołdawska 5/7', value: 'Варшава, Pawilon 84' },
    metaLang: { label: 'PL · EN · GE · RU', value: 'Говорим на вашем языке' },
  },
  about: {
    eyebrow: 'О нас',
    h2: 'настоящая',
    tagline: 'грузинская кухня с душой',
    lead:
      'От семейных рецептов до крафтовых приправ — мы готовим так, как готовили бы дома: на углях, без спешки, с уважением к продукту.',
    stat1: { title: 'Семейные рецепты', desc: 'Передаются из поколения в поколение' },
    stat2: { title: 'Угли и дым', desc: 'Только живой огонь, без газа' },
    stat3: { title: 'Открытая кухня', desc: 'Видно весь процесс готовки' },
  },
  highlights: {
    eyebrow: 'Меню и сервис',
    h2: 'Всё как в наших Highlights',
    items: [
      { title: 'Ланчи', desc: 'Быстрый и сытный сет в будни' },
      { title: 'Шашлык', desc: 'Фирменный, на углях, по-домашнему' },
      { title: 'О OG', desc: 'История бренда и команды' },
      { title: 'Гости', desc: 'Отзывы и впечатления' },
      { title: 'Где OG', desc: 'Mołdawska 5/7, Варшава' },
      { title: 'Акции', desc: 'Скидки и спецпредложения' },
      { title: 'Атмосфера', desc: 'Зал, мангал, открытая кухня' },
    ],
    ctaTitle: 'Полное меню',
    ctaButton: 'Смотреть PDF',
  },
  gallery: {
    eyebrow: 'Атмосфера',
    h2: 'Мангал, дым и грузинский стол',
    items: ['Мангал у входа', 'Открытая кухня', 'Грузинские специи', 'Семейные столы'],
  },
  info: {
    hoursLabel: 'Часы работы',
    hoursValue: 'Вт–Нд 12:00–22:00 · Пн выходной',
    addressLabel: 'Адрес',
    addressValue: 'Mołdawska 5/7, Pawilon nr 84, 02-127 Варшава',
    langLabel: 'Языки',
    langValue: 'PL · EN · GE · RU — говорим на вашем',
    instaLabel: 'Instagram',
    instaValue: '@o.g_originalgrill',
    ctaLine1: 'Готовы',
    ctaLine2: 'почувствовать жар?',
    ctaText: 'Закажите доставку на дом или забронируйте стол — кухня открыта и ждёт вас.',
    ctaPrimary: 'Заказать доставку',
    ctaSecondary: 'Забронировать стол',
  },
  footer: {
    tagline: 'вкусно каждый день',
    copyright: '© 2026 OG Original Grill · Варшава',
  },
};

const ge = {
  meta: {
    title: 'OG Original Grill — ნამდვილი ქართული სამზარეულო სულით',
    description:
      'OG Original Grill — ქართული სამზარეულო და მწვადი ნახშირზე ვარშავაში. ღია სამზარეულო, ოჯახური რეცეპტები, ხელნაკეთი სანელებლები.',
  },
  nav: {
    about: 'ჩვენ შესახებ',
    menu: 'მენიუ',
    gallery: 'ატმოსფერო',
    contacts: 'კონტაქტი',
    findUs: 'სად ვართ',
  },
  marquee:
    'მწვადი ნახშირზე • ხაჭაპური • საცივი • ღია სამზარეულო • სამშ–კვ 12:00–22:00 • PL · EN · GE · RU •',
  hero: {
    eyebrow: 'ქართული სამზარეულო · ვარშავა',
    h1Line1: 'იგრძენი',
    h1Span: 'ცეცხლი',
    h1OG: 'OG',
    tagline: 'გემრიელად ყოველდღე',
    lead:
      'ნახშირზე შემწვარი კერძები, ქართული სანელებლები და ოჯახური რეცეპტები, რომლებიც თაობიდან თაობას გადაეცემა. სამზარეულო ღიაა — ხედავთ, როგორ მზადდება ყოველი მწვადი.',
    ctaPrimary: 'მენიუს გახსნა',
    ctaSecondary: 'მაგიდის დაჯავშნა',
    metaHours: { label: 'სამშ–კვ · 12:00–22:00', value: 'ღია სამზარეულო' },
    metaAddress: { label: 'Mołdawska 5/7', value: 'ვარშავა, პავილონი 84' },
    metaLang: { label: 'PL · EN · GE · RU', value: 'ვსაუბრობთ თქვენს ენაზე' },
  },
  about: {
    eyebrow: 'ჩვენ შესახებ',
    h2: 'ნამდვილი',
    tagline: 'ქართული სამზარეულო სულით',
    lead:
      'ოჯახური რეცეპტებიდან ხელნაკეთ სანელებლებამდე — ვამზადებთ ისე, როგორც სახლში: ნახშირზე, ნაჩქარევობის გარეშე, პროდუქტის პატივისცემით.',
    stat1: { title: 'ოჯახური რეცეპტები', desc: 'გადაეცემა თაობიდან თაობას' },
    stat2: { title: 'ნახშირი და კვამლი', desc: 'მხოლოდ ღია ცეცხლი, გაზის გარეშე' },
    stat3: { title: 'ღია სამზარეულო', desc: 'ხედავთ მთელ მომზადების პროცესს' },
  },
  highlights: {
    eyebrow: 'მენიუ და სერვისი',
    h2: 'ყველაფერი, რაც ჩვენს Highlights-შია',
    items: [
      { title: 'ლანჩები', desc: 'სწრაფი და სავარგისო კომპლექტი სამუშაო დღეებში' },
      { title: 'მწვადი', desc: 'ავტორული, ნახშირზე, შინაურულად' },
      { title: 'OG შესახებ', desc: 'ბრენდის და გუნდის ისტორია' },
      { title: 'სტუმრები', desc: 'შეფასებები და შთაბეჭდილებები' },
      { title: 'სად ვართ', desc: 'Mołdawska 5/7, ვარშავა' },
      { title: 'აქციები', desc: 'ფასდაკლებები და სპეციალური შეთავაზებები' },
      { title: 'ატმოსფერო', desc: 'დარბაზი, მანგალი, ღია სამზარეულო' },
    ],
    ctaTitle: 'სრული მენიუ',
    ctaButton: 'PDF-ის ნახვა',
  },
  gallery: {
    eyebrow: 'ატმოსფერო',
    h2: 'მანგალი, კვამლი და ქართული სუფრა',
    items: ['მანგალი შესასვლელში', 'ღია სამზარეულო', 'ქართული სანელებლები', 'ოჯახური მაგიდები'],
  },
  info: {
    hoursLabel: 'სამუშაო საათები',
    hoursValue: 'სამშ–კვ 12:00–22:00 · ორშაბათს დაკეტილია',
    addressLabel: 'მისამართი',
    addressValue: 'Mołdawska 5/7, პავილონი 84, 02-127 ვარშავა',
    langLabel: 'ენები',
    langValue: 'PL · EN · GE · RU — ვსაუბრობთ თქვენს ენაზე',
    instaLabel: 'ინსტაგრამი',
    instaValue: '@o.g_originalgrill',
    ctaLine1: 'მზად ხართ',
    ctaLine2: 'იგრძნოთ ცეცხლი?',
    ctaText: 'შეუკვეთეთ მიტანა სახლში ან დაჯავშნეთ მაგიდა — სამზარეულო ღიაა და გელოდებათ.',
    ctaPrimary: 'მიტანის შეკვეთა',
    ctaSecondary: 'მაგიდის დაჯავშნა',
  },
  footer: {
    tagline: 'გემრიელად ყოველდღე',
    copyright: '© 2026 OG Original Grill · ვარშავა',
  },
};

export const translations = { pl, en, ge, ru };

export const LANGS = [
  { code: 'pl', label: 'PL', name: 'Polski' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'ge', label: 'GE', name: 'ქართული' },
  { code: 'ru', label: 'RU', name: 'Русский' },
];

export const DEFAULT_LANG = 'pl';

// Наш внутренний код 'ge' — это сокращение бренда (как в их Instagram-био: PL · EN · GE · RU),
// но настоящий ISO 639-1 код грузинского языка — "ka" (не путать с "GE" = код страны Грузия
// по ISO 3166). Атрибут <html lang> и og:locale должны использовать именно "ka".
export const HTML_LANG = { pl: 'pl', en: 'en', ge: 'ka', ru: 'ru' };
export const OG_LOCALE = { pl: 'pl_PL', en: 'en_US', ge: 'ka_GE', ru: 'ru_RU' };
