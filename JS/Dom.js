const btnPlus = document.getElementsByClassName("plus")
const tab= []
for (let i = 0; i < btnPlus.length; i++) {
    btnPlus[i].onclick = function () {
        this.previousElementSibling.value++
        this.previousElementSibling.previousElementSibling.removeAttribute("disabled")

        let oldPrice = this.parentElement.parentElement.nextElementSibling.textContent.split("$")[0].replace(",", ".")
        let newPrice = oldPrice / (this.previousElementSibling.value - 1) * this.previousElementSibling.value;
        let sum=oldPrice*this.previousElementSibling.value
       
        tab[i]=sum
        console.log(document.getElementsByClassName("total")[0].innerText)
        document.getElementsByClassName("total")[0].innerText=tab.reduce((prev,items)=>prev+items,0).toFixed(2)+" $"
        //  this.parentElement.parentElement.nextElementSibling.textContent = newPrice + " $US"
        if (!Number(this.previousElementSibling.value)) {
            alert("please enter a number")
            this.previousElementSibling.value = 1
        }

    }
}

const bntMinus = document.getElementsByClassName("moins")
for (let i = 0; i < bntMinus.length; i++) {
    const element = bntMinus[i];
    element.onclick = function () {
        if (!Number(this.nextElementSibling.value)) {
            alert("please enter a number")
            this.nextElementSibling.value = 1
        }

        else if (this.nextElementSibling.value > 1) {
            this.nextElementSibling.value--
            let oldPrice = this.parentElement.parentElement.nextElementSibling.textContent.split("$")[0].replace(",",".")
   
             console.log(oldPrice)
            
             let newPrice = oldPrice*(Number(this.nextElementSibling.value))/((Number(this.nextElementSibling.value)+1))
             console.log(newPrice)
            // this.parentElement.parentElement.nextElementSibling.textContent = newPrice + "$US"
            let sum=oldPrice*(Number(this.nextElementSibling.value))
       
            tab[i]=sum
            console.log(document.getElementsByClassName("total")[0].innerText)
            document.getElementsByClassName("total")[0].innerText=tab.reduce((prev,items)=>prev+items,0)+" $"

        } else {
            this.setAttribute('disabled', '')
        }

    }

}

const save = document.getElementsByClassName("fas fa-heart")
for (let i = 0; i < save.length; i++) {
    const element = save[i];
    element.onclick = function () {

        if (!this.style.color) {
            this.style.color = "red"
        }
        else {
            this.style.color = ""
        }
    }
}

const trash = document.getElementsByClassName("fas fa-trash")
for (let i = 0; i < trash.length; i++) {
    const element = trash[i];
    element.onclick = function () {
        this.parentElement.parentElement.remove()
    }

}