const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const config = {
  transformer: {
    maxWorkerCount: 6,
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);