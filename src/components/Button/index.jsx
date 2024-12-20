import { ButtonStyle } from "./style";




const Button = ({children, onClick, width, marginAuto, marginTop, ...rest})=>{
    return <ButtonStyle onClick={onClick} width={width} marginAuto={marginAuto} marginTop={marginTop} {...rest}>{children}</ButtonStyle>
}


export default Button