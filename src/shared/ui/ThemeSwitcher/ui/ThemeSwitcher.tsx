import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import { classNames } from '../../../lib/classNames/classNames';
import LightIcon from '@/shared/assets/icons/Light_theme.svg'
import DarkIcon from '@/shared/assets/icons/Dark_theme.svg'
import cls from './ThemeSwitcher.module.scss';
import { Button, ThemeButton } from '../../Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme} = useTheme()

  return (
    <Button
      theme={ThemeButton.CLEAR}
        className={classNames(cls.ThemeSwitcher, {}, [className])} 
        onClick={toggleTheme}
    >
      { theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  )
}
