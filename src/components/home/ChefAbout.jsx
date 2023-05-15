import React from 'react';
import { FcBrokenLink } from 'react-icons/fc';

const ChefAbout = () => {
    return (
        <div className='w-'>
            <div className="w-[90%] mx-auto text-center">
                <span className='inline-flex justify-center'>
                    <FcBrokenLink className='text-7xl text-primary' />
                </span>
                <h1 className='text-5xl duration-200 text-primary text-center font-bold'>Flavorful Creations</h1>
                <p className='my-4 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, architecto expedita! Blanditiis necessitatibus amet perferendis illum ab dignissimos nemo, ullam eveniet id tempore. Iusto perferendis minima aspernatur, nisi ratione quia?</p>
            </div>
        </div>
    );
};

export default ChefAbout;