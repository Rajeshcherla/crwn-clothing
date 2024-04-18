import { useState } from "react";

import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import Button from '../button/button.component';
import { useDispatch } from "react-redux";
import { googleSignInStart, emailSignInStart } from "../../store/user/user.action";

const defaultFormField = {
    email: "",
    password: "",
};

const SignInForm = () => {
    const [formField, setFormField] = useState(defaultFormField);
    const { email, password } = formField;
    const dispatch = useDispatch();

    const resetForm = () => {
        setFormField(defaultFormField);
    }

    const signInWithGoogle = async () => {
        dispatch(googleSignInStart());
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            dispatch(emailSignInStart(email, password));
            resetForm();
        } catch (error) {
            if (error.code === "auth/invalid-credential") {
                alert("Invallid Email or Password")
            } else {
                console.log(error);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormField({ ...formField, [name]: value })
    };

    return (
        <div className="sign-in-container">
            <h2>Aready have an account</h2>
            <span>Sign in with your Email and Password</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email} />

                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password} />

                <div className="buttons-container">
                    <Button type="submit">Sign in</Button>
                    <Button type='button' buttonType='google'
                        onClick={signInWithGoogle}>Google Sign in</Button>
                </div>
            </form>
        </div>
    );
}

export default SignInForm;