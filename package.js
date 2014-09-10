Package.describe({
  summary: "A 3D Framework",
  version: "1.0.0",
  git: "https://github.com/Adurnha/three"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.1');
  api.addFiles('lib/three.js');
});
