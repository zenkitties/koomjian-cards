import Logo from '../Logo';
import ShoppingCart from '../ShoppingCart';

import './Navigation.scss';

const Navigation = () => {
    return (
        <div className="nav-container">
            <Logo name="CCG-N-M" />
            <ul className="nav-list">
                <li><a href="/">Cards</a></li>
                <li><a href="/">Comics</a></li>
                <li><a href="/">Games</a></li>
                <li><a href="/">Supplies</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
            <ShoppingCart />
        </div>
    )
}

export default Navigation;