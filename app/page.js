"use client";

import About from "./_components/About.jsx";
import Banner from "./_components/Banner.jsx";
import Footer from "./_components/Footer.jsx";
import Header from "./_components/Header.jsx";
import NewLetter from "./_components/NewLetter.jsx";
import Testimonial from "./_components/Testimonial.jsx";
import { TopClasses } from "./_components/TopClasses.jsx";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Banner />
      <About />
      <TopClasses />
      <Testimonial />
      <NewLetter />
      <Footer />
    </main>
  );
}
