import styles from "./ItemsContainer.css";
import Card from "./Card";

export default function ItemContainer(){
    return(
        <div>
            <Card product="Posion Roja" price="50 Rupias"/>
            <Card product="Posion Azul" price="40 Rupias"/>
            <Card product="Posion Verde" price="100 Rupias"/>
        </div>
        )
    }