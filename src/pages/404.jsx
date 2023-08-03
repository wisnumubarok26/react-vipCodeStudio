import { useRouteError } from "react-router-dom";

const ErrorPage = ()=>{
    const error = useRouteError()

    return(
        <div className="flex justify-center items-center flex-col min-h-screen bg-red-600 text-white">
            <h1 className="font-bold text-3xl text-white">Oops</h1>
            <p>Maaf Halaman Tidak ditemukan</p>
            <p>{error.statusText || error.message}</p>
        </div>
    )
}
export default ErrorPage