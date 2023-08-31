import { useState, useRef} from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from'../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
 const [loading, setLoading] = useState(false)

 const handleChange = (e) => {
  const { name, value } = e.target;
  setForm({ ...form, [name]: value})
 }

 const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true)

  // BiSWHtn1IR0EFVu-O
  // template_gl8m6en
  // service_dbxi8ra
  emailjs.send(
    'service_dbxi8ra',
    'template_gl8m6en',
    {
      from_name: form.name,
      to_name: 'Yann',
      from_email: form.email,
      to_email: 'contact@yanndev-art.fr',
      message: form.message,
    },
    'BiSWHtn1IR0EFVu-O'
    
    )
    .then(() => {
      setLoading(false)
      alert('Merci. Je reviendrai vers vous dès que possible.')

      setForm({
        name: "",
        email: "",
        message: "",
      });
    },
    (error) => {
      setLoading(false);
      console.error(error);

      alert("Ahh, quelque chose s'est mal passé. Veuillez réessayer");
    }
  );
};


  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Contactez-moi</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Votre nom</span>
            <input 
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Quel est votre nom ?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Votre Email</span>
            <input 
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Quel est votre Email ?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Votre message</span>
            <textarea 
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Quel est votre message ?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
           type="submit"
           className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Envoi...' : 'Envoi'}
          </button>
        </form>
      </motion.div>

      <motion.div 
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1  xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />

      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")