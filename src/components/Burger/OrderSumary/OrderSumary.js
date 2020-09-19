import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSumary = (props) => {
    const sumaryIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}: {props.ingredients[igKey]}</span>
            </li>
        )
    })
    return (
        <Aux>
            <h3>Order Sumary</h3>
            <p>Your burger has the following ingredients:</p>
            <ul>
                {sumaryIngredients}
            </ul>
            <p>Continue to checkout?</p>
            <Button clicked={props.cancelled} btnType="Danger">CANCEL</Button>
            <Button clicked={props.continue} btnType="Success">CONTINUE</Button>
        </Aux>
    )
};

export default orderSumary;