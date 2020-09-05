import React , {useContext} from 'react';
import { GlobalContext } from '../../../Store/Store';
import Categorie from './Categorie/Categorie';
import classes from './Categories.module.css';

const Categories = (props) => {
    const context = useContext(GlobalContext);
    const categoriesList = context.state.categories;

    let categoriesDisplay = categoriesList.map(item => {
        return <Categorie name={item.name} img={item.img} key={item.id} index={item.id} />
    })
    
    if(!props.load) {
       categoriesDisplay.splice(6,categoriesDisplay.length);
       
    }
    return (
        <div className={classes.Categories}>
            {categoriesDisplay}
        </div>
    )
}

export default Categories;