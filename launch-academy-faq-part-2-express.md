## Introduction

Continuing on your work with the Launch Academy FAQ from last week, it's time to make some upgrades. Now you'll refactor the site to use an API endpoint with Fetch and add testing!

## Setup

From your challenges directory, run the following:

```no-highlight
et get launch-academy-faq-part-2-express
cd launch-academy-faq-part-2-express
yarn install
yarn run dev
```

Then, visit <http://localhost:3000> in your browser. You should see a starter version of the code that should look close to your finished version from Part 1 last week. Make sure to review the code provided before proceeding. _Note: The top level component we are given is `FAQList` rather than `App.js`, which you may have seen in your original Launch FAQ assignment._

## Instructions

This is a multi-part challenge just like last week. You should not expect to complete this assignment in one sitting. Expect that there will be other lessons you will need to complete in order gain the knowledge and experience to complete this challenge.

### Requirements, Part One: `fetch` the Data

We would like to refactor the app to **retrieve data from an API**, which has been provided.

Use `fetch` to request data from <http://localhost:3000/api/v1/questions>, from within the appropriate React Component. Use the data in the response to build your components.

### Requirements, Part Two: POST data with `fetch`

Your web application is coming together! Let's now give our app the ability to create new FAQs. You will need to create a react form that will **POST data to an API**. The POST endpoint has been provided.

Use fetch to make a POST request to <http://localhost:3000/api/v1/questions>. Consider what steps you will need to take to complete this feature.

- How many components will you need, and where in your current component tree could you create them?
- How many fields will your form need?
- How will the user know that the form was submitted correctly? How can we validate user input?

Keep in mind that you code may look different from someone else's. Know that your `app.js` is configured such that that you should not need to write any new code in `app.js` to make this feature work.

The `post "/api/v1/questions"` endpoint is expecting a new question JSON object that should match the key value pairs below:

```js
{
  "question": "What is Launch Academy?",
  "answer": "Launch Academy is a 10-week, immersive bootcamp taking eager learners with little to no coding experience and giving them the tools to add value as a junior contributor to a software engineering team"
}
```

### Requirements, Part Three: Add React Router to Your Application

Our application is growing. It's going to need some _routes_ if we want to give it room to grow!

**Step One:** Create a new component `client/src/components/App.js`. This will be a stateless, functional component that will end up returning our `react-router` routes. No need to have this setup and working yet.

**Step Two:** The `App` component needs to become our new top level component! Have `main.js` render the `App` component instead of the `FAQList`. You might want to test that it renders correctly before adding your routes and hooking up your old code.

Now you should add your routes to your `App` component. When I visit `"/"`, I should see the list of FAQ items appear on the page.

**Step Three:** Update your application to satisfy the following criteria. We suggest that you ensure that your app is working successfully after satisfying each piece of the criteria.

- When I visit `"/launchers"` I should see an index of launchers on the page. The `LauncherList` component has already been made for you, and should be rendered at this path.
- Add the correct fetch request such that this component now renders with a full list of famous launch academy students! (Check the provided API endpoints!)

**Step Four:** Add show pages for each Launcher!

- The name of each Launcher should be a React Router Link. E.g. `/launchers/2` should render the show page for "Jeffrey Crinou". You'll need to use the correct launcher `id` in your path to get this to work successfully.
- When I visit `/launchers/:id`, I should see a show page with all of the relevant info for a Launcher with that `id`. You'll need to create a `LauncherShow` component in order to satisfy this last step.

By golly you have done it!

Then, `et submit` your code.
