
    function start() {
 
    // Variables 

        // let key = "mSABiAG7YsxgLiQQOKLPVW2sIFqjtatV";
        // let secret="oJi7RC3GM87T5zO3";
        // let token="GyzVSGceWOW9nqmLxdwu8LWJUhDN";
        let listStor = JSON.parse(localStorage.getItem('search')) || [];
        let inputOrigDestEl = document.getElementById("search");
        let search = $(".searchBtn");
        const FligtListEl = document.getElementById("list");
        console.log(listStor);

        let resp= ["SFO", "160",
        "LAX","1 hr 25 min","01/11/2022","2:25 PM","3:50 PM","Economy","Alaska","01/15/2022"];



        // Looping into the page
        console.log(localStorage.length+ "LENGHT");
        for (let i = 0; i < localStorage.length; i++) { 
            let item = localStorage.getItem(i);
            console.log(item +" item");
            let items = $(".list").addClass("list");
            console.log(items +"Items");
        }
        search.click(function () {
            let searchOrigin = $(".inputOrigin").val();
            let searchDest = $(".inputDest").val();
            console.log(searchOrigin+ searchDest+"Codes");
            dealsFlight(searchOrigin,searchDest);
        });
    
        
        let origin="SFO";
        let dest ="LAX";
        let date="2022-01-10"
        let duraction="1 hr 25 min";
        let price="160";

        function searchFlightList() {
           // FligtListEl.innerHTML = "";
           // console.log("FligtListEl");
             console.log(listStor.length +" listor lenght");
            for (let i = 0; i < listStor.length; i++) {
    
                const histValue = document.createElement("input");
                console.log("histValue");
                histValue.setAttribute("type", "text");
                console.log("type")
                histValue.setAttribute("readonly", true);
                histValue.setAttribute("class", "width: 250px; d-block bg-white");
                console.log("histValue1");
                histValue.setAttribute("value", listStor[i]);
                console.log("historylist");
    

                dealsFlight(histValue.value);
                FligtListEl.append(histValue);
                console.log(FligtListEl+" FligtListEl");
    
            }
        }
    
        searchFlightList();
        dealsFlight(origin,dest);
    // deals page function
    console.log("before the function");
 function dealsFlight(origin,dest) {
            console.log("before res");

            fetch("https://hotels4.p.rapidapi.com/locations/v2/search?query=new%20york&locale=en_US&currency=USD", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "hotels4.p.rapidapi.com",
                    "x-rapidapi-key": "75fdea64c3msh809717eb693e58ap1d7d95jsn5d21a51f7ee3"
                }
            })
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.error(err);
            });


//              fetch("https://google-flights-search.p.rapidapi.com/search?departure_airport_code="+origin+"&arrival_airport_code="+dest+"&departure_date="+date+"&flight_class=Economy", {
//  "method": "GET",
//  	"headers": {
//  		"x-rapidapi-host": "google-flights-search.p.rapidapi.com",
//  		"x-rapidapi-key": "75fdea64c3msh809717eb693e58ap1d7d95jsn5d21a51f7ee3"
//  	}
//   })

  
//  .then(res => {
//     console.log(" res");
//  	console.log(res);
//     // let value=response.value;
//      console.log(res+"res");
//  })
//  .catch(err => {
//      console.log("err res");
//  	console.error(err);
//  });
// console.log("after res");
            
            if (resp != "") {
                console.log(resp);
                   // Local storage
                 //const origin = inputOrigDestEl.value;
                // const dest = inputOrigDestEl.value;
                listStor.push(origin);
                listStor.push(dest);
                listStor.push(date);
                listStor.push(duraction);
                listStor.push(price);
                 localStorage.setItem("search", JSON.stringify(listStor));
    

                // Start append 
                var curr = $(".curr").append("<div>").addClass("search");
                 curr.empty();
                var curFlight = curr.append("<p>");
    
                curr.append(curFlight);
    
                 // Adjust Date 
                var time = new Date(resp.dt * 1000);
                 curFlight.append(resp.name + " " + time.toLocaleDateString("en-US"));
                // Add Origin 
                 var curTrip = curFlight.append("<p>");
                 curFlight.append(curTrip);
                 curTrip.append("<p>" + "Origin: " + resp.origin + "</p>");
                 // Add Destination
                curTrip.append("<p>" + "Destination: " + resp.destination + "</p>");
                 // Add price 
                curTrip.append("<p>" + "Price: " + resp.maxPrice + "</p>");
            
                
            }
        } 
    }      
        
    start();

