export interface UserProps {
  id: number;
  name: string;
  email: string;
}
export interface UserProp {
  id: number;
  name: string;
}
export interface HomeProps {
  user: UserProps;
  onLogout: () => void;
}
