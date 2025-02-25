"use client";

import TextField from "@mui/material/TextField";
import { registerCredentials } from "@/lib/actions";

import AriaLive from "./AriaLive";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import SubmitButton from "./SubmitButton";
import { useActionState } from "react";

const Formregister = () => {
  const initialState = {
    values: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      roles: "",
    },
    error: {
      name: [],
      email: [],
      password: [],
      confirmPassword: [],
      roles: [],
    },
    message: undefined,
  };

  const [state, action] = useActionState(registerCredentials, initialState);

  return (
    <form action={action}>
      <div className=''>
        <TextField
          id='outlined-basic'
          label='Name'
          variant='outlined'
          className='text-field'
          type='text'
          name='name'
          defaultValue={state?.values?.name}
        />
        {state?.error?.name &&
          state.error.name.map((error: string) => (
            <AriaLive key={error}>{error}</AriaLive>
          ))}
      </div>
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
      <div className='mt-2'>
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
      <div className='mt-2'>
        <TextField
          id='outlined-basic'
          label='Confirm Password'
          variant='outlined'
          className='text-field'
          type='password'
          name='confirmPassword'
          defaultValue={state?.values?.confirmPassword}
        />
        {state?.error?.confirmPassword &&
          state.error.confirmPassword.map((error: string) => (
            <AriaLive key={error}>{error}</AriaLive>
          ))}
      </div>

      <div className='mt-5'>
        <FormControl fullWidth className='bg-white'>
          <InputLabel id='roles'>Pilih Role</InputLabel>
          <Select labelId='demople-select-label' name='roles'>
            <MenuItem value='user'>User</MenuItem>
            <MenuItem value='admin'>Admin</MenuItem>
          </Select>
        </FormControl>
        {state?.error?.roles &&
          state.error.roles.map((error: string) => (
            <AriaLive key={error}>{error}</AriaLive>
          ))}
      </div>

      <div className='mt-5'>
        <SubmitButton text='Sign up' />
      </div>
    </form>
  );
};

export default Formregister;
