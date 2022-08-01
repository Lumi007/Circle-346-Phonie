function startApp() {
// Stored DOM Objects and Network Array at the top to give global scope
    // Storine DOM Inputs in Variables
    let headerTitle = document.getElementsByClassName ("headerTitle");
    let fName = document.getElementById ("fName");
    let lName = document.getElementById("lName");
    let emailAdd = document.getElementById("emailAdd")
    let countryCode = document.getElementById("countryCode");
    let phoneNumber = document.getElementById("p_number");
    let networkLogo = document.getElementById ("m_logo");
    let track = document.getElementById("track");
    let submit = document.getElementById("submit");
    let cancel = document.getElementById("cancel");
    let phonieform = document.querySelector(".phonieform");
    console.log(phonieform);
    console.log(networkLogo);
    // Network detials in an an array of objects
    let networkId = [
      {
        network: {
          id:1,
          name: "MTN",
          identifiers: [703, 704, 706, 803, 806,810, 813, 814, 816, 903, 906, 913, 916, 804],
          imageUrl: "https://res.cloudinary.com/lumi007/image/upload/v1658023611/mtn-logo_xzzvok.jpg"
        }
      },
      {
        network: {
          id:2,
          name: "Airtel",
          identifiers: [701,702,708,802,808,812,901,902,904,907,912],
          imageUrl: "https://res.cloudinary.com/lumi007/image/upload/v1658023611/airtel-logo_io9hbp.jpg"
        }
      },
      {
        network: {
          id:3,
          name: "GLO",
          identifiers: [705,805,807,811,815,905,915],
          imageUrl: "https://res.cloudinary.com/lumi007/image/upload/v1658023611/glo-logo_ay9g0z.jpg"
        }
      },
      {
        network: {
          id:4,
          name: "9Mobile",
          identifiers: [809,817,818,909,908],
          imageUrl: "https://res.cloudinary.com/lumi007/image/upload/v1658023612/9mobile-logo_ttgvie.jpg"
        }
      }];

// Testing Microphone 1,2 Tueh Tueh
      console.log(networkLogo);
      console.log(networkLogo.innerHTML);

// Function to check Phone Number against the array of Network Objects and display logo 
/**
 * @param {Number} num the integer containing the retrieved first three phone number
 * @param {array} networkId array holding network objects
 */
  function checkPhoneNumber(num,networkId) {
// Create empty object and attach data if num is true in .identifiers
        let net ;
        for (let i = 0; i < networkId.length; i++) {
          // Loop through the array of objects and if num is true
          if (networkId[i].network.identifiers.includes(num)) {
            net = networkId[i].network;
            break;
          }
        }
        console.log(net);
        // Changes logo based on return from net variabrle
        if (!net || net === undefined) {
          net = networkLogo.innerHTML = "<p>Invalid Network</p>";
          console.log(networkLogo.innerHTML);
        } else {
          networkLogo.innerHTML = `<img src = "${net.imageUrl}"  class = "netImg" alt ="${net.name}"/>`;
          console.log(networkLogo.innerHTML); 
        }     
      }
// Event listener to trigger checkPhoneNumber function on input of first three digits
      phoneNumber.addEventListener("input", (e) => {
          let val = e.target.value;
        
        if (val.length >= 3 && val.length <= 10){
          let firstThree =  parseInt((val.slice(0,3)));
        console.log(firstThree);
        checkPhoneNumber(firstThree, networkId);}
       });
    
// Event Listener to submit form
      phonieform.addEventListener("submit", (e) => {
        e.preventDefault();
        alert(`
        ${fName.value} ${lName.value}\n
        ${emailAdd.value}\n
        ${countryCode.value}-${phoneNumber.value}\n
        ${track.value}\n
        Saved Successfully`);

      }); 



};
  
  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //