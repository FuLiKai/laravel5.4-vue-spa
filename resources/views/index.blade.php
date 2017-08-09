<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="X-CSRF-TOKEN" content="{{csrf_token()}}">
        <title>期权钱包</title>
        <style>
            html, body {
                margin: 0;
                padding: 0;
            }
        </style>
    </head>
    <body>
        <div id="app">
            <app></app>
        </div>

        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
