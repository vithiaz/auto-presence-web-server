'use strict';
const a6_0x469366 = a6_0x5635;
(function (_0x28f72d, _0x4e3524) {
    const _0x1949c2 = a6_0x5635, _0x553c85 = _0x28f72d();
    while (!![]) {
        try {
            const _0x4fd6db = -parseInt(_0x1949c2(0x169)) / 0x1 + parseInt(_0x1949c2(0x173)) / 0x2 * (-parseInt(_0x1949c2(0x15c)) / 0x3) + -parseInt(_0x1949c2(0x174)) / 0x4 * (-parseInt(_0x1949c2(0x15a)) / 0x5) + -parseInt(_0x1949c2(0x17e)) / 0x6 + parseInt(_0x1949c2(0x157)) / 0x7 + -parseInt(_0x1949c2(0x170)) / 0x8 + parseInt(_0x1949c2(0x171)) / 0x9;
            if (_0x4fd6db === _0x4e3524)
                break;
            else
                _0x553c85['push'](_0x553c85['shift']());
        } catch (_0x370908) {
            _0x553c85['push'](_0x553c85['shift']());
        }
    }
}(a6_0x5ae7, 0x90768));
function a6_0x5635(_0xfaa34d, _0x438252) {
    const _0x5ae7f8 = a6_0x5ae7();
    return a6_0x5635 = function (_0x5635b3, _0x2e39f9) {
        _0x5635b3 = _0x5635b3 - 0x157;
        let _0x12cfda = _0x5ae7f8[_0x5635b3];
        return _0x12cfda;
    }, a6_0x5635(_0xfaa34d, _0x438252);
}
var __importDefault = this && this['__importDefault'] || function (_0x5e87f5) {
    const _0x5bd442 = a6_0x5635;
    return _0x5e87f5 && _0x5e87f5[_0x5bd442(0x17f)] ? _0x5e87f5 : { 'default': _0x5e87f5 };
};
Object[a6_0x469366(0x15e)](exports, a6_0x469366(0x17f), { 'value': !![] });
const config_1 = __importDefault(require(a6_0x469366(0x15f))), express_1 = __importDefault(require(a6_0x469366(0x16d))), mongoose_1 = require(a6_0x469366(0x162)), path_1 = __importDefault(require(a6_0x469366(0x177))), cors_1 = __importDefault(require(a6_0x469366(0x15b))), guru_1 = require(a6_0x469366(0x16f)), emptyRekap_1 = require(a6_0x469366(0x159)), app = (0x0, express_1[a6_0x469366(0x168)])(), port = config_1['default'][a6_0x469366(0x161)];
function a6_0x5ae7() {
    const _0x1ebcdd = [
        'urlencoded',
        'path',
        '/guru',
        'valenoirs',
        'No\x20API\x20endpoint\x20found.',
        'status',
        '[server]:\x20OK!\x20successfully-connected-to-mongodb.\x20Starting\x20server...',
        'listen',
        '6541608cNxFZH',
        '__esModule',
        'MONGO_URI',
        '265573LcyXEV',
        'get',
        './helper/emptyRekap',
        '2835gZkYmz',
        'cors',
        '3YAefGl',
        'use',
        'defineProperty',
        './config/config',
        'LJeCc',
        'PORT',
        'mongoose',
        'error',
        'connect',
        'host',
        'log',
        'send',
        'default',
        '792793omdZkq',
        'then',
        'catch',
        'headers',
        'express',
        '/ping',
        './routes/guru',
        '6210576tpbBzu',
        '32392809OmkCzg',
        '[server]:\x20OK!\x20server\x20running\x20at\x20port\x20',
        '1402578zAEmXd',
        '2224IyPspL',
        'join'
    ];
    a6_0x5ae7 = function () {
        return _0x1ebcdd;
    };
    return a6_0x5ae7();
}
app['use']((0x0, cors_1[a6_0x469366(0x168)])()), app[a6_0x469366(0x15d)](express_1['default'][a6_0x469366(0x176)]({ 'extended': !![] })), app[a6_0x469366(0x15d)](express_1[a6_0x469366(0x168)]['json']()), app[a6_0x469366(0x15d)](express_1[a6_0x469366(0x168)]['static'](path_1[a6_0x469366(0x168)][a6_0x469366(0x175)](__dirname, 'public'))), app[a6_0x469366(0x15d)](a6_0x469366(0x178), guru_1['router']), app[a6_0x469366(0x158)](a6_0x469366(0x16e), (_0x28926b, _0x1277fb) => {
    const _0x39af5f = a6_0x469366;
    return console[_0x39af5f(0x166)]('[server]:\x20OK!\x20' + _0x28926b[_0x39af5f(0x16c)][_0x39af5f(0x165)] + '\x20pinging\x20the\x20server'), _0x1277fb['status'](0xc8)[_0x39af5f(0x167)]({
        'success': !![],
        'status': 0xc8,
        'data': { 'message': _0x39af5f(0x179) }
    });
}), app[a6_0x469366(0x15d)]('/', (_0x4023d8, _0x32abf3) => {
    const _0x5dbdca = a6_0x469366;
    return _0x32abf3[_0x5dbdca(0x17b)](0x194)[_0x5dbdca(0x167)]({
        'error': !![],
        'status': 0x194,
        'type': 'NotFound',
        'data': { 'message': _0x5dbdca(0x17a) }
    });
}), (0x0, mongoose_1[a6_0x469366(0x164)])(config_1['default'][a6_0x469366(0x180)])[a6_0x469366(0x16a)](async () => {
    const _0x5df983 = a6_0x469366;
    await (0x0, emptyRekap_1['emptyRekap'])(), console[_0x5df983(0x166)](_0x5df983(0x17c)), app[_0x5df983(0x17d)](port, () => {
        const _0x4a8da5 = _0x5df983;
        if (_0x4a8da5(0x160) === 'HTDuW')
            return _0x10a271 && _0x518264[_0x4a8da5(0x17f)] ? _0x402312 : { 'default': _0x2d3a1c };
        else
            console[_0x4a8da5(0x166)](_0x4a8da5(0x172) + port);
    });
})[a6_0x469366(0x16b)](_0x1bbe25 => {
    const _0x2487d3 = a6_0x469366;
    console[_0x2487d3(0x163)]('[server]:\x20ERR!\x20failed-connecting-to-mongo-database', _0x1bbe25);
});