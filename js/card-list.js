

const divContainer = document.getElementsByClassName("user-page-body");

// const request = document.querySelector(".btn");
// request.addEventListener("click", generateRequest());

// const donate = document.querySelector(".btn");
// donate.addEventListener("click", generateDonation());

const request = document.querySelector(".make-request");
if(request){
  request.addEventListener('click', generateRequest());
}

const donate = document.querySelector(".make-donation");
if(donate){
  donate.addEventListener('click', generateDonation());
}

// const request = document.querySelector(".make-request");
// request.addEventListener("click", generateRequest());

// const donate = document.querySelector(".make-donation");
// donate.addEventListener("click", generateDonation());


function generateRequest(){
    const requestContainer = document.createElement("div");
    const listContainer = document.createElement("ul");
    const listElementRow1 = document.createElement("li");
    const listElementRow2 = document.createElement("li");
    const listElementRow3 = document.createElement("li");
    const listElementRow4 = document.createElement("li");
    const fillOrder = document.createElement("button");
    const cancelOrder = document.createElement("button");

    requestContainer.classList.add('request-container');
    listContainer.classList.add('request-list-container');
    listElementRow1.classList.add('list-element-row');
    listElementRow2.classList.add('list-element-row');
    listElementRow3.classList.add('list-element-row');
    listElementRow4.classList.add('list-element-row');
    fillOrder.classList.add('fill-order');
    cancelOrder.classList.add('cancel-order');

    document.body.appendChild(requestContainer);

    // divContainer.appendChild(requestContainer);
    // requestContainer.appendChild(listContainer);
    // listContainer.append(listElementRow1,listElementRow2,listElementRow3,listElementRow4);
    // requestContainer.append(fillOrder,cancelOrder);

    // let firstName = document.getElementById('req-firstName').value;
    // let LastName = document.getElementById('req-lastName').value;
    // let age = document.getElementById('req-age').value;
    // let weight = document.getElementById('req-weight').value;
    // let height = document.getElementById('req-height').value;
    // let blood = document.getElementById('req-blood').value;
    // let amount = document.getElementById('req-amount').value;
    // let gender = document.getElementById('req-gender').value;
    // let email = document.getElementById('req-email').value;
    // let phone = document.getElementById('req-phone').value;
    // let address = document.getElementById('req-address').value;
    // let postal = document.getElementById('req-postal').value;

    // listElementRow1.innerHTML = "Name : " +firstName+ " " +LastName+ " Age: " +age; 
    // listElementRow2.innerHTML = "Weight: " +weight+ " Height: " +height+ " Blood Type: " +blood+ " Amount Requested: " +amount;
    // listElementRow3.innerHTML = "Gender: " +gender+ " Email: " +email+ " Phone: " +phone;
    // listElementRow4.innerHTML = "Address: " +address+ " Postal Code: " +postal;

    listElementRow1.innerHTML = "Name: John Doe     Age: 25"; 
    listElementRow2.innerHTML = "Weight: 180lbs     Height: 5'11      Blood Type: O-     Amount Requested: 8 liters"; 
    listElementRow3.innerHTML = "Gender: Male     Email: user01@yahoo.com     Phone: (123)456-789";
    listElementRow4.innerHTML = "Address: 1234 Tailor Avenue, Bronx, N.Y.      Postal Code: 10468";
}

function generateDonation(){

}