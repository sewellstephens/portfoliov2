'use client';
import { useState } from "react";

export default function StripeFeeCalculator() {

  const [amount, setAmount] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let amount = e.target.amount.value;
        const stripeBilling = e.target.stripeBilling.checked;
        const stripeTax = e.target.stripeTax.checked;
        const stripeRadar = e.target.stripeRadar.checked;
        const stripeRadarTeam = e.target.stripeRadarTeam.checked;
        const stripeInvoicing = e.target.stripeInvoicing.checked;
        const stripeClimate = e.target.stripeClimate.value;

        if (!amount) {
            alert('Please enter an amount.');
            return;
        }

        if (stripeClimate) {
            let climateDecimal = stripeClimate / 100;
            let climate = climateDecimal * amount;
            amount = amount - climate
        }

        if (stripeBilling) {
            let billingDecimal = 0.7 / 100;
            let billing = billingDecimal * amount;
            amount = amount - billing;
        }

        if (stripeTax) {
            let taxDecimal = 0.5 / 100;
            let tax = taxDecimal * amount;
            amount = amount - tax;
        }

        if (stripeRadar) {
            amount = amount - 0.05;
        }

        if (stripeRadarTeam) {
            amount = amount - 0.07;
        }

        if (stripeInvoicing) {
            let invoicingDecimal = 0.4 / 100;
            let invoicing = invoicingDecimal * amount;
            amount = amount - invoicing;
            amount = amount - 2.00;
        }

        let payDecimal = 2.9 / 100;
        let pay = payDecimal * amount;
        amount = amount - pay;
        amount = amount - 0.30

        setAmount(amount.toFixed(2));

    }

  return (
    <div className="m-auto max-w-4xl">
      <div className='flex gap-4'>
       
      </div>
      <div className='mt-4'>
        <h1 className="text-xl font-bold mt-12">Stripe Fee Calculator</h1>
        <p className="mt-4">Calculate the fees for your Stripe transactions.</p>
        <div className="mt-4">
          <form className="mt-4 w-[50%]" onSubmit={handleSubmit}>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
            <input type="number" name="amount" id="amount" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            
            <label htmlFor="stripeBilling" className="block text-sm font-medium text-gray-700 mt-4">Stripe Billing (+0.7%)</label>
            <input type="checkbox" name="stripeBilling" id="stripeBilling" className="mt-1 block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            
            <label htmlFor="stripeTax" className="block text-sm font-medium text-gray-700 mt-4">Stripe Tax (+0.5%)</label>
            <input type="checkbox" name="stripeTax" id="stripeTax" className="mt-1 block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            
            <label htmlFor="stripeRadar" className="block text-sm font-medium text-gray-700 mt-4">Stripe Radar (+$0.05)</label>
            <input type="checkbox" name="stripeRadar" id="stripeRadar" className="mt-1 block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            
            <label htmlFor="stripeRadarTeam" className="block text-sm font-medium text-gray-700 mt-4">Stripe Radar teams (+$0.07)</label>
            <input type="checkbox" name="stripeRadarTeam" id="stripeRadarTeam" className="mt-1 block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />

            <label htmlFor="stripeInvoicing" className="block text-sm font-medium text-gray-700 mt-4">Stripe Invoicing (+0.4% +$2.00)</label>
            <input type="checkbox" name="stripeInvoicing" id="stripeinvoicing" className="mt-1 block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            
            <label htmlFor="striprClimate" className="block text-sm font-medium text-gray-700 mt-4">Stripe Climate contributions %</label>
            <input type="number" name="stripeClimate" id="stripeClimate" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            
            <button type="submit" className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Calculate
            </button>
          </form>
        </div>

        <div className="mt-4">

          <p className="mt-4">Total amount: ${amount}</p>

          <p className="mt-4">Stripe Fee Calculator is a tool that helps you calculate the fees for your Stripe transactions. Enter the amount you want to charge, select the optional fees you want to include, and click calculate. The tool will show you the total amount you will receive after fees.</p>

          <p className="mt-4">Other Stripe billing calculators arent typically accurate due to varying fees associated with addition products added to Stripe such as Stripe Radar, Stripe Climate, and Stripe Tax. For any inaccuracies in calculations please email sewellstephens104@gmail.com or shoot me a DM on X.</p>

        </div>

        <div className="mt-10 mb-10 flow-root">
          <p className="text-sm float-left opacity-70 text-gray-700">&copy; 2024 Sewell Stephens.</p>
          <div className="text-sm float-right opacity-70 flex text-gray-700">Follow me on <a href="https://x.com/sewell_stephens" className="ml-4"><img src="/x.svg" className="w-5 h-5"></img></a> <a href="https://github.com/sewellstephens" className="ml-4"><img src="/github.svg" className="w-5 h-5"></img></a></div>
        </div>
      </div>
    </div>
)
}