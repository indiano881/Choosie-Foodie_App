"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { Poppins } from "next/font/google";


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


//PRESENTATION FROM HERE

if (!meal) {
  return <main>What´s coming for dinner...</main>;
}

const measureIngredientsArray= [];


const FillArray = (targetFood, targetArray) => {
  for (let i = 1; i <= 20; i++) {
    const measure = targetFood[`strMeasure${i}`];
    const ingredient = targetFood[`strIngredient${i}`];
    if (measure && ingredient) {
      targetArray.push({ measure, ingredient });
    }
  }
};

FillArray(meal, measureIngredientsArray)
console.log(measureIngredientsArray)





const CleanArray = (targetArray) => {
  return targetArray= []
}

const handleClick = () => {
  GetMeal()
  CleanArray(measureIngredientsArray)
}
  return (
    <main className={styles.main}>
      <h1>Chossie-Foodie-App</h1>
      <div className={styles.cardContainer}>
        <h3>{meal.strMeal}</h3>
        <h4>{meal.strArea}</h4>
        <h4>{meal.strCategory}</h4>
        <Image src={meal.strMealThumb} 
        alt={meal.strMeal} 
        width={400} 
        height={400} 
        />
        <h5>{meal.strInstructions}</h5>
        {measureIngredientsArray.map((item, index)=> <h4 key={index}> {item.measure} {item.ingredient} </h4>)}

        



        <button onClick={handleClick}>Another meal</button>
      </div>
     

      
    </main>
  );
}
/*

Very important to handle the loading part 
As beginner keep everything in one component 
Image 
When using an external URL, you must add it to remotePatterns in next.config.js 
cant nest a for loop in jsx
map method but MUST have array instead of an object
smart way to convert object in array
*/