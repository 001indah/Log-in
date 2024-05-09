import axios from "axios";
import { useEffect, useState } from "react";


const UserContext = () => {
    const [userList, setUserList] = useState([]);

    const fetchUserList = async () => {
        try {
            const { data } = await axios.get("http://localhost:3000/users");
            setUserList(data)
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchUserList();
    }, []);

    return { userList, fetchUserList };
};

export default UserContext;
