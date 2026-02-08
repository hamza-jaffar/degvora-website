<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="dark">

<head>
    @include('partials.head')
</head>

<body class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">

    <div
        class="w-full bg-white dark:bg-gray-800 p-4 max-w-7xl mx-auto fixed top-4 left-0 right-0 z-10 border-gray-100 dark:border-gray-700 border rounded-xl shadow-lg flex justify-between items-center">

        <x-app-logo class="h-8 w-auto" />

        <!-- Desktop Menu -->
        <ul class="gap-7 hidden md:flex items-center">
            <li>
                <a href="/" class="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-purple-600">
                    Home
                </a>
            </li>

            <li>
                <a href="/#service" class="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-purple-600">
                    Services
                </a>
            </li>

            <li>
                <a href="/#process"
                    class="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-purple-600">
                    Process
                </a>
            </li>

            <li>
                <a href="/contact-us"
                    class="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-purple-600">
                    Contact
                </a>
            </li>
        </ul>

        <!-- CTA Button -->
        <a href="/contact-us">
            <button
                class="flex items-center cursor-pointer gap-2 px-4 py-2 bg-linear-to-r from-purple-600 to-pink-500 hover:scale-105 transition-transform rounded-md text-white">
                <x-heroicon-o-paper-airplane class="w-5 h-5" />
                Contact Us
            </button>
        </a>
    </div>

    <section class="mt-22 w-full min-h-screen">
        {{ $slot }}
    </section>


    @include('partials.guest-footer')
    @fluxScripts
</body>

</html>
