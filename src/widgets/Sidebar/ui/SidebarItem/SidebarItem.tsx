import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/items';
import { classNames } from '@/shared/lib/classNames/classNames';

export interface SidebarItemProps {
    item?: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const {
        item = {
            path: '',
            text: '',
            Icon: '',
        },
        collapsed,
    } = props;
    const { t } = useTranslation();

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
            to={item.path}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
});
