<x-layouts::guest :title="__('Contact us')">
    <section class="flex flex-col min-h-screen items-center w-full bg-gray-50 dark:bg-gray-900">
        <div class="p-6 sm:p-12 max-w-7xl w-full flex flex-col md:flex-row gap-10 md:gap-16">

            <!-- Contact Info -->
            <div class="w-full md:w-1/2 flex flex-col gap-6">
                <h2 class="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-gray-100">
                    Contact Us
                </h2>
                <p class="text-gray-700 dark:text-gray-300 text-lg sm:text-xl">
                    We are committed to helping you bring your project to life. Reach
                    out to us, and we’ll get back to you as soon as possible.
                </p>

                <div class="flex flex-col gap-4 mt-6">
                    <div class="flex items-center gap-4 p-4 ">
                        <x-heroicon-c-phone class="w-6 h-6 text-purple-700" />
                        <a href="tel:+923466624947"
                            class="text-gray-900 dark:text-gray-100 text-lg sm:text-xl font-medium hover:text-purple-700 transition-colors">
                            +92 346 662 4947
                        </a>
                    </div>

                    <div class="flex items-center gap-4 p-4 ">
                        <x-heroicon-c-envelope class="w-6 h-6 text-purple-700" />
                        <a href="mailto:contact@degvora.com"
                            class="text-gray-900 dark:text-gray-100 text-lg sm:text-xl font-medium hover:text-purple-700 transition-colors">
                            contact@degvora.com
                        </a>
                    </div>
                </div>
            </div>

            <!-- Contact Form -->
            <livewire:contact-form />
        </div>
    </section>
</x-layouts::guest>
