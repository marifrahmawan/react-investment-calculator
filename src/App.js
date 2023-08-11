import { useState } from 'react';
import Header from './components/Header/Header';
import ResultsTable from './components/ResultsTable/ResultsTable';
import UserInput from './components/UserInput/UserInput';

function App() {
  const [investmentData, setInvesmentData] = useState([]);

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    // console.log(userInput)
    const yearlyData = []; // per-year results

    let currentSavings = +userInput.currentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput.yearlyContribution; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;
    let investedCapital = currentSavings;
    let totalInterest = yearlyContribution;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      investedCapital = investedCapital + +yearlyContribution;
      totalInterest += yearlyInterest;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        totalInterest: totalInterest,
        investedCapital: investedCapital,
      });
    }
    console.log(yearlyData);
    return setInvesmentData(yearlyData);
  };

  return (
    <>
      <Header />
      <UserInput onCalculate={calculateHandler} />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {investmentData.length <= 0 && (
        <p style={{ textAlign: 'center' }}>No Investment Calculated Yet.</p>
      )}
      {investmentData.length > 0 && <ResultsTable data={investmentData} />}
    </>
  );
}

export default App;
