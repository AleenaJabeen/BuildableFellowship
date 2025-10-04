import {useState,useEffect}  from 'react'
import {FaUser} from 'react-icons/fa'

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''

  });
  const { username, email, password, password2 } = formData;
const handleChange = (e) => {
  setFormData((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }));
}
const handleSubmit = (e) => {
  e.preventDefault();
}

  return (
    <>
    <div className='md:w-[40%] w-full  mx-auto mt-10 space-y-6'>
    <section className='space-y-2 text-center'>
   <h1 className='flex justify-center items-center gap-4 text-2xl font-semibold'><FaUser/>Register</h1>
   <p className='text-lg font-medium'>Please create an account</p>
    </section>
    <section className='w-full px-6 shadow shadow-gray-400 rounded-md py-6 mb-4'>
      <form onSubmit={handleSubmit} className='space-y-6'>
       <input type="text" className='block w-full focus:outline-none border border-gray-400 rounded-md p-2' name="username" value={username} placeholder='Username'
       onChange={handleChange}/>
        <input type="email" className='block w-full focus:outline-none border border-gray-400 rounded-md p-2' name="email" value={email} placeholder='Email'
       onChange={handleChange}/>
        <input type="password" className='block w-full focus:outline-none border border-gray-400 rounded-md p-2' name="password" value={password} placeholder='Password'
       onChange={handleChange}/>
        <input type="password" className='block w-full focus:outline-none border border-gray-400 rounded-md p-2' name="password2" value={password2} placeholder='Confirm Password'
       onChange={handleChange}/>
       <div><button type='submit' className='w-full cursor-pointer bg-yellow-500 py-2 text-center text-white font-bold text-lg rounded-md shadow-blue-500 shdaow-md'>Submit</button></div>
      </form>
    </section>
    </div>
    </>
  )
}

export default Register
