import React from 'react'
import WorkItem from './WorkItem'


const data = [
    {
        year: 2023,
        title: 'Content Creator',
        duration: '3 Years',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit id obcaecati rem, tenetur corporis ipsa asperiores beatae consectetur, aliquid sapiente cupiditate ut amet voluptatum quo nulla! Nam voluptatibus ea sapiente?'
    },
    {
        year: 2017,
        title: 'Google',
        duration: '3 Years',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit id obcaecati rem, tenetur corporis ipsa asperiores beatae consectetur, aliquid sapiente cupiditate ut amet voluptatum quo nulla! Nam voluptatibus ea sapiente?'
    },
    {
        year: 2015,
        title: 'Amazon',
        duration: '2 Years',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit id obcaecati rem, tenetur corporis ipsa asperiores beatae consectetur, aliquid sapiente cupiditate ut amet voluptatum quo nulla! Nam voluptatibus ea sapiente?'
    },
    {
        year: 2012,
        title: 'Facebook',
        duration: '3 Years',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit id obcaecati rem, tenetur corporis ipsa asperiores beatae consectetur, aliquid sapiente cupiditate ut amet voluptatum quo nulla! Nam voluptatibus ea sapiente?'
    },
]
const Work = () => {
  return (
    <div id='work' className='max-w-full m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {
            data.map((item, id) => (
                    <WorkItem key={id} year={item.year} title={item.title} duration={item.duration} details={item.details} />
            ))
        }
        
    </div>

  )
}

export default Work