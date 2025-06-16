protected $middlewareGroups = [
  'api' => [
    \Illuminate\Http\Middleware\HandleCors::class,
    'throttle:api',
    \Illuminate\Routing\Middleware\SubstituteBindings::class,
  ],
  // …
];
