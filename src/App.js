
import './App.css';


function App() {

  const datecreater=(d)=>{
    let months=["janaury","Februray","March","April","May","June","July","Agust","September","October",
                "November","December"];
    let days=  ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
    
    let day=days[d.getDay()];
    let date=d.getDate();
    let month=months[d.getMonth()];
    let year=d.getFullYear();
    let time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    return `${day} ${date} ${month} ${year}  ${time}`
  }
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" 
          className="search-bar" 
          placeholder="search here"/>
        </div>
        <div className="location-box">
          <div className="location">Mumbai ,INDIA</div>
          <div className="date">{datecreater(new Date())}</div>
       </div>
       <div className="weather-box">
         <div className="temp">
           20 ° C
         </div>
         <div className="weather">Sunny</div>

       </div>
      </main>
    
    </div>
  );
}

export default App;
