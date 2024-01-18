import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import data from '../assests/data.json'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Work = () => {
  return (
    <div id='work'>
        <h2>WORK</h2>
        <section>
            <article>
                <Carousel showArrows = {false}
                showIndicators = {false}
                showStatus = {false}
                showThumbs = {false}
                interval={1000}
                infiniteLoop = {true}
                autoPlay = {true}>
                {
                    data.projects.map(i=>(
                        <div key={i.title} className='workItem'>
                            <img src={i.imgSrc} alt="" />
                            <aside>
                                <h3>{i.title}</h3>
                                <p>{i.description}</p>
                                <a target={'_blank'} href={i.url}></a>
                            </aside>
                        </div>
                    ))
                }
                </Carousel>
            </article>
        </section>
    </div>
  )
}

export default Work