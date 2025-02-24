"use client";

import TextField from "@mui/material/TextField";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { registerCredentials } from "@/lib/actions";
import { useFormState } from "react-dom";
import AriaLive from "./AriaLive";

const Formregister = () => {
  const initialState = {
    error: {
      name: [],
      email: [],
      password: [],
      confirmPassword: [],
      role: [],
    },
    message: undefined,
  };

  const [state, action] = useFormState(registerCredentials, initialState);
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
        />
        {state?.error?.email &&
          state.error.email.map((error: string) => (
            <AriaLive key={error}>{error}</AriaLive>
          ))}
      </div>

      <div className='mt-5'>
        <FormControl fullWidth className='bg-white'>
          <InputLabel id='role'>Pilih Role</InputLabel>
          <Select labelId='demople-select-label'>
            <MenuItem value='user'>User</MenuItem>
            <MenuItem value='admin'>Admin</MenuItem>
          </Select>
        </FormControl>
        {state?.error?.role &&
          state.error.role.map((error: string) => (
            <AriaLive key={error}>{error}</AriaLive>
          ))}
        {/* <AriaLive>please input your Role</AriaLive> */}
      </div>
      <div className='mt-5'>
        <button
          type='submit'
          className='border w-full bg-gray-900 py-4 text-gray-50 text-md font-semibold rounded-lg hover:bg-green-700'
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default Formregister;
