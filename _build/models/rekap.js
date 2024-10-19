'use strict';
const a10_0x1ae2cb = a10_0x1e3d;
function a10_0x1e3d(_0x4bcd1b, _0x79f103) {
    const _0x2d24fd = a10_0x2d24();
    return a10_0x1e3d = function (_0x1e3d86, _0x438602) {
        _0x1e3d86 = _0x1e3d86 - 0x1db;
        let _0x312038 = _0x2d24fd[_0x1e3d86];
        return _0x312038;
    }, a10_0x1e3d(_0x4bcd1b, _0x79f103);
}
(function (_0x235d21, _0x5d63e7) {
    const _0x2d406b = a10_0x1e3d, _0x3bb961 = _0x235d21();
    while (!![]) {
        try {
            const _0x22193a = -parseInt(_0x2d406b(0x1e0)) / 0x1 + parseInt(_0x2d406b(0x1de)) / 0x2 + parseInt(_0x2d406b(0x1e7)) / 0x3 * (parseInt(_0x2d406b(0x1dd)) / 0x4) + -parseInt(_0x2d406b(0x1e4)) / 0x5 * (parseInt(_0x2d406b(0x1e5)) / 0x6) + parseInt(_0x2d406b(0x1e6)) / 0x7 * (parseInt(_0x2d406b(0x1df)) / 0x8) + -parseInt(_0x2d406b(0x1dc)) / 0x9 + -parseInt(_0x2d406b(0x1e2)) / 0xa;
            if (_0x22193a === _0x5d63e7)
                break;
            else
                _0x3bb961['push'](_0x3bb961['shift']());
        } catch (_0x1200b2) {
            _0x3bb961['push'](_0x3bb961['shift']());
        }
    }
}(a10_0x2d24, 0x48bad));
function a10_0x2d24() {
    const _0x452efe = [
        '110378pUsWDh',
        'Schema',
        '3683030ycBgkb',
        'mongoose',
        '5hiyuSn',
        '2143914zEWriQ',
        '119nUtdDd',
        '201861ECCLmx',
        'Rekap',
        'defineProperty',
        '506304bJvWqj',
        '28SWXBEx',
        '486364ZRMFUs',
        '223984CwsMDh'
    ];
    a10_0x2d24 = function () {
        return _0x452efe;
    };
    return a10_0x2d24();
}
Object[a10_0x1ae2cb(0x1db)](exports, '__esModule', { 'value': !![] }), exports[a10_0x1ae2cb(0x1e8)] = void 0x0;
const mongoose_1 = require(a10_0x1ae2cb(0x1e3)), RekapSchema = new mongoose_1[(a10_0x1ae2cb(0x1e1))]({
        'year': {
            'type': String,
            'required': !![]
        },
        'month': {
            'type': String,
            'required': !![]
        },
        'rekap': [{
                'name': {
                    'type': String,
                    'required': !![]
                },
                'day': {
                    'type': [Number],
                    'default': []
                }
            }]
    }, { 'timestamps': !![] });
exports[a10_0x1ae2cb(0x1e8)] = (0x0, mongoose_1['model'])('Rekap', RekapSchema);