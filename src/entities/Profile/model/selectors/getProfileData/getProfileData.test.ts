import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency/model/types';
import { getProfileData } from './getProfileData';

describe('getLoginError.test', () => {
    test('should profile state', () => {
        const data = {
            username: 'admin',
            age: 22,
            country: Country.RUS,
            lastname: 'Spigel',
            first: 'Spike',
            city: 'Bepop',
            currency: Currency.WOOLONG,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
