import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import { ThemePorvider } from '@/app/providers/ThemeProvider';
import '@/shared/config/i18n/i18n';

render(
    <BrowserRouter>
        <ThemePorvider>
            <App />
        </ThemePorvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
