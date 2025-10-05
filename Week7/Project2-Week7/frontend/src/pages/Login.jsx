import {useState,useEffect}  from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import {useSelector,useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {login,reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner';


function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',

  });
  const {  email, password} = formData;
  const navigate=useNavigate();
const dispatch=useDispatch();
const {user,isLoading,isError,isSuccess,message}=useSelector(
  (state)=>state.auth
);

useEffect(()=>{
  if(isError){
    toast.error(message)
  }
  if(isSuccess || user){
    navigate("/")

  }
  dispatch(reset());

},[message,isError,isSuccess,user,navigate,dispatch])
const handleChange = (e) => {
  setFormData((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }));
}
const handleSubmit = (e) => {
  e.preventDefault();
   const userData={
        email,
        password
      }
      dispatch(login(userData))
}
if(isLoading){
  return (<Spinner/>)
}

  return (
    <>
    <div className='md:w-[40%] w-full  mx-auto mt-10 space-y-6'>
    <section className='space-y-2 text-center'>
   <h1 className='flex justify-center items-center gap-4 text-2xl font-semibold'><FaSignInAlt/>Login</h1>
   <p className='text-lg font-medium'>Login and start setting goals</p>
    </section>
    <section className='w-full px-6 shadow shadow-gray-400 rounded-md py-6 mb-4'>
      <form onSubmit={handleSubmit} className='space-y-6'>
        <input type="email" className='block w-full focus:outline-none border border-gray-400 rounded-md p-2' name="email" value={email} placeholder='Email'
       onChange={handleChange}/>
        <input type="password" className='block w-full focus:outline-none border border-gray-400 rounded-md p-2' name="password" value={password} placeholder='Password'
       onChange={handleChange}/>

       <div><button type='submit' className='w-full cursor-pointer bg-yellow-500 py-2 text-center text-white font-bold text-lg rounded-md shadow-blue-500 shdaow-md hover:bg-yellow-600'>Login</button></div>
      </form>
    </section>
    </div>
    </>
  )
}

export default Login;
