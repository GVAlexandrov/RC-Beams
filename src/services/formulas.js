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

function miuCalculate(fcd, width, d, med) {
    return (med * (10 ** 6)) / (width * (d ** 2) * fcd);
}

function ksiCalculate(fcd, width, d, med) {
    let miu = miuCalculate(fcd, width, d, med);

    return (1.25 * (1 - Math.sqrt(1 - 2 * miu)));
}

export {
    fcdCalculate,
    fydCalculate,
    fcmCalculate,
    fctmCalculate,
    miuCalculate,
    ksiCalculate
}