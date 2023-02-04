import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleGetData } from "../redux/action";
import CardItem from "./CardItem";


const Card = () => {
    const data = useSelector((state) => state.data); 
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(handleGetData());
    }, []);
  return (
    <div className="p-8 bg-slate-100 ">
      <span className="font-semibold text-xl mb-2 ">Cart ({data?.length} items)</span>
      <div>
        <CardItem data={data}/>
      </div>
    </div>
  );
};

export default Card;
