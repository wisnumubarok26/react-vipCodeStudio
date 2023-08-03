import FormLogin from "../component/fragment/FormLogin";
import AuthLayout from "../component/layout/AuthLayout";



const LoginPage = ()=>{
    return (
        <div className='flex justify-center items-center min-h-screen bg-slate-500'>
            <AuthLayout judulPage="Login" type='login' text='login'>
                <FormLogin/>
            </AuthLayout>
        </div>
        
        
    )
}
export default LoginPage;