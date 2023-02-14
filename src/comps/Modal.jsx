import React from 'react';
import { motion } from 'framer-motion';

function Modal({ selectedImage, setselectedImage }) {
    const handleClick = (e)=>{
        if (e.target.className === 'backdrop'){
            setselectedImage('')
        }
    }

  return (
    <motion.div 
        className='backdrop' 
        onClick={ handleClick }
        initial = {{ opacity : 0 }}
        animate = {{ opacity : 1 }}>
        <motion.img 
            src={ selectedImage } 
            alt="enlarged-image"
            initial = {{ y : '-150vh' }}
            animate = {{ y : 0 }}
            transition = {{ delay: 0.3 }} />
    </motion.div>
  )
}

export default Modal