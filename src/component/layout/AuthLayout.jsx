import FormLogin from "../fragment/FormLogin"
import { Link } from "react-router-dom";
const AuthLayout = (props) =>{
    const {judulPage,children,type,text}=props;
    return ( 

        <div className='w-full max-w-xs bg-white rounded p-3'>
            <h1 className='text-3xl font-bold text-blue-800 text-center mb-2'>{judulPage}</h1>
            <p className='font-medium text-blue-700 text-center'>Selamat Datang</p>
            {children}
            <p className="text-sm my-5 text-center">
                {type==='login' ? "Belum punya akun ? " : "Sudah punya akun? "} 
                {type==='login' &&
                    <Link to="/register" className="text-bold text-blue-600">Register</Link>
                }

                {type==='register' &&
                    <Link to="/login" className="text-bold text-blue-600">Login</Link>
                }
            </p>
        </div>  
    )
}

export default AuthLayout;