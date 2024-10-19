import React from 'react';
import Card from './Card';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import Spinner from 'react-bootstrap/Spinner';
import { getFoods,  data } from "../../store/features/foodSlice";

export default function ListCards() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFoods());

    }, [dispatch]);

    const foods = useSelector(data)
    // console.log(foods);
    return (
        <div className='listcardCss'>



            {
                foods?.map((item) => (
                    <Card key={item._id} item={item} />
                ))


            }




        </div>
    )
}
