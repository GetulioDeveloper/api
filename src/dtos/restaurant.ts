import { IsNotEmpty, Length } from 'class-validator'

export class CreateRestaurant {
  ownerId: string;
  email: string;
  cellphone: string;
  ownerName: string;
  ownerLastname: string;
  cpf: string;
  rg: string;
  orgaoEmissor: string;
  cnpj: string;
  restaurantName: string;
  telephone: string;
  street: string;
  city: string;
  state: string;
  address: number;
  speciality: string;
  delivery: string;
  creatorEmail: string;
}

export class getRestaurant {
  id: string;
}