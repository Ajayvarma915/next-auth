import { doSocialLogin } from '../app/actions/actions'
import React from 'react'

const Login = () => {
  return (
    <div className='w-[30rem]'>
        <form action={doSocialLogin}>
            <div className='flex justify-evenly mt-6'>
            <label htmlFor="email" value='email'>Email :</label>
            <input type="email" id='email' />
            </div>
            <div className='flex justify-evenly mt-6'>
            <label htmlFor="password" value='email'>Password :</label>
            <input type="password" id='password' />
            </div>
            <div className='flex justify-evenly mt-10'>
                <button className="bg-pink-400 text-white p-1 rounded-md m-1 text-lg" type="submit" name="action" value="google">
                    Sign In With Google
                </button>

                <button className="bg-black text-white p-1 rounded-md m-1 text-lg" type="submit" name="action" value="github">
                    Sign In With GitHub
                </button>
            </div>
        </form>
    </div>
  )
}

export default Login
