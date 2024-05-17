"use client"

import Image from "next/image";
import styles from "./page.module.css";
import SingleRecepy from "@/components/SingleRecepy";
import {useState, useEffect} from "react"




export default function Home() {
const [meal,setMeal] = useState(null)


  return (
    <main>
      <SingleRecepy meal={meal} setMeal={setMeal}/>
    </main>
  );
}
