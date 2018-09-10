const initState = {
  posts: [
    {id: '1', title: 'Abby 1', body: 'Abby is cute!'},
    {id: '2', title: 'Abby 2', body: 'Abby is smart!'},
    {id: '3', title: 'Abby 3', body: 'Abby is strong and svelte and healthy!'}
  ]
}

const rootReducer = (state= initState, action) => {
  return state;
}

export default rootReducer