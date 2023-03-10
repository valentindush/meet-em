import { useState } from 'react'
import img1 from '../../../assets/images/3.png'
import { Link, useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/auth'
import { toast } from 'react-toastify'


const Login = () => {

  const googleIcon = <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" /></defs><clipPath id="b"><use xlinkHref="#a" overflow="visible" /></clipPath><path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" /><path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" /><path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" /><path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" /></svg>

  const [error, setError] = useState("")

  const [email, setEmail] =  useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const {login} = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setError("")
      setLoading(true)
      await login(email, password)
      toast.success("Logged in Successfuly")
      navigate("/profile")
    } catch (err) {
      toast.error("Incorrect email or password")
    }

    setLoading(false)
  }

  return (
    <section className='h-screen w-screen flex items-center justify-center'>
    <div className="w-[800px] h-fit md:w-full sm:block  bg-black rounded-xl flex shadow-2xl sm:p-6">
      <div className="w-1/2 p-4 sm:w-full">

        {/* Heading */}

        <h1 className='text-2xl text-blue font-semibold text-center mt-4'>Welcome back</h1>

        {/* FORM */}

        <form action="#" className='mt-8 px-4' onSubmit={handleSubmit}>
          
          <div className="field mt-5">
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id='email' placeholder='Email' className='block w-full bg-transparent border-b border-white outline-none text-white mt-2 px-2 py-2 focus:border-blue border-opacity-80 placeholder:opacity-90' />
          </div>
          <div className="field mt-5">
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id='password' placeholder='Password' className='block w-full bg-transparent border-b border-white outline-none text-white mt-2 px-2 py-2 focus:border-blue border-opacity-80 placeholder:opacity-90' />
          </div>
          <div className="field mt-12">
            <button disabled={loading} type='submit' className='w-full p-2 bg-blue text-white font-medium rounded-xl'>Sign in</button>
          </div>

          <div className="mt-2">
            <p className='text-white text-center text-sm'>Don't have account? <Link to={'/auth/signup'} className='text-blue cursor-pointer'>Create one</Link></p>
          </div>

          {/* Error */}

          {error !== "" && 
            <div className="mt-3 text-red bg-[#f6616163] p-2 text-center rounded-xl text-sm">
              {error}
            </div>
          }
        </form>

        {/* With google */}

        <div className="flex items-center gap-2 px-5 opacity-80 mt-4">
          <div className="border-b border-white w-full"></div>
          <div className="text-white">or</div>
          <div className="border-b border-white w-full"></div>
        </div>
        <div className="mt-2 px-4">
          <button className='flex items-center justify-center gap-2 w-full border border-blueish p-2 rounded-xl'>
            <div className="w-6 h-6">
              {googleIcon}
            </div>
            <span className='text-white text-sm font-medium'>Continue with Google</span>
          </button>
        </div>
      </div>

      {/* Image */}

      <div className="w-1/2 bg-blueish rounded-r-xl sm:w-full sm:hidden">
        <img src={img1} className='w-full h-full object-cover' alt="" />
      </div>
    </div>
  </section>
  )
}

export default Login