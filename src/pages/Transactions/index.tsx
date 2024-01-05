import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { SearchForm } from "./components/SearchForm"
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles"

export function Transactions(){
  return (
    <div>
      <Header/>
      <Summary/>
      <TransactionsContainer>
        <SearchForm/>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Web dev</td>
              <td>
              <PriceHighlight variant="income">
                $ 500
              </PriceHighlight>
              </td>
              <td >Sell</td>
              <td>01/03/2024</td>
            </tr>
            <tr>
              <td width="50%">Web dev</td>
              <td>
              <PriceHighlight variant="outcome">
                -$ 500
              </PriceHighlight>
              </td>
              <td >Sell</td>
              <td>01/03/2024</td>
            </tr>

          </tbody>
        </TransactionsTable>
      </TransactionsContainer>



    </div>
  )

}