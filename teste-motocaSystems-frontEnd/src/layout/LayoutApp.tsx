import { Outlet } from 'react-router-dom';
import Header from '../components/header';

export default function LayoutApp() {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

