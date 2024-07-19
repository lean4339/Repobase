import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Link as LinkRouter } from 'react-scroll/modules'
export const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [animatedLinks, setAnimatedLinks] = useState('')
    const [animatedMenu, setAnimatedMenu] = useState(false)
    const links = [
        {id: 6, title: 'About'},
        {id: 1, title: 'Services'},
        {id: 5, title: 'Recruitment'},
        // {id: 3, title: 'Vacancies'},
        {id: 4, title: 'Contact'},
    ]
    const handleShowMenu = () => {
        setShowMenu(!showMenu)
        setAnimatedLinks('animated-text')

        setAnimatedMenu(!animatedMenu)
    }
    return (
        <div >

        <header className={`headerContainer ${animatedMenu? 'animated-menu': 'go-back-menu'}`}>
        <nav className="desktop">
            <LinkRouter   spy={true} smooth={true} offset={-90} duration={500} to={'/main'} className="logo hover pointer">Rockstar</LinkRouter>
            <ul className="links">
                {links && links.map(link =>(
                    <LinkRouter   spy={true} smooth={true} offset={-90} duration={500} to={`/${link.title.toLowerCase()}`} className="link hover pointer" key={link.id}>{link.title}</LinkRouter>
                ))}
            </ul>
        </nav>

        <nav className='mobile'>
            <div className="header-mobile">

            <LinkRouter   spy={true} smooth={true} offset={-90} duration={500} to={'/main'} className="  pointer hover logo">Rockstar</LinkRouter>
            <div onClick={handleShowMenu} className="menuIcon  pointer hover"><MenuIcon/></div>
            </div>
            {showMenu && <ul className={`links ${animatedLinks}`} >
                {links && links.map(link =>(
                     <LinkRouter   spy={true} smooth={true} offset={-90} duration={500} to={`/${link.title.toLowerCase()}`} className="link hover pointer" key={link.id}>{link.title}</LinkRouter>
                ))}
            </ul>}
        </nav>
        </header>
    </div>        
    );
}