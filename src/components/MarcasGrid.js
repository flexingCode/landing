import React from 'react'


const MarcasGrid = ({ card, images }) => {
    return (
        <div className='mt-16'>
            <div className='grid grid-cols-2 gap-16 md:flex md:flex-wrap md:justify-center'>
                {images.map(img => {
                    if (card) {
                        return (
                            <div className='w-24 h-24  shadow-lg rounded-full flex justify-center items-center p-5 md:w-48 md:h-48 lg:w-72 lg:h-72' style={{ background: "#fff",zIndex:1 }} >
                                <img style={{ width: "75%" }} src={img} />
                            </div>
                        )
                    }else{
                        return (
                            <div className='lg:w-60 lg:mr-4 lg:ml-4 flex justify-center items-center'>
                                <img  className="md:w-24 lg:w-60 lg:max-w-60 md:flex-1 w-full" src={img} />
                            </div>
                        )
                    }

                })}

            </div>
        </div>
    )
}

export default MarcasGrid