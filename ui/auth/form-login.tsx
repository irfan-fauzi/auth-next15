const FormLogin = () => {
  return (
    <form action='' className='mt-1'>
      <div className='mt-2'>
        <label htmlFor='email' className='block mb-1 text-gray-500'>
          Email <span className='text-red-500'>*</span>
        </label>
        <input
          className='text-field'
          type='email'
          id='email'
          name='email'
          placeholder='Enter your email *'
        />
        <div aria-live="polite" ><span className="text-sm text-red-400">please input your email</span></div>
      </div>
      <div className='mt-2'>
        <label htmlFor='password' className='block mb-1 text-gray-500'>
          Password <span className='text-red-500'>*</span>
        </label>
        <input
          className='text-field'
          type='text'
          id='password'
          name='password'
          placeholder='Create a strong password *'
        />
        <div aria-live="polite" ><span className="text-sm text-red-400">please input your password</span></div>
      </div>

      <div className='mt-4'>
        <button
          type='submit'
          className='mb-4 mt-3 border w-full bg-gray-800 py-4 text-gray-50 text-lg font-semibold rounded-lg hover:bg-black'
        >
          Sign in
        </button>
      </div>
    </form>
  );
};

export default FormLogin;
