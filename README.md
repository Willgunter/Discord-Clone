## Description

An independent coding project for my own personal self learning (and resume), serving as a replica of the widely used platform Discord  
Tech Stack: MongoDB, Express, Angular, and Node.js (MEAN)

- Note to self: to run: 
    - cd into "Angular Frontend" and run "ng serve"
    - in a different terminal cd into "Node Backend" and run "nodemon app.js"

## Ideas (check when completed)

- checklist before I finish:
        
    - ✅✅✅Fix login screen✅✅✅
    - ✅✅✅Turn server icons from emojis into pictures✅✅✅
    - ✅✅✅make a fake little profile picture for users and current user - shouldn't be that hard for Users column✅✅✅
    - ✅✅✅let users change colro of either profile pictures / font color in bottom left corner✅✅✅ (profile picture + user box border color)
        ✅✅✅add gear icon that links to profile✅✅✅
    - ✅✅✅fix up messages and stuff (attach a user to a message✅✅✅, make box look better, etc...)
    - ✅✅✅Clean up routing✅✅✅ / ✅✅✅add add server✅✅✅ / add channel feature ( not going to do )
    - ✅✅✅Change "Enter text" to "Message {channel name}"✅✅✅
    - ✅✅✅(maybe) clean up routing for nine different routes and make it so that its more scalable ✅✅✅
    - ✅✅✅make things more discord like (change font / color of name of channel)✅✅✅
    - ✅✅✅highlight messages when you mouse them similar to channels bar✅✅✅ (add edit / delete functionality?)
    - ✅✅✅need to make spaces not allowed in server creation menu✅✅✅
    - ✅✅✅add delete server functionality (disable duplicate names --> use configServers list of servers that server list component has)✅✅✅
    - ✅✅✅instead of making messages faster (lame) put a "messages loading" and "message queing to send" alert or message when messages are not null or something idk✅✅✅
    - ✅✅✅make "profile" route more pretty✅✅✅
    - ✅✅✅clean up comments / spacing / consolelogs / unused code✅✅✅

- ✅✅✅Break up screen into 5 parts just like Discord (narrow left side bar, left list of channels, main chat area, list of users, and small little bar the left w settings and stuff) *will work on when I can display a freaking message*✅✅✅

- ✅✅✅Figure out how to display new inputted message on frontend server instead of backend *should probably be somewhat easy maybe idk*✅✅✅

- ✅✅✅Add a little more to the wrong turn page to make it seem more distinct? (ex: say: "These might help: <links>")✅✅✅

- ✅✅✅go back and do most of / all the small TODOs in the TODO extension✅✅✅

- ✅✅✅Get it to work with different screen sizes✅✅✅

