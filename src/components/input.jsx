const Input = ({label ,value ,name ,onChange}) => {
    return (  
    <div className="mb-3">
    <label htmlFor="email">{label}:</label>
    <input
     type="text" 
     id={name} 
     name={name} 
     value={value}
     onChange={onChange}
     className="form-control"/>
    </div> );
}
 
export default Input;