import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {
    let burgerIngredient = Object.keys(props.ingredients) /* tomo las propiedades del objeto recibido y lo trasformo en un array */
    .map(igKey => {/* recorro cada key (ahora son los indices del array) y creo otro array con tantos indices como valosres tenia cada propiedad del objeto original */
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            console.log(igKey);
            return <BurgerIngredient type={igKey} key={igKey + i} />
        })
    }).reduce((acum, el) => {
        return acum.concat(el)
    }, [])
    if (burgerIngredient.length === 0) {
        burgerIngredient = <p>Please start adding ingredients!</p>
    }
    console.log(burgerIngredient);
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {burgerIngredient}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
};

export default burger;