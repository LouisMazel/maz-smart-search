module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: "> 0.5%, ie >= 9"
        },
        corejs: {
          version: 3,
          proposals: false
        },
        forceAllTransforms: true,
        modules: false,
        useBuiltIns: 'usage'
      }
    ]
  ]
}