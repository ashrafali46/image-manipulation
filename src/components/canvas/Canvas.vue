<template >
<div class=" pt30 tile is-ancestor " >
  
  <div class="tile is-parent is-2 nop ">
    <div class="is-child  notification has-text-right tile  " id="filters">
      <div class="sliders">

        <label for="Brightness">Brightness : </label><span>{{filterBrightness}}</span>   
        <FilterContainer  v-model="filterBrightness" />

        <label for="filterHueRotation">Hue Rotation: </label><span>{{filterHueRotation}}</span>  
        <FilterContainer  v-model="filterHueRotation" />
        
        <label for="filterSaturation">Saturation: </label><span>{{filterSaturation}}</span>  
        <FilterContainer  v-model="filterSaturation" />

        <label for="filterResize">Resize: </label><span>{{filterResize}}</span>  
        <FilterContainer  v-model="filterResize" />

      </div>

      <div class="tile ">
        <button v-on:click="removeCat" type="submit" class=" is-outlined is-fullwidth button is-danger is-small  ">de-catify</button>
      </div>

      <div class="tile sliders ">
        <button v-on:click="addCat" type="submit" class=" is-outlined is-fullwidth button is-danger is-small " >catify</button>
      </div>

      <div class="tile ">
        <button v-on:click="saveImage" type="submit" class=" is-outlined is-fullwidth button is-success ">Save</button>
      </div>

    </div>
  </div>


  <div class="  tile is-child notification  " id="canvas-container" >
    <canvas id="canvas"/> 
  </div>
   
</div>

</template>

<script>
import { fabric } from "fabric";
import FilterContainer from "../filters/FilterContainer";
import cat1 from "./../../assets/cat1.png";
import cat2 from "./../../assets/cat2.png";
import cat3 from "./../../assets/cat3.png";
import cat4 from "./../../assets/cat4.png";

export default {
  name: "Canvas",
  components: {
    FilterContainer
  },
  props: {
    imageLoaded: Boolean,
    image: ""
  },
  data() {
    return {
      filterBrightness: 100,
      filterHueRotation: 100,
      filterSaturation: 100,
      filterResize: 200,
      refrenceToCanvas: "",
      refrenceToImage: "",
      catArray: [cat1, cat2, cat3, cat4]
    };
  },
  methods: {
    setCanvas() {
      let width = document.querySelector("#canvas-container").offsetWidth;
      let height = width * this.image.height / this.image.width;
      let canvas = new fabric.StaticCanvas("canvas", {
        width: width,
        height: height - 24
      });
      this.refrenceToCanvas = canvas;
      let loadedImage = new fabric.Image(this.image);
      this.refrenceToImage = loadedImage;
      this.refrenceToImage.scaleToWidth(this.refrenceToCanvas.getWidth());
      this.refrenceToCanvas.add(this.refrenceToImage);
      this.refrenceToCanvas.renderAll();
    },
    initFilers() {
      let _hueRotation = new fabric.Image.filters.HueRotation({
        rotation: this.normalize(this.filterHueRotation)
      });

      let _brightness = new fabric.Image.filters.Brightness({
        brightness: this.normalize(this.filterBrightness)
      });

      let _saturation = new fabric.Image.filters.Saturation({
        saturation: this.normalize(this.filterSaturation)
      });

      let _resize = new fabric.Image.filters.Resize({
        scaleX: this.filterResize / 200,
        scaleY: this.filterResize / 200
      });

      this.refrenceToImage.filters.push(_hueRotation, _brightness, _saturation, _resize);
      this.refrenceToImage.applyFilters();
    },

    updateFilters() {
      this.refrenceToCanvas.item(0).filters[0].rotation = this.normalize(this.filterHueRotation);
      this.refrenceToCanvas.item(0).filters[1].brightness = this.normalize(this.filterBrightness);
      this.refrenceToCanvas.item(0).filters[2].saturation = this.normalize(this.filterSaturation);
      this.refrenceToCanvas.item(0).filters[3].scaleX = this.filterResize / 200;
      this.refrenceToCanvas.item(0).filters[3].scaleY = this.filterResize / 200;
      this.refrenceToImage.applyFilters();
      this.refrenceToCanvas.renderAll();
    },

    normalize: filterValue => {
      let normalizedFilterValue;
      if (filterValue < 100) {
        normalizedFilterValue = -(1 - filterValue / 100);
      } else if (filterValue === 100) {
        normalizedFilterValue = 0.01;
      } else {
        normalizedFilterValue = filterValue / 100 - 1;
      }
      return parseFloat(normalizedFilterValue.toFixed(2));
    },

    addCat() {
      let randomNumberX = Math.floor(Math.random() * this.refrenceToCanvas.getWidth());
      let randomNumberY = Math.floor(Math.random() * this.refrenceToCanvas.getHeight() / 2);
      let randomCat = this.catArray[Math.floor(Math.random() * this.catArray.length)];

      if (this.refrenceToCanvas.size() < 50) {
        fabric.Image.fromURL(randomCat, img => {
          img.scale(0.2);
          img.set({ left: randomNumberX, top: randomNumberY });
          this.refrenceToCanvas.add(img);
        });
      }

      // var url = "http://www.pngmart.com/files/1/Cat-PNG-HD.png";
      // if (this.refrenceToCanvas.size() < 50) {
      //   fabric.Image.fromURL(url, img => {
      //     img.scale(0.1);
      //     img.set({ left: randomNumberX, top: randomNumberY });
      //     this.refrenceToCanvas.add(img);
      //   });
      //   this.refrenceToCanvas.renderAll();
      // }
      this.refrenceToCanvas.renderAll();
    },
    removeCat() {
      if (this.refrenceToCanvas.size() > 1) {
        this.refrenceToCanvas.remove(this.refrenceToCanvas.item(this.refrenceToCanvas.size() - 1));
      }
    },

    saveImage() {
      let image = this.refrenceToCanvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      window.location.href = image;
    }
  },
  created: function() {},
  beforeMount: function() {},
  mounted: function() {
    this.setCanvas();
    this.initFilers();
  },

  beforeUdate: function() {},

  updated: function() {
    this.updateFilters();
  }
};
</script>


<style scoped lang="scss">
.pt30 {
  padding-top: 30px;
}
.nop {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
.margin-auto {
  margin: auto;
}

.sliders {
  padding-top: 2px;
  padding-bottom: 24px;
}

#canvas-container {
  padding-right: 24px;
}

#filters {
  padding-right: 24px;
}
</style>
