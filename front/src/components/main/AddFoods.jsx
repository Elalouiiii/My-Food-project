import React from 'react'
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { addFoods } from '../../store/features/foodSlice';
import { useDispatch } from 'react-redux';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};









export default function AddFoods() {

  const dispatch = useDispatch();
  const [food, setFood] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    photo: '',
  });

  function handleInput(e) {
    const { name, value } = e.target
    setFood({ ...food, [name]: value })
  };



  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFood({ ...food, photo: file });
    console.log(file);

  };

  console.log(food);
  function funcAdd(e) {
    e.preventDefault()

    const formData= new FormData() 

    formData.append('name',food.name)
    formData.append('category',food.category)
    formData.append('price',food.price)
    formData.append('description',food.description)
    formData.append('photo',food.photo)


    dispatch(addFoods(formData))
    setFood({
      ...food,
      name: '',
      category: '',
      price: '',
      description: '',
      photo: '',

    })
    handleClose()
  }



  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className='addCardCss'>

      <Button onClick={handleOpen}><h2 className='addbutton'>AddFood +</h2></Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h5" component="h2">
              <h2>Add New Food</h2>
              <hr />
            </Typography>

            <Typography id="modal-modal-title" variant="h6" component="h2">

              <form className='formEdit'>
                <input type="text" name="name" id="" placeholder='Food*' value={food.name} onChange={handleInput} />
                <input type="text" name="category" id="" placeholder='Category*' value={food.category} onChange={handleInput} />
                <input type="text" name="price" id="" placeholder='Price*' value={food.price} onChange={handleInput} />
                <input type="text" name="description" id="" placeholder='Description*' value={food.description} onChange={handleInput} />
                <input type="file" name="photo" placeholder='Photo*' className="filecss" onChange={handleFileChange} />

                <Button style={{ float: 'right', marginTop: '1rem' }} variant="contained" onClick={funcAdd}>Valide</Button>
                {/* <input type="submit" value="Valide" /> */}
              </form>
            </Typography>





          </Box>
        </Fade>
      </Modal>

    </div>
  )
}












