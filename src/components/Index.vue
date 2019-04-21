<template>
  <div class="row mt-5">
    <div class="col-md-4" v-for="smoothie in smoothies" :key="smoothie.id">
      <div class="card border-dark text-center">
        <div class="card-header text-white bg-dark clearfix">{{smoothie.title}}
          <i class="fas fa-trash-alt float-right text-white" @click="deleteSmoothies(smoothie.id)"></i>
        </div>
        <div class="card-body">
          <div class="card-tex" v-for="(ingredient, index) in smoothie.ingredients" :key="index">{{ingredient}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import db from '../firebase/init'

  export default {
    name: 'Index',
    props: {
      msg: String
    },
    data() {
      return {
        smoothies: [
          // { id: 1, title: 'Ninja Brew', slug: 'ninja-slug', ingredients: ['bananas', 'coffee', 'milk'] },
          // { id: 2, title: 'Morning Mood', slug: 'morning-mood', ingredients: ['mango', 'line', 'juice'] }
        ]
      }
    },
    methods: {
      deleteSmoothies(id) {
        // this.smoothies = this.smoothies.filter(smoothie => {
        //   return smoothie.id !== id;
        // })


      }
    },
    created() {
      db.collection('smoothies').get().
      then(snapshot => {
        snapshot.forEach(doc => {
          // console.log(doc.data(), doc.id);
          let smoothie = doc.data();
          smoothie.id = doc.id;
          this.smoothies.push(smoothie);
        })
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
