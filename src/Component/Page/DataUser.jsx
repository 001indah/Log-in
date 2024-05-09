// import { data } from 'autoprefixer';
import React from 'react';
import UserContext from './UserContect';


const DataUser = () => {

    const { userList } = UserContext()
    if (!userList) return <div>No Data</div>

    return (
        <div className="max-w-md mx-auto my-10">
            <section>
                <table className='border-collapse border'>
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">NAME</th>
                            <th className="border px-4 py-2">EMAIL</th>
                            <th className="border px-4 py-2">PASSWORD</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList.map((u) => (
                            <tr key={u.id} >
                                <td className="border px-4 py-2">{u.name}</td>
                                <td className="border px-4 py-2">{u.email}</td>
                                <td className="border px-4 py-2">{u.password}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default DataUser;
