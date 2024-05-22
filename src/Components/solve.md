

Solution: 
(1) Initialized the articles state property as an empty array to prevent map function errors when rendering initially.

this.state = {
  articles: [],
  loading: false,
  page: 1,
  totalResults: 0
};

(2) Added a condition to check if this.state.articles is not empty before mapping over it to prevent map function errors.

{!this.state.loading &&
  this.state.articles.length > 0 &&
  this.state.articles.map((element) => {
    // Your existing map logic
  })}


  React Components Lifecycle

  . The serie of events that happen from the mounting of a react components of a React Component to its unmounting.
    .Mounting - Birth of your Component
    .Update - Growth of your Component 
    .unmount - Death of your Component

Methods in React Component Lifecycle
  the render()
  The componentDidMount()
  The componentDidUpdate()
  The componentWillUnmount()

react life cycle digaram = https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

