import { classNames } from "@/shared/lib/classNames/classNames"
import { ThemeSwitcher } from "@/shared/ui/ThemeSwitcher"
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink/AppLink"
import cls from './Navbar.module.scss'

interface NavbarProps { 
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
        <ThemeSwitcher />
        <div className={cls.links}>
            <AppLink to={'/'} className={cls.mainLink} theme={AppLinkTheme.SECONDARY}>
                Main
            </AppLink>
            <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>
                About
            </AppLink> 
        </div>
    </div>
  )
}
