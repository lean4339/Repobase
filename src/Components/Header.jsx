import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Link as LinkRouter } from 'react-scroll/modules'
export const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [animatedLinks, setAnimatedLinks] = useState('')
    const [animatedMenu, setAnimatedMenu] = useState(false)
    const links = [
        {id: 6, title: 'Conocenos',link: 'about'},
        {id: 1, title: 'Servicios', link: 'services'},
        {id: 5, title: 'Reclutamiento', link: 'recruitment'},
        // {id: 3, title: 'Vacancies'},
        {id: 4, title: 'Contacto', link: 'contact'},
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
            <LinkRouter   spy={true} smooth={true} offset={-90} duration={500} to={'/main'} className=" hover pointer"><h3 className="logo">HR Innovate</h3></LinkRouter>
            <ul className="links">
                {links && links.map(link =>(
                    <LinkRouter   spy={true} smooth={true} offset={-100} duration={500} to={`/${link.link}`} className="link hover pointer" key={link.id}>{link.title}</LinkRouter>
                ))}
            </ul>
        </nav>

        <nav className='mobile'>
            <div className="header-mobile">

            <LinkRouter   spy={true} smooth={true} offset={-90} duration={500} to={'/main'} className="  pointer hover logo">HR Innovate</LinkRouter>
            <div onClick={handleShowMenu} className="menuIcon  pointer hover"><MenuIcon/></div>
            </div>
            {showMenu && <ul className={`links ${animatedLinks}`} >
                {links && links.map(link =>(
                     <LinkRouter   spy={true} smooth={true} offset={-100} duration={500} to={`/${link.link}`}  className="link hover pointer" key={link.id}>{link.title}</LinkRouter>
                ))}
            </ul>}
        </nav>
        </header>
    </div>        
    );
}