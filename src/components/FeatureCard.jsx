import React from 'react'

const FeatureCard = ({feature}) => {
    return (
        <section className='flex flex-col items-center bg-slate-900 p-4 border border-slate-800 rounded-xl gap-4 mb-10 transition-shadow shadow-lg  hover:shadow-blue-600 '>
            <div className='text-4xl'>{feature.icon}</div>
            <div className='font-medium text-xl'>{feature.title}</div>
            <div className='text-center text-gray-300 font-light'>{feature.description}</div>
        </section>
    )
}

export default FeatureCard