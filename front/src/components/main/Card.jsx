import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { deletFoods, updateFood } from '../../store/features/foodSlice';
import { useState } from "react";
import { useDispatch } from "react-redux";


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









export default function CardFood({item}) {
  
  const [food, setFood] = useState({
    id: item._id,
    name: item.name,
    category: item.category,
    price:item.price ,
    description:item.description ,
    photo:item.photo ,
  })
  function handlInput(e) {
    const { name, value } = e.target;
    setFood(
      {
        ...food,
        [name]: value
      }
    )
  }
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setFood({ ...food, photo: file });
  };

  console.log(food);
  const dispatch = useDispatch()






  function funDelete(e) {
    e.preventDefault();
    dispatch((deletFoods(item._id)))
    handleClose()

  }





  const [openedit, setOpenedit] = React.useState(false);
  const handleOpenEdit = () => setOpenedit(true);
  const handleClosed = () => setOpenedit(false);


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);





  function saveItem() {

    const formData= new FormData() 
    formData.append('name',food.name)
    formData.append('category',food.category)
    formData.append('price',food.price)
    formData.append('description',food.description)
    formData.append('photo',food.photo)
    const id=food.id


    dispatch(updateFood({id,formData}))
    handleClosed()

  }

  return (


    <Card className='cardcss'>
      <CardMedia
        sx={{ height: 140 }}
        image={'http://localhost:4444/uploads/'+item.photo}

      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <h5>{item.category}</h5>
        <Typography variant="body2" color="text.secondary">
          {item.description.substring(1, 50)}
        </Typography>
        <h4>{item.price}</h4>
      </CardContent>
      <CardActions>
        <div className='iconDeltEdit'>
          <button onClick={handleOpenEdit}><EditIcon /></button>
          <button onClick={handleOpen}><DeleteIcon /></button>
        </div>
      </CardActions>






      {/************************************modal Edit ************************/}
      <div>
        <Modal
          open={openedit}
          onClose={handleClosed}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <h2>Edit Food</h2>
              <hr />
              <form className='formEdit'>
                <input type="text" name="name" id="" placeholder='Food*' onChange={handlInput} value={food.name} />
                <input type="text" name="category" id="" placeholder='Category*' onChange={handlInput} value={food.category} />
                <input type="text" name="price" id="" placeholder='Price*' onChange={handlInput} value={food.price} />
                <input type="text" name="description" id="" placeholder='Description*' onChange={handlInput} value={food.description} />
              <input type="file" name="photo" className='filecss' id="" placeholder='Photo*' onChange={handleFileChange} />
              
                {/* <input type="text" name="images" id="" placeholder='Photo*' onChange={handlInput} value={food.images} /> */}

                <Button style={{ float: 'right', marginTop: '1rem' }} variant="contained" onClick={saveItem}>Save</Button>
              </form>
            </Typography>
          </Box>
        </Modal>
      </div>




      {/*********************** Modal Delete  ****************************** */}
      <div>
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
              <h2> Delete Food</h2>
            </Typography>

            <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
              <p>
                delete This Food From the List
              </p>
              <hr />
            </Typography>
            <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
              <div style={{ float: 'right' }}>
                <Button onClick={funDelete} variant="outlined" style={{ margin: '5px', }}>
                  Yes
                </Button>
                <Button variant="primary" onClick={handleClose }>
                  Non
                </Button>
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>
   
    </Card >

  )
}



