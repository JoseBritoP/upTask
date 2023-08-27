export type UserType = {
  id?: string;
  username: string;
  email: string,
  password: string;
};

export interface UserInterface {
  id?: string;
  username: string;
  email: string,
  password?: string;
}