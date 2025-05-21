export interface ValidationProps {
  name: string;
  surname: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginProps  {
  name: string
  surname: string
  username: string
  email: string
  password: string
  confirmPassword: string
}

export interface UserProps {
  id: string;
  name: string;
  email: string;
}
export interface NavigationProps {
  backTo?: string;
  nextTo?: string;
}

