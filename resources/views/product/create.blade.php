<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf_token" content={{csrf_token()}}>
    <title>Adicionando produto</title>
    <style>
        body {
            margin : 0;
            padding : 0;
        }
        html {
            margin : 0;
            padding : 0;
        }
    </style>
</head>
<body>
    <div id="root" authenticated="{{Auth::check()}}"></div>
    <script src="/js/product/create.js"></script>
</body>
</html>