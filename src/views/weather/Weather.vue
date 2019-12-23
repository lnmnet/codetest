<template>
  <v-card class="mt-9 mx-auto" width="400" :loading="isLoading">
    <v-card-title>Weather</v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            v-model="citySelected"
            item-text="name"
            item-value="key"
            :items="city"
          ></v-autocomplete>
        </v-col>
      </v-row>
      <v-list :class="$style.weather">
        <v-list-item>
          <v-list-item-content>City</v-list-item-content>
          <v-list-item-content>{{ weather.cityName }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Updated time</v-list-item-content>
          <v-list-item-content>{{ weather.updatedTime }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Weather</v-list-item-content>
          <!-- <v-list-item-content>{{ weather.weather.toUpperCase() }}</v-list-item-content> -->
          <v-list-item-content>{{ UpperCaseWeather }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Temperature</v-list-item-content>
          <v-list-item-content>{{ weather.temperature }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Wind</v-list-item-content>
          <v-list-item-content>{{ weather.wind }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import { FETCH_CITY, FETCH_WEATHER } from "@/store/actions.type"
import { mapGetters } from "vuex"

export default {
  name: 'weather',

  created () {
    this.getCity();
  },

  computed: {
    citySelected: {
      get: function () {
        let key = '';
        const city = this.$store.getters.city;
        if (city.length) {
          key = city[0].key;
          key && this.$store.dispatch(FETCH_WEATHER, key);
        }
        return key;
      },
      set: function (newValue) {
        this.$store.dispatch(FETCH_WEATHER, newValue);
      }
    },
    UpperCaseWeather: function() {
      let text = '';
      const storeWeather = this.$store.getters.weather.weather;
      if (storeWeather) {
        const arr = storeWeather.split(' ').map(m => {
          return m && m[0].toLocaleUpperCase() + m.slice(1)
        })
        text = arr.join(' ');
      }
      return text;
    },
    ...mapGetters(['city', 'weather', 'isLoading'])
  },

  methods: {
    getCity () {
      this.$store.dispatch(FETCH_CITY);
    }
  },
}
</script>

<style lang="postcss" module>
:root {
  --border: 1px dotted #555;
}
.weather {
  & > div {
    border-bottom: var(--border);
    border-left: var(--border);
    border-right: var(--border);
    &:first-child {
      border-top: var(--border);
    }
    & > div {
      &:last-child {
        border-left: var(--border);
        padding-left: 16px;
      }
    }
  }
}
</style>