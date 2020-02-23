#### Approach
- chosen Bootstrap (not reactstrap), manually install bootstrap
    - cons - a bit cluttered
-  Render UK headlines on loading
-  Implement Search functionality 
-  Implement Basic Routing
-  Implement Focus news reading (i.e. user can click through to read article)


As a user
I want to search for news
So that I can read about what i'm interested in

As a user
I want to open the webpage to relevant news
So that 

As a user 




#### Next Steps/TODO
- add attribution somewhere - "Powered by newsapi.org"
- change <a> tags to <NavLink>(s) 

- Unit tests
- DiscoverNews could perhpas be named better
    - It also could be intended for some kind of Carousel for breaking news stories
- newsStories={results || [] } ... do I need the empty array
- App/News setup is perhaps wrong or not best practice. Should I be doing my routing in APP component.
- Remove data-test attributes from production
    - https://www.udemy.com/course/react-testing-with-jest-and-enzyme/learn/lecture/16175901#overview
- Wait until the API has made the complete call and fetched from the API until loading everything in. 



#### Blockers/Problems
- Rate limiting on the API
    - When I was implementing search functionality I only had an onChange attribute, so everytime I entered a character in the search input, a request to the API was being fired off. It meant I had to sign up with a different email to get another API key. 
- To render a single article was tricky because:
    - How the API is structured, you cannot find one article easily
    - I would have just made a request in NewsStory to get that article based on a unique id given by the API. But the API doesn't do give that option. I thought about using the URL as that's unique but React Router didn't like a nested url inside a url. 
    - the other option was to use context as a wrapper for everything, so I could easily have each component access to props, but I thought that would be unneccessry and maybe overkill, plus I wanted to show I udnerstood props effectively and how to pass them around components from parent to child
    - While I had to create another stateful component and make a separate request it does the job as there is not loads of data flying around. In a bigger application, this would be a no go, as things would get messy quickly. Plus we don't really want to make the same requests twice if we don't have to. 
- Testing
    - I'm fairly new to testing in React. I understand the utility of testing, of course, but haven't quite got to grips with how best to test components and elements within. It's difficult to decipher what is useful to test and what is not. I understand that testing key functionality is a must, but a lot of what I've come accross online indicates that testing things like if a component mounted/rendered or not. I don't see the utility in that as much as other tests. 


#### Final Thoughts

- Great tech test. I really enjoyed it and want to continue until I feel completely happy with it. Then the next stage is to re-build it completely functionally with hooks.
- If I was to give feedback, and if I may be so bold, I think saying 'it should take 2 hours' is a bit of a red-herring. Even if you knew absolutely everything without looking up and came accross no bugs or issues, just typing time alone to create a simple app would take 2 hours. 



#### Packages Used

- Axios
- Moment
- Bootstrap (including Popper/JQuery)
- Uuid
- Shallow, enzyme/jest for testing



#### Other Details 
My API key is: 55f245758a054a6381d493b655144574
I used 'Sorts Mill Goudy' as the closest free font style


#### How to use
- clone the repo
- npm install
- npm start
- If my API key does not work, Get an API key from https://newsapi.org/ and replace it with mine in BASEAPI and APIKEY constants in News component








### Instructions

The purpose of this assessment is to complete a simple coding assignment. You are required to:

• Produce working, tested source code to solve the problem.
• Walk through your code with the assessor, answering questions on the code and design choices as requested by the assessor
• You are expected to work on this task on your own, without help or advice from others. If you need clarification on any aspect of the assessment.

### Task
• Get an API key for https://newsapi.org/
• Create a responsive web page that shows a feed of articles returned by the API. Include any data you think is relevant.
• Apply styles inspired by beta.spectator.co.uk, e.g. fonts, colors. We are not looking for a straight copy of the layout or stylesheet - just a similar overall look and feel.

#### What we are looking for
• Code written with a focus on teamwork. Other developers should be able to maintain and extend upon your project — we like simple code which follows good naming conventions and includes comments where necessary
• A good choice of tools for the job
• Semantic HTML
• Styles (vanilla CSS, SCSS, CSS-in-JS... whatever you like) that are easy to read, maintain, and build upon

#### Deliverables
• A responsive web page which is functional at any screen size
• The source code as a zip file or a link to a repository
• Source code must contain a README with instructions on running your project locally

#### Be prepared to talk about
• What you did, how you did it, and how long it took
• Talk about the tech stack and any libraries used in your project and why you chose them
Your design and code should meet these requirements and be sufficiently flexible to allow for future extensibility. Code should be well structured, suitably commented, have error handling and be tested.