export type House = {
  _id: string;
  name: string;
  price: number;
  preview_images: string[];
  project_images: string[];
  floor_count: number;
  building_footprint: number;
  house_height: number;
  general_square: number;
  living_square: number;
};

export type Request = {
  email: string;
  name: string;
  phone: string;
  square: number;
  floor_count: string;
  comment: string;
};

export type RequestParams = {
  email: string;
  name: string;
  phone: string;
  square: number;
  floor_count: string;
  comment: string;
};

export type Order = {
  email: string;
  name: string;
  phone: string;
  cash_method: boolean;
  cashless_payment: boolean;
  courirer_delivery: boolean;
  in_office: boolean;
  money_transfer: boolean;
  online_payment: boolean;
  comment: string;
  house: House["_id"];
};

export type OrderParams = {
  email: string;
  name: string;
  phone: string;
  cash_method: boolean;
  cashless_payment: boolean;
  courirer_delivery: boolean;
  in_office: boolean;
  money_transfer: boolean;
  online_payment: boolean;
  comment: string;
  house: House["_id"];
};
