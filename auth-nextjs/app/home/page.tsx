"use client"
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const App = () => {
    const router = useRouter();
    const [finalData, setFinalData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                let res = await fetch('http://localhost:3000');
                let data = await res.json();
                setFinalData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getData();
    }, []); 

    function handleClick() {
        router.push('/');
    }

    return (
        <div className="m-6">
            <div className="flex items-end justify-end">
                <button className="bg-blue-600 p-2 text-white rounded-[4px]" onClick={handleClick}>
                    Logout
                </button>
            </div>
            <main className="flex justify-center items-center mt-12">
                <table className="border border-[#000000] border-b-[#666666] text-left w-5/12">
                    <thead>
                        <tr className="flex items-center justify-around text-left border border-b-[#000000]">
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                        {finalData.map((obj: any, index: number) => (
                            <tr key={index} className="flex items-center justify-around border border-b-[#000000]">
                                <td>{obj.name}</td>
                                <td>{obj.price}</td>
                            </tr>
                        ))}
                </table>
            </main>
        </div>
    );
};

export default App;
