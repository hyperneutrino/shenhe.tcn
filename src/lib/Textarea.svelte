<script lang="ts">
    let value: string = $$props.value ?? "";
</script>

<textarea {...$$props} bind:value style="height: {value.split('\n').length * 20}px; resize: none" />
