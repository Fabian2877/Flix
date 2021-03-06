import requests from '..//utils/requests';
import {useRouter} from 'next/router'










function Nav() {

    const router = useRouter();

    let entries = Object.entries(requests); 
    
    let titles = entries.map(([key, {title, url}]) => {
        return (
            <h2 key={key} className='cursor-pointer transition
             duration-100 
             transform hover:scale-125
             hover: text-white
            active:text-green-500
             last:pr-24
             mb-5
             ' 
             onClick={() => router.push(`/?genre=${key}`) }>
                 
                {title}
                </h2>

        )


    })


    return (
        <nav className='relative'>
            <div className='flex px-10 sm:px-20 text-2xl
         whitespace-nowrap space-x-10 sm:space-x-20
         scrollbar-hide
         overflow-x-scroll

         
         '>
            {titles}
            </div>




            <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A]  h-10 w-1/12  lg:hidden'/>
          
         
      
        </nav>
    )
}

export default Nav;