const validateNewElements = {
    height(height) {
        if (height <= 0) {
            return 'Heigh should be larger than 0 mm!'
        }
    },
    width(width) {
        if (width <= 0) {
            return 'Width should be larger than 0 mm!'
        }
    },
    concrete(concrete) {
        if (concrete === 'default') {
            return 'You should choose a class of concrete!'
        }
    },
    steel(steel) {
        if (steel === 'default') {
            return 'You should choose a class of steel!'
        }
    },
    rebar(rebar) {
        if (rebar === 'default') {
            return 'You should choose a diameter of rebar!'
        }
    },
}

export default validateNewElements;