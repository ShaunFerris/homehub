import '@/styles/globals.css';
import Nav from '@/components/Nav';
import { AuthProvider } from '@/context/AuthContext';

export const metadata = {
    title: "homeHub - Get Your Shit Together",
    description: "Home organization tools for busy households"
};

const RootLayout = ({ children }) => {
    return (
        <AuthProvider>
            <html lang='en'>
                <body>
                    <div className='main'>
                        <div className='gradient' />
                    </div>
                    <main className='app'>
                        <Nav />
                        {children}
                    </main>
                </body>
            </html>
        </AuthProvider>
    );
};

export default RootLayout;