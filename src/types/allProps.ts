export type ValidationProps= {
  name: string;
  surname: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
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

