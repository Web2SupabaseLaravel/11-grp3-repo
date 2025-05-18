public function up(): void
{
    Schema::create('notifications', function (Blueprint $table) {
        $table->id();
        $table->string('title');
        $table->text('message');
        $table->string('type')->nullable();
        $table->timestamps();
    });
}
