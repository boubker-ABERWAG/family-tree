export interface Membre {
  pseudo: string;
  first_name: string;
  last_name: string;
  civility: string;
  birth_date: Date;
  birth_latitude: Number;
  birth_longitude: Number;
  description: string;
  photo: string;
  active: Boolean;
  live: Boolean;
  mobile_phone: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  date_of_death: Date;
  father: Membre;
  mother: Membre;
  partner: Membre;
}
