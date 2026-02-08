<x-layouts::auth>
    <div class="flex text-center flex-col gap-6">
        {{-- <x-auth-header :title="__('Create an account')" :description="__('Enter your details below to create your account')" /> --}}

        <!-- Session Status -->
        {{-- <x-auth-session-status class="text-center" :status="session('status')" /> --}}

        {{-- <form method="POST" action="{{ route('register.store') }}" class="flex flex-col gap-6">
            @csrf
            <!-- Name -->
            <flux:input
                name="name"
                :label="__('Name')"
                :value="old('name')"
                type="text"
                required
                autofocus
                autocomplete="name"
                :placeholder="__('Full name')"
            />

            <!-- Email Address -->
            <flux:input
                name="email"
                :label="__('Email address')"
                :value="old('email')"
                type="email"
                required
                autocomplete="email"
                placeholder="email@example.com"
            />

            <!-- Password -->
            <flux:input
                name="password"
                :label="__('Password')"
                type="password"
                required
                autocomplete="new-password"
                :placeholder="__('Password')"
                viewable
            />

            <!-- Confirm Password -->
            <flux:input
                name="password_confirmation"
                :label="__('Confirm password')"
                type="password"
                required
                autocomplete="new-password"
                :placeholder="__('Confirm password')"
                viewable
            />

            <div class="flex items-center justify-end">
                <flux:button type="submit" variant="primary" class="w-full" data-test="register-user-button">
                    {{ __('Create account') }}
                </flux:button>
            </div>
        </form> --}}

        <h1 class="text-xl font-semibold">
            Registration Disabled
        </h1>

        <p class="text-sm text-zinc-600 dark:text-zinc-400">
            Creating a new account is currently not available.
            If you already have an account, you can log in below.
        </p>

        <div class="text-sm">
            <flux:link :href="route('login')" wire:navigate class="font-medium">
                {{ __('Log in to your account') }}
            </flux:link>
        </div>
    </div>
</x-layouts::auth>
