import { Currency, Planet } from '@/shared/const/common';

export type Profile = {
    first: string;
    lastname: string;
    age: number;
    currency: Currency;
    Planet: Planet;
    City: string;
    username: string;
    avatar: string;
};

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean
}
