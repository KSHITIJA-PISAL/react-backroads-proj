import Title from '../components/title'
import { servicesData } from './data'
function Services() {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        {servicesData.map((service) => {
          return (
            <article key={service.id} className="service">
              <span className="service-icon">
                <i className={service.iClassname}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{service.title}</h4>
                <p className="service-text">{service.text}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Services
