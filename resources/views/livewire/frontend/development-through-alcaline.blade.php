<section class="w-full max-w-7xl mx-auto px-4 mt-16 mb-8">

    {{-- Heading --}}
    <div class="text-center flex flex-col items-center gap-5">
        <span class="w-24 h-2 rounded-full bg-linear-to-r from-pink-500 to-purple-500"></span>

        <h1 class="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight">
            How development <br />
            <span class="font-bold text-purple-500">
                through Alcaline works
            </span>
        </h1>
    </div>

    {{-- Desktop --}}
    <div class="mt-6 hidden md:flex flex-row lg:flex-col">

        {{-- Odd steps --}}
        <div class="relative px-4 lg:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-x-4">
            @foreach ($steps as $step)
                @if ($step['process_number'] % 2 !== 0)
                    <div class="flex h-full items-center lg:flex-col">
                        <div
                            class="bg-white dark:bg-gray-800 border border-purple-500/20 rounded-xl p-6 max-w-sm shadow-sm hover:shadow-lg transition">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                <span
                                    class="bg-linear-to-b from-pink-500 to-purple-500 bg-clip-text text-transparent font-bold">
                                    #{{ $step['id'] }}
                                </span>
                                {{ $step['title'] }}
                            </h3>

                            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                {{ $step['description'] }}
                            </p>
                        </div>

                        <div class="w-12 h-0.5 lg:w-0.5 lg:h-12 bg-pink-500/40"></div>
                    </div>
                @endif
            @endforeach
        </div>

        {{-- Center trophy --}}
        <div class="flex items-center flex-col lg:flex-row gap-3">
            <div class="w-0.5 lg:w-full h-full lg:h-0.5 bg-pink-500/40"></div>
            <img src="/assets/trophy-perspective-matter.png" alt="">
        </div>

        {{-- Even steps --}}
        <div class="relative px-4 mt-20 lg:mt-0 grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-x-4">
            @foreach ($steps as $step)
                @if ($step['process_number'] % 2 === 0)
                    <div class="flex h-full items-center lg:flex-col">
                        <div class="w-12 h-0.5 lg:w-0.5 lg:h-12 bg-pink-500/40"></div>

                        <div
                            class="bg-white dark:bg-gray-800 border border-purple-500/20 rounded-xl p-6 max-w-sm shadow-sm hover:shadow-lg transition">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                <span
                                    class="bg-linear-to-b from-pink-500 to-purple-500 bg-clip-text text-transparent font-bold">
                                    #{{ $step['id'] }}
                                </span>
                                {{ $step['title'] }}
                            </h3>

                            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                {{ $step['description'] }}
                            </p>
                        </div>
                    </div>
                @endif
            @endforeach
        </div>
    </div>

    {{-- Mobile --}}
    <div class="mt-6 md:hidden">
        @foreach ($steps as $step)
            <div class="flex h-full items-center flex-col">
                <div
                    class="bg-white dark:bg-gray-800 border border-purple-500/20 w-full rounded-xl p-6 shadow-sm hover:shadow-lg transition">
                    <h3 class="text-lg font-semibold dark:text-gray-100 text-gray-900 mb-2">
                        <span
                            class="bg-linear-to-b from-pink-500 to-purple-500 bg-clip-text text-transparent font-bold">
                            #{{ $step['id'] }}
                        </span>
                        {{ $step['title'] }}
                    </h3>

                    <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {{ $step['description'] }}
                    </p>
                </div>

                <div class="h-12 w-0.5 bg-pink-500/40"></div>
            </div>
        @endforeach

        <div class="flex justify-center">
            <img src="/assets/trophy-perspective-matter.png" alt="">
        </div>
    </div>

</section>
