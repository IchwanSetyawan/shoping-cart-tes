import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { handleGetData } from "../redux/action";

const Ammount = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);
    useEffect(() => {
        dispatch(handleGetData());
      }, []);
  return (
    <div className="p-8 bg-slate-100 leading-8 shadow-md">
      <span className="font-semibold text-xl mb-2 ">The total amount of</span>
      <div className="border-b-2 border-slate-400">
        <div className="flex justify-between">
          <p>Temporary ammount</p>
          <p>$53.90</p>
        </div>
        <div className="flex justify-between mb-3">
          <p>Shooping</p>
          <p>Gratis</p>
        </div>
      </div>
        <div className="flex justify-between font-semibold mt-3">
          <div >
            <p>The total ammount of</p>
            <p>(including) VAT</p>
          </div>
          <p>$53.90</p>
        </div>
        <Link to="/checkout">
        <button className="w-full bg-blue-600 rounded-md mt-8 text-white py-2">GO TO CHECKOUT</button>
        </Link>
    </div>
  );
};

export default Ammount;
