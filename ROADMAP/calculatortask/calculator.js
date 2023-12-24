
            function clearResult() {
                document.getElementById("result").value = "";
            }

            function appendValue(value) {
                document.getElementById("result").value += value;
            }

            function moveLeft() {
                var currentValue = document.getElementById("result").value;
                document.getElementById("result").value = currentValue.slice(0, -1);
            }

            function calculate() {
                var expression = document.getElementById("result").value;
                var result = eval(expression);
                document.getElementById("result").value = result;
            }