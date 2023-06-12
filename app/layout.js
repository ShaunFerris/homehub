import '@/styles/globals.css';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import NextAuthProvider from '@/context/NextAuthProvider';

export const metadata = {
    title: "homeHub - Get Your Shit Together",
    description: "Home organization tools for busy households"
};

const RootLayout = ({ children }) => {
    return (
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
                    <Footer />
                </NextAuthProvider>
            </body>
        </html>
    );
};

export default RootLayout;