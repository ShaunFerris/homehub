import "@/styles/globals.css";
import Nav from "@/components/layout/Nav";
import NextAuthProvider from "@/context/NextAuthProvider";

export const metadata = {
  title: "homeHub - Get Your Shit Together",
  description: "Home organization tools for busy households"
};

const RootLayout = ({ children, session }) => {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider session={session}>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </NextAuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
