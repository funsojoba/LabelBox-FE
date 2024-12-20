import { InputStyle, InputWrapper, InputHeader} from "./style"


const Input = ({type, min, max, readOnly, required, topText, placeholder, ...rest})=>{
    return (
        <InputWrapper>
            <InputHeader>
                <label>{topText}</label>
                {required && <span>*</span> }
            </InputHeader>
            <InputStyle 
                readOnly={readOnly}
                required={required}
                min={min}
                max={max}
                type={type} 
                placeholder={placeholder} {...rest} />
        </InputWrapper>
        )
}

export default Input