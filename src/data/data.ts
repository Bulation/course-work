import { LinkType } from '../types/LinkType';

export const navigationLinks: LinkType[] = [
  {
    content: 'Главная',
    address: '/',
  },
  {
    content: 'Новости',
    address: '/news',
  },
  {
    content: 'Размещение и тарифы',
    address: '/tarifs',
  },
  {
    content: 'Объявления на карте',
    address: '/ads',
    svgId: '#adsMark',
  },
  {
    content: 'Контакты',
    address: '/contacts',
  },
];

export const productsList: LinkType[] = [
  { content: 'Квартиры на сутки', address: '/flats', svgId: '#flatsMark' },
  { content: 'Коттеджи и усадьбы', address: '/cottages' },
  { content: 'Бани и Сауны', address: '/baths' },
  { content: 'Авто напрокат', address: '/cars' },
];

export const dropDownList = [
  [
    'Квартиры на сутки в Минске',
    'Квартиры на сутки в Гомеле',
    'Квартиры на сутки в Бресте',
    'Квартиры на сутки в Витебске',
    'Квартиры на сутки в Гродно',
    'Квартиры на сутки в Могилеве',
  ],
  [
    'Коттеджи и усадьбы в Минске',
    'Коттеджи и усадьбы в Гомеле',
    'Коттеджи и усадьбы в Бресте',
    'Коттеджи и усадьбы в Витебске',
    'Коттеджи и усадьбы в Гродно',
    'Коттеджи и усадьбы в Могилеве',
  ],
  [
    'Бани и сауны в Минске',
    'Бани и сауны в Гомеле',
    'Бани и сауны в Бресте',
    'Бани и сауны в Витебске',
    'Бани и сауны в Гродно',
    'Бани и сауны в Могилеве',
  ],
  [
    'Авто напрокат в Минске',
    'Авто напрокат в Гомеле',
    'Авто напрокат в Бресте',
    'Авто напрокат в Витебске',
    'Авто напрокат в Гродно',
    'Авто напрокат в Могилеве',
  ],
];

export const footerFlatsData = [
  { content: 'Квартиры в Минске', address: '/flats' },
  { content: 'Квартиры в Гомеле', address: '/flats' },
  { content: 'Квартиры в Бресте', address: '/flats' },
  { content: 'Квартиры в Витебске', address: '/flats' },
  { content: 'Квартиры в Гродно', address: '/flats' },
  { content: 'Квартиры в Могилеве', address: '/flats' },
];

export const ownerInfo = {
  name: 'ИП Шушкевич Андрей Викторович',
  regInfo: 'УНП 192602485 Минским горисполкомом 10.02.2016',
  address: '220068, РБ, г. Минск, ул. Осипенко, 21, кв.23',
  tel: '+375 29 621 48 33',
  mail: 'sdaem@sdaem.by',
  workTime: 'Режим работы: 08:00-22:00',
};

export const socials = [
  {
    url: 'instagram.com',
    src: '#inst',
  },
  {
    url: 'vk.com',
    src: '#vk',
  },
  {
    url: 'facebook.com',
    src: '#fb',
  },
  {
    url: 'viber.com',
    src: '#viber',
  },
  {
    url: 'telegram.org',
    src: '#tg',
  },
  {
    url: 'whatsapp.com',
    src: '#wa',
  },
];

export const payments = [
  {
    name: 'visa',
    src: '/img/visa.png',
  },
  {
    name: 'webpay',
    src: '/img/webpay.png',
  },
  {
    name: 'verify-visa',
    src: '/img/verifyvisa.png',
  },
  {
    name: 'master card',
    src: '/img/mastercard.png',
  },
  {
    name: 'master card secure code',
    src: '/img/securecode.png',
  },
  {
    name: 'belkart',
    src: '/img/belkart.png',
  },
];
