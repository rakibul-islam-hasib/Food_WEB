import React, { useEffect, useState } from 'react';
const Chef = () => {
    const [chefData, setChefData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setChefData(data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className='my-20'>
            <h1 className='text-5xl font-bold text-center uppercase'>Simple and tasty recipes <span className='text-primary block'>BY Our chef</span></h1>
            <div className="w-[70%] mx-auto text-center my-4">
                <p>Simple and tasty recipes are dishes that are easy to prepare and have a delicious taste. They are ideal for individuals with busy schedules or those who are new to cooking.</p>
            </div>
            <div className="w-[80%] md:mt-12 mx-auto gap-8 grid md:grid-cols-2   lg:grid-cols-3">
                {
                    chefData.map((data, i) => <div
                        key={i}
                        style={{ background: 'linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #E7F9FD 100%)' }}
                        className="p-4  max-w-lg border cursor-pointer border-indigo-300 rounded-2xl  duration-100 flex flex-col items-center"
                    >

                        <img src={data.img}
                            className="shadow h-[200px] w-full rounded-lg overflow-hidden border" />



                        <div className="mt-auto">
                            <h4 className="font-bold text-center my-4 text-xl">{data.name}</h4>
                            <div className="text-left">
                                <span className="inline-flex items-center gap-4">
                                    <img className='h-[15px] w-[15px]' src="https://i.ibb.co/Dg7wrtT/cook-book.png" alt="" />
                                    <p>Total Recipes : {data?.recipes?.length}</p>
                                </span>
                                <br />
                                <span className="inline-flex items-center gap-4">
                                    <img className='h-[15px] w-[15px]' src="https://i.ibb.co/PQZspx3/safety.png" alt="" />
                                    <p>{data.years_of_experience} Year Experience</p>
                                </span>
                                <br />
                                <span className="inline-flex  items-center gap-4">
                                    <img className='h-[15px] w-[15px]' src="https://i.ibb.co/wCpTTZ8/heart.png" alt="" />
                                    <p>Total Likes : {data.likes}</p>
                                </span>
                            </div>
                            <div className="mt-5 flex justify-center">
                                <button
                                    type="button"
                                    className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"> View Recipes</button>
                            </div>
                        </div>
                    </div>
                    )}
            </div>
        </div>
    );
};

export default Chef;