{
  "name": "${{ values.repo_name }}",
  "version": "0.0.1",
  "description": "A static HTML website. Just like the good old days.",
  "main": "index.js",
  "repository": "https://github.com/${{ values.repo_owner }}/${{ values.repo_name }}",
  "author": "${{ values.repo_owner }}",
  "license": "MIT",
  "private": true,
  "devDependencies": {
    "cypress": "^9.4.1",
    "parcel": "^2.2.1"
  },
  "scripts": {
    "start": "parcel index.html",
    "test": "cypress open"
  }
}
