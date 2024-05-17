import styles from './SingleRecepy.module.css'

const URL_API = "https://www.themealdb.com/api/json/v1/1/random.php";

const GetMeal= async (url) => {
    try {
        const response = await fetch(url);
        const data= await response.json();
        console.log(data)
    } catch (err) {
        console.log("error is: " + err)
    }
}
{GetMeal(URL_API)}
const SingleRecepy = () => {
    
    return (
        <div>
          <h3>Meal</h3>
          
        </div>
    )
};

export default SingleRecepy
