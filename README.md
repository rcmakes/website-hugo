[![Netlify Status](https://api.netlify.com/api/v1/badges/eb482406-a9c2-4edf-898f-ba1ba8a29dcb/deploy-status)](https://app.netlify.com/sites/rcmakes/deploys)

# RCMakes Website Documentation

## Hugo

rcmakes.com is built with the [Hugo static site builder](gohugo.io). Hugo is like a website factory where you input templates, markdown, images, and JSON, and a website is generated.

#### Viewing Your Changes

`$ hugo server` to start the development server.

## Git Workflow

#### Getting the Latest Changes

Before making any changes, `$ git pull origin <branch-you-are-working-on>` to get the latest changes from GitHub

#### Creating a New Feature Branch

All new feature branches must be created from `develop`. You must be on branch `develop` before running `$ git checkout -b abc/new-feature-branch-name`

`$ git pull origin develop` before working on your feature branch. This will pull the latest changes from `develop` and put them on your feature branch

#### Branch Naming Rules

To keep track of who is working on what and avoid cluttering our branch namespace, use your three letter initials followed by a `/` and then the branch name using [kebab case](http://wiki.c2.com/?KebabCase) (use hyphens to separate words). Remember, *no spaces!*

##### Examples:

1. `ipn/update-calendar`
2. `ajc/fix-dropdown-bug`
3. `cjd/give-me-roblox-vbucks`

##### Not OK:

1. `ipn/updateCalendar` - don't use camelCase, use kebab case
2. `ajc-fix-dropdown-bug` - doesn't have `/` to separate initials from branch name
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

## Deployment

### Netlify

Deployed here: https://rcmakes.netlify.com/

Netlify uses the AWS CDN, so it's fast

HTTPS handled by Netlify with an auto-renewing Let's Encrypt certificate (free)

### GoDaddy

The domain `rcmakes.com` is registered with GoDaddy, and we point the DNS to Netlify's nameservers.

DNS is the system that translates human-readable domain names (example.com) into IP addresses (192.0.2.0)

## SEO (Search Engine Optimization)

Google Search Console: https://search.google.com/search-console/inspect?resource_id=sc-domain%3Arcmakes.com&id=vTVp3qo_PjkwUCnGfo2GTw&hl=en
