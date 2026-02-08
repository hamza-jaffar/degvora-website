<?php

namespace App\Livewire\Frontend;

use Livewire\Component;

class OurDesignAndDevelopmentProcess extends Component
{
    public array $processes = [
        [
            'id' => 1,
            'title' => 'UX Driven Engineering',
            'description' =>
                'We start every project with user experience at the core. Our designers and engineers collaborate closely to ensure that intuitive designs, usability, and user flows are accurately translated into clean, scalable code.',
            'icon_url' => '/assets/rocket-icon.png',
            'gradient_from' => '#29272E',
            'gradient_to' => '#27272E',
        ],
        [
            'id' => 2,
            'title' => 'Developing Shared Understanding',
            'description' =>
                'We work closely with stakeholders to align business goals, technical requirements, and user needs. Through workshops, documentation, and regular communication, we ensure everyone shares the same vision from day one.',
            'icon_url' => '/assets/code-icon.png',
            'gradient_from' => '#68DBF2',
            'gradient_to' => '#509CF5',
        ],
        [
            'id' => 3,
            'title' => 'Proven Experience and Expertise',
            'description' =>
                'Our team brings years of hands-on experience across industries and technologies. We apply proven best practices, architectural patterns, and industry standards to deliver reliable and future-ready software solutions.',
            'icon_url' => '/assets/heart-rate-perspective-matter.png',
            'gradient_from' => '#FF92AE',
            'gradient_to' => '#FF3D9A',
        ],
        [
            'id' => 4,
            'title' => 'Security & Intellectual Property (IP)',
            'description' =>
                'Security is built into every stage of our development process. We follow strict data protection practices, secure coding standards, and clear IP ownership policies to protect your product and business assets.',
            'icon_url' => '/assets/shield-perspective-matter.png',
            'gradient_from' => '#67E9F1',
            'gradient_to' => '#24E795',
        ],
        [
            'id' => 5,
            'title' => 'Code Reviews',
            'description' =>
                'We conduct regular peer code reviews to maintain high coding standards, improve performance, and reduce technical debt. This ensures clean, maintainable, and scalable code throughout the project lifecycle.',
            'icon_url' => '/assets/success-perspective-matter.png',
            'gradient_from' => '#FFEF5E',
            'gradient_to' => '#F7936F',
        ],
        [
            'id' => 6,
            'title' => 'Quality Assurance & Testing',
            'description' =>
                'Our QA process includes manual and automated testing to ensure functionality, performance, and reliability. We identify issues early and ensure the final product meets quality benchmarks before release.',
            'icon_url' => '/assets/padlock-perspective-matte.png',
            'gradient_from' => '#F76680',
            'gradient_to' => '#57007B',
        ],
    ];

    public function render()
    {
        return view('livewire.frontend.our-design-and-development-process');
    }
}
