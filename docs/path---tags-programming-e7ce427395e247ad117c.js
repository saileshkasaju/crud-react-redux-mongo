webpackJsonp([20956934260092],{331:function(e,a){e.exports={pathContext:{posts:[{html:"<h2>What is programming? What is a programming language?</h2>\n<p>Some people have asked me if they should change their carrer path to programming. What are the things to take into consideration? Today the same question was asked again, and I seemed to have an answer I believe I should share.</p>\n<p><strong>For me programming is learining the language of the computer.</strong> I cannot say this summarizes it, but it tells a lot if you give it some thinking. Today we are surrounded with computers. Everyone seems to have atleast one computer. There are probably more computers than humans. Some people may want to question this. In childhood, I used to define computer as <em>a device that takes input, processes it, and produces output.</em> So for my understanding, many things we use in this digital age is a computer. For example our phones, smart tv, tablets, health bands, etc.</p>\n<p>Today we carry around devices that are extremely powerful, but many aren't fluent in the language that these devices understand. Yes computer and programming basics are now a part of curriculum in every field. But people forget and that is good actually. A manager doesn't need to know how the office application package works or what their smart phones are actually capable of doing.</p>\n<p>Learning a programming language is one thing, and taking on programming as a career is a whole different domain. Learning a programming language is the same as learning any other language. It will expand your potential. It gives you an oppertunity to exercise your mind. After learning any language, you can now go further interacting with others who know the same language. Maybe read some literature or something else prepared with this language. That definately doesn't mean this new language will, or should have any drastic impact on your life. However if you start living on the society that uses this language, this knowledge will be a great tool you will use every moment. That is where programming as a career comes in. When you make programming a profession or intend to, you are contracting to join this new society with an added vocabulary. Even if you didn't know their language, you start understanding the bits and pieces of it gradually. This is something anyone can do. If you want to experience a glimpse of the fun in the programming world, I would suggest <a href=\"https://hourofcode.com/\" title=\"Hour of code\">Hour of CODE</a>. Do check it out if you have not yet.</p>\n<h2>What programming language should you learn then?</h2>\n<p>Today, there are many programming languages to choose from. Its almost like chooosing a color for your new room. You should know that the same basic color green has many varients or shades when you are asked to choose. Definately you can't put all the varients in your walls. Similarly if you want to be a programmer you don't need to know many programming languages. You can choose any trending programming language.</p>\n<p>Currently some trending languages are javascript, python, go, java, .Net and R. I mostly recomment python or java for beginners. In case you plan to program the web, you need to start with html, css, and javascript. Which ever programming language you learn, the basics concepts are the same. Actually a programming language does not solve any problem. The algorithms and problem solving skills put in a program determines the quality of the program. The same algorithm and skills can produce the same program in different languages, and the performance will vary very little. In the end all it matters is if you solve the problem or not.</p>\n<h2>Start programming!</h2>\n<p>Galileo Galilei once said, \"We cannot teach people anything. We can only help them discover it within themselves.” In case of programming, every one from birth has curosity and logical reasoning for solving problems. Hence everyone has the ability to be a programmer. If you have an intrest to be a problem solver, start now. Find someone who can help you start. Find cources online, or join a hackathon. There are hundreds of ways to start. Just be smart with your decisions and make it quick.</p>",id:"/home/sailesh/workspace/crud-react-redux-mongo/my-blog/src/pages/2017-12-16-start-programming/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2017-12-16T18:30:59.165Z",path:"/start-programming",title:"Start Programming",excerpt:"Learning a programming language is one thing, and taking on programming as a career is a whole different domain. Learning a programming language is the same as learning any other language. It will expand your potential. It gives you an oppertunity to exercise your mind. After learning any language, you can now go further interacting with others who know the same language. Maybe read some literature or something else prepared with this language.",tags:["programmer","programming","why","start","coding"]}},{html:"<h2>How to GIT</h2>\n<p>I won't explain how to setup git in your system. It is quite easy. And I don't want to compare github with gitlab or bitbucket, or others. This will be a straight forward walkthrough with the way I understand the best use of GIT. You will just need the basic git setup in your system to follow. If you don't have git in your system already, I'll be here waiting till you do so.</p>\n<p>Ok then, your programming story starts with git. You first create a folder with an appropriate name, say 'TheIcarusProject'. Change directory to the folder and initialize the git repository.</p>\n<pre><code>$ mkdir TheIcarusProject\n$ cd TheIcarusProject\n$ git init\n</code></pre>\n<p>With the initialization, we are in the master branch. Now we can start adding some file to this branch. Master branch is the branch we can tag by version, and this usually goes to production. We will not add the program code in this branch. Lets just add a README.md and .gitignore file in this branch. <em>README.md</em> file generally contains the basic steps to setup our project. you may not have it, but i recommend you make this a habit. We can manage to avoid tracking unnecessary or secure files by mentioning them in the <em>.gitignore</em> file like for example <em>.env</em> file.</p>\n<pre><code>$ echo 'This is The Icarus Project' >> README.md\n$ echo '.env' >> .gitignore\n$ git add -A\n$ git commit -m \"Initial commit\"\n</code></pre>\n<p>This is all the code we do in the master branch. For the rest of the development we will shift to the development branch. In the development branch we will break down the project tasks into features. I, you, and some other person will work on our respective features and merge in the development branch. This development branch will be used in the staging environments and will go through all the major testing phase.</p>\n<pre><code>$ git checkout -b develop master\n$ git checkout -b feature/cover develop\n$ echo 'THE ICARUS PROJECT - LAURA QUIMBY' >> cover.html\n$\n</code></pre>\n<p>... story to be continued</p>",id:"/home/sailesh/workspace/crud-react-redux-mongo/my-blog/src/pages/2017-12-22-how-to-git/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2017-12-22T23:29:59.165Z",path:"/how-to-git",title:"How to git",excerpt:"Learning a programming language is one thing, and taking on programming as a career is a whole different domain. Learning a programming language is the same as learning any other language. It will expand your potential. It gives you an oppertunity to exercise your mind. After learning any language, you can now go further interacting with others who know the same language. Maybe read some literature or something else prepared with this language.",tags:["git","project","CI","programming","coding"]}}],tagName:"programming"}}}});
//# sourceMappingURL=path---tags-programming-e7ce427395e247ad117c.js.map