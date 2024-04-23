import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  data-theme="light">
      <body>
        <section className="fit-center">
          <Header />
          {children}
          <Footer/>
        </section>
      </body>
    </html>
  );
}
