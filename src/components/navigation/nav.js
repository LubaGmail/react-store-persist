import { Outlet } from "react-router-dom"
import { useContext } from 'react';
import { useSelector } from "react-redux";

import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { UserContext } from '../../contexts/user-context';
import { signOutUser } from "../../utils/firebase/firebase";
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";

import {
    NavContainer,
    LogoContainer,
    NavLinks,
    NavLink
} from './nav.styles';

const Nav = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const cartOpen = useSelector(selectIsCartOpen)
    
    const handleSignout = async () => {
        await signOutUser();
        setCurrentUser(null)
    }

    return (
        <>
            <NavContainer>
                <LogoContainer to='/'>
                    <CrownLogo />
                </LogoContainer>

                { currentUser && (
                    <NavLink>
                        currentUser: {JSON.stringify(currentUser['email'])}
                    </NavLink>
                ) }

                <NavLinks>
                    <NavLink to='/test'>
                        TEST
                    </NavLink>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>

                    { !currentUser && (
                        <NavLink to='/auth' className="navLink">
                            SIGN IN
                        </NavLink>
                    ) }
                    
                    { currentUser && (
                        <NavLink as='span' onClick={handleSignout} >
                            SIGN OUT
                        </NavLink>
                    ) }

                    <CartIcon />
                </NavLinks>

                { cartOpen && <CartDropdown /> }
               
            </NavContainer>
            
            <Outlet />
        </>
    )
}

export default Nav