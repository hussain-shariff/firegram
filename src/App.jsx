import { useState } from 'react'
import ImageGrid from './comps/ImageGrid'
import InputForm from './comps/InputForm'
import Modal from './comps/Modal'
import Title from './comps/Title'

function App() {
  const [selectedImage, setselectedImage] = useState('')
  return (
    <div className="App">
      <Title/>
      <InputForm/>
      <ImageGrid setselectedImage = { setselectedImage }/>
      {selectedImage && <Modal 
      selectedImage = { selectedImage } 
      setselectedImage = { setselectedImage }
      />}
    </div>
  )
}

export default App
