<script>
    export let label, type, name;
</script>
<div>
    <label for={name} class="block mb-2 text-sm font-medium ">{label}</label>
    <input type={type} name={name} class="bg-gray-700 border border-gray-600 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
</div>