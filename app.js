// this basically allows us to access React.useState
const { useState } = React;

const GroceryListItem = (props) => {

  const [isDone, setIsDone] = useState(false);

  const style = {
    textDecoration: isDone ? 'line-through' : 'none'
  };
  // need a real return statement here since we have function calls?
  return (
  // apply the styling based on mouse interaction
  <li  style={style} onClick={() => setIsDone(!isDone)}>
    {props.groceryItems}
  </li>
  )
}

// component to pass in our grocery items
const GroceryList = (props) => (
  <ul>
    {props.groceryItems.map((groceryItems) => (
      <GroceryListItem groceryItems={groceryItems} />
    ))}
  </ul>
)

const App = () => (
  <div>
    <h2>My Grocery List List</h2>
    <GroceryListItem groceryItems={['apples ', 'oranges ', 'banana']}/>
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'));