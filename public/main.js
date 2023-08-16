const btn = document.querySelector('button')

const clickHandler = () => {
    axios.get('/api/cat')
    .then((res)=>alert(res.data))
    .catch((thesePaws) => alert("there was turbulance"))
}

btn.addEventListener('click', clickHandler)