import Hero from "@/ui/components/landing/Sections/Hero";
import Header from "@/ui/components/landing/Sections/Header";
import Layout from "@/ui/components/landing/Layout";
import Features from "@/ui/components/landing/Sections/Features";
import Gradient from "@/ui/components/landing/Gradient";
import Why from "@/ui/components/landing/Sections/Why";

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
        <section className='max-w-screen-xl mx-auto border border-black'>
          <h2 className='text-3xl text-center'>
            Ready to Improve efficiency with us ?
          </h2>
          <p className='text-center'>
            choose a plan that suite your business needs
          </p>
          <div className='flex'>
            <div className='border border-red-400'>
              <h3 className='text-xl text-blue-600'>Basic</h3>
              <p className='text-lg'>Perfect plan to get started</p>
              <p className='text-4xl font-semibold flex items-center gap-1'>
                IDR 129.000{" "}
                <span className='text-gray-500 text-sm font-normal'>
                  /mounth
                </span>
              </p>
              <p>Features you get by buying basic</p>
              <ul>
                <li>Basic POS features</li>
                <li>🧮 Digital Cashier Application</li>
                <li>🧮 Integration with popular tools</li>
              </ul>
              <ul>
                <li>Payment Receipt</li>
                <li>🧮 Digital Payment Through QRIS</li>
              </ul>
              <ul>
                <li>Payment Receipt</li>
                <li>🧮 Dashboard Laporan Realtime</li>
                <li>🧮 Raw Material Management</li>
                <li>🧮 Prescriptian Management</li>
                <li>🧮 Cost of God Sold</li>
              </ul>
              <ul>
                <li>Other Support</li>
                <li>🧮 Online Education & Training</li>
                <li>🧮 Call Center Support</li>
                <li>🧮 Whatsapp Support</li>
              </ul>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
