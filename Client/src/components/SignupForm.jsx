import { useState } from "react";

const SignupForm = () => {
    const [userSignUpData, setUserSignUpData] = useState({
        name:"",
        email:"",
        password:"",
        role:"user"
    });
    const [error, setError] = useState({
        name:"",
        email:"",
        password:"",
        general:""
    });

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setUserSignUpData(prev => ({...prev, [name]:value}));
        setError(prev => ({...prev, [name]:"",general:""}));
    };

    const validate = () => {
        const newErrors = {};
        if (!userSignUpData.name.trim()) newErrors.name = "Name is required";
        if (!userSignUpData.email.trim()) newErrors.email = "Email is required";
        else if (!/^\S+@\S+\.\S+$/.test(userSignUpData.email)) newErrors.email = "Email forat is invalid";
        if (!userSignUpData.password.trim()) newErrors.password = "Password is required";
        else if (!userSignUpData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
        return newErrors;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0){
            setError(prev => ({...prev, ...validationErrors}));
            return;
        }

        try {
            
        } catch (err) {
            
        }
    };

    return (
        <>
            <div className="">
                <div className="md:mb-4">
                    <h3 className="text-gray-500 md:text-sm">Create new Account</h3>
                </div>
            </div>
        </>
    );
};

export default SignupForm;