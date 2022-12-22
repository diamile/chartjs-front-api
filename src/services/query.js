import axios from "axios"

let  url = "http://localhost:3001/api/bigquery"
export  function fecthLicences(){
   axios.get(url)
   .then(response=>console.log(response))
   .catch((err)=>console.log(err))
}