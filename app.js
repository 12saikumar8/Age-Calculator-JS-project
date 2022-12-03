// const container;
// const error;
let dobElement = document.querySelector("#dob");
dobElement.max = new Date().toISOString().split('T')[0];

dobElement.addEventListener('change', getAge);
function getAge(e){
    console.log(e.target.value);
    calcAge(e.target.value);
    
}

function calcAge(dob){ 
    
    var today = new Date();
    var birthDate =  new Date(dob);
    //for calculating years
    var years;
      if (today.getMonth() > birthDate.getMonth() || (today.getMonth() == birthDate.getMonth() && today.getDate() >= birthDate.getDate())) {
        years = today.getFullYear() - birthDate.getFullYear();
      }
      else {
        years = today.getFullYear() - birthDate.getFullYear() - 1;
      }
      console.log(years,"years");
      //for caluclating months
      var months;
      if (today.getDate() >= birthDate.getDate()) {
        months = today.getMonth() - birthDate.getMonth();
      }
      else if (today.getDate() < birthDate.getDate()) {
        months = today.getMonth() - birthDate.getMonth() - 1;
      }
      // make month positive
      months = months < 0 ? months + 12 : months;
      console.log(months,"months");
      //for calculating days
      var days;
      // days of months in a year
      var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if (today.getDate() >= birthDate.getDate()) {
        days = today.getDate() - birthDate.getDate();
      } else {
        days = today.getDate() - birthDate.getDate() + monthDays[birthDate.getMonth()];
      }
      console.log(days,"days");
      displayAge(years,months,days);
    
     
}

function displayAge(years,months,days){


      let yearsElement = document.querySelector("#years");
      yearsElement.innerHTML = years;

      let monthsElement = document.querySelector("#months");
      monthsElement.innerHTML = months;

      let daysElement = document.querySelector("#days");
      daysElement.innerHTML = days;

       

    let presentAge = document.querySelector(".desc");
    presentAge.innerHTML = `your age is ${years}`
    
    
}

