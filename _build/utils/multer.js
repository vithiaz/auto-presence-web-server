'use strict';
function a13_0x5cfe() {
    const _0x5350c5 = [
        '3426064FlcWVl',
        'multer',
        '2565632fewtGC',
        'upload',
        'originalname',
        '34076977ZBrDEC',
        '6947647eQnCmB',
        '535bWzvlZ',
        '82586XMmOWJ',
        '14964HUpYVG',
        '1168840xuleuS',
        'defineProperty',
        '10fnJKfS',
        'uJXmK',
        'now',
        'extname',
        '6lrdntH',
        '__esModule',
        'diskStorage',
        'JMpuG',
        'log',
        '../public/upload',
        '[server]\x20ERR!\x20directory-already-existed',
        'default',
        '27yAJTEZ',
        'path',
        'join',
        '__importDefault'
    ];
    a13_0x5cfe = function () {
        return _0x5350c5;
    };
    return a13_0x5cfe();
}
const a13_0x2bf0a2 = a13_0x452a;
(function (_0x2f26e0, _0xcc8c33) {
    const _0x1537d5 = a13_0x452a, _0x161843 = _0x2f26e0();
    while (!![]) {
        try {
            const _0x47c3e9 = parseInt(_0x1537d5(0x8b)) / 0x1 + -parseInt(_0x1537d5(0x8d)) / 0x2 * (parseInt(_0x1537d5(0x93)) / 0x3) + parseInt(_0x1537d5(0xa1)) / 0x4 + -parseInt(_0x1537d5(0x8a)) / 0x5 * (-parseInt(_0x1537d5(0x8c)) / 0x6) + -parseInt(_0x1537d5(0x89)) / 0x7 + -parseInt(_0x1537d5(0x9f)) / 0x8 * (parseInt(_0x1537d5(0x9b)) / 0x9) + -parseInt(_0x1537d5(0x8f)) / 0xa * (-parseInt(_0x1537d5(0xa4)) / 0xb);
            if (_0x47c3e9 === _0xcc8c33)
                break;
            else
                _0x161843['push'](_0x161843['shift']());
        } catch (_0x1d8429) {
            _0x161843['push'](_0x161843['shift']());
        }
    }
}(a13_0x5cfe, 0x9ce40));
var __importDefault = this && this[a13_0x2bf0a2(0x9e)] || function (_0x9d332c) {
    const _0x305a7a = a13_0x2bf0a2;
    return _0x9d332c && _0x9d332c[_0x305a7a(0x94)] ? _0x9d332c : { 'default': _0x9d332c };
};
Object[a13_0x2bf0a2(0x8e)](exports, a13_0x2bf0a2(0x94), { 'value': !![] }), exports[a13_0x2bf0a2(0xa2)] = void 0x0;
function a13_0x452a(_0x5d610b, _0x48be81) {
    const _0x5cfe8d = a13_0x5cfe();
    return a13_0x452a = function (_0x452a1a, _0x2a8931) {
        _0x452a1a = _0x452a1a - 0x89;
        let _0x4676d9 = _0x5cfe8d[_0x452a1a];
        return _0x4676d9;
    }, a13_0x452a(_0x5d610b, _0x48be81);
}
const fs_1 = require('fs'), multer_1 = __importDefault(require(a13_0x2bf0a2(0xa0))), path_1 = __importDefault(require(a13_0x2bf0a2(0x9c))), storage = multer_1[a13_0x2bf0a2(0x9a)][a13_0x2bf0a2(0x95)]({
        'destination': function (_0x17580f, _0xaac56c, _0x5dc85b) {
            const _0x10afd9 = a13_0x2bf0a2, _0x53ee48 = path_1[_0x10afd9(0x9a)][_0x10afd9(0x9d)](__dirname, _0x10afd9(0x98));
            try {
                'uJXmK' === _0x10afd9(0x90) ? (0x0, fs_1['mkdirSync'])(_0x53ee48) : _0x42d7bb['log'](_0x10afd9(0x99));
            } catch (_0x5f2516) {
                _0x10afd9(0x96) === 'xstGk' ? _0x2f3312(null, _0x2a85b6['now']() + _0x1ea733[_0x10afd9(0x9a)][_0x10afd9(0x92)](_0x5affc0[_0x10afd9(0xa3)])) : console[_0x10afd9(0x97)]('[server]\x20ERR!\x20directory-already-existed');
            }
            _0x5dc85b(null, _0x53ee48);
        },
        'filename': function (_0x473b76, _0x4f512d, _0x4c51d5) {
            const _0x2028de = a13_0x2bf0a2;
            _0x4c51d5(null, Date[_0x2028de(0x91)]() + path_1['default'][_0x2028de(0x92)](_0x4f512d['originalname']));
        }
    }), multerOption = { 'storage': storage };
exports['upload'] = (0x0, multer_1[a13_0x2bf0a2(0x9a)])(multerOption);