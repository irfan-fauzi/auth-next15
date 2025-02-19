import TextField from "@mui/material/TextField";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import AriaLive from "./AriaLive";

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
        <AriaLive>please input your name</AriaLive>
      </div>
      <div className='mt-2'>
        <TextField
          id='outlined-basic'
          label='Email'
          variant='outlined'
          className='text-field'
          type='email'
        />

       <AriaLive>please input your email</AriaLive>
      </div>
      <div className='mt-2'>
        <TextField
          id='outlined-basic'
          label='Password'
          variant='outlined'
          className='text-field'
          type='password'
        />

       <AriaLive>please input your password</AriaLive>
      </div>
      <div className='mt-2'>
        <TextField
          id='outlined-basic'
          label='Confirm Password'
          variant='outlined'
          className='text-field'
          type='password'
        />
       <AriaLive>please input your password</AriaLive>
      </div>

      <div className='mt-5'>
        <FormControl fullWidth className="bg-white">
          <InputLabel id='role'>Pilih Role</InputLabel>
          <Select labelId='demople-select-label'>
            <MenuItem value='user'>User</MenuItem>
            <MenuItem value='admin'>Admin</MenuItem>
          </Select>
        </FormControl>
        <AriaLive>please input your Role</AriaLive>
      </div>
      <div className='mt-5'>
        <button
          type='submit'
          className='border w-full bg-green-600 py-4 text-gray-50 text-md font-semibold rounded-lg hover:bg-green-700'
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default Formregister;
