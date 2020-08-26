# Hackathon Management System (HMS)
Run a hackathon wth ease :)
## History
We developed this tool during our annually happening Hackweek at Scout24. 
It is meant to help us preparing, organzing and running our Hackweeks. 
Since we are not the only ones running those Hackathons we thought we make it public for anyone to use...

## Features
* Run multiple hackathons, even at the same time if you want
* Flexible configuration per Hackathon, such as...
  * Title
  * Start/End-date (flexible duration)
  * Categories  
* Registered / Authenticated participants 
  * multiple authentication providers (eg Google/Github/M$)
  * Registration per Hackathon 
* Match maker (Participants <-> Projects)
  * based on Skills  
  * by role (eg DEV/PO/UX)
* Pitch/Showtime generator
  * like a slide deck for the hackathon pitches
  * configurable pitch timer with warning
  * integrated player for pitch videos

## Tech stack
* Backend: Serverless Framework
  * Typescript
  * AWS (API-Gateway, S3, DynamoDB)
* Frontend: React Web App
  * Typescript
  * AWS (S3)

## How to use it

* Checkout & branch out ;)
* Customize pages to your own brand / styles  
* Deploy the API into your AWS account as described in its Readme
* Deploy the web app into your AWS account, also as described in its Readme
* Use the API Gateway URL from Step 1 in Step 2
* Use it by opening the root URL of your configured S3 bucket :) !      
