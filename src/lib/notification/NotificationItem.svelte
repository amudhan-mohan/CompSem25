<!--
   - Notification Component
   -->
<script lang="ts">
    import { calcDate } from "../common";
    import {Link} from 'svelte-routing';
    export let heading: string;
    export let content: string;
    export let date: Date;
    export let url: string;

    console.log(url);
</script>


<Link to={url} class="min-w-0.5 border-2 border-rose-400 bg-gray-800/60 text-gray-100 shadow-md shadow-rose-400/50 p-2 md:p-4 rounded-md">
    <h3 class="text-sm md:text-lg">{heading}</h3>
    <p class="text-[8px] md:text-xs text-gray-400 mb-2">{calcDate(date)}</p>
    <p class="text-xs md:text-sm">{content}</p>
</Link>
