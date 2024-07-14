import { Element } from "react-scroll"
import GroupAddIcon from '@mui/icons-material/GroupAdd';
export const Recruitment = () => {
    return (
        <>
        <Element name='/recruitment'/>
        <main className='about-main-container' id="/recruitment">
        <h1 className="services-titulo-main">Reclutamiento</h1>
            <div className="services">
                <div className="service">
                    <div className="cabeceraService">
                        <GroupAddIcon sx={{ fontSize: 50 }} className="iconoService"/>
                    </div>
                    <h2 className="service-title">Buscamos los mejores candidatos</h2>
                    <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in risus nec nunc pulvinar aliquam. Integer nec purus vel purus hendrerit cursus. Donec nec magna nec nunc ultricies lacinia. Sed nec dolor in nisi ultricies tincidunt. Nullam at eros nec nunc tincidunt feugiat. Nullam nec dolor et nunc cursus pharetra. Sed
            </p>
            </div>
            </div>
        </main>
        </>
    )
}