
const validateNewElements = {

    projectName(name) {
        if (name.length <= 3) {
            return 'The project\'s name should be longer than 3 characters!';
        }
    },

    beamLevel(level) {
        if (isNaN(Number(level))) {
            return 'The beam\'s level should be a number';
        }
    },

    beamNumber(beamNumberAsString) {
        if (beamNumberAsString.length < 1) {
            return 'The beam\'s number should be at least 1 character long!';
        }
    },

    rebarPosition(positionAsString) {
        if (positionAsString.toLowerCase() !== 'top' && positionAsString.toLowerCase() !== 'bottom') {
            return 'You should choose a reinforcement\'s position!';
        }
    },

    concrete(fck) {
        if (fck === 0 || isNaN(Number(fck))) {
            return 'You should choose a class of concrete!';
        }
    },

    alphaCC(alphaCCValue) {
        if (alphaCCValue === 0 || isNaN(Number(alphaCCValue))) {
            return 'You should choose a value for αcc!';
        }
    },

    gammaMC(gammaMCValue) {
        if (gammaMCValue === 0 || isNaN(Number(gammaMCValue))) {
            return 'You should choose a value for γm,c!';
        }
    },

    steel(fy) {
        if (fy === 0 || isNaN(Number(fy))) {
            return 'You should choose a class of steel!';
        }
    },

    gammaMS(gammaMSValue) {
        if (gammaMSValue === 0 || isNaN(Number(gammaMSValue))) {
            return 'You should choose a value for γm,s!';
        }
    },

    Es(Es) {
        if (Es === 0 || isNaN(Number(Es))) {
            return 'You should choose a value for Es!';
        }
    },

    width(width) {
        if (width < 60 || isNaN(Number(width))) {
            return 'Width should be an integer, larger than or equal to 60 mm!';
        }
    },

    height(height) {
        if (height < 150 || isNaN(Number(height))) {
            return 'Heigh/length should be an integer, larger than or equal to 150 mm!';
        }
    },

    d1(d1) {
        if (d1 < 25 || isNaN(Number(d1))) {
            return 'd1 should be an integer, larger than or equal to 25 mm!';
        }
    },

    rebarArea(rebarArea) {
        if (rebarArea <= 0 || isNaN(Number(rebarArea))) {
            return 'Rebar area (As1/As2) should be an integer, larger than 0 cm²!';
        }
    },

    bendingMoment(bendingMoment) {
        if (bendingMoment === 0 || isNaN(Number(bendingMoment))) {
            return 'Bending moment should be a non-zero integer';
        }
    },

    shearForce(shearForce) {
        if (shearForce === 0 || isNaN(Number(shearForce))) {
            return 'Shear force should be a non-zero integer';
        }
    },

    torsion(torsion) {
        if (isNaN(Number(torsion))) {
            return 'Torsion should be an integer';
        }
    },

    roS1(roS1) {
        if (roS1 === 'OUT') {
            return 'The value of ρs1 should be between ρl,min and ρl,max. If not - increase the dimensions of the beam section (height or/and width)';
        }
    },

    roL(roL) {
        if (roL === 'OUT') {
            return 'The value of ρl should be between ρl,min and ρl,max. If not - increase the dimensions of the beam section (height or/and width)';
        }
    },

    rebar(diameter) {
        if (diameter === 0 || isNaN(Number(diameter))) {
            return 'You should choose a diameter of rebar!';
        }
    },
}

export default validateNewElements;