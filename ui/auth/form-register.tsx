import TextField from "@mui/material/TextField";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const Formregister = () => {
  return (
    <form action=''>
      <div className=''>
        <TextField
          id='outlined-basic'
          label='Name'
          variant='outlined'
          className='text-field'
          type='text'
        />

        <div aria-live='polite'>
          <span className='hidden text-sm text-red-400'>
            please input your name
          </span>
        </div>
      </div>
      <div className='mt-2'>
        <TextField
          id='outlined-basic'
          label='Email'
          variant='outlined'
          className='text-field'
          type='email'
        />

        <div aria-live='polite'>
          <span className='hidden text-sm text-red-400'>
            please input your email
          </span>
        </div>
      </div>
      <div className='mt-2'>
        <TextField
          id='outlined-basic'
          label='Password'
          variant='outlined'
          className='text-field'
          type='password'
        />

        <div aria-live='polite'>
          <span className='hidden text-sm text-red-400'>
            please input your password
          </span>
        </div>
      </div>
      <div className='mt-2'>
        <TextField
          id='outlined-basic'
          label='Confirm Password'
          variant='outlined'
          className='text-field'
          type='password'
        />
        <div aria-live='polite'>
          <span className='hidden text-sm text-red-400'>
            please input your password
          </span>
        </div>
      </div>

      <div className='mt-5'>
        <FormControl fullWidth className="bg-white">
          <InputLabel id='role'>Pilih Role</InputLabel>
          <Select labelId='demople-select-label'>
            <MenuItem value='user'>User</MenuItem>
            <MenuItem value='admin'>Admin</MenuItem>
            
          </Select>
        </FormControl>
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
