import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { Select } from '@/shared/ui/Select/Select';
import { Country } from '../../model/types';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.RUS, content: Country.RUS },
    { value: Country.USA, content: Country.USA },
];

export const CountrySelect = (props: CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    const { t } = useTranslation();

    return (
        <Select
            readOnly={readonly}
            label={t('Укажите страну')}
            options={options}
            value={value}
            onChange={onChangeHandler}
        />
    );
};
