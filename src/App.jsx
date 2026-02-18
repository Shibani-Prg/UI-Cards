import React from 'react'
import Section1 from './Components/Page1/Section1'
import Section2 from './Components/Page2/Section2'

const App = () => {

  const users=[
    {
      img:'https://images.unsplash.com/photo-1635766854982-fc151c6e9278?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      intro:'',
      tag:'Satisfied'
    },
    {
      img:'https://media.istockphoto.com/id/1682256689/photo/hispanic-businesswoman-with-arms-crossed-over-white-background.jpg?s=612x612&w=0&k=20&c=TrjInmzlQisixNQbXrva2tON3CTwNumtiwzF2n_NMck=',
      intro:'',
      tag:'UnderServed'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      tag:'Underbanked'
    },
    {
      img:'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww',
      intro:'',
      tag:'Average'
    }
  ]
  return (
    <div >
      <Section1 users={users}/>
      <Section2 />

    </div>
  )
}

export default App