import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Auxiliary';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 2,
            cheese: 1,
            meat: 2
        }
    }
    render() {
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <div>Builder Controls</div>
            </Aux>
        )
    }
};

export default BurgerBuilder;