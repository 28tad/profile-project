import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise((resolve) => {
    // Only for demonstration purposes !!!
    // @ts-ignore
    setTimeout(() => resolve(import('./LoginForm')), 800);
}));
