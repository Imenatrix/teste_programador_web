<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Novo token</title>
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
    <div id="root" authenticated="{{Auth::check()}}" name="{{$name}}" token="{{$token}}"></div>
    <script src="/js/token/new_token.js"></script>
</body>
</html>