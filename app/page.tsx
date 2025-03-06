import Image from "next/image";
import Hero from "@/ui/components/landing/Sections/Hero";
import Header from "@/ui/components/landing/Sections/Header";
import Layout from "@/ui/components/landing/Layout";
import Features from "@/ui/components/landing/Sections/Features";
import Gradient from "@/ui/components/landing/Gradient";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Layout>
        <Features />
        <Gradient width={400} height={400} className="absolute top-28 right-0 inline-block" />
        <section className="bg-white max-w-screen-xl flex mx-auto">
          <div className="bg-blue-900">
            <Image src='/app.webp' width={400} height={200} alt="tampilan aplikasi azfira kasir" />
          </div>
          <div>
            <h2>Why you should choose Azfira Kasir</h2>
            <p>becouse we provide what you need</p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
