## Description

An independent coding project for my resume, serving as a replica of the widely used platform Discord  
Tech Stack: MongoDB, Express, Angular, and Node.js (MEAN)

## Ideas (check when completed)

- ✅✅✅Break up screen into 5 parts just like Discord (narrow left side bar, left list of channels, main chat area, list of users, and small little bar the left w settings and stuff) *will work on when I can display a freaking message*✅✅✅

- ✅✅✅Figure out how to display new inputted message on frontend server instead of backend *should probably be somewhat easy maybe idk*✅✅✅

- Do exactly above but without needing post man and without needing to refresh the 
backend everytime I want to see updates

- add wildcard route / 404 page / redirects (should be extremely easy I just have a more pressing task rn)

- *Eventually* rearrange routes into routes and controller files like in node project called "twilltch" to help w organization (and follow mvc paradigms) *need to figure out how to do in Angular*

- Write something about RESTful apis in resume once you get it to work more --> might look good to resume ppl

- Get it to work with different screen sizes

- Should I add delete functionality to messages? I really don't want to because that would maybe take time? would it really though? like it could be just a button where it Deletes it from the collection and it refreshes the page? would it really be that hard? would Update / edit button be hypothetically that easy as well? I could put something about CRUD it in my resume... (would it really be that good though?)

- ✅✅✅ideas for server names: 

    - server1
        - Skewl or something??? (I hate skewl)
            - updates on whether hell is frozen over or not???

    - server2
        - Gym

    - server3
        - Boys only club✅✅✅

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

## Resources I used
- [How to connect Frontend & Backend](https://www.youtube.com/watch?v=fhRdqbEXp9Y)  
- [GitHub repo of above video](https://github.com/CodAffection/MEAN-Stack-CRUD-Operations)
- [Angular Tutorial by Traversy Media](https://www.youtube.com/watch?v=3dHNOWTI7H8&t=3s)  
- [Angular Docs](https://angular.io/)
- [Online Guide](https://www.samarpaninfotech.com/blog/methods-to-share-data-between-angular-components/#h-method-4-unrelated-components-via-a-service)