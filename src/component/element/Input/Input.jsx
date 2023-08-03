const Input = (props)=>{
    const {type,placeholder,name}=props
    return(
        <input type={type} className='w-full text-sm rounded border
            border-gray-700 text-slate-700 py-2 px-2
           focus:border-gray-500'
           placeholder={placeholder}
           name={name}
           id={name}/>
    )
}
export default Input;