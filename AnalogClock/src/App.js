
import './App.css';

function App() {
  setInterval(()=>{

    let x=new Date();
    let hh= x.getHours();
    let mm= x.getMinutes();
    let ss= x.getSeconds();
    let day = x.getDay();
    let date = x.getDate();
    let month = x.getMonth();
    let year = x.getFullYear();
    
    let hhrotate = 30*hh + mm/2;
    let mmrotate = 6*mm + ss/10;
    let ssrotate = 6*ss;
       
        document.getElementById("hour").style.transform=`translate(-50%,-100%) rotate(${hhrotate}deg)` ;
        document.getElementById("minute").style.transform=`translate(-50%,-100%) rotate(${mmrotate}deg)` ;
        document.getElementById("second").style.transform=`translate(-50%,-100%)  rotate(${ssrotate}deg)` ;
        document.getElementById("mydate").innerHTML=`${date} / ${month+1} / ${year}`;
        document.getElementById("mytime").innerHTML=`${hh} : ${mm} : ${ss}`;
        
        switch (day) {
            case 0:
                document.getElementById("myday").innerHTML="Sunday";
                break;
            case 1:
                document.getElementById("myday").innerHTML="Monday";
                break;
            case 2:
                document.getElementById("myday").innerHTML="Tuesday";
                break;
            case 3:
                document.getElementById("myday").innerHTML="Wednesday";
                break;
            case 4:
                document.getElementById("myday").innerHTML="Thursday";
                break;
            case 5:
                document.getElementById("myday").innerHTML="Friday";
                break;
            case 6:
                document.getElementById("myday").innerHTML="Saurday";
                break;
    
        }
    }, 1000);
  return(
    <>
      <div id="clockcontainer">
        <h2 className="responiveFont logo">Quartz</h2>
        <h2 className="responiveFont date" id="mydate"></h2>
        <h2 className="responiveFont day" id="myday"></h2>
        <h2 className="responiveFont time" id="mytime"></h2>
        <div id="center"></div>
        <div id="hour"></div>
        <div id="minute"></div>
        <div id="second"></div>
    </div>
    </>
  );
}

export default App;
