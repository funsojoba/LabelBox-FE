import { CardStyle } from "./style";


const Card = ({ title, description, image }) => {
    return (
        <CardStyle image={image}>
            <div className="image"></div>
            <div className="text">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

        </CardStyle>
    )
};

export default Card;