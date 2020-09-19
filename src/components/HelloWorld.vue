<template>
  <el-container>
    <el-main>
      <el-table
        ref="singleTable"
        :data="tableData"
        highlight-current-row
        @current-change="handleCurrentChange"
        style="width: 100%">
        <el-table-column
          type="index"
          width="50">
        </el-table-column>

        <el-table-column
          property="name"
          label="Name"
          width="120">
        </el-table-column>

        <el-table-column
          property="artist"
          label="Artist"
          width="120">
        </el-table-column>

        <el-table-column
          property="album"
          label="Album">
        </el-table-column>
      </el-table>
      <div style="margin-top: 20px">
        <el-button @click="setCurrent(tableData[1])">Select second row</el-button>
        <el-button @click="setCurrent()">Clear selection</el-button>
      </div>

      <el-button v-on:click="playVideo">AirPlay</el-button>

      <!-- youtube iframe with progressive enhancement (extra queries after the url to optimize the embed) -->
      <vue-plyr ref="plyr">
        <div class="plyr__video-embed">
          <iframe
            src="https://www.youtube.com/embed/DZArOM83IkM?iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1"
            allowfullscreen allowtransparency allow="autoplay">
          </iframe>
        </div>
      </vue-plyr>
    </el-main>
  </el-container>
</template>

<script>
/* eslint-disable no-console */
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      seen: false,
      tableData: [{
        artist: 'Big Sean',
        name: 'Memories',
        album: '-',
        url: 'DZArOM83IkM',
      }, {
        artist: 'Labrinth',
        name: 'All For Us',
        album: 'Euphoria OST',
        url: 'uJenaxli2FM',
      }, {
        artist: 'Labrinth',
        name: 'Forever',
        album: 'Euphoria OST',
        url: '03nR6eWanXs',
      }],
      currentRow: null
    }
  },
  computed: {
    player() {
      return this.$refs.plyr.player
    }
  },
  mounted() {
    console.log('mounted')
    console.log(this.player)
  },
  methods: {
    playVideo: function () {
      console.log('rplay')
      this.player.airplay()
    },
    setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      this.currentRow = val;

      this.player.source = {
        type: 'video',
        sources: [
          {
            src: val.url,
            provider: 'youtube',
          },
        ]
      }
    }
  }
}
</script>

<style>
.plyr--video {
  background: transparent;
  overflow: visible;
}

.plyr--video .plyr__controls {
  background: transparent;
}

.plyr--video.plyr--hide-controls .plyr__controls {
  opacity: 1.0;
  transform: none;
  pointer-events: all;
}

.plyr--video .plyr__controls {
  position: relative;
}

.plyr__video-wrapper {
  display: none;
}

.plyr--full-ui.plyr--video .plyr__control--overlaid {
  display: none;
}

</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
