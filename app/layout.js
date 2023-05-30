import '@/styles/globals.css';
import Nav from '@/components/Nav';
import { AuthProvider } from '@/context/AuthContext';
import NextAuthProvider from '@/components/NextAuthProvider';

export const metadata = {
    title: "homeHub - Get Your Shit Together",
    description: "Home organization tools for busy households"
};

const RootLayout = ({ children }) => {
    return (
        <AuthProvider>
            <html lang='en'>
                <body>
                    <NextAuthProvider>
                        <div className='main'>
                            <div className='gradient' />
                        </div>
                        <main className='app'>
                            <Nav />
                            {children}
                        </main>
                    </NextAuthProvider>
                </body>
            </html>
        </AuthProvider>
    );
};

export default RootLayout;