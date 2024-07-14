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
        <Parallax clase='parallax1' id='paralax'/>
        <Services id='/services'/>
        <Recruitment id='/recruitment'/>
        {/* <Vacancies id='/vacancies'/> */}
        <Contact id='/contact'/>
        </>
    )
}