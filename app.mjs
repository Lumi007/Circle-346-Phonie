function startApp() {
    // Your entire app should not necessarily be coded inside this 
    // single function (though there's no penalty for that), 
    // so create and use/call additional functions from here
  
    // pls remove the below and make some magic in here!

    // Store DOM Inputs in Variables
    let headerTitle = document.getElementsByClassName ("headerTitle");
    let fName = document.getElementById ('fName');
    let lName = document.getElementById("lName");
    let emailAdd = document.getElementById("emailAdd")
    let countryCode = document.getElementById("countryCode");
    let phoneNumber = document.getElementById("p_number");
    let networkLogo = document.getElementById ("m_logo");
    let track = document.getElementById("track");
    let submit = document.getElementById("submit");
    let cancel = document.getElementById("cancel");
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

      console.log(networkId[1].network.identifiers.includes(808));
      console.log(networkLogo);
      console.log(networkLogo.innerHTML);

      // Function to check Phone Number against the array of Network Objects and display logo 
/**
 * @param {Number} num the interger containing the retrieved first three phone number
 * @param {array} networkId array holding network objects
 */
  function checkPhoneNumber(num,networkId) {
        // console.log(num, networkId);
        let net = {};
          if (num <= 700 || null || undefined) {networkLogo.textContent = 'Detecting Network'}; 
            for (let i = 0; i < networkId.length; i++) {
              if  (networkId[i].network.identifiers.includes(num)){
                net = networkId[i].network;
                  console.log(net);
                  break;
              }
            };

// Changes logo based on return from net variable
      // console.log(net.imageUrl);
      // console.log(networkLogo.innerHTML);
      networkLogo.innerHTML = `<img src = "${net.imageUrl}"  class = "netImg" alt ="${net.name}"/>`;
      // console.log(networkLogo.innerHTML);
    };
// Event listener to trigger checkPhoneNumber function on input of first three digits
      phoneNumber.addEventListener("input", (e) => {
        let firstThree = parseInt((phoneNumber.value.slice(0,3)));
        // console.log(firstThree);
        checkPhoneNumber(firstThree, networkId);
       });
    
  };
  
  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //