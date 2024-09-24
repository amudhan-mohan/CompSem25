<script lang="ts">
    import NotificationItem from "./NotificationItem.svelte";
    interface INotifcation {
        heading: string,
        content: string,
        date: string,
        url: string,
    };

    export let notifications: INotifcation[];
</script>

<div class="grid w-full lg:w-1/2 grid-flow-row no-scrollbar gap-1 md:gap-3 scroll-y overflow-scroll items-center max-h-64  md:max-h-96">
    {#each notifications as notification}
    <NotificationItem url={notification.url} date={new Date(notification.date)} heading={notification.heading} content={notification.content} />
    {/each}
</div>
