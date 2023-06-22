const ApiKey = "8fbc23ecdc161951dff46f68228aa254";

const input = document.querySelector("input");
const button = document.querySelector("button");
const weatherReport = document.querySelector(".weather-report");

const reportCard = ({
  cityname,
  citytemp,
  cityhumidity,
  citycondition,
  citywindspeed,
  citywinddeg,
  citywinddir,
  weathericon,
  citycountrycode,
}) => `


<div class="flex justify-start items-center relative flex-col bg-gradient-to-tl from-[#99bfd1] to-[#70a6bf] shadow-2xl min-w-[310px]  max-[320px]:border-[0.5px] max-[320px]:shadow-inner border-blue-300">
            
            <div class="m-2 flex justify-center items-center text-slate-50 mt-8">
                <svg fill="#f9fafb" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    stroke="#000000" stroke-width="0.00032" class="w-6 h-6 inline-block text-gray-100">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z">
                        </path>
                    </g>
                </svg>
                <h2 class="inline-block text-3xl font-bold ml-2 ">${cityname}</h2>
                <sup class="inline-block mx-2 text-sm font-medium">${citycountrycode}</sup>
            </div>
            <div class="flex flex-row justify-between items-center w-3/4 my-3">
                <div class="flex flex-row justify-start items-center ">
                    <svg viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                        fill="#f9fafb" class="w-11 h-11 inline-block">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <defs>
                                <style>
                                    .cls-1 {
                                        fill: none;
                                        stroke: #f9fafb;
                                        stroke-miterlimit: 10;
                                        stroke-width: 1.0;
                                    }
                                </style>
                            </defs>
                            <circle class="cls-1" cx="16.3" cy="3.89" r="0.48"></circle>
                            <circle class="cls-1" cx="6.27" cy="17.73" r="0.95"></circle>
                            <path class="cls-1"
                                d="M10.09,14.89V5.32a3.82,3.82,0,0,0-7.64,0v9.57a4.77,4.77,0,1,0,8.6,2.84A4.74,4.74,0,0,0,10.09,14.89Z">
                            </path>
                            <line class="cls-1" x1="6.27" y1="10.09" x2="6.27" y2="16.77"></line>
                            <line class="cls-1" x1="10.09" y1="6.27" x2="12.95" y2="6.27"></line>
                            <line class="cls-1" x1="10.09" y1="10.09" x2="12.95" y2="10.09"></line>
                            <line class="cls-1" x1="10.09" y1="13.91" x2="12.95" y2="13.91"></line>
                            <path class="cls-1"
                                d="M22.5,10.09A1.9,1.9,0,0,1,20.59,12h0a1.91,1.91,0,0,1-1.91-1.91V7.23a1.91,1.91,0,0,1,1.91-1.91h0A1.9,1.9,0,0,1,22.5,7.23">
                            </path>
                        </g>
                    </svg>
                    <h1 class="text-slate-50 font-semibold text-xl mx-1">${citytemp}&#176</h1>
                </div>
                <div class="flex flex-row justify-start items-center ">
                    <svg fill="#f9fafb" height="200px" width="200px" version="1.1" id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 328.611 328.611" xml:space="preserve" stroke="#f9fafb" stroke-width="2.0"
                        class="w-9 h-9 inline-block">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <g>
                                <path
                                    d="M209.306,50.798c-2.452-3.337-7.147-4.055-10.485-1.602c-3.338,2.453-4.055,7.147-1.603,10.485 c54.576,74.266,66.032,123.541,66.032,151.8c0,27.691-8.272,52.794-23.293,70.685c-17.519,20.866-42.972,31.446-75.651,31.446 c-73.031,0-98.944-55.018-98.944-102.131c0-52.227,28.103-103.234,51.679-136.829c25.858-36.847,52.11-61.415,52.37-61.657 c3.035-2.819,3.209-7.565,0.39-10.6c-2.819-3.034-7.565-3.209-10.599-0.39c-1.11,1.031-27.497,25.698-54.254,63.765 c-24.901,35.428-54.586,89.465-54.586,145.71c0,31.062,9.673,59.599,27.236,80.353c20.361,24.061,50.345,36.779,86.708,36.779 c36.794,0,66.926-12.726,87.139-36.801c17.286-20.588,26.806-49.117,26.806-80.33C278.25,156.216,240.758,93.597,209.306,50.798z">
                                </path>
                                <path
                                    d="M198.43,148.146l-95.162,95.162c-2.929,2.929-2.929,7.678,0,10.606c1.465,1.464,3.385,2.197,5.304,2.197 s3.839-0.732,5.304-2.197l95.162-95.162c2.929-2.929,2.929-7.678,0-10.606C206.107,145.217,201.359,145.217,198.43,148.146z">
                                </path>
                                <path
                                    d="M191.965,207.899c-13.292,0-24.106,10.814-24.106,24.106s10.814,24.106,24.106,24.106s24.106-10.814,24.106-24.106 S205.257,207.899,191.965,207.899z M191.965,241.111c-5.021,0-9.106-4.085-9.106-9.106s4.085-9.106,9.106-9.106 s9.106,4.085,9.106,9.106S196.986,241.111,191.965,241.111z">
                                </path>
                                <path
                                    d="M125.178,194.162c13.292,0,24.106-10.814,24.106-24.106s-10.814-24.106-24.106-24.106s-24.106,10.814-24.106,24.106 S111.886,194.162,125.178,194.162z M125.178,160.949c5.021,0,9.106,4.085,9.106,9.106s-4.085,9.106-9.106,9.106 c-5.021,0-9.106-4.085-9.106-9.106S120.156,160.949,125.178,160.949z">
                                </path>
                            </g>
                        </g>
                    </svg>
                    <h5 class="text-slate-50 font-semibold text-xl mx-1">${cityhumidity}<span>%</span></h5>
                </div>
            </div>
            <div class="flex flex-row justify-center items-center ">
                <h6 class="text-slate-50 font-semibold text-2xl mx-1">${citycondition}</h6>
                <img src="https://openweathermap.org/img/wn/${weathericon}@2x.png" alt="">
            </div>
            <div class="flex flex-row justify-between items-center w-3/4 mt-3 mb-8">
                <div class="flex flex-row justify-start items-center">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="w-8 h-8 inline-block">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M18.5 22.75C16.16 22.75 14.25 20.84 14.25 18.5V18C14.25 17.59 14.59 17.25 15 17.25C15.41 17.25 15.75 17.59 15.75 18V18.5C15.75 20.02 16.98 21.25 18.5 21.25C20.02 21.25 21.25 20.02 21.25 18.5C21.25 16.98 20.02 15.75 18.5 15.75H2C1.59 15.75 1.25 15.41 1.25 15C1.25 14.59 1.59 14.25 2 14.25H18.5C20.84 14.25 22.75 16.16 22.75 18.5C22.75 20.84 20.84 22.75 18.5 22.75Z"
                                fill="#fff"></path>
                            <path
                                d="M18.5 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H18.5C20.02 11.25 21.25 10.02 21.25 8.5C21.25 6.98 20.02 5.75 18.5 5.75C16.98 5.75 15.75 6.98 15.75 8.5V9C15.75 9.41 15.41 9.75 15 9.75C14.59 9.75 14.25 9.41 14.25 9V8.5C14.25 6.16 16.16 4.25 18.5 4.25C20.84 4.25 22.75 6.16 22.75 8.5C22.75 10.84 20.84 12.75 18.5 12.75Z"
                                fill="#fff"></path>
                            <path
                                d="M9.31 9.75109H2C1.59 9.75109 1.25 9.41109 1.25 9.00109C1.25 8.59109 1.59 8.25109 2 8.25109H9.31C10.38 8.25109 11.25 7.38109 11.25 6.31109C11.25 5.24109 10.38 4.37109 9.31 4.37109C8.24 4.37109 7.37 5.24109 7.37 6.31109V6.69109C7.37 7.10109 7.03 7.44109 6.62 7.44109C6.21 7.44109 5.87 7.11109 5.87 6.69109V6.31109C5.87 4.41109 7.41 2.87109 9.31 2.87109C11.21 2.87109 12.75 4.41109 12.75 6.31109C12.75 8.21109 11.21 9.75109 9.31 9.75109Z"
                                fill="#fff"></path>
                        </g>
                    </svg>
                    <h4 class="text-slate-50 font-semibold text-base mx-1">${citywindspeed}m/s</h4>
                </div>
                <div class="flex flex-row justify-start items-center">
                    <svg fill="#f9fafb" height="200px" width="200px" version="1.1" id="Icons"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 32 32" xml:space="preserve" stroke="#f9fafb" stroke-width="0.8"
                        class="w-8 h-8 inline-block">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <g>
                                <path d="M22,9.6c-1-0.4-2-0.9-3-1.4V17c1,0,2,0.1,3,0V9.6z"></path>
                                <path
                                    d="M27.7,10.6c-0.2-0.2-0.5-0.3-0.8-0.3c-1,0.1-2,0-2.9-0.2v6.5c1.1-0.3,2.2-0.7,3.5-1.4c0.3-0.2,0.5-0.5,0.5-0.9v-3 C28,11.1,27.9,10.8,27.7,10.6z">
                                </path>
                                <path
                                    d="M12,5.6c-0.7-0.1-1.3-0.1-2.1,0C9.4,5.7,9.1,6,9,6.5L6,8.9V3c0-0.6-0.4-1-1-1S4,2.4,4,3v26c0,0.6,0.4,1,1,1s1-0.4,1-1V15.1 l3,2.4v0.1c0,0.4,0.2,0.7,0.5,0.9c0.2,0.1,0.3,0.1,0.5,0.1c0.2,0,0.3,0,0.5-0.1c0.5-0.3,1-0.5,1.5-0.7V5.6z M9,14.9l-3-2.4v-1 l3-2.4V14.9z">
                                </path>
                                <path d="M17,7.1c-0.9-0.4-1.9-0.8-3-1.1v11.2c1-0.2,2-0.3,3-0.2V7.1z"></path>
                            </g>
                        </g>
                    </svg>
                    <h4 class="text-slate-50 font-semibold text-base mx-1">${citywinddeg}<span>&#176</span> : ${citywinddir} </h4>
                </div>
            </div>
        </div>
`;

