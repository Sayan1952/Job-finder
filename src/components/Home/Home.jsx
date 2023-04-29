import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import JobCatagoryList from "../JobCatagoryList/JobCatagoryList";
import { useLoaderData } from "react-router-dom";
import Featuredjobs from "../Featuredjobs/Featuredjobs";
import Details from "../Details/Details";
export 

const Home = () => {
  const jobLists = useLoaderData();
  const [jobData,setJobData] = useState([]);
  
  useEffect(()=>{
        fetch('jobdata.json')
        .then(res=>res.json())
        .then(data=>setJobData(data))
    },[]);

    const detailsButton = (data) =>{
        return(
            <Details data = {data}></Details>
        )
    }
    const [viewall,setViewall] = useState(false);

    const viewButtonClicked = () => {
        setViewall(true)
    } 


  return (
    <div>
      <Header></Header>
      <div className="md:flex">
        {jobLists.map((job) => (
          <JobCatagoryList key={job.id} job={job}></JobCatagoryList>
        ))}
      </div>
      <div className="my-10">
        <h1 className="text-5xl font-extrabold mb-4">Featured Jobs</h1>
        <p className="font-md text-slate-600">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {   
            
            viewall? jobData.map((data)=>(
                <Featuredjobs key={data.id} data = {data} ></Featuredjobs>
            )) : jobData.slice(0,4).map((data)=>(
                <Featuredjobs key={data.id} data = {data} ></Featuredjobs>
            ))
        }
        
      </div>
      <button onClick={viewButtonClicked} className="font-bold bg-blue-500 p-3 rounded-md text-white my-10 px-6">See All Jobs</button>
    </div>
  );
};

export default Home;


