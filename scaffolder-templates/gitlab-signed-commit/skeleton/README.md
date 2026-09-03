# gitlab-signed-commit test repo

Created by the `gitlab-signed-commit` scaffolder template to exercise PGP
commit signing in the `publish:gitlab` action.

The initial commit was made with:

- author: `${{ values.gitAuthorName }} <${{ values.gitAuthorEmail }}>`
- signing requested: `${{ values.signCommit }}`

To check the signature from a clone:

```
git log --show-signature -1
```

`gpg: Good signature` means the commit was signed with the key held in the
tenant's `GITLAB_COMMIT_SIGNING_KEY` secret. GitLab additionally needs the
public half of that key on the profile of `${{ values.gitAuthorEmail }}` before
it will show the commit as Verified.
