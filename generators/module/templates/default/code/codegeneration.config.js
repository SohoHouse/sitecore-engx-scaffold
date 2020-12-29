var path = require("path");

module.exports = {
    cwd: path.join(__dirname, '..'),
    pattern: '**/serialization/<%= solutionX %>.<%= moduleTypeX %>.<%= moduleNameX %>.Templates/**/*.yml',
    Using: [],
    templatePath: path.join(__dirname, 'codegeneration.tmpl'),
}