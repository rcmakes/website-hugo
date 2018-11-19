# RCMakes Hugo Website Documentation

rcmakes.com website built with Hugo static site builder

`public/` folder uploaded to this git repository for deployment on GitHub pages: https://github.com/rcmakes/rcmakes.github.io

Deployment of `develop` branch: http://rcmakes.github.io

## Git Workflow

All new feature branches must be created from `develop`. You must be on branch `develop` before running `$ git checkout -b abc/new-feature-branch-name`

`$ git pull origin develop` before working on your feature branch. This will pull the latest changes from `develop` and put them on your feature branch

### Branch Naming Rules

To keep track of who is working on what and avoid a cluttered namespace, use this format:

##### OK:

1. `ipn/update-calendar`
2. `ajc/fix-dropdown-bug`

##### Not OK:

1. `ipn/updateCalendar` - uses camelcase and not kebab case
2. `ajc-fix-dropdown-bug` - doen't have `/` to separate initials from branch name
3. `fix-dropdown-bug` - doesn't have coder's initials
