<script>
  import FormInput from "$lib/formInput.svelte";
  import FormSubmit from "$lib/defButton.svelte";
</script>
<title>Register</title>
<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:pt-48">
      <div class="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 border-gray-700 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight  md:text-2xl">
                  Create your account
              </h1>
              <form class="space-y-4 md:space-y-6" method="post">
                <FormInput type="email" label="Email adress" name="email"/>
                <FormInput type="text" label="Username" name="uname"/>
                <FormInput type="password" label="Password" name="pass"/>
                <FormInput type="password" label="Repeat password" name="pass2"/>
                <FormSubmit text="Sign up" href="sb"/>
                  <p class="text-sm font-light text-gray-400">
                      Already have an account?  <a href="login" class="font-medium text-primary-500 hover:underline">Sign in</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
