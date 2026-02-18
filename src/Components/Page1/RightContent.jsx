import React from 'react'
import RightCard from './RightCard'


const RightContent = (props) => {
  console.log(props.users);

  return (
    <div id="right" className='h-full flex  rounded-4xl gap-10 overflow-x-auto p-6 w-2/3'>
      {props.users.map(function (elem, idx) {
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} />

      })}



    </div>
  )
}

export default RightContent