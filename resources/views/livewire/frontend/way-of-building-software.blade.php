<section class="w-full max-w-7xl mx-auto px-4 mt-16 mb-8">

    {{-- Heading --}}
    <div class="text-center flex flex-col items-center gap-5">
        <span class="w-24 h-2 rounded-full bg-linear-to-r from-purple-500 to-pink-500"></span>
        </span>

        <h1 class="text-3xl md:text-5xl font-semibold text-gray-900 dark:text-gray-100 leading-tight">
            Way of Building <br />
            <span class="font-bold text-purple-500">Great Software</span>
        </h1>
    </div>

    {{-- Content --}}
    <div class="mt-16 space-y-24">
        @foreach ($items as $index => $data)
            @php
                $isReverse = $index % 2 !== 0;
            @endphp

            <div
                class="flex flex-col-reverse
                {{ $isReverse ? 'md:flex-row-reverse' : 'md:flex-row' }}
                items-center gap-14">

                {{-- Text Card --}}
                <div class="w-full md:w-1/2 bg-white dark:bg-gray-800 rounded-2xl p-8 flex flex-col gap-6 text-left shadow-lg">

                    <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
                        {{ $data['title'] }}
                    </h2>

                    <p class="text-gray-700 leading-relaxed dark:text-gray-300">
                        {{ $data['long_description'] }}
                    </p>

                    <p class="text-gray-600 leading-relaxed dark:text-gray-400">
                        {{ $data['short_description'] }}
                    </p>

                    {{-- Quote --}}
                    <div class="bg-gray-50 dark:bg-gray-700/20 p-4 rounded-xl border-l-4 border-purple-500">
                        <p class="text-purple-600 italic">
                            “{{ $data['comment'] }}”
                        </p>
                    </div>

                    {{-- Author --}}
                    <div class="flex items-center gap-4 mt-2">
                        <img class="h-12 w-12 rounded-full object-cover ring-2 ring-purple-500"
                            src="/assets/ceo-image.png" alt="CEO" />
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                Hamza Jaffar
                            </h3>
                            <p class="text-sm text-gray-500">CEO</p>
                        </div>
                    </div>
                </div>

                {{-- Image --}}
                <div class="w-full md:w-1/2 flex justify-center">
                    <img src="{{ $data['image'] }}" alt="{{ $data['title'] }}"
                        class="rounded-2xl border border-gray-100 dark:border-gray-600 shadow-xl max-h-105 object-cover" />
                </div>

            </div>
        @endforeach
    </div>
</section>
