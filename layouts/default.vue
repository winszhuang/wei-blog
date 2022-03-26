<template>
  <main class="container mx-auto lg:px-16 px-4">
    <Header />
    <div class="flex">
      <div
        class=" flex-none w-3/4"
      >
        <slot />
      </div>
      <Sidebar />
    </div>
    <Footer />
  </main>
</template>