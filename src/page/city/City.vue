<template>
    <div class="">
      <city-header></city-header>
      <search :cities="cities"></search>
      <city-list :hotCities="hotCities" :cities="cities" :letter="letter"></city-list>
      <letter :cities="cities" @handleLetterIndex="handleChangeLetterIndex"></letter>
    </div>
</template>
<script>
import CityHeader from './components/CityHeader'
import Search from './components/Search'
import CityList from './components/CityList'
import Letter from './components/Letter'
import axios from 'axios'

export default {
  name: 'City',
  data () {
    return {
      hotCities: [],
      cities: {},
      letter: ''
    }
  },
  components: {
    CityHeader,
    Search,
    CityList,
    Letter
  },
  mounted () {
    this.getCityList()
  },
  methods: {
    getCityList () {
      axios.get('/quna/dist/api/city.json')
        .then(res => (this.getUseData(res)))
    },
    getUseData (res) {
      const {ret, data} = res.data
      if (ret && data) {
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    },
    handleChangeLetterIndex (res) {
      this.letter = res
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
