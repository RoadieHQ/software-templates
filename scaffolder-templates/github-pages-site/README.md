## GitHub Pages Website

This scaffolder template will perform the following steps

1. Create a new GitHub repository with an `index.html` file in it.
2. Modify the content of the `index.html` file based on the website name the user provides when they run the scaffolder.
3. Make a HTTP request to the GitHub API to publish the `index.html` via GitHub pages.

## Pre-requisites for use outside of Roadie

If you are running this software template in Roadie, you will need to set a secret GITHUB_TOKEN so that the github proxy can authenticate against GitHub. If you are running a vanilla backstage you will need to create a new proxy congfiguration like the following:

```
proxy:
  '/github/api':
    target: https://api.github.com
    headers:
      Authorization: 'token ${GITHUB_TOKEN}'
```
