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
        <Gradient width={400} height={400} className="absolute top-28 right-0 inline-block"/>
      </Layout>
    </>
  );
};

export default Home;
