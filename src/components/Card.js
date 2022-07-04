import Contador from "./ItemCount";


function Card({product, price}) {
    return (
        <div className="container">
            <div className="card col-md-3">
                <h3>
                    {product}
                </h3>
                <h4>
                    {price}
                </h4>  
                <Contador />
            </div>
        </div>
)}

export default Card;