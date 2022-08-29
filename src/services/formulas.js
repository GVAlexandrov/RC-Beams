function fcdCalculate(fck, alphaCC, gammaMC) {
    return (fck * alphaCC) / gammaMC;
}

function fydCalculate(fy, gammaMS) {
    return (fy / gammaMS);
}

function fcmCalculate(fck) {
    return (fck + 8);
}

function fctmCalculate(fck, fcm) {
    return (fck <= 50
        ? 0.3 * fck ** (2 / 3)
        : 2.12 * Math.log(1 + (fcm / 10))
    );
}

export {
    fcdCalculate,
    fydCalculate,
    fcmCalculate,
    fctmCalculate
}