import styles from './SingleRecepy.module.css'
const URL_API = "https://www.themealdb.com/api/json/v1/1/random.php";

const GetMeal= async (url) => {
    try {
        const response = await fetch(url);
        const data= await response.json();
        console.log(data.meals[0])
    } catch (err) {
        console.log("error is: " + err)
    }
}
{GetMeal(URL_API)}

const SingleRecepy = ({setMeal, meal}) => {

    const handleClick= () => {
        
    }
    return (
        <div>
          <h3>Meal</h3>
          <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, ea!</h4>
          <button onClick={handleClick}>new meal</button>
          
        </div>
    )
};

export default SingleRecepy
