import React, { useEffect, useState } from 'react';
import styles from './ShoppinApp.module.css';
const ShoppinApp = () => {

  const [itemsList, setItemsList]= useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");
  const [editValue, setEditValue] = useState("")
  const [buttonStatus, setButtonStatus] = useState(true);

  useEffect(() => {
    let localStoreItems = JSON.parse(localStorage.getItem("shopinItems"));
    setItemsList(localStoreItems || []);
  }, []);

  useEffect(() => {
  setInputValue("");
  }, [itemsList] )
  useEffect(() => {
    setInputError('');
    
  }, [inputValue])

  const addNewItem = (input) => {
    if(inputValue.length >=3) {
      let itemsUpdate = JSON.stringify([...itemsList, inputValue]);
        localStorage.setItem('shopinItems', itemsUpdate);
        setItemsList([...itemsList, inputValue])
        //console.log(itemsList);
    }
    else {
      setInputError("Item name you entered must have at least 3 characters!!!")
    }}
    const removeItem = (item) => {
      let listAfterRemove = itemsList.filter((i) => i!==item);
      localStorage.setItem('shopinItems', JSON.stringify(listAfterRemove));
      setItemsList(listAfterRemove);
    }
    const editItem = (item) => {
      setInputValue(item);
      setEditValue(item);
      //console.log(`editvalue>>>${editValue}`);
      setButtonStatus(false)
    }
    const updateItem = (item) => {
      if(inputValue.length>=3){
        let listAfterUpdate = JSON.parse(localStorage.getItem('shopinItems'));
        listAfterUpdate.splice(listAfterUpdate.indexOf(editValue), 1, inputValue);
        localStorage.setItem('shopinItems', JSON.stringify(listAfterUpdate));
        setItemsList(listAfterUpdate);
        setButtonStatus(true)
        //console.log('update')
      }
      else {
        setInputError("Item name you want to update must have at least 3 characters!!!")
      }
    }
  
  return (
    <div className={styles.ShoppinApp}>
    <input
    className={styles.appInput}
    type='text'
    placeholder={"Enter the item you want to add"}
    value={inputValue}
    onChange={(input) => setInputValue(input.target.value)}
    />
     <button 
       className={styles.btnAddEdit}
    onClick={(input) => (buttonStatus) ? addNewItem(inputValue) : updateItem(inputValue)}
    >{buttonStatus ? 'Add' : 'Update'}</button>
    <p
    style={{color:"red", backgroundColor:"black", fontSize:"20px", fontWeight:"bold"}}
    >{inputError}</p> 
    <div className={styles.itemsComponent}
        style={(itemsList.length>0) ? {display:"block"}: {display:"none"}}>
          {itemsList.map((item, index) =>(
            <div key={index}>
              <div className={styles.itemComponent}> {`${index + 1}.`} {item}  
              <div className="itemBtns"><button
          className={styles.editBtn}
           onClick={() =>{editItem(item)}}>Edit</button>
          <button
          className={styles.deleteBtn}
           onClick={() =>{removeItem(item)}}>Remove</button>
           </div>
              </div>
            </div>
          ))}
        </div>
  </div>
);

}
export default ShoppinApp;