import React from "react";
import Layout from "../layout/Layout";

const CheckoutPage = () => {
  return (
    <Layout>
      <div className="p-8 bg-slate-100  ">
        <div className="table w-full table-auto  ">
          <div className="table-header-group ">
            <div className="table-row font-semibold leading-8 border-b-2 border-slate-400 ">
              <div className="table-cell text-center text-xl">
                Produk dipesan
              </div>
              <div className="table-cell text-center text-slate-600 text-md ">
                Variasi
              </div>
              <div className="table-cell text-center text-slate-600 text-md ">
                Harga Satuan
              </div>
              <div className="table-cell text-center text-slate-600 text-md ">
                Jumlah
              </div>
              <div className="table-cell  text-slate-600 text-md text-center">
                Subtotal Produk
              </div>
            </div>
          </div>
          <div className="table-row-group leading-8 border-b-2  ">
            <div className="table-row border-slate-400">
              <div className="table-cell text-center ">Slim bag</div>
              <div className="table-cell text-center ">Variasi: L</div>
              <div className="table-cell text-center ">Rp 12.000</div>
              <div className="table-cell text-center ">2</div>
              <div className="table-cell text-center  ">Rp 24.000</div>
            </div>
            <div className="table-row ">
              <div className="table-cell text-center ">Converse</div>
              <div className="table-cell text-center ">Variasi: 38</div>
              <div className="table-cell text-center ">Rp 625.000</div>
              <div className="table-cell text-center ">1</div>
              <div className="table-cell text-center ">Rp 625.000</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-200 p-8 flex justify-end leading-10 border-b-2 border-slate-400 border-dotted">
        <div>
          <div className="flex justify-between gap-16">
            <span>Total Pesanan(3 produk):</span>
            <span className="text-md text-slate-600 font-semibold">
              Rp 625.000
            </span>
          </div>
          <div  className="flex justify-between gap-16">
            <span>Ongkos kirim:</span>
            <span className="text-md text-slate-600 font-semibold">
              Rp 15.000
            </span>
          </div>
          <div  className="flex justify-between gap-16 ">
            <span>Total Pembayaran:</span>
            <span className="text-2xl text-slate-600 font-semibold">
              Rp 640.000
            </span>
          </div>
        </div>
      </div>
      <div className="bg-slate-200 p-8 flex justify-end leading-10 border-b-2 border-slate-200">
        <div>
          <button className="bg-blue-600  text-white px-10 py-2">Buat Pesanan</button>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage;
