---
path: "/how-to-git"
date: "2017-12-22T23:29:59.165Z"
title: "How to git"
tags: ['git', 'project', 'CI', 'programming', 'coding']
excerpt: "I won't explain how to setup git in your system. It is quite easy. And I don't want to compare github with gitlab or bitbucket, or others. This will be a straight forward walkthrough with the way I understand the best use of GIT. You will just need the basic git setup in your system to follow. If you don't have git in your system already, I'll be here waiting till you do so."
---

## How to GIT

I won't explain how to setup git in your system. It is quite easy. And I don't want to compare github with gitlab or bitbucket, or others. This will be a straight forward walkthrough with the way I understand the best use of GIT. You will just need the basic git setup in your system to follow. If you don't have git in your system already, I'll be here waiting till you do so.

Ok then, your programming story starts with git. You first create a folder with an appropriate name, say 'TheIcarusProject'. Change directory to the folder and initialize the git repository.

```
$ mkdir TheIcarusProject
$ cd TheIcarusProject
$ git init
```

With the initialization, we are in the master branch. Now we can start adding some file to this branch. Master branch is the branch we can tag by version, and this usually goes to production. We will not add the program code in this branch. Lets just add a README.md and .gitignore file in this branch. _README.md_ file generally contains the basic steps to setup our project. you may not have it, but i recommend you make this a habit. We can manage to avoid tracking unnecessary or secure files by mentioning them in the _.gitignore_ file like for example _.env_ file.

```
$ echo 'This is The Icarus Project' >> README.md
$ echo '.env' >> .gitignore
$ git add -A
$ git commit -m "Initial commit"
$ git remote add origin git@github.com:saileshkasaju/TheIcarusProject.git
$ git push -u origin master
```

This is all the code we do in the master branch. For the rest of the development we will shift to the development branch. In the development branch we will break down the project tasks into features. I, you, and some other person will work on our respective features and merge in the development branch. This development branch will be used in the staging environments and will go through all the major testing phase.

```
$ git checkout -b develop
$ git push -u origin develop
```

Now we can start working in other features for the project say make the cover page. We will checkout to a new branch _feature/cover_. Then we make our file, add it to the repo and commit as usual.

```
$ git checkout -b feature/cover develop
$ echo 'THE ICARUS PROJECT - LAURA QUIMBY' >> cover.html
$ git add cover.html
$ git commit -m "New Cover page file"
```

Next we start working on another feature say backcover. For this too we will checkout to a new branch _feature/backcover_. Then we start out work. Keeping feature branches separate keeps all commits related to the tasks related to specific feature isolated.

```
$ git checkout -b feature/backcover develop
$ echo 'Back cover contents' >> backcover.html
$ git add backcover.html
$ git commit -m "New Backcover file"
```

When we are done with the feature, the feature branch is merged to the develop branch. this is done usually with a pull request with a code review by another developer. We'll just merge the completed _feature/cover_ manually.

```
$ git checkout develop
$ git merge feature/cover
```

It is a good idea to sync with the develop branch in the remote origin. Always make a pull request to develop branch before you start the days work.

```
$ git pull origin develop
$ git push
```

We may want to rebase our local branch from develop if you believe updates from the remote origin could potentially cause conflicts with your changes. Or you just want to pull down the latest updates from _develop_.

If we check the logs of _feature/backcover_ branch, we see that this has only the commit of new backcover.html file.

```
$ git checkout feature/backcover
$ git log
```

Lets rebase from develop. This will reqind the feature branch, apply all the updates from develop, and then replay your commits on top of the last commit. Verify this by checking the logs again.

```
$ git rebase develop
$ git log
```

Lets merge our _feature/backcover_ branch to _develop_ and push it upstream.

```
$ git checkout develop
$ git merge feature/backcover
$ git push
```

It looks that our project is ready for its first release. So we will create a release branch _release/1.0_. Every release branch contains a release version in our case 1.0.

```
$ git checkout -b release/1.0 develop
```

Since release will have its own brach, we will not have to worry about updates from develop conflicting with the specific release. We can now push this upstream and deploy the release to a staging environment for testing.

```
$ git push -u origin release/1.0
```

Lets say our QA team did some testing and didn't like our cover. Lets update our cover.html file.

```
$ echo 'THE ICARUS PROJECT' >> cover.html
```

We will then go ahead and commit this directly to the release branch.

```
$ git commit -am "update cover file"
```

If we work in a larger team, we may create a new feature branch and submit a pull request to the release branch.
We will push the release repository upstream and repeat the process until our release branch is and passes its testing on staging and is ready for release in production. When the update is complete we merge it back to develop. As we want all the updates and bug fixes done during relese phase back in the working tree.

```
$ git push
$ git checkout develop
$ git merge release/1.0
$ git push
```

Since the code in release brach is fully tested and ready for production, we also want to merge it to our master branch whick should only ever contain production ready code.

```
$ git checkout master
$ git merge release/1.0
$ git push
```

Then we tag the release.

```
$ git tag v1.0.0
```

We can then push the tag upstream and use this tag to deploy our code to production.

```
git push origin v1.0.0
```

The only commits to master are from release branch or from hotfix branch. Hot fixes are intended only for emergency fixes and follow a similar format as feature branches prefixed with a _hotfix/_. they branch out from master and merged back to master.

```
$ git checkout -b hotfix/fix-cover master
$ vi cover.js
$ git commit -am "Title just once"
$ git checkout master
$ git merge hotfix/fix-cover
$ git push
```

Then tag and push our new release.

```
$ git tag v1.0.1
$ git push origin v1.0.1
```

We also want the hotfix to be applied to the develop branch so it is not lost with future updates.

```
$ git checkout develop
$ git merge hotfix/fix-cover
$ git push
```

When release are complete, it is a good practice to delete all merged in branches. If we use pull request model, we can delete the feature branches at the time of the pull request acceptance. Otherwise just remove the braches manually locally and remotely

```
$ git branch -d feature/cover
$ git branch -d feature/backcover
$ git branch -d hotfix/fix-cover
```