## Resources I used
- [How to connect Frontend & Backend](https://www.youtube.com/watch?v=fhRdqbEXp9Y)  
- [GitHub repo of above video](https://github.com/CodAffection/MEAN-Stack-CRUD-Operations)
- [Angular Tutorial by Traversy Media](https://www.youtube.com/watch?v=3dHNOWTI7H8&t=3s)  
- [Guide for login / logout and user authentication](https://www.youtube.com/playlist?list=PLillGF-RfqbZMNtaOXJQiDebNXjVapWPZ)
- [Angular Docs](https://angular.io/)
- [Online Guide](https://www.samarpaninfotech.com/blog/methods-to-share-data-between-angular-components/#h-method-4-unrelated-components-via-a-service)
- [How to upload images to server](https://medium.com/swlh/how-to-upload-image-using-multer-in-node-js-f3aeffb90657)

## Timeline  

- 8/10/2023

    - Initialized Angular + Node parts + pushed to GitHub

    - Current issue: trying to find the smallest part of having Node and Angular talk to one another

- 8/11/2023

    - Combed through freeCodeCamp (fCC) video to how to connect Angular and Node and eventually found out how to

    - Decided a good first goal is to create the message bar

    - Need to do to finish 1st little message box:
        - Make index.js route, make app.js talk to Angular
        - Fix onSubmit() error in message-box.component.html
        - Working @ 54:41 in freeCodeCamp video

- 8/12/2023

    - **Fixed onSubmit() error in message-box.component.html**

    - Set up backend server

    - Trying to make app.js talk to Angular but running into a problem in testroute.js titled "MessageSchema is not a constructor". Tomorrow I am planning on combing through more of the fCC video to see how the guy manages it, maybe that will help?

    - Looking more into the issue, working theory is issue w MongoDB
    setup

- 8/13/2023

    - Looking more into issue w MongoDB. Tried lots and lots of things but still
    making seemingly no progress. Will hopefully work on again a little later today

    - Update: got it to not give an error.
    However, it is still not displaying on 
    localhost3000/test, which is strange. Will do even more digging later.
    
    - Update 2: working through a specific part of code that appears to be making it display to the screen under certain conditions. Currently investigating similar parts in other projects to see what I can replicate

- 8/14/2023
    - **🎉🎉🎉🎉🍻🍻I GOT IT TO WORK🍻🍻🎉🎉🎉🎉**
    
    - (When I submit a thing in the message box and refresh the page, a new message displays in the backend along with 
    the rest of the messages)

    - Still need to figure out how to get the actual new message to display though...

    - Still working on req.body.text is undefined problem...
    
- 8/15/2023

    - **Fixed weird glitch where .env was still able to be seen (command: git rm --cached .env)**

    - Next small problem: figure out why exports.post in messageController is not being read (might help with req.body.text)
    (or we could like just focus on req.body.text)

    - Update on both exports.post and req.body.text problems: with req.body.text, it has to be inside of a post request, not a get request, and with exports.post you have to use an outside source (Postman in this case) to read post requests for some reason

    - Still need to figure out how to display it on the frontend tho

    - Started work on organization of frontend. Current task is trying to figure out how to put the send message button right beside the input message form

    - Update: made tremendous progress of organizing main frontend page. Next task is of couse putting the send message button right beside the input message form

- 8/16/2023

    - Less time today bc coming back home & haircut & shopping

    - Found out how to do the thing where the main box fills both the left and right sides. Next step: resize message box to be similar to discord and also figure out how to get "send message" button to display next to message box

- 8/17/2023

    - Less time today bc marching band camp, but still made some progress

    - Made content box component (main area where messages will be displayed) and made ui closer to discords ui (only really works on my laptop screens display tho). 

    - **Fixed problem where I couldn't get send message button to be next to input message form**
    
    - Next step: have messages display to the content box area (then work on routing)
    
    - Update: currently working on above, but can't even get messages to send to MongoDB
    properly. Tried to fix that and now am getting actual errors (how did we step backwards?)

    - Update 2 (literally 11pm the night b4 day 2 band camp): **fixed problem where it won't connect to MongoDB (.connect means the connection url (username + pwd), not the the connection string (thing w 2710 whatever + name of database))**

- 8/18/2023

    - Current problem: typing a message + pressing send is not sending the message (what is it doing?) (Sln: keep watching the video)

    - Update: made the url correct in config.service.ts file and therefore whenever I type message + press send, the backend server updates, but still cannot display it in the console

    - Update: can't focus for some reason (bc im blasting music) and that kinda messed up my focus session for tonight. Currently @ ~52:07, maybe that will help us display data (please actually watch the video next time). Watched video, followed instructions and code is not working as intended. Maybe it has to do w the div heirarchy in message-box?


- 8/19/2023

    - Update: Apparently "Message send" displays and an empty message is pushed when the button is pushed w empty text, how is that possible???

    - theory: .subscribe is deprecated --> replacing w try catch or whatever 
    oh wait but onSubmit() isnt even being read so Im going after like the wrong problem I think

- 8/21/2023

    - Update: Digging deeper into the problem, looking around in both frontend and backend to see what code is and is not being read.

- 8/22/2023

    - Found the part in the video where it actually solves the problem, tried that and it did not work. Now the backend server is like not loading or something like how does that even work

    - Update: found out where the backend server not starting problem is (messageController.js, apparently MessageModel.find() is not a valid line) 

    - Update 2: **🎉🎉🎉🎉🍻🍻I GOT IT TO WORK🍻🍻🎉🎉🎉🎉** Messages will now display in the content-box in the frontend. (however the messages have no scroll bar and currently go above and below the message input box lol) currently working on getting messages to have a scroll bar lol, should hopefully be not as difficult

- 8/25/2023

    - **🎉🎉🎉🎉🍻🍻Made scroll bar🍻🍻🎉🎉🎉🎉** I played around with the html and apparently I was attaching the overflow css tag in the wrong html object --> also used borders to help vizualize how the content-box object was divided up on screen
    (still need postman to send messages tho...)

    - Proceeding to work on routing - will work on getting messages to send without postman later (not a priority, but could also likely be an easy fix (1:01:49 in the video))

- 8/26/2023

    - Got routing to start working: made different routes for the different servers and different routes for the channels within each server. Right now it all really displays the same thing so tailoring each link and each set of messages for each server and channel is going to be the next step in the process

    - Update: trying to use if statements in combination with obtaining current route value in order to display channel links and whatnot (might also have to do something with user-column and main message box as well): I think I found out how to obtain current route value

    - Update: the way I found out did not work as I intended and I am going back
    to the drawing board

- 8/31/2023

    - I am picking back up where I started and am browsing through the wiki and I learned about "template" objects in Angular. Maybe this can help me with trying to display different databases to the respective routes? Backup option: try to learn more about Angular services and see how they can help? Or Structural directives (apparently structural directives are basically ng templates in disguise)? New idea: have like a global variable and have it update every time we change the route (but how would we detect changes in routes?)

    - Update: found out how to detect navigation changes. small problem, it updates like 10 times every time I change pages. Also, it doesn't detect which server I am in

    - Update: found out a thing that works. Still updates like 10 times every time I change pages, but will probably find a solution around that. Still not quite at custumizing it for each server tho

    - Update: Made big progress today w/ finding out how to get current route. Now all I need to do is find out how to use *ngIf statements properly

- 9/1/2023
    
    - Used a boolean variable to show if current route is a certain route (ex: skewl), which proved to be successful in working with *ngIf statements

    - Now am figuring out how to organize the 8 other mongodb collections so I can start storing messages for multiple servers / channels and didn't find out a good way to do that. Instead I created a way where I store the current server and channel in the message object itself and use mongodb commands to filter out messages w a certain server / channel for each respective server and channel. For this, I do need to eventually figure out how to get the current server and channel to come through to the backend though. Hopefully that shouldn't be too much of a problem. I might also have to use 9 different post requests to filter it by server and channel but even if that does sound redundant and kind of dumb and there is probably a way easier and less complex way to do it, I am kind of ok with it because I am still learning.

    - Also, thing to note: for some reason it is really easy to become focused at the house during the evening times (7pm-10pm + beyond) hopefully I can use this to my advantage in the future

- 9/9/2023

    - Moved detect router code from component-box.component.ts to main.component.ts in order to give message-box and content-box access to current route values and in order to not need duplicate code (currently I don't know how to transmit values from one component to another)

    - Losing ability to focus pretty badly so next step is to continue 1) adding current server and channel data to message when we send the message in message-box and 2)
    filtering message data according to current server and channel value in content-box. I am doing this by putting the current route detection code in main.Content.html and relaying the current route value into the app-content-box and message-box components in main.component.html. Currently not exactly sure how to do this.

- 9/11/2023

    - Trying to transmit currentroute data from main to content box and message box. Found an online guide (see Resources) on how to do it and working through method 4. will probably try to do method 1 instead when I next get the chance

- 10/3/2023

    - Tried translating message data using @Input declaration and I didn't get it to work.
    (as in literally everything would dissapear when I tried it) will continue trying next time

    - Update: I think it has to do with me trying to send boolean objects to a child class.
    when I send a normal string object, e... wait let me just try to assign it to false

    - New Update: I found out that when I define the booleans in @Input, than it may or may not display based on whether it was initialized to true, false, or it was unitialized. I assumed that when I initialized it, the value will change based on the 
    inputted value regardless but apparently the inputted value doesn't matter? Either way, even if it didn't work, I still learned something (maybe output will work??)
    Also, maybe method 3 could work.

- 10/4/2023

    -  **🎉🎉🎉🎉🍻🍻I GOT IT TO WORK!!!🍻🍻🎉🎉🎉🎉** Instead of using if statements, which were clunky and extremely repetitive, I somehow stumbled on ngSwitch and ngSwitchCase statements, which not only reduced 9 booleans down to 1 string, but erradicated loads of other discusting nested if / else statements I was planning on using. I cannot describe to you how much more simplified and convenient this is.
    Next step is to figure out how to embed server / channel data into the Message object --> this will give us the thing to filter in the ngSwitchCase statements.

    - Update: tried to send a request via PostMan with server and channel data and it did not work that is okay though I did not fully expect it to.

- 10/5/2023

    - Reorganized content box and message box component to be closer to main component in files. This should help with organization. Currently in the midsts of debugging why my message is not sending with route and server information and I am making lots of progress. (Why did it take me so long to realize console.log() in typescript outputs to the browser and not the vscode terminal...)

    - Update: working to debug why we cannot post the Message object to the backend directly from the frontend, next step is to check the repo from the vid about how to connect frontend to backend so maybe that will help us figure out what is happening

    - Update: worked on debugging why it cannot send, and got it to send with the message box, but it still won't change the server value in the backend (it will change the channel value tho). Like I searched through every file and couldn't even find the string "default server" so I have no idea what is happening

- 10/6/2023

    - Ok so the problem is actually in a PREVIOUS VERSION of messageController.js, which is good to know, but makes no sense on how the code is not acessing the new post (and get) methods.
    This is now the current problem

    - Ok so the problem is NOT in a previous version of messageController.js, it was just looked like it was running that version of code because the Node server doesn't automatically update the code the way angular does. Oh wait it does with the "nodemon app.js" command...
    - ...
    - ...
    - fml

    - **🎉🎉🎉🎉🍻🍻I GOT IT TO WORK!!!🍻🍻🎉🎉🎉🎉** This was the most mind boggling problem I have ran into so far and I had no idea how to solve it. I read through literally every single file in both the frontend and backend and even that gave me no clue on what was going wrong, but I fixed it by... drumroll please... **turning it off and on again**... wow.

    - Small update but I just cleaned up the code, got rid of a bunch of test error messages and made sure the code works for all 9 servers + channels (it does) and wow getting this to work feels amazing. Now to see if we can do it without hitting refresh, that would be a cool bonus but I guess not super necessary.
    Next step is getting it to change to its specific channel when it is in a given server. This shouldn't be too challenging but given how long this took idfk.
    Another small next step is making sure the messages go all the way to the right instead of just stopping when the longest message ends. Not sure how to implement this but it should be easy given that its html / css

    - going to do schoolwork now, hopefully I don't fail my assignments because of this major discovery (worth it btw)

- 10/8/2023

    - Made more visual changes such as copying color of Discords objects onto my objects, adding color change when hovering over certain links, and only being able to switch to channels withing a server instead of channels outside of a server

    - Update: got rid of ugly send button (users can still submit messages with enter)
    Next issue: getting components to extend to the bottom of the screen wo making scrollbar appear (or I could just keep it hidden)

- 10/9/2023

    - Made server, user, and server column extend to the bottom of the screen. Main column is proving to be a challeng because of the messages having a scroll bar and of both input form componenet and message component in the same column.

    - Maybe when I come back from my break, I could use borders w colors to help organize things

    - Found out how to get it to work ( calc() in css can combine 100vh and pixel values), frontend now looks like its coming together now

    - Copying more and more of look and feel of Discord, this time I am making the message bar look more realistic and the channel links look more realistic, especially when you hover over them. Also, I added a global background color so if I zoomed in too fast, the edges of html components wouldn't flash white. It's really the small things that matter most. Next thing to work on is wild card routes in order to get us ready for user authentication. We should probably send Mr. Hodgin our resume before we do that though

    - Update: added wildcard route + login + notfound component. Intenet is acting up so will continue in the morning

- 10/10/2023

    - Made more progress on register and login route (register specifically). Running into a problem where the top of a div component is not extending to the top of the screen and idk why.

- 10/11/2023

    - Solved problem where div component is not extending to top of screen --> solution, set top padding value of outer div that controls background to like ~11%. This makes it behave slighly differently than Discord's actual create an account screen but I guess it works for my purposes, also I don't want to spend any more time on html and css than I already have so I am not worrying abt it.

- 10/14/2023

    - Added labels for the inputs and removed placeholders. Settled on default date type for date input. Next step is to construct a User object with the given information and send it to the server. Going to start working on something else bc I am learning that html and css are boring to me for some reason, not sure why.

- 10/16/2023

    - Looking through past tutorials to see how to authenticate using passport.js. No actual coding today unfortunately :C .

- 12/10/2023 + 12/11/2023 + 12/12/2023 

    - Had a lot of trouble trying to figure out how to set up all the packages and things I needed to download (Node, Angular, mongoose, express, etc...) on my other computer. Thankfully with the help of GitHub Copilot I figured it out in three days and also changed a couple small things in the login screen. Will start working on the user object and will figure out how to ✅✅✅1) display users on the side of the screen and 2) attach each message to a user and 3) do login and logout after I finish studying for my last exam.
 
- 12/14/2023
    - Started to add User object but ran into lots of trouble

- 12/15/2023
    - Completed adding User object and got it to display. Also did many small things like change text color to make it more readable, threw table borders away, and changed the emojis of server 1 and server 3. Still need to do 2) login and logout and 3) attach each message to a user though (I think switching the order is better) I think I might have already done 3 though thanks to MongoDB I think it was / is an easy process.any

- 12/16/2023
    - Starting to add login / logout but am getting sort of confused. Things are not working as intended. Will come back later and hopefully debug and read more into the issues.

- 12/18/2023
    - Worked a lot more on login / logout and after a while discovered it isn't natively possible to send something from Node to Angular so went to bard for ways to do it. Going to hopefully implement one soon

- 12/19/2023
    - Learned that I could use LocalStorage in Angular to implement user login / logout which is much easier and probably faster than the methods I saw.
    - Update: I found a small set of youtube videos that take me through a course of how to do login / logout but in order to do the problem I have I might have to watch the rest and do a bit of rewriting I think maybe???
    - 2nd Update: found the github for the video, should make the process a lot faster I think
    - Note: 2:55 on second video

- 12/31/2023
    - Back from band trip. 15:30ish on part 2, just Pushing to save
    - Finished part 2, how at start of part 3

- 1/6/2024
    - At end of part 3, running into issues in two spots w/ Postman
    - Update: fixed one issue, but still have another

- 1/7/2024
    - Fixed authenticate by turning callbacks into promises
    - Fixed other issue
    - Ran into another issue something related to circular data structures in JSON 
    - Fixed issue - had to do with a function not having async / await before it (why did that fix the problem???)
    - Now on Part 5
    - Finished Part 5 (mostly frontend stuff) now into Part 6
    - Going to bed now but @ 13.24 (Implement Flash Messages) part of Part 6
    - Praying to God this next semester isn't nearly as bad as the last one.

- 1/8/2024
    - Finished Part 6 onto Part 7
    - Finished Part 7 onto Part 8

- 1/10/2024
    - Part of the way through Part 8 and .storeUserData method is not working. Trying to debug but nothing seems to get desired result.
    Will come back later.

- 1/11/2024
    - Fixed problem of auth / login not working --> we had a .json method in the auth service but it wasn't necessary because we imported a property called "map". Probably because it was out of date or something idfk. Solved it by using copilot ofc.
    - Solved big problem relating to login not working. Now have to solve css problem of how to make an angular component snap to the bottom of the screen without extending the scrollbar.

- 1/14/2024
    - Found out a setting on how to make bottom part of component snap to bottom part of screen (bottom: 0).
    Thank you copilot.
    - Started Part 9 and ran into another error of Angular functions being out of date again. Figured out what to do becuase of a comment and then had to figure out I had to swap the places of the two functions.

- 1/15/2024
    - Got guards to work and finished video series (finally)
    - Got Users to display in User column
    - Going to work on:
        - Fix login screen 
        - Turn server icons from emojis into pictures
        - make a profile picture for users and current user
        - let users change color of pictures 
        - make "profile" route more pretty
        - fix up messages and stuff
        - Clean up routing and add server / channel feature (???)
        - Change "Enter text" to "Message { name of channel }"

- 1/16/2024
    - Changed emojis of servers to actual images and cleaned tham up and changed placeholder text of message box. Starting to brainstorm how I can add the "add server" and "add channel" feature.

- 1/17/2024
    - Working on Add server feature. Things are not working as intended.

- 1/18/2024
    - Restructuring models. Got add server feature to work on backend but haven't gotten to making it appear on the frontend yet and haven't gotten it to work with updated models yet.
    - Running into issue where channels array of server object will not populate with given ObjectId for a channel. Not sure what to do but will come back tomorrow (hopefully).

- 1/19/2024
    - The problem was that I spelled "channels" "channel" in the part where I sent it to the
    database. 🤦🏼‍♂️🤦🏼‍♂️🤦🏼‍♂️
    - Next step: having a user select a .png image (has to be png) for the server image. and somehow storing the image (how will we either migrate that to mysql or store it locally?) and finally having the server show up on screen.

- 1/20/2024
    - FINALLY got form to work, had problems linking default channels w/ server but I fixed them. Server images now display on the screen, although they aren't custum tailored to specific server yet (have to get angular storage to work). Also, links technically work but I have to work on routing and stuff for them to not display the wrong thing.
    - Not completely sure about how to solve file image problem thing but i've literally been working on this thing for like 5-6 hours today so maybe I need to take a break and come back later?
    - Wait if we store it on the server, will we have to store the filepath in the database? I don't think so because it would maybe be all the same file path and if we name it the same thing as the server, we could just have a {{ variableLikeThis }} so maybe that's one good thing?? idk ill wait until tomorrow.

- 1/21/2024
    - Starting to work on project today. Since this is a two-parter, I am going to try to work on the smallest part first (getting .png images to work from different directories) wait do I even need that?
    - Found a website that explains how to post images to server, but it is still going wrong
    - Literally nothing that I have found works watf...
    - Going to browse angular docs tmrw see if tht helps and if not put all the post request stuff in teh app.js file just to eliminate that as the problem.

    - Got it to work. Problem was in the upload.single() command in the backend. I did not realize that the argument for the commands needs to be the same as the id tag in the html element for the input file for it to work, otherwise it gives you an error message. Miracle I figured that out. I only figured it out because I wrongly assigned the [ngModel] tag to the submit button, which made it look weird. Once I investigated it, I moved the ngModel tag to the input file element, and for some reason investigated the name of the id compared to whatever I originally put in the upload.single() command. From there it took me about 30 seconds for it to work and submit the file to the backend. If you are going to talk about this in an interview please reword this. Also, since I am not used to working with files, I was using a lot of commands I was unsure about and although I had console log statements, I was still unsure about what was being submitted.

    - Haven't been able to get server image to display on frontend *yet* and running out of ideas to try and not sure where the problem is. Maybe try the 
    /:individual_server_image thing?

- 1/23/2024
    - Feel like I made no progress. Trying to get server-icon/:filename to work in post man and it. just. doesn't. work.

- 1/24/2024
    - Woke up, hopped on, and almost instantly found the route that works to send file to frontend. Even though I got a file to display, I had to figure out logic to specify which one I wanted. Got that to work and now configService.getServers is acting super weird and not getting the list of images properly.
    - Got configService.getServers to kind of work I think but for some reason I can't *ngFor loop through it in the html file to display the images on screen
    - Got it to finally work. Mapped configService.getServers to an array of strings I made in the ts file and just appended the actual route to it and it worked.
    - Servers and server images now display on the screen although I don't think routes are correct yet (shouldn't be too too hard I think). Very very proud of getting this to work since I have been working on this since the 16th.
    - Have lots of clean up to do especially in server-side code lol. ... and in front end as well.
    - Update: made huge progress on css for create server feature. Need to figure out a way to gray out whole screen except box tho. 
    - After that I will probably do something easier like clean up login screen.

- 1/25/2024
    - Found a solution to changing the background to grayscale and having the create server screen open at the same time but it involves seperating the create server div from the server-column component into its own individual component and tranmitting one boolean value between two different components with a sibling relationship. Trying to figure that out, hopefully it won't take too long.
    - Got it to work now just need to make it look slightly better and then I'll work on fixing login page and doing a couple other easy things.
    - Got it to look slightly better and right after fixing login page I will fix *routing*

- 1/26/2024
    - Trying to fix routing
    - Cleaned up routing now need to get it to work and clean up nav.
    - Fixed routing for current profile by creating a guard. Now I can use that knowledge to create a guard to school and channels as well.
    - Made content guard line 10 lines shorter and cleaned up small routing logic.
    - Next step is to get channel links / messages to work. Once I get those working I will add small white bar to active link (probably won't be that hard, I already found out a way to do it)

- 1/28/2024
    - Fixed problem I was having with routes not refreshing if I click the a tag in the channel list. Going to try to get messages working again.
    - Working on add message. made progress but had to stop bc meal prep.
    - Made more progress on add message.

- 1/29/2024
    - Ran into issues with add message but found out the problem after looking in the wrong spot for like 3 hours. Going to get messages to display and hopefully add a white dot next to active server.
    - Update got active server image to be less rounded, but white bar is still not there. Going to work on getting messages to display
    - Going to push out minor update to getting messages to display, but not quite done yet.

- 2/2/2024
    - Fixed create server bug that caused it to not work during my final round interview.
    - Brainstormed one way to solve messaging thing.
    - Got messages to work (with user who sent it this time!). Super slow tho and have to wait a while for message to send.
    - Cleaning up main message area and making it more realistic.

- 2/4/2024
    - Various small ui changes, made channel header look better, added gear button
    to user that redirects to profile 
    - added X button in profile route that redirects user to main page
    - added button for username that is supposed to let user change color

- 2/5/2024
    - Added small ui changes like hover for users and messages and white profile picture.
    - Next plan is to add different colored images and then the ability to change color.
    - And also change current user button from a button to a link and make it not redirect

- 2/10/2024
    - Created user box where user will click their username in the lower left corner and a box pops up that displays their
    information and allows them to change their color.
    - Color changing properties not fully implemented yet tho...

- 2/13/2024
    - Got user change color to work (with new users anyway), trying to get it to change color without refreshing page, copilot suggested behavior subjects so I might
    look into that next time I work on the project.

- 2/13/2024 (Last readme update was 2-3 am rn its 1:30 pm)
    - Got user change color to work without refreshing page by using behavior subject. Made little different colored profile pictures and made users profile picture change as well.
    - Adding stuff to wrong turn page. Need to fix links but thats it.
    - Cleaned up wrong turn page.
    - Make delete button and added an "owns" list to users (list of servers user made and thus has ability to delete)
    (still doesn't work for duplicate name tho --> disable duplicate names later)
    - Note: still have to actually add delete functionality

- 2/15/2024
    - Got delete server to work. Still have to get delete
    server icon to work I think
    - Note: for some reason it works without deleting files.
    But I want to still name it work
    - Ok figured it out. Now going to clean up some stuff and finally start on deployment

- 2/16/2024
    - Got it to check for duplicate server name values
    - Made profile look better, cleaned up toast colors and made a toast if messages haven't loaded yet
    - Cleaned up comments and stuff

- 2/17/2024
    - Decided against deployment due to stateful architecture, lack of motivation, and wanting ness to learn rust

                                                    ---DONE---