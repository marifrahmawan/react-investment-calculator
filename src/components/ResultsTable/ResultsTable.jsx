import React from 'react';

const ResultsTable = ({ data }) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map((investData) => {
          return (
            <tr key={investData.year}>
              <td>{investData.year}</td>
              <td>
                {formatter.format(investData.savingsEndOfYear.toFixed(2))}
              </td>
              <td>{formatter.format(investData.yearlyInterest.toFixed(2))}</td>
              <td>{formatter.format(investData.totalInterest.toFixed(2))}</td>
              <td>{formatter.format(investData.investedCapital.toFixed(2))}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ResultsTable;
