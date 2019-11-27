module.exports = {
  name: 'demo-ui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/demo-ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
