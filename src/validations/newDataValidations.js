
const validateNewElements = {

    concrete(fck) {
        if (fck === 0 || isNaN(Number(fck))) {
            return 'You should choose a class of concrete!'
        }
    },

    alphaCC(alphaCCValue) {
        if (alphaCCValue === 0 || isNaN(Number(alphaCCValue))) {
            return 'You should choose a value for αcc!'
        }
    },

    gammaMC(gammaMCValue) {
        if (gammaMCValue === 0 || isNaN(Number(gammaMCValue))) {
            return 'You should choose a value for γm,c!'
        }
    },

    steel(fy) {
        if (fy === 0 || isNaN(Number(fy))) {
            return 'You should choose a class of steel!'
        }
    },

    gammaMS(gammaMSValue) {
        if (gammaMSValue === 0 || isNaN(Number(gammaMSValue))) {
            return 'You should choose a value for γm,s!'
        }
    },

    width(width) {
        if (width < 60 || isNaN(Number(width))) {
            return 'Width should be an integer, larger than or equal to 60 mm!'
        }
    },

    height(height) {
        if (height < 150 || isNaN(Number(height))) {
            return 'Heigh should be an integer, larger than or equal to 150 mm!'
        }
    },

    d1(d1) {
        if (d1 < 25 || isNaN(Number(d1))) {
            return 'd1 should be an integer, larger than or equal to 25 mm!'
        }
    },

    bendingMoment(bendingMoment) {
        if (isNaN(Number(bendingMoment))) {
            return 'Bending moment should be an integer'
        }
    },

    shearForce(shearForce) {
        if (isNaN(Number(shearForce))) {
            return 'Shear force should be an integer'
        }
    },

    torsion(torsion) {
        if (isNaN(Number(torsion))) {
            return 'Torsion should be an integer'
        }
    },

    roS1(roS1) {
        if (roS1 === 'OUT') {
            return 'The value of ρs1 should be between ρl,min and ρl,max. If not - increase the dimensions of the beam section (height or/and width)'
        }
    },

    rebar(diameter) {
        if (diameter === 0 || isNaN(Number(diameter))) {
            return 'You should choose a diameter of rebar!'
        }
    },
}

export default validateNewElements;