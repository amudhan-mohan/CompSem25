<!--
   - Notification Component
  ) -->
<script lang="ts">
    import {Link} from 'svelte-routing';
    import {calcDate} from '../common';
    export let heading: string;
    export let oneliner: string;
    export let date: Date;
    export let to:string;
</script>
<Link class="border-rose-400 border-2 group text-gray-200 h-48 py-10 px-4 w-64 md:w-96 flex gap-2 justify-center rounded-md items-center flex-col cursor-pointer hover:bg-slate-500/20" to="/event/{to}">
    <span class="font-anta text-sm md:text-xl w-full text-wrap text-center group-hover:text-2xl text-wrap uppercase leading-tight ">{heading}</span>
    <span class="font-kdam text-xs group-hover:text-lg md:text-md">{oneliner}</span>
    <span class="font-kdam text-xs group-hover:text-lg md:text-md">{calcDate(date)}</span>
</Link>
