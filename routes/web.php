<?php

use App\Mail\NotifyAdmin;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;

// Route::get('/clear-cache', function () {
//     Artisan::call('optimize:clear');

//     return '✅ Cache cleared successfully!';
// });

// Route::get('/send-mail', function () {

//     Mail::to('hamzajaffer789@gmail.com')->send(new NotifyAdmin());
//     return '✅ Email sent successfully!';
// });

Route::get('/', function () {
    return view('welcome');
})->name('home');

Route::get('/contact-us', function () {
    return view('pages.contact');
})->name('contact');

Route::view('dashboard', 'dashboard')
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

require __DIR__ . '/settings.php';
