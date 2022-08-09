<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

## Project Requirements - “Click Me!”

Using React for the front-end and Laravel for the back-end, build an application that presents a single
button to the user with the label “Click Me!”. 

When the user clicks the button, a number placed somewhere else on the screen (up to you) is incremented - i.e. keeping a tally of the number of times the button was
clicked since midnight today. When the page is loaded for the first time on a new day, the number should be
0. 

Use Laravel and Eloquent with PGSQL to GET when the page loads and POST the updated value on
every click. 

Historic values should be stored against the given date in the database. 


## Stacks To use

Laravel (v6) 
ReactJS (Latest version) - 18.2.0
PostgreSQL (Latest version)

## Steps Done to complete this work

Installed Laravel using composer create-project --prefer-dist laravel/laravel blog "6.*" .

- composer require laravel/ui="1.*" --dev
- php artisan ui react
- npm install 
- npm run dev
- 
- 

## Steps to Follow on deployment

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
