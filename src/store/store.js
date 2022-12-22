import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"


//connexion de vuex à Vue
Vue.use(Vuex);

//creation de mon module(namespace)
const licence = {
    namespaced:true,
    state:{
        licences:[],
        errors:[]
    },
    getters: {
     getLicences: state => state.licences,
    },
    actions: {
        fetchLicences({commit}){
          let url = "http://localhost:3001/api/bigquery"
          axios.get(url)
          
          .then((response)=>{
              
              let data = JSON.parse(JSON.stringify(response.data))
              let result = [];
              let values = [];

              for (let item of Object.values(data)) {  
                  for(let i=0; i<Object.keys(item).length;i++){
                    values.push(Object.values(item)[i])
                  }
             }

             for (let i = 0; i < values.length; i += 2) {
                result.push({ licence: values[i], total: values[i + 1] });
            }

              commit('setLicences',result)
            })
          .catch(err=>console.log(err))
        },

        
    },

    mutations:{
        setLicences(state,data){
          state.licences = data
        },
    }
}

const store = new Vuex.Store({
    modules:{
        licence
    }
})


export default store;