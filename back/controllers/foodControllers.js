import Food from "../models/foodModel.js";


const getFoods = async (req, res) => {
    const foods = await Food.find();
	res.json(foods)
}


const addFood = async (req, res) => {


   const food= await Food.create({
        ...req.body,
        photo: req.file.filename
    })
  
    res.json(food)
}


const deleteFoods = async (req,res)=>{

    console.log(req.params.index);
    const food = await Food.findByIdAndDelete(req.params.index)
    res.json(food)
    
}

const modifFoods = async (req,res)=>{
    console.log(req.params.index);
    let data
    if (req.file) {
        console.log(req.file);
        const photo =req.file.filename
        data={...req.body,photo}
    }else{
        data=req.body
    }
   
    

    

   const food = await Food.findByIdAndUpdate(req.params.index, data,{new:true})

    res.json(food)
}



export { getFoods, addFood ,deleteFoods,modifFoods}
