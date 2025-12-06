module.exports = {
  multipass: true,
  floatPrecision: 1,
  plugins: [
    {
      name: 'removeViewBox',
      active: false
    },
    {
      name: 'removeAttrs',
      params: {
        attrs: '(color|data|fill-rule|font|opacity|paint|stroke|text|xml).*'
      }
    },
    'convertStyleToAttrs',
    'cleanupListOfValues',
    'removeRasterImages',
    'sortAttrs',
    'removeStyleElement',
    'removeScriptElement',
    'removeDoctype',
    'removeXMLProcInst',
    'removeComments',
    'removeMetadata',
    'removeEditorsNSData',
    'cleanupAttrs',
    'mergeStyles',
    'inlineStyles',
    'minifyStyles',
    'cleanupIds',
    'removeUselessDefs',
    'cleanupNumericValues',
    'convertColors',
    'removeUnknownsAndDefaults',
    'removeNonInheritableGroupAttrs',
    'removeUselessStrokeAndFill',
    'cleanupEnableBackground',
    'removeHiddenElems',
    'removeEmptyText',
    'convertShapeToPath',
    'convertEllipseToCircle',
    'moveElemsAttrsToGroup',
    'moveGroupAttrsToElems',
    'collapseGroups',
    'convertPathData',
    'convertTransform',
    'removeEmptyAttrs',
    'removeEmptyContainers',
    'mergePaths',
    'removeUnusedNS',
    'sortDefsChildren',
    'removeTitle',
    'removeDesc'
  ]
}
