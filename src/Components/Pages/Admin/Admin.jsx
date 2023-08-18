import React, { useState } from 'react'
import Svgs from '../../Elements/Svgs'
import Form from '../../Elements/Form/Form'
import API_DATA from '../../../API/API_DATA';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Admin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        }
        return newErrors;
    };
    const notify = (text) => toast.success(text);
    const notify_error = (text) => toast.error(text);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length === 0) {


            fetch(API_DATA.BASE_URL + API_DATA.LOGIN, {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }).then(resp => {
                return resp.json()

            }).then(data => {
                console.log(data);

                if (data.status == '201') {
                    notify('Logged in successfully!');
                } else {
                    if (data.message) {
                        notify_error(data.message)
                    } else {
                        notify_error("Enable to login")
                    }
                }
            });



        } else {
            setErrors(newErrors);
        }
    };


    return (
        <div className="min-h-[100vh] grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col lg:pt-[3rem] lg:px-[4rem] px-8 py-5">
                <div className="flex items-center gap-3">
                    <Svgs.Logo fill={'black'} />
                </div>
                <div className="flex flex-1 flex-col gap-5 justify-center md:py-[3rem] py-[1.75rem] md:w-[75%] lg:mx-0 mx-auto slide-in-bottom w-full lg:py-0">
                    <h1 className="text-3xl font-light text-[#7B7B7B] lg:text-left text-center">
                        <span className="font-semibold text-black">BBC </span>
                        Backend
                    </h1>
                    <p className="text-[#7B7B7B] lg:text-left text-center text-sm">
                        Welcome Back to Backend Portal, Please Sign In your account.
                    </p>

                    <div className="flex flex-col gap-4">
                        <Form.Input error={errors.email} onChange={handleChange} label={'Username'} type={'email'} placeholder={"Enter your email address"} name={'email'} />

                        <Form.Password error={errors.password} onChange={handleChange} label={'Password'} placeholder={'Enter your password'} name={'password'} />

                        <div className="flex justify-start ">
                            <Form.Button onClick={handleSubmit}>
                                <p>Login</p>
                                <Svgs.Arrow />
                            </Form.Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-yellow-500/50">
                <div className="px-8 py-5 lg:px-[4rem] lg:pt-[3rem] flex flex-col h-full">
                    <div className="flex items-center justify-end gap-4 lg:flex-row flex-col">
                        <p>Follow us on:</p>
                        <div className="flex items-center justify-end gap-3">
                            <a target="_blank" href="facebook.com">
                                <div className="bg-primary cursor-pointer h-[35px] w-[35px] rounded-full flex items-center justify-center">
                                    <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.75244 3.73606H10.1366V0.214111H7.33394V0.226813C3.93799 0.34709 3.24198 2.25603 3.18064 4.26098H3.17365V6.01967H0.861206V9.46871H3.17365V18.714H6.65864V9.46871H9.51341L10.0649 6.01967H6.65978V4.95712C6.65978 4.27953 7.11066 3.73606 7.75244 3.73606Z" fill="white"></path>
                                    </svg>
                                </div>
                            </a><a target="_blank" href="instagram.com">
                                <div className="bg-primary cursor-pointer h-[35px] w-[35px] rounded-full flex items-center justify-center">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.28955 0.054C6.24927 0.00981817 6.55527 0 9 0C11.4447 0 11.7507 0.0106364 12.7096 0.054C13.6685 0.0973636 14.3231 0.250364 14.8958 0.472091C15.4955 0.698727 16.0396 1.053 16.4896 1.51118C16.9478 1.96036 17.3013 2.50364 17.5271 3.10418C17.7496 3.67691 17.9018 4.33145 17.946 5.28873C17.9902 6.25009 18 6.55609 18 9C18 11.4447 17.9894 11.7507 17.946 12.7105C17.9026 13.6677 17.7496 14.3223 17.5271 14.895C17.3013 15.4956 16.9472 16.0398 16.4896 16.4896C16.0396 16.9478 15.4955 17.3013 14.8958 17.5271C14.3231 17.7496 13.6685 17.9018 12.7113 17.946C11.7507 17.9902 11.4447 18 9 18C6.55527 18 6.24927 17.9894 5.28955 17.946C4.33227 17.9026 3.67773 17.7496 3.105 17.5271C2.50439 17.3012 1.96022 16.9472 1.51036 16.4896C1.05249 16.0402 0.698167 15.4963 0.472091 14.8958C0.250364 14.3231 0.0981818 13.6685 0.054 12.7113C0.00981817 11.7499 0 11.4439 0 9C0 6.55527 0.0106364 6.24927 0.054 5.29036C0.0973636 4.33145 0.250364 3.67691 0.472091 3.10418C0.6985 2.5037 1.0531 1.9598 1.51118 1.51036C1.9604 1.05259 2.50402 0.698272 3.10418 0.472091C3.67691 0.250364 4.33145 0.0981818 5.28873 0.054H5.28955ZM12.6368 1.674C11.6877 1.63064 11.403 1.62164 9 1.62164C6.597 1.62164 6.31227 1.63064 5.36318 1.674C4.48527 1.71409 4.00909 1.86055 3.69164 1.98409C3.27191 2.14773 2.97164 2.34164 2.65664 2.65664C2.35804 2.94713 2.12824 3.30078 1.98409 3.69164C1.86055 4.00909 1.71409 4.48527 1.674 5.36318C1.63064 6.31227 1.62164 6.597 1.62164 9C1.62164 11.403 1.63064 11.6877 1.674 12.6368C1.71409 13.5147 1.86055 13.9909 1.98409 14.3084C2.12809 14.6986 2.358 15.0529 2.65664 15.3434C2.94709 15.642 3.30136 15.8719 3.69164 16.0159C4.00909 16.1395 4.48527 16.2859 5.36318 16.326C6.31227 16.3694 6.59618 16.3784 9 16.3784C11.4038 16.3784 11.6877 16.3694 12.6368 16.326C13.5147 16.2859 13.9909 16.1395 14.3084 16.0159C14.7281 15.8523 15.0284 15.6584 15.3434 15.3434C15.642 15.0529 15.8719 14.6986 16.0159 14.3084C16.1395 13.9909 16.2859 13.5147 16.326 12.6368C16.3694 11.6877 16.3784 11.403 16.3784 9C16.3784 6.597 16.3694 6.31227 16.326 5.36318C16.2859 4.48527 16.1395 4.00909 16.0159 3.69164C15.8523 3.27191 15.6584 2.97164 15.3434 2.65664C15.0528 2.35806 14.6992 2.12826 14.3084 1.98409C13.9909 1.86055 13.5147 1.71409 12.6368 1.674ZM7.85045 11.7745C8.49245 12.0417 9.20731 12.0778 9.87294 11.8765C10.5386 11.6752 11.1137 11.2491 11.5 10.6709C11.8864 10.0927 12.06 9.39835 11.9913 8.70636C11.9226 8.01437 11.6157 7.3677 11.1232 6.87682C10.8092 6.56303 10.4295 6.32276 10.0115 6.1733C9.59355 6.02385 9.14762 5.96893 8.70586 6.0125C8.2641 6.05608 7.83749 6.19705 7.45675 6.42529C7.07601 6.65352 6.75061 6.96334 6.50397 7.33242C6.25734 7.70151 6.09561 8.12069 6.03042 8.55979C5.96524 8.99888 5.99821 9.44697 6.12699 9.87179C6.25576 10.2966 6.47712 10.6876 6.77514 11.0166C7.07315 11.3456 7.4404 11.6044 7.85045 11.7745ZM5.72891 5.72891C6.15847 5.29934 6.66844 4.95859 7.2297 4.72611C7.79095 4.49363 8.3925 4.37398 9 4.37398C9.6075 4.37398 10.209 4.49363 10.7703 4.72611C11.3316 4.95859 11.8415 5.29934 12.2711 5.72891C12.7007 6.15847 13.0414 6.66844 13.2739 7.2297C13.5064 7.79095 13.626 8.3925 13.626 9C13.626 9.6075 13.5064 10.209 13.2739 10.7703C13.0414 11.3316 12.7007 11.8415 12.2711 12.2711C11.4035 13.1386 10.2269 13.626 9 13.626C7.7731 13.626 6.59646 13.1386 5.72891 12.2711C4.86136 11.4035 4.37398 10.2269 4.37398 9C4.37398 7.7731 4.86136 6.59646 5.72891 5.72891ZM14.652 5.06291C14.7584 4.96249 14.8437 4.84174 14.9026 4.7078C14.9616 4.57385 14.993 4.42945 14.9952 4.28312C14.9973 4.1368 14.97 3.99154 14.915 3.85594C14.86 3.72033 14.7784 3.59715 14.6749 3.49367C14.5714 3.39019 14.4482 3.30853 14.3126 3.25351C14.177 3.1985 14.0317 3.17125 13.8854 3.17339C13.7391 3.17552 13.5947 3.20699 13.4607 3.26593C13.3268 3.32488 13.2061 3.4101 13.1056 3.51655C12.9103 3.72357 12.8034 3.99855 12.8076 4.28312C12.8117 4.5677 12.9266 4.83945 13.1279 5.04069C13.3291 5.24193 13.6008 5.35682 13.8854 5.36097C14.17 5.36512 14.445 5.2582 14.652 5.06291Z" fill="white"></path>
                                    </svg>
                                </div>
                            </a><a target="_blank" href="twitter.com">
                                <div className="bg-primary cursor-pointer h-[35px] w-[35px] rounded-full flex items-center justify-center">
                                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 1.89789C19.2645 2.21861 18.4744 2.43531 17.6438 2.53326C18.5008 2.0286 19.142 1.23432 19.4477 0.298631C18.6425 0.769299 17.7612 1.1006 16.8422 1.27812C16.2242 0.628768 15.4057 0.198364 14.5136 0.0537355C13.6216 -0.0908933 12.706 0.0583448 11.909 0.47828C11.1119 0.898215 10.4781 1.56535 10.1058 2.37611C9.73358 3.18688 9.64374 4.0959 9.85026 4.96206C8.2187 4.88144 6.62259 4.46412 5.16553 3.73718C3.70847 3.01023 2.42301 1.98991 1.39258 0.742437C1.04025 1.34053 0.837664 2.03398 0.837664 2.7725C0.837271 3.43734 1.00364 4.09199 1.32201 4.67838C1.64038 5.26477 2.10091 5.76476 2.66273 6.13398C2.01117 6.11358 1.37397 5.94032 0.804193 5.62863V5.68064C0.804127 6.6131 1.13189 7.51687 1.73186 8.23859C2.33184 8.96031 3.16707 9.45553 4.09583 9.64022C3.4914 9.8012 2.85769 9.82491 2.24258 9.70957C2.50462 10.5119 3.01506 11.2135 3.70243 11.7162C4.3898 12.2188 5.21969 12.4974 6.07593 12.5128C4.62242 13.6357 2.82735 14.2448 0.979477 14.2421C0.652146 14.2422 0.325091 14.2234 0 14.1858C1.87569 15.3726 4.05914 16.0024 6.28909 16C13.8378 16 17.9644 9.84739 17.9644 4.51132C17.9644 4.33796 17.96 4.16286 17.9521 3.9895C18.7548 3.41825 19.4476 2.71087 19.9982 1.90049L20 1.89789Z" fill="white"></path>
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div>
                            <div className="h-full flex items-center justify-center flex-col gap-3">
                                <div className="w-[20rem] h-[20rem] md:h-[25rem] md:w-[25rem] lg:h-[30rem] lg:w-[30rem] relative flex justify-center items-center">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/BBC_News_2022_%28Alt%29.svg/1200px-BBC_News_2022_%28Alt%29.svg.png" className="relative z-10 h-[10rem] object-contain" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin