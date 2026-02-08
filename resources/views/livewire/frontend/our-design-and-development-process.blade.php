<section id="process" class="w-full max-w-7xl mx-auto py-12 px-4">

    {{-- Heading --}}
    <div class="text-center flex flex-col items-center gap-5">
        <span class="w-24 h-2 rounded-full bg-linear-to-r from-pink-500 to-purple-500">
        </span>

        <h1 class="text-3xl md:text-5xl font-semibold text-gray-900 dark:text-gray-100 leading-tight">
            Our Design and <br />
            <span class="font-bold text-purple-500">
                Development Process
            </span>
        </h1>
    </div>

    {{-- Cards --}}
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        @foreach ($processes as $item)
            <div
                class="group bg-white dark:bg-gray-800 rounded-lg border border-pink-500/20 p-6 transition-all duration-300 hover:shadow-xl cursor-pointer">

                <div class="flex items-center gap-4 mb-4">
                    <div class="w-12 h-12 flex items-center justify-center rounded-xl"
                        style="background: linear-gradient(to right, {{ $item['gradient_from'] }}, {{ $item['gradient_to'] }})">
                        <img src="{{ $item['icon_url'] }}" alt="{{ $item['title'] }}" class="w-7 h-7 object-contain" />
                    </div>

                    <h2 class="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100    ">
                        {{ $item['title'] }}
                    </h2>
                </div>

                <p class="text-sm text-gray-600 leading-relaxed dark:text-gray-400">
                    {{ $item['description'] }}
                </p>
            </div>
        @endforeach
    </div>

</section>
