import { Outlet } from 'react-router-dom';
import Header from '@/components/header/index';

const LayoutApp = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default LayoutApp;
