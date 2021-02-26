## [1.17.1](https://github.com/searchfe/makit/compare/v1.17.0...v1.17.1) (2021-02-26)


### Bug Fixes

* remove debug ([ea2bb7b](https://github.com/searchfe/makit/commit/ea2bb7bd8c4bf62d22fa191e433768d797e32811))
* support node <= 10 ([0b524b1](https://github.com/searchfe/makit/commit/0b524b1520ac805ebd8bebec11b87d6f1996c53f))

# [1.17.0](https://github.com/searchfe/makit/compare/v1.16.1...v1.17.0) (2021-02-26)


### Bug Fixes

* robust invalidate ([5610ff4](https://github.com/searchfe/makit/commit/5610ff443084d62c43856dbc754bd9f992ee6723))


### Features

* expose ctx.logger ([1c48d41](https://github.com/searchfe/makit/commit/1c48d41df506b1d7c206df185f63b97152f98ab8))
* invalidate task/files ([273af4d](https://github.com/searchfe/makit/commit/273af4ddc1a100fa0567fc30e9e3698679b37b22))
* reporter ([e5f250a](https://github.com/searchfe/makit/commit/e5f250a5a75c7da59d40b8a11d351a844f580d40))


### Performance Improvements

* make 出错时不再每层都 catch，最终统一从依赖图里查找 ([869458f](https://github.com/searchfe/makit/commit/869458f621465a5a3a60152f3cec7a53c0aea0b5))
* remove promise hierarchy by topological resolving ([f08345c](https://github.com/searchfe/makit/commit/f08345cd40711160f79fb2aed58f6588fd9eacfb))

## [1.16.1](https://github.com/searchfe/makit/compare/v1.16.0...v1.16.1) (2020-08-10)


### Bug Fixes

* don't setLevel when not specified ([ef05b48](https://github.com/searchfe/makit/commit/ef05b4830d6595bb1c05251e7e52173618cf1e43))

# [1.16.0](https://github.com/searchfe/makit/compare/v1.15.4...v1.16.0) (2020-08-06)


### Features

* --require arguemnt and package.json entry ([f4a5bf1](https://github.com/searchfe/makit/commit/f4a5bf18163fa0671778910e6647d521691f71c4))

## [1.15.4](https://github.com/searchfe/makit/compare/v1.15.3...v1.15.4) (2020-05-09)


### Bug Fixes

* use yargs.argv ([9a0c12f](https://github.com/searchfe/makit/commit/9a0c12f679ae4d1372cf09c5d3c57a4454f0112d))

## [1.15.3](https://github.com/searchfe/makit/compare/v1.15.2...v1.15.3) (2020-05-08)


### Bug Fixes

* emit esmolule interop to fix chalk ([1d9b62d](https://github.com/searchfe/makit/commit/1d9b62d143b700880685e92e62c9d5289243f783))

## [1.15.2](https://github.com/searchfe/makit/compare/v1.15.1...v1.15.2) (2020-05-08)


### Bug Fixes

* add chalk to dependencies ([7b55d2b](https://github.com/searchfe/makit/commit/7b55d2ba3c6627a608397f1c453476e5aabdd7ba))

## [1.15.1](https://github.com/searchfe/makit/compare/v1.15.0...v1.15.1) (2020-01-03)


### Bug Fixes

* simple message for corrupted dep files ([568fb5d](https://github.com/searchfe/makit/commit/568fb5d4edd1c8576db9429906ef38dbc28fca13))

# [1.15.0](https://github.com/searchfe/makit/compare/v1.14.0...v1.15.0) (2019-12-12)


### Features

* better log ([ad89204](https://github.com/searchfe/makit/commit/ad892042b1ac774932fe9996d26963ac02212440))

# [1.14.0](https://github.com/searchfe/makit/compare/v1.13.2...v1.14.0) (2019-12-12)


### Features

* mtime db syncing, consistent logger ([3c4ef65](https://github.com/searchfe/makit/commit/3c4ef652258aa232b42c9da6d5d4823ccf3b7b4e))
* stable mtime ([767f186](https://github.com/searchfe/makit/commit/767f1862d3215ff921ef0970720937ec92c70edd))

## [1.13.2](https://github.com/searchfe/makit/compare/v1.13.1...v1.13.2) (2019-12-04)


### Bug Fixes

* delay before recipe ([4ebe711](https://github.com/searchfe/makit/commit/4ebe7112d835fa540ce39d637120e9b50f5166bb))

## [1.13.1](https://github.com/searchfe/makit/compare/v1.13.0...v1.13.1) (2019-12-04)


### Bug Fixes

* delay in ctx.make, fix dep utimes, invalidate dep ([677c727](https://github.com/searchfe/makit/commit/677c727b4abaa7ccfd6e5acfed03b74d0b9880bf))

# [1.13.0](https://github.com/searchfe/makit/compare/v1.12.3...v1.13.0) (2019-12-03)


### Bug Fixes

* delay 3ms for each recipe, see [#14](https://github.com/searchfe/makit/issues/14) ([cbdfd5e](https://github.com/searchfe/makit/commit/cbdfd5e174d721320ebca32b8ab928dfb0000221))
* dynamicDependenciesUpdatedAt default value ([e320c51](https://github.com/searchfe/makit/commit/e320c5158fb4a39a3f0d3f128c0f544b24ea4aa9))
* log outputs in bin/makit respect to loglevel ([5bd03e8](https://github.com/searchfe/makit/commit/5bd03e8e50eeaada3b12c66be4bc2c92ba051c2a))


### Features

* add make stack in error.message ([328798a](https://github.com/searchfe/makit/commit/328798aab87c94ba213e291e0d81224f121ec197))

## [1.12.3](https://github.com/searchfe/makit/compare/v1.12.2...v1.12.3) (2019-12-02)


### Bug Fixes

* graph printing, closes [#5](https://github.com/searchfe/makit/issues/5) ([57b2397](https://github.com/searchfe/makit/commit/57b2397c27129bbaa02f8f3273a7a15dc7e3b1a1))
* update unit test for DirectedGraph ([8cdc341](https://github.com/searchfe/makit/commit/8cdc3419246abe142730772bbb10c96ccd273ec8))

## [1.12.2](https://github.com/searchfe/makit/compare/v1.12.1...v1.12.2) (2019-12-02)


### Bug Fixes

* glob negation in Target.match/exec ([cfc561e](https://github.com/searchfe/makit/commit/cfc561e37250c7eaa645534f523321109accb7a3))

## [1.12.1](https://github.com/searchfe/makit/compare/v1.12.0...v1.12.1) (2019-12-02)


### Bug Fixes

* support node_js LTS versions ([9be73c1](https://github.com/searchfe/makit/commit/9be73c1b46926510741cdc2dcf590224328f7cad))

# [1.12.0](https://github.com/searchfe/makit/compare/v1.11.0...v1.12.0) (2019-11-29)


### Features

* rude() with dynamic dependencies ([a72cba2](https://github.com/searchfe/makit/commit/a72cba25708526b259a83ee536011a18dd092a8c))
* support arbitrary nested concurrent/series ([b4e07be](https://github.com/searchfe/makit/commit/b4e07be1429aa9d6883a5b638cb4efeaafded6e2))
* unlink, unlinkSync for Context ([8d67332](https://github.com/searchfe/makit/commit/8d67332d94e7b7cb81e1280e0734a42d28934eff))

# [1.11.0](https://github.com/searchfe/makit/compare/v1.10.3...v1.11.0) (2019-11-29)


### Features

* series() ([51a2fa5](https://github.com/searchfe/makit/commit/51a2fa544d2b5cd511ad7673f48457b7ee2e6ff7))

## [1.10.3](https://github.com/searchfe/makit/compare/v1.10.2...v1.10.3) (2019-11-29)


### Bug Fixes

* change making ([732951d](https://github.com/searchfe/makit/commit/732951daa66fff42803c8e8be9be07d4e846252c))

## [1.10.2](https://github.com/searchfe/makit/compare/v1.10.1...v1.10.2) (2019-11-29)


### Bug Fixes

* add disableCheckCircular ([1188aa3](https://github.com/searchfe/makit/commit/1188aa33204738e1a95a0bbd64724618945dc83a))

## [1.10.1](https://github.com/searchfe/makit/compare/v1.10.0...v1.10.1) (2019-11-29)


### Bug Fixes

* add off export ([7a36b98](https://github.com/searchfe/makit/commit/7a36b9865f61642e480fec9831cdfa9bb3442d6d))

# [1.10.0](https://github.com/searchfe/makit/compare/v1.9.0...v1.10.0) (2019-11-29)


### Features

* add graph & off for emitter ([29a7fde](https://github.com/searchfe/makit/commit/29a7fded575c6b8b435380dc50a41ec2f1ede0df))

# [1.9.0](https://github.com/searchfe/makit/compare/v1.8.0...v1.9.0) (2019-11-28)


### Features

* add emitter ([9fc8fb0](https://github.com/searchfe/makit/commit/9fc8fb0b0fdd81e860213e640da3d3778664424c))
* add emitter ([da3cd99](https://github.com/searchfe/makit/commit/da3cd9997005f0883a7e8c544fc5d3a67c30ab14))

# [1.8.0](https://github.com/searchfe/makit/compare/v1.7.3...v1.8.0) (2019-11-28)


### Bug Fixes

* fire recipe when make twice or more in immediate moment ([cdfd03a](https://github.com/searchfe/makit/commit/cdfd03afa16d9e67348358a9c54dd28218ce5db0))
* fire recipe when make twice or more in immediate moment ([2620601](https://github.com/searchfe/makit/commit/26206011f1e5590cba6269d36ec2f034475e6f04))


### Features

* local make via ctx.make ([d5d8027](https://github.com/searchfe/makit/commit/d5d8027d0aeb3e0dc9276a80c4bd73efbbbfd1d7))

## [1.7.3](https://github.com/searchfe/makit/compare/v1.7.2...v1.7.3) (2019-11-27)


### Bug Fixes

* setVerbose() ([1551451](https://github.com/searchfe/makit/commit/155145172a5e4121bafbb294eeaea20e8b4629bf))

## [1.7.2](https://github.com/searchfe/makit/compare/v1.7.1...v1.7.2) (2019-11-27)


### Bug Fixes

* check prerequisites recursively ([673b2fe](https://github.com/searchfe/makit/commit/673b2feb617abba9b84bd7208110a65cf2b9c258))

## [1.7.1](https://github.com/searchfe/makit/compare/v1.7.0...v1.7.1) (2019-11-26)


### Bug Fixes

* extrace make outof makefile ([8e0a4ad](https://github.com/searchfe/makit/commit/8e0a4ad36ebfa41d9849d106bfd66150cab1c71f))
* trigger make for none-exist file ([22c0095](https://github.com/searchfe/makit/commit/22c0095bd56c34f67e6ebf9cced65421d395d7ef))

# [1.7.0](https://github.com/searchfe/makit/compare/v1.6.0...v1.7.0) (2019-11-26)


### Features

* updateOrAddRule() ([7488265](https://github.com/searchfe/makit/commit/74882651d070eb4a40fe89a99da0d101f3c5e842))

# [1.6.0](https://github.com/searchfe/makit/compare/v1.5.2...v1.6.0) (2019-11-26)


### Bug Fixes

* make Prerequisites() public ([6c9f4de](https://github.com/searchfe/makit/commit/6c9f4dea0258d02072bf55c4fb36f2d907237605))
* RecipeDeclaration complains for callback ([e7025ef](https://github.com/searchfe/makit/commit/e7025ef63368acb7802f86af17bc849e22154bcb))


### Features

* support groups in dependency array ([f70dec2](https://github.com/searchfe/makit/commit/f70dec2f1c2e2a8abc575bb9f9de43aba0f72304))

## [1.5.2](https://github.com/searchfe/makit/compare/v1.5.1...v1.5.2) (2019-11-25)


### Bug Fixes

* quiet by default, fixes [#8](https://github.com/searchfe/makit/issues/8) ([daff868](https://github.com/searchfe/makit/commit/daff86897306a93b37f272519ed90c33906fb70e))

## [1.5.1](https://github.com/searchfe/makit/compare/v1.5.0...v1.5.1) (2019-11-24)


### Bug Fixes

* Fix a bug which can trigger loops in matching mode ([cac2631](https://github.com/searchfe/makit/commit/cac26318b4263e9734330b1752b000c12c4114c9))

# [1.5.0](https://github.com/searchfe/makit/compare/v1.4.1...v1.5.0) (2019-11-23)


### Features

* publish patch ([b1e8b8a](https://github.com/searchfe/makit/commit/b1e8b8ae4143edaecf72e91fe906bc430773f4aa))

# [1.2.0](https://github.com/searchfe/makit/compare/v1.1.0...v1.2.0) (2019-11-23)


### Bug Fixes

* hash in test ([593198a](https://github.com/searchfe/makit/commit/593198a6e08bc5fa69cf49f0f7db4b632474de03))
* lint ([242e066](https://github.com/searchfe/makit/commit/242e066415eb8c5f2a0adcf1df005af4a834fcb8))


### Features

* dependency graph and make trace ([e5cce8e](https://github.com/searchfe/makit/commit/e5cce8ec317102ab3291f241e8c1075e00f3f73f))
* publish ([c0d0475](https://github.com/searchfe/makit/commit/c0d04750b6e1201a96ec674a0114717de102b1ba))
* publish ([8389e73](https://github.com/searchfe/makit/commit/8389e735346fd966eb4713c2ef46d45e6c08455d))
* publish 1.3.0 ([6df3266](https://github.com/searchfe/makit/commit/6df32665386f3b294b48c1750cca755a262cc1ad))
* quiet argument to disable trace ([138ea69](https://github.com/searchfe/makit/commit/138ea69290047afc91a6f591c104e06b90401503))
* support match mode && backward reference ([7f03a4f](https://github.com/searchfe/makit/commit/7f03a4f12b6c1ef4c92d03ce53e8c32edf5e3e7a))

# [1.2.0](https://github.com/searchfe/makit/compare/v1.1.0...v1.2.0) (2019-11-23)


### Bug Fixes

* hash in test ([593198a](https://github.com/searchfe/makit/commit/593198a6e08bc5fa69cf49f0f7db4b632474de03))
* lint ([242e066](https://github.com/searchfe/makit/commit/242e066415eb8c5f2a0adcf1df005af4a834fcb8))


### Features

* dependency graph and make trace ([e5cce8e](https://github.com/searchfe/makit/commit/e5cce8ec317102ab3291f241e8c1075e00f3f73f))
* publish 1.3.0 ([6df3266](https://github.com/searchfe/makit/commit/6df32665386f3b294b48c1750cca755a262cc1ad))
* quiet argument to disable trace ([138ea69](https://github.com/searchfe/makit/commit/138ea69290047afc91a6f591c104e06b90401503))
* support match mode && backward reference ([7f03a4f](https://github.com/searchfe/makit/commit/7f03a4f12b6c1ef4c92d03ce53e8c32edf5e3e7a))

# [1.2.0](https://github.com/searchfe/makit/compare/v1.1.0...v1.2.0) (2019-11-15)


### Features

* dependency graph and make trace ([e5cce8e](https://github.com/searchfe/makit/commit/e5cce8ec317102ab3291f241e8c1075e00f3f73f))
* quiet argument to disable trace ([138ea69](https://github.com/searchfe/makit/commit/138ea69290047afc91a6f591c104e06b90401503))

# [1.1.0](https://github.com/searchfe/makit/compare/v1.0.0...v1.1.0) (2019-11-13)


### Features

* support call make in makefile.js ([2ff18c5](https://github.com/searchfe/makit/commit/2ff18c55958ed071c42d788a4dd4e248469040b5))
* target support RegExp ([d9095ff](https://github.com/searchfe/makit/commit/d9095fff012fcef5135966be79f36d3ef71de007))

# 1.0.0 (2019-11-13)


### Bug Fixes

* cache pending make procedure ([8077aa6](https://github.com/searchfe/makit/commit/8077aa64626235c2367d78274c1000159fca690a))
