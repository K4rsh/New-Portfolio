import aboutImg from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants'

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-10 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap items-start">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
  <img src={aboutImg} alt='About' className="w-1/2 h-1/3 rounded-3xl shadow-lg" />
</div>
          
        </div>
        <div className="w-full lg:w-1/2">
            <div className="flex justify-center">
              <p className='my-2 maxw-xl py-6'>{ABOUT_TEXT}</p>
            </div>
          </div>

      </div>
      </div>
  )
}

export default About