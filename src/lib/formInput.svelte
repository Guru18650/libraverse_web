<script>
    export let label, type, name;
</script>
<label class="label mt-3">
    <span>{label}</span>
    <input class="input rounded-lg" type={type} name={name}/>
  </label>