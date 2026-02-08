<x-layouts::guest :title="__('Welcome to Degvora')">
    {{-- banner section --}}
    <section id="home" class="w-full max-w-7xl mx-auto relative overflow-hidden">
        <section class="w-full flex flex-col md:flex-row px-3 sm:px-8 lg:px-12 xl:px-22 items-center">
            <div class="space-y-6 lg:space-y-12">
                <h1 class="text-gray-900 dark:text-white text-3xl lg:text-5xl">
                    Great
                    <span class="font-bold bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                        Product
                    </span>
                    is <br class="hidden md:block" />
                    <span class="font-bold">built with great </span>
                    <span class="font-bold bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                        Teams
                    </span>
                </h1>
                <p class="text-gray-700 text-lg">
                    We help build and manage a team of world-class developers to bring
                    your vision to life
                </p>
                <a href="/contact-us">
                    <button
                        class="bg-linear-to-r from-purple-600 to-pink-500 hover:scale-105 transition-transform px-6 py-3 cursor-pointer rounded-md text-white">
                        Let's Get Started
                    </button>
                </a>
            </div>
            <div>
                <img src="/assets/banner_image.png" alt="" />
            </div>
        </section>
        <div class="h-18 w-18 rounded-full -bottom-9 left-128 bg-linear-to-b from-purple-600 to-pink-500 absolute" />
    </section>

    {{-- Service Section --}}
    <livewire:frontend.service-we-offer />

    {{-- Way of Building Software --}}
    <livewire:frontend.way-of-building-software />

    {{-- Development Through Alcaline works --}}
    <livewire:frontend.development-through-alcaline />

    {{-- Our Design and Development Process --}}
    <livewire:frontend.our-design-and-development-process />

    {{-- Hire Section --}}
    <livewire:frontend.hire-section />
</x-layouts::guest>
