import React, { useEffect, useState } from "react";
import imagebaju from "../assets/img/tsirt.webp";
import { useDispatch, useSelector } from "react-redux";

import { handleGetData } from "../redux/action";

const CardItem = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(handleGetData());
  }, []);
  const [newDataCart, setNewDataCart] = useState(data);
  const [liked, setLiked] = useState([]);
  const [ammountVal, setAmmountVal] = useState([]);
  

  const addCart = (id) => {
    const newData = data?.map((val) => {
      if (val.id === id) {
        const currentVal = val.cart;
        val.cart = currentVal + 1;
        val.stock = val.stock - 1;

      }
      return val;
    });
    setNewDataCart(newData);
  };
  const minCart = (id) => {
    const newData = data?.map((val) => {
      if (val.id === id) {
        const currentVal = val.cart;
        val.cart = currentVal - 1;
        val.stock = val.stock + 1;


      }
      return val;
    });
    setNewDataCart(newData);
  };

  

  const deleteData = (id) => {
    const newData = data?.map((val) => {
      if (val.id === id) {
        return {
          ...val,
          isDelete: true,
        };
      }
      return val;
    });
    setNewDataCart(newData);
  };

  const handleLike = (id) => {
    if (liked?.find((val) => val === id)) {
      setLiked(liked?.filter((val) => val !== id));
    } else {
      setLiked([...liked, id]);
    }
  };

//   const newData = data?.map((val) => {
//     return (
//         setCart(val.cart * val.price)
//     )
//   })

  return (
    <>
      {newDataCart !== undefined ? (
        newDataCart?.map((val, i) => {
          if (val?.isDelete !== true) {
            return (
              <div
                key={val?.id}
                className="grid grid-cols-3 gap-4 my-2 py-8 border-b-2 border-slate-400"
              >
                <div className="w-28 h-full bg-slate-200 p-4 rounded-md ">
                  <img src={imagebaju} alt="baju" />
                </div>
                <div className="col-span-2 leading-7">
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-2xl">{val?.name}</h3>
                    <div className="flex justify-around">
                      <button
                        onClick={() => minCart(val?.id)}
                        className="px-4 py-1 bg-slate-300 "
                      >
                        -
                      </button>
                      <span className="px-4 py-2">{val?.cart}</span>
                      <button
                        onClick={() => addCart(val?.id)}
                        className="px-4 py-1  bg-slate-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div>
                    <p>Stok : {val?.stock}</p>
                    <p>Stok : {ammountVal}</p>
                    <p>SHIKI BLUE</p>
                    <p>Color Blue</p>
                    <p>Size M</p>
                  </div>
                  <div className="flex justify-between mt-4">
                    <div className="flex gap-5">
                      <div className="flex items-center gap-1">
                        <button onClick={() => deleteData(val?.id)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                        REMOVE ITEM
                      </div>
                      <div className="flex items-center gap-1">
                        <button onClick={() => handleLike(val?.id)}>
                          {liked?.some((l) => l === val?.id) !== true ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                            </svg>
                          )}
                        </button>
                        MOVE TO WHISTLIST
                      </div>
                    </div>
                    <p className="font-semibold text-xl ">${val.price}</p>
                  
                  </div>
                </div>
              </div>
            );
          }
        })
      ) : (
        <div>
          {data?.map((val, i) => {
            if (val?.isDelete !== true) {
              return (
                <div
                  key={val?.id}
                  className="grid grid-cols-3 gap-4 my-2 py-8 border-b-2 border-slate-400"
                >
                  <div className="w-28 h-full bg-slate-200 p-4 rounded-md ">
                    <img src={imagebaju} alt="baju" />
                  </div>
                  <div className="col-span-2 leading-7">
                    <div className="flex justify-between">
                      <h3 className="font-semibold text-2xl">{val?.name}</h3>
                      <div className="flex justify-around">
                        <button
                          onClick={() => minCart(val?.id)}
                          className="px-4 py-1 bg-slate-300 "
                        >
                          -
                        </button>
                        <span className="px-4 py-2">{val?.cart}</span>
                        <button
                          onClick={() => addCart(val?.id)}
                          className="px-4 py-1  bg-slate-300"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div>
                      <p>Stok : {val?.stock}</p>
                    <p>Stok : {ammountVal}</p>
                      <p>SHIKI BLUE</p>
                      <p>Color Blue</p>
                      <p>Size M</p>
                    </div>
                    <div className="flex justify-between mt-4">
                      <div className="flex gap-5">
                        <div className="flex items-center gap-1">
                          <button onClick={() => deleteData(val?.id)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                          REMOVE ITEM
                        </div>
                        <div className="flex items-center gap-1">
                          <button onClick={() => handleLike(val?.id)}>
                            {liked?.some((l) => l === val?.id) !== true ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5"
                              >
                                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                              </svg>
                            )}
                          </button>
                          MOVE TO WHISTLIST
                        </div>
                      </div>
                      <p className="font-semibold text-xl ">${val.price}</p>
                    </div>
                  </div>
                </div>
              );
            }
          })}
          <p>tidak ada data</p>
        </div>
      )}
    </>
  );
};

export default CardItem;
