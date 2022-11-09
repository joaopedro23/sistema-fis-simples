import React, {  useState } from 'react'
import * as C from './styled'
import Grid from "../Grid/index"


// { handleAdd, transactionsList, setTransactionsList } passa por prosp
const Formik = ({ handleAdd, setTransactiomlist, transactionsList}) => {
    

    const [desc, setDesc] = useState("")
    const [amount, setAmount] = useState("")
    const [isExpense, setExpense] = useState(false)

    const generateID = () => Math.round(Math.random() * 1000);

    const handleSave = () => {
        if (!desc || !amount) {
            alert("informe a descrição e valor")
        } else if (amount < 1) {
            alert("o valor tem que ser positivo ")
            return;
        }
        
        const transaction = {
            id: generateID(),
            desc: desc,
            amount: amount,
            expense: isExpense
          }
      
          handleAdd(transaction)
      
          setDesc("")
          setAmount("")
    }

    return (
        <>
            <C.Container>

                <C.InputContent>
                    <C.Label>Descrição</C.Label>
                    <C.Input value={desc} onChange={(e) => setDesc(e.target.value)}></C.Input>
                </C.InputContent>
                <C.InputContent>
                    <C.Label>Valor</C.Label>
                    <C.Input
                        value={amount}
                        type="number"
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </C.InputContent>

                <C.RadioGroup>
                    <C.Input
                        type="radio"
                        id='rIncome'
                        defaultChecked
                        name='group1'
                        onChange={() => setExpense(!isExpense)}
                    />
                    <C.Label htmlFor='rIncome'>Entrada</C.Label>
                    <C.Input
                        type="radio"
                        id="rExpense"
                        name="group1"
                        onChange={() => setExpense(!isExpense)}
                    />
                    <C.Label >Saidas</C.Label>

                </C.RadioGroup>
                    <C.Button onClick={handleSave}>ADICIONAR</C.Button>

            </C.Container>
            <Grid itens={transactionsList} setItens={setTransactiomlist}/>

            


        </>
    )
}

export default Formik
