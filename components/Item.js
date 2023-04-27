import { useState } from "react";
import styles from "/styles/Item.module.css"


const Item = (props) => {
    return (
        <>
            <div className={styles.item}>
                <h2 className={styles.itemName}>{props.itemName}</h2>
                <h3 className={styles.price}>{props.price}</h3>
                <h4 className="comments">{props.comments}</h4>
                <button className={styles.addButton} onClick={addOrder(props)}><p className={styles.plus}></p></button>
            </div>
        </>
    );
};

function addOrder(props) {
    console.log("clicked!")
}

export default Item;