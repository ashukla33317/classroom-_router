import React from 'react';
import { useParams } from 'react-router';


const News=()=>{
const {fname,lname}=useParams();
return <h1> use {fname} {lname} page</h1>
}


export default News;