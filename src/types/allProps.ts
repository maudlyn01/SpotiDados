export interface UserProps {
  id: string;
  name: string;
  email: string;
}
export interface HomeProps {
  user: UserProps;
  onLogout: () => void;
}
