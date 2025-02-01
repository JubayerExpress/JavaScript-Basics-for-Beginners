<!DOCTYPE html>
<html>
<head>
    <title>Event Handling</title>
</head>
<body>
    <button id="myButton">Click Me</button>
    <script>
        document.getElementById("myButton").addEventListener("click", function() {
            alert("Button clicked!");
        });
    </script>
</body>
</html>

