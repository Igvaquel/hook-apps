/* eslint-disable no-unused-vars */
import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";



export const Layout = () => {

    const { decrement,increment,counter } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://dummyjson.com/quotes/${counter}`)

    const { author, quote } = !!data && data;
  return (
    <>
        <h1>Quotes Quotes Quotes</h1>
        <hr />

        {
            isLoading
             ? <LoadingQuote/>
             : <Quote author={author} quote={quote}/>
        }
        <hr />
        <button 
            className="btn btn-primary"
            disabled={ isLoading }
            onClick={() => increment(1)}
        >
            Next Quote
        </button>

        <button 
            className="btn btn-primary d-flex justify-content-right mt-2"
            disabled={ isLoading }
            onClick={() => decrement(1)}
        >
            Previous Quote
        </button>

        

        
    </>
  )
}
