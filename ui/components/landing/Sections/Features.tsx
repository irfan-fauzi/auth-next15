import Image from "next/image";


const Features = () => {
  return (
    <section id='featured' className='px-5 max-w-screen-xl mx-auto'>
      <h2 className='capitalize text-gray-900 text-4xl font-medium mt-24 text-center'>
        new platform features
      </h2>
      <div className='flex w-full justify-between items-baseline mt-10'>
        <figure>
          <div className='card-feature pt-5'>
            <Image
              src='/feature1.png'
              width={400}
              height={100}
              alt='feature 1'
            />
          </div>
          <figcaption className='mt-5 text-center'>
            <h3 className='text-gray-900 text-2xl font-bold'>
              Digital Cashier Application
            </h3>
            <p className='text-gray-900 w-[325px] mt-2 mx-auto'>
              maximize profit and provide a better customer experience
            </p>
          </figcaption>
        </figure>
        <figure>
          <div className='card-feature'>
            <Image
              src='/feature2.png'
              width={390}
              height={100}
              alt='feature 1'
            />
          </div>
          <figcaption className='mt-5 text-center'>
            <h3 className='text-gray-900 text-2xl font-bold'>
              Digital Payment Through Qris
            </h3>
            <p className='text-gray-900 w-[325px] mt-2 mx-auto'>
              Accept Payment trhough varios Qris e-wallet methods
            </p>
          </figcaption>
        </figure>
        <figure>
          <div className='card-feature'>
            <Image
              src='/feature3.png'
              width={410}
              height={100}
              alt='feature 1'
            />
          </div>
          <figcaption className='mt-5 text-center'>
            <h3 className='text-gray-900 text-2xl font-bold'>
              Realtime Report Dashboard
            </h3>
            <p className='text-gray-900 w-[325px] mt-2 mx-auto'>
              With realtime data, you can make faster and more informed decicion
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Features;
