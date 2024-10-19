import express from 'express'
import { getFoods , addFood, deleteFoods,modifFoods} from '../controllers/foodControllers.js'
import { upload } from '../utils/multer.js'




const router= express.Router()


/*********GET FOODS***********/
router.get('/', getFoods)



/*********ADD FOOD***********/

router.post('/addFood',upload.single('photo'), addFood)
router.delete('/delete/:index' , deleteFoods)
router.put('/modifier/:index',upload.single('photo'),modifFoods)


export default router

