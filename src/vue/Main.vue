<template>
  <kinesis-container :active="true">
    <div :style="{ backgroundImage: `url(${this.img}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))`,backgroundRepeat: 'no-repeat',backgroundAttachment: 'fixed',backgroundPosition: 'center' }">
      <b-container fluid>
        <div style="display: flex;align-items: center;justify-content: center;height: 100vh;">
          <b-container>
            <b-row style="text-align: center;margin-bottom:10px;" class="align-self-center">
              <b-col>
                <kinesis-element :strength="15" type="depth">
                  <img :src="require('../img/arsanandha.svg')"/>
                </kinesis-element>
              </b-col>
            </b-row>
            <b-row style="text-align: center" class="align-self-center">
              <b-col>
                <kinesis-element :strength="10" type="depth">
                  <h3 style="margin:5px;">Military Conscription 2564 at {{ this.end.toFormat('dd LLLL yyyy HH:mm:ss') }}</h3>
                </kinesis-element>
              </b-col>
            </b-row>
            <b-row style="text-align: center" class="align-self-center">
              <b-col>
                <kinesis-element :strength="5" type="depth">
                  <h1 style="font-size:6em;margin:5px;">{{ (remaining.months).toString().padStart(2,'0') }}</h1> Months
                </kinesis-element>
              </b-col>
              <b-col>
                <kinesis-element :strength="5" type="depth">
                  <h1 style="font-size:6em;margin:5px;">{{ (remaining.days).toString().padStart(2,'0') }}</h1> Days
                </kinesis-element>
              </b-col>
              <b-col>
                <kinesis-element :strength="5" type="depth">
                  <h1 style="font-size:6em;margin:5px;">{{ (remaining.hours).toString().padStart(2,'0') }}</h1> Hours
                </kinesis-element>
              </b-col>
              <b-col>
                <kinesis-element :strength="5" type="depth">
                  <h1 style="font-size:6em;margin:5px;">{{ (remaining.minutes).toString().padStart(2,'0') }}</h1> Minutes
                </kinesis-element>
              </b-col>
              <b-col>
                <kinesis-element :strength="5" type="depth">
                  <h1 style="font-size:6em;margin:5px;">{{ (parseInt(remaining.seconds)).toString().padStart(2,'0') }}</h1> Seconds
                </kinesis-element>
              </b-col>
            </b-row>
            <b-row style="text-align: center;margin:10px;" class="align-self-center">
              <b-col>
                <kinesis-element :strength="10" type="depth">
                  <h4 class="lighter" style="margin:5px;">Status : {{ get_status }}</h4>
                </kinesis-element>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </b-container>
    </div>
  </kinesis-container>
</template>

<script>
import { DateTime,Duration } from "luxon";
export default {
  name: "Main",
  data() {
    return {
      now: DateTime.local(),
      counting: null,
      list: ["Military Truth Learning","Exercise for Military Purpose","Practicing The Royalist Enthusiast","True Field Surveying","Learning Luck of The Draw","Learning Military Folklore","Practicing Bullet Reloading","Practicing TikTok Dance and Content Creating"],
      img:require('../img/conscript.jpg')
    }
  },
  computed: {
    remaining() {
      return this.end.diff(this.now, ['months', 'days', 'hours', 'minutes', 'seconds'])
    },
    get_status() {
      this.list = this.list.sort(() => Math.random() - 0.5)
      return this.list[Math.floor(Math.random() * this.list.length)]
    }
  },
  created() {
    this.end = DateTime.fromObject({
      year: 2021,
      month: 4,
      day: 8,
      hour: 7,
      zone: "Asia/Bangkok"
    })
  },
  mounted() {
    this.counting = setInterval(() => {
      this.now = DateTime.local()

      if(this.now > this.end) {
        clearInterval(this.counting)
      }
    }, 1000)
  }
}
</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap')

  body
    font-family: 'Poppins', sans-serif
    color: white

  h1, h2, h3
    font-weight: 500
    color: white

  h4, h5, p
    font-weight: 300
    color: white

</style>
