import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency/model/types';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../types/profile';

jest.mock('axios');

const data = {
    username: 'admin',
    age: 22,
    country: Country.RUS,
    lastname: 'Spigel',
    first: 'Spike',
    city: 'Bepop',
    currency: Currency.WOOLONG,
};

describe('validateProfileData.test', () => {
    test('succes login', () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without firstname and lastname', async () => {
        const result = validateProfileData({
            ...data,
            first: '',
            lastname: '',
        });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });
});
