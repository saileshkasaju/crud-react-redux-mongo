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
```

This is all the code we do in the master branch. For the rest of the development we will shift to the development branch. In the development branch we will break down the project tasks into features. I, you, and some other person will work on our respective features and merge in the development branch. This development branch will be used in the staging environments and will go through all the major testing phase.

```
$ git checkout -b develop master
$ git checkout -b feature/cover develop
$ echo 'THE ICARUS PROJECT - LAURA QUIMBY' >> cover.html
$
```

... story to be continued
