const API_KEY = 'ZNYixbxgW7Vrbi2RKhv49qLDUnty2eRn'

const getGif = GetGif()
input.addEventListener('input', getGif)

const getGif2 = GetGif()
input2.addEventListener('input', getGif2)

let cache = {}
function GetGif() {
   let limitRequest = false
   setInterval(() => {
      limitRequest = false
   }, 500);

   return (event) => {
      if (limitRequest) {
         console.log("Слишком часто")
         return
      }
      if (event.target.value in cache) {
         console.log('достаём из кэша')
         console.log(cache[event.target.value])
         return
      }
      limitRequest = true
      fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${event.target.value}`)
         .then(resp => resp.json())
         .then(data => {
            console.log(data)
            cache = {
               ...cache,
               [event.target.value]: data
            }
         })
         .catch(e => console.log(`resp finished with err: ${e}`))
   }
}
