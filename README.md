#### Approach
- chosen Bootstrap (not reactstrap), manually install bootstrap
    - cons - a bit cluttered
-  Render UK headlines on loading
-  Implement Search functionality 
-  Implement Basic Routing
-  Implement Focus news reading (i.e. user can click through to read article)

Fundamental Requirements

```
As a user
I want to open the webpage to relevant news
So that I can choose what I want to read


As a user
I want to search for news
So that I can read about what I'm interested in
```


#### Next Steps/TODO
- DiscoverNews could perhpas be named better
    - It also could be intended for some kind of Carousel for breaking news stories
- App/News setup is perhaps wrong or not best practice. Should I be doing my routing in APP component? Probably
- Remove data-test attributes from production
- Wait until the API has made the call and fetched from the API until loading everything in. 
- Loading spinners / Loading states for when fetching from the API
- Hide the search bar when you've clicked through to a link
- Re-organise files; separate out stylesheets and tests into separate folders


#### Blockers/Problems
- Rate limiting on the API
    - When I was implementing search functionality I only had an onChange attribute, so everytime I entered a character in the search input, a request to the API was being fired off. It meant I had to sign up with a different email to get another API key. 
- To render a single article was tricky because:
    - How the API is structured, you cannot find one article easily
    - I would have just made a request in NewsStory to get that article based on a unique id given by the API. But the API doesn't do give that option. I thought about using the URL as that's unique but React Router didn't like a nested url inside a url. 
    - the other option was to use context as a wrapper for everything, so I could easily have each component access to props, but I thought that would be unneccessry and maybe overkill, plus I wanted to show I udnerstood props effectively and how to pass them around components from parent to child
- Testing
    - I'm fairly new to testing in React. I understand the utility of testing, of course, but haven't quite got to grips with how best to test components and elements within. I had a go at snapshot test, they are incomplete. I'm not quite sure how to use the dummy data to mock. A lot of these test I don't fully understand yet, but have taken them from online and adapted to fit this app.
    - I would like to get to grips with testing the API calls. I know you can mock that.
    - Currentty I have two tesst failing which I need to fix. But I feel they are testing the right thing, So I've left them there incomplete for me to look at further down the line.
- Styling 
    - my NewsStory component inherited styling from my DiscoverNews css
    - as a quick workaround I just overrided my NewsStory component with different styling. 
- Issues with the API
    - There was some issue with searching for articles and passing the title as props to other components via react router. I had to, in some instance perform URI encoding/decoding. but clicking on some articles can cause crashes as for some reason URI encoding is applied. I intend to put some basic error state conditions if this happens as reversing the encoding just does not seem to work. 

#### Other Musings
- Styling
    - I could have used styled-components to format everything, I've had some experience with this, but I thought this would be too verbose. 

#### Final Thoughts

- Great tech test. I really enjoyed it and want to continue until I feel completely happy with it. Then the next stage is to re-build it completely functionally with hooks.

#### Packages Used

- Axios
- Moment
- Bootstrap (including Popper/JQuery)
- Uuid
- Shallow, enzyme/jest for testing

#### Other Details / Relevant Links
- My API key is: 55f245758a054a6381d493b655144574
- I used 'Sorts Mill Goudy' as the closest free font style
- https://www.robinwieruch.de/react-warning-cant-call-setstate-on-an-unmounted-component

#### How to use
- clone the repo
- npm install
- npm start
- npm test to run test suite
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