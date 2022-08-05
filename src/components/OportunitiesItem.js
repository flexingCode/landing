import React from 'react'
import molecula from '../assets/images/molecula.svg'
const OpportunityItem=({
    image,
    text,
    frame=false
})=>{


    return(
        <>
            <img src={image} className='ml-4 mr-4' style={{
                width:"50%"
            }}/>
            <div style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                position:"relative",
                overflow:"visible"
            }}>
                {frame && <img src={molecula} className="center-image" /> }
                <h3 className='blue-title font-bold text-center'>
                    {text}
                </h3>
            </div>
        </>
    )
}

export const OpportunityItemDesk=({
    image,
    text,
    frame=false
})=>{


    return(
        <div className='flex flex-row justify-center'>
            <img src={image} className='ml-4 mr-4 w-20 md:mr-8 md:w-16 lg:w-36 lg:mr-24' />
            <div style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                position:"relative",
                overflow:"visible"
            }}>
                {frame && <img src={molecula} className="center-image " /> }
                <h3 className='blue-title font-bold text-center md:text-lg lg:text-2xl'>
                    {text}
                </h3>
            </div>
        </div>
    )
}

export default OpportunityItem