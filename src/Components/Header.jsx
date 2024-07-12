import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Link as LinkRouter } from 'react-scroll/modules'
export const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [animatedLinks, setAnimatedLinks] = useState('')
    const [animatedMenu, setAnimatedMenu] = useState(false)
    const links = [
        {id: 1, title: 'Services'},
        {id: 2, title: 'Companys'},
        {id: 3, title: 'Clients'},
        {id: 4, title: 'Contact'},
        {id: 5, title: 'Portfolio'},
        {id: 6, title: 'Courses'},
        {id: 7, title: 'Im looking for a job'},
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
            <LinkRouter smooth={true} duration={500} to={'/main'} className="logo">Rockstar</LinkRouter>
            <ul className="links">
                {links && links.map(link =>(
                    <LinkRouter smooth={true} duration={500} to={`/${link.title.toLowerCase()}`} className="link" key={link.id}>{link.title}</LinkRouter>
                ))}
            </ul>
        </nav>

        <nav className='mobile'>
            <div className="header-mobile">

            <LinkRouter smooth={true} duration={500} to={'/main'} className="logo">Rockstar</LinkRouter>
            <div onClick={handleShowMenu} className="menuIcon"><MenuIcon/></div>
            </div>
            {showMenu && <ul className={`links ${animatedLinks}`} >
                {links && links.map(link =>(
                     <LinkRouter to={`/${link.title.toLowerCase()}`} className="link" key={link.id}>{link.title}</LinkRouter>
                ))}
            </ul>}
        </nav>
        </header>
    </div>        
    );
}