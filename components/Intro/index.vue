<template>
  <div class="intro-container">
    <div class="data-save">
      
    </div>
    <img src="~/assets/images/Main.jpg" class="MainImg" />
  </div>
</template>

<script>
export default {
  props: {
    isSaveComplete: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.intro-container {
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  width: 100%;
  flex: 1;
  border: 1px solid #cdcdcd;
  border-radius: 0.5rem;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
  position: relative;
}

.MainImg {
  width: 100%;
  height: 100%;
  margin-right: auto;
}

.data-save {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
  color: rgb(15, 15, 15);
  font-size: 1rem;
}
</style>
