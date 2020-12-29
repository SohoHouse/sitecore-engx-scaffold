# Sitecore EngX Scaffold


[![npm version](https://badge.fury.io/js/generator-sitecore-engx-scaffold.svg)](https://badge.fury.io/js/generator-sitecore-engx-scaffold)
[![Build status](https://ci.appveyor.com/api/projects/status/a7qjl56tmurpn7qq?svg=true)](https://ci.appveyor.com/project/asmagin/sitecore-engx-scaffold)

## OVERVIEW
The scaffold is a generator based on [Yeoman](http://yeoman.io/). It is designed to simplify and unify initial solution setup. It can save you time on configuration on early stages of the project.
#### Sitecore Versions
* 10.0 Update 0

## FEATURES
* Generate a repository with a standard file structure.
* .NET and JS projects
* CAKE-build scripts
* vagrant scripts for development VM setup

Generated solution is fully compliant with [Sitecore Helix Guidelines](http://helix.sitecore.net/)

#### Pre-requisites
* Administrator rights to the system
* `Node.js v8.9.3` and higher ([download](https://nodejs.org/en/download/))
* Visual Studio 2019

#### Initial generation
1. To install generator:
    * Clone repository or update to current version, if you have it already.
    * In repository root following run Powershell (as Administrator) command `npm link`
3. Navigate to a location where you usually store your projects. Create a directory with a customer name (by default folder name would be used as a solution name. Do not include spaces or any special characters in it)
4. Inside the folder run following PS command (again as Administrator) and follow instructions of the generator.

``` powershell
npm i yo -g
npm i generator-sitecore-engx-scaffold -g
yo sitecore-engx-scaffold
```
5. Follow the generator instructions.

#### Adding Helix modules
Once the solution is generated, run following command in the repository root and follow instructions of the generator.:
``` powershell
yo sitecore-engx-scaffold:module
```

#### Re-generation
While you do not want to do this in the middle of the project, it is possible to run generation once again. Yeoman will detect conflicts and provide you with options to discard or override changes.