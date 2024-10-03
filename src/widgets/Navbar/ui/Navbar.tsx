/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { Modal } from '@/shared/ui/Modal/Modal';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Omnis magni rem perspiciatis neque beatae ex labore autem sed cumque,
                iure accusamus illo molestias error rerum delectus expedita quae repellendus
                facilis!
            </Modal>
        </div>
    );
};
