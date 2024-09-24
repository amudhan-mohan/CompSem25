<script lang="ts">
    import EventItem from "./EventItem.svelte";
    import type {IEvent} from '../common';
    export let events: IEvent[];
</script>

<div class="flex items-center flex-wrap justify-center gap-8 px-32 mt-12">
    {#each events as event}
    <EventItem to={event.to} heading={event.heading} date={event.scheduledDate} oneliner={event.oneliner} />
    {/each}
</div>

