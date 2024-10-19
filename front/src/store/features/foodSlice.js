import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
// import {  toast } from 'react-toastify';




export const getFoods = createAsyncThunk(
  'food/getFoods',
  async () => {
    const response = await axios.get('http://localhost:4444')
    console.log(response.data);

    return response.data
  }
)




/***2 (add)***/
export const addFoods = createAsyncThunk(
  'food/addFoods',
  async (data) => {
    try {
      const response = await axios.post('http://localhost:4444/addFood', data)

      return response.data
    } catch (error) {
      console.log(error);
    }

  }
)

/****3delete Food */

export const deletFoods = createAsyncThunk(
  'food/deletFoods',
  async (id) => {                
    const response = await axios.delete(`http://localhost:4444/delete/${id}`)
    return response.data._id
  }
)


 /***edit part 2 */

 export const updateFood = createAsyncThunk(
  'food/updateFood',
  async (food) => {
   console.log(food);
     const response = await axios.put('http://localhost:4544/modifier'+food.id, food.formData);
     return response.data._id

  })







const initialState = {
  foodsList: [],

}


export const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {},

  extraReducers: (builder) => {


    //getfood
    builder.addCase(getFoods.pending, (state, action) => {



    })

    builder.addCase(getFoods.fulfilled, (state, action) => {

      state.foodsList = action.payload;

    })


    builder.addCase(getFoods.rejected, (state, action) => {
      state.foodsList = action.payload;
    })


    //addfood
    builder.addCase(addFoods.pending, (state, action) => {
      console.log(action);
    })

    builder.addCase(addFoods.fulfilled, (state, action) => {
      console.log(action.payload);
      state.foodsList.push(action.payload);
      // toast.success("Food Add!");

    })


    builder.addCase(addFoods.rejected, (state, action) => {
      
    })

    //deletFood

    builder.addCase(deletFoods.pending, (state, action) => {

    })

    builder.addCase(deletFoods.fulfilled, (state, action) => {
      state.foodsList = state.foodsList.filter((item) => item._id !== action.payload)
      // toast.warning("Product deleted")

    })

    builder.addCase(deletFoods.rejected, (state, action) => {
      state.foodsList = action.payload;
    })


    //ModificationFood

    builder.addCase(updateFood.pending, (state, action) => {


    })

    builder.addCase(updateFood.fulfilled, (state, action) => {

      const itemFind = state.foodsList.findIndex((item) => item._id == action.payload._id)
      state.foodsList[itemFind] = action.payload

    })

    builder.addCase(updateFood.rejected, (state, action) => {

    })


  }



})

export const data = (state) => state.food.foodsList
export default foodSlice.reducer