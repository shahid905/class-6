import Image from 'next/image'
import Button from './components/button/button'
import Card from './components/card/card'
import { buttonType } from './types/commonTypes'
import Tag from './components/tag/tag'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import Nav from './components/navbar/navbar'
export default function Home() {
  return (

    <main>
         <Nav />
   <div className=' bg-green-300 py-40  pl-9 flex'>
    <div>
    <div className='text-6xl'>
    Application
    
    </div>
    <p className='text-green-900 py-3 w-1/2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero itaque aliquam mollitia veritatis velit sint nesciunt, 
      nemo nostrum deleniti saepe aperiam consequuntur necessitatibus dolorem
       voluptatum officia distinctio quae voluptatem dignissimos!</p>
       <div className='my-4'>
        <button className='px-3 py-2 bg-purple-400 rounded-2xl text-gray-100 hover:text-slate-900 hover:bg-slate-400 mx-3'>Buy Us </button>
        <button className='px-3 py-2 bg-purple-400 rounded-2xl text-gray-100 hover:text-slate-900 hover:bg-slate-400'>Contact Us </button>
        </div>
    </div>
   
        <div className='flex items-center mx-24'>
        <img src='/8841.png_1200-removebg-preview.png' className=" h-96" />
        </div>
   </div>
    
    
     <h1 className='align-center text-6xl'>Pakistan</h1>
    {5 == 5 && 
    <Card showDescription={true} coursTitle='Web and Mobile' tag='Web' description='A course for web 3.0' date='23-12-2023'/>
}
    <br/>
    <Card showTag={true} coursTitle='Web and Mobile' tag='Web 3.0' description='A course for web 3.0' date='23-12-2023'/>
    <br></br>
     <Button title="clicked" />
     <br/>
     
     <Tag tagText='Pakistan'/>
     <Tag showtagText={true} tagText='Pakistan'/>

    <div className='flex flex-wrap justify-around gap-4 align-middle mt-8'></div>
    </main>
    
  )
}
