import React from 'react'

const RightCardContent = (props) => {
    return (
        <div>
            <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
                {/* Top badge */}
                <h2 className='bg-white font-semibold text-1xl rounded-full h-12 w-12 flex justify-center items-center'>
                    {props.id+1}
                </h2>

                {/* Bottom content wrapper */}
                <div className="space-y-4">
                    <p className='text-xl leading-relaxed text-white mb-14'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Suscipit, consequuntur praesentium nostrum at veritatis accusamus?
                    </p>

                    <div className="flex items-center justify-between">
                        <button className="px-4 py-2 bg-blue-950 text-white font-semibold rounded-full">
                           {props.tag }
                        </button>

                        <button className="h-10 w-10  bg-blue-950 text-white flex items-center justify-center rounded-full px-4 py-3">
                            <i className="ri-arrow-right-line"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent