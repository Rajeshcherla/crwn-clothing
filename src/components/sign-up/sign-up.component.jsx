import { useState } from "react";

import FormInput from '../form-input/form-input.component';
import './sign-up.styles.scss';
import Button from '../button/button.component';
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";

const defaultFormField = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
};

const SignUpForm = () => {
    const [formField, setFormField] = useState(defaultFormField);
    const { displayName, email, password, confirmPassword } = formField;
    const dispatch = useDispatch();

    const resetForm = () => {
        setFormField(defaultFormField);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            dispatch(signUpStart(email, password, displayName));
            resetForm();
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert('Email already in use')
            } else {
                console.error(error.code)
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormField({ ...formField, [name]: value })
    };

    return (
        <div className="sign-up-container">
            <h2>Don't have an account</h2>
            <span>Sign up with your Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name"
                    type="text"
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName} />

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

                <FormInput
                    label="Confirm Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword} />

                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
}

export default SignUpForm;