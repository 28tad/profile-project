import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        align = TextAlign.LEFT,
        theme = TextTheme.PRIMARY,
    } = props;

    const additionalClasses = [
        className, cls[align], cls[theme],
    ];

    return (
        <div className={classNames('', {}, additionalClasses)}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
