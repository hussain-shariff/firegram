import React from 'react';
import useFireStore from '../hooks/useFireStore';
import { motion } from 'framer-motion';

function ImageGrid({ setselectedImage }) {
    const { docs } = useFireStore('images');

  return (
    <div className='image-grid'>
        { docs && docs.map((doc)=>{
        return(
            <motion.div className='image-wrap' key={ doc.id } whileHover={{opacity:1}} layout>
                <motion.img 
                src={doc.url} 
                alt='uploaded Image' 
                onClick={()=> setselectedImage(doc.url)}
                initial = {{opacity : 0}}
                animate = {{ opacity : 1 }}
                transition = {{ delay : 1 }}
                />
            </motion.div>
        )
    }) }
    </div>
  )
}

export default ImageGrid