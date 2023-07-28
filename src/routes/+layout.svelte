<script>
  import { logged } from '$lib/stores';
  export let data;
  import "../theme.css";
  import "@skeletonlabs/skeleton/styles/skeleton.css";
  import "../app.postcss";
  import { AppShell, AppBar, Avatar } from "@skeletonlabs/skeleton";
  import { LightSwitch } from '@skeletonlabs/skeleton';
  import { get } from 'svelte/store';
  var l = false;
  logged.subscribe(() => {
    l = get(logged);
  })
</script>

<AppShell>
  <svelte:fragment slot="header">
    <AppBar background="!bg-transparent" shadow="shadow-xl">
      <svelte:fragment slot="lead">
        <a href="/" class="text-xl uppercase">Libraverse</a>
      </svelte:fragment>
      <svelte:fragment slot="trail">
        {l}
        <Avatar initials="JD" background="bg-primary-500" width="w-10" />
        <LightSwitch/>
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <slot />
</AppShell>
<slot />
