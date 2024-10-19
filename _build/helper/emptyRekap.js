'use strict';
const a3_0x567b32 = a3_0x20ba;
(function (_0xe74d86, _0x5c2ddb) {
    const _0x7bcb1f = a3_0x20ba, _0x348f3e = _0xe74d86();
    while (!![]) {
        try {
            const _0x15a3c9 = parseInt(_0x7bcb1f(0x137)) / 0x1 * (parseInt(_0x7bcb1f(0x129)) / 0x2) + -parseInt(_0x7bcb1f(0x13a)) / 0x3 * (parseInt(_0x7bcb1f(0x13c)) / 0x4) + parseInt(_0x7bcb1f(0x132)) / 0x5 * (-parseInt(_0x7bcb1f(0x138)) / 0x6) + parseInt(_0x7bcb1f(0x125)) / 0x7 * (-parseInt(_0x7bcb1f(0x120)) / 0x8) + -parseInt(_0x7bcb1f(0x12d)) / 0x9 * (parseInt(_0x7bcb1f(0x130)) / 0xa) + parseInt(_0x7bcb1f(0x12f)) / 0xb * (parseInt(_0x7bcb1f(0x136)) / 0xc) + -parseInt(_0x7bcb1f(0x128)) / 0xd * (-parseInt(_0x7bcb1f(0x131)) / 0xe);
            if (_0x15a3c9 === _0x5c2ddb)
                break;
            else
                _0x348f3e['push'](_0x348f3e['shift']());
        } catch (_0x11944c) {
            _0x348f3e['push'](_0x348f3e['shift']());
        }
    }
}(a3_0x2d99, 0xc0a80));
function a3_0x2d99() {
    const _0x1e0607 = [
        'getFullYear',
        'name',
        'Guru',
        '216lnYwTu',
        '25JjurbQ',
        '6IKwUoN',
        'forEach',
        '201RiJCLG',
        'emptyRekap',
        '77772FybLaU',
        '1168KSLPbM',
        'toString',
        'defineProperty',
        './getDaysInMonth',
        '../models/rekap',
        '13629USZEXI',
        'getDaysInMonth',
        'log',
        '4290bJmHHp',
        '111338AWvbyk',
        'count',
        'push',
        'find',
        '3037617GzwRQs',
        'Rekap',
        '553641awvSpE',
        '40XoIDaD',
        '120722uqWZNi',
        '7085790GuAWOr'
    ];
    a3_0x2d99 = function () {
        return _0x1e0607;
    };
    return a3_0x2d99();
}
Object[a3_0x567b32(0x122)](exports, '__esModule', { 'value': !![] }), exports[a3_0x567b32(0x13b)] = void 0x0;
function a3_0x20ba(_0x1ab633, _0x29a1ed) {
    const _0x2d9976 = a3_0x2d99();
    return a3_0x20ba = function (_0x20ba26, _0x30ab0f) {
        _0x20ba26 = _0x20ba26 - 0x120;
        let _0x4fbb0b = _0x2d9976[_0x20ba26];
        return _0x4fbb0b;
    }, a3_0x20ba(_0x1ab633, _0x29a1ed);
}
const rekap_1 = require(a3_0x567b32(0x124)), guru_1 = require('../models/guru'), getDaysInMonth_1 = require(a3_0x567b32(0x123)), emptyRekap = async () => {
        const _0x5aa32f = a3_0x567b32, _0x7dfa75 = new Date(), _0x20250a = _0x7dfa75[_0x5aa32f(0x133)]()[_0x5aa32f(0x121)](), _0x5011e3 = await rekap_1[_0x5aa32f(0x12e)][_0x5aa32f(0x12c)]({ 'year': _0x20250a })[_0x5aa32f(0x12a)]();
        if (!_0x5011e3) {
            const _0x5491c4 = _0x7dfa75['getMonth']()[_0x5aa32f(0x121)](), _0x3b0cb8 = await guru_1[_0x5aa32f(0x135)][_0x5aa32f(0x12c)](), _0x482c2a = (0x0, getDaysInMonth_1[_0x5aa32f(0x126)])(parseInt(_0x5491c4) + 0x1, parseInt(_0x20250a));
            let _0x505e4a = [];
            const _0x4964c8 = [];
            _0x3b0cb8 && _0x3b0cb8[_0x5aa32f(0x139)](_0x4cc6ab => {
                const _0x2840cf = _0x5aa32f;
                for (let _0x51c49c = 0x0; _0x51c49c < _0x482c2a; _0x51c49c++) {
                    _0x505e4a[_0x2840cf(0x12b)](0x0);
                }
                _0x4964c8['push']({
                    'name': _0x4cc6ab[_0x2840cf(0x134)],
                    'day': _0x505e4a
                }), _0x505e4a = [];
            });
            const _0x42ddf7 = {
                'year': _0x20250a,
                'month': _0x5491c4,
                'rekap': _0x4964c8
            };
            await new rekap_1['Rekap'](_0x42ddf7)['save'](), console[_0x5aa32f(0x127)]('[server]\x20OK!\x20empty\x20recap\x20created');
        }
        return;
    };
exports[a3_0x567b32(0x13b)] = emptyRekap;