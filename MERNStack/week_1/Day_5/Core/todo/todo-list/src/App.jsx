import { useState } from 'react'
import './App.css'
import ListComponent from './Components/ListComponent'
import FormComponent from './Components/FormComponent'

function App() {
  localStorage.setItem("lists",JSON.stringify({content:"Wake up early", status: true}, 
  {content:"Do some meditation", status: false}, 
  {content:"eat breakfast", status: true}))  //Pour sauvegarder les items qui sont que des strings. Il sauvegarde des objets sous la forme de key value object
  const savedLists = JSON.parse(localStorage.getItem("lists"))  //Pour appeler les items déjà enregistrés dans le localStorage
  const [lists, setLists] = useState([{content:"Wake up early", status: true}, 
  {content:"Do some meditation", status: false}, 
  {content:"eat breakfast", status: true}])

  //CREATE
  const addList =(newList)=>{
    setLists([...lists, newList])
  }

  //UPDATE
  const updateList=(index) => {
    console.log("Index of list to update", index );
    console.log("Update Liste");
    //1- Create a copy of lists
    const listsUpdated =[...lists]
    //2- Update the list
  listsUpdated[index].status =!lists[index].status
  console.log("lists updated");
  setLists(listsUpdated)
  }

  //DELETE
  const deleteList=(index)=>{
    console.log("List To Delete", index);
    const filtredlist=lists.filter((list, idx)=> idx != index)
    console.log(filtredlist);
    setLists(filtredlist)
  }

  return (
    <>
      <h1>Add New things To attend your Goal </h1>
      <FormComponent addList={addList}/>
      <ListComponent lists={lists} updateList={updateList} deleteList={deleteList}/>
    </>
  )
}

export default App
