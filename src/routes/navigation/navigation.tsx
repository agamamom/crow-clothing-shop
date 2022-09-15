import { Fragment, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CartIcon from '../../components/cart-icon/cart-icon';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown';
import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutStart } from '../../store/user/user.action';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/button';
import {
    NavigationContainer,
    NavLinks,
    NavLink,
    LogoContainer,
    NavItem,
    NavLinksActive,
    NavLinkActiveContainer,
} from './navigation.styles';

const Navigation = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);
    const signOutUser = () => dispatch(signOutStart());
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className='logo' />
                </LogoContainer>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                {
                    click ? (
                        <NavLinkActiveContainer>
                            <NavLinksActive>
                                <NavItem>
                                    <NavLink to='/'>HOME</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink to='/shop'>SHOP</NavLink>
                                </NavItem>

                                {currentUser ? (
                                    <NavItem>
                                        <NavLink as='span' onClick={signOutUser}>
                                            SIGN OUT
                                        </NavLink>
                                    </NavItem>
                                ) : (
                                    <NavItem>
                                        <NavLink to='/auth'>
                                            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} >SIGN IN</Button>
                                        </NavLink>
                                    </NavItem>
                                )}
                            </NavLinksActive>
                            <CartIcon />
                        </NavLinkActiveContainer>
                    ) : (
                        <Fragment>
                            <NavLinks>
                                <NavItem>
                                    <NavLink to='/'>HOME</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink to='/shop'>SHOP</NavLink>
                                </NavItem>

                                {currentUser ? (
                                    <NavItem>
                                        <NavLink as='span' onClick={signOutUser}>
                                            SIGN OUT
                                        </NavLink>
                                    </NavItem>
                                ) : (
                                    <NavItem>
                                        <NavLink to='/auth'>
                                            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} >SIGN IN</Button>
                                        </NavLink>
                                    </NavItem>
                                )}
                                <CartIcon />
                            </NavLinks>

                        </Fragment>
                    )
                }
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;