import React from 'react';
import {Tilt} from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { socials } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const SocialCard = ({ index, title, icon, source_code_link }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
         <div
           options={{
            max: 45,
            scale: 1,
            peed: 450
           }}
           className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
         >
             <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='cursor-pointer'
            >
          <img src={icon} alt={title}
            className="w-16 h-16 object-contain" 
          /> 
          </div>
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3> 
         </div>
        </motion.div>
    </Tilt>

  )
}

const Socials = () => {
  return (
   <>
     <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Socials</p>
      <h2 className={styles.sectionHeadText}>My other socials.</h2>
     </motion.div>

     <motion.p
       variants={fadeIn("", "", 0.1, 1)}
       className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
     >
       Check me on my other socials as well.
     </motion.p>

     <div className="mt-20 flex flex-wrap gap-10">
       {socials.map((social, index) => (
        <SocialCard 
            key={social.title} 
            index={index} 
            {...social} 
        />
        ))}
     </div>
   </>
  )
}

export default SectionWrapper(Socials, "social")