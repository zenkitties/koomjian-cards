import './ShoppingCart.scss';

import Cart from '../imgs/shopping-cart.svg';

const ShoppingCart = () => {
    return (
        <div className="shopping-container">
            <div className="cart-container">
                <img className="shopping-bag" src={Cart} />
                <div className="quantity">0</div>
            </div>
            <div className="auth">
                <ul>
                    <li><a href="/">Register</a></li>
                    <li><a href="/">Login</a></li>
                </ul>
            </div>
        </div>
    )
}

export default ShoppingCart;