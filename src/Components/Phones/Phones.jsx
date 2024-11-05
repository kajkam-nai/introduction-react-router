import axios from "axios";
import { useEffect, useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Phones = () => {
    const [phones, setPhones] = useState([]);
    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data=>{
            const phoneData = data.data.data;
            const slugData = phoneData.map(phone=>{
                const obj={
                    name:phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])

                }
                return obj;
            })
            console.log(slugData);
            setPhones(slugData)
        })
    },[])
    return (
        <div>
            <h3>Total Phones :{phones.length}</h3>
            <div className="grid grid-cols-3">
                {
                    phones.map((phone,index) => <div key={index} className="border p-2 m-2 rounded-lg">
                        <h3>Name: {phone.name}</h3>
                        <h3>Price: {phone.price}</h3>
                    </div>)
                }
            </div>

            <div style={{width:'100%', height:400}}>
                <ResponsiveContainer>
                    <AreaChart
                        data={phones}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
                        
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            {/* <div style={{ width: '100%', height: 400 }}>
                <ResponsiveContainer>
                    <AreaChart
                        data={phones}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
                    </AreaChart>
                </ResponsiveContainer>
            </div> */}
            
        </div>
    );
};

export default Phones;