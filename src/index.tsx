import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import { ThemePorvider } from '@/app/providers/ThemeProvider';
import '@/shared/config/i18n/i18n';
import { ErrorBoundary } from './app/providers/ErrorBoundary';

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemePorvider>
                <App />
            </ThemePorvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'),
);
