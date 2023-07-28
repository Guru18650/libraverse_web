<script>
  import FormInput from "$lib/formInput.svelte";
  import FormSubmit from "$lib/defButton.svelte";
</script>
<title>Register</title>

<div class="p-6 card !bg-transparent shadow-4xl sm:max-w-md m-auto mt-20">
    <h1 class="text-xl leading-tight tracking-tight md:text-2xl">
        Create your account
    </h1>
    <form method="post">
    <div class="pt-3 font-medium text-small">
        <FormInput type="email" label="Email adress" name="email"/>
        <FormInput type="text" label="Username" name="uname"/>
        <FormInput type="password" label="Password" name="pass"/>
        <FormInput type="password" label="Repeat password" name="pass2"/>
    </div>
    <button type="submit" class="btn bg-tertiary-500 w-full rounded-lg mt-5">Sign up</button>
    </form>
    <p class="text-sm font-light mt-2">
      Already have an account? <a href="login" class="font-medium text-primary-500 hover:underline">Sign in</a>
    </p>
  </div>
