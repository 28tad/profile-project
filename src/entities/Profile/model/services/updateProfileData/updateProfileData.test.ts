import axios from 'axios';
import { updateProfileData } from './updateProfileData';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency/model/types';
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

describe('updateProfileData.test', () => {
    test('succes', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });

        thunk.api.put.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        // expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ValidateProfileError.SERVER_ERROR,
        ]);
    });
});
