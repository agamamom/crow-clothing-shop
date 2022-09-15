import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutStart } from '../../store/user/user.action';
import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/button';
import {
    NavigationContainer,
    NavLink,
    NavItem,
    NavLinksActive
} from './mobileNavigation.styles';

const MobileNavigation = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const signOutUser = () => dispatch(signOutStart());

    return (
        <Fragment>
            <NavigationContainer>
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
            </NavigationContainer>
        </Fragment>
    );
};

export default MobileNavigation;