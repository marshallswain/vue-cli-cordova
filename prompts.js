module.exports = api => {
  // a feature object should be a valid inquirer choice object
  // cli.injectFeature({
  //   name: 'Some great feature',
  //   value: 'my-feature'
  // })

  console.log('hi')
  console.log('hi')
  console.log('hi')
  console.log('hi')
  console.log('hi')
  console.log('hi')

  // injectPrompt expects a valid inquirer prompt object
  cli.injectPrompt({
    name: 'someFlag',
    // make sure your prompt only shows up if user has picked your feature
    when: answers => answers.features.include('my-feature'),
    message: 'Do you want to turn on flag foo?',
    type: 'confirm'
  })

  // when all prompts are done, inject your plugin into the options that
  // will be passed on to Generators
  // cli.onPromptComplete((answers, options) => {
  //   if (answers.features.includes('my-feature')) {
  //     options.plugins['vue-cli-plugin-my-feature'] = {
  //       someFlag: answers.someFlag
  //     }
  //   }
  // })
}
