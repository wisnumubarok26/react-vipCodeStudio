import FormRegister from "../component/fragment/FormRegister";
import AuthLayout from "../component/layout/AuthLayout"
import { Link } from "react-router-dom";

const RegisterPage = ()=>{
    return (
        <div className='flex justify-center items-center min-h-screen bg-slate-500'>
            <AuthLayout judulPage="Register" text='login' type='register'>
                <FormRegister></FormRegister>                
            </AuthLayout>
        </div>
       
    )
}

export default RegisterPage;