  document.getElementById("myForm").addEventListener("submit", function(event) {
            event.preventDefault();
            var firstName = document.getElementById("firstName").value;
            var lastName = document.getElementById("lastName").value;
            var address = document.getElementById("address").value;
            var pincode = document.getElementById("pincode").value;
            var food = document.getElementById("food").value;
            var state = document.getElementById("state").value;
            var country = document.getElementById("country").value;

            var table = document.getElementById("myTable");
            var row = table.insertRow(-1);
            var firstNameCell = row.insertCell(0);
            var lastNameCell = row.insertCell(1);
            var addressCell = row.insertCell(2);
            var pincodeCell = row.insertCell(3);
            var foodCell = row.insertCell(4);
            var stateCell = row.insertCell(5);
            var countryCell = row.insertCell(6);

            firstNameCell.innerHTML = firstName;
            lastNameCell.innerHTML = lastName;
            addressCell.innerHTML = address;
            pincodeCell.innerHTML = pincode;
            foodCell.innerHTML = food;
            stateCell.innerHTML = state;
            countryCell.innerHTML = country;

            document.getElementById("myForm").reset();
        });