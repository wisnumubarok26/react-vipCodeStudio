import Button from "../element/Button"
import InputForm from "../element/Input"

const FormLogin = ()=>{
    return(
        <form action="">
          <InputForm 
          label="Email"
          type="text"
          placeholder="Masukan Email Anda"
          name="email"/>  

          <InputForm 
          label="Password"
          type="password"
          placeholder="Masukan Password Anda"
          name="password"/> 

          <Button type="submit" text="Login"></Button>
        </form>
    )
}


export default FormLogin