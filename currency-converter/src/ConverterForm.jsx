import { useState, useEffect } from "react";
import CurrencySelect from "./CurrencySelect.jsx";

function ConverterForm() {
    const [amount, setAmount] = useState(100);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("INR");
    const [result, setResult] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSwap = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    }

    const getExchangeRate = async () => {
        const API_KEY = "771f19d12148487117073f2f";
        const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}`;

        setIsLoading(true);

        try {
            const response = await fetch(API_URL)
            if (!response.ok) throw Error("Something went wrong!");

            const data = await response.json();
            const rate = (data.conversion_rate * amount).toFixed(2);
            setResult(`${amount} ${fromCurrency} = ${rate} ${toCurrency}`)
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        getExchangeRate();
    }

    useEffect(() => getExchangeRate, [])

    return(
        <form className="converter-form" onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label className="form-label">Enter Amount</label>
                    <input type="number" className="form-input" value={amount} onChange={e => setAmount(e.target.value)} required />
                </div>
                <div className="form-group form-currency-group">
                    <div className="form-section">
                        <label className="form-label">From</label>
                        <CurrencySelect 
                            selectedCurrency={fromCurrency}
                            handleCurrency={e => setFromCurrency(e.target.value)}
                        />
                    </div>

                    <div className="swap-icon" onClick={handleSwap}>⇌</div>

                    <div className="form-section">
                        <label className="form-label">To</label>
                        <CurrencySelect 
                            selectedCurrency={toCurrency}
                            handleCurrency={e => setToCurrency(e.target.value)}
                        />
                    </div>
                </div>
                <button type="submit" className={`${isLoading ? "loading" : ""} submit-button`}>Get Exchange Rate</button>
                <p className="exchange-rate-result">
                {isLoading ? "Getting data..." : result}</p>
            </form>
    );
}

export default ConverterForm