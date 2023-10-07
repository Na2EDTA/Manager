<template>
  <div>
    <video ref="videoPlayer" :src="videoUrl" controls></video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoUrl: 'https://example.com/my-monitoring-video.mp4'
    };
  },
  mounted() {
    this.initializeVideoPlayer();
  },
  methods: {
    initializeVideoPlayer() {
      const videoPlayer = this.$refs.videoPlayer;
      // 在这里可以添加视频播放器的初始化逻辑，如设置播放器样式、添加事件监听等
      videoPlayer.addEventListener('play', this.handlePlay);
      videoPlayer.addEventListener('pause', this.handlePause);
    },
    handlePlay() {
      // 视频播放事件处理逻辑
      console.log('视频开始播放');
    },
    handlePause() {
      // 视频暂停事件处理逻辑
      console.log('视频暂停');
    }
  },
  beforeDestroy() {
    const videoPlayer = this.$refs.videoPlayer;
    videoPlayer.removeEventListener('play', this.handlePlay);
    videoPlayer.removeEventListener('pause', this.handlePause);
  }
};
</script>

<style scoped>
.monitoring-component {
  width: 800px;     /* 设置组件宽度 */
  height: 600px;    /* 设置组件高度 */
}
</style>