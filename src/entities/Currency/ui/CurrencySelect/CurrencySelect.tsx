import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { Select } from '@/shared/ui/Select/Select';
import { Currency } from '../../model/types';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.WOOLONG, content: Currency.WOOLONG },
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
];

export const CurrencySelect = (props: CurrencySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    const onChangeHandler = useCallback((value: string) => {
        // onChange?.(value as Currency);
        if (onChange) {
            onChange(value as Currency);
        }
    }, [onChange, value]);

    const { t } = useTranslation();

    return (
        <Select
            readOnly={readonly}
            label={t('Укажите валюту')}
            options={options}
            value={value}
            onChange={onChangeHandler}
        />
    );
};
