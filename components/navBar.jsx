
import Link from 'next/link'
import Image from 'next/image'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavBar() {
    return (
        <>
            <nav className='flex flex-nowrap justify-between items-center bg-white py-4 drop-shadow-md font-inter'>
                <div className='flex items-center mx-4 h-24'>
                    <div className='hidden lg:block'>
                        <Link href='https://portal.ucol.mx/dgice/'>
                            <a>
                                <Image
                                    src="/img/logo.png"
                                    width={200}
                                    height={80}
                                />
                            </a>
                        </Link>
                    </div>
                    <div className='mx-8 text-xl'>
                        <Link href='/'>
                            <a>Cursos</a>
                        </Link>
                    </div>
                </div>
                <div className='flex flex-nowrap items-center h-24 mr-4'>
                    <div className='hidden md:block ml-4'>
                        <FontAwesomeIcon className='absolute py-3 md:ml-44 lg:ml-72' icon={faMagnifyingGlass} />
                        <input className='rounded-3xl border border-black focus-within:shadow-lg px-5 py-2.5 w-52 text-sm md:text-xs lg:w-80 w-full' bg type="text" id='search' name='search' placeholder='Search' />
                    </div>
                    <div className='text-white text-xs lg:text-sm border border-rose-500 mx-4'>
                        <button className='border border-blue bg-blue focus-within:shadow-lg text-center hover:bg-blue transition duration-500 ease-in-out rounded-3xl px-12 md:px-8 py-2.5' type='button'>Log In</button>
                    </div>
                </div>
            </nav>
        </>
    );
}