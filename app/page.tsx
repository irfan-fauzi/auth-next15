import Hero from "@/ui/components/landing/Sections/Hero";
import Header from "@/ui/components/landing/Sections/Header";
import Layout from "@/ui/components/landing/Layout";
import Features from "@/ui/components/landing/Sections/Features";
import Gradient from "@/ui/components/landing/Gradient";
import Why from "@/ui/components/landing/Sections/Why";
import PriceCard from "@/ui/components/landing/price-card";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Layout>
        <Features />
        <Gradient
          width={400}
          height={400}
          className='absolute top-28 right-0 inline-block'
        />
        <Why />
        <section className='max-w-screen-xl mx-auto mt-10 pb-10 px-5'>
          <h2 className='text-3xl text-center'>
            Ready to Improve efficiency with us ?
          </h2>
          <p className='text-center'>
            choose a plan that suite your business needs
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-10 border border-black items-center justify-items-center'>
            <PriceCard />
            <PriceCard />
            <PriceCard />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
