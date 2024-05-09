import React, { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios'; // Mengimpor axios

import FormValidation from './FormValidation';

const initialValues = {
    name: '',
    email: '',
    password: '',
};

const Form = () => {
    const [inputValues, setInputValues] = useState();
    const [show, setShow] = useState(false);

    const showpass = () => {
        setShow(prevState => !prevState);
    };

    const postData = async ({ name, email, password }) => {
        try {
            const { data } = await axios.post("http://localhost:3000/users", {
                name,
                email,
                password
            });
            setInputValues(data);
        } catch (error) {
            console.log(error);
        }
    };

    const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
        initialValues: initialValues,
        validationSchema: FormValidation,
        onSubmit: (values) => {
            console.log(JSON.stringify(values));
            postData(values);
            alert("Data input!");
        }
    });

    return (
        <div className="max-w-sm mx-auto bg-secondary rounded-lg p-6 my-10">
            <h1 className="text-2xl font-bold mb-4">Page Register</h1>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">Name</label>
                    <input type="text" id="name" name="name" className="bg-tersier p-2 rounded-md h-9 form-input mt-1 block w-full" placeholder="Enter your name"
                        value={values.name}
                        onBlur={handleBlur}
                        onChange={handleChange} />
                    {errors.name && <small className='text-red-500'>{errors.name}</small>}
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <input type="email" id="email" name="email" className="bg-tersier p-2 rounded-md h-9 form-input mt-1 block w-full" placeholder="Enter your email"
                        value={values.email}
                        onBlur={handleBlur}
                        onChange={handleChange} />
                    {errors.email && <small className='text-red-500'>{errors.email}</small>}
                </div>

                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700">Password</label>
                    <input type="password" id="password" name="password" className="bg-tersier p-2 rounded-md h-9 form-input mt-1 block w-full" placeholder="Enter your password"
                        value={values.password}
                        onBlur={handleBlur}
                        onChange={handleChange} />
                    {errors.password && <small className='text-red-500'>{errors.password}</small>}
                </div>

                <div className="flex items-center justify-center">
                    <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Form;

// import React from 'react';
// import { useFormik } from 'formik';
// import FormValidation from './FormValidation';

// const initialValues = {
//     name: '',
//     email: '',
//     password: '',
// }
// const Form = () => {
//     // buat nangkap data dari submit
//     const [inputValues, setInputValues] = useState();
//     const [show, setShow] = useState(false);

//     const showpass = () => {
//         setShow(prevState => !prevState);
//     };

//     const postData = async ({ name, email, password }) => {
//         try {
//             const { data } = await axios.post("http://localhost:3000/users", {
//                 name,
//                 email,
//                 password
//             });
//             setInputValues(data);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     // end nangkep data

//     const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
//         initialValues: initialValues,
//         validationSchema: FormValidation,
//         onSubmit: (values) => {
//             console.log(JSON.stringify(values))
//             postData(values)
//             alert("Data input!")
//         }
//     })


//     if (!postData) return <div>No data</div>

//     return (
//         <div className="max-w-sm mx-auto bg-secondary rounded-lg p-6 my-10">
//             <h1 className="text-2xl font-bold mb-4">Page Register</h1>

//             <form onSubmit={handleSubmit}>
//                 <div className="mb-4">
//                     <label htmlFor="name" className="block text-gray-700">Name</label>
//                     <input type="text" id="name" name="name" className="bg-tersier p-2 rounded-md h-9 form-input mt-1 block w-full" placeholder="Enter your name"
//                         value={values.name}
//                         onBlur={handleBlur}
//                         onChange={handleChange} />
//                     {errors.name && <small className='text-red-500'>{errors.name}</small>}
//                 </div>

//                 <div className="mb-4">
//                     <label htmlFor="email" className="block text-gray-700">Email</label>
//                     <input type="email" id="email" name="email" className="bg-tersier p-2 rounded-md h-9 form-input mt-1 block w-full" placeholder="Enter your email"
//                         value={values.email}
//                         onBlur={handleBlur}
//                         onChange={handleChange} />
//                     {errors.email && <small className='text-red-500'>{errors.email}</small>}
//                 </div>

//                 <div className="mb-6">
//                     <label htmlFor="password" className="block text-gray-700">Password</label>
//                     <input type="password" id="password" name="password" className="bg-tersier p-2 rounded-md h-9 form-input mt-1 block w-full" placeholder="Enter your password"
//                         value={values.password}
//                         onBlur={handleBlur}
//                         onChange={handleChange} />
//                     {errors.password && <small className='text-red-500'>{errors.password}</small>}
//                 </div>

//                 <div className="flex items-center justify-center">
//                     <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Form;
