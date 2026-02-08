<?php

namespace App\Livewire\Frontend;

use Livewire\Component;

class DevelopmentThroughAlcaline extends Component
{
    public array $steps = [
        [
            'id' => 1,
            'title' => 'Assemble the right team',
            'process_number' => 1,
            'description' =>
                "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.",
        ],
        [
            'id' => 2,
            'title' => 'Sprint planning',
            'process_number' => 2,
            'description' =>
                'Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.',
        ],
        [
            'id' => 3,
            'title' => 'Tech architecture',
            'process_number' => 3,
            'description' =>
                'We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.',
        ],
        [
            'id' => 4,
            'title' => 'Standups & weekly demos',
            'process_number' => 4,
            'description' =>
                'Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.',
        ],
        [
            'id' => 5,
            'title' => 'Code reviews',
            'process_number' => 5,
            'description' =>
                'Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells.',
        ],
        [
            'id' => 6,
            'title' => 'Iterative delivery',
            'process_number' => 6,
            'description' =>
                'We divide the implementation process into several checkpoints rather than a single deadline.',
        ],
    ];

    public function render()
    {
        return view('livewire.frontend.development-through-alcaline', [
            'oddSteps' => collect($this->steps)->where('process_number', '%', 2),
            'evenSteps' => collect($this->steps)->where('process_number', '%', 2)->filter(fn($s) => $s['process_number'] % 2 === 0),
        ]);
    }
}
