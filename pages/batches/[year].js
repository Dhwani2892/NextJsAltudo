import React from "react";
import React from "react";



export const getStaticPaths = async() => {

  //const arr = ["2022", "2021", "2020", "2019", "2018"];
  const response = await fetch('https://fakestoreapi.com/products');
  const arr = await response.json();
  const paths = arr.map((item) => {
      return {
          params: {year: item.id.toString()}
      }
  })
  return {
      path,
      fallback: false 
  }
}



export const getStaticProps = (context) => {

  const data = context.params.year;

  return {

    props: {

      result: data,

      layout: false,

    },

  };

};



const Year = ({ result }) => {

  return (

    <>

      <h1>year: {result}</h1>

    </>

  );

};



export default Year;
