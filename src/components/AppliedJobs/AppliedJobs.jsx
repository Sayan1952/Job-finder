import React, { useState ,useEffect } from "react";
import { Link, useLoaderData, useParams } from 'react-router-dom';
import AppliedPage from "../AppliedPage/AppliedPage";

const AppliedJobs = () => {
  const { products, initialCart } = useLoaderData()

  const [items, setItems] = useState([]);

  console.log("this is products:",products, " and cart")
  const {companyLogo} = initialCart;





  return (
    <div>
      <div className="text-7xl font-extrabold p-10 mt-20 mb-32">Applied Jobs</div>
      {
               initialCart.map((cart) => (
                <AppliedPage key={cart.id} cart={cart}></AppliedPage>
              ))
            }
    </div>
  );
};

export default AppliedJobs;
