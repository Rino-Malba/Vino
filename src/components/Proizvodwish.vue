<template>
    
    <div class="card">
      <div class="slika">
        <img :src="info.url">
      </div>
      <div class="card-body">
        <h5 class="card-title">Naziv : {{info.naziv}} <br> Cijena: {{info.cijena}} kn <br>
        <input type="button" @click="deleteWishlist(info.id)" value="Ukloni iz liste želja"/>
        </h5>
      </div>
    </div>
    
    
    
    </template>
    
    <script>
    import store from '@/store.js'
    import { db } from '@/firebase.js'
    
    export default {
      props: ['info'],
      name : 'Proizvodwish',
      data: function() {
        return {
          store,
        }
      },
      methods: {
        deleteWishlist(id) {
        db.collection("wishwine").doc(id).delete().then(() => {
        }).catch((error) => {
        console.error("Error removing document: ", error);
    });
    
    
      }
      }
    }
    </script>