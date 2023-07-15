<script>
    import "../app.css";
    import NavbarLink from "$lib/navbarLink.svelte";
    import DefButton from "$lib/defButton.svelte";
    export let data;
</script>


<nav class="sticky top-0 inset-0 z-10 block h-max w-full max-w-full rounded-none border border-gray-900 bg-gray-800 bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
	<script src="https://unpkg.com/@material-tailwind/html@latest/scripts/collapse.js"></script>
    <div class="flex items-center 2xl:ml-[11.5%] 2xl:mr-[11.5%] text-white">
      <a
        href="/" 
        class="mr-4 block cursor-pointer py-1.5 font-sans text-xl font-medium leading-relaxed text-inherit antialiased"
      >
        Libraverse
      </a>
      <ul class="ml-auto hidden items-center gap-6 lg:flex">
        <NavbarLink text="Prices"/>
        <NavbarLink text="About"/>
        <NavbarLink text="Contact"/>
        {#if data.logged} 
          <DefButton text="Log out" href="/logout" color="red"/>
          <DefButton text="Dashboard" href="/dashboard"/>
        {:else}
          <DefButton text="Log in" href="/login"/>
          <DefButton text="Create account" href="/register"/>
        {/if}
      </ul>
      <button
        class="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
        data-collapse-target="sticky-navar"
      >
        <span class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </span>
      </button>
    </div>
    <div
      class="block h-0 w-full basis-full overflow-hidden text-white transition-all duration-300 ease-in lg:hidden"
      data-collapse="sticky-navar"
    >
      <ul class="mt-2 mb-4 flex flex-col gap-2 pb-2">
        <NavbarLink text="Prices"/>
        <NavbarLink text="About"/>
        <NavbarLink text="Contact"/>
        {#if data.logged} 
          <DefButton text="Log out" href="/logout" color="red"/>
          <DefButton text="Dashboard" href="/dashboard"/>
        {:else}
          <DefButton text="Log in" href="/login"/>
          <DefButton text="Create account" href="/register"/>
        {/if}
      </ul>
    </div>
  </nav>
  
<slot />