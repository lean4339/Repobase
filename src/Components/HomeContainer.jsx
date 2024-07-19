import { Main } from "./Main";
import { Contact } from "./Contact";
import { Services } from "./Services";
import { About } from "./About";
import { Vacancies } from "./Vacancies";
import { Recruitment } from "./Recruitment";
import { Parallax } from "./Parallax";
export const HomeContainer = () => {
    return (
        <>
        <Main id='/main'/>
        <About id='/about'/>
        <hr className="divider"/>
        <Services id='/services'/>
        
        <hr className="divider"/>
        <Recruitment id='/recruitment'/>
        {/* <Vacancies id='/vacancies'/> */}

        <hr className="divider"/>
        <Contact id='/contact'/>
        </>
    )
}