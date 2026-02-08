<?php

namespace App\Livewire\Frontend;

use Livewire\Component;

class WayOfBuildingSoftware extends Component
{
    public array $items = [
        [
            'id' => 1,
            'image' => '/assets/way-of-building-great-software-1.png',
            'title' => 'Build the Right Team to Scale',
            'long_description' =>
                'Scaling a product requires more than just hiring developers. We carefully assemble dedicated teams that align with your business goals, technical requirements, and company culture. Our engineers integrate seamlessly with your workflow and stay committed long-term.',
            'short_description' =>
                'A dedicated, scalable team model that grows with your product and reduces hiring overhead.',
            'comment' =>
                'Their team quickly understood our product vision and helped us scale without compromising quality.',
        ],
        [
            'id' => 2,
            'image' => '/assets/way-of-building-great-software-2.png',
            'title' => 'Design with Users in Mind',
            'long_description' =>
                'Great software starts with a deep understanding of users. We focus on UX research, wireframing, and intuitive design to ensure every feature solves real problems and delivers a smooth, engaging experience.',
            'short_description' =>
                'User-centric design that improves usability, engagement, and customer satisfaction.',
            'comment' =>
                'The UX improvements significantly increased user engagement and reduced support requests.',
        ],
        [
            'id' => 3,
            'image' => '/assets/way-of-building-great-software-3.png',
            'title' => 'Deliver Fast Without Compromising Quality',
            'long_description' =>
                'We follow agile development practices with continuous integration, testing, and regular feedback loops. This allows us to ship features faster while maintaining high code quality, security, and performance standards.',
            'short_description' =>
                'Agile delivery with predictable timelines and production-ready quality.',
            'comment' =>
                'They consistently delivered on time while maintaining excellent code quality and communication.',
        ],
    ];

    public function render()
    {
        return view('livewire.frontend.way-of-building-software');
    }
}
