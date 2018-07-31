<template>
  <div id="app" class="container 	">
    <FileReader/>
  </div>
</template>

<script>
import FileReader from "./components/fileReader/FileReader.vue";

export default {
  name: "app",
  components: {
    FileReader
  }
};
</script>


<style lang="scss">
#app {
  input[type="range"].slider {
    -webkit-appearance: none;
    width: 100%;
    margin: 12.6px 0;
  }
  input[type="range"].slider:focus {
    outline: none;
  }
  input[type="range"].slider::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.8px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #85929e;
    border-radius: 12px;
    border: 0px solid #010101;
  }
  input[type="range"].slider::-webkit-slider-thumb {
    box-shadow: 5.1px 5.1px 7.8px rgba(158, 163, 164, 0.67), 0px 0px 5.1px rgba(171, 175, 176, 0.67);
    border: 2.8px solid #ffffff;
    height: 26px;
    width: 0px;
    border-radius: 50px;
    background: rgba(245, 245, 245, 0);
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -12.6px;
  }
  input[type="range"].slider:focus::-webkit-slider-runnable-track {
    background: #9fa9b2;
  }
  input[type="range"].slider::-moz-range-track {
    width: 100%;
    height: 0.8px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #85929e;
    border-radius: 12px;
    border: 0px solid #010101;
  }
  input[type="range"].slider::-moz-range-thumb {
    box-shadow: 5.1px 5.1px 7.8px rgba(158, 163, 164, 0.67), 0px 0px 5.1px rgba(171, 175, 176, 0.67);
    border: 2.8px solid #ffffff;
    height: 26px;
    width: 0px;
    border-radius: 50px;
    background: rgba(245, 245, 245, 0);
    cursor: pointer;
  }
  input[type="range"].slider::-ms-track {
    width: 100%;
    height: 0.8px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type="range"].slider::-ms-fill-lower {
    background: #6d7b89;
    border: 0px solid #010101;
    border-radius: 24px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  input[type="range"].slider::-ms-fill-upper {
    background: #85929e;
    border: 0px solid #010101;
    border-radius: 24px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  input[type="range"].slider::-ms-thumb {
    box-shadow: 5.1px 5.1px 7.8px rgba(158, 163, 164, 0.67), 0px 0px 5.1px rgba(171, 175, 176, 0.67);
    border: 2.8px solid #ffffff;
    height: 26px;
    width: 0px;
    border-radius: 50px;
    background: rgba(245, 245, 245, 0);
    cursor: pointer;
    height: 0.8px;
  }
  input[type="range"].slider:focus::-ms-fill-lower {
    background: #85929e;
  }
  input[type="range"].slider:focus::-ms-fill-upper {
    background: #9fa9b2;
  }

  margin: auto;
  padding-top: 30px;
}
</style>
