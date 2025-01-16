import {
    InputHTMLAttributes, memo, ChangeEvent, useState, useRef, useEffect,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void
    readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autoFocus,
        readOnly,
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPostion] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const input = e.target;
        const selectionStart = input.selectionStart || 0;

        onChange?.(input.value);
        setCaretPostion(selectionStart);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (e: any) => {
        setCaretPostion(e?.target?.selectionStart || 0);
    };

    const setCaret = (position: number) => {
        if (inputRef.current) {
            inputRef.current.setSelectionRange(position, position);
        }
    };

    if (inputRef.current) {
        setCaret(caretPosition);
    }

    const isCaretVisible = isFocused && !readOnly;

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            inputRef.current?.focus();
        }
    }, [autoFocus]);

    const mods: Mods = {
        [cls.readonly]: readOnly,
    };

    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>

            )}
            <div className={cls.caretWrapper}>
                <input
                    className={cls.input}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    ref={inputRef}
                    readOnly={readOnly}
                    {...otherProps}
                />
                {isCaretVisible && (
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition * 9.5}px` }}
                    />
                )}
            </div>
        </div>
    );
});
