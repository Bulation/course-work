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

export const cities = ['Минск', 'Витебск', 'Гродно', 'Гомель', 'Брест', 'Могилев'];

export const cityOptions = cities.map((city) => ({
  value: city,
  label: city,
  key: 'city',
}));

export const roomsOptions = [
  { value: '1', label: '1-комнатные', key: 'roomsCount' },
  { value: '2', label: '2-комнатные', key: 'roomsCount' },
  { value: '3', label: '3-комнатные', key: 'roomsCount' },
  { value: '4', label: '4-комнатные', key: 'roomsCount' },
  { value: '5', label: '5-комнатные', key: 'roomsCount' },
];

export const metroOptions = [
  { value: 'Грушевка', label: 'Грушевка', key: 'metro' },
  { value: 'Малиновка', label: 'Малиновка', key: 'metro' },
  { value: 'Уручье', label: 'Уручье', key: 'metro' },
  { value: 'Восток', label: 'Восток', key: 'metro' },
  { value: 'Московская', label: 'Московская', key: 'metro' },
  { value: 'Октябрьская', label: 'Октябрьская', key: 'metro' },
];

export const districtOptions = [
  { value: 'Шабаны', label: 'Шабаны', key: 'district' },
  { value: 'Заводской', label: 'Заводской', key: 'district' },
  { value: 'Ленинский', label: 'Ленинский', key: 'district' },
  { value: 'Октябрьский', label: 'Октябрьский', key: 'district' },
  { value: 'Московский', label: 'Московский', key: 'district' },
  { value: 'Партизанский', label: 'Партизанский', key: 'district' },
  { value: 'Первомайский', label: 'Первомайский', key: 'district' },
  { value: 'Советский', label: 'Советский', key: 'district' },
  { value: 'Фрунзенский', label: 'Фрунзенский', key: 'district' },
  { value: 'Центральный', label: 'Центральный', key: 'district' },
];

export const fastFilterData = [
  { id: 0, label: 'Недорогие', key: 'maxPrice', value: '100' },
  { id: 1, label: '1-комнатные', key: 'roomsCount', value: '1' },
  { id: 2, label: '2-комнатные', key: 'roomsCount', value: '2' },
  { id: 3, label: '3-комнатные', key: 'roomsCount', value: '3' },
  { id: 4, label: '4-комнатные', key: 'roomsCount', value: '4' },
  { id: 5, label: '5-комнатные', key: 'roomsCount', value: '5' },
  { id: 6, label: 'Заводской р.', key: 'district', value: 'Заводской' },
  { id: 7, label: 'Ленинский р.', key: 'district', value: 'Ленинский' },
  { id: 8, label: 'Московский р.', key: 'district', value: 'Московский' },
  { id: 9, label: 'Октябрьский р.', key: 'district', value: 'Октябрьский' },
  { id: 10, label: 'Партизанский р.', key: 'district', value: 'Партизанский' },
  { id: 11, label: 'Первомайский р.', key: 'district', value: 'Первомайский' },
  { id: 12, label: 'Советский р.', key: 'district', value: 'Советский' },
  { id: 13, label: 'Фрунзенский р.', key: 'district', value: 'Фрунзенский' },
  { id: 14, label: 'Центральный р.', key: 'district', value: 'Центральный' },
];

export const productsList: LinkType[] = [
  { content: 'Квартиры на сутки', address: '/catalog', svgId: '#flatsMark' },
  { content: 'Коттеджи и усадьбы', address: '/catalog' },
  { content: 'Бани и Сауны', address: '/catalog' },
  { content: 'Авто напрокат', address: '/catalog' },
];

export const dropDownList = [
  [
    { content: 'Квартиры на сутки в Минске', address: '/catalog?city=Минск' },
    { content: 'Квартиры на сутки в Гомеле', address: '/catalog?city=Гомель' },
    { content: 'Квартиры на сутки в Бресте', address: '/catalog?city=Брест' },
    { content: 'Квартиры на сутки в Витебске', address: '/catalog?city=Витебск' },
    { content: 'Квартиры на сутки в Гродно', address: '/catalog?city=Гродно' },
    { content: 'Квартиры на сутки в Могилеве', address: '/catalog?city=Могилев' },
  ],
  [
    { content: 'Коттеджи и усадьбы в Минске', address: '/catalog?city=Минск' },
    { content: 'Коттеджи и усадьбы в Гомеле', address: '/catalog?city=Гомель' },
    { content: 'Коттеджи и усадьбы в Бресте', address: '/catalog?city=Брест' },
    { content: 'Коттеджи и усадьбы в Витебске', address: '/catalog?city=Витебск' },
    { content: 'Коттеджи и усадьбы в Гродно', address: '/catalog?city=Гродно' },
    { content: 'Коттеджи и усадьбы в Могилеве', address: '/catalog?city=Могилев' },
  ],
  [
    { content: 'Бани и сауны в Минске', address: '/catalog?city=Минск' },
    { content: 'Бани и сауны в Гомеле', address: '/catalog?city=Гомель' },
    { content: 'Бани и сауны в Бресте', address: '/catalog?city=Брест' },
    { content: 'Бани и сауны в Витебске', address: '/catalog?city=Витебск' },
    { content: 'Бани и сауны в Гродно', address: '/catalog?city=Гродно' },
    { content: 'Бани и сауны в Могилеве', address: '/catalog?city=Могилев' },
  ],
  [
    { content: 'Авто напрокат в Минске', address: '/catalog?city=Минск' },
    { content: 'Авто напрокат в Гомеле', address: '/catalog?city=Гомель' },
    { content: 'Авто напрокат в Бресте', address: '/catalog?city=Брест' },
    { content: 'Авто напрокат в Витебске', address: '/catalog?city=Витебск' },
    { content: 'Авто напрокат в Гродно', address: '/catalog?city=Гродно' },
    { content: 'Авто напрокат в Могилеве', address: '/catalog?city=Могилев' },
  ],
];

