import axios from 'axios';
import { fetchProfileData } from './fetchProfileData';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency/model/types';

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

describe('loginByUsername.test', () => {
    test('succes login', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error login', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
