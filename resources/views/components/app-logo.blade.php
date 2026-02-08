@props([
    'sidebar' => false,
])

@if ($sidebar)
    <flux:sidebar.brand name="Degvora" {{ $attributes }}>
        <x-slot name="logo"
            class="flex aspect-square size-8">
            <x-app-logo-icon />
        </x-slot>
    </flux:sidebar.brand>
@else
    <flux:brand name="Degvora" {{ $attributes }}>
        <x-slot name="logo"
            class="flex aspect-square size-8">
            <x-app-logo-icon />
        </x-slot>
    </flux:brand>
@endif
