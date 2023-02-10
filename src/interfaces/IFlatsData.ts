enum Cities {
  'Минск',
  'Гомель',
  'Брест',
  'Могилев',
  'Гродно',
  'Витебск',
}

enum Streets {
  'Ленина',
  'Притыцкого',
  'Немиги',
  'Карла Маркса',
  'Первомайская',
  'Короля',
  'Сухая',
  'Куйбшева',
  'Красная',
  'Советская',
  'Садовая',
  'Ленинградская',
  'Октябрьская',
  'Машерова',
}

enum Metro {
  'Институт культуры',
  'Академия наук',
  'Грушевка',
  'Восток',
  'Малиновка',
}
enum District {
  'Шабаны',
  'Советский',
  'Ленинский',
  'Первомайский',
  'Московский',
}

export interface IFlatsData {
  id: number;
  price: number;
  roomsCount: number;
  city: Cities;
  street: Streets;
  number: number;
  metro: Metro;
  district: District;
  ownerInfo: {
    name: string;
    phone: string;
    links: {
      site: string;
      viber: string;
      wa: string;
      mail: string;
    };
  };
}
