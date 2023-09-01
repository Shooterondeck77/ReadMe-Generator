// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  switch(license) {
      case 'MIT': 
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      case 'Apache 2.0': 
        return '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      case 'Boost Software License 1.0':
        return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
      case 'CC0': 
        return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
      case 'IBM Public License Version 1.0' : 
        return'[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
      case 'Open Database License (ODbL)' :
        return '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)'
    
    };
  }
 
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'MIT': 
      return `<a href="https://opensource.org/licenses/MIT" </a>`;
    case 'Apache 2.0': 
      return `<a href="https://opensource.org/licenses/Apache-2.0" </a>`;
    case 'Boost Software License 1.0':
      return `<a href="https://www.boost.org/LICENSE_1_0.txt"</a>`;
    case 'CC0': 
      return `<a href="http://creativecommons.org/publicdomain/zero/1.0/" </a>`;
    case 'IBM Public License Version 1.0' : 
      return `<a href="https://opensource.org/licenses/IPL-1.0" </a>`;
    case 'Open Database License (ODbL)' :
      return `<a href="https://opendatacommons.org/licenses/odbl/" </a>`;
  
  };

}

function renderLicenseSection(license) {
  let licenseText = fs.readFileSync(`./utils/legal-text/${license}.txt`, 'utf8');
  return `<p align="center">Copyright ${thisYear}</p>
    <p align="center">=======================================</p><br>
    <details>
    <summary>Click for the legal stuff, if that's <em><strong>your thing</strong></em></summary>
    ${licenseText}
    </details>`;}




function generateMarkdown(data) {
  return `
  # ${data.title}

`;
}


module.exports = generateMarkdown;
