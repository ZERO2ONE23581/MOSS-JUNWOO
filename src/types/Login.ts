import { UseFormRegisterReturn } from 'react-hook-form';

export interface ILoginForm {
  email?: string;
  phone?: string;
  userId?: string;
  password?: string;
  token?: string;
}
export interface ILoginProps {
  method?: string;
  login?: any;
  loading?: boolean;
  errMsg?: string;
}
export interface IFindForm extends ILoginForm {}
export interface IFindProps extends ILoginProps {
  findId?: any;
  findPw?: any;
}
export interface SpanProps {
  txtColor: string;
}
export interface InputProps {
  name: string;
  register: UseFormRegisterReturn;
  register2?: UseFormRegisterReturn;
  required?: boolean;
  [key: string]: any;
}
