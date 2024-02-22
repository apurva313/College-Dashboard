import React, { useState } from 'react'

const Attendance = () => {

    const dataList = [
        {
            "id": 1,
            "name": "kolkata",
            "room": "mbt1",
            "price": 2000,
            "state": "West Bengal"
        },
        {
            "id": 2,
            "name": "delhi",
            "room": "dtc2",
            "price": 2500,
            "state": "Delhi"
        },
        {
            "id": 3,
            "name": "mumbai",
            "room": "mkt3",
            "price": 1800,
            "state": "Maharashtra"
        },
        {
            "id": 4,
            "name": "chennai",
            "room": "ctc4",
            "price": 2200,
            "state": "Tamil Nadu"
        },
        {
            "id": 5,
            "name": "bangalore",
            "room": "bkt5",
            "price": 1900,
            "state": "Karnataka"
        },
        {
            "id": 6,
            "name": "hyderabad",
            "room": "hdt6",
            "price": 2100,
            "state": "Telangana"
        },
        {
            "id": 7,
            "name": "ahmedabad",
            "room": "akt7",
            "price": 1700,
            "state": "Gujarat"
        },
        {
            "id": 8,
            "name": "pune",
            "room": "pkt8",
            "price": 2000,
            "state": "Maharashtra"
        },
        {
            "id": 9,
            "name": "jaipur",
            "room": "jpt9",
            "price": 1800,
            "state": "Rajasthan"
        },
        {
            "id": 10,
            "name": "lucknow",
            "room": "lkt10",
            "price": 2200,
            "state": "Uttar Pradesh"
        },
        {
            "id": 11,
            "name": "chandigarh",
            "room": "cgt11",
            "price": 1900,
            "state": "Punjab"
        },
        {
            "id": 12,
            "name": "bhopal",
            "room": "bpt12",
            "price": 2100,
            "state": "Madhya Pradesh"
        },
        {
            "id": 13,
            "name": "patna",
            "room": "ptt13",
            "price": 1700,
            "state": "Bihar"
        },
        {
            "id": 14,
            "name": "kochi",
            "room": "kct14",
            "price": 2000,
            "state": "Kerala"
        },
        {
            "id": 15,
            "name": "guwahati",
            "room": "gtt15",
            "price": 1800,
            "state": "Assam"
        },
        {
            "id": 16,
            "name": "nagpur",
            "room": "ngt16",
            "price": 2200,
            "state": "Maharashtra"
        },
    ];

    const [searchText, setSearchText]= useState("");
    const [data,setData]= useState(dataList);
    //exculde column list frojm filter

    const exculdeColumns=["id"];

    //change event of search input
    const hc= value => {
        setSearchText(value);
        filterData(value);
        
    }
    const filterData= (value)=>{
        const lowercaseValue= value.toLowerCase().trim();
        if(lowercaseValue ==="") setData(dataList);
        else{
            const filteredData= dataList.filter(item =>{
                    return Object.keys(item).some(key =>
                        exculdeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercaseValue))
            });
            setData(filteredData);
        }

    }



    return <>
        <div>
            Search: <input type='text' placeholder='Type To search here..' value={searchText} onChange={e => hc(e.target.value)}/>

                    <div className='box-container'>
                        {
                            data.map((x)=>(
                                <div>
                                    <b>Name</b>: {x.name} <br/>
                                    <b>Price</b>: {x.price} <br/>
                                    <b>Room</b>: {x.room} <br/>
                                    <b>State</b>: {x.state} <br/>
                                </div>
                            ))
                        }
                    </div>
        </div>
    </>
}

export default Attendance
