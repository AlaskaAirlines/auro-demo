<script lang="ts">
	import '../app.css';
	
	let { children } = $props();
</script>

<div class="min-h-screen bg-gray-100 flex flex-col">
  <main class="flex-grow flex items-center justify-center">
    <div class="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {@render children()}
    </div>
  </main>
</div>
