<template>
    <div class="">

    </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      hotCities: [],
      cities: {}
    }
  },
  components: {
  },
  mounted () {
    this.getCityList()
  },
  methods: {
    getCityList () {
      axios.get('/api/city.json')
        .then(res => (this.getUseData(res)))
    },
    getUseData (res) {
      const {ret, data} = res.data
      if (ret && data) {
        console.log(data.recommendList)
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
