

const {override} = require('customize-cra')

const packageJson = require('./package.json')

const {alias, aliasJest, configPaths} = require('react-app-rewire-alias')

const aliasMap = configPaths('./tsconfig.paths.json')


const jest = override(
  config => ({...config, ...packageJson.jest}),
  config =>  aliasJest(aliasMap)(config)
)

const webpack = override(
  config => alias(aliasMap)(config)
)

module.exports =  {
    jest,
    webpack
}
