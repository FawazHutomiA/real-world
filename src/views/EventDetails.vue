<template>
  <div>
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>
<script>
import EventService from "@/services/EventService";

export default {
  props: ["id"],
  data() {
    return {
      event: [],
    };
  },
  created() {
    EventService.getEvent(this.id)
      .then((res) => {
        this.event = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
