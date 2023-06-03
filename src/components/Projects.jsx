import React from 'react';
import ProjectsItem from './ProjectsItem';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.webp';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpeg';




const Projects = () => {
  return (
    <div id='projects' className='max-w-full m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e] '>
            Projects
        </h1>
        <p className='my-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis impedit maxime, exercitationem dolorem porro laboriosam inventore placeat, suscipit ab reprehenderit blanditiis quae quasi earum alias dolor commodi voluptatibus vero tempore!
        </p>
        <div className='grid sm:grid-cols-2 gap-12 '>
            <ProjectsItem img={img1} title='Crypto App' />
            <ProjectsItem img={img2} title='Propety App' />            
            <ProjectsItem img={img3} title='Netflix App' />            
            <ProjectsItem img={img4} title='Twich App' />

        </div>
    </div>
  )
}

export default Projects