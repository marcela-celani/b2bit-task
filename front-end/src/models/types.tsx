export interface Avatar {
  low: string;
}

export interface ProfileData {
  avatar: Avatar;
  name: string;
  email: string;
}

export interface LoginValues {
  email: string;
  password: string;
}
