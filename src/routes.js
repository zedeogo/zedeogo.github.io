import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Desktop from './pages/index';

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Desktop />} />
            </Routes>
        </BrowserRouter>
    )
};