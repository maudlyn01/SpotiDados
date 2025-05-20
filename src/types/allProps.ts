export type ValidationProps= {
  name: string;
  surname: string;
  username: string;
  email: string;
  password: string | number;
  confirmPassword: string | number;
}

export type UserProps= {
  id: string;
  name: string;
  email: string;
}
export interface NavigationProps {
  backTo?: string;
  nextTo?: string;
}

