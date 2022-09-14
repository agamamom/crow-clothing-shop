import SignInForm from '../../components/sign-in-form/sign-in-form';
import SignUpForm from '../../components/sign-up-form/sign-up-form';
import './authentication.scss';

const Authentication = () => {
    return (
        <div className='authentication-container'>
            <div className="signInForm">
                <SignInForm />
            </div>
            <div className="signUpForm">
                <SignUpForm />
            </div>
        </div>
    );
};

export default Authentication;
