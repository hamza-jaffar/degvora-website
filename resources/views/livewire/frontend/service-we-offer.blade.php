<section id="service" class="text-center w-full flex flex-col mt-10 gap-8 max-w-7xl mx-auto px-4"
    x-data="{
        currentIndex: 1,
        total: {{ count($services) }},
        scrollTo(index) {
            const container = this.$refs.container;
            const cardWidth = container.scrollWidth / this.total;
            container.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
            this.currentIndex = index;
        },
        prev() {
            this.scrollTo(this.currentIndex > 0 ? this.currentIndex - 1 : this.total - 1);
        },
        next() {
            this.scrollTo(this.currentIndex < this.total - 1 ? this.currentIndex + 1 : 0);
        }
    }">

    <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">Services we offer</h1>

    <div class="relative">

        {{-- Previous --}}
        <button @click="prev"
            class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-700 cursor-pointer border border-gray-300 rounded-full p-3 shadow-lg hover:border-purple-500 hidden md:block">
            <x-heroicon-o-chevron-left class="w-6 h-6 text-gray-700 dark:text-gray-200" />
        </button>

        {{-- Carousel --}}
        <div x-ref="container" class="w-full overflow-x-auto scroll-smooth scrollbar-hide">
            <div class="flex gap-6 px-4 space-y-6 md:px-12">
                @foreach ($services as $index => $service)
                    <div class="shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                        <x-service-card :service="$service" :active="$index === 1"
                            x-bind:class="{ 'ring-2 ring-purple-500': currentIndex === {{ $index }} }" />
                    </div>
                @endforeach
            </div>
        </div>

        {{-- Next --}}
        <button @click="next"
            class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-700 cursor-pointer border border-gray-300 rounded-full p-3 shadow-lg hover:border-purple-500 hidden md:block">
            <x-heroicon-o-chevron-right class="w-6 h-6 text-gray-700 dark:text-gray-200" />
        </button>

        {{-- Dots --}}
        <div class="flex gap-2 justify-center py-4 mt-4">
            @foreach ($services as $index => $_)
                <button @click="scrollTo({{ $index }})" class="h-3 rounded-full transition-all duration-300"
                    :class="currentIndex === {{ $index }} ?
                        'w-8 bg-linear-to-b from-pink-500 to-purple-500' :
                        'w-3 border border-purple-500'"></button>
            @endforeach
        </div>

    </div>
</section>
