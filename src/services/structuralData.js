const concreteArr = ['C20/25', 'C25/30', 'C30/37', 'C35/45', 'C40/50', 'C50/60', 'C60/75', 'C70/85'];

const steelArr = [
    'B420A',
    'B420B',
    'B420C',
    'B500A',
    'B500B',
    'B500C'
];

const steelModulusArr = [
    190,
    200
];

const rebarPosition = [
    'Top',
    'Bottom'
];

const rebarArr = [6.5, 8, 10, 12, 14, 16, 18, 20, 22, 25, 28, 32];

const tableHeadingsArr = [
    'Project\'s name',
    'Level',
    'Beam',
    'Height',
    'Width',
    'Bending',
    'Shear',
    'Torsion',
    'Concrete',
    'Steel',
    'Ø',
    '',
    ''
];

const tableHeadingsWallArr = [
    'Project\'s name',
    'Level',
    'Wall',
    'Length',
    'Width',
    'Concrete',
    'Steel',
    '',
    ''
];

const tableHeadingsDimensionsArr = [
    '[-]',
    '[-]',
    '[№]',
    '[mm]',
    '[mm]',
    '[kN.m]',
    '[kN]',
    '[kN.m]',
    '[Grade]',
    '[Grade]',
    '[mm]',
    '',
    ''
];

const tableHeadingsDimensionsWallArr = [
    '[-]',
    '[-]',
    '[№]',
    '[mm]',
    '[mm]',
    '[Grade]',
    '[Grade]',
    '',
    ''
];

const alphaCCArr = [
    0.85,
    1.00
];

const gammaMCArr = [
    1.00,
    1.50
];

const gammaMSArr = [
    1.00,
    1.15
];

export {
    concreteArr,
    steelArr,
    rebarArr,
    tableHeadingsArr,
    tableHeadingsWallArr,
    tableHeadingsDimensionsArr,
    tableHeadingsDimensionsWallArr,
    alphaCCArr,
    gammaMCArr,
    gammaMSArr,
    steelModulusArr,
    rebarPosition
}