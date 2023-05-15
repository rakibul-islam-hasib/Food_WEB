import React from 'react';
const Hero = () => {
    return (
        <div className='w-[90%] h-[100vh]  flex justify-center items-center  mx-auto'>

            <div className="text-white text-center w-full md:w-[70%]">
                <h1 className='text-7xl font-bold  mb-3'>Flavorful Creations</h1>
                <p className='text-base my-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores fuga quia ducimus magnam maiores asperiores numquam dolore at est doloribus!</p>
                <button className='bg-primary px-11 py-3 rounded-full'>Get Started</button>
            </div>

        </div>
    );
};

export default Hero;