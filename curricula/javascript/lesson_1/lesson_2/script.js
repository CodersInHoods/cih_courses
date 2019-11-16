
/*Get access to main container and set up preferred styles*/
const main = document.querySelector('main')
main.style.maxWidth = "70%"
main.style.margin = "0 auto"
main.style.textAlign = "center"

/*Set up input element to take the bill amount*/
const billInput = document.createElement('input')
billInput.type = "number"


/*Set up input element to recieve the number of people by which to divide the tip by*/
const numberOfTippersInput = document.createElement('input')
numberOfTippersInput.type = "number"
numberOfTippersInput.value = 1



/*Set up selection element to indicate service quality
resource <select> : https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select*/
const serviceQuality = ["Great", "Average", "Poor"]
const serviceQualitySelection = document.createElement('select')

/*Map the corresponding quality indicator to it's percenatge tip equivalent*/
const getValue = (option) => {
    if(option === "Great"){
        return 15
    }
    else if(option === "Average"){
        return 10
    }
    else if(option === "Poor"){
        return 5
    }
}

/* Create option element for select element for each serviceQuality item */
serviceQuality.forEach(sq => {
    const selectionItem = document.createElement('option')
    selectionItem.value = getValue(sq)
    selectionItem.innerText = sq
    serviceQualitySelection.append(selectionItem)
})

serviceQualitySelection.style.display = 'block'

/* Set up an element to eventually contain the results of tip calculation */
const result = document.createElement('div')

/* Set up button element which the user can interact with to calculate the tip */
const calculate = document.createElement('button')
calculate.className = "waves-effect waves-light btn"
calculate.innerText = "Calculate"


/* Add an event listener to the button which collects the values from input fields and calculates 
how much tip each person invloved should contrinute
resource toPrecision - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Number/toPrecision*/
calculate.addEventListener('click', () => {
    const tip = (billInput.value * serviceQualitySelection.value / 100) / numberOfTippersInput.value
    result.innerText = parseFloat(tip).toPrecision(3)
})

/* Append all of these items on the main container */
main.append(billInput, numberOfTippersInput, serviceQualitySelection, calculate, result )


