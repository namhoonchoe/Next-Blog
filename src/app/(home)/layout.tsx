import React from "react";
import Header from "../../components/UI/Header";
import Footer from "../../components/UI/Footer";
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
