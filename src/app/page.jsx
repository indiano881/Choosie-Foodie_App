"use client"

import Image from "next/image";
import styles from "./page.module.css";

import {useState, useEffect} from "react"

export default function Home() {

  const [meal,setMeal] = useState(null)
  const GetMeal= async () => {
  try {
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
      const data= await response.json();
      console.log(data.meals[0])
      setMeal(data.meals[0])
  } catch (err) {
      console.log("error is: " + err)
  }
}

useEffect(()=>{
  GetMeal()
  
},[])

if (!meal) {
  return <main>What´s coming for dinner...</main>;
}
  return (
    <main>
      <h4>{meal.strMeal}</h4>
      <h4>{meal.strArea}</h4>
      <h4>{meal.strCategory}</h4>
      <Image src={meal.strMealThumb} 
       alt={meal.strMeal} 
       width={500} 
       height={500} 
      />

      <h4>{meal.strInstructions}</h4>
    </main>
  );
}
/*

Very important to handle the loading part
As beginner keep everything in one component
Image
When using an external URL, you must add it to remotePatterns in next.config.js
*/