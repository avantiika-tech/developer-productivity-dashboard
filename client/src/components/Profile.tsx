import { useState, useEffect } from "react";

function Profile() {
    const [data, setData] = useState<{ status: string; message: string; user: any } | null>(null);

    const fetchProfile = async () => {
        try {
            const response = await fetch("http://localhost:5000/profile", {
                method: "GET",
                credentials: "include"
            });
            const res = await response.json();
            console.log(res);
            setData(res);
        } catch (error) {
            console.error("Error fetching profile:", error);
        }
    }

    useEffect(() => {
        fetchProfile();
    }, []);



    return (
        <div>
            <p>{data?.message}</p>
            <p>{data?.user?.name}</p>
            <p>{data?.user?.email}</p>
        </div>
    );
}

export default Profile;