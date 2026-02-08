<?php

namespace App\Livewire;

use App\Mail\NotifyAdmin;
use App\Models\Contact;
use Livewire\Component;
use Mail;

class ContactForm extends Component
{

    public string $name = '';
    public string $email = '';
    public string $subject = '';
    public string $message = '';

    protected array $rules = [
        'name' => 'required|string|max:255',
        'email' => 'required|email|max:255',
        'subject' => 'required|string|max:255',
        'message' => 'required|string',
    ];

    public function saveContactinfo(): void
    {
        $validatedData = $this->validate();

        Contact::create($validatedData);

        session()->flash('success', 'Message sent successfully.');


        Mail::to('hamzajaffer231006@gmail.com')->queue(new NotifyAdmin());

        $this->reset(['name', 'email', 'subject', 'message']);

    }

    public function clearFlashMessage(): void
    {
        session()->forget('success');
    }

    public function render()
    {
        return view('livewire.contact-form');
    }
}
