import { LoginSchema } from '../..';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('cowboy'),
        )).toEqual({ username: 'cowboy' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: 'bepop' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPaswword('bepop'),
        )).toEqual({ password: 'bepop' });
    });
});
