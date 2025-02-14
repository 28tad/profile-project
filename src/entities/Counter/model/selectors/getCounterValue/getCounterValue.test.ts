import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { getCounterValue } from '../getCounterValue/getCounterValue';

describe('getCounterValue', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
