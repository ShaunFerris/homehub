import '@/styles/globals.css';

export const metadata = {
    title: "homeHub - Get Your Shit Together",
    description: "Home organization tools for busy households"
};

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <div className='main'>
                    <div className='gradient' />
                </div>
                <main className='app'>
                    {children}
                </main>
            </body>
        </html>
    );
};

export default RootLayout;