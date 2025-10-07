import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';


const navigationData = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Contact", path: "/contact" },
];


const Navbar = () => {

    const [open,setOpen] = useState(false)

    const links = navigationData.map(route => <li key={route.id} className='hover:bg-amber-200 px-4 lg:mr-10'><a href="/"> {route.name}</a></li>)

    return (
        <nav className='flex justify-between mt-3 mx-8'>

            <span className='flex' onClick={() => setOpen(!open)}>
                { open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>}

                <ul className={`md:hidden absolute bg-amber-300  text-black duration-1000
                     ${open ? 'top-10' : '-top-40'}`}>
                    {links}
                </ul>
                
                <h3 className='ml-3'>My Navbar</h3>
            </span>
            <ul className='md:flex hidden'>
                {
                    navigationData.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>

            {/* <ul className='flex'>
                {
                    navigationData.map(route => <li className='mr-10'><a href="/"> {route.name}</a></li>)
                }
            </ul> */}



            {/* <ul className='flex'>
                <li className='mr-10'><a href="/"> Home</a></li>
                <li className='mr-10'><a href="/about">About</a></li>
                <li className='mr-10'><a href="/blog">Blog</a></li>
            </ul> */}

            <button>Sign In</button>

        </nav>
    );
};

export default Navbar;