## Stack: MongoDB, Express, Angular, Node.js

Personal coding project for school that is a replica of popular app Discord, by me, Will Gunter

## Ideas

- Break up screen into 5 parts just like Discord (narrow left side bar, left list of channels, main chat area, list of users, and small little bar the left w settings and stuff)
*will work on when I can display a freaking message*

- *Eventually* rearrange routes into routes and controller files like in node project called "twilltch" to help w organization (and follow mvc paradigms) *currently working on*

- Write something about RESTful apis in resume once you get it to work more --> might look good to resume ppl

- Should I add delete functionality to messages? I really don't want to because that would maybe take time? would it really though?
like it could be just a button where it Deletes it from the collection and it refreshes the page? would it really be that hard? would Update / edit button be hypothetically that easy as well? I could put something about CRUD it in my resume... (would it really be that good though?)

- ideas for server names: 
    - skewl or something??? (I hate skewl)
        - updates on whether hell is frozen over or not???
    - gym or something?
    - Some sort of boys only / no girls allowed club
    
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

    - Fixed onSubmit() error in message-box.component.html

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
    - 🎉🎉🎉🎉🍻🍻I GOT IT TO WORK🍻🍻🎉🎉🎉🎉
    
    - (When I submit a thing in the message box and refresh the page, a new message displays in the backend along with 
    the rest of the messages)

    - Still need to figure out how to get the actual new message to display though...
    
## Resources   
- [How to connect Frontend & Backend](https://www.youtube.com/watch?v=fhRdqbEXp9Y)  
- [GitHub repo of above video](https://github.com/CodAffection/MEAN-Stack-CRUD-Operations)  
- [Angular Tutorial by Traversy Media](https://www.youtube.com/watch?v=3dHNOWTI7H8&t=3s)  
- [Angular Docs](https://angular.io/)