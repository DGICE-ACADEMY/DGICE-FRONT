import React from 'react'
import { Courses} from './Courses';
import { Start } from './Start';
import { About } from './About';
// import { CoursesCarousel } from './Carousel';

export const LandingPage = () => {
  return (
        <>
            <div className=''>
                <Start />
                <Courses />
                <About />
            </div>
        </>
    )
}
