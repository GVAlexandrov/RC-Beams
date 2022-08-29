function fcdCalculate(fck, alphaCC, gammaMC) {
    return (fck * alphaCC) / gammaMC;
}

function fydCalculate(fy, gammaMS) {
    return (fy / gammaMS);
}

function fcmCalculate(fck) {
    return (fck + 8);
}

export {
    fcdCalculate,
    fydCalculate,
    fcmCalculate
}