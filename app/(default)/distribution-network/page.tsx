import DMart from '../../../public/images/DMart.png';
import Image from 'next/image';
import all from '../../../public/images/all.jpeg';
import all1 from '../../../public/images/all1.jpeg';
import all2 from '../../../public/images/all2.jpeg';
import all3 from '../../../public/images/all3.jpeg';


export default function Features() {
  return (
    <section className='mt-[13%]'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">The majority our customers do not understand their workflows.</h2>
            <p className="text-xl text-gray-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className='flex flex-wrap gap-10'>
          <Image src={all} alt='dmart' style={{width:'48%'}} />
          <Image src={all1} alt='dmart' style={{width:'48%'}} />
          <Image src={all2} alt='dmart' style={{width:'48%'}} />
          <Image src={all3} alt='dmart' style={{width:'48%'}} />


          </div>


          {/* Items */}
          

        </div>
      </div>
    </section>
  )
}
