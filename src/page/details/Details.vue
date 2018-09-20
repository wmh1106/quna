<template>
  <div>
    <details-header></details-header>
    <details-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></details-banner>
    <details-list :categoryList="categoryList"></details-list>
    <div style="height:1000px;"></div>
  </div>
</template>

<script>

import DetailsHeader from './components/DetailsHeader'
import DetailsBanner from './components/DetailsBanner'
import DetailsList from './components/DetailsList'

import axios from 'axios'

export default {
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
    }
  },
  components: {
    DetailsHeader,
    DetailsBanner,
    DetailsList
  },
  methods: {
    handleGetDetailsData (res) {
      const {ret, data} = res.data
      if (ret && data) {
        console.log(data)
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.categoryList = data.categoryList
      }
    }
  },
  mounted () {
    axios.get('/quna/dist/api/detail.json', {
      params: {
        id: this.$route.params.id
      }
    }).then(this.handleGetDetailsData)
  }
}
</script>

<style lang="sass" scoped>

</style>