const errCard = ({ msg, locname, locmsg, statuserr }) => `
<div
class="flex justify-start items-center relative flex-col bg-gradient-to-tl from-[#99bfd1] to-[#70a6bf] shadow-2xl   p-4">
<h3 class="text-slate-50 font-semibold text-lg mt-3 mx-2"> ${msg} </h3>
<h4 class="text-gray-50 font-base text-sm mt-3 mx-1"> ${locmsg} </h4>
<span class="text-slate-100 font-bold text-lg mt-3 mx-3"> "  ${locname} " </span> 
</div>
`;

const generateReport = async () => {
  try {
    button.disabled = true
    button.textContent = 'Fetching...'
    weatherReport.innerHTML = "";

    const cityName = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${ApiKey}&units=metric`;

    console.log(url);
const response = await fetch(url)
var datadisplay = await response.json()
      let deg = datadisplay.wind.deg
      switch (true) {
          case (deg >=348.76  && deg <= 360)||(deg >=0  && deg <= 11.25):
            deg = "N";
            break;
          case deg >= 11.26 && deg <= 33.75:
            deg = "NNE";
            break;
          case deg >= 33.76 && deg <= 56.25:
            deg = "NE";
            break;
          case deg >= 56.26 && deg <= 78.75:
            deg = "ENE";
            break;
          case deg >= 78.76 && deg <= 101.25:
            deg = "E";
            break;
          case deg >= 101.26 && deg <= 123.75:
            deg = "ESE";
            break;
          case deg >= 123.76 && deg <= 146.25:
            deg = "SE";
            break;
          case deg >= 146.26 && deg <= 168.75:
            deg = "SSE";
            break;
          case deg >= 168.76 && deg <= 191.25:
            deg = "S";
            break;
          case deg >= 191.26 && deg <= 213.75:
            deg = "SSW";
            break;
          case deg >= 213.76 && deg <= 236.25:
            deg = "SW";
            break;
          case deg >= 236.26 && deg <= 258.75:
            deg = "WSW";
            break;
          case deg >= 258.76 && deg <= 281.25:
            deg = "W";
            break;
          case deg >= 281.26 && deg <= 303.75:
            deg = "WNW";
            break;
          case deg >= 303.76 && deg <= 326.25:
            deg = "NW";
            break;
          case deg >= 326.26 && deg <= 348.75:
            deg = "NNW";
            break;
          default:
            deg = "no data";
        }
      const card = document.createElement("div");
      card.innerHTML = reportCard({
        cityname: datadisplay.name,
        citytemp: datadisplay.main.temp,
        cityhumidity: datadisplay.main.humidity,
        citycondition: datadisplay.weather[0].main,
        citywindspeed: datadisplay.wind.speed,
        citywinddeg: datadisplay.wind.deg, citywinddir : deg,
        weathericon: datadisplay.weather[0].icon,
        citycountrycode: datadisplay.sys.country,
      });
      
      console.log(card);
      weatherReport.append(card);
  } 
  catch (err) {
    var name = input.value;
    const nocard = document.createElement("div");
        nocard.innerHTML = errCard({
          msg: "Enter Correct City Name",
          locmsg: "City name does not match any location ",
          locname: name,
        });
        console.log(nocard);
        weatherReport.append(nocard);
        console.log(err);
  } 
finally{
  button.disabled = false
  button.textContent = 'Get Report'

}

}

button.addEventListener("click", generateReport);
