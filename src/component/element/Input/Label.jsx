import { Children } from "react"

const Label= (props) =>{
    const {children,name}=props
    return(
        <label htmlFor={name} className='block font-medium text-blue-700'>
            {children}
        </label>
    )
}
export default Label