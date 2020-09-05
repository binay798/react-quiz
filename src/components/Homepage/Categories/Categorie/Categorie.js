import React from 'react';
import classes from './Categorie.module.css';



const Categorie = props => {
    console.log(props.img)
    return (
        <div className={classes.Categorie} style={{backgroundImage: `url(${props.img})`}}>
            
            <div className={classes.Categorie__desc}>
                {props.name}
            </div>
        </div>
    )
}

export default Categorie;