<script>
  import FormInput from "$lib/formInput.svelte";
  import FormSubmit from "$lib/defButton.svelte";
  export let data;

</script>

<title>Login</title>
<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:pt-48">
  <script src="node_modules/@material-tailwind/html/scripts/collapse.js"></script>
      <div class="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700 ">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight  md:text-2xl">
                {#if data.newAcc == "true"}
                  Account created, log in
                {:else}
                  Sign in to your account
                {/if}
              </h1>
              
              <form class="space-y-4 md:space-y-6" method="post">
                <FormInput type="email" label="Your email" name="email"/>
                <FormInput type="password" label="Password" name="pass"/>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-700 focus:ring-primary-600"/>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="" class="text-sm font-medium text-primary-500 hover:underline">Forgot password?</a>
                  </div>
                  <FormSubmit text="Sign in" href="sb"/>
                  <p class="text-sm font-light text-gray-400">
                      Don’t have an account yet? <a href="register" class="font-medium text-primary-500 hover:underline">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
