const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        const res = document.createTextNode(`${height} is not a valid height`);
        result.appendChild(res);
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        const res = document.createTextNode(`${weight} is not a valid weight`);
        result.appendChild(res);
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        
        if(bmi < 18.6) {
            result.innerHTML = `<span>Your are under weight, your wight is ${bmi}</span>`
        } else if(bmi >= 18.6 && bmi < 24.9){
            result.innerHTML = `<span>Your are in normal range, your wight is ${bmi}</span>`
        } else{
            result.innerHTML = `<span>Your are over weight, your wight is ${bmi}</span>`
        }
    }
})