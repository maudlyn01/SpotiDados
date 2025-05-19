export interface UserProps {
  id: string;
  name: string;
  email: string;
}
export interface UserProp {
  id: string;
  name: string;
}
export interface HomeProps {
  user: UserProps;
  onLogout: () => void;
}
