import React from 'react';

const Navigasi = () => {
    return (
        <div className="w-screen bg-primary flex items-center justify-center">
            <nav className="flex fixed top-0 left-0 py-5 shadow-lg rounded-lg w-full lg:static lg:shadow-none lg:rounded-none">
                <h1 className="text-black bg-white text-lg font-semibold px-4">Network Call Practice</h1>
                <div className="flex justify-center w-full lg:w-auto">
                    <ul className="mx-auto block lg:flex lg:gap-8 px-4"> {/* Menambahkan kelas mx-auto untuk membuat list berada di tengah secara horizontal */}
                        <li className="group">
                            <a href="#" className="text-base text-slate-100 py-2 flex items-center group-hover:text-white">
                                Users
                            </a>
                        </li>
                        <li className="group">
                            <a href="#" className="text-base text-slate-100 py-2 flex items-center group-hover:text-white">
                                Register
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navigasi;
