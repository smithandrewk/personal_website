myHash = ""
getNewHash()
count = 0
setInterval(() => {
    count = count + 1
    if (count/30 == 1){
        getNewHash()
        console.log(myHash.length)
        count = 0
    }
    setRandomColor();
}, 100);

function setRandomColor() {
                h1 = document.getElementById('a')
                rand = parseInt(Math.random() * myHash.length)
                text = myHash.substr(0,rand)+"<span style=\"color: white\">"+myHash[rand]+"</span>"+myHash.substr(rand+1)
                h1.innerHTML = text
                if(close>current){
                    h1.style.color = "#ba2e22"
                } else {
                    h1.style.color = "#32a852"
                }
}

function getNewHash(){
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then(response => response.json())
        .then(kson => {
            fetch("https://api.coindesk.com/v1/bpi/historical/close.json")
                .then(response => response.json())
                .then(json => {
                    keys = Object.keys(json.bpi)
                    key = keys[keys.length-1]
                    close = json.bpi[key]
                    current = kson.bpi.USD.rate_float
                    const myBitArray = sjcl.hash.sha256.hash(current)
                    myHash = sjcl.codec.hex.fromBits(myBitArray)
                    h1 = document.getElementById('a')
                    rand = parseInt(Math.random() * myHash.length)
                    text = myHash.substr(0,rand)+"<span style=\"color: white\">"+myHash[rand]+"</span>"+myHash.substr(rand+1)
                    h1.innerHTML = text
                    if(close>current){
                        h1.style.color = "#ba2e22"
                    } else {
                        h1.style.color = "#32a852"
                    }
                })
            })
}