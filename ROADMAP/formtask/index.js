  document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault();
        let firstName = document.getElementById("firstName").value;
        let lastName = document.getElementById("lastName").value;
        let address = document.getElementById("address").value;
        let pincode = document.getElementById("pincode").value;
        let food = document.getElementById("food").value;
        let state = document.getElementById("state").value;
        let country = document.getElementById("country").value;

        let table = document.getElementById("myTable");
        let row = table.insertRow(-1);
        let firstNameCell = row.insertCell(0);
        let lastNameCell = row.insertCell(1);
        let addressCell = row.insertCell(2);
        let pincodeCell = row.insertCell(3);
        let foodCell = row.insertCell(4);
        let stateCell = row.insertCell(5);
        let countryCell = row.insertCell(6);

        firstNameCell.innerHTML = firstName;
        lastNameCell.innerHTML = lastName;
        addressCell.innerHTML = address;
        pincodeCell.innerHTML = pincode;
        foodCell.innerHTML = food;
        stateCell.innerHTML = state;
        countryCell.innerHTML = country;

        document.getElementById("myForm").reset();
      });
