<script>
  import FormInput from "$lib/formInput.svelte";
  import FormSubmit from "$lib/defButton.svelte";
  export let data;

</script>

<title>Login</title>

<div class="p-6 card !bg-transparent shadow-4xl sm:max-w-md m-auto mt-20">
  <h1 class="text-xl leading-tight tracking-tight md:text-2xl">
      Sign in to your account
  </h1>
  <form method="post">
  <div class="pt-3 font-medium text-small">
    <FormInput type="email" label="Email adress" name="email"/>
    <FormInput type="password" label="Password" name="pass"/>
    <label class="flex items-center space-x-2 mt-3 font-normal">
      <input class="checkbox" type="checkbox"/>
      <p>Remember me</p>
    </label>
  </div>
  <button type="submit" class="btn bg-tertiary-500 w-full rounded-lg mt-5">Log in</button>
</form>
  <p class="text-sm font-light mt-2">
    Don’t have an account yet? <a href="register" class="font-medium text-primary-500 hover:underline">Sign up</a>
  </p>
</div>