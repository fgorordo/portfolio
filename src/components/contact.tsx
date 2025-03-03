import { ContactForm } from './forms/contact-form'
import { Container } from './ui'

export const ContactSection = () => {
  return (
    <div data-section id='contact'>
      <Container className='py-12 md:py-20'>
        <section className='flex flex-col gap-12 mb-12 md:mb-20'>
          <div className=''>
            <h2 className='text-xl text-primary mb-4'>CONTACTO</h2>
            <h3 className='text-xl md:text-3xl font-bold'>construyamos algo impresionante juntos</h3>
          </div>
        </section>

        <ContactForm />
      </Container>
    </div>
  )
}