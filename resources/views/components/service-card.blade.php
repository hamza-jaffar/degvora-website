@props(['service', 'active' => false])

<div
    class="group flex flex-col gap-4 border rounded-xl p-6 transition-all duration-300 bg-white dark:bg-gray-800
    {{ $active ? 'border-purple-500 shadow-xl' : 'border-gray-200 dark:border-gray-700 hover:border-purple-500 hover:shadow-xl' }}">
    <div
        class="rounded-full p-2 w-fit
        {{ $active ? 'border border-purple-500' : 'group-hover:border group-hover:border-purple-500' }}">
        <img src="{{ $service['image'] }}" class="h-12 w-12" alt="{{ $service['title'] }}">
    </div>

    <h1
        class="text-xl text-left font-bold transition-colors
        {{ $active ? 'text-purple-500' : 'text-gray-900 dark:text-gray-100 group-hover:text-purple-500' }}">
        {{ $service['title'] }}
    </h1>

    <p class="text-gray-600 text-left leading-relaxed dark:text-gray-400">
        {{ $service['description'] }}
    </p>
</div>
