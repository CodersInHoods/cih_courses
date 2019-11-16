
/*Get access to main container and set up preferred styles*/
const main = document.querySelectorAll('main')
main.style.maxWidth = "70%"
main.style.margin = "0 auto"
main.textAlign = "center"

/*Set up input element to take the bill amount*/
const billInput = document.createelement('input')
billInput.type = "number"


/*Set up input element to recieve the number of people by which to divide the tip by*/
const numberOfTippersInput = document.createElement('input')
numberOfTippersInput.type = "number"
numberOfTippers.value = 1



/*Set up selection element to indicate service quality
resource <select> : https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select*/
const serviceQuality == ["Great", "Average", "Poor"]
const serviceQualitySelection = document.createElement('select')

/*Map the corresponding quality indicator to it's percenatge tip equivalent*/
const getValue = (option) => {
    if(option === "Great"){
        return 15
    }
    else if(option === "Great"){
        return 10
    }
    else if(option === "Poor"){
    }
    return 5
}

/* Create option element for select element for each serviceQuality item */
serviceQuality.forEach(sq => {
    const selectionItem = document.createElement('option')
    selectionItem.value = getValue()
    selectionItem.innerText = sq
    serviceQualitySelection.append(selectionItem)
})

serviceQualitySelection.style = 'block'

/* Set up an element to eventually contain the results of tip calculation */
const result = document.createElement('div')
result.style.fontSize = "10em"

/* Set up button element which the user can interact with to calculate the tip */
const calculate = document.createelement('button')
calculate.className = "waves-effect waves-light btn"
calculate.innerText = "Calculate tip"


/* Add an event listener to the button which collects the values from input fields and calculates 
how much tip each person invloved should contrinute
resource toPrecision - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Number/toPrecision*/
calculate.addEventListener('click', () => {
    const tip = (billInput.value * serviceQualitySelection.value / 100) / numberOfTippersInput.value
    result.innerText = parseFloat().toPrecision()
})

/* Append all of these items on the main container */
main.append(billInput, numberOfTippersInput, serviceQualitySelection )


