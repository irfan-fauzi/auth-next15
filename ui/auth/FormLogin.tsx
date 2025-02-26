"use client";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import AriaLive from "./AriaLive";
import Link from "next/link";
import { useActionState } from "react";
import { loginCredentials } from "@/lib/actions";
import SubmitButton from "./SubmitButton";

const FormLogin = () => {
  const initialState = {
    values: {
      email: "",
      password: "",
    },
    error: {
      email: [],
      password: [],
    },
    message: undefined,
  };
  const [state, action] = useActionState(loginCredentials, initialState);
 
  return (
    <form action={action}>
      <div className='mt-2'>
        <TextField
          id='outlined-basic'
          label='Email'
          variant='outlined'
          className='text-field'
          type='email'
          name='email'
          defaultValue={state?.values?.email}
        />

        {state?.error?.email &&
          state.error.email.map((error: string) => (
            <AriaLive key={error}>{error}</AriaLive>
          ))}
      </div>
      <div className='2xl:mt-8 mt-5'>
        <TextField
          id='outlined-basic'
          label='Password'
          variant='outlined'
          className='text-field'
          type='password'
          name='password'
          defaultValue={state?.values?.password}
        />

        {state?.error?.password &&
          state.error.password.map((error: string) => (
            <AriaLive key={error}>{error}</AriaLive>
          ))}
      </div>
      <div className='mt-5 flex items-center justify-between'>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label='remember me' />
        </FormGroup>
        <Link href='/login/forgot-password' className='hidden'>
          <p className='text-red-500'>forgot password</p>
        </Link>
      </div>

      <SubmitButton text='Login' />
    </form>
  );
};

export default FormLogin;
