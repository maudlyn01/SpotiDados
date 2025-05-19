export interface HeaderProps {

}

export interface LoginProps {


}

export interface RegisterProps {

}

export interface UserProps {
  id: string;
  name: string;
  email: string;
}
export interface HomeProps {
  user: UserProps;
  onLogout: () => void;
}

export interface FooterProps {

}