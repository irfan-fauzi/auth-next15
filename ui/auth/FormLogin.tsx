import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import AriaLive from "./AriaLive";
import Link from "next/link";

const FormLogin = () => {
  return (
    <form action=''>
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
      <div className='2xl:mt-8 mt-5'>
        <TextField
          id='outlined-basic'
          label='Password'
          variant='outlined'
          className='text-field'
          type='password'
        />

        <AriaLive>please input your password</AriaLive>
      </div>
      <div className='mt-5 flex items-center justify-between'>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label='remember me' />
        </FormGroup>
        <Link href='/login/forgot-password' className="hidden">
          <p className="text-red-500">forgot password</p>
        </Link>
      </div>

      <div className='mt-5'>
        <button
          type='submit'
          className='border w-full bg-green-600 py-4 text-gray-50 text-md font-semibold rounded-lg hover:bg-green-700'
        >
          Sign in
        </button>
      </div>
    </form>
  );
};

export default FormLogin;
