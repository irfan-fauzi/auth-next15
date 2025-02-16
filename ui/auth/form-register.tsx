const Formregister = () => {
  return (
    <form action='' className='mt-3'>
    
      <div className=''>
        <label htmlFor='name' className='block mb-1 text-gray-500'>
          Name <span className='text-red-500'>*</span>
        </label>
        <input
          className='text-field'
          type='text'
          id='name'
          name='name'
          placeholder='Enter your name'
          required
        />
        <div aria-live='polite'>
          <span className='hidden text-sm text-red-400'>
            please input your name
          </span>
        </div>
      </div>
      <div className='mt-2'>
        <label htmlFor='email' className='block mb-1 text-gray-500'>
          Email <span className='text-red-500'>*</span>
        </label>
        <input
          className='text-field'
          type='email'
          id='email'
          name='email'
          placeholder='Enter your email'
          required
        />
        <div aria-live='polite'>
          <span className='hidden text-sm text-red-400'>
            please input your email
          </span>
        </div>
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
          placeholder='Create a strong password'
          required
        />
        <div aria-live='polite'>
          <span className='hidden text-sm text-red-400'>
            please input your password
          </span>
        </div>
      </div>
      <div className='mt-2'>
        <label htmlFor='confirm-password' className='block mb-1 text-gray-500'>
          confirm Password <span className='text-red-500'>*</span>
        </label>
        <input
          className='text-field'
          type='text'
          id='confirm-password'
          name='confirm-password'
          placeholder='Confirm your password'
          required
        />
        <div aria-live='polite'>
          <span className='hidden text-sm text-red-400'>
            please input your password
          </span>
        </div>
      </div>
      <div className='mt-2'>
        <label htmlFor='role' className='block mb-1 text-gray-500'>
          Role <span className='text-red-500'>*</span>
        </label>
        <select
          className='text-field bg-gray-50'
          id='role'
          name='role'
          defaultValue='user'
        >
          <option value='user'>User</option>
          <option value='admin'>Admin</option>
        </select>
      </div>
      <div className='mt-5'>
        <button
          type='submit'
          className='border w-full bg-gray-800 py-4 text-gray-50 text-md font-semibold rounded-lg hover:bg-black'
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default Formregister;
