import React, { useEffect, useState } from 'react';
import styles from './ShoppinApp.module.css';
const ShoppinApp = () => {

  const [itemsList, setItemsList]= useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");

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
    onClick={(input) =>addNewItem(inputValue)}>Add</button>
    <p
    style={{color:"red", backgroundColor:"black", fontSize:"20px", fontWeight:"bold"}}
    >{inputError}</p> 
    <div className={styles.itemsComponent}
        style={(itemsList.length>0) ? {display:"block"}: {display:"none"}}>
          {itemsList.map((item, index) =>(
            <div key={index}>
              <div className={styles.itemComponent}> {`${index + 1}.`} {item}  
              <button
              className={styles.deleteBtn}
              onClick={() =>{removeItem(item)}}>Remove</button>
              </div>
            </div>
          ))}
        </div>
  </div>
);

}
export default ShoppinApp;