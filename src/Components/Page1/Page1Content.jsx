import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'
import 'remixicon/fonts/remixicon.css'

const Page1Content = (props) => {
  console.log(props.users);
  return (
    <div className='pb-1 pt-6 flex justify-between gap-10 items-center px-18 h-[90vh]'>
        <LeftContent />
        <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content