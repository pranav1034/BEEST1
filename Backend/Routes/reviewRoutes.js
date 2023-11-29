import express from 'express';
import { Review } from '../Models/reviewModel.js';

const router= express.Router();

router.post('/',async (request,response) => {
    try {
        const newReview= {
            Content: request.body.Content,
            Rating: request.body.Rating,
            Author: request.body.Author,
            
        }

        const review= await Review.create(newReview);
        return response.status(201).send(review);
    } 
    catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
        
    }
})

router.get('/' , async(request,response) =>{
    try {
        const reviews= await Review.find({});
        return response.status(200).json({
              data: reviews
        });
    } 
    catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
})


router.put('/:id' , async (request,response) => {
    try {
        const {id}= request.params;

        const result= await Review.findByIdAndUpdate(id, request.body);

        if(!result){
            return response.status(404).send({message: 'Review not found'});
        }
        return response.status(200).send({message: 'Review updates succesfully'});

    } 
    catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
        
    }
})

router.delete('/:id', async (request,response) => {
    try {
        const {id}= request.params;

        const result= await Review.findByIdAndDelete(id);
        if(!result){
            return response.status(404).send({message: 'Review not found'});
        }
        return response.status(200).send({message: 'Review deleted successfully'});
        
    } 
    catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
        
    }
})

export default router;