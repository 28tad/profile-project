import App from './App';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemePorvider } from './themes/ThemeProvider';

render(
    <BrowserRouter>
        <ThemePorvider>
            <App />
        </ThemePorvider>
    </BrowserRouter>,
    document.getElementById('root')
)