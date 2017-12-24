webpackJsonp([37651519232682],{325:function(e,t){e.exports={pathContext:{posts:[{html:"<h2>How to GIT</h2>\n<p>I won't explain how to setup git in your system. It is quite easy. And I don't want to compare github with gitlab or bitbucket, or others. This will be a straight forward walkthrough with the way I understand the best use of GIT. You will just need the basic git setup in your system to follow. If you don't have git in your system already, I'll be here waiting till you do so.</p>\n<p>Ok then, your programming story starts with git. You first create a folder with an appropriate name, say 'TheIcarusProject'. Change directory to the folder and initialize the git repository.</p>\n<pre><code>$ mkdir TheIcarusProject\n$ cd TheIcarusProject\n$ git init\n</code></pre>\n<p>With the initialization, we are in the master branch. Now we can start adding some file to this branch. Master branch is the branch we can tag by version, and this usually goes to production. We will not add the program code in this branch. Lets just add a README.md and .gitignore file in this branch. <em>README.md</em> file generally contains the basic steps to setup our project. you may not have it, but i recommend you make this a habit. We can manage to avoid tracking unnecessary or secure files by mentioning them in the <em>.gitignore</em> file like for example <em>.env</em> file.</p>\n<pre><code>$ echo 'This is The Icarus Project' >> README.md\n$ echo '.env' >> .gitignore\n$ git add -A\n$ git commit -m \"Initial commit\"\n$ git remote add origin git@github.com:saileshkasaju/TheIcarusProject.git\n$ git push -u origin master\n</code></pre>\n<p>This is all the code we do in the master branch. For the rest of the development we will shift to the development branch. In the development branch we will break down the project tasks into features. I, you, and some other person will work on our respective features and merge in the development branch. This development branch will be used in the staging environments and will go through all the major testing phase.</p>\n<pre><code>$ git checkout -b develop\n$ git push -u origin develop\n</code></pre>\n<p>Now we can start working in other features for the project say make the cover page. We will checkout to a new branch <em>feature/cover</em>. Then we make our file, add it to the repo and commit as usual.</p>\n<pre><code>$ git checkout -b feature/cover develop\n$ echo 'THE ICARUS PROJECT - LAURA QUIMBY' >> cover.html\n$ git add cover.html\n$ git commit -m \"New Cover page file\"\n</code></pre>\n<p>Next we start working on another feature say backcover. For this too we will checkout to a new branch <em>feature/backcover</em>. Then we start out work. Keeping feature branches separate keeps all commits related to the tasks related to specific feature isolated.</p>\n<pre><code>$ git checkout -b feature/backcover develop\n$ echo 'Back cover contents' >> backcover.html\n$ git add backcover.html\n$ git commit -m \"New Backcover file\"\n</code></pre>\n<p>When we are done with the feature, the feature branch is merged to the develop branch. this is done usually with a pull request with a code review by another developer. We'll just merge the completed <em>feature/cover</em> manually.</p>\n<pre><code>$ git checkout develop\n$ git merge feature/cover\n</code></pre>\n<p>It is a good idea to sync with the develop branch in the remote origin. Always make a pull request to develop branch before you start the days work.</p>\n<pre><code>$ git pull origin develop\n$ git push\n</code></pre>\n<p>We may want to rebase our local branch from develop if you believe updates from the remote origin could potentially cause conflicts with your changes. Or you just want to pull down the latest updates from <em>develop</em>.</p>\n<p>If we check the logs of <em>feature/backcover</em> branch, we see that this has only the commit of new backcover.html file.</p>\n<pre><code>$ git checkout feature/backcover\n$ git log\n</code></pre>\n<p>Lets rebase from develop. This will reqind the feature branch, apply all the updates from develop, and then replay your commits on top of the last commit. Verify this by checking the logs again.</p>\n<pre><code>$ git rebase develop\n$ git log\n</code></pre>\n<p>Lets merge our <em>feature/backcover</em> branch to <em>develop</em> and push it upstream.</p>\n<pre><code>$ git checkout develop\n$ git merge feature/backcover\n$ git push\n</code></pre>\n<p>It looks that our project is ready for its first release. So we will create a release branch <em>release/1.0</em>. Every release branch contains a release version in our case 1.0.</p>\n<pre><code>$ git checkout -b release/1.0 develop\n</code></pre>\n<p>Since release will have its own brach, we will not have to worry about updates from develop conflicting with the specific release. We can now push this upstream and deploy the release to a staging environment for testing.</p>\n<pre><code>$ git push -u origin release/1.0\n</code></pre>\n<p>Lets say our QA team did some testing and didn't like our cover. Lets update our cover.html file.</p>\n<pre><code>$ echo 'THE ICARUS PROJECT' >> cover.html\n</code></pre>\n<p>We will then go ahead and commit this directly to the release branch.</p>\n<pre><code>$ git commit -am \"update cover file\"\n</code></pre>\n<p>If we work in a larger team, we may create a new feature branch and submit a pull request to the release branch.\nWe will push the release repository upstream and repeat the process until our release branch is and passes its testing on staging and is ready for release in production. When the update is complete we merge it back to develop. As we want all the updates and bug fixes done during relese phase back in the working tree.</p>\n<pre><code>$ git push\n$ git checkout develop\n$ git merge release/1.0\n$ git push\n</code></pre>\n<p>Since the code in release brach is fully tested and ready for production, we also want to merge it to our master branch whick should only ever contain production ready code.</p>\n<pre><code>$ git checkout master\n$ git merge release/1.0\n$ git push\n</code></pre>\n<p>Then we tag the release.</p>\n<pre><code>$ git tag v1.0.0\n</code></pre>\n<p>We can then push the tag upstream and use this tag to deploy our code to production.</p>\n<pre><code>git push origin v1.0.0\n</code></pre>\n<p>The only commits to master are from release branch or from hotfix branch. Hot fixes are intended only for emergency fixes and follow a similar format as feature branches prefixed with a <em>hotfix/</em>. they branch out from master and merged back to master.</p>\n<pre><code>$ git checkout -b hotfix/fix-cover master\n$ vi cover.js\n$ git commit -am \"Title just once\"\n$ git checkout master\n$ git merge hotfix/fix-cover\n$ git push\n</code></pre>\n<p>Then tag and push our new release.</p>\n<pre><code>$ git tag v1.0.1\n$ git push origin v1.0.1\n</code></pre>\n<p>We also want the hotfix to be applied to the develop branch so it is not lost with future updates.</p>\n<pre><code>$ git checkout develop\n$ git merge hotfix/fix-cover\n$ git push\n</code></pre>\n<p>When release are complete, it is a good practice to delete all merged in branches. If we use pull request model, we can delete the feature branches at the time of the pull request acceptance. Otherwise just remove the braches manually locally and remotely</p>\n<pre><code>$ git branch -d feature/cover\n$ git branch -d feature/backcover\n$ git branch -d hotfix/fix-cover\n</code></pre>",id:"/home/sailesh/workspace/crud-react-redux-mongo/my-blog/src/pages/2017-12-22-how-to-git/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2017-12-22T23:29:59.165Z",path:"/how-to-git",title:"How to git",excerpt:"I won't explain how to setup git in your system. It is quite easy. And I don't want to compare github with gitlab or bitbucket, or others. This will be a straight forward walkthrough with the way I understand the best use of GIT. You will just need the basic git setup in your system to follow. If you don't have git in your system already, I'll be here waiting till you do so.",tags:["git","project","CI","programming","coding"]}},{html:"<h2>What is programming? What is a programming language?</h2>\n<p>Some people have asked me if they should change their carrer path to programming. What are the things to take into consideration? Today the same question was asked again, and I seemed to have an answer I believe I should share.</p>\n<p><strong>For me programming is learining the language of the computer.</strong> I cannot say this summarizes it, but it tells a lot if you give it some thinking. Today we are surrounded with computers. Everyone seems to have atleast one computer. There are probably more computers than humans. Some people may want to question this. In childhood, I used to define computer as <em>a device that takes input, processes it, and produces output.</em> So for my understanding, many things we use in this digital age is a computer. For example our phones, smart tv, tablets, health bands, etc.</p>\n<p>Today we carry around devices that are extremely powerful, but many aren't fluent in the language that these devices understand. Yes computer and programming basics are now a part of curriculum in every field. But people forget and that is good actually. A manager doesn't need to know how the office application package works or what their smart phones are actually capable of doing.</p>\n<p>Learning a programming language is one thing, and taking on programming as a career is a whole different domain. Learning a programming language is the same as learning any other language. It will expand your potential. It gives you an oppertunity to exercise your mind. After learning any language, you can now go further interacting with others who know the same language. Maybe read some literature or something else prepared with this language. That definately doesn't mean this new language will, or should have any drastic impact on your life. However if you start living on the society that uses this language, this knowledge will be a great tool you will use every moment. That is where programming as a career comes in. When you make programming a profession or intend to, you are contracting to join this new society with an added vocabulary. Even if you didn't know their language, you start understanding the bits and pieces of it gradually. This is something anyone can do. If you want to experience a glimpse of the fun in the programming world, I would suggest <a href=\"https://hourofcode.com/\" title=\"Hour of code\">Hour of CODE</a>. Do check it out if you have not yet.</p>\n<h2>What programming language should you learn then?</h2>\n<p>Today, there are many programming languages to choose from. Its almost like chooosing a color for your new room. You should know that the same basic color green has many varients or shades when you are asked to choose. Definately you can't put all the varients in your walls. Similarly if you want to be a programmer you don't need to know many programming languages. You can choose any trending programming language.</p>\n<p>Currently some trending languages are javascript, python, go, java, .Net and R. I mostly recomment python or java for beginners. In case you plan to program the web, you need to start with html, css, and javascript. Which ever programming language you learn, the basics concepts are the same. Actually a programming language does not solve any problem. The algorithms and problem solving skills put in a program determines the quality of the program. The same algorithm and skills can produce the same program in different languages, and the performance will vary very little. In the end all it matters is if you solve the problem or not.</p>\n<h2>Start programming!</h2>\n<p>Galileo Galilei once said, \"We cannot teach people anything. We can only help them discover it within themselves.” In case of programming, every one from birth has curosity and logical reasoning for solving problems. Hence everyone has the ability to be a programmer. If you have an intrest to be a problem solver, start now. Find someone who can help you start. Find cources online, or join a hackathon. There are hundreds of ways to start. Just be smart with your decisions and make it quick.</p>",id:"/home/sailesh/workspace/crud-react-redux-mongo/my-blog/src/pages/2017-12-16-start-programming/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2017-12-16T18:30:59.165Z",path:"/start-programming",title:"Start Programming",excerpt:"Learning a programming language is one thing, and taking on programming as a career is a whole different domain. Learning a programming language is the same as learning any other language. It will expand your potential. It gives you an oppertunity to exercise your mind. After learning any language, you can now go further interacting with others who know the same language. Maybe read some literature or something else prepared with this language.",tags:["programmer","programming","why","start","coding"]}}],tagName:"coding"}}}});
//# sourceMappingURL=path---tags-coding-a0aa3fd833b632d37299.js.map