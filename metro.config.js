const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');



module.exports = (() => {
    const defaultConfig = getDefaultConfig(__dirname);

    return withNativeWind({
        ...defaultConfig,
        resolver: {
            ...defaultConfig.resolver,
            extraNodeModules: {
                ...defaultConfig.resolver.extraNodeModules,
                '@/': './',
            },
        },
    }, {
        input: './global.css',
    });
})();