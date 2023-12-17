export default function Nav () {
    return (
        <div className="bg-blue">
            <nav className="px-2 py-2 bg-purple-900 text-white flex justify-between shadow-slate-700">
                <img src="https://randomuser.me/api/portraits/men/75.jpg" className=" h-12 pt-3 px-3 rounded-2xl"/> 
                <ul className="px-28 py-4 flex space-x-10 justify-end mx-6">
                <li className="mx-2 cursor-pointer">Home</li>
                <li className="mx-2 cursor-pointer ">About</li>
                <li className="mx-2 cursor-pointer">Blog</li>
                <li className="mx-2 cursor-pointer">Contact Us</li>
                </ul>
              
            </nav>
             </div>
              
              )
}