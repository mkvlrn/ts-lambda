# ts-lambda

an opinionated typescript template for aws lambda using the serverless framework

## what's in it?

- awesome eslint config (based on airbnb's guide)
- basic prettier config
- working default-y jest config
- git hook to lint commit message using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary)
- git hook to lint, prettify, and run test on staged files pre commit

## how do i use it?

1. clone
2. do your thing
3. `yarn dev` to start `src/index.ts` without compiling
4. `yarn deploy` to deploy
5. `yarn destroy` to remove services