export const flatsData = [
  { content: 'Квартиры в Минске', address: '/catalog?city=Минск' },
  { content: 'Квартиры в Гомеле', address: '/catalog?city=Гомель' },
  { content: 'Квартиры в Бресте', address: '/catalog?city=Брест' },
  { content: 'Квартиры в Витебске', address: '/catalog?city=Витебск' },
  { content: 'Квартиры в Гродно', address: '/catalog?city=Гродно' },
  { content: 'Квартиры в Могилеве', address: '/catalog?city=Могилев' },
];

export const flats = [
  {
    title: 'Квартиры',
    flatsList: flatsData,
  },
  {
    title: 'Коттеджи и усадьбы',
    flatsList: [
      {
        address: '/catalog',
        content: 'Аггроусадьбы',
      },
      {
        address: '/catalog',
        content: 'Коттеджи',
      },
      {
        address: '/catalog',
        content: 'Загородный комплекс',
      },
      {
        address: '/catalog',
        content: 'Базы отдыха',
      },
      {
        address: '/catalog',
        content: 'Ещё',
        more: true,
      },
    ],
  },
  {
    title: 'Популярные направления',
    flatsList: [
      {
        address: '/catalog',
        content: 'Коттеджи и усадьбы на о. Брасласких',
      },
      {
        address: '/catalog',
        content: 'Коттеджи и усадьбы (жилье) на Нарочи',
      },
      {
        address: '/catalog',
        content: 'Коттеджи и усадьбы (жилье) у воды, на берегу, на озере',
      },
    ],
  },
];

export const proposalsList = [
  {
    imgPath: '/img/flats.png',
    subtitle: 'Снять квартиру',
    title: 'Квартиры на сутки',
    chips: true,
  },
  {
    imgPath: '/img/cottages.png',
    subtitle: 'Снять коттедж на праздник',
    title: 'Коттеджи и усадьбы',
    more: true,
  },
  {
    imgPath: '/img/baths.png',
    subtitle: 'Попариться в бане с друзьями',
    title: 'Бани и сауны',
    more: true,
  },
  {
    imgPath: '/img/cars.png',
    subtitle: 'Если срочно нужна машина',
    title: 'Авто на прокат',
    more: true,
  },
];

export const presentationData = [
  {
    title: 'Начните привлекать клиентов бесплатно!',
    subtitle: (
      <div>
        Пройдя простую регистрацию на сайте у Вас появится личный кабинет, в котором возможно{' '}
        <b>бесплатно создавать и публиковать </b> объявления на сайте
      </div>
    ),
    btn: '+ Разместить объявление',
    imgPath: '/svg/target.svg',
  },
  {
    title: 'Поднимайте объявления',
    subtitle: (
      <div>
        Вы в любое время можете <b>поднимать</b> объявления <b> вверх первой страницы </b>
        каталога, они разместятся сразу после платных объявлений до тех пор, пока другой
        пользователь не повторит процедуру.
      </div>
    ),
    btn: 'Узнать стоимость услуги',
    imgPath: '/svg/move.svg',
  },
  {
    title: 'Приоритет Gold',
    subtitle: (
      <div>
        Приоритетное размещение <b>Gold</b> позволяет <b>закрепить ваше объявление</b> в верхней
        части каталога!
        <p>
          Gold объявления <b>перемещаются</b>
          <br />
          <b> каждые 5 мин </b>на 1 позицию, что делает размещение одинаковым для всех.
        </p>
      </div>
    ),
    btn: 'Еще о тарифе Gold',
    colored: true,
  },
];

export const sortList = [
  { value: '', label: 'По умолчанию' },
  { value: 'asc', label: 'По возрастанию цены' },
  { value: 'desc', label: 'По убыванию цены' },
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
    url: 'https://instagram.com',
    src: '#inst',
  },
  {
    url: 'https://vk.com',
    src: '#vk',
  },
  {
    url: 'https://facebook.com',
    src: '#fb',
  },
  {
    url: 'https://viber.com',
    src: '#viber',
  },
  {
    url: 'https://telegram.org',
    src: '#tg',
  },
  {
    url: 'https://whatsapp.com',
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
