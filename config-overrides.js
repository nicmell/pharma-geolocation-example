

const {override} = require('customize-cra')

const {alias, configPaths} = require('react-app-rewire-alias')

const aliasMap = configPaths('./tsconfig.paths.json')


const setupAlias = () => config => {
    return alias(aliasMap)(config)
}

module.exports =  {
    webpack: override(setupAlias())
}
