import {MdLightMode, MdDarkMode} from 'react-icons/md'

interface IProps {
    darkMode: boolean | undefined,
    setDarkMode: React.Dispatch<React.SetStateAction<boolean | undefined>>
}

const Navbar = ({ darkMode, setDarkMode} : IProps) => {

    const switchMode = () => {
        setDarkMode(prev => !prev)
    }

   
    return (
    <div className="padding nav">
        <h1 className='text-2xl font-bold'>BriefAI</h1>
        <p onClick={switchMode} className='cursor-pointer text-2xl'>
            {darkMode === true ? <MdLightMode /> : <MdDarkMode />}
        </p>
    </div>
  )
}

export default Navbar