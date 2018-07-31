<template>
  <div class="container  ">

    <div class="file-reader file is-medium is-boxed">
      <label class="file-label">
        <input type="file" id ='imgLoader' class="file-input" v-on:change="previewFile">
          <span class="file-cta">
            <span class="file-icon">
               <b-icon
                pack="fas"
                icon="upload"
                size="is-small"
                >
            </b-icon>
            </span>
            <span class="file-label">
              Choose an image...
            </span>
          </span>
      </label>
    </div>

    <div v-if="imageLoaded === true" class="">
      <Canvas :imageLoaded="imageLoaded" :image="image"/>
    </div>

  </div>
</template>

<script>
import Canvas from "../canvas/Canvas";
export default {
  name: "FileReader",
  components: {
    Canvas
  },
  data() {
    return {
      imageLoaded: false,
      image: ""
    };
  },
  methods: {
    previewFile(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;
      reader.onload = e => {
        image.src = e.target.result;
        vm.image = image;
        vm.imagePassed = e.target.result;
        vm.imageLoaded = true;
        // console.log(e.target);
      };
      reader.readAsDataURL(file);
    },

    test(e) {}
  },
  updated: function() {
    // console.log(this.files);
    console.log(this.image);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.file-reader {
  justify-content: center;
}
</style>
