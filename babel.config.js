module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          "node": "8.10"
        },
        corejs: "3",
        useBuiltIns: 'entry'
      }
    ]
  ]
}