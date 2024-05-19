"use client"

import Image from "next/image";
import styles from "./page.module.css";
import {useState, useEffect} from "react"

export default function Home() {
  //State
  const [meal,setMeal] = useState(null)
  //Fetching
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

  //Use effect when page load
  useEffect(()=>{
    GetMeal()
  },[])

  //PRESENTATION FROM HERE*******
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
  }

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
      <daa className={styles.cardContainer}>
        <da1 className={styles.containerIntro}>
          <h3>{meal.strMeal}</h3>
          <h5>{/*PLACEHOLDER QUICK STYLING */}</h5>
          <h4>Origin: {meal.strArea}</h4>
          <h4>Category: {meal.strCategory}</h4>
        </da1>
        
        <Image priority src={meal.strMealThumb} 
        alt={meal.strMeal} 
        width={400} 
        height={400}
        />

        <h5>{meal.strInstructions}</h5>
        <da2 className={styles.containerIng}>
          <h5>Ingredients:</h5>
          {measureIngredientsArray.map((item, index)=> <h6 key={index}> {item.measure} {item.ingredient} </h6>)}
        </da2>

        <p onClick={handleClick} className={styles.mealBtn}>Another meal</p>
      </daa>  
    </main>
  )
}
/*

Very important to handle the loading part 
As beginner keep everything in one component 
Image 
When using an external URL, you must add it to remotePatterns in next.config.js 
cant nest a for loop in jsx
map method but MUST have array instead of an object
smart way to convert object in array

cool feature:
icon picture
experimenting with div with different names daa da1 da2
*/