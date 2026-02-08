<form wire:submit.prevent="saveContactinfo" class="w-full md:w-1/2 flex flex-col gap-6">
    <div>
        <input type="text" placeholder="Your Name" wire:model.defer="name"
            class="px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-full transition {{ $errors->has('name') ? 'border-red-500 ring-1 ring-red-500' : 'border border-gray-300 dark:border-gray-700' }}" />
        @error('name')
            <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
        @enderror
    </div>

    <div>
        <input type="email" placeholder="Your Email" wire:model.defer="email"
            class="px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-full transition {{ $errors->has('email') ? 'border-red-500 ring-1 ring-red-500' : 'border border-gray-300 dark:border-gray-700' }}" />
        @error('email')
            <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
        @enderror
    </div>

    <div>
        <input type="text" placeholder="Enter Subject" wire:model.defer="subject"
            class="px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-full transition {{ $errors->has('subject') ? 'border-red-500 ring-1 ring-red-500' : 'border border-gray-300 dark:border-gray-700' }}" />
        @error('subject')
            <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
        @enderror
    </div>

    <div>
        <textarea placeholder="Your Message" rows="6" wire:model.defer="message"
            class="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none transition {{ $errors->has('message') ? 'border-red-500 ring-1 ring-red-500' : 'border border-gray-300 dark:border-gray-700' }}"></textarea>
        @error('message')
            <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
        @enderror
    </div>

    <button type="submit"
        class="bg-linear-to-r from-purple-600 to-pink-500 cursor-pointer text-white font-semibold px-6 py-3 rounded-xl hover:scale-105 transition-all w-full sm:w-auto">
        Send Message
    </button>



    @if (session()->has('success'))
        <div
            class="bg-green-400/20 rounded-md w-full flex justify-between p-4 px-6 border border-green-600 text-white  text-sm mt-2">
            <p>{{ session('success') }}</p>
            <x-heroicon-o-x-mark wire:click="clearFlashMessage" class="w-5 h-5 text-green-500 cursor-pointer" />
        </div>
    @endif
</form>
