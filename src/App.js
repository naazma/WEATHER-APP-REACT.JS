import axios from "axios"
import { useState } from "react"

function App(){
    const [deg,setdeg]= useState("234")
    const [city,setcity]= useState("Coimbatore")
    const [desc,setdesc]= useState("Raining")
    const [enteredvalue,setenteredvalue] = useState("")

    function handleInput(event)
    {
        console.log(event.target.value)
        setenteredvalue(event.target.value)
    }

    function getData(){
        var weather = axios(`https://api.openweathermap.org/data/2.5/weather?q=${enteredvalue}&appid=094c4d20441f63109b0c20129ac65a0c`)

        weather.then(function(dalta){
            setdeg(dalta.data.main.temp)
            setdesc(dalta.data.weather[0].main)
            setcity(dalta.data.name)
           
        })

    }
    return(<div className="flex flex-row justify-center h-[100vh] items-center">
        <div style={{backgroundImage: "linear-gradient(120deg, #fccb90 0%, #d57eeb 100%)"}} 
        className="p-2 rounded-md shadow"><h2 className="font-medium">Hey!🌦️</h2>
        <p className="text-lg">Do you want to know the weather report?</p>
        <input onChange={handleInput} type="text" className="rounded-md h-8 text-lg mt-3 p-2 outline-none" placeholder="City or Country Name" />
        <br />
        <button onClick={getData} className="bg-black text-white rounded-lg p-2 mt-2 text-xs ">GET REPORT🌩️</button>
        <p className="text-ms">Degree: {deg} | City: {city} | Weather: {desc}</p>
     </div>
        
    </div>)
}
export default App