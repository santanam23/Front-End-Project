function openNav() {
    document.getElementById("myNav").style.height = "100%";

}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

function openSearch() {
    document.getElementById("search").style.height = "100px";
}

function closeSearch() {
    document.getElementById("search").style.height = "0%";
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
// // Variables 

// function start() {
//     let key = "ec2aa4379af0f26074308c2598651fa7";
//     let listStor = JSON.parse(localStorage.getItem('')) || [];




//     // Looping into the page
//     for (let i = 0; i < localStorage.length; i++) {

//         let item = localStorage.getItem(i);
//         let items = $(".list").addClass("list");
//     }
// // deals page function
//     function dealsFlight() {

//       //  get Api's info

//       let apiTransp="https://api.goswift.ly";
//       let apiTraAdv = "https://skyscanner-flights.p.rapidapi.com/results";
//       let apisky= "https://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/{country}/{currency}/{locale}/{originPlace}/{destinationPlace}/{outboundPartialDate}/{inboundPartialDate}?apiKey={key}";

        

// var options = {
//   method: 'GET',
//   url: apiTraAdv
// };


//                 // Local storage
//                 localStorage.setItem('', JSON.stringify());
//     }

//      for (let i = 0; i < localStorage.length; i++) {

//         let item = localStorage.getItem(i);
//         let items = $(".list").addClass("list");
//     }
// // deals page function
//     function dealsBus() {

//       //  get Api's info

//       let apiTransp="https://api.goswift.ly";
//       let apiTraAdv = "https://skyscanner-flights.p.rapidapi.com/results";
//       let apisky= "https://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/{country}/{currency}/{locale}/{originPlace}/{destinationPlace}/{outboundPartialDate}/{inboundPartialDate}?apiKey={key}";

        

// var options = {
//   method: 'GET',
//   url: apiTraAdv
// };


//                 // Local storage
//                 localStorage.setItem('', JSON.stringify());
//     }

//     }
//      for (let i = 0; i < localStorage.length; i++) {

//         let item = localStorage.getItem(i);
//         let items = $(".list").addClass("list");
//     }
// // deals page function
//     function dealsUbber() {

//       //  get Api's info

//       let apiTransp="https://api.goswift.ly";
//       let apiTraAdv = "https://skyscanner-flights.p.rapidapi.com/results";
//       let apisky= "https://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/{country}/{currency}/{locale}/{originPlace}/{destinationPlace}/{outboundPartialDate}/{inboundPartialDate}?apiKey={key}";

        

// var options = {
//   method: 'GET',
//   url: apiTraAdv
// };


//                 // Local storage
//                 localStorage.setItem('', JSON.stringify());
//     }

//     }
//     }
//     start();