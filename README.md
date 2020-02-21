#### Approach
- chosen Bootstrap (not reactstrap), manually install bootstrap
    - cons - a bit cluttered




#### Next Steps/TODO
- add attribution somewhere - "Powered by newsapi.org"
- change <a> tags to <NavLink>(s) 
- Carousel for breaking news stories
- I Could click on each card to bring up a new page purely dedicated to the story
    - by route params (see pictures)
    - ViewArticle component
- unit tests
- DiscoverNews isn't named right 
- newsStories={results || [] } ... do i need the empty array



#### Blockers/Problems
- rate limiting on the API
- form input/search functionality - tricky. onChange vs onSubmit
- To render a single article was tricky because:
    - how the API is structured, you cannot find one article easily
    - I would have just made a request in NewsStory to get that article based on a unique id lets say given by the API. but the API doesn't do that. I thought about using the URL as that's unique by React Router didn't like that and nested a url inside a url seems like a big no no
    - the other option was to use context as a wrapper for everything, so I could easily have each component access to props, but I thought that would be unneccessry and maybe overkill
    - while this way isn't ideal, have to create another stateful component and make a separate request it does the job as there isn't loads of data flying around. In a bigger application, this would be a no go, as things would get messy quickly. Plus we don't really want to make the same requests twice if we don't have to. 




#### Final Thoughts





#### Packages Used

- Axios
- Moment
- Bootstrap (including Popper/JQuery)
- Uuid



#### Details 
My API key is: 55f245758a054a6381d493b655144574







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