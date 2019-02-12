# RCMakes Hugo Website Documentation

rcmakes.com website built with Hugo static site builder

`public/` folder uploaded to this git repository for deployment on GitHub pages: https://github.com/rcmakes/rcmakes.github.io

Deployment of `develop` branch: http://rcmakes.github.io

## Viewing Your Changes

`$ hugo server` to start the development server. Pass the `-D` flag to render drafts as well

# Git Workflow

## Getting the Latest Changes

Before making any changes, `$ git pull origin <branch-you-are-working-on>` to get the latest changes from GitHub

## Creating a New Feature Branch

All new feature branches must be created from `develop`. You must be on branch `develop` before running `$ git checkout -b abc/new-feature-branch-name`

`$ git pull origin develop` before working on your feature branch. This will pull the latest changes from `develop` and put them on your feature branch

### Branch Naming Rules

To keep track of who is working on what and avoid cluttering our branch namespace, use your three letter initials followed by a `/` and then the branch name using [kebab case](http://wiki.c2.com/?KebabCase) (use hyphens to separate words). Remember, *no spaces!*

##### Examples:

1. `ipn/update-calendar`
2. `ajc/fix-dropdown-bug`
3. `cjd/give-me-roblox-vbucks`

##### Not OK:

1. `ipn/updateCalendar` - uses camelcase and not kebab case
2. `ajc-fix-dropdown-bug` - doen't have `/` to separate initials from branch name
3. `fix-dropdown-bug` - doesn't have coder's initials

### File Naming

Use [kebab case](http://wiki.c2.com/?KebabCase), and all characters must be lowercase. No spaces or underscores.

##### Examples:

1. `/data`
2. `summer-2018-interns-1200x900.jpg`
3. `5-million-secured-for-newco-foundation.md`

##### Not OK:

1. `/Data` - uses titlecase
2. `rcmakes_interns1200x900.jpg` - uses underscore
3. `index.HTML` - all caps file extension

### Images

Images must have the resolution in the file name.

Ex: `cornhole-custom1200x900.jpg`
