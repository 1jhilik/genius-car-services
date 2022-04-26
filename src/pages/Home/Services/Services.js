import useServices from '../../../hooks/useServices';
import Service from '../Home/Service/Service';
import './Services.css'

const Services = () => {
    const [services] = useServices();

       return (
        <div className='container'>
           <div className="row">
           <h1  id='services' className='text-primary text-center mt-5 '>Our Services</h1>
            <div className='services-container'>
            {
                services.map(service  => <Service 
                    key={service._id}
                    service={service}
                ></Service>)
            }
            </div>
           </div>
        </div>
    );
};

export default Services;