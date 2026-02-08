<?php

namespace App\Livewire\Frontend;

use Livewire\Component;

class ServiceWeOffer extends Component
{
    public array $services = [
        [
            'id' => 1,
            'title' => 'Mobile App Development',
            'description' => 'We build high-performance mobile applications for iOS and Android platforms that are fast, secure, and scalable. Our apps are designed to provide a seamless user experience and help your business grow in the mobile-first world.',
            'image' => '/assets/mobile-app-development.png',
        ],
        [
            'id' => 2,
            'title' => 'Web Design & Development',
            'description' => 'Our team creates modern, responsive websites that look great on all devices. From e-commerce platforms to corporate websites, we ensure your site is visually appealing, user-friendly, and optimized for performance.',
            'image' => '/assets/web-deisgn-development-icon.png',
        ],
        [
            'id' => 3,
            'title' => 'Software Testing & QA',
            'description' => 'We provide comprehensive software testing services to ensure your application is bug-free, reliable, and meets quality standards.',
            'image' => '/assets/software-testing-service-icon.png',
        ],
        [
            'id' => 4,
            'title' => 'UI/UX Design',
            'description' => 'We craft intuitive and engaging user interfaces that enhance the user experience.',
            'image' => '/assets/software-testing-service-icon.png',
        ],
        [
            'id' => 5,
            'title' => 'Cloud Solutions & DevOps',
            'description' => 'We offer cloud integration, deployment, and DevOps services to help your business scale efficiently.',
            'image' => '/assets/software-testing-service-icon.png',
        ],
        [
            'id' => 6,
            'title' => 'Custom Software Development',
            'description' => 'We develop tailor-made software solutions that match your unique business requirements.',
            'image' => '/assets/software-testing-service-icon.png',
        ],
        [
            'id' => 7,
            'title' => 'E-commerce Solutions',
            'description' => 'We create full-featured e-commerce platforms with payment integration and smooth checkout experiences.',
            'image' => '/assets/software-testing-service-icon.png',
        ],
        [
            'id' => 8,
            'title' => 'IT Consulting & Strategy',
            'description' => 'Our IT consulting services help businesses plan, design, and implement technology solutions effectively.',
            'image' => '/assets/software-testing-service-icon.png',
        ],
    ];

    public function render()
    {
        return view('livewire.frontend.service-we-offer');
    }
}
