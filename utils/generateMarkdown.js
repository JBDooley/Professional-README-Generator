function generateMarkdown(data) {


  return `
  # ${data.title}

  ![license badge](https://img.shields.io/badge/license-${data.license}-blue)

  ## Description

  ${data.description}



  ## Installation

  ${data.installation}



  ## Usage

  ${data.usage}



  ## Contributing

  ${data.contributing}



  ## Tests

  ${data.tests}



  ## License

  This project is licensed under the ${data.license} license



  ## GitHub

  [GitHub Link](https://github.com/${data.github})

  ## E-mail

  [email](mailto:${data.email})

  
`;
}

module.exports = generateMarkdown;
