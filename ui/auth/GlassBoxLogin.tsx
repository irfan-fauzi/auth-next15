import Image from "next/image";


const GlassBoxLogin = () => {
  return (
    <div className='container-glass glass'>
      <div className='mt-10 ml-5 bg-[#20DC49] w-[230px] h-[45px] rounded-lg flex items-center justify-center gap-2'>
        <Image src='/thumbs-up.png' width={22} height={10} alt='thumbs up' />
        <p className='text-xs'>Top Notch Stock Resources</p>
      </div>

      <p className='text-white text-sm w-[350px] mt-5 ml-5'>
        Today, we create innovative solutions to the challenges that consumers
        face in both their everyday lives and events.
      </p>
    </div>
  );
};

export default GlassBoxLogin;
