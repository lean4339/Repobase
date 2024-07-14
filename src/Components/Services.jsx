import { Element } from "react-scroll";
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export const Services = () => {
    return (
        <>
            
        <Element name='/services'/>
        <main className='service-container' id="/services">
                <h1 className="services-titulo-main">Asesorias</h1>
            <div className="services">
                <div className="service">
                    <div className="cabeceraService">
                        <FileCopyOutlinedIcon sx={{ fontSize: 50 }} className="iconoService"/>
                    </div>
                    <h2 className="service-title">Armado de CV</h2>
                    <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in risus nec nunc pulvinar aliquam. Integer nec purus vel purus hendrerit cursus. Donec nec magna nec nunc ultricies lacinia. Sed nec dolor in nisi ultricies tincidunt. Nullam at eros nec nunc tincidunt feugiat. Nullam nec dolor et nunc cursus pharetra. Sed
            </p>
            </div>
            <div className="service">
                    <div className="cabeceraService">
                        <FileCopyOutlinedIcon sx={{ fontSize: 50 }} className="iconoService"/>
                    </div>
                    <h2 className="service-title">Revisión de CV</h2>
                    <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in risus nec nunc pulvinar aliquam. Integer nec purus vel purus hendrerit cursus. Donec nec magna nec nunc ultricies lacinia. Sed nec dolor in nisi ultricies tincidunt. Nullam at eros nec nunc tincidunt feugiat. Nullam nec dolor et nunc cursus pharetra. Sed
            </p>
            </div>
            <div className="service">
                <div className="cabeceraService">
                    <LinkedInIcon sx={{ fontSize: 50 }} className="iconoService"/>  
                </div>
                    <h2 className="service-title">Armado de Linkedin</h2>
                    <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in risus nec nunc pulvinar aliquam. Integer nec purus vel purus hendrerit cursus. Donec nec magna nec nunc ultricies lacinia. Sed nec dolor in nisi ultricies tincidunt. Nullam at eros nec nunc tincidunt feugiat. Nullam nec dolor et nunc cursus pharetra. Sed
            </p>
            </div>
            <div className="service">
                <div className="cabeceraService">
                    <LinkedInIcon sx={{ fontSize: 50 }} className="iconoService"/>  
                </div>
                    <h2 className="service-title">Revisión de Linkedin</h2>
                    <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in risus nec nunc pulvinar aliquam. Integer nec purus vel purus hendrerit cursus. Donec nec magna nec nunc ultricies lacinia. Sed nec dolor in nisi ultricies tincidunt. Nullam at eros nec nunc tincidunt feugiat. Nullam nec dolor et nunc cursus pharetra. Sed
            </p>
            </div>
            </div>
        </main>
        </>
    )
}