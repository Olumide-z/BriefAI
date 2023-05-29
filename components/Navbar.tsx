import {MdLightMode, MdDarkMode} from 'react-icons/md'
import {IoMdDesktop} from 'react-icons/io'
import { useEffect, useState } from 'react'


const data = [
    {id: 1, name: 'light', icon: <MdLightMode />},
    {id: 2, name: 'dark', icon: <MdDarkMode />},
    {id: 3, name: 'system', icon: <IoMdDesktop />}
]


const Navbar = () => {
    const [mode, setMode] = useState<JSX.Element>(<MdLightMode/>)
    const [selectMode, setSelectMode] = useState(false);
    const [modeName, setModeName] = useState(
        typeof localStorage !== 'undefined' && localStorage.getItem('modeName')
          ? localStorage.getItem('modeName')
          : 'system'
    );

          
    function onWindowMatch(){
        if (typeof window !== 'undefined') {
            const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

            const element = document.documentElement;

            if(localStorage.modeName === 'dark' || (!('modeName' in localStorage) && darkQuery.matches)){
                element.classList.add('dark');
            }else{
                element.classList.remove('dark')
            }
          }
       
    }
    onWindowMatch();

    useEffect(() => {
        const element = document.documentElement;
        switch (modeName) {
            case 'dark':
                element.classList.add('dark');
                localStorage.setItem('modeName', 'dark');
                break;
            case 'light':
                element.classList.remove('dark');
                localStorage.setItem('modeName', 'light');
                break;
            default:
                localStorage.removeItem('modeName');
                onWindowMatch();
                break;
        }
    }, [modeName])

    return (
    <div className='relative'>
    <div className="backGround padding nav z-20">
        <h1 className='text-2xl font-bold'>BriefAI</h1>
        <button 
            className='text-2xl text-[#0081B4] dark:text-[#62CDFF] ' 
            onClick={() => setSelectMode((prev) => !prev)}
        >
            {mode}
        </button>
    </div>
    { selectMode &&
        <div className='mode'>
            {data.map((item) => (
            <div key={item.id} 
                className={`theme ${modeName === item.name && 'bg-slate-100 dark:bg-slate-900'}`}
                onClick={() => {
                    setMode(item.icon);
                    setSelectMode(false);
                    setModeName(item.name);
                }}
            >
                <p className='text-2xl'>{item.icon}</p>
                <p className='capitalize'>{item.name}</p>
            </div>
            ))}
        </div>
    }
    </div>
  )
}

export default Navbar