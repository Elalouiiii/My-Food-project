import mongoose from "mongoose";



const connectedDB=async()=>{
    const url='mongodb+srv://abdelaziz:0000@3wacademy.y33zpwn.mongodb.net/TunisiennFoods';
    await mongoose.connect(url);
    console.log('You Are Connected to dataBase ');
}

export default connectedDB