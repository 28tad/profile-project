import App from './app/App';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemePorvider } from '@/app/providers/ThemeProvider';

render(
    <BrowserRouter>
        <ThemePorvider>
            <App />
        </ThemePorvider>
    </BrowserRouter>,
    document.getElementById('root')
)