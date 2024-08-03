export interface ColorProps {
  color: string;
}

export interface IAuth {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  token_type: string;
}

export interface IMenuResponse {
  status: string;
  result: Result;
}

interface Result {
  categories: ICategory[];
}

export interface ICategory {
  category_name: string;
  menu: Menu[];
}

interface Menu {
  name: string;
  description: string;
  photo: string;
  price: number;
}
