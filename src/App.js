import React, {useEffect, useState} from 'react'
import GlobalStyled from './styled/global'
import Header from './components/Header'
import Resume from './components/Resume'
import Formik from './components/Form'



const App = () => {

const data = localStorage.getItem("transaction");

const [transactionsList, setTransactiomlist] = useState( 
  data ? JSON.parse(data) : [] )

const [expense, setExpense] = useState(0)
const [icome, setIcome] = useState(0)
const [total, setTotal] = useState(0)


useEffect(() => {

  const amountExpense = transactionsList
    .filter((item) => item.expense)
    .map((transaction) => Number(transaction.amount));


  const amountIncome = transactionsList
    .filter((item) => !item.expense)
    .map((transaction) => Number(transaction.amount));


    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2)
    const icome = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2)

    const total = Math.abs(icome - expense).toFixed(2)

    setIcome(`R$ ${icome}`);
    setExpense(`R$ ${expense}`);

    setTotal(`R$ ${Number(icome) < Number(expense) ? "-" : ""}  ${total}`)


},[transactionsList]);

const handleAdd = (transaction) => {
  const newArrayTransactions = [...transactionsList, transaction];

  setTransactiomlist(newArrayTransactions);

  localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
};

  return (
    <>
      <Header />

      <Resume 
      icome={icome}  
      expense={expense}  
      total={total} />

      <Formik 
      handleAdd={handleAdd}
       transactionsList={transactionsList} setTransactiomlist={setTransactiomlist}/>

      <GlobalStyled />

    </>
  )
}

export default App
