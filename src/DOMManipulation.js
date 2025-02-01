<!DOCTYPE html>
<html>
<head>
    <title>DOM Manipulation</title>
</head>
<body>
    <h1 id="header">Original Text</h1>
    <button onclick="changeText()">Change Text</button>

    <script>
        function changeText() {
            document.getElementById("header").innerHTML = "New Text";
        }
    </script>
</body>
</html>

