# Integrated Financial Modelling

[Read more](https://zerodha.com/varsity/module/financial-modelling/)

---


## 18.Discounted_Cash_Flow_Analysis_(DCF)

[Read more](https://zerodha.com/varsity/chapter/discounted-cash-flow-analysis-dcf/)



### 18.1 – Recap

We started  chapter 1  with an introduction to financial modeling. I did talk about how financial modeling is always taught to students in a classroom program. An attempt to explain financial modeling in Varsity’s long-from approach was an interesting experience. The module took maximum planning and several rewrites, but I hope you recognize the complexity involved in this module 😊

As we approach the last chapter in this module, let us quickly recap everything we have learned so far in this module.

- As a first step, we discussed how to set up the excel sheet for building a financial model. We discussed format hygiene and how important it is to ensure cells are systematic across sheets. For example, column J represents Year 6’s data in sheet 1; then, we ensure column J is linked to year 6 data across all the sheets.
- We moved to import the historical data from the annual report. We copied mainly the P&L and Balance sheet statement. Just to let you know, there are multiple places where you can source these financial statements, including 3 rd  party websites. But the best source for getting this information is the company’s annual report. So always try and stick to the annual report. We also color-coded assumptions and calculated numbers.
- We set up an assumption sheet, where we dumped all the assumptions on one page. The page itself is divided into P&L assumptions and Balance sheet assumptions. We discussed two techniques of assumption – the growth driver by taking historical averages and the percentage technique.
- For some companies having a dedicated revenue model helps. A revenue model gives us granular insights into things that can impact the company’s revenue.
- We built the asset and debt schedule of the company. Asset schedule gives us insights into depreciation and CAPEX. The debt schedule gives us insights into the cost of debt. Both these sheets link back to the balance sheet.
- The Reserve schedule is another schedule we built, with numbers from both P&L and balance sheet.
- With all the schedules and assumptions in place, we make P&L and Balance sheet projections. At this stage, all the line items in the P&L and Balance sheet get projected. What remains are the cash and cash balance numbers on the balance sheet.
- We built the cash flow statement using an indirect method to get the cash balance. The final cash value flows back to the balance sheet, and if the calculations are correct, the balance sheet should balance at this stage.
- The financial model is said to have hit a milestone when the cash value hits the balance sheet to balance the balance sheet.
- After the cash flow statement chapter, we discussed the theory of valuations, and now, it is time to implement the valuation model and bring all the concepts together.

Over the last few chapters, mainly from chapters 14 to 17, we discussed theoretical concepts related to valuation. In this chapter, let us implement the discounted cash flow valuation (DCF) model within the primary model. The output from the DCF model is the share price of the company.




### 18.2 – Assumptions

From a format perspective, the DCF model sheet will look a bit different from the rest of the model sheets because we are not dealing with any historical data. However, as usual, we will start by indexing columns A and B and rename the sheet to ‘DCF valuation.’

To begin with, we will dump all the data we need to implement DCF.

I hope you’ve read the previous few chapters so that these terms don’t suddenly look alien to you 😊

- We can use the long-dated Govt securities (bond) yield as a proxy for the risk-free rate. The data is available for you on RBI’s website. As of today, I’ll take the 10-year bond’s yield as a proxy, which is at 7%
- The beta of the stock is pretty easy to calculate. I’ve explained it in this chapter  here . Refer to section 11.5. I’ll assume the beta of the company we are modeling as 1.2. As you may know, a beta of 1.2 is high beta. But don’t worry; you can change these numbers anytime since this is an integrated financial model.
- The expected market return is the standard market expectation and can range between 10% and 12%. Let us go with 12% for now.
- The cost of Equity is derived from the CAPM formula discussed in the previous chapters. It is the risk-free rate plus the difference between the expected market rate and the risk-free rate multiplied by the company’s beta. It is easy if you look at the excel formula.
- The cost of debt is the rate at which the company borrows funds—assuming this to be 10%.
- The tax rate is 25%. Of course, you can change this to any percentage you think makes sense.
- The target debt-to-equity ratio is assumed to be 50%. While it’s nice to be debt-free, most companies cannot afford to be. They do end up taking debt to fund CAPEX, but a well-run company will aim not to cross the 50% threshold.
- The terminal growth rate is a super important assumption that we make. The entire DCF model relies heavily on this assumption. As discussed in the previous chapter, we will assume the terminal growth rate to be close to the long-term inflation number of the country, so between 4 and 5%.
- The weighted average cost of capital (WACC) is something that we will calculate in excel directly. But I do hope you recollect the discussion we had previously on WACC.

WACC is the weighted average return expectation of debt holders and equity holders (check highlights). We will use the WACC to discount the cash flows.




### 18.3 – Free cash flow to the Firm

Once we have the assumptions in place, we have to calculate the free cash flow to the Firm (FCFF). Remember, we are calculating the future free cash flows to the Firm. Hence we have to deal only with data from year six onwards. We start the calculation with EBIT and take the tax shield effect on EBIT.

Of course, we have not calculated EBIT specifically in P&L, so we will have to quickly figure that in P&L. EBIT is earnings before interest and taxes; hence to calculate EBIT, we subtract all the expenses from total income, except the interest.

We multiply EBIT with (1-tax rate) to factor in the tax shield effect on EBIT. To this, we add back all the non-cash charges and deduct working capital and CAPEX charges to arrive at the free cash flow to the Firm. I’ve made these calculations in excel, and here is how my sheet looks now –

Notice that I’ve indexed columns E,F,G, and H to ensure I link columns J to N with years 6 to 10, just like in the other sheets. You are free to format this sheet in whatever way you think makes sense.

EBIT and depreciation numbers come from P&L. The working capital and CAPEX numbers come from the cash flow statement. I’ll provide the link to download the excel sheet at the end of this chapter, so please do download the sheet and check the cell linkages.




### 18.4 – Terminal Growth value

We now have the free cash flow to the Firm, projected up until the next five years, i.e., till year 10. However, this does not mean the company will stop generating free cash flow after five years. We assume that the company will not only continue to exist but will also continue to generate free cash flow. The rate at which the cash flow grows is called the ‘terminal growth rate,’ which is usually equivalent to the long-term inflation value of the country.

I want you to use a bit of imagination here. Fast forward to 5 years from now. From the 5 th  year onwards, you are looking outwards at eternity and imagining all cashflows that the company will generate. You need to sum up all the cash flow and bring it to the 5 th  year, i.e., the current year.

You can do this by applying the terminal growth value formula –

= 5 th  Year cash flow * (1+terminal growth rate)/(WACC-terminal growth rate)

I’ll not get into the technicalities of how the formula is derived. But that’s the formula to figure out the sum of all the future cash flows.

Here is the calculated value –

The terminal value is a big number and has an impact on the final valuation of the company.

So, we have the next five year’s free cash flow to the firm numbers. We also have the terminal value number. We now have to discount all these cash flows and bring them back to the present-day terms, i.e., we need to calculate the present value of all the future cash flows.

For example, the free cash flow in Year 8 is 294.14 Crs. Year 8 is three years away from the present day. To calculate the present value –

= 294.14/(1+10.25%)^3

= 219.4923 Crs.

We can do this systematically in excel –

I first calculated something called a discount factor, which is –

1/(1+WACC)^(time)

The time for this particular example is three years. So the discount factor for year 3 is 0.746. I have to multiply the discount factor with the free cash flow to get the present value.

So 0.746 * 294.14 = 219.4923Crs.

Notice that I’ve also calculated the present value of the terminal growth value.




### 18.5 – Share price

We’ve come to the last bit, finally 😊

We sum up all the present value of the future free cash flow, i.e., from Year 6 to 10, along with the current value of the terminal value to arrive at the ‘Enterprise Value. We deduct the present-day debt from the enterprise value and add the present-day cash to give equity holders the free cash flow.

The present-day debt and cash value come from the balance sheet.

And, here you go –

The share price is Rs.300. What does this mean?

The price you see here is an outcome of the entire valuation exercise. We have made many assumptions here, and if these assumptions are made intelligently, then with some confidence, we can conclude that Rs.300 is the fair value of the stock. You can now compare the stock’s market value on the stock exchanges and decide to buy or wait. For example, if the stock is trading at Rs.425, then you know that it is overvalued compared to its fair value; hence you can avoid buying the stock.

If the stock is trading at Rs.225, the stock is undervalued, and you can go ahead and invest in the stock. Or if the stock is trading at Rs.300, it is said that it is fairly valued.




### 18.6 – Closing thoughts

The model we have built is integrated, meaning that any change in any number in this model will impact the share price.

For example, in the assumption sheet, I’ll change the material consumed as a percentage of sales for Year 6 to 60% from 65%. The share price will change to Rs.462 from Rs.300.

Or I can change the terminal growth rate to 4.5% from 4%, and subsequently, the share price changes to Rs.323. I encourage you to make these changes and see for yourself, which is the beauty of this model. All the sheets and numbers are linked, and any difference across the sheet will result in the final output.

You can make these changes when you think the difference is justified, which brings me to my next point.

Building a financial model is pretty straightforward. A seasoned modeler will probably create a good model in a few days. But what is essential is to keep the model up to date. Once you build a model, track the company closely, especially the management interviews and statements. Whenever new information comes, make an appropriate change in the model.

For example, during the following quarterly result announcement, the company may say they want to slow down their CAPEX spending. Immediately, tweak your model and adjust for a lower CAPEX spend, and accordingly, the share price changes and gets re-rated. Maintain a separate sheet in the workbook detailing the reasons based on which you made the changes. The sheet acts as your working notes.

One last thing before I end this chapter and module – the final output, i.e., the share price is Rs.300. That does not mean, Rs.300 is strictly the fair value of the stock. The share price is an output of a model we have built, and the model is undoubtedly prone to inadvertent errors. Therefore, you need to factor in model errors. I’d assign a 10% band as a modeling error, which means I’ll consider the stock’s fair price anywhere between Rs.270 to Rs.330.

I’ll be happy to buy the stock anywhere within this range, preferably at the lower end, as it gives me some margin of safety.

I hope you enjoyed reading through this module as much as I enjoyed writing this for you.

You can download the excel sheet from  here .

- The stock’s beta represents the stock’s riskiness with respect to the market and can be easily calculated.
- We use the CAPM equation to figure out the cost of equity
- WACC is a blended cost of capital that we use to discount the cash flow
- Free cash flow to the Firm is calculated by starting with EBIT
- You can calculate the discount factor to calculate the present value easily
- Enterprise value is the sum of all the present value of future cash flow
- As and when new information flows, one needs to update the model
- The final share price is just an indicator of fair value. It makes sense to factor in model errors and assumes a fair value price band rather than a since price as the fair value of a stock.



## 17.Weighted_average_cost_of_capital_and_Terminal_Growth

[Read more](https://zerodha.com/varsity/chapter/weighted-average-cost-of-capital-and-terminal-growth/)



### 17.1 – Recap

As far as the theoretical concept of valuation is concerned, we are now almost at the end of it. In this chapter, we will discuss two critical points, and then in the next chapter, we will start implementing the Discounted cash flow valuation model in our primary model.

A quick recap of the last few chapters before we proceed –

- There are three valuation techniques – relative valuation (also called the method of comparable), option-based valuation technique (valuation contingent upon an event), or the absolute valuation technique employing the discounted cash flow analysis 
 We are discussing the discounted cash flow analysis or the DCF model. The DCF valuation is on a stock basis and not year on year basis 
 When we re-order the balance sheet equation, we get Fixed assets = Net Debt + Equity 
 From the above equation, you can choose to value the assets of the company, which is essentially valuing the entire firm, also called ‘Enterprise valuation,’ or you can choose to value just the equity portion of the company 
 Valuation is driven by the cashflow, the growth rate of the cashflow, and the timing of the cash flow 
 To calculate the free cash flow, you start with PAT and add back non-cash expenses, interest charges, and factor in changes in working capital 
 If you are valuing based on the entire company, then the return expectation is a blended rate called WACC (we will discuss more in this chapter). If you value basis just the equity, then the cost of capital is the return expectation 
 Return expectation of equity holders is always higher than the debt holders, and this can be estimated using the CAPM model 
 Lastly, when you add back interest to PAT in the FCF calculation, we need to ensure the tax shield is considered.
- There are three valuation techniques – relative valuation (also called the method of comparable), option-based valuation technique (valuation contingent upon an event), or the absolute valuation technique employing the discounted cash flow analysis
- We are discussing the discounted cash flow analysis or the DCF model. The DCF valuation is on a stock basis and not year on year basis
- When we re-order the balance sheet equation, we get Fixed assets = Net Debt + Equity
- From the above equation, you can choose to value the assets of the company, which is essentially valuing the entire firm, also called ‘Enterprise valuation,’ or you can choose to value just the equity portion of the company
- Valuation is driven by the cashflow, the growth rate of the cashflow, and the timing of the cash flow
- To calculate the free cash flow, you start with PAT and add back non-cash expenses, interest charges, and factor in changes in working capital
- If you are valuing based on the entire company, then the return expectation is a blended rate called WACC (we will discuss more in this chapter). If you value basis just the equity, then the cost of capital is the return expectation
- Return expectation of equity holders is always higher than the debt holders, and this can be estimated using the CAPM model
- Lastly, when you add back interest to PAT in the FCF calculation, we need to ensure the tax shield is considered.

We have discussed all the above over the last three chapters. If you cannot follow, I suggest you revisit the previous three chapters, read them, and post your queries to seek clarification. In this chapter, we will wind up the conceptual discussion around the discounted cash flow model.




### 17.2 – Effective cost of debt

By now, we are very clear about the discount rates we need to use when calculating the free cash flow to the firm (FCF) and the free cash flow to equity (FCFE). To reiterate –

- If we are valuing the company basis the free cash flow to the equity holders (FCFE), then we use the CAPM model to figure the equity holder’s return expectation i.e., Re = Rf + β *( Rf – Rm). Please refer to the previous chapter for more details on this equation. 
 If we value the company basis the entire firm (firm = equity holders + debt holder), then we have to discount the cashflow basis the blended rate called the weighted average cost of capital (WACC)
- If we are valuing the company basis the free cash flow to the equity holders (FCFE), then we use the CAPM model to figure the equity holder’s return expectation i.e., Re = Rf + β *( Rf – Rm). Please refer to the previous chapter for more details on this equation.
- If we value the company basis the entire firm (firm = equity holders + debt holder), then we have to discount the cashflow basis the blended rate called the weighted average cost of capital (WACC)

We briefly discussed the concept of WACC in chapter 15 under section 15.3, but now that we learned about the tax shield in the previous chapter, let’s revisit the idea of WACC.

Perhaps the best way to understand WACC is by taking an example. Assume a company has Rs.300Crs in debt and Rs.200 Crs in Equity. Equity folks expect a 12% return, while debt holders expect 8%.

Given the capital structure, what is the blended rate or the weighted average cost of capital?

We know that WACC is  = Weight of debt * return expectation of debt holders + weight of equity * return expectation of equity holders.

The total capital = Debt + Equity

= 300 + 200

= 500 Crs

Weight of debt = 300 / 500

= 60%

Weight of equity = (1-weight of debt)

= 1- 60%

= 40%

Hence, the blended rate or WACC is =

= 60% * 8% + 40%*12%

=  9.6%

But, here is the twist. The company also enjoys a tax shield on the interest that the company pays. Think about it; assume the following –

EBIT of a company = 100 Crs

Interest expense = 20 Crs

Profit Before tax = 80Crs

Tax = 30% or 24 Crs

PAT =  56 Cr

Now, for a moment, think there is no interest obligation. In this case, PBT is 100 Crs, and the tax payout at 30% will be 30Cr. The presence of interest expense reduces my tax outflow, which is called the ‘tax shield’; we discussed this in the previous chapter. Hence, whenever we consider the cost of debt, we also need to consider the tax shield benefit and factor in the tax shield benefit. The cost of debt after considering the tax shield is referred to as the ‘Effective cost of Debt.’

The formula for the effective cost of debt is :  Cost of Debt *(1-Tax rate) . In this example –

= 8% *(1-30%)

=  5.6%

Notice how the rate reduces once you incorporate the impact of tax on the. We can plug the effective cost of debt back into the WACC example and check the new rate –

= 60% * 5.6% + 40% * 12%

=  8.16%

We will incorporate the effective cost of debt equation in the main model as well

Think about a company; we invest in the company with an expectation to create wealth. Wealth creation does not happen overnight but rather over multiple years. The implicit assumption is that the company will continue to exist and function efficiently for all those years and beyond. In essence, the company is a going concern. As much as I’m personally uncomfortable with the assumption, the discounted cash flow model assumes that the company will continue to exist to infinity.

Let us live with that assumption for now.

Now, think about it: on the one hand, we are projecting the future cash flow up to the next five years; on the other hand, we expect the company to exist forever, which implies it will continue to generate a cash flow as long as it exists. If you were to imagine a timeline of sorts, it would look like this –

We assume a specific growth rate when we project the cash generated for the next five years. We need to do something similar to the cash generated from the 5 th  year onwards to infinity, which means we need a growth rate for cash from the 5 th  year ahead to infinity.

The growth rate is called ‘The terminal value growth rate,’ and the terminal value growth rate is usually equal to the long-term inflation. I hope you have noticed the following so far –

- For the first five years of our model, we make a detailed analysis of the cash flow 
 From the fifth year onwards to infinity, we stop making a detailed analysis, and we assume growth in cashflow (terminal value) 
 The implicit assumption is that the cash flow from the 5 th  year onwards will be stable and also a positive cash flow. Discounted cash flow analysis will not work if the cashflows are negative.
- For the first five years of our model, we make a detailed analysis of the cash flow
- From the fifth year onwards to infinity, we stop making a detailed analysis, and we assume growth in cashflow (terminal value)
- The implicit assumption is that the cash flow from the 5 th  year onwards will be stable and also a positive cash flow. Discounted cash flow analysis will not work if the cashflows are negative.

Once we have the terminal value growth rate, which is usually equal to the long-term inflation of the country, we can calculate the present value of each future cash flow by applying a discount rate. The discount rate is either the return expectation of equity investors or the return expectation of the firm (WACC). But practically speaking, we cannot apply the standard present value formula to identify the current value of the future cash flows because this cash flow goes up to infinity. Hence, for calculating the present value of the terminal value, we use a unique formula –

Present value of Terminal Value =  C (1+ g)/(r-g)

Where –

C = cash as of today

g = growth rate i.e. inflation rate

r = discount rate (either for equity investors or the firm as such)

The formula’s derivation is fairly easy, but I’ll skip getting into the details for now. However, please think through what we are trying to do here. Assume, from the 5 th  year onwards, i.e., for the 6 th  year and onwards towards infinity, we start computing the cashflow –

6 th  Year – FCF is 50Cr

7 th  Year – FCF is 53 Cr

8 th  Year – FCF is 55 Cr

So on and so forth till infinity. When you compute the present value of the terminal value, you essentially calculate the lump sum amount you are willing to pay today for this stream of cash flow in the future.

I hope you’ve got a gist of what we are trying to discuss here. Do go through this chapter again if you found it confusing. In the next chapter, we will implement everything we have discussed over the last few chapters and complete our valuation model.

The DCF model is super sensitive to the company’s terminal value because the terminal value is a huge number, so any slight change in our assumption will significantly impact our final valuation, which will become apparent to you in the next chapter.

- While calculating WACC, the debt holder’s return expectation should factor in the tax shield, which is called the effective cost of debt. 
 The company is a growing concern, expected to generate cash at a steady rate. 
 The detailed analysis stops at the 5 th  year. 
 We expect the cash to grow at the inflation rate. 
 We apply the principle of present value to get the terminal value 
 The discounted cash flow model is sensitive to the terminal value
- While calculating WACC, the debt holder’s return expectation should factor in the tax shield, which is called the effective cost of debt.
- The company is a growing concern, expected to generate cash at a steady rate.
- The detailed analysis stops at the 5 th  year.
- We expect the cash to grow at the inflation rate.
- We apply the principle of present value to get the terminal value
- The discounted cash flow model is sensitive to the terminal value



## 16.Valuation_(Part_3)_–_Risk_Premium_&_Tax_Shield

[Read more](https://zerodha.com/varsity/chapter/valuation-part-3-risk-premium-tax-shield/)



### 16.1 – Market risk premium

In the previous chapter, we discussed that the equity holders expect a higher return than the debt holders. The higher return (rate) is what we will use to discount the free cash flow to the equity holders. But the question is, how much higher?

You can think about it this way: if the risk-free rate (Rf) is 7%, how much more would you like (over and above the risk-free rate) so that you feel encouraged to invest in equities? If you were to ask a bunch of investors and take an average of the expected return, you would arrive at the rate. However, most individual investors won’t have access to such a consensus. Hence we can probably apply an equation to get our answer.

Re = Risk free rate (Rf) + Risk premium

Where Re = Return expectation of equity holders.

The risk premium is the additional return over and above the risk-free return to encourage an investor to invest in equities. The risk premium is –

Risk premium = β*(Rm – Rf), where

Rf = Risk-free rate

Β = Beta of the stock

Rm = Market rate

Of course, we can rearrange the Re equation –

Re = Rf +  β *(Rm – Rf)

By the way, this equation in finance is called ‘The Capital Asset Pricing model’ or CAPM.

Let’s take an example and see how this works. The best proxy for the risk-free rate is the 10-year-old Govt bond yield. We can look it up on the CCIL portal –

I’ve highlighted the last traded yield of the 10-year Government bond maturing in 2032. The yield is 7.4586%. The yield indicates that if I were to invest in this bond and hold it for 10 years, I would earn a return of 7.4586% without any risk. Without any risk, because we don’t expect Govt of India to default on its debt obligations, default risk is almost non-existent.

Government defaulting on debt is a severe issue, so governments try their best not to default. Also, why are we considering 10 years and not any shorter-term bond? This is because we are interested in longer-term yields as we also forecast the free cash flow for the long term.

Next up is the Beta. Beta, as you may know, is the company’s stock price sensitivity with respect to the stock market. I’ve explained the concept of Beta and what it means in this chapter. I’d suggest you review it if you are not familiar with the idea of Beta as explained in section 11.5 of this  chapter .

Rm is the market rate, and this is the market’s long-term average return. I’d suggest you keep this around 8% to 9%, maybe 10 or 12%, if you are bullish.

Please note that when we build the final model, all these rates can be changed to whatever you think makes sense. Let’s assume that the Beta of the company we are dealing with is riskier compared to market, and therefore we assign the Beta as 1.3.

By the way, you can easily calculate the Beta of any company in excel. Anyway, let us plug in these numbers and see how the return expectation of equity holders works –

= 7.4586% + (1.3) *( 8.5%-7.4586%)

=  8.81%

Of course, when we integrate this within our model, you are free to change the values to what you think makes sense. For example, if you feel the risk-free rate should be 8% instead of 7.45%, that’s fine, but whenever you make any change, make sure you have a reason for that change.




### 16.2 – Tax shield

In the last chapter, we learned that we could get the Free cash flow to the firm by adding non-cash expenses back to the Profit after taxes. The non-cash expenses included the following –

- Depreciation 
 Amortization 
 Deferred taxes 
 Proceeds from the sale of assets 
 Interest expense
- Depreciation
- Amortization
- Deferred taxes
- Proceeds from the sale of assets
- Interest expense

Adding the interest expense part is tricky, and we need to spend some time understanding how to add the interest. Let me take an arbitrary example to illustrate this, have a look at this –

As you can see, we have a fairly straightforward bottom line P&L of a company. The EBIT is 700 Crs, and the company pays 70Cr as interest charges at 10%. The PBT is 630 Crs, and at a 25% tax rate, the company pays a tax of 157.5Crs. The bottom line i.e. PAT = PAT – Taxes = 472.5 Crs.

Now, to calculate the Free cash flow to the firm, we start with PAT and add back non-cash expenses. We also add back the interest paid because the interest goes back to the debt holder of the company. If we were to do this –

PAT = 472.5

(Add) Interest = 70

= 542.5

But there is a problem doing this. You see, when we pay interest, the tax outflow reduces. For instance, the tax here is 157.5 Crs while the interest paid is 70. Now, consider the interest as 0, this would make PBT 700, and at 25% tax, the tax outflow is 175.

So in a sense, interest shields us from a higher tax outflow. So interest that we add back should be factored in for tax shield. To do that –

Interest (with tax shield) = Interest *( 1 – tax)

= 70*(1-25%) 
 52.5

So when you add back interest to PAT to calculate the FCFF, we add 52.5 here and not 70. In this example –

PAT = 472.5

Interest = 52.5

525

Just to refresh, for FCFF calculation –

FCFF = PAT + Depreiciation + Amortization + Interest*(1-tax rate) + deferred taxes – working capital changes – investment in fixed assets (CAPEX).

We start the FCFF calculation with PAT, but instead, we can even begin with EBIT. If we were to start with EBIT, we need to add back the tax shield.

FCFF = EBIT *(1-tax rate)+ Depreiciation + Amortization + deferred taxes – working capital changes – investment in fixed assets (CAPEX).

Let’s plug in the above equation for the arbitrary example –

= 700*(1-25%)

=  525

Of course, for the sake of simplicity, I’ve ignored the non-cash expense, CAPEX, and working capital changes. But the point is that you can start your FCFF calculation with either PAT or EBIT; both will lead you to the same result.

You can extend the calculation to figure out the free cash flow to the equity holders by deducting the net debt from the free cash flow to the firm.

Free Cash flow to Equity = FCFF + [Debt – Principal repayment]

Where, [Debt – Principal repayment] = Net debt

Hence,

Free Cash flow to Equity = FCFF + Net debt

We will get back to this later when we implement the FCFF and FCFE within our model.

- Equity investors expect a return over and above the risk-free rate and that is called the risk premium 
 The risk premium depends on the beta of the stock. Higher the beta, higher the premium 
 When the company pays interest, it gets a tax shield 
 When you add back in interest, you need to factor in the tax shield as well 
 You can start the calculation of Free cash flow either by PAT or by EBIT, both yield similar results
- Equity investors expect a return over and above the risk-free rate and that is called the risk premium
- The risk premium depends on the beta of the stock. Higher the beta, higher the premium
- When the company pays interest, it gets a tax shield
- When you add back in interest, you need to factor in the tax shield as well
- You can start the calculation of Free cash flow either by PAT or by EBIT, both yield similar results



## 15.Valuation_(Part_2)_–_FCFF_&_FCFE

[Read more](https://zerodha.com/varsity/chapter/fcff-fcfe/)



### 15.1 – Building blocks

Picking up from the previous chapter, we discussed relative and absolute valuation concepts. At its core, three key inputs drive the absolute valuations –

- The cashflow 
 The timing of the cashflow 
 The rate at which the cash flow gets discounted
- The cashflow
- The timing of the cashflow
- The rate at which the cash flow gets discounted

Let us deal with the broader concept of cash flow in this chapter. Remember, starting from the previous chapter to maybe the next few, we only discuss the theory behind the valuation. Once we get to a stage where we understand the valuation concept well, we will build the valuation model and integrate it within the model we have built so far.

The cash flow that we refer to here is called the ‘Free Cashflow.’ Free here implies that the company is free to allocate the cash generated from its operations to whatever purposes the company thinks is best—extending the thought, who owns that cash that the company’s operations generate? To answer that, you need to think about the company from its funder’s perspective. A company gets funds from two sources, i.e., debt and equity.

The debt and equity holders together finance the assets of the company. Hence, the following equation represents a company –

Debt Holders + Equity holders = Assets of the company

In its simplest form, the debt and the equity holders finance assets, the assets, in turn, generate a cash flow for the company. So the cash generated by the company belongs to both these funders in proportion to their funding. Further, we value the cash flow by factoring in the cash flow timing and the discount rate to develop our sense of the company’s valuation.

The point to note here is that the cash generated belongs to the company, i.e., the Debt + Equity funders. The cash that belongs to the company is called ‘The free cash flow to the firm’ (FCFF). Or, from the free cash flow to the firm, you can deduct whatever cash is supposed to go to the debt holders and value only the cash flow that belongs to the equity holders, and that is called the ‘Free cash flow to Equity (FCFE).




### 15.2 – Free cash flow calculation

To calculate the free cash flow (FCFE or FCFE), we need to start all over from the P&L again. Don’t worry, I won’t do a P&L deep dive but rather quickly discuss the overview. It may perhaps help you jog your memory. Have a look at this –

The company’s business operations ideally should generate positive cash, which is also the company’s revenue. The company pays off the cost of goods sold from the revenue generated. After paying for the cost of goods sold, the company pays the sales and general administrative costs. Usually, both get clubbed as the ‘expenses’ of the company. After adjusting for this, the company is left with ‘Earning before the interest and Tax’ or the EBIT. EBIT is one of the key margin metrics we use to analyze a company.

From EBIT, interest is paid to get us to the Profit before tax or PBT. From PBT, the company pays the taxes due for the financial year and finally arrives at the company’s bottom line, i.e., Profit after taxes or PAT.

All the above is very intuitive, I guess. The point to note here is the source of free cash, irrespective of whether you look at it from the firm’s perspective or equity holder’s perspective starts with the company’s operations after adjusting for expenses and taxes. This implies that we can start figuring out the true ‘Free cash flow’ by starting with the company’s bottom line, i.e., the Profit after taxes (PAT). What do I mean by ‘true’ free cash flow? I’m talking about identifying all the non-cash expense and adding it back to the PAT to figure out the free cash flow.

The cost of goods sold part usually includes depreciation as well. Remember that depreciation is just an allocation of charge, and it is not an actual expense. It is an accounting entry. Likewise, amortization is also a non-cash expense; it is an accounting entry. The first step in calculating the free cash flow (irrespective of FCFE or FCFF) is to add back depreciation and amortization to PAT.

Think about deferred taxes; this too is not an actual expense, but instead, the company is deferring its tax payment to a later date. Given this, you can add back deferred taxes as well.

So we have –

PAT + Depreciation + Amortization + Deferred Taxes

Please think of the above equation as the starting cash position. We now have to account for changes in the company that consumes cash. The changes I’m referring to are working capital changes and changes in the fixed assets position of the company.

To keep the operations going, the company should spend on working capital. As you may know, working capital is the funds required to run the day-to-day operations of a company. Day-to-day operations like picking up raw material on credit by a vendor, receiving an advance from the customer, stocking inventory, etc., are all activities that come under the company’s working capital. The balance sheet equation of working capital is –

Working capital = Current Assets – Current Liabilities

Note, since both assets and liabilities are current, working capital is also current.

Assume the average working capital requirement of a company is 100Crs, but for whatever reason, the working capital requirement increases to 120Cr, then the additional 20Crs will have to be accounted for when calculating the free cash flow. It is reduced from PAT + depreciation + amortization + Deferred Taxes.

Likewise, if the working capital decreases to 80Crs, it frees up 20Cr for the company, added back to the free cash flow calculation.

Next up are the fixed assets of the company. The company must invest in fixed assets. The general opinion is that these fixed assets will help the company generate higher operating cash in the future. Usually, the company’s fixed assets spend is predictable, but just like the working capital changes, the changes in fixed assets should also get factored in.

Considering both the above, our free cash flow equation looks like this –

PAT + Depreciation + Amortization + Deferred Taxes – Change in working capital – change in fixed asset investments.

Now, here is an interesting bit. If you relook at this again –

When we start free cash flow calculation, we start with the PAT of the company. But before we arrive at PAT, we payout interest or the finance charges. Now, think about it, to whom does the interest payout belong to? It goes to the debt holders, which means that if you were to look at the free cash flow to the firm, then we also need to add back the interest to our free cash flow calculation. Hence, the equation now looks like this –

PAT + Depreciation + Amortization + Deferred Taxes + Interest charges – Change in working capital – change in fixed asset investments.

The above equation is the free cash flow to the firm or the FCFF. Now, from the free cash flow to the firm, if you separate the cashflow which portion belongs to the debt holders and that will leave you with the part that belongs to the equity holders, which can then get valued and get a sense of company’s valuation from the equity holder’s perspective.

Think about what the debt holders expect from the company? Unlike the equity folks, debt folks have a different payout expectation. The debt funders lend a certain amount (principal) to the company and expect the company to pay interest against the principal amount. At the end of the tenure, the debt holders expect the principal to be repaid in full. So from the free cash flow equation that we arrived at earlier, if we separate the principal repayment and the interest payments, we are left with the ‘Free cash flow to the Equity.’

I hope the above explanation is clear about arriving at both FCFF and FCFE. We will get into a more detailed description in the next chapter, especially when we implement the absolute valuation model within the financial model we are building. But for now, I intend to give you an overview of how various elements of valuation come together.




### 15.3 – Return expectations

We now have a broad overview of how to calculate the free cash flow to the firm and the free cash flow to equity holders. Let’s quickly understand the return expectation from the firm and equity holder’s perspective.

To get a sense of the return expectation of the firm, we should be clear about what the debt holders expect. The debt holders of the firm, as we discussed earlier, expect an interest payment against the principal amount, plus at the end of the tenure, they expect the principal itself to be repaid.

The firm has to satisfy the debt holders’ return expectations. But the firm also has equity holders, who will have a different return expectations. So when you are thinking about the firm’s free cash flow, then because the firm has both debt and equity holders, the return expectation of the firm should be such that it satisfies both debt and equity holders. If you build a valuation model based on FCFE, the cash flow is discounted with a blended rate, satisfying both the debt and equity holders.

Let me give you an example. Assume a company has 350Cr, of which debt is 125Crs, and the equity holders fund the balance 225Cr. The debt holders expect a 9% return, and the equity holders expect a 15% return. Why they expect what they expect is something we will discuss later. However, from the company’s point of view, it should generate a blended return to satisfy both, i.e., the expectation of the firm is the weighted average return –

= (9%*125) + (15%*225) / 325

=13.85%

The blended rate of return is also called the ‘Weighted cost of capital (WACC). We will discuss this later.

Think about the equity holder’s return expectation. The equity holders will expect a higher return than the debt holders because the equity holders take more risk. Equity holders expect at least the risk-free rate that prevails in the economy plus a risk premium for the additional risk (over the debt holders) that they take. The return expectation of equity holders is called,  ‘The cost of capital’.

Cost of capital = Risk-free rate + Risk premium

Note that the cost of capital is always higher than the WACC. In this chapter, I’ve laid down the basic foundation for the FCFF and FCFE and touched upon the return expectation. In the next chapter, let us try and take a closer at the same.

- A firm can be looked at as a combination of debt and equity holders 
 The debt and equity holders finance the assets of the company 
 To get the FCFF, we start with PAT and add back all non-cash expenses 
 From FCFF, we deduct interest and principal repayments to get FCFE 
 The weighted cost of capital is a blended rate, and it is the expectation of the firm 
 Cost of capital is what return expectation of the Equity holders 
 The cost of capital is always higher compared to WACC
- A firm can be looked at as a combination of debt and equity holders
- The debt and equity holders finance the assets of the company
- To get the FCFF, we start with PAT and add back all non-cash expenses
- From FCFF, we deduct interest and principal repayments to get FCFE
- The weighted cost of capital is a blended rate, and it is the expectation of the firm
- Cost of capital is what return expectation of the Equity holders
- The cost of capital is always higher compared to WACC



## 14.Valuation_(Part_1)_–_Overview

[Read more](https://zerodha.com/varsity/chapter/valuation-part-1-overview/)



### 14.1 – Valuations basics

We are at the last stage in our Financial Modelling journey. As the last step, we have to build a valuation model, which will sit within the integrated model that we are building. A valuation model helps us measure the value we are willing to pay for a given business. There are many ways to build a valuation model, but regardless of the approach you take, the final output results in estimating the worth of the company on a per-share basis.

With the valuation exercise, the idea is simple, we value the company and arrive at the share price. We refer to this as the fair price of the company’s stock. Fair price because we have considered everything that matters in our model (remember all the assumptions and schedules). We then compare the fair price of the company with the actual market price of the company traded on the stock exchange and conclude as –

- Overvalued, if market price > fair price 
 Undervalued if market price < fair price 
 Fairly valued if market price = fair price
- Overvalued, if market price > fair price
- Undervalued if market price < fair price
- Fairly valued if market price = fair price

By the way, it almost feels weird to discuss ‘valuation’, in a world where almost no one cares about valuations. But that is a debate for another day, let us go ahead and do what we are supposed to do 😊

Valuations in the context of investments help us understand the price we are willing to pay to acquire a portion of the business. There are three main techniques based on which we can value a company, they are –

- Relative valuation 
 Option based valuation 
 Absolute valuation
- Relative valuation
- Option based valuation
- Absolute valuation

In this chapter, I’ll briefly touch upon all three techniques to help you develop a perspective, and then in the subsequent chapters, we will discuss one of these techniques and figure out how we can implement that technique within our financial model.




### 14.1 – Relative valuations

The relative valuation is based on the theory that if there are two identical companies in the market, then their valuations should be similar too. By identical, I mean the companies you compare should be similar in terms of business, products, size, geographic spread, financials, etc, regulatory landscape, etc.  You cannot compare TCS with HDFC Bank or for that matter, you cant compare SBI Bank with HDFC Bank although both are banks. SBI is a public sector bank and HDFC Bank is a private sector bank. You can however compare HDFC Bank with ICICI Bank, they are similar in all ways, probably even Kotak Bank.  A few more examples of similar companies include Infy and TCS, Bajaj Auto and Hero, PVR, and INOX. Of course, there are many more companies that can be bucketed under the same category and can be compared.

Let’s put this in context. Assume there are only 3 companies in the country that manufactures cars. The Profit after tax for these companies along with the respective stock prices are as below –

Company 1 – PAT is Rs.100, a stock trading at Rs.1005 per share

Company 2 – PAT is Rs.220, a stock trading at Rs.2185 per share

Company 3 – PAT is Rs.75, a stock trading at Rs.785 per share

If you do a simple ratio check i.e. dividing the company’s stock price by its profitability (measured in terms of PAT), we get the following results –

Company 1 : 1005/100 = 10.05x

Company 2 : 2185/220 = 9.93x

Company 3 : 785/75 = 10.46x

From the above, we know that the industry as such is valuing the car industry at roughly 10x its earnings. Now, assume a 4 th  company enters the market with similar dynamics. The earnings of this company are Rs.300, what is the likely stock price?

Well, by the method of relative valuation, we can assign roughly 10x the earnings, so the stock price should be around Rs.3000. However, if the stock price is higher or lower than Rs.3000, then we can conclude that the stock is overvalued or undervalued respectively. While I’ve considered just one ratio to illustrate the relative valuation method, there are several other ratios that you can consider.

Most investors find conducting relative valuations on companies easy since it is very intuitive and relative to the industry. But there are a few limitations with relative valuations.

One, the markets themselves could be valuing the industry wrongly by sometimes assigning very high valuations to companies (remember the dot com era where all stocks were highly valued) or sometimes assigning super-low valuations. Super low valuations could be because the market as a whole can find it difficult to understand business models.

The other problem is that there are no two companies that are the same. In reality, each company is different, and these differences have an impact on valuations. For example, in the above example, assume the 4 th  car manufacturing company has a revenue of Rs.600, that means the company enjoys a 50% PAT margin, which is phenomenal, and therefore maybe the market assigns a higher value.

For this reason, as investors, it is best if we look at other valuation techniques as well. Let me quickly give you an overview of the options-based valuation before we move to absolute valuations.




### 14.2 – Option based valuations

I guess we all know who Rajinikanth is 😊 , just in case you’ve been living under a rock and the name Rajinikanth has escaped your attention, then look him up on Google. Don’t worry, I’m not digressing to discuss Rajinikanth or his movies. I’m only interested to explain how he charges his producers for the movies he acts in.

Most normal actors in India get paid a certain amount before they signup and act in movies. However, I believe Rajinikanth does not do that. His remuneration is a percentage of the profits his movie generates, and the profits as such are based on the outcome of the movie. So if the movie does well, Rajinikanth makes money, or else he won’t make the money.

Just to reiterate, the outcome of Rajinikanth’s financial success (or the monetary value of Rajinikanth) is contingent upon the success of the movie, and clearly, his success and the movie’s success are directly proportionate.

Now, keep that in mind.

Let us talk about a company, maybe an EV car manufacturing company. The company announces that they have set up an R&D to develop an EV car that can run 2,000 Kms per single charge. The announcement is phenomenal as most EVs can run up to 450 km per charge.

How will the market value such an announcement?

Well, for now, it is just an announcement and the market knows that the R&D experiment can fail. However, if it’s a success, the value of the company can grow multi-fold. In other words, the value of the company is contingent upon a certain event, the event happens to be the success of the R&D experiment.

We can generalize this – ‘the value of a company should be X provided Y happens’, this is similar to ‘Monetary value of Rajinikanth will be A provided B happens’. And both these are similar to – ‘The value of a certain option will be X, provided the spot value changes to Y’. For people who are familiar with options, you will immediately recognize that we are talking about a call option here.

Remember this equation ‘ Intensive Value of a Call option = Max[(Spot-Strike), 0]. If you are familiar with it, good, else don’t worry about it as long as you get the point that the value of the company (or option) will be Rs.XYZ provided ABC happens.

Given this, if you were asked to value such companies, how will you value them? Well, you can value the basis of the framework on how you value options. Such a valuation technique is called the ‘option-based valuation technique’.

Option based valuation technique is a very niche technique and cant be used across all companies. But this is something you should be aware of. Many tech companies in the US are valued based on the option-based valuation technique. Probably in India too, this may become popular. For example, think about a company that has an internet business. Their business model can be dependent on acquiring n number of customers of which a certain percentage of them will turn into paying customers.

We will now move to the last valuation technique, perhaps the most popular one called the ‘Absolute valuation’, of a company.




### 14.3 – Absolute valuations

When we value a company based on absolute valuation, we do so based on the stock concept. What do I mean by that?

Well, after we do the valuation, the result is the value of the company. The value of the company is as of today. The valuation is not based on what the value was last year or the year before nor is the value based on what it will be next year or the year after. We are calculating the value as of today based on all the inputs. The inputs however are based on how we expect the future to unfold 😊

In this chapter, I’ll give you an overview of the absolute valuation technique and in the subsequent chapters, we will develop our understanding of all the different components of absolute valuation, and eventually build the absolute valuation piece within the main model.

Let us start with the basic balance sheet equation that we are all familiar with. For any balance sheet to balance, we know =

Asset = Liabilities.

Now, the assets can be broken down into two parts

Assets = Cash + Fixed Assets

The value of cash is easy to figure, it is how much it is. For example, if a company has Rs.100Cr cash on its balance sheet, the value is Rs.100Crs, nothing more, nothing less.

On the liabilities side, we can break it down into two parts –

Liabilities = External Borrowings (Debt) + Equity

Given this, we can rewrite the balance sheet equation i.e. Assets = Liabilities  as

Cash + Fixed Assets = Debt + Equity

We can now further modify this as –

Fixed Assets = (Debt – Cash) + Equity

Debt – Cash, is also called the Net debt of the company. So,

Fixed Assets = Net Debt + Equity

This is a balance sheet equation, re-ordered. Now, if you were to value any company, you can either value its assets or its Equity. If you choose to value the assets of the company, then you are essentially valuing the overall company and that’s called the ‘Enterprise Value’, of the company, also called the value of the firm.

However, if you choose to look at only the equity portion, then it is just that, you are valuing the company from an equity holder’s perspective because the value of equity is what matters to the shareholders.

Both techniques are fine, as long as you understand their nuances.

When it comes to measuring the value of a company (either via the enterprise or equity holders), you need three things –

- Cashflow estimation
- Discount rate
- Timing of cash flow

The cashflow is either  –

- The cash flow to the firm/ enterprise or
- The cash flow to the equity holders

Once you identify the cash flow (past and future), you need to discount the cash flow. The concept of net present value kicks in here. I hope you are familiar with it, else please do look it up  here .

The question however is at what rate do we discount the cash flow? The debt holders will expect a lower rate of return compared to equity holders. The Equity holders will expect a higher return than the risk-free rate.

Equity Holders = Rf + Rm

Where Rf = Risk-free rate and Rm = Equity risk premium.

Since an enterprise will have both debt and equity holders, the discount rate should reflect the expectation of both these parties. The blended discount rate is called, ”Weighted average cost of capital”, or just WACC. We will discuss more on WACC in the subsequent chapters.

Lastly, we need to know the timing of the cash flow so that we can discount these cash flows appropriately. Of course, you will know what I’m referring to here if you are familiar with the concept of net present value. Over the next few chapters, we will build the valuation model step by step and integrate it within the main model.

- Relative valuation is based on valuing two or more companies on similar metrics
- Relative valuation works only if two companies are identical
- Option based valuation is applicable if the financial outcome of a company is dependent on a certain event
- One can apply the framework of the option theory to value companies whose fortunes are dependent on the outcome of events
- An absolute valuation can be done either by valuing assets or the equity
- The three variables that are important for absolute valuation are cash flow (either to the firm or equity holders), discount rate (we consider WACC), and the timing of the cash flow.



## 13.Cash_flow_statement

[Read more](https://zerodha.com/varsity/chapter/cash-flow-statement-2/)



### 13.1 – Indirect cashflow

We are at a crucial juncture in our financial modeling journey. This chapter will derive the cash flow statements and plug that cash flow number into the balance sheet. After we do, hopefully, the balance sheet balances. Notice, I used the words  ‘derive the cashflow statement’ . What do I mean by that? You need to take a few steps back and think about the cash flow statement and its purpose.

The cash flow statement of a company gives the company’s cash position. The cash position itself is estimated after reviewing the cash inflow and outflow from the company’s operations, investments, and financing activities. Each of these activities either generates cash or consumes cash. If you are new to cash flow statements, I’d suggest you look at this chapter –  https://zerodha.com/varsity/chapter/cash-flow-statement/ .

Think about the high-level summary of cash flow and how the company’s CFO and their team prepare the statement. Like the P&L and Balance Sheet, the cash flow is also prepared by considering the voucher entries, bills, receipts, and bank reconciled statements. Preparing the cash flow statement with bank reconciled statements, invoices, and receipts is called the ‘Direct cashflow method.’

As a financial modeler, you have two options to prepare the cash flow statement in the financial model.

- Get access to bills and vouchers of the company and prepare the cash flow just like the finance team 
 Hardcode the historical statement just like the way we did for P&L and Balance sheet and then project for future years
- Get access to bills and vouchers of the company and prepare the cash flow just like the finance team
- Hardcode the historical statement just like the way we did for P&L and Balance sheet and then project for future years

Of course, option one is ruled out for obvious reasons. Option 2 is possible, but we miss out on the ‘validation of the model’ part if we take the hardcoded approach. I’ll explain what this means in a bit.

There is a third approach to cash flow. It is called the ‘indirect method’ of cash flow preparation. In the indirect method, we take the P&L and the Balance sheet data of the company as input and process the input based on a series of logical steps. The result of the process is the company’s net cash flow. Here is the good part – the net cash flow derived from the process should match the company’s cash flow stated in the balance sheet. If it does, then it kind of validates the model for us. If the numbers don’t match, then it is because we’d have made an error somewhere in the model, and it allows us to recheck. For this reason, we will use the indirect method of preparing the cash flow statement.

By the way, speaking of validating the model, you may argue that the model is heavily dependent on the assumptions that we make and therefore bound to have errors. Yes, I won’t argue with that. I’m aware of this fact, but at the same time not concerned.

Think about it this way; our main focus is to build the structure of a house with a solid foundation. Once the house is built with the proper foundation, we can mix and match the interiors as many times until we find it to our satisfaction. Extending the same thought, our objective is first to build the model with the right linkages. Once the model is fully built and completely integrated, we will spend time debating each assumption, figuring out if it makes sense, and changing the values accordingly.

I’m sure you have questions about this, but hang on and read through the rest of the chapter (and module), and I’m sure you will get all your answers. For now, let’s look at the indirect method of cash flow statements.




### 13.2 – Cashflow activities

A company can be looked at from the perspective of its activities. Broadly speaking, the activities are –

- Operating activities 
 Investing activities 
 Financing activities
- Operating activities
- Investing activities
- Financing activities

Consider Bajaj Auto, for example; what does the company do? It manufactures two and three-wheeler vehicles, sells these vehicles, and services these vehicles. The company needs to invest in plants, machinery, and equipment to carry out the operations. To finance the operations, it may (or may not) needs funds from external sources. If the company borrows money, they have to repay. Then, of course, from the profits, dividends are distributed.

Can you think of any other activity that the company does? You can extend this framework to any company and realize that all the activities are within the scope of these three categories.

Each of these categories either generates cash or consumes cash. For example, consider the inventories of a company. The inventory of a company is directly related to the company’s operations. If the company’s inventory has increased compared to the previous year, then it means that more money is stuck in terms of finished goods. Hence, inventory (which is an operational activity) has consumed cash. On the other hand, if the inventory is less in year two than in year one, inventory has generated cash or conserved cash.

Let us take another example. Assume that a company has borrowed money from the bank to fund operations. Borrowing funds is a financing activity, and by borrowing, cash is credited to the company’s bank account, hence considered as generated cash.

Likewise, when paying dividends (financing activity),  money goes out of the company’s account; hence, it is treated as an activity that consumes cash.

Imagine if you can look at all the line items (mainly from the balance sheet) and –

- Categories them as operating, financing, or investing activities 
 Figure out if it is consuming or generating cash
- Categories them as operating, financing, or investing activities
- Figure out if it is consuming or generating cash

Then, by summing cash flow from different activities, you should generate the company’s cash flow statement and get the company’s cash position.

Let’s go ahead and do this for our model.




### 13.3 – Categorizing line items

The idea is simple, we list all the balance sheet line items and figure out their impact on the cash position if it were to increase or decrease. Eventually, each line item either tends to generate cash or consume cash.

For example, if the company were to issue more shares and increase the share capital (raise more equity), then cash comes into the company, and the cash position tends to increase. If the CAPEX spend were to reduce, then from the perspective of the cash position, it tends to increase cash.




### 13.4 – Cashflow from operating activity

Using the above framework, we can now derive the cash flow statement in the indirect method. The idea here is simple, we treat each line item basis the activity type and then figure if that particular line item increases or decreases the cash position.

You know the drill, we create a new excel within the workbook and rename it as ‘Cashflow.’ We index it like we did the other sheets. We will start with the operating activities first.

The idea here is to find out if the company’s operation has generated cash or not. We start with the PAT, add back depreciation, and then add the net change in working capital by considering each line separately.

Remember, depreciation is an accounting expense. Hence we need to add back depreciation. Here is the snapshot of the excel sheet –

I want you to notice two things here. First, I’m starting the sheet by directly working on the Year 2 data. There is a reason for this, which you will soon realize. Second, I’ve extracted the depreciation value from the balance sheet and not the P&L, and this is because the P&L depreciation is only for the year, but in the balance sheet, you not only get the yearly depreciation but the depreciation non-expense as well. Alternatively, you can also get the depreciation data from the asset schedule.

Continuing on the operational activity, we now look at working capital changes and their impact on the cash position. Here is the excel setup –

As you can see, since we are calculating ‘increase’ for the previous year, we are starting from Year 2 and not Year 1.

All the line balance sheet items that I’ve considered here are related to the current assets and liabilities. These two together help me identify the net change in working capital. Let me do the very first calculation and explain a particular nuance here.

From the balance sheet, Y1’s Current liability is 73.53 Cr, and Y2’s current liability is 102.74Cr. An increase in current liability is –

Y2 – Y1

= 102.74 – 73.53

= 29.21 Cr

We discussed earlier that if the current liabilities increase, then from a company’s point of view, the company retains the cash as it is deferring payments against its liabilities to a later date. It’s as simple as, ‘I owe you money, but I will pay later instead of paying you now. Hence my bank balance tends to increase.

Therefore, if there is an increase in current liability, we will add it. Now, let us flip the numbers for a momentum –

Current liability of Y1 = 102.74

Current liability of Y2 = 73.53

If we do Y2-Y1

= 73.53 – 102.74

= – 29.21 Crs.

Here is a situation where the company is reducing its current liability, which means it will tend to reduce the cash balance.

If we plug this on our ‘Add: Increase in current liability framework,’ we automatically deduct cash, thanks to the negative sign.

I hope this explanation is clear; else, please do feel free to ask your queries, and I’ll be happy to explain whichever bit you find challenging to understand. I’ve extended the same to all the other line items, and here is how it looks –

One common query at this stage is why we are adding things like provisions and current liabilities and deducting things like inventories and sundry debtors. We are calculating the increase in value in Year 2 over Year 1. Some of these line items tend to increase the cash balance, and some tend to decrease.

The total of all the values of all these line items is the net change in working capital. Cash flow from operations is (indirect method) –

= PAT + Depreciation + net change in working capital

For Year 2, the operating cash flow or operating activity is –

94.36+20.99-147.84

= 32.69 Crs.

At this point, financial modelers will usually quickly check the company’s annual report and compare the stated cash flow from operations to check if it matches.

The numbers won’t match for obvious reasons. But don’t worry about that; in the Indirect cash flow method, or primary concern is to match the overall cashflow number i.e.

Cash from operating activity + Investing activity + financing activity

Here is what the cash flow from operating activity looks like –

Next up is cash flow from investing and financing activities




### 13.4 – Cashflow from investing and financing activities

The first thing we need to consider while dealing with investing activities is the CAPEX spend. If the CAPEX spend increases, then it consumes cash, and if the CAPEX spend decreases, it generates cash (or conserves cash). We can get the CAPEX data from the asset schedule.

Notice, I’ve specified ‘Less: CAPEX’ to indicate that the increase in CAPEX results in cash consumption. I’d also request that you notice the necessary adjustment in the formula bar.

The company has not disposed of any assets, and we know this from the asset schedule. Hence, the disposal of assets will be zero.

The other two line items, i.e., capital work in progress and investments, are straightforward, and we get that from the balance sheet. The total of all the four-line items is the cash flow from investing activities.

Next up is the cash flow from Financing activities. I’ve completed this on excel, do check the snapshot –

I think you know what’s happening with the increase in share capital, secured and unsecured loans. I’ll focus on the last four line items. Past service cost of employee benefit is a one-time cost specific to this company. Costs such are one time in nature should be dealt with slightly differently. Here, you don’t consider the difference between the two years; instead, take the expense applicable for that year directly.

Dividends, too, are a yearly expense, and the company may even decide not to pay dividends for a year. So all such one-time costs should be treated as is. I’ve highlighted the same in the formula bar above.

We have now calculated the cash flows from all three activities. The sum of these three activities gives us the cash flow for the year. Here is the same –

Now, don’t be in a hurry to plug these numbers into the balance sheet. It won’t balance just yet. Remember, we have calculated the cash position for the given year.

What do we need to do to get the complete cash flow picture? Please look away from your device and think about it for a few minutes.

I hope you got the answer. The number we calculated above is for the current year’s cash position. To this number, we need to add the previous year’s closing balance (of cash position) and then arrive at the total cash position for the year. Yes, we are talking about applying the base rule here.

We can get the closing balance of cash and cash balance for Year 1 from the balance sheet. The exact value is now the opening balance of the cash position in Year 2. Add to this the cash flow for the year (which we calculated); we get the closing balance of Year2.

This net cash flow that we have calculated should match the balance sheet numbers. To clarify the same, I’ve pulled the balance sheet numbers –

The historical numbers match (ignore the decimals), so we can now pull the cash flow numbers back into the balance sheet for future years. Yet again, by linking cash flow back into the balance sheet, we continue to integrate the financial model.

I’ve done the same, and like magic, the balance sheet balances 😊

As I mentioned earlier, this is a landmark moment in our financial modeling journey. At this point, we are at least 80% done with the model. In the next chapter, we will take up the valuations.

You can download the excel used in this chapter here –  [Cashflow statement Excel ].

Key takeaways from this chapter.

- One can derive the cashflow from P&L and Balance sheet; this is called the indirect method of cash flow preparation 
 Few line items tend to increase the cash balance, and some tend to decrease the cash balance 
 We should use the depreciation from the balance sheet (or asset schedule ) in the cash flow statement 
 After deriving the cashflow numbers, we need to add the previous year’s cash flow to get the closing balance of the cash position 
 The net cash flow flows back into the balance sheet to balance the balance sheet.
- One can derive the cashflow from P&L and Balance sheet; this is called the indirect method of cash flow preparation
- Few line items tend to increase the cash balance, and some tend to decrease the cash balance
- We should use the depreciation from the balance sheet (or asset schedule ) in the cash flow statement
- After deriving the cashflow numbers, we need to add the previous year’s cash flow to get the closing balance of the cash position
- The net cash flow flows back into the balance sheet to balance the balance sheet.



## 10.Reserves_Schedule_(Part_1)

[Read more](https://zerodha.com/varsity/chapter/reserves-schedule-part-1/)



### 10.1 – Share Capital

So far in this module, we created a few schedules to help us understand the granular details in the financial statements. This chapter will learn how to build another schedule called the ‘Reserves Schedule’.

Although it is called the Reserves schedule, we also include the share capital in the same schedule, calling it the ‘Equity Schedule’. But in most cases, there is not much to analyze with share capital. The bulk of the action is in the reserves and surplus; hence, I refer to it as the ‘reserves schedule’ as a personal preference.

We will again take the help of a ‘helper model’ to understand how to build a reserve schedule. Once we figure the nuances, we switch back to the main model that we are working on and continue to make the model.

For the ‘helper model’, I’ve picked Bata India. For the sake of simplicity, I’ll only consider the last year’s annual report.

From the latest annual report, I’ve highlighted the Equity portion of the balance sheet. Notice there are two components here –

- Equity share capital 
 Other Equity
- Equity share capital
- Other Equity

Some companies explicitly mention that other Equity as Reserves & Surplus, while few companies like Bata call it the “Other Equity”. But it would be best if you remembered that both are the same.

On the other hand, share capital is referred to as the ‘Share Capital’. The share capital of a company has three sections called the Authorized share capital, Subscribed share capital, and issued share capital. Check this snapshot from Bata –

Many get confused with the classification, but it is pretty straightforward to understand. Let me give you an analogy.

If you are in Bangalore and plan to build a house on a vacant piece of plot that you own, then here is what you need to do.

- Hire an architect, get your house designed. 
 Submit your design to the administrative body for civic amenities (BBMP, in Bangalore) 
 Get the design approved 
 Start the construction work
- Hire an architect, get your house designed.
- Submit your design to the administrative body for civic amenities (BBMP, in Bangalore)
- Get the design approved
- Start the construction work

For example, assume you own a 2400 Sq feet plot, plan to build a house (built-up area) for 1000 sq feet and leave the rest as a garden area.

BBMP, will evaluate your 1000 Sq Feet plan, and approve the same, provided the plan complies with the civic regulatory framework.

After you start the construction process, if you change your mind and want to extend the built-up area and build for another 200 Square feet, i.e. a total of 1200 Square feet, then the additional 200 Square feet need separate approval. Remember, you can build only to the extent of what is already approved.

The authorized share capital of a company is somewhat similar. At the time of company formation, each company decides the number of shares they want to issue the promoters, investors, management etc. Accordingly, the company must submit the plan to the regulatory authorities (ROC/MCA).

For example, if the company wants to allot 50,000 shares across all its key people, perhaps it states the authorized share capital as 75,0000 and asks for the regulator’s permission. It is common to get additional shares authorized so that you don’t have to deal with the regulatory process again and again.

Once approved, the company can issue all or part of the authorized share capital.

Going back to the analogy, out of the 1000 sq feet, I can choose to build for the entire 1000 sq feet or only for 800 sq feet. I’ll probably keep 200 sq feet as a buffer to build later.

The actual usage built area is similar to the issued share capital of a company. Think of the issued share capital as the exact number of shares used up. Issued share capital is equal to or less than the authorized share capital but cannot be more than the authorized shares.

Finally, the issued share capital must get subscribed by the investor. Think about an IPO here – a company has an authorized share capital of, let us say, 1000 shares. Of which, the company decides to issue 800 shares.

The company opened up for IPO, but the subscription rate was terrible, and there was only 80% subscription. Then out of 800 issued shares, 640 (80%*800) shares will be the subscribed and fully paid-up share capital.

On the other hand, all 800 shares will be subscribed and fully paid up if the IPO is 100% subscribed.

Keeping the above in perspective, I want you to relook at Bata’s share capital again. Notice the following –

Authorized share capital is INR 700 Million; each share has a face value of Rs.5. Hence the number of shares is –

700 Million / Rs.5

= 140,000,000.

Out of INR 700 Million, INR 642.85 Million is issued (maybe at the time of IPO). If you divide 642.85 million by Rs.5, you will get the number of shares issued, i.e. 128,570,000.

Lastly, the paid-up and fully subscribed shares (remember it should be equal to or less than issued) is INR 642.64 Million or 128,527,540 shares.

I hope this helps you understand the distinction between the different share capital. If not for anything, I want you to remember the following –

- You can calculate the number of shares outstanding by dividing the share capital value by the face value of the share. 
 Suppose the paid-up and fully subscribed share capital is less than the issued share capital. In that case, the company’s IPO is undersubscribed (check Zomato’s IPO details for further understanding). 
 If the demand for the IPO is more than the issued share capital, the IPO issue is said to be oversubscribed. 
 If the company intends to raise more funds via Equity, then the company’s authorized share capital will increase.
- You can calculate the number of shares outstanding by dividing the share capital value by the face value of the share.
- Suppose the paid-up and fully subscribed share capital is less than the issued share capital. In that case, the company’s IPO is undersubscribed (check Zomato’s IPO details for further understanding).
- If the demand for the IPO is more than the issued share capital, the IPO issue is said to be oversubscribed.
- If the company intends to raise more funds via Equity, then the company’s authorized share capital will increase.

On a related note, here is something else I want you to understand.

Imagine a company issues 10,000 shares in IPO. The face value of the share is Rs.10; hence the share capital of this company is –

Share capital = Issued shares * Face value

= 10,000 * 10

= Rs.1,00,000/-

Consider the IPO  gets priced at Rs.250 per share, and the shares are 100% subscribed. The company via the IPO receives –

= number of issued shares * IPO price

= 10,000 * 250

= Rs.25,00,000/-

The company’s share capital is 1L, but the company received 25L via IPO. The additional 24L over and above the share capital will now sit on the liabilities side of the balance sheet, under ‘Reserves & Surplus’, in a sub header called ‘Securities Premium Reserve’.

From the financial modelling perspective, let us dig a bit deeper into the Reserves and Surplus.




### 10.2 – Reserves & Surplus

Let us take another look at the Reserves & Surplus section (also called Equity)  of Bata India.

We have two-line items within this section, i.e. the Equity Share capital and the Other Equity. The associated notes  12 and 13 contain the details related to these two line items.

Share capital remains pretty unchanged, at least for Bata. So there is nothing much to model. Of course, if the company had raised more money, the share capital would change.

The other equity part, or the reserves and surplus part, has a few components that we need to examine. Here is a snapshot of Note 13 –

I will use the base rule concept again to build a schedule around this. I will not bore you with setting up the excel sheet; I guess we have repeatedly done that in the last couple of chapters.

Instead, let me show you the excel set up directly –

I’ve done the usual excel set-up here, i.e., indexing the columns and including the line items, keeping the base rule in perspective. The excel set-up matches with the data present in the associated Note 13. Like I mentioned earlier, I’ve only considered the latest annual report.

Let us input the data into our schedule.

I’ve kept the share capital the same across all years. Note this is the fully paid-up share capital.

The first subheader within the reserves and surplus is the securities premium reserves. We discussed the ‘Security Premium Reserve’ earlier in this chapter. If a company has not raised fresh Equity during the year, there is no change to the security premium reserve.

In the annual report, we only have the data for March 2020 and 2021. However, we know that the closing value of March 2019 should be the opening balance of March 2020, so on and so forth. I’ve applied the base rule to develop the securities premium reserve fully.

Next up is the ‘General Reserve’. The general reserve is earmarked for various business operations of a company without any specific purpose. The company can maintain its general reserves or add a bit every year from the P&L.

Bata India, I suppose, has opted to maintain some funds without any yearly additions; hence applying the base rule is pretty straightforward to the general reserve.

The company’s ‘general reserves’ are used for working capital requirements and other business expenses.

Moving ahead, we look at the ‘Retained earnings’ part. Here is something that you need to know. The profits after tax or the PAT of the company, also called the company’s bottom line, represent the profit earned for the given financial year. These profits get accumulated in the company’s balance sheet under the retained earnings header.

By the way, the PAT flows to the balance sheet and sits in the retained earnings (liabilities side), and that’s one of the ways the two financial statements are interconnected.

The company also pays out the dividends and the dividend distribution tax from the retained earnings part of the balance sheet. Continuing on the excel sheet –

The closing balance for March 19 is the opening balance for March 2020. Add to this the PAT from P&L, i.e. INR 3289.53 Million; this number comes from the P&L –

The company then has two other line items, i.e. remeasurement of gains/losses on defined benefit plan and impact from Ind AS 116. These arise from the accounting treatment and usually do not have any long-term implications. You can note these numbers, but I believe there is nothing much to forecast and model.

Further, you can see that the company has paid dividends and the related dividend distribution tax; both get deducted from the total.

The retained earnings closing balance is the total of all. Note, for March 2021, the company has reported a loss, and the same is carried to the balance sheet. When the company makes a loss, retained earnings shrink.

The Share Capital of the company plus the Reserves & Surplus of the company is the ‘Net worth of the company’. Now imagine if a company makes a loss year after year, then the retained earnings reduce or, in other words, the company’s net worth shrinks.

Finally, the total of the Securities premium reserve plus the general reserves plus the retained earnings forms the ‘Equity’, as stated in the balance sheet.

You can download the excel sheet for Bata’s reserve schedule  from here . The next chapter will jump back to the main model to build and forecast the reserves schedule.

And I promise to put up the next chapter soon 😊

- Think of the authorized share capital of the company as the overall approved shares a company can issue 
 For new equity issues (over and above the authorized share capital), the company must increase the authorized share capital. 
 Share capital stated in the balance sheet is the fully paid-up share capital of the company. 
 Dividing the share capital by the face value of the shares gives us the total number of shares. 
 The security premium reserve of the company is the excess of funds available over and above the share capital. 
 The security premium reserve increases when the company raises fresh Equity. 
 General Reserves of the company is earmarked for business operations of a company without any specific purpose. 
 The bottom line of the company, i.e. the PAT, flows into the retained earnings section of the Reserves, and that’s one way the P&L and the Balance sheet are connected. 
 Dividends and dividend distribution tax gets paid out from the retained earnings.
- Think of the authorized share capital of the company as the overall approved shares a company can issue
- For new equity issues (over and above the authorized share capital), the company must increase the authorized share capital.
- Share capital stated in the balance sheet is the fully paid-up share capital of the company.
- Dividing the share capital by the face value of the shares gives us the total number of shares.
- The security premium reserve of the company is the excess of funds available over and above the share capital.
- The security premium reserve increases when the company raises fresh Equity.
- General Reserves of the company is earmarked for business operations of a company without any specific purpose.
- The bottom line of the company, i.e. the PAT, flows into the retained earnings section of the Reserves, and that’s one way the P&L and the Balance sheet are connected.
- Dividends and dividend distribution tax gets paid out from the retained earnings.



## 7.Asset_Schedule_(Part_1)

[Read more](https://zerodha.com/varsity/chapter/asset-schedule/)



### 7.1 – Recap and way forward

In the previous chapter, we looked at how a basic common sense approach can lead us to build a simple revenue model of a company. We made the revenue model using the helper model. In this chapter, we switch back to the primary model and continue to build our financial model.

To refresh your memory, so far in the primary model, we have –

- Set up the basic excel layout for the financial model (indexing, grids, pane freeze) 
 Input the balance sheet and P&L data. The data source for the model input is the annual report of the company 
 Colour coded the numbers to distinguish between assumptions and facts 
 Built the P&L assumptions 
 Built the Balance sheet assumption
- Set up the basic excel layout for the financial model (indexing, grids, pane freeze)
- Input the balance sheet and P&L data. The data source for the model input is the annual report of the company
- Colour coded the numbers to distinguish between assumptions and facts
- Built the P&L assumptions
- Built the Balance sheet assumption

Both P&L and balance sheet assumptions are in the same sheet, called the ‘assumption sheet’. So far, our model has only three sheets –

- Assumption sheet 
 Balance sheet, sheet 
 P&L Sheet
- Assumption sheet
- Balance sheet, sheet
- P&L Sheet

While we did make assumptions for line items where ever possible, we left out few line items to build a separate schedule for the same. I’d suggest you  download the excel shee t to get a quick grasp of where we are in our journey of building a financial model.

Over the following few chapters, let us go ahead and build these schedules.

We will start with the asset schedule.




### 7.2 – Base rule

Before we build schedules, we need to understand the concept of the base rule. It is a simple concept, you’d probably already know this, but I might as well discuss it now 😊

As usual, let us take an example.

We all know electric vehicles are making a buzz in the market. Ola has plans to manufacture and sell electric bikes.

Consider for the sake of simplicity that Ola manufactures 4000 electric bikes in its first year of operation. Here are few data points that I’ve made up –

- Number of bikes manufactured in 1 st -year operations = 4000 
 Number of bikes sold = 3750 
 Number of bikes unsold = 250
- Number of bikes manufactured in 1 st -year operations = 4000
- Number of bikes sold = 3750
- Number of bikes unsold = 250

On excel –

I’ve introduced opening balance, total bikes, and closing balance here. The opening balance in this context is the number of unsold bikes carried forward from the previous year. It is zero in this example since it’s Ola’s first year of operation.

Total bikes are the sum of opening balance and bikes manufactured. It is 4000 in this case as the opening balance is zero.

The closing balance is the number of unsold bikes for the given year.

Now, let us assume that Ola manufactures and sells the same number of bikes in the 2 nd  year.

Can you pause and tell me what the opening balance, total bikes, and closing balance for the 2 nd  year is?

I hope you got that right. If not, let me quickly explain –

The opening balance for year 2 is the closing balance of year 1. So, in this case, the opening balance for Year 2 is 250.

They manufacture 4000 new bikes, so the total number of bikes is 4250, of which 3750 bikes are sold. Hence the closing balance for year 2 is 500.

The opening balance for Year 3 is the closing balance for year 2. So on and so forth.

The technique of linking the closing and opening balance is the ‘Base rule’. We use this pretty much in all the schedules that we build, including the asset schedule. For now, keep the base rule in the back of your mind. We will get back to it shortly.




### 7.3 – CAPEX

At this stage, let’s quickly understand what we are dealing with here. If you take a good look at the assets (or application of funds) side of the balance sheet –

You will quickly understand that the Gross block is a large item. In fact, in most balance sheets (at least for manufacturing companies), the gross block is the most significant chunk on the asset side. More so, when it comes to the balance sheet assumptions, we have used gross block extensively –

Given its heavyweight, it makes perfect sense to dig deeper into Gross block and strengthen our understanding. I would suggest you do this little exercise –

- Pick a company of your choice and open its annual report 
 Open the balance sheet, check the asset side, and pay attention to the Gross block 
 Notice the associated note number 
 Look at the notes in detail
- Pick a company of your choice and open its annual report
- Open the balance sheet, check the asset side, and pay attention to the Gross block
- Notice the associated note number
- Look at the notes in detail

What do you observe? You are likely to notice the following –

- Gross block is also called ‘Property, plant, and equipment.’ 
 Gross block is (most likely) the heavyweight on the asset side 
 Few companies may report gross block, deduct the depreciation, and report the netblock 
 Few companies report the netblock directly
- Gross block is also called ‘Property, plant, and equipment.’
- Gross block is (most likely) the heavyweight on the asset side
- Few companies may report gross block, deduct the depreciation, and report the netblock
- Few companies report the netblock directly

Further, the associated notes give you a detailed breakup of the gross block, so the notes give you a sense of the nature of this line item. Gross block invariably includes all the details related to the assets the company holds  –

- Land (freehold and leasehold) 
 Improvements for leasehold lands 
 Buildings 
 Plant and machinery 
 Computer hardware 
 Factory equipment’s 
 Electric fittings 
 Vehicles (including aircraft) 
 Maintenance and repair works
- Land (freehold and leasehold)
- Improvements for leasehold lands
- Buildings
- Plant and machinery
- Computer hardware
- Factory equipment’s
- Electric fittings
- Vehicles (including aircraft)
- Maintenance and repair works

The things listed here are ‘CAPEX’ in nature. Now, what is CAPEX?

Capital expenditure or just the CAPEX of a company are funds used by the company to invest,  upgrade, and maintain physical assets such as the ones listed above. For example, if the office roof is leaky, money spent on fixing the roof gets reported as CAPEX.

Or if a manufacturing company wants to build a new manufacturing plant, then right from acquiring the land (or leasing), to setting up the plant with equipment and factory machinery is considered as ‘Capital expenditure’.

Some companies can take up projects so large that the capital expenditure can run across several consecutive years, draining the company of its financing avenues. Of course, companies do this with an expectation that the future payoff from the project far exceeds its current capital expenditure.

When such capital expenditure occurs across many years, it’s called ‘the CAPEX cycle’ of a company.

As an analyst, it is crucial to understand if the company is going through a CAPEX cycle (expansion)  or running just the maintenance CAPEX. If the company is in an expansionary phase, you need to understand why, how, and will the payoff likely exceed the current cash burn.

If the company’s CAPEX is essentially maintenance CAPEX, then you need to figure if the maintenance CAPEX is something that the company can sustain through year on year.

Whenever I think of how maintenance CAPEX can be taxing, I remember my friend’s story.

A good friend of mine (a regular salaried person, like many of us in Bangalore) sold a plot in Bangalore and suddenly became cash-rich overnight. The first thing he did was reinvest the bulk of cash into another property. With the remaining money, he bought himself a fancy BMW, and with that, he expended all the cash he gained from the sale of the property.

The maintenance CAPEX on the BMW is quite heavy – its fuel-guzzling, hefty insurance premiums, and repairs are super expensive. His salary was not supportive of such a CAPEX in the first place. Eventually, he had to sell the car.

I detoured to give you this story to bring your attention to the maintenance CAPEX of the company.

Ensure the company earns enough to maintain its assets.




### 7.4 – Estimating CAPEX

We discussed Ola earlier in the chapter, so let me continue the same example here. Assume, Ola commenced its manufacturing operation with an initial CAPEX plan of 500Crs for year 1. Assume they invest 500Cr into acquiring land, machinery, equipment’s, assembly lines, etc. Remember, this is also Ola’s gross block.

What do you think is Ola’s opening and closing gross block?

We know that for year 2, the opening balance is the closing balance of year 1. Assume Ola does another 100Cr worth of CAPEX in year 2.

I hope it is clear so far. In year 3, assume Ola does not add any Capex but rather sells off machinery worth 50Crs. What do you think is the closing balance for Year 3? And what is and the opening balance for year 4?

Here is the table –

Again, the opening balance for Year 4 is the closing balance for Year 3. Hopefully, this example gives you a sense of calculating the opening and closing balance of the gross block.

When you look at the balance sheet of companies, they directly report the gross block (or property, plant, and equipment) number. Of course, they do not state the CAPEX number in the balance sheet. For example, in the model that we are working on, the gross block numbers are as follows –

These numbers are good enough starting point to develop the asset schedule.




### 7.5 – Asset schedule

We will now start building the asset schedule for the model. As a first step, let’s set up our excel sheet. Setting up the excel is precisely the same as the other sheets in the model –

Let’s roll out the base rule in motion; hopefully, you get the drift here –

As you can imagine, I’ve linked the closing gross block for Year 1 as the opening gross block for Year 2.

The closing gross block for year 2 is 310.58, and this means the assets of the company has increased –

310.58 – 257.78

= 52.80

Hence the CAPEX for year two must be 52.80 Crs. Since the CAPEX has increased, there has been no disposal of assets. I can add this on excel –

I hope you found this easy to understand because it is 😊

I can continue the calculation the same way for the rest of the years.

The numbers here will match the numbers stated in the balance sheet, but we have managed to extract the CAPEX numbers from gross block, which wasn’t explicitly available in the balance sheet.

Remember, the end objective is to arrive at the netblock of the company. Net block, as you know –

Gross Block – Depreciation = Net block.

Sounds straightforward, but here is a twist.

I want you to quickly take a look at the Y2 depreciation numbers stated in the Balance sheet and P&L. Tell me what you think?

Y2, depreciation in the Balance sheet is 121.73 Crs, and for the same year, Depreciation in P&L is 24.45 Crs. Which one will you consider here?

Well, you have to consider both.

Remember, depreciation is an expense. Hence it gets stated in P&L as an expense for that year. But this year’s depreciation gets carried over to the following year in the balance sheet; hence it’s called the accumulated depreciation.

Let us deal with it in excel. Here is how I’ve set up my sheet –

Yes, we will apply the base rule again. I’ll take the closing balance for year 1, set that as the opening balance for year 2. I’ll add to this the current year depreciation stated in the P&L. When I add the opening balance and closing balance, I should get the closing balance of the accumulated depreciation for year 2. The number I get here should match the depreciation number stated in the balance sheet.

As per the base rule, the closing balance is 125.39Crs, but as stated in the Balance sheet is 121.73 Crs. A difference of nearly 3.66 Crs.

How and why is this difference?

Well, the difference arises due to the small asset write-offs and adjustment that happens. We treat this as a depreciation non-expense. If you adjust for this, the numbers should match.

I hope you’ve been able to keep up with this. It is not too complicated, but as a person doing this for the first time, you may find it overwhelming.

Now that we have calculated the gross block and the accumulated depreciation getting the netblock is pretty straightforward.

Net block is the difference between the closing gross block and the closing balance of depreciation.

I’d suggest you match this with the netblock number in the balance sheet for your reference.




### 7.6 – Capex projections

Now that we have set up the asset schedule, we need to move ahead and make some projections here.

The most crucial projection here is the CAPEX projection. It is super important to understand how the company will be dealing with capital expenditure over the coming years. Now, because this is such an important figure, companies usually explicitly state their CAPEX plans. You can get this information by reading the management discussion analysis or the analyst reports (or even watching a business channel).

I’d suggest you take some time to watch this interview to the context into how you can project the CAPEX by considering management’s statements.

In this recent interview, the CFO of Bajaj Auto clearly states the CAPEX requirements for the coming years. In my view, this kind of information is more valuable than any projection we can do.

If you don’t have access to this kind of information, then you have two alternatives –

- Find out the average CAPEX and assume the averages hold for the coming years 
 Variable method, here you look at the company’s historical CAPEX. If the company has been through an expansionary phase (high capex spend), you taper it down. Alternatively, if the company has had a low CAPEX cycle, you gradually increase the CAPEX spend.
- Find out the average CAPEX and assume the averages hold for the coming years
- Variable method, here you look at the company’s historical CAPEX. If the company has been through an expansionary phase (high capex spend), you taper it down. Alternatively, if the company has had a low CAPEX cycle, you gradually increase the CAPEX spend.

Remember, both these techniques are your alternate. Your first option should be the management itself.

In this model, we will use the variable method. Historically, the CAPEX was high, so I will gradually taper it down with an assumption that the company is through with the bulk of its CAPEX cycle. I’ve also assumed that the company has zero disposal of assets.

Now that you have the CAPEX number, isn’t it easy to figure the Closing gross block number? Of course, it is. Let us complete this –

Now that we have the closing gross block number, we can plough these numbers back to the balance sheet.

With this, we have made our first balance sheet projection, so congratulations on that 😊

But why did we plough this back into the Balance sheet right away? Why not complete the depreciation projections and then make the projections in the balance sheet? Well, there is a reason for that.

I’m tempted to continue that explanation here, but I guess this is a super long chapter already. I promise I’ll put up the next chapter quickly, which will have this explanation.

Stay tuned until then!

Download the excel used in this chapter here .

- As per the base rule, the closing balance for year 1 is the opening balance for year 2. We use base rule across many schedules in a financial model
- Gross block includes all the assets that the company owns; usually, the gross block number is a heavyweight on the asset side
- Capital expenditure or the CAPEX of a company includes all funds spent on acquiring new assets or maintaining assets
- Asset schedule helps us extract the CAPEX numbers from the gross block number
- To project the CAPEX, ideally, one should look at what the management has to say
- Other CAPEX projections techniques include the averages and the variable method.



## 5.Assumptions_(Part_2)

[Read more](https://zerodha.com/varsity/chapter/assumptions-part-2/)



### 5.1 – Deferred tax

A gentleman posted an interesting comment in the previous chapter. The company he chooses to model did not present the gross block data in the way the company we are dealing with has, i.e. –

Gross block – Depreciation = Net block

Instead, the company directly reported the ‘Net block’ data.

Given this, how would one go about building the assumptions with Gross block as the base for many balance sheet based assumptions?

While the balance sheet reports only the ‘Net block’ number, the associated notes usually carry the gross block and depreciation numbers. One has to extract these details from the associated notes and rebuild the gross block.

It may sound a bit complex at this stage, but don’t worry; we will take this up in the next chapter and lay down the steps involved one at a time.

By the way, I hope you got to look at the raw data of P&L and Balance Sheet and layout the data in a model friendly manner. Assuming you’ve done that, we will now continue from where we left off in the previous chapter.

The previous chapter calculated the deferred tax’s growth rate from Y2 to Y5 and its average from Y6 to Y10. While this is ok, it still results in a somewhat volatile set of numbers. There is a better way to do this, and I’d like to discuss it.

If you understand deferred tax, you’d know that it occurs due to the way depreciation is treated. Hence deferred tax and depreciation is connected.

So, rather than taking the growth rate of deferred tax, it probably makes sense to consider deferred tax as a percentage of depreciation.

For Y2, the deferred tax is 16.95Cr, and depreciation is 121.73 Cr. So deferred tax as a percentage of depreciation for Y2 is –

16.95/121.73

=  13.92%

We can continue this for Y3, Y4, and Y5 on excel –

As you see, the numbers look much more stable. I’d request you to please make this change in your model. Now, for the projections, you need to take the rolling average. For Y6, it would be the rolling average of Y2 to Y5; for Y7, it’s the rolling average of Y3 to Y6 and likewise.

The resulting percentage range is also relatively stable.

Before you crib and curse me for making you redo the deferred tax bit, I’d like to tell you that the growth rate method for assumptions is critical, and we will use it in this chapter when we take up P&L assumptions.

So in that sense, you already have a heads up 😊




### 5.2 – Dealing with inventory

With the deferred tax assumption, we also complete the liabilities side of the assumption. Please note that we have not made any assumptions for share capital and borrowings; these are line items we will deal with separately by building ‘schedules’.

So we now proceed to the asset side of the balance sheet, and the first line item to consider is the inventory.

If you look at the inventory data as stated in the balance sheet, you’ll realise the worth of inventory that’s lying with the company. For instance, for Y1, the inventory worth was 92.17 Crs; for Y2, it’s 194.33 Crs, Y3 it’s 160.83 Crs etc.

Any manufacturing company ends up having inventories in its balance sheet, and as you know, the inventory is nothing but the company’s finished goods. The objective of the company is to sell the inventory as quickly as possible. Hence lesser the number of days the company takes to sell the inventory, the better it is for the company.

Based on the nature of every company, the company takes up a certain number of days to convert its inventory to sales.

For example, a company manufacturing pressure cooker may convert its inventory to sales in 30 days, but a company manufacturing cars may take 75 days to convert inventory to sales.

When it comes to the inventory assumptions, we take the following approach –

- Convert the Rupee value of inventory to the number of days the company takes to convert to sales 
 Find the average number of days for the future years 
 Convert the average number of days back to the Rupee value for the future years
- Convert the Rupee value of inventory to the number of days the company takes to convert to sales 
 Find the average number of days for the future years 
 Convert the average number of days back to the Rupee value for the future years
- Convert the Rupee value of inventory to the number of days the company takes to convert to sales
- Find the average number of days for the future years
- Convert the average number of days back to the Rupee value for the future years

Sounds complex? Perhaps, but let’s go ahead and execute the above steps in our model and see how it goes. I’m sure you’ll eventually find it easy 😊

But before we proceed, why even take the pain of doing all the above? Why not directly take the growth rate of inventory and its average and move ahead (like how we treated deferred tax in the previous chapter)?

When you convert the Rupee value of inventory into the number of days to sales, you also get additional insights about the company. These insights help make investment decisions. For instance, imagine there are two companies manufacturing cameras that are similar in all aspects. Company A takes 40 days to convert inventory to sales, and company B takes 70 days to convert. What can you infer from this?

- Company A seem to have a better inventory management 
 Maybe Company A has a superior product. Hence the market prefer cameras from company A 
 Or maybe Company B’s sales incentives for merchants is not as attractive as A’s, so merchants tend to push Company A 
 Perhaps, company A have efficient management, meticulously planning these things
- Company A seem to have a better inventory management 
 Maybe Company A has a superior product. Hence the market prefer cameras from company A 
 Or maybe Company B’s sales incentives for merchants is not as attractive as A’s, so merchants tend to push Company A 
 Perhaps, company A have efficient management, meticulously planning these things
- Company A seem to have a better inventory management
- Maybe Company A has a superior product. Hence the market prefer cameras from company A
- Or maybe Company B’s sales incentives for merchants is not as attractive as A’s, so merchants tend to push Company A
- Perhaps, company A have efficient management, meticulously planning these things

You see, the list of insights can go on and on. Hence it makes sense to take that extra effort to juggle and calculate the inventory number of days and let’s do that right away.

On excel, the inventory number of days is calculated easily by applying a formula. I call it the conversion formula because it converts the Rupee value of inventory to the inventory number of days.

For Y1 and Y2, the inventory value is 92.17 Crs and 194.33 Crs, respectively. To convert, we apply the following formula –

= (Average inventory of Y1 & Y2 / Materials consumed for Y2) * 365

In the denominator, you may ask why we use the materials consumed for Y2 and not Y1. Well, this is because we are calculating the inventory number of days for Y2. If we were to do this for Y1, then the formula is –

= (Average inventory of Y0 & Y1 / Materials consumed for Y1) * 365

Since we don’t have the Y0 data, we start with Y2.

So applying the formula for Y1 and Y2 –

= Average (92,17, 194.33)

= 143.25

Material consumed for Y2 (data available in P&L) = 762.86 Crs

=143.25/762.86

= 0.18778

Finally, we multiply the above result with 365 to get the inventory number of days –

= 0.18778 *365

= 68.53

The above number means the company takes about 68 days to convert 143.25Cr of inventory to sales.

Of course, you can do this in excel in one shot –

Please notice, I’ve included ‘inventory number of days in the assumption sheet and executed the conversion formula directly. I’d suggest you do the same in your excel.

Once I’ve calculated the inventory number of days for Y2, I can drag the excel to rows Y3, Y4, Y5 and get the respective values.

Notice, the inventory number of days consistently ranges between 68 to 78 days. To get a sense of how good or bad this number is, you need to compare it to a company operating in the same sector, of similar size. For example, Bajaj Auto and Hero Motors are similar companies doing similar business.

Moving ahead, for the Year 6 to Year 10, we can take the moving average of the inventory number of days.

We have calculated the historical inventory number of days and projected the inventory number of days for the future years.

In fact, you can take a similar approach to Sundry Debtor/Account receivables as well i.e. to convert receivables from Rupee value to receivable number days and then back to receivable in Rupee value.

In the next chapter, I’ll probably explain the process with the help of the helper model.

For now, let us move ahead with other balance sheets and P&L assumptions.




### 5.3 – Other Balance sheet assumptions

If you look at the asset side of the balance sheet, these are the line items stated by the company –

We have dealt with the inventories already.

Just like on the liabilities side, we will build a schedule for the gross block. Cash and Bank balance in current assets will be dealt with in detail in the cash flow statement.

We will make the assumptions for the remaining line items on the asset side. Let me quickly run you through the thought process before we jump to excel.

- Sundry debtors – I’ll consider this as a percentage of Gross block (but remember there is an alternate way i.e. to convert to days and back) 
 Loans, advances, and deposits – As you can imagine, this line item is related to the company’s working capital. Hence I’ll consider this as a percentage of net sales 
 Other current assets – This is a small number for Year 1 and does not exist for the rest of the years, so I’ll ignore 
 Capital work in progress – As a percentage of net sales 
 Investments – As a percentage of Gross block
- Sundry debtors – I’ll consider this as a percentage of Gross block (but remember there is an alternate way i.e. to convert to days and back) 
 Loans, advances, and deposits – As you can imagine, this line item is related to the company’s working capital. Hence I’ll consider this as a percentage of net sales 
 Other current assets – This is a small number for Year 1 and does not exist for the rest of the years, so I’ll ignore 
 Capital work in progress – As a percentage of net sales 
 Investments – As a percentage of Gross block
- Sundry debtors – I’ll consider this as a percentage of Gross block (but remember there is an alternate way i.e. to convert to days and back)
- Loans, advances, and deposits – As you can imagine, this line item is related to the company’s working capital. Hence I’ll consider this as a percentage of net sales
- Other current assets – This is a small number for Year 1 and does not exist for the rest of the years, so I’ll ignore
- Capital work in progress – As a percentage of net sales
- Investments – As a percentage of Gross block

Once I calculate the historical percentages, I’ll go ahead and calculate the rolling average for the future years. Like I’ve mentioned earlier, feel free to change the denominator based on your understanding of the firm and its financial statements. Remember, assumptions are the art bit in financial modelling; you are free to experiment, but ensure it is not too way out of wack 😊

So let me go ahead and implement the above in the excel sheet. I’ll post a series of snapshots hopefully that will be self-explanatory –

I’ve continued on the assumption sheet and lined up the line items in the same sequence as it appears in the balance sheet. Remember, I’ll do all the necessary calculations starting from Year 2 for consistency with the other assumptions.

I’ve calculated the percentages for Year 2, and I’ve highlighted the loans, advances, and deposits as a percentage of net sales. You can see both the formula bar as well as the F16 cell. I’ve highlighted this to showcases the  P&L line item in the denominator.

Hopefully, you will find this as an easy step to implement. Do let me know if you find any difficulties in implementing this by commenting below.

In the next step, I’ll drag the rows to the right till year five, and from year 6 onwards, I’ll take the averages.

I’ve highlighted the average calculation for your better understanding. For the last balance sheet line item, i.e. investment as a percentage of Gross Block, I’ll not calculate the average for Y6 to Y10. Instead, I’ll assume a constant of 3.5% of the gross block.

Why not the average like other line items? Why 3.5%? Why not 4% or 3%? These are all valid questions.

The percentage calculated is quite volatile. It ranges from 3% to 11%, I’m not too happy with it, and therefore I’d like to keep it at a constant 3.5%.

Why not 4 or 3%? Well, that’s the beauty of a financial model. Once the model is complete, I can change this to any value that I think makes sense. Hence I don’t have to stress on it now and stick to 3.5% and move ahead.

With this, we have completed the balance sheet side of assumptions. Whatever is left out will be dealt with in the form of schedules.

We will now move ahead with the P&L assumptions; this should be pretty easy.




### 5.3 – P&L assumptions

Let us start by taking a look at the P&L –

There is the revenue side, and then the expenses side to the P&L. Revenue side has the sales and other income data, while the expense has the details on all the expenses incurred during the year.

Making assumptions on the expenses side is super easy; all these line items are calculated as a percentage of the net sales or the total income. Revenues, on the other hand, is very interesting. You can either calculate the growth rate or deep dive to build a revenue model.

I want to discuss both these methods. In the primary model that we are dealing with, let us discuss the growth rate method of revenue forecasting. However, we will take the help of a helper model to build a revenue model.

Perhaps we can do both the revenue model and the receivable number of days in the next chapter.

Moving ahead, I’ll create another section in the assumption sheet to accommodate the P&L assumptions. Just for your clarity, this is how my assumption sheet looks at this stage –

Under the new P&L assumptions section, I will proceed sequentially, in the same order that the line items are present in the P&L.

Notice, as discussed earlier, I’ve considered the growth rate for net sales, and for the remaining line items, I’ve considered these as a percentage of net sales. For example, other income is the percentage of the net sale; and the increase in stock is also a percentage of the net sale. So on.

Let us start with the Net sales growth rate; the growth rate is calculated the same way we calculated the deferred taxes growth rate in the previous chapter. Here is the snapshot of Net sales growth rate –

Yes, 81.83% seems high, but it is based on the net sales numbers reported by the company in Y1 and Y2. Here is something interesting that you can do. If you feel the numbers are unusually high, then you can always cross-reference how the peer companies performed during the same period.

If a company belonging to a particular sector has done phenomenally well for a particular year, its peer companies would most likely have performed equally well. For example, if MRF posts a 20% increase in revenue for Y1, you should expect Apolo Tyres to post a 20% increase in revenue. But for whatever reason, Apollo posts 16%, then you know that MRF probably has the edge over its competition.

Of course, this is a very rough example, but I’m highlighting this to give you a perspective of how you can think about companies while building the model.

I’ll go ahead and complete the P&L assumptions. As you can imagine, it is pretty straightforward, or so I assume because we have done this in the balance sheet assumptions.

I’ve highlighted the Year 6 cell for net sales to showcase that subsequent calculations are all simple averages. Of course, this excel will be available for you to download and inspect each cell.

If you look at the P&L, the last two items on the expense side are Depreciation & Amortization and interest expense. These numbers will flow from the schedules that we will build subsequently.

The assumption sheet is now complete, and this is how it looks –

I’ve compressed the image to ensure you get to see the entire page.

I hope you followed the steps we’ve discussed in this and the previous chapter. Please do let me know if you have any queries; I’ll be happy to reply to your queries to the best of my abilities.

In the next chapter, we will take the help of a helper model and understand how to deal with receivables (assumptions) and set up a revenue model.

Download the excel sheet used in this chapter here .

- Deferred tax is as a percentage of depreciation 
 Converting inventory data from Rupee value to the number of days helps us develop unique perspectives into the functioning of the business 
 Likewise, with the Receivable data 
 A detailed revenue model gives granular insights into the revenue pattern of a company 
 All line items belonging to P&L and Balance sheet are assumed in the assumptions sheet. A schedule is built for the items which cant be assumed directly 
 Specific schedules give us granular insights into the specific line item
- Deferred tax is as a percentage of depreciation 
 Converting inventory data from Rupee value to the number of days helps us develop unique perspectives into the functioning of the business 
 Likewise, with the Receivable data 
 A detailed revenue model gives granular insights into the revenue pattern of a company 
 All line items belonging to P&L and Balance sheet are assumed in the assumptions sheet. A schedule is built for the items which cant be assumed directly 
 Specific schedules give us granular insights into the specific line item
- Deferred tax is as a percentage of depreciation
- Converting inventory data from Rupee value to the number of days helps us develop unique perspectives into the functioning of the business
- Likewise, with the Receivable data
- A detailed revenue model gives granular insights into the revenue pattern of a company
- All line items belonging to P&L and Balance sheet are assumed in the assumptions sheet. A schedule is built for the items which cant be assumed directly
- Specific schedules give us granular insights into the specific line item



## 11.Reserves_Schedule_(Part_2)

[Read more](https://zerodha.com/varsity/chapter/reserves-schedule-part-2/)



### 11.1 – Move and Copy

The last chapter helped us understand how to build a reserves schedule for a given company. We made the reserves schedule for Bata India Limited and, in the process, discussed the concept of share capital, security premium reserve, capital reserve, and general reserve. Most importantly, we also discussed how the bottom line from the P&L statement flows into the reserves in the balance sheet, thus linking the P&L and Balance sheet statements.

This chapter will switch back to building the reserves schedule for the main model we are working with. As you know, we do not have access to the balance sheet and the associated notes of this company; hence we will have to make do with the raw data. You will soon realize that the reserves schedule we are about to build is no different from Bata India’s reserves schedule.

I’ll keep this chapter short because there is no conceptual explanation. This chapter will demonstrate how to build the reserve schedule. Given how straightforward this chapter is, you can also skip it. Or maybe skim through it as a revision of the previous chapter.

Setting up the excel for reserves schedule is straightforward, but let me take this opportunity to introduce a shortcut on excel. We know that the reserves schedule sheet on excel will look just like the other schedule that we have already built. Each column will represent the same years, and that won’t change. Given the consistency across the financial model, we can create a copy of any of the schedules (debt or asset) and modify the same.

To create a duplicate, go to the sheet (I’ll go to the debt schedule) and right-click on the tab –

Click on ‘Move or Copy’ and click on the sheet you want to copy.

Clicking on ‘Create a copy’ will create a duplicate copy of the sheet you’ve selected, the debt schedule sheet in this case. Here is how it looks –

The number 2 in the bracket indicates a copy of an already existing sheet in the workbook. Once the copy is created, you can delete the contents on this sheet and retain the column indexing, like seen below –

The move and copy technique is a shortcut and saves time setting up the sheet. We avoid going through several steps, and our sheet gets set up quickly.




### 11.2 – Building the schedule

Initially, the share capital of the company was INR 13.9Crs. The company raised equity in the 3 rd  year, bumping the share capital to INR 17.08Crs. We can assume that the company won’t raise fresh money and keep the share capital constant.

For the split-up of reserves, here are the line items. Of course, we don’t have the associated notes for this; you must consider what I state here as the actual data.

The company has Capital reserves at just Rs.11,500/-. I know it is a relatively small number, but I suppose the company maintains this for optics.

The security premium reserve is at INR 31.19 Crs across all the years. The opening balance of Year 1 general reserves of the company is at INR 83.81Crs. The yearly addition to general reserves is mentioned in the P&L, which we can pull to the reserves schedule.

The bottom line of PAT feeds into the surplus part of the ‘Reserves and Surplus’ schedule.

With this data, we can build the reserves schedule. Here is how the sheet looks –

As you can see, I’ve linked the yearly additions for the general reserves from P&L. Like I stated earlier, the surplus in the Profit and loss account is the PAT from P&L.

To complete the reserves schedule, we will have to project the general reserves addition during the year; this is a P&L projection. We can go back to the assumption sheet and build a separate assumption or make a projection directly in the P&L.

But as you can see, the appropriation to general reserves depends on PAT, which further relies on revenue and expenses. In the next chapter, let us compile everything we have done and project both the balance sheet and P&L. Of course, we will also complete the reserves schedule in the next chapter.

You can  download the excel sheet  used in this chapter.

Key takeaways from this chapter

- Move and copy feature in excel helps you replicate excel sheets in the given workbook 
 Some companies, in their P&L, give the split of apportions they would make towards the general reserves 
 To complete the reserves schedule, one must ensure the P&L is fully projected.
- Move and copy feature in excel helps you replicate excel sheets in the given workbook
- Some companies, in their P&L, give the split of apportions they would make towards the general reserves
- To complete the reserves schedule, one must ensure the P&L is fully projected.



## 12.Projections

[Read more](https://zerodha.com/varsity/chapter/projections/)



### 12.1 –  Milestone

When building a financial model, there are two essential milestones. We will hit the first one in this chapter and the 2 nd  milestone in the next.

Before we proceed, I’d like to jog your memory and run you through the various steps we have performed in our financial modeling journey. If you are struggling with any of the following topics, I’d suggest you revisit the relevant chapter and read through it again. Don’t forget to ask your queries and get them answered.

- We started the module with a blank excel workbook and formatted a financial modeling-friendly sheet. We indexed the columns and froze the panes. We ensured each column refers to the same year across the model to maintain certain integrity. 
 We reviewed the company’s annual report to ensure the statements were consistent; we copied the last five years’ P&L and Balance Sheet data onto the formatted excel sheet. The P&L and Balance Sheet data are the only hard-coded numbers in the financial model; the rest are assumed or calculated. 
 We introduced an assumption sheet and dumped all the P&L and Balance Sheet assumptions. The assumptions are based on growth rate or calculated as a more prominent line item percentage. 
 The first thing to build after the assumption sheet is the revenue model. The revenue model gives a granular view of all the variables which control the revenue. 
 We introduced the concept of ‘schedules’ in our model. Schedules are essentially assumptions, but the assumption is broken down into several parts to gain more significant insights. 
 Schedules follow the base rule concept, where the closing balance of year 1 is the opening balance of year 2. 
 With the assumptions and schedules, we have managed to project the balance sheet and P&L to some extent.
- We started the module with a blank excel workbook and formatted a financial modeling-friendly sheet. We indexed the columns and froze the panes. We ensured each column refers to the same year across the model to maintain certain integrity.
- We reviewed the company’s annual report to ensure the statements were consistent; we copied the last five years’ P&L and Balance Sheet data onto the formatted excel sheet. The P&L and Balance Sheet data are the only hard-coded numbers in the financial model; the rest are assumed or calculated.
- We introduced an assumption sheet and dumped all the P&L and Balance Sheet assumptions. The assumptions are based on growth rate or calculated as a more prominent line item percentage.
- The first thing to build after the assumption sheet is the revenue model. The revenue model gives a granular view of all the variables which control the revenue.
- We introduced the concept of ‘schedules’ in our model. Schedules are essentially assumptions, but the assumption is broken down into several parts to gain more significant insights.
- Schedules follow the base rule concept, where the closing balance of year 1 is the opening balance of year 2.
- With the assumptions and schedules, we have managed to project the balance sheet and P&L to some extent.

As you may have noticed, the numbers criss-cross from one sheet to another, making the model wholly integrated.

This chapter will fully project the P&L and Balance sheet for the next five years, and that’s a mini-milestone in our financial modeling journey.




### 12.2 –  P&L Projection

We are at an exciting phase in our financial modeling journey. One financial modeling enthusiast related this phase to a wedding kitchen scene.

In a typical wedding kitchen, usually, there is one person chopping veggies, one person grinding the masala, one person frying stuff, another mashing, another preparing the garnish, and whatnot. Finally, in the end, everything comes together and falls into one gigantic vessel for the final dish to take shape.

Likewise, so far in this financial model, we have done several things in isolation. But now, it’s time to tie things up and integrate our model.

Let’s start by taking a look at the P&L snapshot –

Except for the depreciation and interest expense, none of the other line items in the P&L statement are projected. We projected depreciation from the asset schedule and the interest expense from the debt schedule. We will now project the rest of the P&L, which is an easy task.

Starting with revenues, we look at our assumptions for net sales. Recollect, we calculated the year-on-year growth rate of net sales and then projected the average growth rate.

We know the net sales for the 5 th  year and the net sales growth for the 6 th  year (the projected year); we have to do the math to get the actual value. The math is quite straightforward –

The net sales growth rate for the 6 th  year = 33.71%

Net sales for 5 th  year = Rs.1761.12 Crs

Net sales for 6 th  year = 1761.12*(1+33.71%)

= 2354.71 Crs.

On excel, I’ve calculated using the same approach for all future years –

One thing that I always make a point to check is the cell linkages. I liked cell J in the P&L sheet and cell J in the assumption sheet. The association is correct, and I need not worry about inadvertent linkage errors.

Once the net sales numbers are in place, we can proceed with other projections since most projections are based on net sales. I’ll demonstrate one of the line items and assume you can do the rest 😊

We need to multiply the percentage in the assumption sheet with the net sales and get the value. You can see from the screenshot above that I’ve done this for other income and  ‘increase in stock.’ Here is how the fully projected Revenue numbers look –

We can do the same thing for the expense as well –

Next is the calculation of Profit before tax (PBT), which is essentially the difference between the total income and the total expenses. After calculating the Profit before tax, we need to calculate the tax amount. The tax amount calculation is a very tricky job, and one would need the auditor’s help to arrive at the exact value. Since we must continue the model, we will depend on the averages.

To calculate the average, we have to calculate the tax paid with respect to the PBT in percentage terms. For example, in Y1, the tax paid is 24.15Cr against the PBT of 71.2Cr. In percentage terms,

= 24.15/71.2

= 34%

I can now do the same math across Y1 through Y5 and get the yearly percentages. Once the percentage is in place, I can find out the average across the last five years and treat that as the tax percentage for year 6. You can do this math in one shot in excel –

Please get comfortable with this technique; we will be using it again shortly. Anyway, we now have the PBT and the provision for current year taxes, PAT of the company is PBT-Taxes, which I’ve calculated.

We are now the last leg of P&L projections. I want you to take a look at this section of P&L  –

The previous year’s Profit is the last year’s closing balance, i.e., ‘balance carried to balance sheet.’ Yes, we apply the base rule again. We now add up the PAT and the Profit available for appropriation to get the total corpus available for allocation.

The transfer to the general reserves is based on the PAT. Here is a tricky part, we have to calculate the appropriation to general reserves, which from P&L goes back to the Reserves schedule. The dividend and dividend tax, too, are calculated. All these calculations are made exactly like how we calculated the tax provision.

Now the closing balance of Rs.634.37Cr for Year 6 is the opening balance for Year 7 and so on. Here is the complete projected P&L for your reference.

We have an old task to complete before moving to the balance sheet projections.




### 12.3 – Reserves Schedule

We were stuck with the reserves schedule because we had no new yearly additions to the general reserves. We can now pull that data from the P&L and complete the reserves schedule.

Of course, we will pull the reserves schedule data back to the balance sheet. I hope you appreciate how the model is integrated with numbers moving from one sheet to another. The model will only get tighter from here, and even after this many years, I get excited looking at these financial models slowly taking shape 😊

Over to the balance sheet.




### 12.4 –  Balance sheet projections

The balance sheet projection is very similar to the P&L projection. Like the net sales in P&L, the gross block is the alpha line item in the balance sheet. Most of the balance sheet assumptions are based on gross block. I will skip through the few line items in the balance sheet that I think is straightforward and post the snapshot for your reference –

Here, current liabilities and current provisions are calculated as a percentage of the gross block. Shareholders’ funds and loans are calculated separately in their respective schedules. Deferred tax liability is calculated as a depreciation percentage (from asset schedule).

Moving ahead, we have the application of funds or the assets side of the balance sheet. The first line item we have to deal with is the inventory. We probably need to spend some time on the inventory.

The inventory value that we see in the balance sheet is the Rupee value of the inventory. We take the inventory data and calculate the ‘Inventory number of days, which is the number of days the company requires to covert the inventory to actual sales. The inventory number of days was calculated in the assumption sheet.

In a sense, the inventory number of days helps us develop an opinion on management’s efficiency, the product’s popularity, market acceptance, etc. For the future years, we take the average of the inventory number of days.

We have the inventory data in Rupee terms in the balance sheet; we have the inventory number of days in the assumption sheet. We also have the inventory number of days for the future years. We now have to convert the inventory number of days for the future years back to the inventory value in the balance sheet. To summarize –

Balance sheet inventory data >> convert to inventory number of day >> project using averages >> convert back inventory number of days back to Rupee value.

The formula to convert inventory number of days back to Rupee value is –

Two*(Inventory number of days * (Material consumed/365))-Previous year inventory.

I will not get into how this formula is derived as that would be a digression; maybe you can look it up online.

I’ve applied the above formula directly on excel (balance sheet), and here is how it looks –

The rest of the balance sheet projection is a breeze. I’ll make the projections as per the balance sheet –

Well, congratulations on this mini-milestone. At this point, we have the complete P&L balance sheet projected, except for the cash and bank balance.

We will project the cash and bank balance in the next chapter by building the cash flow statement, which in my opinion, is a significant milestone in our financial model, and there is a reason for that. As you can imagine, the cash and bank balance numbers from the cash flow statement will flow back to the balance sheet. When the cash numbers hit the balance sheet, I’d expect the balance sheet to balance. So, let’s see if that happens in the next chapter 😊

One last thing before we conclude this chapter. We are dealing with so many numbers and projections we are bound to make mistakes. For example, two months after building this model, I may feel that the gross block number for Y6 is 700Cr instead of 588.77Cr; what should I do? Do I have to change the entire model?

No necessary. Since we are building the model in an integrated fashion, we only have to change in one place. The rest of the changes will reflect on their own. So don’t worry too much about the model’s accuracy just yet. We can play around with it as and when we want.

I hope you update your models and bring them up to this level. Do post your queries in the comment section.

Download the  excel sheet used in this chapter here .

- Most of the P&L and balance sheet projections are straightforward. Take the cues from the assumption sheet. 
 Taxes, general reserves, and dividends can be estimated directly in the P&L statement by taking historical ratios and then their average 
 The appropriation to general reserves from the P&L statement flows back to the reserves schedule to complete the reserves schedule, which flows back to the balance sheet. 
 Inventory is converted to inventory number of days and back to inventory in the balance sheet. 
 All line items in the P&L and balance sheet are projected except for the cash and bank balances. 
 To project the cash and bank balance, we need the cash flow statement 
 The expectation is that the balance sheet gets balanced when the cash and bank balance number flows from the cash flow statement back to the balance sheet 
 Since the model is fully integrated, we can change any number in the balance sheet without worrying about its impact on other parts of the financial model.
- Most of the P&L and balance sheet projections are straightforward. Take the cues from the assumption sheet.
- Taxes, general reserves, and dividends can be estimated directly in the P&L statement by taking historical ratios and then their average
- The appropriation to general reserves from the P&L statement flows back to the reserves schedule to complete the reserves schedule, which flows back to the balance sheet.
- Inventory is converted to inventory number of days and back to inventory in the balance sheet.
- All line items in the P&L and balance sheet are projected except for the cash and bank balances.
- To project the cash and bank balance, we need the cash flow statement
- The expectation is that the balance sheet gets balanced when the cash and bank balance number flows from the cash flow statement back to the balance sheet
- Since the model is fully integrated, we can change any number in the balance sheet without worrying about its impact on other parts of the financial model.



## 9.Debt_Schedule

[Read more](https://zerodha.com/varsity/chapter/debt-schedule/)



### 9.1 – Dealing with debt

We dealt with fixed assets in the previous chapter. The fixed assets, as you realize, is the most oversized line item on the asset side of the balance sheet. In this chapter, we will deal with the debt, which is present on the liabilities side of the balance sheet.

We will use the base rule again to help us deal with debt.

If you glance over the balance sheet, on the liabilities side, you’ll see the debt figures –

There are three things to note here –

- The debt numbers are ‘non-current, in nature. This means these are long-standing debt, carried across multiple years 
 Secured loan – loan against collateral (mainly in the form of tradable securities) 
 Unsecured loan – Non-collateralized loan.
- The debt numbers are ‘non-current, in nature. This means these are long-standing debt, carried across multiple years
- Secured loan – loan against collateral (mainly in the form of tradable securities)
- Unsecured loan – Non-collateralized loan.

Generally speaking, an unsecured loan comes at a higher rate. In our model, we have secured and unsecured loans stated separately, but this may not always be the case.

To give you a perspective, I’ve picked the balance sheet of Relaxo Footwear here to highlight the borrowings –

The borrowing is under current liability, which means the borrowing is short term in nature. As you can see, the company generalizes the ‘borrowing’ and does not specify if it’s secured or unsecured. To figure the nature of borrowing, you can dig deeper into the associated notes; note 15 in this case.

The notes specify that there is no non-current borrowing. But if you notice, there was a non-current, secured loan in 2019, which is repaid.

For FY 2020, the current loan outstanding (Rs.19.16 Crs) is secure. Further, we can also see the securities tendered for securing the loan.

Take another example –

We have the balance sheet of Biocon Limited for March 2021. The company has borrowings under both current and non-current liabilities side. Note that the company does not give any details of the nature of these borrowings in the balance sheet. Instead, the associated notes give us all the details.

Here is the snapshot of Note 14, giving the details of the borrowings under the non-current liability side –

The borrowing is both secured and unsecured.

The details of the current liability borrowings are as follows –

Now, as long as you get the split of the loans, you can build a debt schedule using the technique we will discuss in this chapter.




### 9.2 – Sheet setup

We will set up a sheet similar to the asset schedule. I suppose you are pretty familiar with how to go about setting up the sheet –

We follow the usual format protocol here, i.e., index columns A & B, expand column C, freeze panes, and link Y1 to Y10 from cell E to N. I hope you are comfortable with the base rule to deal with the opening and closing balance figures. Else, I’d suggest you go through the previous chapters to figure how.

As you can see below, I’ve set up the base rule for both secured and unsecured loans.

In cell E8, I’ve linked the secured loan value of Year 1 to denote the closing balance for Y1. As per the base rule, the closing balance of Y1 works as the opening balance of Y2.

For Y2, the closing balance of the secured loan is Rs.226.65 Crs, clearly suggesting that the company has new loan issues to the extent of Rs.119.16Crs.

Further, in Y3, we see that the closing balance for the secured loan is Rs.207.83Crs, which implies that the company has repaid a portion of the loan.

You can extend the same for all the years for secured and unsecured loans and build the sheet. Here is how my sheet looks now –

The next bit is the projection of how the future year new issues and repayments will look like. The best way to estimate this is by understanding the management’s CAPEX plans. If the management has ambitious CAPEX plans, I think it’s fair to project the debt, keeping the management’s guidelines in perspective.

I’d like you to watch this video clip, where the CMD of HPCL talks about CPAEX plans and the means to fund the CAPEX –

https://www.youtube.com/watch?v=HiCybI9sjEY

The CMD also states figures to indicate the amount via debt. The point here is that when you have to project the new issue and repayment figures, always look for what the management has to say. You can find this information by skimming through the annual reports, analysts conference call transcripts, management interviews etc.

If none of that is available, then you will have to project based on the previous trend. The trend in our model is easy to establish. In the years Y1 and Y2, the company had a large outstanding loan, which over time has reduced.

The company availed no new fresh issues, and we can also see that the company has repaid the loan. We can expect a similar trend to continue and project for the future years. To do that –

- Keep new issue at zero 
 Calculate the average repayment
- Keep new issue at zero
- Calculate the average repayment

If the above technique does not fit well with your approach, let the debt remain. The worst that will happen with some debt on the book is that our final valuation may turn out a bit conservative, which is not a bad outcome, in my opinion.

I’ll keep the debt as is in this model and complete the secured and unsecured loan.

Please look at the schedule at this point. There is an opening balance and a closing balance, and then there is secured and unsecured debt. If I were to estimate the company’s debt position, how can I do that? Should I consider the opening balance as on 31 st  March or the opening balance on 1 st  April?

To address this, we can take the average across the opening and closing balance of both secured and unsecured debt and get the average loan outstanding.

Next, from the P&L, we know the interest expense for the year. By dividing the interest expense over the average outstanding loan, we get the interest rate applicable to the company. I’ve executed both these steps on excel, and here is how my sheet looks now –

As you can see, I’ve calculated the average of the opening and closing balance across both secured and unsecured loans.

I’ve divided the interest expense stated in P&L over the average outstanding loan for the interest rate.

Now that we have the applicable interest rate, we can project the future year interest rates by taking an average.

At this point, we have the average interest applicable, plus we have the average loan outstanding, with we can project the future year’s interest expense as well. All we have to do is multiply the interest rate with the average loan outstanding.

We can do this directly in the P&L.

Note the numbers from the debt schedule are flowing into the P&L, and with that, we have made the 2 nd  P&L projection.

We can pull the numbers from the debt schedule to complete the non-current liabilities on the balance sheet.

You can  download the excel sheet  used in this chapter here. In the next chapter, we will look at the reserves schedule.

- Debt can be secured or unsecured 
 The balance sheet gives us the overall debt; associated notes give us the split between secured and unsecured loan 
 We can calculate the average of opening and closing balance across secured and unsecured loans to get the average loan 
 The best way to project debt is by understanding the management’s view on CAPEX 
 If there is no management guideline, its best to keep debt at the same level
- Debt can be secured or unsecured 
 The balance sheet gives us the overall debt; associated notes give us the split between secured and unsecured loan 
 We can calculate the average of opening and closing balance across secured and unsecured loans to get the average loan 
 The best way to project debt is by understanding the management’s view on CAPEX 
 If there is no management guideline, its best to keep debt at the same level
- Debt can be secured or unsecured
- The balance sheet gives us the overall debt; associated notes give us the split between secured and unsecured loan
- We can calculate the average of opening and closing balance across secured and unsecured loans to get the average loan
- The best way to project debt is by understanding the management’s view on CAPEX
- If there is no management guideline, its best to keep debt at the same level



## 6.Revenue_model

[Read more](https://zerodha.com/varsity/chapter/revenue-model/)



### 6.1 – Common sense approach

In the previous chapter, we built the Balance Sheet and P&L assumption. Within the P&L assumptions, we dealt with the revenue of the company as well. We did take a rather simplistic approach to estimate the revenue of the company. The approach is ok as long as you intend to build a simple financial model.

However, at times, taking efforts to build a dedicated revenue model of a company pays off.  With a dedicated revenue model, you can identify the key revenue drivers and get some granular insights into the behaviour of these revenue drivers.

In this chapter, I’d like to discuss the approach you need to take while building a company’s revenue model. As you can imagine, the revenue model sits within the integrated financial model, just like the assumption sheet.

Think of the revenue model as a sub-model within the financial model.

I’ll take the example of Bajaj auto in this chapter to explain how one can build a company’s revenue model.

A sensible way to start building a revenue model is by asking common sense questions about the company. In most cases, these questions themselves segways into a template for the revenue model. We will take the same approach to build Bajaj Auto’s revenue model.

So here are a bunch of common-sense questions, and the answers to these questions will help us build the revenue model.  By the way, the answers to all the questions are in the company’s annual report.

So let us start.




### 6.2 – Digging data

As a first step, I download the latest annual report (FY 2020-21) from Bajaj Auto’s website. I’d suggest you do the same. Like I mentioned, the annual report is where you will find all the information you’d need.

Usually, from my experience, as the company matures, the annual report also evolves and provides you with all the necessary information you’d need.

Anyway, let us get started with our common sense QnA. We will begin with a fundamental question.

What does Bajaj Auto do?

No brainer, we have seen Bajaj Auto’s bikes and autorickshaws flood the Indian streets. So it is evident that Bajaj manufactures and sells 2 and 3 wheelers. We will cross-check our assumption from the annual report as well.

From their annual report, we can see that our assumption is correct (image above if from the annual report). Bajaj does manufacture bikes and autorickshaws. The bikes are further segregated into different segments.

The image below shows the ‘sports segment’ or ’S segment’ bikes. Apart from the S segment, Bajaj has the Milage or M segment, Supersport or SS segment, Pro biking segment, and scooters.

But the point is Bajaj manufactures’ bikes’ or two-wheelers, so let us stick to that for now and ignore the segmentation of bikes.

Apart from bikes, they also manufacture autorickshaws’ Commerical Vehicles’ (CV) or the three-wheeler segment.

The CV category has different segments: passenger carrier (good old autorickshaws) and goods carrier.

Why are the segments important to a revenue model?

Well, if you know the segments within a category, you can also figure out the segment-wise revenue.

For example, the S segment is a segment within the bikes category, it will interesting to understand how much revenue they make segment-wise, and which are their popular segments, and what drives these segments.

With this information, you can build a granular revenue model. Unfortunately, the segment-wise revenue distribution is not available in the annual report. Hence we will consider revenue for the entire category as a whole, i.e. the two-wheeler (bikes) and the commercial vehicle (3 wheelers).

How much does Bajaj Auto manufacture?

I suppose this is also a straightforward question. As a financial modeller (or even an investor), you need to understand the manufacturing capacity of the company. The reason is simple.

Suppose they manufacture 100 bikes in the year, and if they are selling 60 bikes, then with this information we can interpret the following –

- The manufacturing plant operates at 60% capacity utilization. Capacity utilization is a simple ratio of how much they sell versus how much they manufacture. 
 The company has enough manufacturing buffer to meet future demands 
 The company is unlikely to spend more money in terms of CAPEX anytime soon
- The manufacturing plant operates at 60% capacity utilization. Capacity utilization is a simple ratio of how much they sell versus how much they manufacture. 
 The company has enough manufacturing buffer to meet future demands 
 The company is unlikely to spend more money in terms of CAPEX anytime soon
- The manufacturing plant operates at 60% capacity utilization. Capacity utilization is a simple ratio of how much they sell versus how much they manufacture.
- The company has enough manufacturing buffer to meet future demands
- The company is unlikely to spend more money in terms of CAPEX anytime soon

Other perspectives –

- Why is the company selling only 60? 
 How much do their competitors sell? 
 Where does the company stand in terms of competition? 
 How big is the industry? How many bikes (across all companies) are sold in a year? 
 What is the company’s market share? (company sales divided/industry sales)
- Why is the company selling only 60? 
 How much do their competitors sell? 
 Where does the company stand in terms of competition? 
 How big is the industry? How many bikes (across all companies) are sold in a year? 
 What is the company’s market share? (company sales divided/industry sales)
- Why is the company selling only 60?
- How much do their competitors sell?
- Where does the company stand in terms of competition?
- How big is the industry? How many bikes (across all companies) are sold in a year?
- What is the company’s market share? (company sales divided/industry sales)

These questions will help us size up the company and eventually help the investors in the valuation process.

Anyway, we will get back to the revenue model.  I found this image in their annual report interesting –

The image gives us all the information in one shot. Let me list down the information for you –

- The company has three manufacturing units (or plants) in India, located in – Pantnagar, Waluj, and Chakan. 
 Waluj is the oldest plant (set up in 1984), while the Pantnagar plant is their newest. 
 All plants have been operational for a long time now. 
 Pantnagar plant has a production capacity to manufacture 1.8M bikes, no commercial vehicles here. 
 Waluj plant has a production capacity to manufacture 2.4M bikes and 9.3L commercial vehicles. Waluj is a super important plant for Bajaj auto since this plant has production of both categories plus this is the only plant to manufacture commercial vehicles. 
 Chakan plant has a production capacity to manufacture 1.2M units of bikes.
- The company has three manufacturing units (or plants) in India, located in – Pantnagar, Waluj, and Chakan. 
 Waluj is the oldest plant (set up in 1984), while the Pantnagar plant is their newest. 
 All plants have been operational for a long time now. 
 Pantnagar plant has a production capacity to manufacture 1.8M bikes, no commercial vehicles here. 
 Waluj plant has a production capacity to manufacture 2.4M bikes and 9.3L commercial vehicles. Waluj is a super important plant for Bajaj auto since this plant has production of both categories plus this is the only plant to manufacture commercial vehicles. 
 Chakan plant has a production capacity to manufacture 1.2M units of bikes.
- The company has three manufacturing units (or plants) in India, located in – Pantnagar, Waluj, and Chakan.
- Waluj is the oldest plant (set up in 1984), while the Pantnagar plant is their newest.
- All plants have been operational for a long time now.
- Pantnagar plant has a production capacity to manufacture 1.8M bikes, no commercial vehicles here.
- Waluj plant has a production capacity to manufacture 2.4M bikes and 9.3L commercial vehicles. Waluj is a super important plant for Bajaj auto since this plant has production of both categories plus this is the only plant to manufacture commercial vehicles.
- Chakan plant has a production capacity to manufacture 1.2M units of bikes.

Since all the manufacturing facilities are old enough, assuming that the company has had a similar production capacity for the last few years is fair.

Where do they sell?

The question is to help us understand where their target market is. We have seen Bajaj vehicles across India. But do they sell in other countries apart from India?

Here is an extract from the annual report –

Without reading much into the details, we know –

- Bajaj Auto sells within India (domestic market) 
 Bajaj Auto also sells outside India (international market)
- Bajaj Auto sells within India (domestic market) 
 Bajaj Auto also sells outside India (international market)
- Bajaj Auto sells within India (domestic market)
- Bajaj Auto also sells outside India (international market)

From the extract, we can quickly note that Bajaj Auto sells around 2M vehicles in the global market.

How many units of two-wheelers and CVs does Bajaj Auto sell in India and the International market?

Now that we have established that Bajaj has a domestic and international market, it makes sense to figure out how many units of bikes and commercial vehicles are sold in India and in the International market.

From the annual report –

The highlighted data indicates the sale of domestic bikes. For example, in the year 2020, Bajaj Auto sold 3.9M bikes. The break up of 3.9M across different segments of bikes is not available (therefore no segment-wise revenue). But that’s ok for now.

Data for Domestic CV sales  –

As far as the exports are concerned, here is the snapshot –

The company has only reported domestic sales numbers across motorcycles (bikes) and CV for FY20 and FY21. We will have to dig up the older annual reports for historical numbers.

Ok, a quick recap at this point. So far we know –

- The product the company sells 
 Places where it manufactures the products 
 The capacity of each manufacturing plant 
 The geographies in which the company sells 
 How many units the company sells across all their markets
- The product the company sells
- Places where it manufactures the products
- The capacity of each manufacturing plant
- The geographies in which the company sells
- How many units the company sells across all their markets

That’s a fair bit of information. We now have to steer our way to find out details about how much money the company earns in terms of revenues.

Remember, so far, we collected information by asking ourselves a few common-sense questions. Once we collect all the necessary information, we make the revenue model on excel, step by step.

Let us continue our QnA.

How much revenue do they make?

The most crucial question perhaps 😊

Clearly, when we talk about revenue for this company, we need to figure four essential things –

- How much revenue is from domestic bikes sales? 
 How much revenue is from domestic CV sales? 
 How much revenue is from international bikes sales? 
 How much revenue is from international CV sales?
- How much revenue is from domestic bikes sales? 
 How much revenue is from domestic CV sales? 
 How much revenue is from international bikes sales? 
 How much revenue is from international CV sales?
- How much revenue is from domestic bikes sales?
- How much revenue is from domestic CV sales?
- How much revenue is from international bikes sales?
- How much revenue is from international CV sales?

If we can collect the above information, we are on track to build the revenue model.

But here is where the challenge occurs; the company does not easily give out this information. The information we have is –

Revenue is a consolidated number, which includes both domestic and export revenue. But thankfully, Bajaj Auto gives us the export revenue –

With both these bits of information, we have to back work the details. For example, for FY 2020,

Revenue =Rs.29,111 Cr

Export Revenue = Rs.12,216 Cr

So Domestic revenue must be –

29111 – 12216

=  Rs.16,895 Crs.

Once we have the revenue split from domestic and exports, we can do few other things to set up the revenue model.




### 6.3 – Connecting the dots

We have now gathered all the info required to build the revenue model. We now have to plug these values into an excel sheet and give it a logical sequence. Please note that if you are doing this yourself, as a first step, you will have to get the historical data from the annual report.  In the section above, I’ve highlighted how the data is collected. Hopefully, that will help you accelerate your data collection process.

Given the data in hand, here are the steps that I’ll follow to develop the revenue model. As I have stressed earlier, the steps that I follow make sense to me; if you feel there is a better way, you should explore. Remember, there is no prescribed methods to build a model.

But I hope these steps will give you a good starting point.

Here is the overview of the steps I’ll carry out on excel –

- Organize the capacity data 
 Gather the International sales data, i.e. the number of units of bikes and CV sold 
 Gather the India sales data, i.e. the number of units of bikes and CV sold 
 Add up the sales data to get consolidated bikes and CV sales data 
 Input the historical revenue data 
 Calculate the average cost of sale of bike and CV 
 Identify the trend in change of average cost of sale 
 Project the average price of the vehicle and reverse engineer the revenue data from the average prices.
- Organize the capacity data 
 Gather the International sales data, i.e. the number of units of bikes and CV sold 
 Gather the India sales data, i.e. the number of units of bikes and CV sold 
 Add up the sales data to get consolidated bikes and CV sales data 
 Input the historical revenue data 
 Calculate the average cost of sale of bike and CV 
 Identify the trend in change of average cost of sale 
 Project the average price of the vehicle and reverse engineer the revenue data from the average prices.
- Organize the capacity data
- Gather the International sales data, i.e. the number of units of bikes and CV sold
- Gather the India sales data, i.e. the number of units of bikes and CV sold
- Add up the sales data to get consolidated bikes and CV sales data
- Input the historical revenue data
- Calculate the average cost of sale of bike and CV
- Identify the trend in change of average cost of sale
- Project the average price of the vehicle and reverse engineer the revenue data from the average prices.

If the steps above confuse you, then don’t worry, we will execute each of the steps, one at a time.

As a first step, we set up our excel sheet with the indexation. I’ve discussed this in the earlier chapters, so I’ll directly post the snapshot for your reference.

I guess you are reasonably familiar with the layout. Columns A and B are indexed, C expanded, panes frozen at E3. The actual financial years stated from F1 to J1, and the estimated years from K1 to O1.

I have organized the manufacturing capacity data. Note I have segregated this in terms of bikes and CV, but you can also arrange the data from the manufacturing plant perspective.

I have populated the manufacturing capacity numbers –

Note, the numbers are constant historically and for the future years as well.

Next up is the sales data. As I mentioned earlier, I’m interested in identifying the bike and CV sales in India and Internationally. Once I have the data, I’m also interested in year on year (YoY) changes in sales data.

As we saw earlier, most of the sales data is available in the annual report, except for the India sales data for bikes. But this is ok; the company gives us the total bike sales (India + International) and the total international bike sales data.

If we calculate the difference, we get the India bikes sales data. So a bit of number jugglery that you will have to do.

Next, we calculate the YoY change (in percentage) bikes and CV sales in the Indian and the International markets.

The math is simple for the YoY change –

= this year’s sales data/ previous year’s sales data – 1

= year on year change in sales, expressed in percentage.

The idea of calculating the YoY percentage change is to identify consistent trends if any. But clearly, there is no trend in the data we have.

We could have taken a rolling average of the yoy change and projected for future years if there was a trend. But now, we have to assume a flat YoY change.

I’ll project the YoY change without thinking much (to move ahead quickly), but of course, if this were a serious model (based on which you’d invest), then we would have to spend some time before we make the YoY change assumptions.

You can see the assumption I’ve made for the sales YoY change in percentage. You can also see the calculation that I’ve made to project the future year’s sale of bikes and CV. I’ve completed the math, and here is how the excel sheet looks –

Please note, I’ve summed up the bike and CV sales from both the Indian and the International markets to get the total sales. For your reference, I’ve highlighted the total sales of bikes for FY22E.

In the next step, we move our attention to the revenue data. I’ve taken the revenue data (India and International) from the annual report.

Below the revenue numbers, I’ve set up excel to calculate the average sale cost for vehicles (bikes + CV) across the Indian and the international markets. To calculate this, we need to divide the India revenue number by the India vehicles sold data.

Let me do this math for FY 17 –

Revenue from India (FY17) = Rs.14,815 Cr

Total vehicles sold in India (bikes+ CV) = 22,54,617

Average selling price of a vehicle = 14815*(10^7)/2254617

= Rs.65,709.61/-

If you wonder why I used 10^7 in the math above, then it is to get the revenue number in Crores.

Here is how it looks on Excel –

I’ve calculated the YoY change in average cost of sale as well. I hope at this stage; you can figure what to do next. If you do, then I’d be happy to know that my notes are helping you think ahead 😊

Anyway, here are the last two steps to complete the revenue model.

- Assume a YoY change for future years, it could be a rolling average, or it could be a flat assumption 
 Project the average cost of sale in the Indian and the International market 
 Multiply the avg cost of sale and the number of vehicles sold to get the revenue in the Indian and International market 
 Sum up both to get the total revenue.
- Assume a YoY change for future years, it could be a rolling average, or it could be a flat assumption
- Project the average cost of sale in the Indian and the International market
- Multiply the avg cost of sale and the number of vehicles sold to get the revenue in the Indian and International market
- Sum up both to get the total revenue.

I’ve executed all the above steps in excel, and here is how it looks –

I have highlighted both the cells so that you can see the formula I’ve used.

Here are few other things that you can do with the revenue model –

- We have the total bike and CV sales data. Compare this with the production data. Ensure the company is not selling more than what it is making. If yes, then our model may be wrong and needs some tweaking 
 If the vehicles sold are close to manufactured, the company may have to invest in a CAPEX cycle. This is valuable information from an overall financial modelling perspective 
 Calculate the capacity utilization, i.e. number of vehicles manufacture versus the number of vehicles sold. 
 Calculate the market share. You can get the industry bike/CV sales data from an industry report (guess even the annual report contains this), contrast this with what the company has sold, and get the market share number.
- We have the total bike and CV sales data. Compare this with the production data. Ensure the company is not selling more than what it is making. If yes, then our model may be wrong and needs some tweaking
- If the vehicles sold are close to manufactured, the company may have to invest in a CAPEX cycle. This is valuable information from an overall financial modelling perspective
- Calculate the capacity utilization, i.e. number of vehicles manufacture versus the number of vehicles sold.
- Calculate the market share. You can get the industry bike/CV sales data from an industry report (guess even the annual report contains this), contrast this with what the company has sold, and get the market share number.

I guess this has turned into a lengthy chapter; I’ll stop it at this. But I hope this chapter has given you a sense of how you can develop a company’s revenue model using a common-sense approach. Always remember to start your revenue model by asking few basic questions.

The revenue model we have built here can be used for other auto manufacturing companies like Hero Motors, TVS, MRF, Maruti, Tata Motors, and even Tesla!

You can  download the excel used in this chapter here .

- The revenue model is a sub-model within your primary model 
 You can build complex revenue models by starting with simple common sense questions 
 All the data needed to make a revenue model is usually available in the annual report of the company 
 Use the revenue model to extract other information like capacity utilization, CAPEX cycles, and industry market share.
- The revenue model is a sub-model within your primary model
- You can build complex revenue models by starting with simple common sense questions
- All the data needed to make a revenue model is usually available in the annual report of the company
- Use the revenue model to extract other information like capacity utilization, CAPEX cycles, and industry market share.



## 8.Asset_Schedule_(Part_2)

[Read more](https://zerodha.com/varsity/chapter/asset-schedule-part-2/)



### 8.1 – Hello depreciation

We closed the previous chapter with our first balance sheet projection, i.e. the gross block. This chapter will complete the asset schedule and plug the numbers back to the P&L and Balance sheet.

At this stage, here is how the asset schedule looks  –

The gross block looks tidy. We will now have to work our way through depreciation. The biggest challenge with forecasting the accumulated depreciation is getting the current year depreciation number, which, as you realise, flows from the P&L statement.

Here is the snapshot of current year depreciation as stated in the P&L –

Investors are often confused about these two depreciation numbers, i.e. the accumulated depreciation stated in the balance sheet and the current year depreciation number displayed in the P&L (on the expense side).

The current year depreciation stated in the P&L is the depreciation value (in Rupee terms) applicable only for the financial year under consideration. The company’s finance team calculates the current year depreciation by factoring in all the assets (gross block) on its books. The current year depreciation stated in the P&L changes for each year based on how the gross block changes.

On the other hand, the accumulated depreciation in the balance sheet is on a cumulative basis. The depreciation number gets rolled over on year on year basis. In other words, the current year depreciation (from P&L) gets added over to the next year depreciation, thus forming the accumulated depreciation for this year.

Don’t worry if you find this confusing; you will understand this better shortly, but for now, I want to you think about the direction we are heading in.

We have already projected the Gross block number. If we can project the current year depreciation number in the P&L, we can apply the base rule again in the asset schedule and forecast the accumulated depreciation number.

After we forecast the accumulated depreciation, we can also calculate the netblock of the company. Finally, the net block number from the asset schedule flows back to the balance sheet.

By carrying out the above steps, we achieve two things –

- Project the current year depreciation number in P&L 
 Get the projected netblock number in the asset schedule, which gets plugged back to the balance sheet
- Project the current year depreciation number in P&L
- Get the projected netblock number in the asset schedule, which gets plugged back to the balance sheet

Everything depends on techniques to forecast the current year depreciation.

Before we proceed, a slight but relevant digression 😊

I want you to think about the following situation. Assume you are a freelance photographer with a variable monthly income. Your income depends on the work that comes your way.  You are also responsible for managing your household expenses.

Your monthly income for October is 25K, of which you spend 3K on entertainment.

The next month you earn 30K. How much do you think you should spend on entertainment for the month of November?

The easiest way to do this is to spend in the same proportion as you spent in October.

In October –

3000/25000

= 12%

Hence for September,

12% * 30000

= 3600

We have used the method of proportions here. I want to extend this thought and project depreciation for the current year.

For Year 5, Depreciation and Amortization stated in P&L is 41.71Cr. The gross block, as stated in the balance sheet for Year 5, is 538.76Cr. The projected Gross Block for Year 6 is 588.77 Crs. Given this, what do you think will be depreciation for Year 6?

Let us apply the proportion technique.

For gross block worth 538.76Cr, the company reported depreciation of 41.71Cr, which means –

41.71/538.76

= 7.74%

For Year 6, the gross block value is 588.77 Crs, so what is the depreciation given the same proportion?

7.74% * 588.77

= 45.58Cr

With this, we can estimate that the depreciation for the next year would be 45.58Crs. Remember, this number flows into the P&L.

The depreciation value will remain the same at 7.74%.

You can extend this a bit more. Instead of taking the previous year’s proportion and assuming the same proportion will hold for the next year, you can calculate the depreciation to gross block ratio for all the historical years and then take the five years rolling average for the future years.

It will look something like this –

Y6 = Average of Y1 to Y5

Y7 = Average of Y2 to Y6

Y8 = Average of Y3 to Y7

So on and so forth.

You can choose either technique; I’ll stick to the first technique for simplicity.

Of course, the 3 rd  alternative is to dig deep into gross block and get into the accountant shoe to figure the exact depreciation value; you can do that if you have a strong accounting background.

Going back to the P&L with the 1 st  technique, I can directly input the formula –

As you can see, in cell J16, which points to the Depreciation expense for Year 6, I’ve divided the depreciation amount stated in P&L for year five over the gross block stated in the balance sheet for year 5. The result of this division is the depreciation proportion, which I then multiply by the gross block projected for Year 6.

The resulting value is the depreciation amount for Year 6. Note, this is a projection that we are making. I can extend the same math to all the future years and get the depreciation expense for the year.

By the way, we also made our first P&L projection, so it’s a tiny baby step in our financial modelling journey 😊

At this point, my P&L looks like this –

Alright, with this in place, let’s go back to the asset schedule.




### 8.2 – Accumulated depreciation

Some of you may have guessed the next few steps already.  It is pretty simple, we go back to the asset schedule sheet and plug in the current year depreciation number from P&l. Once we have that, we use the base rule to complete the accumulated depreciation.

Here is how I’ve plugged the number from P&L –

We have the closing balance for Y5, i.e. 223.68Cr, which becomes the opening balance for Y6. Add to this the current year depreciation, and we should get the closing balance for Y6. Of course, we won’t get into the depreciation non-expense bit as there is no visibility on this line item. Hence will keep it at zero for all the future years.

I’ve applied the base rule to get the closing balance of accumulated depreciation. The netblock is the gross block – accumulated depreciation, which I’ve projected for future years.

Of course, you take the accumulated depreciation number from the asset schedule and complete the netblock calculation in the balance sheet.

With this, we have projected the Fixed assets section in the balance sheet.

In the next chapter, we will discuss the debt schedule.

- Accumulated depreciation stated in the balance sheet is on a cumulative basis. 
 The current year depreciation stated in the P&L is for the year only 
 You can use the method of proportions to forecast the depreciation for the year 
 You can apply the base rule to forecast the accumulated depreciation 
 Netblock = Gross block – accumulated depreciation
- Accumulated depreciation stated in the balance sheet is on a cumulative basis.
- The current year depreciation stated in the P&L is for the year only
- You can use the method of proportions to forecast the depreciation for the year
- You can apply the base rule to forecast the accumulated depreciation
- Netblock = Gross block – accumulated depreciation



## 4.Assumptions_(Part_1)

[Read more](https://zerodha.com/varsity/chapter/assumptions-part-1/)



### 4.1 – Model integrity

I want to start this chapter by talking about a super important concept. I may have touched upon this topic earlier, but I would like to discuss it again with snapshots to emphasise its importance.

In the previous chapter, we set up the balance sheet and P&L for the helper model. Here is the snapshot of the same –

P&L –

And the balance sheet –

The model design ensures column E represent FY16 data, column F to FY17 so on and so forth. We do this to ensure that the numbers get identified quickly and linkages between cells are accurate.

For example, imagine a scenario wherein I want to calculate the ratio of Property, plant, and equipment to the Total revenue for FY18. If you realize, to calculate this, I need to divide a balance sheet item with a P&L item, which means I will have to crisscross between sheets to do the math. This further means that I can easily link the wrong cells without evening noticing it.

Anyway, let us go ahead and do this. I can easily calculate by linking the cells of Column G in the formula bar –

Now consider a situation where you’ve linked the wrong years while calculating this ratio. You can spot the wrong linkage easily –

In this case, I know column G in the balance sheet should be linked with column G of P&L. The moment I see the G and F combination, I know something is wrong.

I’ve quoted a relatively simple example here. But as the model grows and gets more complex, you’ll understand and appreciate the need to maintain the model integrity.




### 4.2 – Main model

It’s time to introduce you to the primary model. I’m sure many of you here would expect me to name the company we’d work on and also name the years under consideration. But I have different plans 😊

I’d rather keep the name and years under consideration unknown. I’m doing this for two reasons –

- By not naming the company, I’ll hopefully eliminate biases one may have. For example, if I use a footwear manufacturing company’s data, some may feel that it may not apply to an auto component company. So I think it is better to keep it generic to establish the fact that this model template applies to all companies (except banking and NBFC)
- Hopefully, by not quoting years, someone reading this module five years later will also understand that the overall structure of a financial model remains the same, no matter when you decide to learn financial modelling.

But for the sake of your understanding, assume that we are dealing with a simple manufacturing company’s data.

I’ve used the exact steps detailed in the previous chapter and set up the Balance Sheet and P&L data. Here is the snapshot of the same –

Balance sheet –

I’ve shrunk my excel sheet to 70% to ensure I capture both sides of the balance sheet; hence the numbers and format look a little different.

Here is the snapshot of the P&L –

A couple of things here –

- The years in consideration is Year 1, Year 2, Year 3 up to year 5 etc. It means the latest 5 years of data. So even if you read this 10 years later, it won’t matter. 
 The data is from the Annual Report, as of March 31 st, e. the financial year-end 
 Year 1A means Year 1 actual data. Year 6P means the year 6 data projected. The projected data is also as per March 31 st . In a sense, this is our vision of how the financial statement will look like future annual reports
- The years in consideration is Year 1, Year 2, Year 3 up to year 5 etc. It means the latest 5 years of data. So even if you read this 10 years later, it won’t matter.
- The data is from the Annual Report, as of March 31 st, e. the financial year-end
- Year 1A means Year 1 actual data. Year 6P means the year 6 data projected. The projected data is also as per March 31 st . In a sense, this is our vision of how the financial statement will look like future annual reports

You can download the excel sheet from the end of this chapter. In the excel sheet, you’ll find the raw P&L and Balance sheet data; I’d suggest you use that data and lay it down in the format we’ve discussed. It will be good practice for you.




### 4.3 – Assumptions and Projections

Remember, in the first chapter; I mentioned that financial modelling is a bit of art and financial science?

The art part starts now 😊

The idea behind a financial model, quite obviously, is to analyse the historical financial statements and project them forward. The common practice is to project the number to either three or five years forward. In this model, we will try and deal with five years projections.

To get an initial understanding of this, I’ll post a set of questions and answers –

>>>> How will you project the financial statements for the future years?

>>>>  Well, you can project the financial statements by making a set of assumptions.

>>>> How will you assume these things to help you make the necessary projections?

>>>>  We can assume the future trends based on historical trends.

>>>> How will you measure historical trends?

>>>>>  The measurement of historical trends happens based on individual line items in the balance sheet and P&L. In most cases; we measure by taking a simple ratio of one line item over another. At times, we can consider the year on year growth rate as well.

We will discuss this in greater detail later in this chapter.

>>>> After measuring the historical trend, how will you project the future trend?

>>>>  There are two ways to make future projections – historical average or an intelligent guess.

At this point, I just want you to read the above and keep this in the back of your mind. Some parts may be clear, and some parts may sound confusing, but I hope by the end of this chapter, you’ll get a clear understanding of this topic.

With that in mind, let us go ahead and make our first assumption for the financial model, but before that, let’s set up our assumption sheet.

To set up the assumption sheet, please go to a new sheet in the workbook and rename the sheet to ‘Assumption’ at the bottom.

Now, we do the usual, i.e. –

1. Index column A and B
1. Expand column C
1. Index column D
1. Cells E2 to I2 will be Year 1 to Year 5
1. Cells J2 to N2 will be Year 5P to tear 10P

I’ve followed the same steps, and here is how my excel sheet now looks.

The idea with the assumption sheet is to lay down each of the financial statements line items and project it based on our assumptions. So let us go ahead and lay down these line items. Let me start with the Balance sheet; take a look at these two lines in the balance sheet, i.e. liabilities and provisions under the current liabilities section –

Now, recollect this part from the QnA we had earlier –

To measure historical trends, we usually take the line item as a ratio of another line item. For the balance sheet, usually, the ratio is measured by keeping the ‘Gross Block’ as the denominator. Gross block, because the gross block is one of the most oversized balance sheet items, also sucks up the company’s CAPEX.

So, if you were to look at ‘ Year 2 ’, liabilities as a percentage of Gross block,

Liabilities as a % of Gross Block (Y2) = 102.74/310.58

= 33.08%

Of course, we can do this in excel directly –

Notice, I’m dealing with Year 2 data. Hence in the balance sheet, I divide F6 over F34.

You may wonder why I’ve done this for Year 2 and not for Year 1. This is because there will be instances where we’d need to calculate the year-on-year growth rate, which means our starting point will be year 2. Hence, for this reason, we ignore Year 1 and directly deal with year 2. You will notice this pattern in several places throughout this module.

Alright, now that we have calculated  Liabilities as a % of Gross Block, we can drag the formula across Y3, Y4, and Y5.

As you can see, liabilities as a percentage of gross blow hovers between 27% and 35% consistently. So, if I were to figure out what this ratio would be for Year 6, I can just take the historical average and get a perspective.

Let me do the same –

Congratulations! With this, we have projected the very first line item of our balance sheet. Few things to note here –

- I’ve used the simple average function here 
 The first average, i.e. for the year 6, is the average of Year 2 to Year 5 
 The 2 nd  average, i.e. for year 7, the average is between Year 3 and Year 6 
 We are calculating the rolling average here, so at any point, we consider the latest four years data 
 The average which we have calculated hovers within the expected range, i.e. between 27% and 35%, so this is ok.
- I’ve used the simple average function here
- The first average, i.e. for the year 6, is the average of Year 2 to Year 5
- The 2 nd  average, i.e. for year 7, the average is between Year 3 and Year 6
- We are calculating the rolling average here, so at any point, we consider the latest four years data
- The average which we have calculated hovers within the expected range, i.e. between 27% and 35%, so this is ok.

Whenever you calculate such ratios, it is best if the variance range is narrow. The narrower the range, the more consistent is the average calculation. The more consistent the average, the tighter is your model.

I’m not too happy with a range, i.e. 27% to 35%; it could have been better. If you are not too happy with it, you can try exploring other ratios like ‘labilities as a percentage of total assets or as a percentage of netblock or something like that.

Wait! So what should you consider? Liabilities as a % of the gross block, or netblock, or total assets?

Well, this is where the art form kicks in. There is no guiding principle here. There is no rule which says you have to consider the denominator as gross block only. I’ve taken it because I’m comfortable with it.

The end objective here is to ensure the calculated numbers are as consistent as possible. Also, don’t stress too much on this; after all, this is a financial model based on excel. We can change things at any point during this journey.

I’ll now go to the next line item, i.e. the Provisions under the current liabilities. Again, I’ll calculate provisions as a percentage of the gross block.

Hopefully, you get the drift by now.

Let us go back to the balance sheet for a bit –

Under the liabilities side, we have projected Provisions and Liabilities. What’s next is shareholders funds and non-current liabilities. Usually, big-ticket items like these in the balance sheet should be dealt with separately in the financial model. We deal with it by creating something called a ‘Schedule’. Of course, we will talk more about schedules later in the module, but for now, think about schedules as a separate dedicated sheet within the financial model.

So all the things marked is treated in the schedule, where we will also make future projections. That leaves us with just the deferred tax liabilities on the liabilities side of the balance sheet.

For the deferred tax liabilities, I’ll consider the year on year growth rate. If you look at Y1 and Y2 numbers, it’s at 13.61 Cr and 16.95Cr. To calculate the year on year growth rate –

(16.95/13.61) – 1

= 25.55%

Note, this is the growth rate for Year 2. On excel –

Of course, you can now drag the cells for the rest of the years, up to Year 5, and take the rolling average from Year 6 onwards.

We now move to the asset side of the balance sheet. Perhaps, I’ll take it up on the next chapter, and I promise I’ll put up the next chapter soon 😊

You can  download the excel sheet used in this chapter from here ; please note, this excel also includes the raw data. I’d encourage you to use the raw data and build the P&L and Balance sheet from scratch.

- Please pay attention to model integrity, as it helps you identify accurate cell linkages
- One can calculate the historical trends either as a growth rate or by taking a simple ratio
- Projections are made by taking averages or by making an intelligent guess
- It is best when the historical trends exhibit a non-volatile range
- Assumptions are an art form; there is no standard method to make assumptions. Your guess is as good as mine.



## 3.Historical_Data

[Read more](https://zerodha.com/varsity/chapter/historical-data/)



### 3.1 – Annual Report recce

Picking up from the previous chapter, now that we have our excel sheet set up, we will extract the data from the annual report to our blank excel sheet. The excel sheet at this stage should look like this –

And a similar page set up for the profit and loss statement.

Now, before we start extracting the financial statements data from the annual report to the excel sheet, we need to conduct a simple survey of the annual report. Remember, for our financial model; we need the historical financial data from the last five years. We will use the data of the last five years as the primary input for the model.

It is essential to ensure that the last five years data is consistent and there no missing items in the statements. Let us understand this with a quick example.

Assume this is the revenue section of the P&L for an imaginary company –

Year 1 –

- Gross Income 
 Duties 
 Net Income 
 Other income
- Gross Income
- Duties
- Net Income
- Other income

Year 2

- Net income 
 Other income
- Net income
- Other income

The company states the Gross income and duties paid in year one, but in year 2, the company states the net income directly. Inconsistencies like this can be a problem while modelling since it creates multiple gaps in the model. For this reason, even before we start copying the data from the annual report to the excel sheet, we need to first look at the last five years annual report and ensure that the statements are consistent over the years we are interested.

Let us go ahead do this now.

In the previous chapter, we discussed the ‘main model’ and the ‘helper model’. The main model is the one in which we will build a financial model end to end, and the helper model will help us understand concepts related to the financial model.

So I guess it’s time to introduce the company which will act as the first ‘Helper Model’.

We would be dealing with Relaxo Footwear. Relaxo is one of the largest manufacturers of footware in the country.

As a first step, I download the company’s last five years’ annual report and put these in a single folder. Usually, a listed company puts up the annual report in the ‘Investors’ section of the website. I’d suggest you download the same from Relaxo’s website.

My folder with the annual reports looks like this (I know this is basic stuff, but I’m posting an image just for clarification) –

I’ve even renamed these reports in a format that I like. I now go ahead and open all these annual reports side by side.

Please note, we deal only with the consolidated financial statements and not the standalone statements.

I’ll start by reviewing the consolidated balance sheet of the company. At the very first inspection, I can see that company changed the accounting format in 2018. How did I figure this? Well, take a look at the below screenshots.

Balance sheet as stated in March 2016 –

Balance sheet as stated in March 2017 –

You’d probably know that in every annual report, the company states the numbers for the financial statements for the year in review and the previous Financial year. This is the case in the above two snapshots. However, for the Financial Year 2018-19 –

The company has restated the Balance sheet for FY 2016, 2017, and 2018. So as a financial modeller, I’d ignore the financial statement from the 2016, 2017 Annual report and take the numbers for FY 2016, 2017, and 2018 from the 2018 Annual report.

Next, when replicating the Balance sheet on excel, I’d take the line items as per the latest financial year. Let me explain why; here is the balance sheet snapshot as per the 2020 Annual Report –

Under current liabilities, there is a line item called ‘Lease Liabilities’, but this was missing in 2018 and 2019. But because it is present in the 2020 balance sheet, I will have to consider this line item and include it in my excel sheet; of course, the value against this line item will be 0 from 2016 to 2019, and INR 27.61 Cr in 2020.

I’m trying to suggest that if you take the line items as stated in the latest year annual report, chances are you’d have covered almost all the line items. But this is just a hack; it may not work all the time.




### 3.2 – Data extraction

Alright, with that in place, let’s start extracting the data from the Annual report to the excel sheet we set up in the previous chapter. Of course, this is a lot of manual work, but there is no other way around this. Remember, we start with a blank excel sheet; we’ve only set up the skeleton for now. My sheet looks like this –

To start with, on the left-hand side of the excel sheet, I type down the line items of the balance sheet. The order in which these line items are listed is the same order in which the balance sheet is reported. Please take a look at the snapshot below; I’ve typed out the assets side of the balance sheet.

Notice a few things here; I’ve used column A and B as an Index. I’ve typed out the heading and subheadings in these columns. I’ve highlighted what I mean by main and subheading here –

In column C, I’ve mentioned the actual description of the line item. There are two main reasons to do this –

- Indexing and segregation of heading and subheading is an excellent way to present financial statements. It not just looks easy on the eye but also captures more information 
 Navigation becomes easy
- Indexing and segregation of heading and subheading is an excellent way to present financial statements. It not just looks easy on the eye but also captures more information
- Navigation becomes easy

What do I mean by navigation? When you have a lot of data to deal with, you need a quick way to navigate through it, and excel allows you to do that. I want you to do a small exercise to appreciate the ease of navigation.

By the way, I’m assuming that at this stage, you’d have entered the asset side of the balance sheet in your respective excel sheet, in the same way as I’ve done. If not, I’d suggest you do that quickly before reading further.

Now place your cursor in cell B5, where we’ve typed ‘Non – Current Assets’. Now, press the control key + the down arrow on your keyboard. The cursor should directly jump to the next indexed cell, i.e. ‘Financial Assets’.

This quick jump helps you navigate faster and focus on the primary data chunks.

I’ll proceed to set up the liabilities side of the balance sheet as well. So at this point, my balance sheet sans the values is set up. Here is the snapshot, but please excuse the compressed image; this is the only way I can present the entire balance sheet in the following image –

Once you’ve reached this stage, the next step is to copy the data from the annual report to the excel sheet. Please do recollect; I’m looking at the 2018 balance sheet to copy the data for 2016, 2017, and 2018.

Let’s deal with the ‘Non – Current Assets’ first. Here is the snapshot from the annual report –

I’ll go ahead and copy the same onto my excel sheet –

So far, so good, I suppose.




### 3.3 – Assumptions, facts, and format

In the image above, I’ve deliberately placed my cursor in cell E6 so that you can see that the number, 462.30, is copied from the balance sheet and not a calculated number. In a sense, this number is hardcoded.

In the financial modelling world –

- The hardcoded number is considered as a fact because we are directly copying the number from the annual report 
 A calculated number is considered an assumption since we apply a mathematical operation to arrive at the number.
- The hardcoded number is considered as a fact because we are directly copying the number from the annual report
- A calculated number is considered an assumption since we apply a mathematical operation to arrive at the number.

Given this, it is essential to distinguish between the facts and assumptions in a financial model so that the user of the model can quickly identify which numbers are flowing directly from AR and the calculated numbers. Also, you will know where to look in case of an error in your model.

I’ll explain how this can be done, but before that, let’s add up the total non-current assets.

I’ve used the ‘=sum()’ function in excel to calculate the total non-current asset. The calculated number is treated as an assumption since I’ve calculated this on my own. The easiest way to distinguish assumptions and facts is to colour code the numbers.

You can easily colour code this by selecting all the hardcoded numbers in one go. Click the function + F5’ keys on your keyboard; you should get the following pop up –

Now click on special, and select only constants and numbers like shown below –

After you click ok, excel will highlight the hardcoded numbers or the facts.

Now without deselecting the numbers, select a colour of your choice. I prefer light blue for this, but you can pick whatever you like –

After you select the colour of your choice, you can keep the total non-current assets in bold.

If you have managed to follow the above step, then the rest of it is pretty straightforward. All you need to do is extract the numbers from the balance sheet and P&L and put them on your excel sheet.




### 3.4 – Other things to note

Some of you may wonder about the necessity to add up the numbers and colour code them. For example, one can copy the total non-current asset as well; why calculate it separately?

We need to calculate these numbers because going further in the model, we will project each line item in the balance sheet for future years. The total is calculated anyway. Therefore, calculating it now will maintain consistency in the model.

Before we conclude this chapter, few formatting tips –

- Keep the numbers right-aligned 
 Extend the decimal points up to two digits 
 Keep all the heavy numbers in bold; these are usually the subtotal and main total numbers 
 Use double borders for cells wherever necessary
- Keep the numbers right-aligned
- Extend the decimal points up to two digits
- Keep all the heavy numbers in bold; these are usually the subtotal and main total numbers
- Use double borders for cells wherever necessary

I’ve completed filling up the balance sheet. I want you to pay attention to few last things –

I’ve calculated the total assets on the asset side by adding up the two subtotals, i.e. total non-current assets and total current assets. I’ve taken a similar approach on the liabilities side as well –

Lastly, to ensure my balance sheet is balanced, I run a ‘True’ and ‘False’ check. Remember, if assets = liabilities, that means the balance sheet is balanced.

Since it’s true, the total assets are equal to total liabilities. Hence my balance sheet is balanced. I’m not going to explain the data extraction method for P&L. It is a similar process. Do let me know if you get stuck on any of the steps; I’ll be happy to explain. But I do hope your P&L would look like this –

If you are attempting the P&L, you will notice that the ‘other expense’ in the expenses section is expanded. I’ve done this deliberately to showcase that when you have a heavy line item in the P&L, then it probably is not a bad idea to break down its constituents. The reason for doing this is that we can model these lines items at a more granular level, thus ensuring our model is realistic.

Remember, Relaxo is the helper model, and this won’t be our main model. We used this to help us understand how data can be copied from the financial statements to excel. We will move on to the main model in the next chapter.

By the way, ‘Historical data’ was supposed to be the first step of financial modelling, but I hope you realise that many tiny little steps are hidden within the main step. You can expect the same for all the other steps.

As an assignment, I’d suggest you replicate the balance sheet and P&L on your own. I’m sure the learnings from this exercise will be exciting.

Download the excel sheet used in this chapter here.

- Perform an annual report recce before setting up the excel sheet 
 It makes sense to take the latest year’s financial statement for the format; the chances are that you will cover all the line items. But this is only a hack 
 Indexing helps in quick navigation 
 Differentiate between fact and assumption data points. You can do this by colour coding 
 Maintain format hygiene across the sheet 
 If need be, breakdown the heavy line to get a better granular view
- Perform an annual report recce before setting up the excel sheet
- It makes sense to take the latest year’s financial statement for the format; the chances are that you will cover all the line items. But this is only a hack
- Indexing helps in quick navigation
- Differentiate between fact and assumption data points. You can do this by colour coding
- Maintain format hygiene across the sheet
- If need be, breakdown the heavy line to get a better granular view



## 1.Introduction_to_Financial_Modelling

[Read more](https://zerodha.com/varsity/chapter/introduction-to-financial-modelling/)



### 1.1 – Unusual approach

We are all living in a very uncertain and unprecedented time. Covid 2 nd  wave has been brutally devastating and has caused a lot of pain and misery to humanity. I hope you are your family are staying safe. Please double mask if you really have to step out. I hope humanity does not have to face this situation ever again, and we get out of this situation as quickly as possible.

Let me start this module on Financial Modelling with an apology. I know this module was due for a while now. I know, I’ve taken a lot of time to get started on this. There were multiple reasons for the delay, but that’s all behind now. Here we are, all set. I’m super excited to deliver this module, and I hope you are excited as well 😊

But there are a few things to note before we get started –

Financial modelling as a subject is taught either in the classroom or in a  video format. There is a reason for this – while teaching this subject, at any given point, we tend to open up multiple threads and then tie it all together in the end. So in a sense, there are hops, jumps, crisscrossing, and a bit of number juggling. Given the nature of this subject, it makes sense to teach this online or via a physical classroom setup.

Think of it as producing a movie. I’m sure you understand that a movie is not shot scene after scene in a sequential manner. Different scenes are shot, songs are recorded, action scenes are shot, edited, and then patched together and eventually made to look like the entire movie was show scene after scene.

In a sense, financial modelling is very similar.  You will understand this better as we dig deeper.

I don’t know if financial modelling is taught in the classic article format. I could make a huge mistake attempting this task, but I think it is worth the shot.

As I just hinted above, the learning won’t be sequential. We will have multiple threads open; numbers will crisscross and move from one sheet to another, adding to the non-sequential learning format. But that’s the way this will go, so please be prepared for it.

As we progress through, you will realise that Financial Modelling is more of an art form than financial science. We throw in a ton of assumptions while building any financial model. The assumptions may vary from person to person based on the individual’s experience.

However, the good part is that the model we create will very easily accommodate changes and updates; this flexibility makes financial modelling a beautiful endeavour.




### 1.2 – What are you learning and why?

Perhaps an essential question – what is ‘Integrated Financial Modelling’, and why do we need to learn this?

Think about a typical company; as you can imagine, the company can have several moving parts. For example, a manufacturing company can have a team procuring raw materials, workforce to manufacture goods, admin team, finance team, regulators, compliance, marketing, supply chain, distribution, R&D, and whatnot.

Given the enormity, how do you break a company down into smaller parts and gain meaningful insights into its functioning?  How do we gauge its efficiency?

Well, this is where financial modelling comes into play. Eventually, whatever the company does, it all boils down to numbers and metrics.

For example, successful operations lead to revenue generation, successful cost management leads to operating profits. Good financial practice leads to manageable debt levels; good supply chain management leads to better inventory management. Good dividend policy strikes a balance between a company’s growth and shareholder value. So on and so forth.

So the approach we take here is that if we can systematically analyze the numbers presented in the financial statements, perhaps it opens up a window to understand the company better.

When I talk about understanding financial statements, I’m talking about getting into granular details; we go line by line. Many often assume that a series of simple financial ratio analysis results in great insights into the company. Yes, to some extent, it does, but we can do a lot more to better understand the company.

Better understanding leads us to a better insightful investment decision.

Think about Financial modelling as a systematic way to understand the company. Here is what the name, ‘Integrated Financial Modelling’, means –

Financial  = Indicates that we are working with the company’s financial statements

Modelling  = Indicates that we are laying down a company’s financials systematically, connecting these financial statements and subjecting the same to a bunch of equations. The entire thing tied together is called a model,  a model with specific input (financial statements) and a specific output (valuations).

Integrated  = Implies that all the numbers are interconnected, and no part of the financial model is isolated. You will understand this better as we progress through building the financial model.

The end objective of any financial model is to help you build a perspective of valuation. The final output of the financial models is the company’s share price after factoring in everything that matters. You take the share price from the model, compare the share price against the market share price, and figure if the stock is fairly valued, undervalued, or overvalued.

The ultimate satisfaction is when you know that the stock is undervalued and available for a throwaway price in the market, trust me on that 😊




### 1.3 – Tools of the craft

Let me break the ‘not so good news’ first – to learn, build, and benefit from a financial model; it is mandatory to have some background knowledge about the following –

- How to read an annual report 
 How to read the financial statements of the company – Balance Sheet, P&L, Cash Flow 
 It would be best if you were comfortable working with MS Excel or any other software similar to MS Excel
- How to read an annual report
- How to read the financial statements of the company – Balance Sheet, P&L, Cash Flow
- It would be best if you were comfortable working with MS Excel or any other software similar to MS Excel

The good part is that you can learn how to read the annual report, Balance sheet, P&L, and Cash flow in the  fundamental analysis module .

Unfortunately, we don’t have a module on MS Excel, so please try and self-study MS Excel. If you are uncomfortable with any of the three topics mentioned above, please stop right now and learn these things before learning Financial Modelling.

Please do note, when I say you need to know how to read financial statements, I only mean that you need to know this from a user’s perspective. As long as you know the basics, that is good enough.

The same goes with Excel. It would help if you were good enough with essential functions and formats. I don’t expect you to have the knowledge required to build a complicated dashboard on excel.

The good news is that when I decided to learn Financial Modelling, I had no clue about the three things I mentioned above. I had to learn these things first and then get back to financial modelling. If a person like me can do this, then I’m confident anyone can.

By the way, financial modelling as a concept can be applied to any part of market finance, be it investing or derivatives trading. Financial modelling is nothing but a structured way of thinking through a complex problem; some even call this ‘Design thinking’ of sorts.

If you are a regular reader of Varsity, we have dabbled with Financial Modelling in the module related to  Risk managemen t and in the  Trading systems module . It’s just that we never called it ‘Financial Modelling’.

This module, however, will be focused on Fundamentals and Financial Modelling for investments.




### 1.4 – The steps involved

At this point, I’d like to share with you a brief overview of the steps involved in creating an integrated financial model. These steps only give you a sense of direction. We will dig deeper into each of these steps as we proceed.

These are the steps involved in building a financial model –

Set up a layout  – Perhaps the most crucial aspect of financial modelling. I foresee myself stressing on this several times throughout this module, so bear with me.  A typical Financial model will have multiple excel sheets within a single workbook. We need to ensure our Excel workbook is appropriately indexed and formatted and the format stays consistent across the entire model.

For example, if I’m dealing with 2018 data in column ‘E’ of my excel sheet, I’ll ensure that column E across all the other sheets will always deal with 2018 data. Or here is another example of the layout, column A and B will be shrunk to ensure easy indexation across all the sheets.

At this point, this may come across as a bunch of vague statements, but you will appreciate these points as we progress along.

Historical Data –  A rather painful task, but this need to be done. We need to download the Annual report of the company we are dealing with, preferably for the last five years. We need to extract the balance sheet and P&L data from the annual report and input this in our excel sheet. Of course, we will be dealing with consolidated numbers here and not standalone data.

Most importantly, please use the annual report as your primary data source and not any other 3 rd  party data vendors.

Assumption Sheet –  Remember I spoke about financial modelling as an art form rather than financial science? Well, we create an assumption sheet and dump all our assumptions in one sheet here. We assume things about the company should be close to reality; the further we go from reality,  the more distorted our model gets. Let me give you an example.

Suppose a company’s revenue is growing at 7% year on year for the last five years; what do you think will be the growth rate for the 6 th  year? If we have to assume something, it has to be in the region of 7%, unless you foresee a significant change. Anything higher or lower will distort the P&L from reality.

Asset and other schedules – Throughout the model, we create something called a ‘schedule’. We create a schedule with oversized line items. For example, the asset schedule deals with plants, machinery, and all the company’s fixed assets. We lay down the numbers in a systematic way and deal with them. For example, we extract the gross block number, depreciation, netblock, and even the CAPEX figures in the asset schedule.

So a single schedule gives us insights into multiple aspects of the company.

Like the asset schedule, we create other schedules such as – reserves schedule and the debt schedule.

Projections –  Once the assumptions are complete and the schedules, we project the balance sheet and P&L for either 3 or 5 years forward. This is one of the crucial steps while building the model.

Cashflow derivation –  Again, a very crucial step in financial modelling. In this step, we derive the cash flow statement using the P&L and Balance sheet data, called the ‘indirect method’, of cash flow preparation. Note, unlike the Balance sheet and P&L data, historical data of cash flow is not extracted from the annual report but instead derived. This step can be tricky; it sometimes works and sometimes does not work due to its complexity.

Hence we will also look at alternatives here.

Ratios –  Once all the data is in place, we can quickly draw up ratios and charts for our model. The ratio sheet will include things like liquidity, solvency, profitability ratios etc.

Valuations –  In the valuation sheet, we deploy the discounted cash flow method of valuation and finally value the company. Think of this step as including a model within a model. Of course, we will have sufficient checks and balances in places to ensure we are not going way off the mark, and even if we do, the sensitivity tables that we develop should help us get back on track.

These are roughly the steps involved in developing a full-fledged integrated financial model. While it makes it seem simple, trust me, it is not.

I’m excited to dig deeper. I hope you are too, so buckle up for the ride 😊

- A financial model takes in inputs in the form of financial statements and gives us an output mainly in terms of valuations 
 Financial modelling involves a non-sequential learning path 
 Multiple discussion threads open up while building a financial model 
 Basic working knowledge of MS Excel, Balance Sheet, P&L, cashflow is mandatory before venturing into financial modelling 
 There are 7-8 steps to follow while building a financial model 
 The model that we build has to be flexible to accommodate changes and updates.
- A financial model takes in inputs in the form of financial statements and gives us an output mainly in terms of valuations
- Financial modelling involves a non-sequential learning path
- Multiple discussion threads open up while building a financial model
- Basic working knowledge of MS Excel, Balance Sheet, P&L, cashflow is mandatory before venturing into financial modelling
- There are 7-8 steps to follow while building a financial model
- The model that we build has to be flexible to accommodate changes and updates.



## 2.Excel_workbook_setup

[Read more](https://zerodha.com/varsity/chapter/excel-workbook-setup/)



### 2.1 – Selecting a company

I never expected such a tremendously positive response for the previous chapter. I’m a bit overwhelmed, and I also get a sense that there are many expectations from this module. I hope I won’t disappoint you all, and this module lives up to its expectation. I’ll give it my best shot to explain what I know about financial modelling.

At this point,  I’d like to spend some time to help you understand the kind of companies to pick when building a financial model for the very first time.

A common mistake a newbie financial modeller makes is picking a complicated company to build the first financial model.

When I was trying to learn financial modelling, I picked a company called ‘Hanung Toys’, and as the name suggests, the company made toys!

The company had no other line of business apart from making toys; it had a simple P&L, simple balance sheet, no complicated company structure, no complicated financial structure. If you read the annual report once, you’d get a quick hang of what the company does and the factors that influenced its growth.

I’m so glad that I picked ‘Hanung Toys’ as my first company to model. It was easy to build a model due to the lack of complexities involved.

At the same time, a friend of mine picked Hindalco as his first company to model.

Everything about Hindalco was intimidating – the annual report ran into several pages. The company manufactured Copper and Aluminium, captive power units, complex debt structure, complex financial statements,  cyclicality in earnings; commodity prices were dependent on international markets, and whatnot.

Eventually, my friend lost interest to learn financial modelling, and he never really got back to it. So don’t let this happen to you.

Here is a suggestion, please model the same company that we would model in this module. Replicate what we discuss here by yourself and post that you can try to model a company independently.

By the way, just to let you know, an experienced financial modeller would love to model a company like Hindalco for the same reasons I mentioned above😊

Please note that I may not be able to help each one of you with the model you’d build. I’ll attempt to teach you a framework in this module; you will have to build on it. I hope you understand the difficulty of looking at 100’s of different models by the many readers here. It would be impossible for me 😊

So if you are the first-timer, then keep these points in mind –

- Pick a company that is simple to understand. For example, don’t straight away pick Reliance Industries. It is complex to model for a first-timer (for an experienced person too) 
 Between a manufacturing and service-oriented company, pick manufacturing. It is easier to understand manufacturing concepts, i.e. number of units produced, raw material, inventory, etc. Services can be a bit vague. 
 The company should have 1 or 2 products that contribute to the revenue. The higher the number of products, the higher the complexity involved. Think of an FMCG company; they have 100s of products, which means 100s of dependencies, making it tough to model such companies. 
 Pick a company that gives out as much information as possible in its annual report. Just to let you know, Infosys is one of the best companies in terms of information provided in the annual report. The more information the company provides, the fewer assumptions you have to make in your model, and that’s good news. 
 Ensure the company you pick is consistent in its annual report. Let me explain this. Assume, I pick a company which manufactures and sells mobiles phone. The company operates in India and Sri Lanka. The company states how many units sold in India and Sri Lanka in its first-year annual report. The company also reports the revenue generated in both these countries. In the 2 nd  year annual report, the company chooses to disclose only the revenue generated from both the countries but decides not to give the data on the number of units sold. This is an inconsistency in reporting, and such inconsistencies make it difficult to move ahead with the model 
 Avoid banks, financial services, and NBFCs. They are just too complex and have a ton of regulatory issues. The model we are about to learn may not work for the BFSI sector, so please be aware of that.
- Pick a company that is simple to understand. For example, don’t straight away pick Reliance Industries. It is complex to model for a first-timer (for an experienced person too)
- Between a manufacturing and service-oriented company, pick manufacturing. It is easier to understand manufacturing concepts, i.e. number of units produced, raw material, inventory, etc. Services can be a bit vague.
- The company should have 1 or 2 products that contribute to the revenue. The higher the number of products, the higher the complexity involved. Think of an FMCG company; they have 100s of products, which means 100s of dependencies, making it tough to model such companies.
- Pick a company that gives out as much information as possible in its annual report. Just to let you know, Infosys is one of the best companies in terms of information provided in the annual report. The more information the company provides, the fewer assumptions you have to make in your model, and that’s good news.
- Ensure the company you pick is consistent in its annual report. Let me explain this. Assume, I pick a company which manufactures and sells mobiles phone. The company operates in India and Sri Lanka. The company states how many units sold in India and Sri Lanka in its first-year annual report. The company also reports the revenue generated in both these countries. In the 2 nd  year annual report, the company chooses to disclose only the revenue generated from both the countries but decides not to give the data on the number of units sold. This is an inconsistency in reporting, and such inconsistencies make it difficult to move ahead with the model
- Avoid banks, financial services, and NBFCs. They are just too complex and have a ton of regulatory issues. The model we are about to learn may not work for the BFSI sector, so please be aware of that.

Keep these few points in perspective before you pick a company to model. However, as your first model, I hope you will consider my suggestion and replicate the model we use in this module on your own.

Throughout this module, we will have one ‘Main model’ running and few helper models. I want you to understand the context in which I will use these different models –

- The main model  – In the main model, we will start with a blank excel workbook and build our model step by step. We will pick a company and stay with it throughout. 
 Helper model  – I’ll probably use 1 or 2 different companies to help different sections of the main model slightly more detailed. The objective of the helper model is to help you understand concepts better.
- The main model  – In the main model, we will start with a blank excel workbook and build our model step by step. We will pick a company and stay with it throughout.
- Helper model  – I’ll probably use 1 or 2 different companies to help different sections of the main model slightly more detailed. The objective of the helper model is to help you understand concepts better.

Think about it as learning how to become a master chef. While the end goal is to create magic with your cooking, but along the way, you also need to practise your knife silks to cut veggies efficiently.

By the way, I’d like to thank my ex-student and now a good friend Vishal Vindoorty, for helping me with this module. Many years ago, I taught him financial modelling and today; he teaches me.

So I guess life has come a full circle 😊

With that in place, let’s start by taking a baby step in this chapter.




### 2.2 – Reimagine data presentation

Like I mentioned in the previous chapter, the very first step in building a financial model is to refer to the annual report, extract the balance sheet and P&L data and input the same in the excel sheet.

Of course, this is a time-consuming task, but a super important task as the data that you copy from the annual report acts as the key input to the entire model. So please do this task with at most devotion. At any cost, resist your temptation to copy-paste numbers from 3 rd  party sources.

Different people have a different opinion on how many years of historical data to consider. A common preference is to either take the last seven years or the last five years of data. I belong to the five-year camp.

When I usually discuss the first step of financial modelling, i.e. copy the last five-year historical balance sheet and P&L data from the annual report to an excel sheet, people imagine something like this –

You see above is the usual way people copy the balance sheet data from the AR to their excel sheet. The image below shows how historical P&L gets copied –

Well, yes, what you see above is technically correct. One has indeed copied the data from the annual report to an excel sheet, but if you do it this way, as shown above, it’s called a ‘model suicide.

The data is presented in a very unsystematic manner. So if you had imagined something like this, then it’s time to let go of that and reimagine how data is presented in a model friendly way.




### 2.3 – Set up your excel sheet

One has to set up the excel worksheet in a systematic way. The format should be consistent across all the other sheets within the workbook.

Here are a series of steps to follow, even before we start copying the historical data from the annual report. Think of this as a sub-step to step 1.

Open a blank excel sheet and save it with whatever name you’d like  –

Index Column A and Columb B, expand Column C, and Index column D. ‘Index’ in this context means just to shrink the column.  Here is how my excel looks after indexing the columns –

One of the things I like to do is to get rid of the gridlines in excel. The gridlines in a financial model can be pretty distracting, especially when you have so many numbers and formulas to manage.

So get rid of it if you can. After getting rid of the gridlines, I’d also like to freeze panes by keeping my cursor on cell D3.

Here is how my excel looks now –

I hope you are aware of how to get rid of gridlines and freeze panes. These are basic excel skills. If you are struggling at this point, please stop, maybe refresh your excel skills, and get back to this later.

We now enter the years from E2 to I2 to indicate the year’s we are interested in. My excel now looks like this –

We now label this sheet as the P&L statement (in cell A1) as shown below –

I like to keep ‘Profit and Loss statement’, in bold, font size 14. You can see below the line that I’ve added another line that says that all the numbers stated in this sheet are in INR Crores unless specified.

So if you see a number like 14.2, then it means that the number is 14.2 Crores Rupees and not just 14.2. I’ve italicized the line and reduced the font size to make it look better.

What you see above is a basic skeleton of the model. We need a few similar-looking sheets within the workbook. Remember, we will have other data sheets to include the Balance sheet, assumption sheet, cash flow sheet, etc. So it’s a good practice to set up multiple sheets with similar structure in one shot. You can do this in the following way.

Press the Control button in your system, and click on few sheets. By doing so, you’d be selecting a few sheets in 1 go. When you select multiple sheets, whatever changes you do in one sheet will replicate in the other sheets as well.

Here is how my sheet looks  before  I press control and select the other sheets.

As you can see, all the sheets except Sheet 1 are selected. I’ve not selected Sheet 1 since the sheet is already set up, and I don’t want to mess with it.

Now, in sheet 2, I do all the above steps that we discussed, except –

- Freezing panes, because freeze panes do not work when you have selected multiple steps (or at least I don’t know how to do it) 
 Title the sheet (like Profit and Loss statement) because each sheet will be called something different.
- Freezing panes, because freeze panes do not work when you have selected multiple steps (or at least I don’t know how to do it)
- Title the sheet (like Profit and Loss statement) because each sheet will be called something different.

After setting up sheet 2 –

Please note, all the sheets continue to be selected. I’ve executed all the steps, except for the ones I mentioned above. Now excel will deselect the selected sheets the moment you click on a different (non selected) sheet. So go ahead and click on Sheet 1 to deselect.

Now check sheet 3,4, and 5. These sheets should look precisely similar to Sheet2. In each sheet, go to cell D3 and free panes.

While at this point I don’t know what I’ll do with Sheet 3, 4, and 5, I do know that Sheet 2 is for the Balance sheet. So I’ll title it as ‘balance sheet’ (cell A1).

By the way, do notice that I’ve renamed Sheet 1 and 2 as Profit & Loss and Balance sheet, respectively. You can do this by keeping your cursor on the sheet and right-clicking your mouse.

I’d like you to take a minute to relook at what you’ve done so far.

In fact, this is a big step in your financial modelling journey. What you’ve done so far is to ensure that you set up your excel in a very systematic way. You have five sheets open, and all five sheets have a similar structure.

I now know that Column E represents FY16 data, F to FY17, E to FY18, and so forth across the entire model.

The structure won’t change, and it’s a huge deal. It’s called the ‘ Hygiene factor’ in a model, and that, in my view, is a super important aspect.

With this note, I’ll end this chapter. In the next chapter, we will copy the data from the annual report to our excel sheet.

You can download the excel sheet for this chapter from here, and by the way, congratulations for successfully executing (well, almost) the very first step of financial modelling.

PS: Are you curious to know what happened after I built the financial model for Hanung Toys? The model suggested that the company was way overvalued, and hence I never invested in it.

I’m so glad I dint.

Key takeaways from this chapter

- Pick a company that is easy to model (at least in your initial days of financial modelling) 
 The manufacturing sector is slightly better to model compared to the services sector 
 Look for reporting consistency in the annual report 
 Do not blindly copy data from the annual report onto the excel sheet 
 Set up your excel sheet before you can copy the data 
 Ensure your excel sheet is consistent
- Pick a company that is easy to model (at least in your initial days of financial modelling)
- The manufacturing sector is slightly better to model compared to the services sector
- Look for reporting consistency in the annual report
- Do not blindly copy data from the annual report onto the excel sheet
- Set up your excel sheet before you can copy the data
- Ensure your excel sheet is consistent


