# Futures Trading

[Read more](https://zerodha.com/varsity/module/futures-trading/)

---


## 9.The_Nifty_Futures

[Read more](https://zerodha.com/varsity/chapter/nifty-futures/)



### 9.1 – Basics of the Index Futures

Within the Indian derivatives world, the Nifty Futures has a very special place. The ‘Nifty Futures’ is the most widely traded futures instrument, thus making it the most liquid contract in the Indian derivative markets. In fact you may be surprised to know that Nifty Futures is easily one of the top 10 index futures contracts traded in the world. Once you get comfortable with futures trading I would imagine, like many of us you too would be actively trading the Nifty Futures. For this reason, it would make sense to understand Nifty futures thoroughly. However before we proceed any further, I would request you to refresh your memory on the Index, we have discussed the same  here .

I assume you are comfortable with the basic understanding of the index; therefore I will proceed to discuss the Index Futures or the Nifty Futures.

As we know the futures instrument is a derivative contract that derives its value from an underlying asset. In the context of Nifty futures, the underlying is the Index itself. Hence the Nifty Futures derives its value from the Nifty Index. This means if the value of Nifty Index goes up, then the value of Nifty futures also goes up. Likewise if the value of Nifty Index declines, so would the Index futures.

Here is the snapshot of Nifty Futures Contract –

Like any other futures contract, Nifty Futures is also available in three variants – current month, mid-month, and far month. I have highlighted the same in red for your reference. Further, I have highlighted the Nifty Futures price which at the time of taking this snapshot was Rs. 11,484.9 per unit of Nifty. The corresponding underlying value (index value in spot) was Rs. 11,470.70. Of course, there is a difference between the spot price and the futures price, which is due to the futures pricing formula. We will understand the concepts related to futures pricing in the next chapter.

Further, if you notice the lot size here is 75. We know the contract value is –

CV = Futures Price * Lot Size

= 11484.90 * 75

= Rs.861,367/-

Here are the margin requirements for trading Nifty Futures; I’ve used Zerodha  Margin Calculator  to get the margin values –


Order Type | Margin
--- | ---
NRML | Rs.68,810/-
MIS | Rs.24,083/-
BO & CO | Rs.12,902/-


These details should give you a basic overview of the Nifty Futures. One of the main features of Nifty Futures that makes it so popular is its liquidity. Let us now proceed to understand what liquidity is and how one would measure it.




### 9.2 – Impact Cost

Updated 24th August 2021  – As per the NSE’s definition, Impact Cost is defined as the cost that a buyer or a seller needs to bear when executing a transaction in a given security. It is a measure to gauge the market liquidity and provides a much more accurate picture of the cost traders bear when executing a trade in comparison to the bid-ask spread. It is measured separately for the buy-side & the sell-side and varies according to the size of the transaction. The Impact cost is dynamic in nature and keeps changing based on the order book. For stocks that are to be included in indices (like Nifty 50, Nifty 500), one of the criteria for eligibility is the impact cost being below a certain threshold (For more details about this, refer to the  Index Methodology document ).

The  formula  for calculating the impact cost is as follows –

Ideal Price = (Best Buy Price in Orderbook + Best Sell Price in Orderbook) / 2

Actual Buy Price = Sum of (Quantity * Execution Price) / Total Quantity

Impact Cost (for that particular quantity) = (Actual Buy Price – Ideal Price) / Ideal Price * 100

To explain this using an example, let us consider Infosys –

Let’s suppose a person wants to buy 350 quantities of Infosys. Now let us calculate the impact cost for this transaction –

Ideal Price = (1657.95+1658)/2 = 1657.975 ~ 1657.98

Actual Buy Price = (15*1658) + (335*1658.20) / 350 = 1658.19143 ~ 1658.19

Impact Cost for buying 350 shares = ((1658.19 – 1657.98) / 1657.98) * 100 = 0.012%

The few key messages that I want you to take away from this discussion are these –

1. Impact cost gives a sense of liquidity
1. The higher the liquidity in a stock, the lesser is the impact cost
1. The spread between the buying and selling price is also an indicator of liquidity
 
 Higher the spread, the higher the impact cost 
 Lower the spread, the lower is the impact cost
1. Higher the spread, the higher the impact cost
1. Lower the spread, the lower is the impact cost
1. Higher the liquidity, lesser the volatility
1. If the stock is not liquid, placing market orders is not a great idea




### 9.3 – Why trading Nifty makes sense

As you know the Nifty Index is a basket of 50 stocks. These stocks are selected to represent a wide section of the India economic sectors. This makes Nifty a good representative of the broader economic activity in India. This naturally means if the general economic activity is going up or at least expected to go up then Nifty’s value also goes up, and vice versa. This also makes trading Nifty Futures a much better choice as compared to single stock futures. There are many reasons for this, here are some –

1. It is diversified  – At times taking a directional call on a single stock can be a tough task, this is mainly from the risk perceptive. For example, let us just say I decide to buy Infosys Limited with a hope that the quarterly results would be good. In case the results don’t impress the markets, then obviously the stock would take a knock and so would my P&L. Nifty futures, on the other hand, has a diversified portfolio of 50 stocks. As it is a portfolio of stocks, the movement of the Index does not really depend on a single stock. Of course, occasionally a few stocks (index heavyweights) can influence Nifty to some extent but not on an everyday basis. In other words when you trade Nifty futures you completely eliminate ‘unsystematic risk’ and deal with only with ‘systematic risk’. I know these are new jargons being introduced here, we will discuss these terms in more detail at a later stage when we talk about hedging.
1. Hard to manipulate –  The movement in Nifty is a response to the collective movement in the top 50 companies in India (by market capitalization). Hence there is virtually no scope to manipulate the Nifty index. However the same cannot be said about individual stocks (remember Satyam, DHCL, Bhushan Steel etc)
1. Highly Liquid (easy fills, less slippage)  – We discussed liquidity earlier in the chapter. Since the Nifty is so highly liquid you can literally transact any quantity of Nifty without worrying about losing money on the impact cost. Besides, there is so much liquidity that you can literally transact any number of contracts that you wish.
1. Lesser margins  – Nifty futures require much lesser margins as compared to individual stock futures. To give you a perspective Nifty’s margin requirement varies between 12-15%, however individual stock margins can go as high as 45-60%.
1. Broader economic call –  Trading the Nifty futures requires one to take a broad-based economic call rather than company specify directional calls. From my experience, doing the former is much easier than the latter.
1. Application of Technical Analysis –  Technical Analysis works best on liquid instruments. Liquid stocks are hard to manipulate, hence they usually move based on the demand-supply dynamics of the market, which obviously is what a TA mainly relies on
1. Less volatile  – Nifty futures are less volatile compared to individual stock futures. To give you perspective the Nifty futures has an annualized volatility of around 16-17%, whereas individual stocks like say Infosys has annualized volatility of upwards of 30%.

1. Nifty Futures derives its value based on the Nifty Index in spot, which is its underlying
1. At present, the Nifty futures lot size is 75
1. The Nifty futures is the most liquid futures contract in India
1. Just like other future contracts, Nifty Futures contracts are also available with three different expiry options (Current month, Mid Month, and Far Month)
1. A round trip trade is an arbitrary quick instantaneous trade which involves buying at the best available sell price and selling at the best available buy price
1. A round trip trade always results in a loss
1. Impact cost measures the loss of a round trip as a % of average of bid and ask
1. Higher the impact cost, lesser the liquidity and vice versa
1. When you place a market order to transact, you may lose some money owing to impact cost
1. Nifty has an impact cost close to 0.0082%, which makes it the most liquid contract to trade



## 12.Open_Interest

[Read more](https://zerodha.com/varsity/chapter/open-interest/)



### 12.1 – Open Interest and its calculation

Before we conclude this module on “Futures Trading”, we must address one of the questions that is often asked- “What is Open Interest (OI)?”, “How is it different from Volumes?”, and “How can we benefit from the Volumes and Open interest data?” Let me attempt to answer these questions and more in this chapter. After reading this, you will be able to interpret OI data in conjunction with the Volumes to make better decisions while trading. Also, I would suggest you refresh your understanding on Volumes from  here.

Open Interest (OI) is a number that tells you how many futures (or Options) contracts are currently outstanding (open) in the market.  Remember that there are always 2 sides to a trade – a buyer and a seller. Let us say the seller sells 1 contract to the buyer. The buyer is said to be long on the contract and the seller is said to be short on the  same contract .  The open interest in this case is said to be 1.

Let me illustrate OI with an example. Assume the market consists of 5 traders who trade NIFTY futures. We will name them Arjun, Neha, Varun, John, and Vikram. Let us go through their day to day trading activity and observe how open interest varies. Please note, you need to exercise some patience while understanding the flow of events below, else you can quite easily get frustrated!

Lets get started.

Monday:  Arjun buys 6 futures contracts and Varun buys 4 futures contracts, while Neha sells all of those 10 contracts. After this transaction, there are 10 contracts in total with 10 on the long side (6 + 4) and another 10 on the short side; hence the open interest is 10.  This is summarized in the table below.

Tuesday:  Neha wants to get rid of 8 contracts out of the 10 contracts she holds, which she does. John comes into the market and takes on the 8 shorts contracts from her. You must realize that  this transaction did not create any new contracts  in the market. It was a simple transfer from one person to another. Hence the OI will still stand at 10.  Tuesday’s transaction is summarized in the table below.

Wednesday:  To the existing 8 short contracts, John wants to add 7 more short positions, while at the same time both Arjun and Varun decide to increase their long position. Hence John sold 3 contracts to Arjun and 2 contracts to Varun. Note, these are 5 new contracts created. Neha decides to close out her open positions. By going long on 2 contracts, she effectively transferred 2 of her short contracts to John and hence Neha holds no more contracts.  The table now looks like this:

By the end of Wednesday, there are 15 long (9+6) and 15 short positions in the market, hence OI stands at 15!

Thursday:  A big guy named Vikram comes to the market and sells 25 contracts. John decides to liquidate 10 contracts, and hence buys 10 contracts from Vikram, effectively transferring his 10 contracts to Vikram. Arjun adds 10 more contracts from Vikram and finally Varun decides to buy the remaining 5 contracts from Vikram. In summary,  15 new contracts got added  to the system.  OI would now stands at 30.

Friday:  Vikram decides to square off 20 of the 25 contracts he had sold previously.  So he buys 10 contracts each from Arjun and Varun. This means, 20 contracts in system got squared off, hence OI reduces by 20 contracts. The new OI is 30-20 = 10.  The final summary is listed in the table below.

So on and so forth; I hope the above discussion is giving you a fair sense of what Open Interest (OI) is all about. The OI information just indicates how many open positions are there in the market. Here is something you should have noticed by now. In the ‘contracts held’ column, if you assign a +ve sign to a long position and a –ve sign to a short position and add up the long and short positions, it always equates to zero.  In other words, wealth is transferred from buyers and sellers (or vice versa) and no new wealth is created (like if you hold a stock and stock price appreciates, then everyone makes money). For this reason, derivatives are often termed as a  zero-sum game!

Have a look at the following snapshot –

As of 4 th  March 2015, OI on Nifty futures is roughly 2.78 Crores. It means that there are 2.78 crore Long Nifty positions and 2.78 crore Short Nifty positions. Also, about 55,255 (or 0.2% over 2.78Crs) new contracts have been added today. OI is very useful in understanding how liquid the market is. Bigger the open interest, more liquid the market is. And hence it will be easier to enter or exit trades at competitive bid / ask rates.




### 12.2 – OI and Volume interpretation

Open interest information tells us how many contracts are open and live in the market. Volume on the other hand tells us how many trades were executed on the given day. For every 1 buy and 1 sell, volume adds up to 1. For instance, on a given day, 400 contracts were bought and 400 were sold, then the volume for the day is 400 and not 800. Clearly volumes and open interest are two different; buy seemingly similar set of information. The volume counter starts from zero at the start of the day and increments as and when new trades occur. Hence the volume data always increases on an intra-day basis. However, OI is not discrete like volumes, OI stacks up or reduces based on the entry and exit of traders. In fact for the example we have  just discussed, let us summarize the OI and volume information.

Notice how OI and volume change on a daily basis. Today’s volume has no implication on tomorrow’s volume. However, it is not true for OI. From a stand-alone perspective both OI and volume numbers are pretty useless. However traders generally associate these numbers with prices to draw an inference about the market.

The following tables summarizes the trader’s perspective with respect to changes in volume and prices –


Price | Volume | Trader’s Perception
--- | --- | ---
Increase | Increase | Bullish
Decrease | Decrease | Bearish trend could probably end, expect reversal
Decrease | Increase | Bearish
Increase | Decrease | Bullish trend could probably end, expect reversal


Unlike volumes, the change in Open interest does not really convey any directional view on markets. However it does give a sense of strength between bullish and bearish positions. The following tables summarizes the trader’s perspective with respect to changes in the OI and prices –


Price | OI | Trader’s Perception
--- | --- | ---
Increase | Increase | More trades on the long side
Decrease | Decrease | Longs are covering their position, also called long unwinding
Decrease | Increase | More trades on the short side
Increase | Decrease | Shorts are covering their position, also called short covering


Do note, if there is an abnormally high OI backed by a rapid increase or decrease in prices then be cautious. This situation simply means that there is a lot of euphoria and leverage being built up in the market. In situations like this, even a small trigger could lead to a lot of panic in the market.

And with this, I would like to conclude this module on Futures Trading. I hope you enjoyed reading through this module as much as I enjoyed writing it!

On wards to Option Theory now!

1. Open Interest (OI) is a number that tells you how many contracts are currently outstanding (open) in the market
1. OI increases when new contracts are added. OI decreases when contracts are squared off
1. OI does not change when there is transfer of contracts from one party to another
1. Unlike volumes, OI is continuous data
1. On a stand along basis OI and Volume information does not convey information, hence it makes sense to always pair it with the price to understand the impact of their respective variation
1. Abnormally high OI indicates high leverage, beware of such situations.

Updated : 24th Aug 2016  – If you use intra day OI information as a critical input for your trading strategy, then you should  read this  before you trade.



## 11.Hedging_with_Futures

[Read more](https://zerodha.com/varsity/chapter/hedging-futures/)



### 11.1 – Hedging, what is it?

One of the most important and practical applications of Futures is ‘Hedging’. In the event of any adverse market movements, hedging is a simple work around to protect your trading positions from making a loss. Let me to attempt giving you an analogy to help you understand what hedging really is.

Imagine you have a small bit of vacant barren land just outside your house, instead of seeing it lie vacant and barren you decide to lawn the entire plot and plant few nice flowering plants. You nurture the little garden, water it regularly, and watch it grow. Eventually your efforts are paid off and the lawn grows lush green and the flowers finally start to blossom. As the plants grow and flowers start to bloom it starts to attract attention of the wrong kind. Soon you realize your little garden has become a hot destination for a few stray cows. You notice these stray cows merrily gazing away the grass and spoiling the nice flowers. You are really annoyed with this and decide to protect your little garden? A simple work around is what you have in mind – you erect a fence (maybe a wooden hedge) around the garden to prevent the cows from entering your garden. This little work around ensures your garden stays protected and also lets your garden flourish.

Let us now correlate this analogy to the markets –

- Imagine you nurture a portfolio by picking each stock after careful analysis. Slowly you invest a sizable corpus in your portfolio. This is equivalent to the garden you grow
- At some point after your money is invested in the markets you realize that the markets may soon enter a turbulent phase which would result in portfolio losses. This is equivalent to the stray cow grazing your lawn and spoiling your flower plants
- To prevent your market positions from losing money you construct a portfolio hedge by employing futures. This is equivalent to erecting a fence (wooden hedge) around your garden

I hope the above analogy gave you got a fair sense of what ‘hedging’ is all about. Like I had mentioned earlier, hedging is a technique to ensure your position in the market is not affected by any adverse movements. Please don’t be under the impression that hedging is done only to protect a portfolio of stocks, in fact you can employ a hedge to protect individual stock positions, albeit with some restrictions.




### 11.2 – Hedge – But why?

A common question that gets asked frequently when one discusses about hedging is why really hedge a position? Imagine this – A trader or an investor has a stock which he has purchased at Rs.100. Now he feels the market is likely to decline and so would his stock. Given this, he can choose to do one of the following –

1. Take no action and let his stock decline with a hope it will eventually bounce back
1. Sell the stock and hope to buy it back later at a lower price
1. Hedge the position

Firstly let us understand what really happens when the trader decides not to hedge. Imagine the stock you invested declines from Rs.100 to let us say Rs.75. We will also assume eventually as time passes by the stock will bounce back to Rs.100. So the point here is when the stock eventually moves back to its original price, why should one really hedge?

Well, you would agree the drop from Rs.100/- to Rs.75/- is a 25% drop. However when the stock has to move back from Rs.75/- to Rs.100/- it is no longer a scale back of 25% instead it works out to that the stock has to move by 33.33% to reach the original investment value! This means when the stock drops it takes less effort do to so, but it requires extra efforts to scale back to the original value. Also, from my experience I can tell you stocks do not really go up that easily unless it is a raging bull market. Hence for this reason, whenever one anticipates a reasonably massive adverse movement in the market, it is always prudent to hedge the positions.

But what about the 2 nd  option ? Well, the 2 nd  option where the investor sells the position and buys back the same at a later stage requires one to time the market, which is not something easy to do. Besides when the trader transacts frequently, he will also not get the benefit of Long term capital tax. Needless to say, frequent transaction also incurs additional transactional fees.

For all these reasons, hedging makes sense as he is virtually insulates the position in the market and is therefore becomes indifferent to what really happens in the market. It is like taking vaccine shot against a virus. Hence when the trader hedges he can be rest assured the adverse movement in the market will not affect his position.




### 11.3 – Risk

Before we proceed to understand how we could hedge our positions in the market, I guess it is important to understand what is that we are trying to hedge. Quite obviously as you can imagine, we are hedging the risk, but what kind of risk?

When you buy the stock of a company you are essentially exposed to risk. In fact there are two types of risk –  Systematic Risk and Unsystematic Risk . When you buy a stock or a stock future, you are automatically exposed to both these risks.

The stock can decline (resulting in losses for you) for many reasons. Reasons such as –

1. Declining revenue
1. Declining profit margins
1. Higher financing cost
1. High leverage
1. Management misconduct

All these reasons represent a form of risk, in fact there could be many other similar reasons and this list can go on. However if you notice, there is one thing common to all these risks – they are all  company specific risk . For example imagine you have an investable capital of Rs.100,000/-. You decide to invest this money in HCL Technologies Limited. Few months later HCL makes a statement that their revenues have declined. Quite obviously HCL stock price will decline. Which means you will lose money on your investment. However this news will not impact HCL’s competitor’s (Tech Mahindra or Mindtree) stock price. Likewise if the management is guilty of any misconduct, then Tech Mahindra’s stock price will go down and not its competitors. Clearly these risks which are specific to the company affect only the company in question and not others. Such risks are often called the “ Unsystematic Risk ”.

Unsystematic risk can be diversified, meaning instead of investing all the money in one company, you can choose to diversify and invest in 2-3 different companies (preferably from different sectors). When you do so, unsystematic risk is drastically reduced. Going back to the above example imagine instead of buying HCL for the entire capital, you decide to buy HCL for Rs.50,000/- and maybe Karnataka Bank Limited for the other Rs.50,000/-. Under such a circumstance, even if HCL stock price declines (owing to the unsystematic risk) the damage is only on half of the investment as the other half is invested in a different company. In fact instead of just two stocks you can have a 5 stock or 10 or maybe 20 stock portfolio. The higher the number of stocks in your portfolio, higher the diversification and therefore lesser the unsystematic risk.

This leads us to a very important question – how many stocks should a good portfolio have so that the unsystematic risk is completely diversified. Research has it that up to 21 stocks in the portfolio will have the required necessary diversification effect and anything beyond 21 stocks may not help much in diversification.

The graph below should give you a fair sense of how diversification works –

As you can notice from the graph above, the unsystematic risk drastically reduces when you diversify and add more stocks. However after about 20 stocks the unsystematic risk is not really diversifiable, this is evident as the graph starts to flatten out after 20 stocks.  In fact the risk that remains even after diversification is called the “ Systematic Risk ”.

Systematic risk is the risk that is common to all stocks. These are usually the macroeconomic risks which tend to affect the whole market. Example of systematic risk include –

1. De-growth in GDP
1. Interest rate tightening
1. Inflation
1. Fiscal deficit
1. Geo political risk

Of course the list can go on but I suppose you got a fair idea of what constitutes systematic risk. Systematic risk affects all stocks. So assuming you have a well diversified 20 stocks portfolio, a de-growth in GDP will certainly affect all 20 stocks and hence they are all likely to decline. Systematic risk is  inherent in the system  and it cannot really be diversified. However systematic risk can be ‘ hedged ’. So when we are talking about hedging, do bear in mind that it is not the same as diversification.

Remember, we diversify to minimize unsystematic risk and we hedge to minimize systematic risk.




### 11.4 – Hedging a single stock position

We will first talk about hedging a single stock future as it is relatively simple and straight forward to implement. We will also understand its limitation and then proceed to understand how to hedge a portfolio of stocks.

Imagine you have bought 250 shares of Infosys at Rs.2,284/- per share. This works out to an investment of Rs.571,000/-. Clearly you are ‘ Long ’ on Infosys in the spot market. After you initiated this position, you realize the quarterly results are expected soon. You are worried Infosys may announce a not so favorable set of numbers, as a result of which the stock price may decline considerably. To avoid making a loss in the spot market you decide to hedge the position.

In order to hedge the position in spot, we simply have to enter a counter position in the futures market. Since the position in the spot is ‘ long ’, we have to ‘ short ’ in the futures market.

Here are the short futures trade details –

Short Futures @ 2285/-

Lot size = 250

Contract Value = Rs.571,250/-

Now on one hand you are long on Infosys (in spot market) and on the other hand we are short on Infosys (in futures price), although at different prices. However the variation in price is not of concern as directionally we are ‘ neutral ’. You will shortly understand what this means.

After initiating this trade, let us arbitrarily imagine different price points for Infosys and see what will be the overall impact on the positions.


Arbitrary Price | Long Spot P&L | Short Futures P&L | Net P&L
--- | --- | --- | ---
2200 | 2200 – 2284 = – 84 | 2285 – 2200 = +85 | -84 + 85 = +1
2290 | 2290 – 2284 = +6 | 2285 – 2290 = -5 | +6 – 5 = +1
2500 | 2500 – 2284 = +216 | 2285 – 2500 = -215 | +216 – 215 = +1


The point to note here is – irrespective of where the price is headed (whether it increases or decreases) the position will neither make money nor lose money. It is as if the overall position is frozen. In fact the position becomes indifferent to the market, which is why we say when a position is hedged it stays ‘neutral’ to the overall market condition. As I had mentioned earlier, hedging single stock positions is very straight forward with no complications. We can use the stock’s futures contract to hedge the position. But to use the stocks futures position one must have the same number of shares as that of the lot size. If they vary, the P&L will vary and position will no longer be perfectly hedged. This leads to a few important questions –

1. What if I have a position in a stock that does not have a futures contract? For example South Indian Bank does not have a futures contract, does that mean I cannot hedge a spot position in South Indian Bank?
1. The example considered the spot position value was Rs.570,000/-, but what if I have relatively small positions – say Rs.50,000/- or Rs.100,000/- is it possible to hedge such positions?

In fact the answer to both these questions is not really straight forward. We will understand how and why shortly. For now we will proceed to understand how we can hedge multiple spot positions (usually a portfolio). In order to do so, we first need to understand something called as “ Beta ” of a stock.




### 11.5 – Understanding Beta (β)

Beta, denoted by the Greek symbol β, plays a very crucial concept in market finance as it finds its application in multiple aspects of market finance. I guess we are at a good stage to introduce beta, as it also finds its application in hedging portfolio of stocks.

In plain words Beta measures the sensitivity of the stock price with respect to the changes in the market, which means it helps us answer these kinds of questions –

1. If market moves up by 2% tomorrow, what is the likely movement in stock XYZ?
1. How risky (or volatile)is stock XYZ compared to market indices (Nifty, Sensex)?
1. How risky is stock XYZ compared to stock ABC?

The beta of a stock can take any value greater or lower than zero. However, the beta of the  market indices (Sensex and Nifty) is always +1. Now for example assume beta of BPCL is +0.7, the following things are implied –

1. For every +1.0% increase in market, BPCL is expected to move up by 0.7%
 
 If market moves up by 1.5%, BPCL is expected to move up by 1.05% 
 If market decreases by 1.0%, BPCL is expected to decline by 0.7%
1. If market moves up by 1.5%, BPCL is expected to move up by 1.05%
1. If market decreases by 1.0%, BPCL is expected to decline by 0.7%
1. Because BPCL’s beta is less than the market beta (0.7% versus 1.0%) by 0.3%, it is believed that BPCL is 30% less risky than markets
 
 One can even say, BPCL relatively carries less systematic risk
1. One can even say, BPCL relatively carries less systematic risk
1. Assuming HPCL’s beta is 0.85%, then BPCL is believed to be less volatile compared HPCL, therefore less risky

The following table should help you get a perspective on how to interpret beta value for stock –


If Beta of a stock is | Interpretation
--- | ---
Less than 0, Ex : -0.4 | A -ve sign indicates the stock price and markets move in the
Equal to 0 | It means the stock is independent of the market movement.
Higher than 0 lesser than 1, | It means the stock and the market move in the same direction;
Higher than 1, Ex : 1.2 | It means the stock moves in the same direction as the markets;


As of January 2015, here is the Beta value for a few blue chip stocks –


Stock Name | Beta Value
--- | ---
ACC Limited | 1.22
Axis Bank Limited | 1.40
BPCL | 1.42
Cipla | 0.59
DLF | 1.86
Infosys | 0.43
LT | 1.43
Maruti Suzuki | 0.95
Reliance | 1.27
SBI Limited | 1.58





### 11.6 – Calculating beta in MS Excel

You can easily calculate the beta value of any stock in excel by using a function called ‘=SLOPE’. Here is a step by step method to calculate the same; I have taken the example of TCS.

1. Download the last 6 months daily close prices of Nifty and TCS. You can get this from the NSE website 
 Calculate the daily return of both Nifty and TCS.
 
 Daily return = [Today Closing price / Previous day closing price]-1 
 
 
 In a blank cell enter the slope function
 
 Format for the slope function is =SLOPE(known_y’s,known_x’s), where known_y’s is the array of daily return of TCS, and known_x’s is the array of daily returns of Nifty. 
 
 
 TCS 6 month beta (3 rd  September 2014 to 3 rd  March 2015) works out to 0.62
1. Download the last 6 months daily close prices of Nifty and TCS. You can get this from the NSE website
1. Calculate the daily return of both Nifty and TCS.
 
 Daily return = [Today Closing price / Previous day closing price]-1
1. Daily return = [Today Closing price / Previous day closing price]-1
1. In a blank cell enter the slope function
 
 Format for the slope function is =SLOPE(known_y’s,known_x’s), where known_y’s is the array of daily return of TCS, and known_x’s is the array of daily returns of Nifty.
1. Format for the slope function is =SLOPE(known_y’s,known_x’s), where known_y’s is the array of daily return of TCS, and known_x’s is the array of daily returns of Nifty.
1. TCS 6 month beta (3 rd  September 2014 to 3 rd  March 2015) works out to 0.62

You can refer to this  excel sheet  for the above calculation.




### 11.7 – Hedging a stock Portfolio

Let us now focus back to hedging a portfolio of stocks by employing Nifty futures. However before we proceed with this, you may have this question – why should we use Nifty Futures to hedge a portfolio? Why not something else?

Do recall there are 2 types of risk – systematic and unsystematic risk. When we have a diversified portfolio we are naturally minimizing the unsystematic risk. What is left after this is the systematic risk. As we know systematic risk is the risk associated with the markets, hence the best way to insulate against market risk is by employing an index which represents the market. Hence the Nifty futures come as a natural choice to hedge the systematic risk.

Assume I have Rs.800,000/- invested across the following stocks –


Sl No | Stock Name | Stock Beta | Investment Amount
--- | --- | --- | ---
01 | ACC Limited | 1.22 | Rs.30,000/-
02 | Axis Bank Limited | 1.40 | Rs.125,000/-
03 | BPCL | 1.42 | Rs.180,000/-
04 | Cipla | 0.59 | Rs.65,000/-
05 | DLF | 1.86 | Rs.100,000/-
06 | Infosys | 0.43 | Rs.75,000/-
07 | LT | 1.43 | Rs.85,000/-
08 | Maruti Suzuki | 0.95 | Rs.140,000/-
Total | Rs.800,000/-


Step 1 – Portfolio Beta

There are a few steps involved in hedging a stock portfolio. As the first step we need to calculate the overall  “Portfolio Beta”.

1. Portfolio beta is the sum of the “weighted beta of each stock”. 
 Weighted beta is calculated by multiplying the individual stock beta with its respective weightage in the portfolio 
 Weightage of each stock in the portfolio is calculated by dividing the sum invested in each stock by the total portfolio value 
 For example, weightage of Axis Bank is 125,000/800,000 = 15.6%
 
 Hence the weighted beta of Axis Bank on the portfolio would be 15.6% * 1.4 = 0.21
1. Portfolio beta is the sum of the “weighted beta of each stock”. 
 Weighted beta is calculated by multiplying the individual stock beta with its respective weightage in the portfolio 
 Weightage of each stock in the portfolio is calculated by dividing the sum invested in each stock by the total portfolio value 
 For example, weightage of Axis Bank is 125,000/800,000 = 15.6%
 
 Hence the weighted beta of Axis Bank on the portfolio would be 15.6% * 1.4 = 0.21
1. Portfolio beta is the sum of the “weighted beta of each stock”.
1. Weighted beta is calculated by multiplying the individual stock beta with its respective weightage in the portfolio
1. Weightage of each stock in the portfolio is calculated by dividing the sum invested in each stock by the total portfolio value
1. For example, weightage of Axis Bank is 125,000/800,000 = 15.6%
 
 Hence the weighted beta of Axis Bank on the portfolio would be 15.6% * 1.4 = 0.21
1. Hence the weighted beta of Axis Bank on the portfolio would be 15.6% * 1.4 = 0.21

The following table calculates the weighted beta of each stock in the portfolio –


Sl No | Stock Name | Beta | Investment | Weight in Portfolio | Weighted Beta
--- | --- | --- | --- | --- | ---
01 | ACC Limited | 1.22 | Rs.30,000/- | 3.8% | 0.046
02 | Axis Bank Limited | 1.40 | Rs.125,000/- | 15.6% | 0.219
03 | BPCL | 1.42 | Rs.180,000/- | 22.5% | 0.320
04 | Cipla | 0.59 | Rs.65,000/- | 8.1% | 0.048
05 | DLF | 1.86 | Rs.100,000/- | 12.5% | 0.233
06 | Infosys | 0.43 | Rs.75,000/- | 9.4% | 0.040
07 | LT | 1.43 | Rs.85,000/- | 10.6% | 0.152
08 | Maruti Suzuki | 0.95 | Rs.140,000/- | 17.5% | 0.166
Total | Rs.800,000/- | 100% | 1.223


The sum of the weighted beta is the overall  Portfolio Beta . For the portfolio above the beta happens to be 1.223. This means, if Nifty goes up by 1%, the portfolio as a whole is expected to go up by 1.223%. Likewise if Nifty goes down, the portfolio is expected to go down by 1.223%.

Step 2 – Calculate the hedge value

Hedge value is simply the product of the Portfolio Beta and the total portfolio investment

= 1.223 * 800,000

=  978,400/-

Remember this is a long only portfolio, where we have purchased these stocks in the spot market. We know in order to hedge we need to take a counter position in the futures markets. The hedge value suggests, to hedge a portfolio of Rs.800,000/- we need to short futures worth Rs.978,400/-. This should be quite intuitive as the portfolio is a ‘high beta portfolio’.

Step 3 – Calculate the number of lots required

At present Nifty futures is trading at 9025, and with the current lot size of 25, the contract value per lot works out to –

= 9025 * 25

= Rs.225,625/-

Hence the number of lots required to short Nifty Futures would be

= Hedge Value / Contract Value

= 978,400 / 225625

=  4.33

The calculation above suggests that, in order to perfectly hedge a portfolio of Rs.800,000/- with a beta of 1.223, one needs to short 4.33 lots of Nifty futures. Clearly we cannot short 4.33 lots as we can short either 4 or 5 lots, fractional lot sizes are not available.

If we choose to short 4 lots, we would be slightly  under hedged . Likewise if we short 5 units we would be  over hedged . In fact for this reason, we cannot always perfectly hedge a portfolio.

Now, let as assume after employing the hedge, Nifty in fact goes down by 500 points (or about 5.5%). With this we will calculate the effectiveness of the portfolio hedge. Just for the purpose of illustration, I will assume we can short 4.33 lots.

Nifty Position

Short initiated at – 9025

Decline in Value – 500 points

Nifty value – 8525

Number of lots – 4.33

P & L = 4.33 * 25 * 500 =  Rs.54,125

The short position has gained Rs.54,125/-. We will look into what could have happened on the portfolio.

Portfolio Position

Portfolio Value = Rs.800,000/-

Portfolio Beta = 1.223

Decline in Market = 5.5%

Expected Decline in Portfolio = 5.5% * 1.233 = 6.78%

= 6.78% * 800000

=  Rs. 54,240

Hence as you can see, one hand the Nifty short position has gained Rs.54,125 and on the other hand the long portfolio has lost Rs.54,240/-. As a net result, there is no loss or gain (please ignore the minor difference) in the net position in the market. The loss in portfolio is offset by the gain in the Nifty futures position.

With this, I hope you are now in a position to understand how you could hedge a portfolio of stocks. I would encourage you to replace 4.33 lots by either 4 or 5 lots and run the same exercise.

Finally before we wrap up this chapter, let us revisit two unanswered questions that we posted when we discussed hedging single stock positions. I will repost the same here for your convenience –

1. What if I have a position in a stock that does not have a futures contract? For example South Indian Bank does not have a futures contract, does that mean I cannot hedge a spot position in South Indian Bank?
1. The example considered, the spot position value was Rs.570,000/-, but what if I have relatively small positions – say Rs.50,000/- or Rs.100,000/- is it possible to hedge such positions?

Well, you can hedge stocks that do not have stock futures. For example assume you have Rs.500,000/- worth of South Indian Bank. All you need to do is multiply the stocks beta with the investment value to identify the hedge value. Assuming the stock has a beta of 0.75, the hedge value would be

500000*0.75

= 375,000/-

Once you arrive at this, directly divide the hedge value by the Nifty’s contract value to estimate the number of lots required (to short) in the futures market, and hence with this you can hedge the spot position safely.

As far as the 2 nd  question goes – no, you cannot hedge small positions whose value is relatively lower than the contract value of Nifty. However you can hedge such positions by employing options. We will discuss the same when we take up options.

1. Hedging allows you to insulate your market position against any adverse movements in the market 
 When you hedge your loss in the spot market it is offset by gains in the futures market 
 There are two types of risk – systematic and unsystematic risk 
 Systematic risk is risk specific to macroeconomic events. Systematic risk can be hedged. Systematic risk is common to all stocks 
 Unsystematic risk is the risk associated with the company. This is unique to each company. Unsystematic risk cannot be hedge, but can be diversified 
 Research suggests, beyond 21 stocks unsystematic risk cannot be diversified any further 
 To hedge a single stock position in spot we simply have to take a counter position in the futures market. But the extent of spot value and futures value have to be same 
 Market beta is always +1.0 
 Beta measures the sensitivity of stock
 
 Stock with Beta of less than 1 is called low beta stock 
 Stocks with Beta higher than 1 is called a high beta stock 
 
 
 One can easily estimate the stock beta in MS Excel by employing the ‘Slope’ function 
 To hedge a portfolio of stocks we need to follow the following steps
 
 Calculate individual stock beta 
 Calculate individual weightage of each stock in the portfolio 
 Estimate the weighted beta of each stock 
 Sum up the weighted beta to get the portfolio beta 
 Multiply the portfolio beta with Portfolio value to get the hedge value 
 Divide the hedge value by Nifty Contract Value to get the number of lots 
 Short the required number of lots in the futures market 
 
 
 Remember a perfect hedge is difficult to construct, for this reason we are forced to either under hedge or over hedge.
1. Hedging allows you to insulate your market position against any adverse movements in the market
1. When you hedge your loss in the spot market it is offset by gains in the futures market
1. There are two types of risk – systematic and unsystematic risk
1. Systematic risk is risk specific to macroeconomic events. Systematic risk can be hedged. Systematic risk is common to all stocks
1. Unsystematic risk is the risk associated with the company. This is unique to each company. Unsystematic risk cannot be hedge, but can be diversified
1. Research suggests, beyond 21 stocks unsystematic risk cannot be diversified any further
1. To hedge a single stock position in spot we simply have to take a counter position in the futures market. But the extent of spot value and futures value have to be same
1. Market beta is always +1.0
1. Beta measures the sensitivity of stock
 
 Stock with Beta of less than 1 is called low beta stock 
 Stocks with Beta higher than 1 is called a high beta stock
1. Stock with Beta of less than 1 is called low beta stock
1. Stocks with Beta higher than 1 is called a high beta stock
1. One can easily estimate the stock beta in MS Excel by employing the ‘Slope’ function
1. To hedge a portfolio of stocks we need to follow the following steps
 
 Calculate individual stock beta 
 Calculate individual weightage of each stock in the portfolio 
 Estimate the weighted beta of each stock 
 Sum up the weighted beta to get the portfolio beta 
 Multiply the portfolio beta with Portfolio value to get the hedge value 
 Divide the hedge value by Nifty Contract Value to get the number of lots 
 Short the required number of lots in the futures market
1. Calculate individual stock beta
1. Calculate individual weightage of each stock in the portfolio
1. Estimate the weighted beta of each stock
1. Sum up the weighted beta to get the portfolio beta
1. Multiply the portfolio beta with Portfolio value to get the hedge value
1. Divide the hedge value by Nifty Contract Value to get the number of lots
1. Short the required number of lots in the futures market
1. Remember a perfect hedge is difficult to construct, for this reason we are forced to either under hedge or over hedge.



## 13.Quick_Note_on_Physical_Settlement

[Read more](https://zerodha.com/varsity/chapter/quick-note-on-physical-settlement/)



### 13.1 – Overview

Until recent times, trading in equity futures and options was cash settled in India. What this means is that upon expiry of the contract, buyers or sellers had to settle their position in cash without having to take delivery of the underlying security. On April 11, 2018, SEBI released a circular making physical delivery of stocks for all stock F&O contracts mandatory in a phased manner. The aim was to curb excessive speculation which would result in too much volatility in individual stocks.




### 13.2 What is Physical Settlement?

It means all stock F&O contracts at expiry, are required to be given/taken delivery of the underlying security. From October 2019’s expiry, all stock F&O contracts are compulsorily settled physically.

Let’s understand this with an example, before the introduction of physical settlement, if you bought only a lot of SBI futures expiring this month, on expiry, the contract will be cash-settled based on the settlement price and you will receive the credit or debit in your trading account. We’ve explained how marked to market settlement works in this  chapter . But with the physical settlement, if you don’t close or rollover your position till expiry, you are required to pay the total contract and you will receive the delivery of shares to your Demat account.




### 13.3 Why is Physical Settlement enforced?

When the contract is cash-settled, traders only are required to maintain the margin(SPAN +Exposure) for the contract and can lead to short-sellers building up excessive short positions closer to expiry artificially bringing down the price. With the physical settlement, these traders will have to buy the stock from the equity market or borrow on the SLB markets to be able to deliver the stocks to the counterparty. This brings in balance to the price not allowing for price manipulation.




### 13.4 How are positions settled?

On expiry, various F&O contracts are settled in the following manner

1. Take Delivery(stocks are delivered to your Demat account)- Long Futures, long ITM Call and short ITM Put
1. Give Delivery(you are required to deliver the stocks to the exchange)- Short Futures, short ITM Call and long ITM Put.

Only ITM options will be physically settled, if the option expires OTM, they expire worthlessly and there won’t be any delivery obligation.




### 13.5 Netted off positions(subcategory)

If you have multiple positions of the same underlying for the same expiration date and they form a hedge, depending on the direction of the trade, they will be netted off.


1st Leg | 2nd Leg
--- | ---
Long Futures | Short ITM Call
Short Futures | Long ITM Call
Long ITM Call | Long ITM Put
Long ITM Put | Long ITM Call
Short ITM Call | Long ITM Call
Short ITM Put | Short ITM Call


For example, if you have an SBI June long futures contract and long ITM Put of strike 200(SBI spot price at Rs 180), the long futures position will lead to a take delivery obligation and the long put option to a given delivery obligation. This will be netted off for your account and there won’t be any physical delivery obligation.




### 13.6 Margins

When you are trading in the F&O segment, for futures and short options, you will require to maintain only the margin amount in your account, for long options, just the premium required to buy. However, this changes with the physical settlement mechanism, where you are required to bring in 100% of the contract value to take delivery of the contract or bring in stocks to give delivery(depending on the direction of your trade). Brokers introduce additional margins when such positions get closer to expiry.

You can read on Zerodha’s physical settlement policy  here .



## 10.The_Futures_Pricing

[Read more](https://zerodha.com/varsity/chapter/futures-pricing/)



### 10.1 – The Pricing Formula

If you were to take a conventional course on Futures trading, you would probably be introduced to the futures pricing formula right at the very beginning of the course. However we have deliberately opted to talk about it now, at a much later stage. The reason is simple – if you are trading futures based on technical analysis (I assume a vast majority of you are doing this) then you would not really need to know how the futures are priced, although a good working knowledge would help. However if you aspire to trade futures by employing quantitative strategies such as Calendar Spreads or Index Arbitrage then you certainly need to know this. In fact we will have a module dedicated to ‘Trading Strategies’ where we would discuss some of these strategies, hence the discussion in this chapter will lay down a foundation for the forthcoming modules.

If you recall, in some of the earlier chapters occasionally we discussed the ‘Futures Pricing Formula’ as the prime reason for the difference between the spot price and the futures price. Well, I guess it is time now to lift the veil and introduce the ‘Future Pricing Formula’.

We know the futures instrument derives its value from its respective underlying. We also know that the futures instrument moves in sync with its underlying. If the underlying price falls, so would the futures price and vice versa. However, the underlying price and the futures price differs and they are not really the same. To give you a perspective as I write this, Nifty Spot is at 8,845.5 whereas the corresponding current month contract is trading at 8,854.7, please refer to the snap shot below. This difference in price between the futures price and the spot price is called the  “basis or spread” . In case of the Nifty example below, the spread is 9.2 points (8854.7 – 8845.5).

The difference in price is attributable to the  ‘Spot – Future Parity’ . The spot future parity the difference between the spot and futures price that arises due to variables such as interest rates, dividends, time to expiry etc. In a very loose sense it is simply is a mathematical expression to equate the underlying price and its corresponding futures price. This is also known as the  futures pricing formula .

The futures pricing formula simply states –

Futures Price = Spot price *(1+ r f  )– d

Where,

r f  = Risk-free rate

d – Dividend

Note, ‘r f ’ is the risk-free rate that you can earn for the entire year (365 days); considering the expiry is at 1, 2, and 3 months one may want to scale it proportionately for time periods other than the exact 365 days. Therefore a more generic formula would be –

Futures Price = Spot price * [1+ r f *(x/365)]– d

Where,

x = number of days to expiry.

One can take the RBI’s 91 day Treasury bill as a proxy for the short term risk-free rate. You can find the same on the RBI’s home page, as shown in the snapshot below –

As we can see from the image above, the current rate is 8.3528%. Keeping this in perspective let us work on a pricing example. Assume Infosys spot is trading at 2,280.5 with 7 more days to expiry, what should Infosys’s current month futures contract be priced at?

Futures Price = 2280.5 * [1+8.3528 %( 7/365)] – 0

Do note, Infosys is not expected to pay any dividend over the next 7 days, hence I have assumed dividend as 0. Solving the above equation, the future price turns out to be 2283. This is called the  ‘Fair value’  of futures. However the actual futures price as you can see from the image below is 2284. The actual price at which the futures contract trades is called the  ‘Market Price’.

The difference between the fair value and market price mainly occurs due to market costs such as transaction charges, taxes, margins etc. However by and large the fair value reflects where the futures should be trading at a given risk free rate and number of days to expiry. Let us take this further, and figure out the futures price for mid month and far month contracts.

Mid month calculation

Number of days to expiry = 34 (as the contract expires on 26 th  March 2015)

Futures Price = 2280.5 * [1+8.3528 %( 34/365)] – 0

= 2299

Far month calculation

Number of days to expiry = 80 (as the contract expires on 30 th  April 2015)

Futures Price = 2280.5 * [1+8.3528 %( 80/365)] – 0

= 2322

From NSE website let us take a look at the actual market prices –

Snapshot of Infosys’s mid month contract

Snapshot of Infosys’s mid month contract

Clearly there is a difference between the calculated fair value and the market price. I would attribute this to the applicable costs. Besides, the market could be factoring in some financial yearend dividends as well. However the key point to note is as the number of days to expiry increases, the difference between the fair value and market value widens.

In fact this leads us to another important commonly used market terminology –  the discount and the premium.

If the futures is trading higher than the spot, which mathematically speaking is the natural order of things, then the futures market is said to be at ‘ premium ’. While ‘Premium’ is a term used in the Equity derivatives markets, the commodity derivatives market prefer to refer to the same phenomenon as ‘ Contango ’. However, both contango and premium refer to the same fact – The Futures are trading higher than the Spot.

Here is a plot of Nifty spot and its corresponding futures for the January 2015 series. As you can see the Nifty futures is trading above the spot during the entire series.

I specifically want to draw your attention to the following few points –

1. At the start of the series (highlighted by a black arrow) the spread between the spot and futures is quite high. This is because the number of days to expiry is high hence the x/365 factor in the futures pricing formula is also high.
1. The futures remained at premium to the spot throughout the series
1. At the end of the series (highlighted by a blue arrow) the futures and the spot have converged. In fact this always happens. Irrespective of whether the future is at a premium or a discount,  on the day of the expiry, the futures and spot will always converge .
1. If you have a futures position and if you fail to square off the position by expiry, then the exchange will square off the position automatically and it will be settled at the spot price as both futures and spot converges on the day of the expiry

Not always does the futures trade richer than the spot. There could be instances – mainly owing to short term demand and supply imbalances where the futures would trade cheaper than its corresponding spot. This situation is when the futures is said to be trading at a discount to the spot. In the commodities world, the same situation is referred to as the  “backwardation”.




### 10.2 – Practical Application

Before we conclude this chapter, let us put the futures pricing formula to some practical use. Like I had mentioned earlier, futures pricing formula comes very handy when you aspire to trade employing quantitative trading techniques. Please note, the following discussion is only a preview window into the world of trading strategies. We will discuss all these things plus more in greater detail when we take up the module on “Trading Strategies”. Consider this situation –

Wipro Spot = 653

R f –  8.35%

x = 30

d = 0

Given this, the futures should be trading at –

Futures Price = 653*(1+8.35 %( 30/365)) – 0

= 658

Accommodate for market charges, the futures should be trading in and around 658. Now what if instead the futures contract is trading at a drastically different price? Let’s say 700? Clearly there is a trade here. The difference between the spot and futures should ideally be just 5 points, but due to market imbalances the difference has shot up to 47 points. This is a spread that we can capture by deploying a trade.

Here is how one can do this – since the future contract is trading above its fair value, we term the futures market price as  expensive relative to its fair value . Alternatively we can say, the spot is trading cheaper with respect to the futures.

The thumb rule in any sort of ‘spread trade’ is to buy the cheaper asset and sell the expensive one. Hence going by this, we can sell Wipro Futures on one hand and simultaneously buy Wipro in the spot market. Let us plug in the numbers and see how this goes –

Buy Wipro in Spot @ 653

Sell Wipro in Futures @ 700

Now we know that on the expiry day, both the spot and the futures converge into one single price (refer to the Nifty graph posted above). Let us assume a few random values at which the futures and the spot converge – 675, 645, 715 and identify what happens to the trade –


Expiry Value | Spot Trade P&L (Long) | Futures Trade P&L (Short) | Net P&L
--- | --- | --- | ---
675 | 675 – 653 = +22 | 700 – 675 = +25 | +22 + 25 = +47
645 | 645 – 653 = -08 | 700 – 645 = +55 | -08 + 55 = +47
715 | 715 – 653 = +62 | 700 – 715 = -15 | +62 – 15 = +47


As you can notice, once you have executed the trade at the expected price you have essentially locked in the spread. So irrespective of where the market goes by expiry, the profits are guaranteed! Of course, it goes without saying that it makes sense to square off the positions just before the expiry of the futures contract. This would require you to sell Wipro in spot market and buy back Wipro in Futures market.

This kind of trade between the futures and the spot to extract and profit from the spread is also called the ‘ Cash & Carry Arbitrage ’.

10.3 – Calendar Spreads

The calendar spread is a simple extension of the cash & carry arbitrage. In a calendar spread, we attempt to extract and profit from the spread created between two futures contracts of the same underlying but with different expiries. Let us continue with the Wipro example and understand this better –

Wipro Spot is trading at = 653

Current month futures fair value (30 days to expiry) = 658

Actual market value of current month futures = 700

Mid month futures fair value (65 days to expiry) = 663

Actual market value of mid month futures = 665

From the above example, clearly the current month futures contract is trading way above its expected theoretical fair value. However the mid month contract is trading close to its actual fair value estimate. With these observations, I will make an assumption that the current month contract’s basis will eventually narrow down and the mid month contract will continue to trade close to its fair value.

Now with respect to the mid month contract, the current month contract appears to be expensive. Hence we sell the expensive contract and buy the relatively cheaper one. Therefore the trade set up would require me to buy the mid month futures contract @ 665 and sell the current month contract @ 700.

What do you think is the spread here? Well, the spread is the difference between the two future contracts i.e 700 – 665 = 35 points.

The trade set up to capture the spread goes like this –

Sell the current month futures @ 700

Buy the mid month futures @ 665

Do note – because you are buying and selling the same underlying futures of different expiries, the margins are greatly reduced as this is a hedged position.

Now after initiating the trade, one has to wait for the current month’s futures to expire.  Upon expiry, we know the current month futures and the spot will converge to a single price. Of course on a more practical note, it makes sense to unwind the trade just before the expiry.

Let us arbitrarily take a few scenarios as below and see how the P&L pans out –


Expiry Value | Current month P&L (Short) | Mid Month P&L (Long) | Net P&L
--- | --- | --- | ---
660 | 700 – 660 = +40 | 660 – 665 = -5 | +40 – 5 = +35
690 | 700 – 690 = +10 | 690 – 665 = +25 | +10 + 25 = +35
725 | 700 – 725 = -25 | 725 – 665 = +60 | -25 + 60 = +35


Of course, do recall the critical assumption we have made here is that i.e. the mid month contract will stick close to its fair value. From my trading experience this happens most of the times.

Most importantly please do bear in mind the discussion with respect to spreads in this chapter is just a sneak peek into the world of trading strategies. We will discuss these strategies in a separate module which would give you an in depth analysis on how one can professionally deploy these strategies.

1. The futures pricing formula states that the Futures Price = Spot price *(1+R f  (x/365)) – d
1. The difference between futures and spot is called the basis or simply the spread
1. The futures price as estimated by the pricing formula is called the “Theoretical fair value”
1. The price at which the futures trade in the market is called the ‘market value’
1. The theoretical fair value of futures and market value by and large should be around the same value. However there could be slight variance mainly due to the associated costs
1. If the futures is rich to spot then the futures is said to be at premium else it is said to be at a discount
1. In commodity parlance Premium = Contango and Discount = Backwardation
1. Cash and carry is a spread where one can buy in the spot and sell in the futures
1. Calendar spread is an extension of a cash and carry where one buys a contract and simultaneously sells another contract (with a different expiry) but of the same underlying



## 8.All_about_Shorting

[Read more](https://zerodha.com/varsity/chapter/shorting/)



### 8.1 – Shorting in a nutshell

We briefly discussed shorting in  Module 1 . However in this chapter we will look at shorting in greater detail. Shorting is a tricky concept because we are not used to shorting in our day to day transaction. For example imagine this transaction – You buy an apartment today for let us say Rs.X, sell it 2 years later for Rs.X+Y. The profit made on the transaction is the incremental value over and above Rs.X, which happens to be Rs.Y. This is a simple and a highly intuitive transaction. In fact most of the day to day transactions requires us to buy something first and sell it later (maybe for a profit or a loss). These are simple to understand transactions and we are used to it. However in a short sale or a just ‘shorting’ we carry out the transactions in the exact opposite direction i.e. to sell first and buy later.

So what would compel a trader to sell something first and then buy it later? Well, it is quite simple – When we believe the price of an asset such as a stock is likely to increase we buy the stock first and sell it later. However, when we believe the price of the stock is going to decline, we usually sell it first and buy it later!

Confused? Well, let me try giving you a rudimentary analogy just so that you can get the gist of the concept at this stage. Imagine your friend and you are watching a nail biting India Pakistan cricket match. Both of you are in a mood for a little wager. You bet that India is going to win the match, and your friend bets that India will lose the match. Quite naturally this means you make money if India wins. Likewise your friend would make money if India were to lose the match. Now for a minute think of the India (as in the Indian cricket team in this context) as a stock trading in the stock market. When you do so, your bet is equivalent to saying that you would make money if the stock goes up (India wins the match), and your friend would make money if the stock goes down (India loses the match). In market parlance, you are long on India and your friend is short on India.

Still confused? May not be I suppose, but I would imagine a few unanswered questions crawling in your mind. If you are completely new to shorting, just remember this one point for now –  When you feel the price of a stock is likely to decline, you can make money by shorting the stock. To short stock or futures, you will have to sell first and buy later . In fact the best way to learn shorting is by actually shorting a stock/futures and experiencing the P&L. However in this chapter, I will try and explain all the things you need to know before you go ahead and short the stock/futures.




### 8.2 – Shorting stocks in the spot market

Before we understand how one can short a stock in the futures market, we need to understand how shorting works in the spot market. Think about the following hypothetical situation –

1. A trader looks at the daily chart of HCL Technologies Limited and identifies the formation of a bearish Marubuzo
1. Along with  the bearish Marubuzo, other checklist items (as discussed in TA module) complies as well
 
 Above average volumes 
 Presence of the resistance level 
 Indicators confirm 
 The Risk & Reward ratio is satisfactory
1. Above average volumes
1. Presence of the resistance level
1. Indicators confirm
1. The Risk & Reward ratio is satisfactory
1. Based on the analysis the trader is convinced that HCL Technologies will decline by at least 2.0% the following day

Now given this outlook, the trader wants to profit by the expected price decline. Hence he decides to short the stock. Let us understand this better by defining the trade –


Stock | HCL Technologies
--- | ---
Trade Type | Short (sell first and buy later)
Trade Type | Short (sell first and buy later)
Trade Duration | Intra day
Short Price | Rs.1990/-
Number of shares | 50
Target Price | Rs.1950/-
% Profit Expected | 2.0%
Stoploss | Rs.2000/-
Risk | Rs.10/-
Reward | Rs.40/-


As we know, when one shorts a stock or stock futures, the expectation is that the stock price goes down and therefore one can profit out of the falling prices. So from the table above the idea is to short the stock at Rs.1990.

On the trading platform when you are required to short, all you need to do is highlight the stock (or futures contract) you wish to short and press F2 on your  trading platform.  Doing so invokes the sell order form; enter the quantity and other details before you hit Submit. When you hit submit, the order hits the exchange and assuming it gets filled, you would have created a short open position for yourself.

Anyway, now think about this – When you enter a trading position, under what circumstances would you make a loss? Well, quite obviously you would lose money when the stock price goes against your expected direction. So,

1. When you short a stock what is the expected directional move?
 
 The expectation is that the stock price would decline, so the directional view is downwards
1. The expectation is that the stock price would decline, so the directional view is downwards
1. So when would you start making a loss?
 
 When the stock moves against the expected direction
1. When the stock moves against the expected direction
1. And what would that be?
 
 This means you will start making a loss if the stock price instead of going down starts to move up
1. This means you will start making a loss if the stock price instead of going down starts to move up

For this reason whenever you short, the stoploss price is always higher than the price at which you have shorted the stock. Therefore from the table above you can see that the short trade entry is Rs.1990/- and the stoploss is Rs.2000/-, which is Rs.10/- higher than the entry price.

Now, after initiating the short trade at Rs.1990/- let us now hypothetically imagine 2 scenarios.

Scenario 1 – The stock price hits the target of Rs.1950/-

In this case the stock has moved as per the expectation. The stock has fallen from Rs.1990/- to Rs.1950/-. Since the target has been achieved, the trader is expected to close the position. As we know in a short position the trader is required to –

1. First sell @ Rs.1990/- and
1. Later buy @ Rs.1950/-

In the whole process, the trader would have made a profit equal to the differential between the selling and buying price – i.e. Rs.40/- (1990 – 1950).

If you look at it from another angle (i.e. the usual buy first and sell later angle), this is as good as buying at Rs.1950 and selling at Rs.1990. It is just that the trader has reversed the transaction order by selling first and buying later.

Scenario 2 – The stock price increases to Rs.2000/-

In this case the stock has gone higher than the short price of Rs.1990/-. Recollect when you short, for you to profit the stock needs to decline in price. If the stock price goes up instead then there would be a loss. In this case the stock has gone up, hence there would be a loss –

1. The trader shorted @ Rs.1990/-. After shorting, the stock went up as opposed to the trader’s expectation
1. The stock hits Rs.2000/- and triggers the stoploss. To prevent further losses, the trader will have to close the position by buying the stock back.

In the whole process the trader would have suffered a loss of Rs.10/- (2000 – 1990). If you look at it from the regular buy first sell later angle – this transaction is as good as buying at Rs.2000/- and selling at Rs.1990/ , and again if we reverse the order it would be sell first and buy later.

Hopefully the above two scenarios should have convinced you about the fact that, when you short you make money when the price goes down and you lose when the price increases.




### 8.3 – Shorting in spot (The stock exchange’s perspective)

Shorting in the spot market has one restriction – it strictly has to be done on an intraday basis. Meaning you can initiate the short trade anytime during the day, but you will have to buy back the shares (square off) by end of the day before the market closes. You cannot carry forward the short position for multiple days. To understand why shorting in the spot market is strictly an intraday affair we need to understand how the exchange treats the short position.

When you short in the spot market, you obviously sell first. The moment you sell a stock, the backend process would alert the exchange that you have sold a particular stock. The exchange does not differentiate between a regular selling of stock (from DEMAT account) and a short sale. From their perspective they are of the opinion that you have sold the shares which would obligate you to deliver the same. In order to do so, you need to keep the shares ready in your DEMAT account by next day. However the exchange would know about your obligation only after the market closes and not during the market hours.

Keep the above discussion in the back of your mind. Now for a moment let us assume you have shorted a stock and hope to benefit from the price decline. After you short, the price has not declined as expected and hence you decide to wait for another day. However at the end of the day, exchange would figure out that you have sold shares during the day, hence you would be required to keep these shares ready for delivery. However you do not have these shares for meeting your delivery obligation. This means you will default against your obligation; hence there would be a hefty penalty for this default. This situation is also referred to as “Short Delivery”.

Under a short delivery situation, the exchange would take up the issue and settle it in the auction market. I would encourage you to read this  article   on Z-Connect which beautifully explains the auction market procedures and how penalty is imposed on the client defaulting on delivery obligation. A piece of advice here, never get into the ‘short delivery’ situation, always make sure you close your short trade before the market close, else the penalty could be as high as 20% above your short price.

Also, this leads us to an important thought – the exchange anyway checks for the obligations after the market closes. Hence before the exchange can run the ‘obligation check’ if one were to cover the short position (by squaring off) then there would be no obligation at all by end of the day. Hence for this reason, shorting in spot market has to be done strictly as an intraday trade without actually carrying forward the delivery obligation.

So does that mean all short positions have to be closed within the day? Not really. A short position created in the futures market can be carried forward overnight.




### 8.4 – Shorting in the Futures Market

Shorting a stock in the futures segment has no restrictions like shorting the stock in the spot market. In fact this is one of the main reasons why trading in futures is so popular. Remember the ‘futures’ is a derivative instrument that just mimics the movement of its respective underlying. So if the underlying value is going down, so would the futures. This means if you are bearish about a stock then you can initiate a short position on its futures and hold on to the position overnight.

Similar to depositing a margin while initiating a long position, the short position also would require a margin deposit. The margins are similar for both the long and short positions and they do not really change.

To help you understand the ‘Mark to Market’ (M2M) perspective when you short futures, let us take up the following example. Imagine you have shorted HCL Technologies Limited at Rs.1990/-. The lot size is 125. The table below shows the stock price movement over the next few days and the respective M2M –


Day | Ref price for M2M | Closing Price | P&L for the day
--- | --- | --- | ---
01 – (Initiate short) | 1990 | 1982 | 125 x 8 = 1000
02 | 1982 | 1975 | 125 x 7 + 875
03 | 1975 | 1980 | 125 x 5 = 625
04 | 1980 | 1989 | 125 x 9 = 1125
05 | 1989 | 1970 | 125 x 19 = 2375
06 – (Square off) | 1970 | 1965 | 125 x 5 = 625


The two lines marked in red highlights the fact that they are loss making days. To get the overall profitability of the trade we could just add up all the M2M values –

+ 1000 + 875   – 625 – 1125   + 2375 + 625

= Rs.3125/-

Alternatively we could look at it as –

(Selling Price – Buying price) * Lot Size

= (1990 – 1965) * 125

= 25*125

=Rs.3125/-

So, shorting futures is very similar to initiating a long futures position, except that when you short you profit only if the price declines. Besides this, the margin requirement and the M2M calculation remains the same.

Shorting is a very integral part of active trading. I would suggest you get as comfortable with initiating a short trade as you would with a long trade.

Key takeaways from this chapter

1. Shorting requires us to sell first and buy later
1. Short trade is profitable only when the closing price is lower than the entry price
1. When the price goes higher than the price at which one has shorted, then there would be a loss
1. The stoploss in a short trade is always higher than the price at which one has shorted
1. One can only short on an intraday basis in the spot market
1. The short positions cannot be carried overnight in the spot market
1. The short position in the futures market can be carried forward overnight
1. The margins requirement for both short and long trades are similar
1. The M2M computation is also similar for both short and long trades



## 7.Margin_Calculator_(Part_2)

[Read more](https://zerodha.com/varsity/chapter/margin-calculator-part-2/)



### 7.1 – The trade information

I’m going to start this chapter by posting the same old question again – Why do you think margins are charged? Before you get annoyed and come chasing me, let me post the answer.

Margins are charged from a risk management perspective. It helps in preventing any undesired counterparty default. The risk management system at the broker’s office (often called the RMS system) is responsible for overseeing the overall risk management. You may be interested to know that the RMS is a computer program, and all orders placed by the clients reach the exchange only once this program approves it (which takes a fraction of a second), and people are monitoring if everything done is right/wrong.

When you place a trade, let us say to buy a futures contract (via a buy order entry form), you are essentially conveying the following details to the risk management system (RMS) –

1. The contract you wish to buy (like TCS futures, IDEA futures etc.)
1. The quantity you wish to buy ( number of lots)
1. The price at which you want to buy (market or limit)

Once you place the order, the RMS system evaluates the margin requirement and allows your trade to go through (provided you have the required margin amount).

However, the information that you  don’t normally  provide to the RMS system is the following –

1. The duration up to which you wish to hold your trade – is your trade intraday, or you would wish to hold on to it over multiple days?
1. The stoploss point – If the trade goes against you, at what price point you would wish to book a loss and square off the position.

Now, what would happen if you provided these additional details to the RMS system? Obviously, with the additional information flowing to the RMS system, it would better clarify your risk appetite.

For example, the detail on the  trade duration  would let the system know how much volatility you are exposed to. If your trade is intraday, you are only exposed to 1-day volatility. However, if your trade is for multiple days, you are exposed to multiple days volatility and are also exposed to the ‘overnight risk’.

Overnight risk is the risk of carrying the position overnight. For example, assume I’m holding a long BPCL (a major oil marketing company in India) futures position overnight. BPCL is highly sensitive to fluctuations in crude oil prices. While I’m holding the BPCL futures, assume overnight the crude oil market shoots up by 5%. This will obviously harm BPCL the next day as it becomes more expensive for BPCL to buy crude oil from the international markets. Hence under holding a BPCL position overnight, I will suffer a loss. Therefore an M2M cut. This is called ‘overnight risk’. Anyway, the point that I’m trying to make here is straightforward – from the RMS system’s perspective, the longer you wish to hold the trade, the higher is the risk you are exposed to.

Likewise, think about the  stoploss   for the trade . By  not  expressing your intended stoploss, you keep the RMS system in total darkness concerning your risk appetite. Do note; this is not mandatory information that you need to reveal. However, if you do, the RMS system gets more clarity on your trade. For example, assume I buy BPCL futures Rs.649/-, in the absence of specifying a stoploss, I’m virtually exposed to unlimited risk. However, if I specify my stoploss as, let us say, Rs.9/-, then when BPCL falls to Rs.640/- (649 – 9), I would book a loss and get out of the trade. Hence, there is complete clarity on the amount of risk I’m willing to take, which is valuable information from the RMS system’s perspective.

So both – the duration and the stoploss of the trade give more clarity about your risk appetite to the RMS system. So what does this mean to you as a trader?

Well, think about it – the more clarity you provide in terms of the risk you face, the higher clarity the RMS system develops. The more clarity it has, the lesser the margins required!

Very loosely put, think about this as an equivalent to shopping for television at a consumer electronics store. I know this may not be very apt, but I hope the following analogy gives you the right message.

If you go to a consumer electronics store and inquire about a television’s price, the seller will assume you are a regular customer, and he will quote the normal selling price. However, if you tell him that you are likely to purchase 50 televisions, he will instantly drop the price.

If you tell him you are carrying the cash with you and are willing to finish the transaction right away, he will drop both his jaws and the prices even lower. The point is – as and when the shop keeper gets more information about the transaction, the more attractive the price gets.




### 7.2 – Product types

So far, one thing is clear, the more information (in terms of risk) you are willing to convey to the RMS system, the lesser is the margin required. Needless to say, the lesser the margins required, the more you can do with your capital. So, how does a trader convey this information to the RMS system? Well, there are specific product types that are meant for this purpose. While placing an order (to either buy or sell), you can specify the product type. There are many Product types, and they vary from one another, mainly in terms of their functionality and the information they convey to the RMS system. While the core functionality of these product types is standard, every broker calls them with different names. Of course, I will talk about the product types used at Zerodha; if you are still trading with another broker, I will request you to speak to them and identify the nomenclature used.

NRML –  NRML is a standard product type. Use this when you intend to buy and hold the futures trade.

Remember, when you use NRML, the risk management system has no additional information on your trade length (as you can continue to hold the contract till expiry), nor does it have any information on the stoploss. You suffer losses (and therefore continue to pump in the required margins). Hence because of the lack of clarity, the broker’s RMS system charges you the full margins (i.e. SPAN and Exposure).

Use NRML when you intend to buy and hold the futures position over multiple days.  However, do remember you can use NRML product type for intraday as well.

Margin Intraday Square off (MIS) –  Zerodha’s MIS is a pure intraday product, meaning all trades placed as MIS product type will indicate that the trade will last only for the day. You cannot select MIS as an order type and expect the position to be carried forward to the next day. You have to mandatorily cut the position by 3:20 PM, failing which the RMS system will do the same.

Now because the product type is MIS, the RMS system clearly knows that it is an intraday trade, which is a notch better than NRML  in terms of information flow . Remember, when the trade is intraday, the trader is exposed to only 1 day’s volatility. Hence the margin requirement is lower compared to the NRML margins.

Cover order (CO) –  The concept of cover order is simple. First, similar to MIS, the cover order (CO) is also an intraday product. However, the CO conveys additional information in terms of stoploss. This means, at the time of placing a CO, you will have to specify the stoploss as well. Hence CO conveys both the vital information –

1. The length of the trade, which is intraday
1. The stoploss, which is the maximum loss you will bear in case the trade moves against you.

The snapshot below shows the buy CO form –

The area highlighted in black is where one is required to specify the stoploss. Of course, I will not get into the logistics bit, explaining how to place a CO from the trading terminal, as we have already done that through an  article  in  z-connect .

I want you to be aware of this – by placing a CO, you are not only conveying that your trade is intraday but also conveying the maximum loss you are willing to bear. Hence under this, the margins should drop considerably (even lower than MIS).

Bracket Order (BO)  – The bracket order is quite versatile. Consider the BO as an improvisation over the cover order. Needless to say, a BO is an intraday order, which means all BO orders have to be squared off within the day on or before 3:20 PM. While placing a BO, you will have to mention a few other things –

1. The stoploss – At what place you would like to get out of the trade-in case the trade moves against you
1. The Trailing stoploss – This is an optional feature where you can trail your stoploss. We have not spoken about “The trailing stoploss” so far. We will discuss the same towards the end of this chapter. But for now, remember the BO gives you an option to trail your stoploss; in fact, this is one of the most popular features of a BO.
1. Target – If the trade moves in your favour, the BO also requires you to specify the price at which you would like to book the profits

The BO sends your order to the exchange, where simultaneously you can specify the target and the stoploss. This is a huge relief to active traders as it helps them in many ways. Of course, for the logistics bit on how to place a BO, you can check out this  article  as it beautifully explains what needs to be done.

The snapshot below shows the BO buy order form; the green box highlights the SL placements –

If you think about the Bracket Order, the trader conveys the same set of information to the RMS system as that of the CO. Besides, through the BO, the trader is also conveying the target price. Now, what difference does the information on the target price make to the RMS system? Well, it literally makes no difference to it from the risk management perspective. Remember, the RMS is only worried about your risk and not your reward. Hence, for this reason, the margin charged for BO and CO is the same.

Let us now keep the above discussion in perspective and look into a few other options available on Zerodha’s margin calculator.




### 7.3 – Back to the Margin Calculator

Here is a quick recap – in the previous chapter, we introduced Zerodha’s margin calculator.  The objective of the margin calculator is straight forward. It helps the trader figure out how much margin is required for the contract he wishes to trade. In our quest to understand the same, we also understood concepts of expiry, rollover, and spread margins. With this chapter’s help, we are now clear about the information flow to the RMS system and its impact on the applicable margins. Let us keep these in perspective and look at the other two options highlighted in red in the margin calculator – “Equity Futures” and “BO&CO”. Here is a snapshot highlighting these features –

Equity Futures –  The equity futures section in the margin calculator is a ready reckoner, as it helps the trader understand the following –

1. The NRML margin required for a particular contract
1. The MIS margin required for a particular contract
1. The number of lots that a trader can buy for the given amount of money in his trading account

The Equity Futures section contains nearly 475 contracts (as of January 2015). To understand this better, let us take up a few tasks. We will solve these tasks by using the Equity Futures section of the margin calculator. And hopefully, in the process, you will understand how to use the section better.

Task 1  – A trader has Rs.80,000/- in his trading account. He wants to buy ACC Cements Limited Futures expiring 26 th  February 2015 and hold the same for 3 trading sessions. Find out the margin requirement for this contract. He also wants to trade Infosys January futures for intraday; what is the margin required? Does he have sufficient margins to initiate both the trades?

Solution  – Let us deal with the ACC futures first. Since the trader intends to hold the futures contract for 3 working days, we need to look for NRML margins. Do note; this task can be achieved by using the SPAN calculator as well. We discussed this in the previous chapter. However, the Equity Futures calculator has a few more advantages over a SPAN calculator.

Visit the Equity Futures section, and you can see all the contacts listed here; scroll till you find the desired contract. I have highlighted the same in green. Do notice; the calculator is also listing the contract’s expiry date, lot size, and the price at which the contract is trading.

The black vertical box highlights the NRML margin for each contract.

From the table, it is clear that the ACC Feb 2015 requires a margin of Rs.48,686/-.

To determine the margin requirement for Infosys, I need to scroll down till I spot Infosys January contracts or type “Infy” in the search box provided.

As we can see, Infy’s NRML margin is Rs.67,698/-(highlighted in the black arrow), and MIS margin is Rs.27,079/-(highlighted in the red arrow). Do note the MIS margin amount is drastically lower compared to the NRML margin,

Clearly, since the trade is for intraday, the trader can choose MIS product type and benefit from a lower margin requirement, which is Rs.27,079/-. Do note; the trader can select NRML product type even for intraday; there is no harm doing so. But when one does this, the NRML margin amount gets blocked. If one is clear in his mind about the intraday trade, then it makes sense to opt for MIS and efficiently use the capital available.

Anyway, the trader’s total margin requirement would be –

1. 48,686/- towards the ACC contract (NRML margin as the trader wishes to hold the position for 3 days)
1. 27,079/- towards the Infosys contract (MIS margins as it is a pure intraday product).
1. Total margin of Rs.75,765/- (48,686 + 27079)

Clearly, since the trader has Rs.80,000/- in his account, he can initiate both the trades.

Task 2 –  A trader has Rs.120,000/- in his trading account. How many lots of Wipro January Futures can he buy on an intraday basis and a multiple-day base?

Solution  – Search for Wipro in the search box provided. Next to the MIS margin column, there is an option to click on “Calculate” (highlighted in green arrow). Click on the same.

After you click on it, a form sort of window opens up; you need to enter –

1. The amount of cash in your trading account (by default, this is set to Rs.100,000/- you can edit the same to meet your requirement)
1. The price at which the contract is trading (in fact, this is pre-populated)

Have a look at the screenshot below –

The calculator suggests that I can trade up to 3 lots of Wipro futures under the NRML product type, considering NRML margin is Rs.36,806/- per lot. Under the MIS product type, I can trade up to 8 lots, considering the margin requirement is just Rs.14,722/- per lot.

And with that, we know all the Equity Futures section of the margin calculator’s functionalities, as easy as that. We now move over to the BO&CO calculator.




### 7.4 – BO&CO Margin Calculator

Both bracket order and cover order have similar margin requirements for reasons we discussed earlier. Using the BO&CO calculator is quite simple; it is quite similar to the SPAN calculator. In the following snapshot, I’m trying to calculate the margin requirement for Biocon Futures expiring in February 2015. Notice, I have selected everything that I need to, except for the stoploss.

Without selecting the stoploss, I proceed and press the ‘calculate’ button. When I do so, the calculator calculates the default stoploss that one can choose and the margin required. Now once I mention the stop loss, the calculator calculates the amount as shown below.

As per the BO&CO calculator, the stoploss one can choose Rs.403. Of course, you can vary the stoploss to any point, and the margins will change accordingly.  Anyway, the margin required is Rs.9,062/-, which is remarkably lower compared to NRML margin of Rs.26,135/- and MIS margin of Rs.11,545.




### 7.5 – The trailing stoploss

Before we conclude this chapter, let us briefly discuss the ‘trailing stoploss’. The concept of trailing stoploss finds its application in bracket orders and, in general, plays a crucial role while trading. Hence I guess it is important to know how to trail your stoploss. Consider this situation (in fact, most of us would have been in this situation) – you buy a stock at Rs.250, with an expectation that the stock price will hit Rs.270 sooner or later. You keep a stoploss at Rs.240 (just in case the trade goes against you) and hope for the best.

Things move as expected; the stock rallies all the way from Rs.250 to Rs.265 (just a few Rupees away from your target of Rs.270), however thanks to market volatility, it starts to retrace back…all the way to hit your stoploss at Rs.240. So, in essence, you saw profits coming in for a brief while but were eventually forced to book a loss. How do you deal with such a situation? More often than not, we are always put in such a spot where we are right about the overall direction but get ‘stopped out’ due to market volatility.

Well, thanks to the technique of ‘trailing your stop loss, you can prevent yourself from being in this situation. In fact, at times, trailing stoploss gives you a chance of making a better profit than you originally thought about.

Trailing stoploss is a simple concept. All one needs to do is adjust the stoploss based on the movement in the stock. Let me illustrate this with an example. Here is a typical trade setup –


Trade type | Long
--- | ---
Script | Infosys
Instrument | Futures
Futures Price | Rs.2175/-
Target | Rs.2220/-
Stoploss | Rs.2150/-
Risk | Rs.25 (2175 – 2150)
Reward | Rs.45 (2220 – 2175)


Clearly, the idea is to go long at Rs.2175 and keep a stoploss at Rs.2150. The idea is to adjust the stoploss as and when the price moves in the trade direction. To be precise, for every 15 points of the price movement in the trade direction, the SL can be adjusted accordingly. The SL can be adjusted to any level with an idea of locking in the profits. When you adjust the SL intending to lock the profits, it is called “Trailing Stop Loss”. I was hoping you could note that I have randomly opted for a 15 point move in this example, but in reality, it can be any price move. Please look at the following table; as and when the price moves 15 points in the trades favour, I trail my SL and thereby lock in a certain amount of profit.

Please note that the original price target was Rs.2220, but thanks to the trailing SL technique, I can ride the momentum and close in on a higher profit.

1. The more information one conveys to the RMS system in terms of trade duration and stoploss; the lesser is the margin requirement.
1. Use NRML product type when you want to initiate a trade and carry it overnight.
1. NRML margins are the highest (SPAN + Exposure)
1. MIS is a pure intraday trade. Hence the MIS margin is lesser than the NRML margin.
1. In an MIS trade, only time information is conveyed (intraday) but not the information about the stoploss
1. A cover order (CO) is also an intraday product; besides, in a CO, one has to specify the stoploss
1. A CO conveys both the time and the SL information. Hence margins are lesser than MIS.
1. The margins for a Bracket Order (BO) is similar to a CO.
1. In a BO product type, one can specify both the SL and target price at one go. Besides, one can also trail the stop loss.
1. A trailing SL technique requires one to adjust the SL and when the script moves in favour of the trade.
1. A trailing SL is a great way to ride the momentum in a script.
1. There are no fixed trailing rules; one can choose the trailing SL based on the market situation.



## 6.Margin_Calculator_(Part_1)

[Read more](https://zerodha.com/varsity/chapter/margin-calculator-part-1/)



### 6.1 – The Margin Calculator

In continuation of our discussion on margins in the previous chapter, we will now discuss the margin calculator. Over the next two chapters, we will discuss the margin calculator and learn a few associated topics related to margins.

Do recollect, in the previous chapter, we learnt about the various types of margins required to initiate a futures trade. Margins vary from one future contract to another as the margins depend on the volatility of the underlying. We will talk about volatility in the next module, but for now, remember that the volatility changes from one underlying to another; hence the margins vary from one underlying to another. So how do we know what is the margin requirement of a particular contract? Well, if you are trading with Zerodha, chances are you would have come across the ‘Margin Calculator’.

Zerodha’s margin calculator is one of our popular offerings, and rightly so. It is a simple to use tool that has a very sophisticated engine in the background.  In this chapter, I will introduce you to the margin calculator and help you understand the margin requirement for the contract you choose. We will revisit this topic on the margin calculator when we take up the chapter on Options in the next module; at that point, we will understand Zerodha’s margin calculator’s complete versatility.

Let us take up a case where one decides to buy the futures contract of IDEA Cellular Limited, expiring on 29 th  January 2015. Now to initiate this trade, one needs to deposit the initial margin amount. We also know that the Initial Margin (IM) = SPAN Margin + Exposure Margin. To find out the IM requirement, all you need to do is this –

Step 1  – The link to the Margin Calculator is  https://zerodha.com/margin-calculator/SPAN/ . As you can see from the image below, many different options are available (I have highlighted the same in black). However, our focus, for now, will be on the first two options called ‘SPAN’ and ‘Equity Futures”. In fact, you will land on the SPAN Margin Calculator subpage by default, highlighted in red.

Step 2  – The SPAN Margin Calculator has two main sections within it; let us inspect the same –

The red section has 3 drops down menu options. The ‘Exchange’ dropdown option basically requires you to choose the exchange you wish to operate. Select –

1. NFO if you wish to trade Futures on NSE,
1. MCX if you wish to trade commodity futures on MCX
1. CDS if you wish to trade currency derivatives on NSE

The next drop down on your right is the ‘Product’; choose Futures if you wish to trade a futures contract, or if you wish to trade options, select Options. The third drop-down menu lists symbols where all the futures and options contracts are made available. From this drop-down menu, choose the contract you wish to trade. Since we are interested in IDEA Cellular Limited expiring on 29 th  Jan, I have selected the same; please see the image below –

Step 4  – Once you select the futures contract, the Net Quantity automatically gets pre-populated to 1 lot. If you wish to trade more than one lot, you need to enter the new quantity manually. Notice in the image below, as soon as I select the IDEA futures contract, the net quality has changed to the respective lot size, 2000. If I wish to trade, say 3 lots, I have to type in 6000 (2000 * 3). Once this is done, click on the radio button, either a buy or sell (depending on what you wish to do) and finally click on the blue “Add” button

Once you instruct the SPAN calculator to add the margins, it will do the same, and it will give you the split up between the SPAN, Exposure, and the total initial margin. This is as shown below, highlighted in the red box –

The SPAN calculator is suggesting the following –

SPAN Margin = Rs.22,160/-

Exposure Margin = Rs.14,730/-

Initial Margin (SPAN + Exp) = Rs.36,890/-

With this, you know how much money is required to initiate the futures trade on IDEA Cellular; it is as simple as that! The next interesting section within the margin calculator is the “Equity Futures”. We will discuss the same in the next chapter. However, before we understand this, let us quickly understand 3 more topics, namely the Expiry, Spreads, and Intraday order types. Once we understand these topics, we will be placed better to understand the “Equity Futures” on the margin calculator.




### 6.2 – Expiry

In the earlier chapters, we briefly figured out what the ‘Expiry’ of a futures contract means. Expiry specifies the last date up to which the contract lasts, beyond which it will cease to exist. Consider this; if I buy IDEA Cellular Limited futures contract at 149/- expiring on 29 th  January 2015, with an expectation that it will hit 155, it simply means that this move to 155 has to pan out by 29 th  January 2015. Obviously, if the price of IDEA is below 149 before the expiry, then I have to book a loss. Even if the price of IDEA futures hits 155 (or in fact any price above 149) on 30 th  January 2015 (1 day after the expiry), it is of no use to me as the contract has already expired. In simple words, when I buy a futures contract, it has to move in my favour on or before the expiry day, else there is no point.

Does it really have to be so rigid? Is there any flexibility in terms of going beyond the stated expiry date? Let me illustrate what I mean –

I know that the Central Government budget is expected sometime around the last week of February 2015, which is a little more than a month away (considering today is 19 th  Jan 2015). I expect a good budget this time around, and I’m hopeful that the manufacturing sector will significantly benefit from the budget in the backdrop of the ‘Make in India’ campaign. Given this, I would like to bet that Bharat Forge, a manufacturing major, will significantly benefit from the upcoming budget. To be precise, I expect Bharat Forge to rally from now, all the way till the budget (pre-budget rally). Therefore to exploit my directional perspective on Bharat Forge, I would like to buy its futures today. Have a look at the snapshot below –

Bharat Forge  January 2015 contract is trading at Rs.1022/-, but here is a situation – my view is that Bharat Forge will rally from now, all the way till the last week of Feb 2015. But If I buy the futures contract, as shown above, it expires on 29 th  Jan 2015, leaving me stranded halfway through.

Clearly, since my directional view goes beyond the January expiry period, I need not be bound to buy the January expiry contract. In fact, for reasons similar to this, NSE allows you to select a contract that suits the expiry requirement.

At any given point, NSE allows us to buy a futures contract with 3 different expiries. For example, we are in January; hence we have 3 contracts of Bharat Forge with different expiry –

1. 29 th  January 2015 – This is called the  near month  contract or the  current month  contract
1. 26 th  February 2015 – This is called the  mid-month  contract
1. 26 th  March 2015 – This is called the  far month  contract

Have a look at the image below –

As you can see, from the expiry drop-down menu, I can choose any contract between the current month, mid-month, or far month based on my specific requirement. Needless to say, I would choose the mid-month contract expiring on 26 th  Feb 2015 in this particular case (as shown below) –

One thing that stands out clearly is the change in futures price. The contract expires on 26 th  Feb 2015 is trading at Rs.1,032/- while at the same time the contract expiring on 29 th  Jan is trading at Rs.1,022.8/-. Which means the mid-month contract is more expensive compared to the current month contract. This is always the case; the larger the time to expiry, the higher is the price. In fact, as I write this, Bharat Forge Limited’s March contract expiring on 29 th  March 2015 is trading at Rs.1,037.4/-.

For now, remember this – The current month futures price should be less than mid-month futures price, which should be less than far month futures price. There is a mathematical reason for this; the same will be discussed when we take up the futures pricing formula.

Also, here is another important concept you need to remember – As I had mentioned earlier, at any given point, the NSE ensures there are 3 future contracts (current, mid, and far month) available to trade. For now, we know, Bharat Forge contract is expiring on 29 th  January 2015. This means the January contract can be traded till 3:30 PM on 29 th  January 2015, after which it will cease to exist. Does that mean from 29 th  January 2015 onwards, the January contract goes out of the system leaving behind just the February and March contract?

Not really; till 3:30 PM on January 29 th  2015, the January contract is available, after which it will expire. On 9:15 AM 30 th  January 2015, NSE will introduce April 2015 contract. So on 30 th  January, we will have three contracts –

1. The February contract would now graduate as the current month contract from the mid-month contract until the previous day.
1. The March contract would now be considered the mid-month contract (graduated from being the far month the previous day to a mid-month now)
1. The April contract, which is newly introduced, becomes the far month contract.

Likewise, when the February contract expires, NSE will introduce the May contract. Hence the market will have March, April, and May contracts to trade. So on and so forth.

Anyway, continuing with Bharat Forge Limited futures contract example, because I have a slightly longer-term view, I can buy the futures contract expiring on 26 th  February 2015 and hold the February contract till I deem appropriate. However, there is another alternative, as well. Instead of buying the February contract, I can buy the January contract, hold on to it until around expiry and very close to expiry. I can square off the January contract and buy the February contract. This is called a ‘ rollover ’.

If you watch business news regularly, the TV anchor usually talks about the ‘rollover data’ around the expiry time. Well, don’t get too confused about this; in fact, it is quite straight forward. They are trying to convey a % measure of how many traders have ‘rolled over’ (or carried over) their existing positions from the current month to the mid-month. If many traders are rolling over their existing long positions to the next month, it is considered bullish; likewise, if many traders are rolling over their existing short positions to the next month, it is considered bearish. This is as simple as that. Now is this a proven technique to draw any concrete inference about the markets? Not really; it is just a perception of the market.

So under what circumstances would one want to roll over rather than buy a long-dated futures contract? One of the main reasons for this is the ease of buying and selling, aka ‘The liquidity. In simple words, at any given point, there is more number of traders who prefer to trade the current month contract as compared to the mid or far month contract. Obviously, when more traders are trading the same contract, the ease of buying and selling gets better.




### 6.3 – Sneak Peek into Spreads

We are now at an exciting stage. You may find some of the discussion below a bit confusing, but just read through this and try to grasp as much as you can. At the right time in future, we will talk more about this in detail.

Just think about these two contracts –

1. Bharat Forge Limited Futures, expiring on 29 th  January 2015
1. Bharat Forge Limited Futures, expiring on 26 th  February 2015

These are two different contracts for all practical purposes, priced slightly differently; both derive its value from the same underlying, i.e. Bharat Forge Limited, hence they behave the same. If Bharat Forge stock price in the spot market goes up, then both January futures and February futures price would go up. Likewise, if Bharat Forge stock price in the spot market goes down, then both January futures and February futures price would go down.

At times there are opportunities created whereby simultaneously buying the current month contract and selling the mid-month contract or vice versa, one can make money. Opportunities of this type are called ‘Calendar Spreads’. How to identify such opportunities and setup trades is a different topic altogether. We will discuss this soon. But at this moment, I want to draw your attention to the margins aspect.

We know why margins are charged – mainly from the risk management perspective. What kind of risk would exist if we are buying the contract on the one hand and selling the same type of contract on the other? The risk is drastically reduced. Let me illustrate this with numbers –

Scenario 1 – Trader buys only Bharat Forge Limited’s January Futures.

Bharat Forge Spot Price = Rs.1021/- per share

Bharat Forge January contract Price= Rs.1023/- per share

Lot Size = 250

After buying, assume the spot price drops to Rs.1011/- (10 point fall)

Approximate futures price = Rs.1013/-

P&L =  (10 * 250)  = Rs.2500/- loss

Scenario 2 – Trader buys January and sells February Futures.

Bharat Forge Spot Price = Rs.1021/- per share

Long on Bharat Forge January contract at Rs.1023/- per share.

Short on Bharat Forge February contract at Rs.1033/- per share

Lot Size = 250

After setting up this trade, assume the spot price drops to 1011 (10 point fall)

Approximate price of January Futures = Rs.1013/-

Approximate price of February Futures = Rs.1023/-

P&L on January Contract =  (10*250)  = Rs.2500/- loss

P&L on February Contract = 10*250 = Rs.2500/- profit

Net P&L = – 2500 + 2500 = 0

Scenario 3 – Trader sells January and buys February Futures.

Bharat Forge Spot Price = Rs.1021/- per share

Short on Bharat Forge January contract at Rs.1023/- per share

Long on Bharat Forge February contract at Rs.1033/- per share.

Lot Size = 250

After setting up this trade, assume the spot price increases to 1031 (10 point increase)

Approximate price of January Futures = Rs.1033/-

Approximate price of February Futures = Rs.1043/-

P&L on January Contract =  (10*250)  = Rs.2500/- Loss

P&L on February Contract =(10*250)= Rs.2500 /- Profit

Net P&L = – 2500 + 2500 = 0

Clearly, the point that I’m trying to make here is that when you are long on one contract and short on another contract, the risk is virtually reduced to zero. However, it is not completely risk-free; one has to account for the liquidity, volatility, execution risk, etc. But by and large, the risk reduces drastically. So when risk reduces drastically, the margins should also reduce drastically.

In fact, this is what happens, have a look at the following snapshots –

This is the margin requirement (Rs.37,362/-) when we intend to buy January contracts of Bharat Forge.

This is the margin requirement (Rs.37,629/-) when we intend to sell February contracts of Bharat Forge.

And this is the margin requirement (Rs.7,213/-) when we intend to buy January contract and sell February contract simultaneously.

As you can see, individually, the January and February contracts require Rs.37,362/- and Rs.37,629/- respectively. Hence a total of Rs.74,991/-. However, when a futures contract is bought and sold simultaneously, the risk reduces drastically, hence the margin requirement. As we can see from the image above, the combined position requires a margin of Rs.7,213/- only. Another way to look at it would be from a total of Rs.74,991/-, Rs.67,658/- i.e. Margin Benefit (highlighted in black) is reduced, and the benefit is passed on to the client. But do remember this – A simultaneous long and short position is built only when opportunities arise. These opportunities are called the ‘Calendar Spread’. If the calendar spread opportunity is not there, then there is no point initiating such trades.

1. Zerodha’s margin calculator is a simple tool that lets you calculate the margin required for a futures contract.
1. The margin calculator has many versatile features inbuilt.
1. The margin calculator gives the split up between the SPAN and Exposure margin.
1. At any given point, NSE ensures there are three contracts of the same underlying, which expire on 3 different (but consecutive) months.
1. A trader can choose the contract of his choice based on the expiry date.
1. The contract belonging to the present month is called ‘Current Month Contract’, the next month contract is called ‘Mid Month’, and the 3 rd  one is called “Far Month Contract.’
1. On every expiry, the current month contract expires and a new far month contract is introduced. In the process, the mid-month contract would graduate to the current month contract.
1. A calendar spread is a trading technique which involves buying a certain month contract and selling another month contract simultaneously for the same underlying.
1. When a calendar spread is initiated, the margins required are lower since the risk is drastically reduced.



## 5.Margin_&_M2M

[Read more](https://zerodha.com/varsity/chapter/margin-m2m/)



### 5.1 – Things you should know by now

Margins clearly play a very crucial role in futures trading as it enables one to leverage. In fact, margins are the one that gives a ‘Futures Agreement’ the required financial twist (as compared to the spot market transaction). For this reason, understanding the margins and many facets of margins is extremely important.

However, before we proceed any further, let us list down a list of things you should know by now. These are concepts we had learnt over the last 4 chapters; reiterating these crucial takeaways will help us consolidate all the learning. If you are not clear about any of the following points, you will need to revisit the previous chapters and refresh your understanding.

1. Future is an improvisation over the Forwards.
1. The futures agreement inherits the transactional structure of the forwards market.
1. A futures agreement enables you to financially benefit if you have an accurate directional view of the asset price.
1. The futures agreement derives its value from its corresponding underlying in the spot market.
 
 For example, TCS Futures derives its value from the underlying in the TCS Spot market.
1. For example, TCS Futures derives its value from the underlying in the TCS Spot market.
1. The Futures price mimics the underlying price in the spot market.
 
 The futures price and the spot price of an asset are different, attributable to the futures pricing formula. We will discuss this point at a later stage in the module.
1. The futures price and the spot price of an asset are different, attributable to the futures pricing formula. We will discuss this point at a later stage in the module.
1. The futures contract is a standardized contract wherein the agreement variables are predetermined – lot size and expiry date.
 
 The lot size is the minimum quantity specified in the futures contract. 
 Contract value = Futures Price * Lot Size 
 Expiry is the last date up to which one can hold the futures agreement.
1. The lot size is the minimum quantity specified in the futures contract.
1. Contract value = Futures Price * Lot Size
1. Expiry is the last date up to which one can hold the futures agreement.
1. To enter into a futures agreement, one has to deposit a margin amount calculated as a certain % of the contract value.
 
 Margins allow us to deposit a small amount of money and take exposure to a large value transaction, thereby leveraging the transaction.
1. Margins allow us to deposit a small amount of money and take exposure to a large value transaction, thereby leveraging the transaction.
1. When we transact in a futures contract, we digitally sign the agreement with the counterparty; this obligates us to honour the contract upon expiry.
1. The futures agreement is tradable. Which means you need not hold on to the agreement till the expiry
 
 You can hold the futures contract until you have a conviction on the asset’s directional view; once your view changes, you can get out of the futures agreement. 
 You can even hold the futures agreement for a few minutes and financially benefit if the price moves in your .favour 
 An example of the above point would be to buy Infosys Futures at 9:15 AM for 1951 and sell it by 9:17 AM in 1953. Since Infosys lot size is 250, one would stand to make Rs.500/- (2 * 250) within a matter of 2 minutes 
 You can even choose to hold it overnight for a few days or hold on to it till expiry.
1. You can hold the futures contract until you have a conviction on the asset’s directional view; once your view changes, you can get out of the futures agreement.
1. You can even hold the futures agreement for a few minutes and financially benefit if the price moves in your .favour
1. An example of the above point would be to buy Infosys Futures at 9:15 AM for 1951 and sell it by 9:17 AM in 1953. Since Infosys lot size is 250, one would stand to make Rs.500/- (2 * 250) within a matter of 2 minutes
1. You can even choose to hold it overnight for a few days or hold on to it till expiry.
1. Equity futures contracts are cash-settled
1. Under leverage, a small change in the underlying results in a massive impact on the P&L
1. The profits made by the buyer is equivalent to the loss made by the seller and vice versa.
1. Futures Instrument allows one to transfer money from one pocket to another. Hence it is called a “Zero Sum Game.”
1. The higher the leverage, the higher the risk.
1. The payoff structure of a futures instrument is linear.
1. The futures market is regulated by the Securities and Exchange Board of India (SEBI). Thanks to the watchful eye of SEBI, there has been no incidence of counterparty default in the futures market.

If you can clearly understand the points mentioned above, then I’d assume you are on the right track so far. If you have any questions on any of the above-mentioned points, you need to revisit the previous four chapters to get the concept right.

Anyway, assuming you are clear so far, let us now focus more on the concept of margins and mark to market.




### 5.2 – Why are Margins charged?

Let us now rewind to the example we quoted in the forwards market (chapter 1). In the example quoted, 3 months from now, ABC Jewelers agrees to buy 15Kgs of Gold at Rs.2450/- per gram from XYZ Gold Dealers.

We can now clearly appreciate that any gold price variation will either affect ABC or XYZ negatively. If the price of gold increases, then XYZ suffers a loss, and ABC makes a profit. Likewise, if the price of gold decreases, ABC suffers a loss, and XYZ makes a profit. Also, we know that a forwards agreement works on a gentleman’s word. Consider a situation where gold price has drastically increased, placing XYZ Gold Dealers in a difficult spot. Clearly, XYZ can say they cannot make the necessary payment and thereby default on the deal. Obviously, what follows will be a long and gruelling legal chase, but outside our focus area. The point to be noted here is that in a forwards agreement, the scope and the incentive to default is very high.

Since the futures market is an improvisation over the forwards market, the default angle is carefully and intelligently dealt with. This is where the margins play a role.

In the forwards market, there is no regulator. The agreement takes place between two parties with literally no intermediary watching over their transaction. However, in the futures market, all trades are routed through an exchange. The exchange in return takes the onus of guaranteeing the settlement of all the trades. When I say ‘onus of guaranteeing’, it literally means the exchange makes sure you get your money if you are entitled. This also means they ensure they collect the money from the party who is supposed to pay up.

So how does the exchange make sure this works seamlessly? Well, they make this happen using –

1. Collecting the margins
1. Marking the daily profits or losses to market (also called M2M)

We briefly looked into the concept of Margin in the previous chapter. The concept of Margin and M2M is something that you need to know in parallel to appreciate futures trading dynamics fully. However, since it is difficult to explain both the concepts simultaneously, I would like to pause a bit on margins and proceed to M2M. We will understand M2M completely and come back again to margins. We will then relook at margins keeping M2M in perspective. But before we move to M2M, I would like you to keep the following points in the back of your mind –

1. At the time of initiating the futures position, margins are blocked in your trading account.
1. The margins that get blocked is also called the “Initial Margin.”
1. The initial margin is made up of two components, i.e. SPAN margin and the Exposure Margin.
1. Initial Margin = SPAN Margin + Exposure Margin
1. Initial Margin will be blocked in your trading account for how many days you choose to hold the futures trade.
 
 The value of the initial margin varies daily as it depends on the futures price. 
 Remember, Initial Margin = % of Contract Value 
 Contract Value = Futures Price * Lot Size 
 The lot size is fixed, but the futures price varies every day. This means the margins also vary every day.
1. The value of the initial margin varies daily as it depends on the futures price.
1. Remember, Initial Margin = % of Contract Value
1. Contract Value = Futures Price * Lot Size
1. The lot size is fixed, but the futures price varies every day. This means the margins also vary every day.

So, for now, remember just these points. We will go ahead to understand M2M, and then we will come back to margins to complete this chapter.




### 5.3 – Mark to Market (M2M)

As we know, the futures price fluctuates daily, under which you either stand to make a profit or a loss. Marking to market or mark to market (M2M) is a simple accounting procedure which involves adjusting the profit or loss you have made for the day and entitling you the same. As long as you hold the futures contract, M2M is applicable. Let us take up a simple example to understand this.

Assume on 1 st  Dec 2014 at around 11:30 AM; you decide to buy Hindalco Futures at Rs.165/-. The Lot size is 2000. 4 days later, on 4 th  Dec 2014, you decide to square off the position at 2:15 PM at Rs.170.10/-. Clearly, as the calculation below shows, this is a profitable trade –

Buy Price = Rs.165

Sell Price = Rs.170.1

Profit per share = (170.1 – 165) = Rs.5.1/-

Total Profit = 2000 * 5.1

= Rs.10,200/-

However, the trade was held for 4 working days. Each day the futures contract is held, the profits or loss is marked to market. While marking to market, the previous day closing price is taken as the reference rate to calculate the profit or losses.


Day | Closing Price
--- | ---
1st Dec 2014 | 168.3
2nd Dec 2014 | 172.4
3rd Dec 2014 | 171.6
4th Dec 2014 | 169.9


The table above shows the futures price movement over the 4 days the contract was held. Let us look at what happens on a day to day basis to understand how M2M works –

On  Day 1  at 11:30 AM, the futures contract was purchased at Rs.165/-, clearly after the contract was purchased, the price has gone up further to close at Rs.168.3/-. Hence profit for the day is 168.3 minus 165 = Rs.3.3/- per share. Since the lot size is 2000, the net profit for the day is 3.3*2000 = Rs.6600/-.

Hence the exchange ensures (via the broker) that Rs.6600/- is credited to your trading account at the end of the day.

1. But where is this money coming from?
 
 Obviously, it is coming from the counterparty. Which means the exchange is also ensuring that the counterparty is paying up Rs.6600/- towards his loss
1. Obviously, it is coming from the counterparty. Which means the exchange is also ensuring that the counterparty is paying up Rs.6600/- towards his loss
1. But how does the exchange ensure they get this money from the party who is supposed to pay up?
 
 Obviously, through the margins that are deposited at the time of initiating the trade. But more on this later.
1. Obviously, through the margins that are deposited at the time of initiating the trade. But more on this later.

Now here is another important aspect you need to note – from an accounting perspective, the futures buy price is no longer treated as Rs.165 but instead, it will be considered as Rs.168.3/- (closing price of the day). Why is that so, you may ask? The profit earned for the day has been given to you already using crediting the trading account. So you are fair and square for the day, and the next day is considered a fresh start. Hence the buy price is now considered at Rs. 168.3, which is the closing price of the day.

On  day 2 , the futures closed at Rs.172.4/-, clearly another day of profit. The day’s profit would be Rs.172.4/ – minus Rs.168.3/- i.e. Rs.4.1/- per share or Rs.8,200/- net profit. The profits that you are entitled to receive is credited to your trading account, and the buy price is reset to the day’s closing price, i.e. 172.4/-.

On  day 3 , the futures closed at Rs.171.6/- which means concerning the previous day’s close price, there is a loss to the extent of Rs.1600/- (172.4-171.6) * 2000. The loss amount will be automatically debited from your trading account. Also, the buy price is now reset to Rs.171.6/-.

On  day 4 , the trader did not continue to hold the position through the day but rather decided to square off the position mid-day 2:15 PM at Rs.170.10/-. Hence concerning the previous day’s close, he again made a loss. That would be a loss of Rs.171.6/- minus Rs.170.1/- = Rs.1.5/- per share and Rs.3000/- (1.5 * 2000) net loss. Needless to say, after the square off, it does not matter where the futures price goes as the trader has squared off his position. Also, Rs.3000/- is debited from the trading account by the end of the day.

Now, let us just tabulate the value of the daily mark to market and see how much money has come in and how much money has gone out –


Day | Ref Price for M2M | Closing Price | Daily M2M
--- | --- | --- | ---
1st Dec 2014 | 165 | 168.3 | + Rs.6,600/-
2nd Dec 2014 | 168.3 | 172.4 | +Rs.8,200/-
3rd Dec 2014 | 172.4 | 171.6 | -Rs.1,600/-
4th Dec 2014 | 171.6 & 170.1 | 169.9 | – Rs.3,000/-
Total | +Rs.10,200/-


Well, if you summed up all the M2M cash flow, you will end up the same amount that we originally calculated, which is –

Buy Price = Rs.165/-

Sell Price = Rs.170.1/-

Profit per share = (170.1 – 165) = Rs.5.1/-

Total Profit = 2000 * 5.1

= Rs.10,200/-

So, the mark to market is just a daily accounting adjustment where –

1. Money is either credited or debited (also called daily obligation)  based on how the futures price behaves.
1. The previous day close price is taken into consideration to calculate the present-day M2M.

Why do you think M2M is required in the first place? Think about it – M2M is a daily cash adjustment by which the exchange drastically reduces the counterparty default risk. As long a trader holds the contract, the exchange by the M2M ensures both the parties are fair and square daily.

Keeping this basic concept of M2M, let us now move back to relook at margins and see how the trade evolves during its life.




### 5.4 – Margins, the bigger perspective

Let us now relook at margins keeping M2M in perspective. As mentioned earlier, the margins required to initiate a futures trade are called “Initial Margin (IM)”. Initial margin is a certain % of the contract value. We also know –

Initial Margin (IM) = SPAN Margin + Exposure Margin

Every time a trader initiates a futures trade (for that matter, any trade), few financial intermediaries work in the background, ensuring that the trade carries out smoothly. The two prominent financial intermediaries are the broker and the exchange.

If the client defaults on an obligation, it obviously has a financial repercussion on both the broker and the exchange. Hence if both the financial intermediaries have to be insulated against a possible client default, they need to be covered adequately using a margin deposit.

In fact, this is exactly how it works – ‘SPAN Margin’ is the minimum requisite margins blocked as per the exchange’s mandate, and ‘Exposure Margin’ is the margin blocked over and above the SPAN to cushion for any MTM losses. Do note both SPAN and Exposure margin are specified by the exchange. So at the time of initiating a futures trade, the client has to adhere to the initial margin requirement. The exchange blocks the entire initial margin (SPAN + Exposure).

SPAN Margin is more important between the two margins as not having this in your account means a penalty from the exchange. The SPAN margin requirement must be strictly  maintained  as long as the trader wishes to carry his position overnight/next day. For this reason, SPAN margin is also sometimes referred to as the “ Maintenance Margin ”.

So how does the exchange decide what should be the SPAN margin requirement for a particular futures contract? Well, they use an advance algorithm to calculate the SPAN margins daily. One of the key inputs that go into this algorithm is the ‘Volatility’ of the stock. Volatility is a very crucial concept; we will discuss it at length in the next module. For now, just remember this – if volatility is expected to go up, the SPAN margin requirement also goes up.

Exposure margin, which is an additional margin, varies between 4% -5% of the contract value.

Now, let us look at a futures trade, keeping both the margin and the M2M perspective. The trade details are as shown below –


Particular | Details
--- | ---
Symbol | HDFC Bank Limited
Trade Type | Long
By Date | 10th Dec 2014
Buy Price | Rs.938.7/- per share
Sell Date | 19th Dec
Sell Price | Rs.955/- per share
Lot Size | 250
Contract Value | 250*938.7 = Rs.234,675/-
SPAN Margin | 7.5% of CV = Rs.17,600/-
Exp Margin | 5.0% of CV = Rs.11,733/-
IM (SPAN + Exposure) | 17600 + 11733 = Rs.29,334/-
P&L per share | Profit of Rs.16.3/- per share (955 – 938.7)
Net Profit | 250 * 16.3 = Rs.4,075/-


If you are trading with Zerodha, you may know that we provide a Margin calculator that explicitly states the SPAN and Exposure margin requirements. Of course, at a later stage, we will discuss the utility of this handy tool in detail. But for now, you could check out this  margin calculator .

Keeping the above trade details in perspective, let us look at how the margins and M2M plays a role simultaneously during the life of the trade. The table below shows how the dynamics change on a day to day basis –

I hope you don’t get intimidated looking at the table above; in fact, it is quite easy to understand. Let us go through it sequentially, day by day.

10 th  Dec 2014

Sometime during the day, HDFC Bank futures contract was purchased at Rs.938.7/-. The lot size is 250. Hence the contract value is Rs.234,675/-. As we can see from the box on the right, SPAN is 7.5%, and Exposure is 5% of CV, respectively. Hence 12.5% of CV is blocked as margins (SPAN + Exposure); this works up to a total margin of Rs.29,334/-. The initial margin is also considered as the  initial cash blocked  by the broker.

Going ahead, HDFC closes at 940 for the day. At 940, the CV is now Rs.235,000/- and therefore, the total margin requirement is Rs.29,375/- which is a marginal increase of Rs.41/- compared to the margin required at the time of the trade initiation. The client is not required to infuse this money into his account as he is sufficiently covered with an M2M profit of Rs.325/- which will be credited to his account.

The total cash balance in the trading account = Cash Balance + M2M

= Rs.29,334 + Rs.325

= Rs.29,659/-

Clearly, the cash balance is more than the total margin requirement of Rs.29,375/- hence there is no problem. Further, the reference rate for the next day’s M2M is now set to Rs.940/-.

11 th  Dec 2014

The next day, HDFC Bank drop by Rs.1/- to Rs.939/- per share, impacting the M2M by negative Rs.250/-. This money is taken out from the cash balance (and will be credited to the person making this money). Hence the new cash balance will be –

= 29659 – 250

= Rs.29,409/-

Also, the new margin requirement is calculated as Rs.29,344/-. Clearly, the cash balance is higher than the margin required; hence there is nothing to worry about. Also, the reference rate for the next day’s M2M is reset at Rs.939/-

12 th  Dec 2014

This is an interesting day. The futures price fell by Rs.9/- taking the price to Rs.930/- per share. At Rs.930/- the margin requirement also falls to Rs.29,063/-. However, because of an M2M loss of Rs.2250/- the cash balance drops to Rs.27,159/- (29409 – 2250), which is less than the total margin requirement. Since the cash balance is less than the total margin requirement, is the client required to pump in the additional money? Not really.

Remember, between the SPAN and Exposure margin; the most sacred one is the SPAN margin. Most brokers allow you to continue to hold your positions as long as you have the SPAN Margin (or maintenance margin). The moment the cash balance falls below the maintenance margin, they will call you asking you to pump in more money. In the absence of which, they will force close the positions themselves. This call that the broker makes requesting you to pump in the required margin money is also popularly called the “ Margin Call ”. If you are getting a margin call from your broker, it means your cash balance is dangerously low to continue the position.

Going back to the example, the cash balance of Rs.27,159/- is above the SPAN margin (Rs.17,438/-); hence there is no problem. The M2M loss is debited from the trading account, and the reference rate for the next day’s M2M is reset to Rs.930/-.

Well, I hope you have got a sense of how both margins and M2M come into play simultaneously.  I also hope you can appreciate how under the margins and M2M, the exchange can efficiently tackle a possible default threat. The margin + M2M combination is virtually a foolproof method to ensure defaults don’t occur.

Assuming you are getting a sense of the dynamics of margins and M2M calculation, I will now take the liberty to cut through the remaining days and proceed directly to the last day of trade.

19 th  Dec 2014

At 955, the trader decides to cash out and square off the trade. The reference rate for M2M is the previous day’s closing rate which is Rs.938. So the M2M profit would Rs.4250/- which gets added to the previous day cash balance of Rs.29,159/-. The final cash balance of Rs.33,409/- (Rs.29,159 + Rs.4250) will be released by the broker as soon as the trader squares off the trade.

So what about the overall P&L of the trade? Well, there are many ways to calculate this –

Method 1) – Sum up all the M2M’s

P&L = Sum of all M2M’s

= 325 – 250 – 2250 + 4750 – 4000 – 2000 + 3250 + 4250

= Rs.4,075/-

Method 2) – Cash Release

P&L = Final Cash balance (released by broker) – Cash Blocked Initially (initial margin)

= 33409 – 29334

= Rs.4,075/-

Method 3) – Contract Value

P&L = Final Contract Value – Initial Contract Value

= Rs.238,750 – Rs.234,675

=Rs.4,075/-

Method 4) – Futures Price

P&L = (Difference b/w the futures buy & sell price ) * Lot Size

Buy Price = 938.7, Sell Price = 955, Lot size = 250

= 16.3 * 250

= Rs. 4,075/-

As you can notice, either of which ways you calculate, you arrive at the same P&L value.




### 5.5 – An interesting case of ‘Margin Call.’

For a moment, let us assume the trade was not closed on 19 th  Dec, and in fact, carried forward to the next day, i.e.  20 th  Dec . Also, let us assume HDFC Bank drops heavily on 20 th  December – maybe an 8% drop, dragging the price to 880 all the way from 955. What do you think will happen? In fact, can you answer the following questions?

1. What is the M2M P&L?
1. What is the impact on cash balance?
1. What is the SPAN and Exposure margin required?
1. What action does the broker take?

I hope you can calculate and answer these questions yourself; if not, here are the answers for you –

1. The M2M loss would be Rs.18,750/- = (955 – 880)*250. The cash balance on 19 th  Dec was Rs. 33,409/- from which the M2M loss would be deducted, making the cash balance Rs.14,659/- (Rs.33,409 – Rs.18,750).
1. Since the price has dropped, the new contract value would be Rs.220,000/- (250*880)
 
 SPAN = 7.5% * 220000 = Rs.16,500/- 
 Exposure = Rs.11,000/- 
 Total Margin = Rs.27,500/-
1. SPAN = 7.5% * 220000 = Rs.16,500/-
1. Exposure = Rs.11,000/-
1. Total Margin = Rs.27,500/-
1. Clearly, since the cash balance (Rs.14,659/-) is less than SPAN Margin (Rs.16,500/-), the broker will give a Margin Call to the client, or in fact, some brokers will even cut the position in real-time as and when the cash balance drops below the SPAN requirement.

1. A margin payment is required (which will be blocked by your broker) as long as the futures trade is live.
1. The margin blocked by the broker at the time of initiating the futures trade is called the initial margin.
1. Both the buyer and the seller of the futures agreement will have to deposit the initial margin amount.
1. The margin amount collected acts as leverage, as it allows you to deposit a small amount of money and take exposure to a large value transaction.
1. M2M is a simple accounting adjustment; the process involves crediting or debiting the daily obligation money in your trading account based on how the futures price behaves.
1. The previous day closing price figure is taken to calculate the current day’s M2M.
1. SPAN Margin is the margin collected as per the exchanges instruction, and the Exposure Margin is collected as per the broker’s requirement
1. The SPAN and Exposure Margin are determined as per the norms of the exchange.
1. The SPAN Margin is popularly referred to as the Maintenance Margin.
1. If the margin account goes below the SPAN, the investor must deposit more cash into his account if he aspires to carry forward the future position.
1. The Margin Call is when the broker requests the trader to infuse the required margin money when the cash balance goes below the required level.



## 4.Leverage_&_Payoff

[Read more](https://zerodha.com/varsity/chapter/leverage-payoff/)



### 4.1 – A quick recap

With the Tata Consultancy Services (TCS) example in the previous chapter, we got a working knowledge of how Futures trading works. The futures trade example required us to go long on TCS futures as the expectation was that the TCS stock price would increase in due course. Further, we decided to square off the contract the very next day for a profit. However, if you recall, right at the beginning of the example, we posed a fundamental question; let me rephrase and repost the same for your ready reference.

A rational to go long on TCS was built – the thought was that TCS stock price had overreacted to the management’s statement. I expected the stock price to increase in due course of time. A directional view was established, and hence a futures trade was initiated. The question was – anyway, the expectation is that the stock price will go higher, why should one bother about buying futures and why not the stock in the spot market?

In fact, buying futures requires one to enter a digital agreement with the counterparty. Besides, a futures agreement is time-bound, meaning the directional view has to pan out within the specified time period. If it does not pan out within the specified time (as in the expiry), one has to suffer a loss. Contrast this (futures buying) with just buying stock and letting it reside in your DEMAT account. There is no obligation of an agreement or the pressure of time. So why does one really need futures? What makes it so attractive? Why not just buy the stock and stay oblivious to the stock price and the time?

The answers to all these questions lie in the financial leverage inherent in financial derivatives, including futures. As they say, Leverage is a true financial innovation; if used in the right context and spirit, leverage can create wealth. Without much ado, let us explore this angle of futures trading.




### 4.2 – Leverage in perspective

Leverage is something we use at some point or the other in our lives. We don’t think about it in the way it is supposed to be thought about. We miss seeing through the numbers and therefore never really appreciate the essence of leverage.

Here is a classic example of leverage – many of you may relate to this one.

A friend of mine is a real estate trader; he likes to buy apartments, sites, and buildings, hold them for a while, and then sell them for a later stage. He believes this is better than trading inequities, and I beg to differ – I could go on and on debating this, but maybe some other time.

Anyway, here is a summary of a recent real estate transaction he carried out. In November 2013, Prestige Builders (popular builders in Bangalore) identified land in South Bangalore. They announced a new project – A luxurious apartment complex with state of the art amenities. My friend jumped in and booked a 2 bedroom, hall, and kitchen apartment, expected to come up on the 9 th  floor for a sum of Rs.10,000,000/-. The project is expected to be completed by mid-2018. Since the apartment was just notified, and no work had started, the potential buyers were only required to pay 10% of the actual buy value. This is pretty much the norm when it comes to buying brand new apartments. The remaining 90% was scheduled to be paid as the construction progressed.

So back in Nov 2013, for an initial cash outlay of Rs.10,00,000/- (10% of 10,000,000/-), my friend was entitled to buy a property worth Rs.10,000,000/-. In fact, the property was so hot; all the 120 apartments were sold out like hot cakes just within 2 months of Prestige Builder announcing the brand new project.

Fast forward to Dec 2014, and my friend had a potential buyer for his apartment. Being a real estate trader, my friend jumped into the opportunity. A quick survey revealed that the area’s property value had appreciated by at least 25% (well, that’s how crazy real estate is in Bangalore). So my friend’s 9th-floor apartment was now valued at Rs.12,500,000/-. My friend and the potential buyer struck a deal and settled on the sale at Rs.12,500,000/-.

Here is a table summarizing the transaction –


Particulars | Details
--- | ---
Initial Value of Apartment | Rs. 10,000,000/-
Date of Purchase | November 2013
Initial Cash outlay @ 10% of the apartment value | Rs.10,00,000/-
Balance Payment to Builder | Rs.90,00,000/-
Appreciation in apartment value | 25%
Value of the apartment in Dec 2014 | Rs.12,500,000/-
New buyer agrees to pay the balance payment | Rs.90,00,000/- to the builder
My friend gets paid | 12,500,000 – 9000000 =
My friend’s profit on the transaction | Rs.35,00,000/- minus Rs.10,00,000/- =
Return on investment | 25,00,000 / 10,00,000 =


Clearly, few things stand out in this transaction.

1. My friend was able to participate in a  large transaction  by paying only 10% of the transaction value.
1. To enter into the transaction, my friend had to pay 10% of the actual value (call it the contract value)
1. The initial value he pays (10 lakhs) can be considered a token advance, or in terms of ‘Futures Agreement,’ it would be the initial margin deposit.
1. A small change in the asset value impacts the return massively.
1. This is quite obvious – a 25% increase in asset value resulted in a 250% return on investment.
1. A transaction of this type is called a “ Leveraged Transaction. ”

Do make sure you understand this example thoroughly because this is very similar to a futures trade, as all futures transactions are leveraged. Do keep this example in perspective as we will now move back to the TCS trade.




### 4.3 – The Leverage

While we looked at the futures trade’s overall structure in the previous chapter, let us now re-work the TCS example with some specific details. For the sake of simplicity, the trade details are as follows: we will assume the opportunity to buy TCS occurs on the 15 th  of Dec at Rs.2362/- per share. Further, we will assume the opportunity to square off this position occurs on 23 rd  Dec 2014 at Rs.2519/-. Also, we will assume there is no difference between the spot and futures price.


Particulars | Details
--- | ---
Underlying | TCS Limited
Directional View | Bullish
Action | Buy
Capital available for the trade | Rs.100,000/-
Trade Type | Short term
Remarks | The expectation is that the stock price will increase over the next few days
By Date | 15th Dec 2014
Approximate buy Price | Rs.2362/- per share
Sell Date | 23rd Dec 2014
Approximate Sell Price | Rs.2519/- per share


So with a bullish view on TCS stock price and Rs.100,000/ in hand, we have to decide between the two options at our disposal –  Option 1  – Buy TCS stock in the spot market or  Option 2  – Buy TCS futures from the Derivatives market. Let us evaluate each option to understand the respective dynamics.

Option 1  – Buy TCS Stock in the spot market

Buying TCS in the spot market requires us to check for the price at which the stock is trading and calculate the number of stocks we can afford to buy (with the capital at our disposal). After buying the stock in the spot market, we have to wait for at least two working days (T+2) to get credited to our DEMAT account. Once the stocks reside in the DEMAT account, we just have to wait for the right opportunity to sell them.

Few salient features of buying the stock in the spot market (delivery based buying) –

1. Once we buy the stock (for delivery to DEMAT), we have to wait for at least 2 working days before deciding to sell it. This means even if the very next day, if a good opportunity to sell comes up, we cannot really sell the stock.
1. We can buy the stock to the extent of the capital at our disposal. Meaning if our disposable cash is Rs.100,000/- we can only buy to the extent of Rs.100,000/- not beyond this.
1. There is no pressure of time – as long as one has the time and patience, one can wait for a really long time before deciding to sell

Specifically, with Rs.100,000/- at our disposal, on 15 th  Dec 2014, we can buy –

= 100,000 / 2362

~ 42 shares

Now, on 23 rd  Dec 2014, when TCS is trading at Rs.2519/- we can square off the position for a profit –

= 42 * 2519

= Rs.105,798/-

So Rs.100,000/- invested in TCS on 14 th  Dec 2014 has now turned into Rs.105,798/- on 23 rd  Dec 2014, generating Rs.5,798/- in profits. Interesting, let us check the return generated by this trade –

= [5798/100,000] * 100

= 5.79 %

A 5.79% return over 9 days is quite impressive. In fact, a 9-day return of 5.79% when annualized yields about 235%. This is phenomenal!

But how does this contrast with option 2?

Option 2  – Buy TCS Stock in the futures market

Recall in futures market variables are predetermined. For instance, the minimum number of shares (lot size) that needs to be bought in TCS is 125 or in multiples of 125. The lot size multiplied by the futures price gives us the ‘contract value’. We know the futures price is Rs.2362/- per share; hence the contract value is –

= 125 * 2362

= Rs.295,250/-

Does that mean to participate in the futures market, I need Rs.295,250/- in total cash? Not really; Rs. 295,250/- is the contract value; however, to participate in the futures market, one just needs to deposit a margin amount which is a certain % of the contract value. In the case of TCS futures, we need about 14% margin. At 14% margin (14% of Rs.295,250/-), Rs.41,335/- is all we need to enter into a futures agreement. At this stage, you may get the following questions in your mind –

1. What about the balance money? i.e Rs.253,915/- ( Rs.295,250/ minus Rs.41,335/-)
 
 Well, that money is never really paid out.
1. Well, that money is never really paid out.
1. What do I mean by ‘never really paid out’?
 
 We will understand this in greater clarity when we take up the chapter on “Settlement – mark 2 markets.”
1. We will understand this in greater clarity when we take up the chapter on “Settlement – mark 2 markets.”
1. Is 14% fixed for all stocks?
 
 No, it varies from stock to stock.
1. No, it varies from stock to stock.

So, keeping these few points in perspective, let us explore the futures trade further. The cash available in hand is Rs.100,000/-. However, the cash requirement in terms of margin amount is just Rs. Rs.41,335/-.

This means instead of 1 lot, maybe we can buy 2 lots of TCS futures. With 2 lots of TCS futures, the number of shares would be 250 (125 * 2) – at the cost of Rs.82,670/- as the margin requirement. After committing Rs.82,670/- as margin amount for 2 lots, we would still be left with Rs.17,330/- in cash. But we cannot really do anything with this money; hence it is best left untouched.

Now here is how the TCS futures equation stacks up –

Lot Size – 125

No of lots – 2

Futures Buy price – Rs. 2362/-

Futures Contract Value at the time of buying = Lot size *number of lots* Futures Buy Price

= 125 * 2 * Rs. 2362/-

= Rs. 590,500/-

Margin Amount – Rs.82,670/-

Futures Sell price = Rs.2519/-

Futures Contract Value at the time of selling = 125 * 2 * 2519

= Rs.629,750/-

This translates to a profit of Rs. 39,250/-!

Can you see the difference? A move from 2361 to 2519 generated a profit of Rs.5,798/- in the spot market, but the same move generated Rs’ profit. 39,250/-. Let us see how juicy this looks in terms of % return.

Remember our investment for the futures trade is Rs.82,670/-, hence the return has to be calculated keeping this as the base –

[39,250 / 82,670]*100

Well, this translates to a whopping 47% over 9 days! Contrast that with 5.79% in the spot market. For the sake of annualizing, this translates to an annual return of 1925 % …. With this, hopefully, I should have convinced you why short term traders prefer transactions in the Futures market as opposed to spot market transactions.

Futures offer something more than a plain vanilla spot market transaction. Thanks to the existence of ‘Margins’, you require a much lesser amount to enter into a relatively large transaction. If your directional view is right, your profits can be huge.

We can take positions much bigger than the capital available; this is called “Leverage”. Leverage is a double-edged sword. If used in the right spirit and knowledge, leverage can create wealth; if not, it can destroy wealth.

Before we proceed further, let us just summarize the contrast between the spot and futures market in the following table –


Particular | Spot Market | Futures Markets
--- | --- | ---
Capital Available | Rs.100,000/- | Rs.100,000/-
By Date | 15th Dec 2014 | 15th Dec 2014
Buy Price | Rs.2362 per share | Rs.2362 per share
Qty | 100,000 / 2362 = 42 shares | Depends on Lot size
Lot Size | Not Applicable | 125
Margin | Not Applicable | 14%
Contract value per lot | Not Applicable | 125 * 2362 = 295,250/-
Margin Deposit per lot | Not Applicable | 14% * 295,250 = 41,335/-
How many lots can be bought | Not Applicable | 100,000/41,335= 2.4 or 2 Lots
Margin Deposit | Not Applicable | 41,335 * 2 = 82,670/-
No of shares bought | 42 (as calculated above) | 125 * 2 = 250
Buy Value (Contract Value) | 42 * 2362 = 100,000/- | 2 * 125 * 2362 = 590,500/-
Sell Date | 23rd Dec 2014 | 23rd Dec 2014
No of days trade was live | 9 days | 9 days
Sell Price | Rs.2519/- per share | Rs.2519/- per share
Sell Value | 42 * 2519 = 105,798 | 250 * 2519 = 629,750/-
Profit earned | 105798 – 100000 = Rs.5798/- | 629750 – 590500 = Rs.39,250/-
Absolute Return for 9 days | 5798 / 100,000 = 5.79 % | 39250 / 82670 = 47%
% Return annualized | 235% | 1925%


All through, we have discussed rewards of transacting in futures, but what about the risk involved? What if the directional view does not pan out as expected? To understand both the sides of a futures trade, we need to understand how much money we stand to make (or lose) based on the underlying movement. This is called the “Futures Payoff”.




### 4.4 – Leverage Calculation

Usually, when we talk about leverage, the common questions one gets asked is – “How many times leverage are you exposed to?” The higher the leverage, the higher is the risk, and the higher is the profit potential.

Calculating leverage is quite easy –

Leverage = [Contract Value/Margin] . Hence for TCS trade the leverage is

= [295,250/41,335]

= 7.14, which is read as 7.14 times or simply as a ratio – 1: 7.14.

This means every Rs.1/- in the trading account can buy upto Rs.7.14/- worth of TCS. This is a very manageable ratio. However, if the leverage increases, then the risk also increases. Allow me to explain.

At 7.14 times leverage, TCS has to fall by 14% for one to lose all the margin amount; this can be calculated as –

1 / Leverage

= 1/ 7.14

= 14%

Now for a moment, assume the margin requirement was just Rs.7000/- instead of Rs.41,335/-. In this case, the leverage would be –

= 295,250 / 7000

= 42.17 times

This is clearly is a very high leverage ratio. One will lose all his capital if TCS falls by –

1/41.17

= 2.3%.

So, the higher the leverage, the higher is the risk. When leverage is high, only a small move in the underlying is required to wipe out the margin deposit.

Alternatively, at roughly 42 times leverage, you just need a 2.3% move in the underlying to double your money.☺

I personally don’t like to over-leverage. I stick to trades where the leverage is about 1:10 or about 1:12, not beyond this.




### 4.5 – The Futures payoff

Imagine this – when I bought TCS futures, the expectation was that TCS stock price would go higher, and therefore, I would financially benefit from the futures transaction. But what if instead of going up, TCS stock price went down? I would obviously make a loss. Think about it after initiating a futures trade. At every price point, I would either stand to make a profit or loss. The payoff structure of a futures transaction simply highlights the extent to which I either make a profit or loss at various possible price points.

To understand the payoff structure better, let us build one for the TCS trade. Remember it is a long trade initiated at Rs.2362/- on 16 th  of Dec. After initiating the trade, by 23 rd  Dec, the price of TCS can go anywhere. Like I mentioned, at every price point, I will either make a profit or a loss. Hence while building the structure’s pay, I will assume various possible price point situations that can pan out by 23 rd  Dec, and I will analyze the P&L situation at each of these possibilities. In fact, the table below does the same –


Possible Price on 23rd Dec | Buyer P&L (Price on 23rd Dec – Buy Price)
--- | ---
2160 | (202)
2180 | (182)
2200 | (162)
2220 | (142)
2240 | (122)
2260 | (102)
2280 | (82)
2300 | (62)
2320 | (42)
2340 | (22)
2360 | (2)
2380 | 18
2400 | 38
2420 | 58
2440 | 78
2460 | 98
2480 | 118
2500 | 138
2520 | 158
2540 | 178
2560 | 198
2580 | 218
2600 | 238


This is the way you need to read this table – considering you are a buyer at Rs.2362/-, what would be the P&L by 23 rd  Dec assuming TCS is trading is Rs.2160/-. As the table suggests, you would make a loss of Rs.202/-per share (2362 – 2160).

Likewise, what would be your P&L if TCS is trading at 2600? Well, as the table suggest, you would make a profit of Rs.238/- per share (2600 – 2362). So on and so forth.

In fact, if you recollect from the previous chapter, we stated that if the buyer is making Rs. X/- as profit, then the seller is suffering a loss to the extent of Rs. X/-. So assuming  23 rd  Dec TCS is Trading at 2600, the buyer makes a profit of Rs.238/- per share, and the seller would be making a loss of Rs.238/- per share, provided that the seller has shorted the share at Rs.2362/-.

Another way to look at this is that the money is being transferred from the seller’s pocket to the buyer’s pocket. It is just a transfer of money and not a creation of money!

There is a difference between the transfer of money and creation of money. Money is generated when the value is created. For example, you have bought TCS shares from a long term perspective, TCS as a business does well, profits and margins improve. Obviously, you as a shareholder will benefit from under-appreciation in the share price. This is money creation or wealth generation. If you contrast this with Futures, money is not being created but moving from one pocket to another.

Precisely for this reasons, Futures (rather financial derivatives in general) is called a “ Zero Sum Game ”.

Further, let us now plot a graph of the possible price on 23 rd  December versus the buyers P&L. This is also called the  “Payoff Structure”.

As you can see, any price above the buy price (2362) results in a profit and any price below the buy price results in a loss. Since the trade involved purchasing 2 lots of futures (250 shares), a 1 point positive movement (from 2362 to 2363) results in a gain of Rs.250. Likewise, a 1 point negative movement (from 2362 to 2361) results in a loss of Rs.250. Clearly, there is a sense of proportionality here. The proportionality comes from the fact that the money made by the buyer is the loss suffered by the seller (provided they have bought/short the same price), and vice versa.

Most importantly, because the P&L is a smooth straight line, it is said that the futures are a “ Linear Payoff Instrument ”.

1. Leverage plays a key role in futures trading.
1. Margins allow us to deposit a small amount of money and take exposure to a large value transaction.
1. Margins charged is usually a % of the contract value.
1. Spot market transactions are not leveraged; we can transact to the extent of our capital.
1. Under leverage, a small change in the underlying results in a massive impact on the P&L
1. The profits made by the buyer is equivalent to the loss made by the seller and vice versa.
1. The higher the leverage, the higher is the risk and, therefore, the higher the chance of making money.
1. Futures Instrument simply allows one to transfer money from one pocket to another. Hence it is called a “Zero Sum Game.”
1. The payoff structure of a futures instrument is linear.



## 1.Background_–_Forwards_Market

[Read more](https://zerodha.com/varsity/chapter/background-forwards-market/)



### 1.1 – Overview

The Futures market is an integral part of the Financial Derivatives world. ‘Derivatives’, as they are called, is a security whose value is derived from another financial entity referred to as an ‘Underlying Asset’. The underlying asset can be anything a stock, bond, commodity or currency. The financial derivatives have been around for a long time now. The earliest reference to the application of derivatives in India dates back to 320 BC in ‘Kautilya’s Arthashastra’. It is believed that in the ancient Arthashastra (study of Economics) script, Kautilya described the pricing mechanism of the standing crops ready to be harvested at some point in the future. Apparently, he used this method to pay the farmers much in advance, thereby structuring a true ‘forwards contract’.

Given the similarities between the forwards and the futures market, I think the best possible way to introduce the futures market is by first understanding the ‘Forwards market’. The Understanding of Forwards Market would lay a strong foundation for learning the Futures Market.

The forwards’ contract is the simplest form of derivative. Consider the forwards’ contract as the older avatar of the futures contract. Both the futures and the forward contracts share a common transactional structure, except that the futures contracts have become the trader’s default choice over the years. The forward contracts are still in use but are limited to a few participants, such as the industries and banks. The focus of this chapter is to help you understand the structure of a typical forwards transaction, after which we will break it down into its elements and understand its advantages and disadvantages.




### 1.2 – A simple Forwards example

The Forward market was primarily started to protect the interest of the farmers from adverse price movements. In a forward market, the buyer and seller agree to exchange the goods for cash. The exchange happens at a specific price on a specific future date. The goods’ price is fixed by both the parties on the day they agree. Similarly, the date and time of the goods to be delivered is also fixed. The agreement happens face to face with no intervention from a third party. This is called “Over the Counter or OTC” agreement. Forward contracts are traded only in the OTC (Over the Counter) market, where individuals/ institutions trade through negotiations on a one to one basis.

Consider this example; there are two parties involved here.

One is a jeweller whose job is to design and manufacture jewellery. Let us call him ‘ABC Jewelers’. The other is a gold importer whose job is to sell gold at a wholesale price to jewellers. Let us call him’ XYZ Gold Dealers’.

On 9 th  Dec 2014, ABC agreed with XYZ to buy 15 kilograms of gold at a certain purity (say 999 purity) in three months (9 th  March 2015). They fix the price of gold at the current market price, which is Rs.2450/- per gram or Rs.24,50,000/- per kilogram. Hence as per this agreement, on 9 th  March 2015, ABC is expected to pay XYZ a sum of Rs.3.675 Crs (24,50,000/Kg*15) in return for the 15 kgs of Gold.

This is a very straightforward and typical business agreement that is prevalent in the market. An agreement of this sort is called a ‘Forwards Contract’ or a ‘Forwards Agreement’.

Do note; the agreement is executed on 9 th  Dec 2014, irrespective of the price of gold 3 months later, i.e. 9 th  March 2015, both ABC and XYZ are obligated to honour the agreement. Before we proceed further, let us understand each party’s thought process and understand what compelled them to enter this agreement.

Why do think ABC entered into this agreement? Well, ABC believes the price of gold would go up over the next 3 months; hence they would want to lock in today’s market price for the gold. Clearly, ABC wants to insulate itself from an adverse increase in gold prices.

In a forwards contract, the party agreeing to buy the asset at some point in the future is called the “Buyer of the Forwards Contract”; in this case, it is ABC Jewelers.

Likewise, XYZ believes the price of gold would go down over the next 3 months, and hence they want to cash in on the high price of gold available in the market today. In a forwards contract, the party agreeing to sell the asset at some point in the future is called the “Seller of the Forwards Contract”, in this case, it is XYZ Gold Dealers.

Both the parties have an opposing view on gold; hence they see this agreement to be in line with their future expectation.




### 1.3 – 3 possible scenarios

While both these parties have their own view on gold, only three possible scenarios could pan out at the end of 3 months. Let us understand these scenarios and how they could impact both the parties.

Scenario 1 – The price of gold goes higher.

Assume on 9 th  March 2015, the price of gold (999 purity) is trading at Rs.2700/- per gram. Clearly, ABC Jeweler’s view on the gold price has come true. At the time of the agreement, the deal was valued at Rs 3.67 Crs, but now, with the increase in Gold prices, the deal is valued at Rs.4.05 Crs. As per the agreement, ABC Jewelers is entitled to buy Gold (999 purity) from XYZ Gold Dealers at a price they had previously agreed upon, i.e. Rs.2450/- per gram.

The increase in Gold price impacts both the parties in the following way –


Party | Action | Financial Impact
--- | --- | ---
ABC Jewelers | Buys gold from XYZ Gold Dealers @ Rs.2450/- per gram | ABC saves Rs.38 Lakhs ( 4.05 Crs – 3.67 Crs) by this agreement
XYZ Gold Dealers | Obligated to sell Gold to ABC @ Rs.2450/- per gram | Incurs a financial loss of Rs.38 Lakhs.


Hence, XYZ Gold Dealers will have to buy Gold from the open market at Rs.2700/- per gram and sell it to ABC Jewelers at the rate of Rs.2450/- per gram, thereby facing a loss in this transaction.

Scenario 2 – The price of gold goes down.

Assume on 9 th  March 2015, the price of gold (999 purity) is trading at Rs.2050/- per gram. Under such circumstances, XYZ Gold Dealers view on the gold price has come true. At the time of the agreement, the deal was valued at Rs 3.67 Cr, but now, with the decrease in gold prices, the deal is valued at Rs.3.075 Cr. However, according to the agreement, ABC Jewelers is obligated to buy Gold (999 purity) from XYZ Gold Dealers at a price they had previously agreed upon, i.e. Rs.2450/- per gram.

This decrease in the gold price would impact both the parties in the following way –


Party | Action | Financial Impact
--- | --- | ---
ABC Jewelers | Is obligated to buy gold from XYZ Gold Dealers @ Rs.2450/- per gram | ABC loses Rs.59.5 Lakhs ( 3.67 Crs – 3.075 Crs) under this agreement
XYZ Gold Dealers | Entitled to sell Gold to ABC @ Rs.2450/- per gram | XYZ enjoys a profit of Rs.59.5 Lakhs.


Even though Gold is available at a much cheaper rate in the open market, ABC Jewelers is forced to buy gold at a higher rate from XYZ Gold Dealers hence incurring a loss.

Scenario 3 – The price of Gold stays the same.

If on 9 th  March 2015, the price is the same as on 9 th  Dec 2014, then neither ABC nor XYZ would benefit from the agreement.




### 1.4 – 3 possible scenarios in one graph

Here is a visual representation of the impact of gold prices on ABC Jewelers –

As you can see from the chart above, at Rs.2450/- per gram, there is no financial impact for ABC. However, as per the graph above, we can notice that ABC’s financials are significantly impacted by a directional movement in the gold prices. Higher the price of gold (above Rs.2450/-), higher is ABC’s savings or the potential profit. Likewise, as and when the gold price lowers (below Rs.2450/-), ABC is obligated to buy gold at a higher rate from XYZ, thereby incurring a loss.

Similar observations can be made with XYZ –

At Rs.2450/- per gram, there is no financial impact on XYZ. However, as per the graph above, XYZ’s financials are significantly impacted by a directional movement in the gold prices. As and when the price of gold increases (above Rs.2450/-), XYZ is forced to sell gold at a lower rate, thereby incurring a loss. However, as and when the price of gold decreases (below Rs.2450/-), XYZ would enjoy the benefit of selling gold at a higher rate, at a time when gold is available at a lower rate in the market, thereby making a profit.




### 1.5– A quick note on settlement

Assume that on 9 th  March 2015, the price of Gold is Rs.2700/- per gram. Clearly, as we have just understood, at Rs.2700/- per gram, ABC Jewelers stands to benefit from the agreement. At the time of the agreement (9 th  Dec 2014), 15 Kgs gold was worth Rs. 3.67Crs, as of 9 th  March 2015, 15 kgs Gold is valued at Rs.4.05 Crs. Assuming at the end of 3 months, i.e. 9 th  March 2015, both the parties honour the contract, here are two options available to them for settling the agreement –

1. Physical Settlement  – – The buyer of a forward contract pays the full purchase price, and the seller delivers the actual asset. XYZ buys 15 Kgs of gold from the open market by paying Rs.4.05Crs and would deliver the same to ABC on the receipt of Rs.3.67 Crs. This is called a physical settlement
1. Cash Settlement  – In a cash settlement, there is no actual delivery or receipt of security. In cash settlement, the buyer and the seller will exchange the cash difference. As per the agreement, XYZ is obligated to sell Gold at Rs.2450/- per gram to ABC. In other words, ABC pays Rs.3.67 Crs in return for the 15 Kgs of Gold which is worth Rs.4.05Cr in the open market. However, instead of making this transaction, i.e. ABC paying Rs.3.67 Crs in return for the gold worth Rs.4.05Crs, the two parties can agree to exchange only the  cash differential . In this case, it would be Rs.4.05 Crs – Rs.3.67 Crs = Rs.38 Lakhs. Hence XYZ would pay Rs.38 lakhs to ABC and settle the deal. This is called a cash settlement

We will understand a lot more about the settlement at a much later stage. Still, at this stage, you need to be aware that there are basically two basic types of settlement options available in a Forwards Contract – physical and cash.




### 1.6 – What about the risk?

While we are clear about the structure (terms and conditions) of the agreement and the impact of the price variation on either party, what about the risk involved? Do note, the risk is not just with price movements, there are other major drawbacks in a forward contract, and they are–

1. Liquidity Risk  – In our example, we have conveniently assumed that ABC finds a party XYZ who has an exact opposite view with a certain view on gold. Hence they easily strike a deal. In the real world, this is not so easy. In a real-life situation, the parties would approach an investment bank and discuss their intention. The investment bank would scout the market to find a party who has an opposite view. Of course, the investment bank does this for a fee.
1. Default Risk/ / Counterparty risk –  Consider this, assume the gold prices have reached Rs.2700/- at the end of 3 months. ABC would feel proud of the financial decision they had taken 3 months ago. They are expecting XYZ to pay up. But what if XYZ defaults?
1. Regulatory Risk –  The Forwards contract agreement is executed by mutual consent of the parties involved, and there is no regulatory authority governing the agreement. In the absence of a regulatory authority, a sense of lawlessness creeps in, which in turn increases the incentive to default.
1. Rigidity –  Both ABC and XZY entered into this agreement on 9 th  Dec 2014 with a certain gold view. However, what would happen if their view would strongly change when they are halfway through the agreement? The rigidity of the forward agreement is such that they cannot foreclose the agreement halfway through.

The forward contracts have a few disadvantages, and hence future contracts were designed to reduce the risks of the forward agreements.

In India, the Futures Market is a part of a highly vibrant Financial Derivatives Market. During the course of this module, we will learn more about the Futures and methods to trade this instrument efficiently!

So, let’s hit the road!

1. The forwards’ contract lays down the basic foundation for a futures contract.
1. A Forward is an OTC derivative, which is not traded on an exchange.
1. Forward contracts are private agreements whose terms vary from one contract to the other.
1. The structure of a forwards contract is fairly simple.
1. In a forward agreement, the party agreeing to buy the asset is called the “Buyer of the Forwards Contract.”
1. In a forward agreement, the party agreeing to sell the asset is called the “Seller of the Forwards Contract.”
1. A variation in the price would impact both the buyer and the seller of the forwards’ contract.
1. Settlement takes place in two ways in a forward contract – Physical and Cash settlement.
1. A futures contract reduces the risk of a forward contract.
1. The core of a forward and futures contract is the same.



## 2.Introducing_Futures_Contract

[Read more](https://zerodha.com/varsity/chapter/introducing-futures-contract/)



### 2.1 – Setting the context

In the previous chapter, we looked at a straightforward Forwards Contract example, where two parties agreed to exchange cash for goods at some point in the future. We inspected the structure of the transaction and understood how the variation in price impacts the parties involved. Towards the end of the chapter, we had listed down 4 key risks (or issues) concerning the forward’s contracts, and we concluded that a futures contract is structured to overcome the critical risks of a forward agreement, namely –

1. Liquidity risk
1. Default Risk
1. Regulatory Risk
1. The rigidity of the transitional structure

We will continue referring to the same example in this chapter as well. Hence you may want to refresh your understanding of the example quoted in the previous chapter.

From the previous chapter, one thing is quite clear –  If you view the price of an asset, you can benefit significantly by entering into a forward agreement . All one needs to do is to find a counterparty willing to take the opposite side. Needless to say, a forward agreement is limited by the inherent risks involved, all of which is overcome by a futures agreement.

The Futures contract or Futures Agreement is an improvisation of the Forwards Agreement. The Futures Contract is designed so that it retains the core transactional structure of a Forwards Market. At the same time, it eliminates the risks associated with the forward’s contract. A Forward Agreement would give you a financial benefit as long as you have an accurate directional view of an asset’s price; this is what I mean when I say ‘core transactional structure’.

This may seem a bit absurd but think about it – the ‘transaction structure’ of an old generation car was to transport you from point ‘A’ to point ‘B’. However, the new generation car comes with improvisations in terms of the safety features – airbags, seat belts, ABS, power steering etc… However, it still retains the core ‘transaction structure’, i.e. to help you move from point ‘A’ to point ‘B’. This is the same distinction between the forwards and the futures agreement.




### 2.2 – A sneak peek into the Futures Agreement

As we now know, the core transactional structure of the futures and forwards is the same, and I guess it makes sense to look into the features that distinguish the Futures from the forwards. We will have a quick sneak peek into these features in this chapter, but we will dig into each feature in greater detail at a later stage.

Recall, in the example we had quoted in the previous chapter, ABC jeweller agrees with XYZ to buy a certain quantity of gold at a certain point in the future. Now imagine this, what if ABC found it really hard to find XYZ as a counterparty to the agreement? Under such circumstances, though ABC has a certain view on gold and is also willing to enter into a financial agreement, they would be left helpless because there is no counterparty to take the opposite side of the agreement.

Now further, imagine this. What if ABC, instead of spending its time and effort to scout for a counterparty, decides to walk into a financial supermarket where many counterparties are willing to take the opposite view. With such a financial supermarket in place, ABC has to announce its intention, and the willing counterparties would line up to take the opposing stance. What more, a true financial supermarket of this sort would not just have people with a view on gold, but instead will also have people with a view on Silver, Copper, Crude oil, and pretty much any asset class, including stocks!

In fact, this is exactly how the Futures Contracts are made available. They are available and accessible to all of us and not just available to a corporate such as ABC Jewelers. The futures contracts are available to us in the financial (super) market, often called the “Exchange”. The exchange can be a stock exchange or a commodity exchange.

As we know, a futures contract is structured a little differently compared to a forwards contract. This is mainly to overcome the risks involved in the forwards market. Let us look at each of these points that differentiate the futures from the forward’s agreement.

Note that you may still not be very clear about futures; that’s alright; keep the following points in perspective. We will shortly consider a futures example, and with that, you should be clear about how Futures agreement works.

Futures Contract mimics the underlying  – In the example of ABC jewellers and XYZ Gold Dealers, the forwards’ agreement was based on gold (as an asset) and its price. However, when it comes to a Futures Contract, the agreement is based on the asset’s future price. The futures price mimics the asset, which is also called the underlying.  For example, gold as an asset can have a ‘Gold Futures’ contract. Please think of the underlying and its futures contract somewhat as twin siblings. Whatever the underlying asset does, the futures contract does the same. Therefore if the price of the underlying goes up, the futures contract’s price would also go up. Likewise, if the price of the underlying goes down, the futures contract’s price also goes down.

Standardized Contracts  – Again, going back to the example of ABC jewellers and XYZ Gold Dealers, the agreement was to deal with 15 kgs of gold of certain purity. If both the parties mutually agreed, the agreement could have been for 14.5Kgs, or 15.25 Kgs or whatever they would think is convenient for them. However, in the futures contract, the parameters are standardized. They are not negotiable.

Futures Contracts are tradable  – The futures contract is easily tradable. If I get into an agreement with a counterparty, unlike a forward contract, I need not honour the contract until the end (also called the expiry day). At any point in time, if my view changes, I can transfer the contract to someone else and get out of the agreement.

Futures Market is highly regulated – A regulatory authority highly regulates the Futures markets (or, for that matter, the entire financial derivatives market) . In India, the regulatory authority is “Securities and Exchange Board of India (SEBI)”. This means there is always someone overlooking the activities in the market and making sure things run smoothly. This also means default on a futures agreement is hardly a possibility.

Futures Contracts are time-bound  – We will understand this point in detail a bit later, but for now, remember that all the futures contracts available to you have different time frames. In the example from the previous chapter, ABC jewellers had a certain view on gold, keeping 3 months in perspective. If ABC were to do a similar agreement in the futures market, contracts would be available to them in the 1 month, 2 months, and 3-month time frame. The time frame upto which the contract lasts is called ‘The expiry of the contract.

Cash settled –  Most of the futures contracts are cash-settled. This means only the cash differential is paid out. There is no worry of moving the physical asset from one place to another. The cash settlement is overseen by the regulatory authority ensuring total transparency in the cash settlement process.

To sum up, here is a table that quickly summarizes the difference between the “Forwards Contract” and “Futures Contract.”


Forwards Contract | Futures Contract
--- | ---
Contracts are traded over the counter (OTC) | Futures Contract are traded in the exchange.
Contracts can be customized. | Future Contracts are standardized.
High counterparty risk | No counterparty risk
Not regulated | Regulated by SEBI (in India)
Contracts are not transferable. | Transferable hence easily tradable
Time-bound to just 1-time frame | Multiple time frame contracts available
The settlement is flexible (physical or cash) | Cash settled


At this stage, I feel there is a need to stress the distinction between the  spot price  and the  futures price.  The spot price is the price at which the asset trades in the ‘regular’ market, also called the ‘spot market’. For example, if we are talking about gold as an underlying, then there are two prices we are referring to – gold in the regular market called the Spot market and gold in the Futures market, called the Gold Futures. The spot market prices and futures market prices move in tandem, meaning if one goes up, the other also goes up.

With these perspective points, let us now focus our attention on a few other futures contract nuances.




### 2.3 – Before your first futures trade

Before we dig deeper and understand the working of a futures contract, we need to understand a few other aspects of futures trading. Do remember at a later stage, we will revisit these points and discuss them in greater detail. But for now, good working knowledge on the following points is what is required.

Lot size –  Future is a standardized contract where everything related to the agreement is pre-determined. The lot size is one such parameter. Lot size specifies the minimum quantity that you will have to transact in a futures contract. Lot size varies from one asset to another.

Contract Value  – In our example of ABC jeweller and XYZ Gold Dealers, ABC agreed to buy 15 kgs of Gold at the rate of Rs.2450/- per gram or Rs.24,50,000/- per kilogram. Since the deal was to buy 15 kgs, the whole deal was valued at Rs.24,50,000 x 15 = Rs.3.675 Crs. In this case, it is said that the contract Value’ is Rs.3.675 Crs. Simply put, the contract value is the quantity of the price of the asset. We know the futures agreement has a standard pre-determined minimum quantity (lot size). The contract value of a futures agreement can be generalized to  “Lot size x Price”.

Margin –  Again, referring back to the example of ABC jeweller and XYZ Gold Dealers at the time of the agreement, i.e. on 9 th  Dec 2014, both the parties would have had a gentleman’s word and nothing beyond that. Meaning both the parties would have just agreed to honour the contract on the agreement’s expiry day, i.e. 9 th  March 2015. Do notice there is  no  exchange of money on 9 th  Dec 2014.

However, in a futures agreement, the moment a transaction occurs, both the parties involved will have to deposit some money. Consider this as the token advance required for agreeing. The money has to be deposited with the broker. Usually, the money that needs to be deposited is calculated as a % of the contract value. This is called the margin amount’. Margins play a pivotal role in futures trading; we will understand this in greater detail later. For now, remember that to enter into a futures agreement, a margin amount is required, which is a certain percentage of the contract value.

Expiry –  As we know, all futures contracts are time-bound. The expiry or the expiry date of the futures contract is the date upto which the agreement is valid. Beyond the valid date, the contract ceases to exist. Also, be aware that the day a contract expires, the exchanges introduce new contracts.

With these few points that we have discussed so far, I guess we can now understand a simple example of futures trading.




### Key takeaways from this chapter

1. The forwards and futures markets give you a financial benefit if you have an accurate directional view of an asset’s price.
1. The Futures contract is an improvisation over the Forwards contract.
1. The Futures price generally mimics the underlying price in the spot market.
1. Unlike a forwards contract, the futures contract is tradable.
1. The futures contract is a standardized contract wherein all the variables of the agreement is predetermined.
1. Futures contracts are time-bound, and the contracts are available over different timeframes.
1. Most of the futures contracts are cash-settled
1. SEBI in India regulates the futures market.
1. The lot size is the minimum quantity specified in the futures contract.
1. Contract value = Lot size times the Futures price.
1. To enter into a futures agreement, one has to deposit a margin amount, a certain % of the contract value.
1. Every futures contract has an expiry date beyond which the contract would seize to exist. Upon expiry, old contracts cease and new ones are created.



## 3.The_Futures_Trade

[Read more](https://zerodha.com/varsity/chapter/futures-trade/)



### 3.1 – Before the Trade

In the last chapter, we learnt various concepts related to the futures market.  Remember, the motivation for any trader entering into a futures agreement is to benefit financially. The trader needs to have a directional view of the price of the underlying asset . Perhaps it is time we take up a practical example of a futures trade to demonstrate how this is done. Let us move away from the Gold example and look into an example related to the stocks.

Today (15 th  Dec 2014), Tata Consultancy Services (TCS) management, a leading Indian Software Company, had investors meet, wherein the TCS management announced that they are cautious about the revenue growth for the December Quarter.  The markets do not like such cautious statements, especially from the company’s management. After the statement, the markets reacted to it, and as we can see from the TCS’s spot market quote, the stock went down by over 3.6%. In the snapshot below, the price per share is highlighted in blue. Ignore the red highlight; we will discuss it shortly.

As a trader, I believe that the TCS stock price reaction to the management’s statement is exaggerated. Here is my rational – If you follow TCS or any Indian IT sector company in general, you will know that December is usually a lacklustre month for the Indian IT companies. December is the financial year-end in the US (the biggest market for the Indian IT companies) and the holiday season; hence the business moves quite slowly for such companies. This furlough has a significant impact on the IT sector revenues. This information is already known and factored in by the market. Hence, I believe the stock sinking by 3.6% is unwarranted.  I also feel this could be an opportunity to buy TCS, as I believe the stock price will eventually go up. Hence I would be a buyer in TCS after such an announcement.

Notice, based on my thoughts (which I perceive as rational), I have developed a ‘ directional view ’ on the asset’s price (TCS). I believe the TCS (underlying asset) stock price will increase in due course of time from my analysis. In other words, I am bullish about TCS at the current market price.

Instead of buying TCS shares in the spot market, I decide to buy the TCS Futures (for reasons I will discuss in the next chapter). Having decided to buy futures, all I need to see is the price at which the TCS Futures is trading. The contract details are readily available on the NSE’s website. In fact, the link to get details for a TCS futures contract is available on the spot market quotes. I have highlighted the same in red in the image above.

Recall, the futures price should always mimic the spot price, meaning if the spot price has gone down, the futures price should also go down. Here is a snapshot from NSE’s website showing the TCS Futures price.

As expected, the futures price has mimicked the spot price, and therefore the TCS Futures is also down by 3.77%. You may have two questions at this point –

1. TCS in the spot market is down by 3.61%. However, TCS futures is down by 3.77%? Why the difference?
1. TCS spot price is at Rs.2362.35, but Futures price is at Rs.2374.90? Why the difference?

Both these are valid questions at this point, and the answer to these questions depends upon the “Futures Pricing Formula”, a topic we will deal with at a later point in time. But the most important point to note at this stage is that the futures price has moved in line with the spot price, and both of them are down for the day. Before we proceed any further, let us relook at the futures contract and inspect a few key elements. Allow me to repost the futures contract with a few important features highlighted.

Starting from the top, the box highlighted in red has three important bits of information –

1. Instrument Type  – Remember, the underlying asset is the stock of a company, and we are interested in the asset’s future contract. Hence, the instrument type here is the ‘stock futures.’
1. Symbol  – This highlights the name of the stock, TCS in this case
1. Expiry Date  – This is the date on which the contract ceases to exist. As we can see, the TCS futures contract specifies 24 th  Dec 2014 as the expiry. You may be interested to know that all derivative contracts in India expire on the last Thursday of the month. We will discuss more what happens on the expiry date at a later point.

We had looked at the blue box a little earlier; it just highlights the future price.

Lastly, the black box highlights two important parameters – the underlying value and the market lot.

1. Underlying Value  – This is the same as the price at which the underlying is trading in the spot market. We know TCS was trading at Rs.2362.35 per share; however, when I took the above snapshot, TCS fell by another few points. Hence the price we see here is Rs.2359.95. per share
1. Market lot (lot size)  – Remember, a futures contract is a standardized contract. The parameters are prefixed. The lot size is the minimum number of shares that we need to buy/sell if we wish to agree. The lot size for the TCS futures is 125, which means a minimum of 125 shares (or a multiple of 125 shares) have to be transacted while trading the TCS futures.

In the previous chapter, Recall discussed the ‘contract value’, which is ‘Lot size’ multiplied by the futures price. We can now calculate the contract value for TCS futures as follows–

Contract Value = Lot size x Price of futures

= 125 x Rs.2374.90

=  Rs. 296,862.5

Before we proceed to discuss the TCS futures trade, let us quickly look at another ‘Futures Contract’ to rivet our understanding so far. Here is the snapshot of the futures contract of ‘State Bank of India (SBI)’.

With the help of the above snapshot, you can perhaps answer the following questions –

1. What is the instrument type?
1. What is SBI’s futures price?
1. How does SBI’s future price compare with its spot price?
1. What is the expiry date of the Futures contract?
1. What are the lot size and the contract value of SBI futures?




### 3.2 – The Futures Trade

Going back to the TCS futures trade, the idea is to buy a futures contract as I expect the TCS stock price to go up. The price at which I would buy TCS Futures is Rs.2374.9/- per share. Remember, the minimum number of shares that I need to buy is 125. The minimum number of shares is also colloquially called ‘one lot’.

So how do we buy the ‘Futures Contract’? This is quite simple we can call our broker and ask him to buy 1 lot of TCS futures at Rs.2374.9/- or we can buy it ourselves through the broker’s trading terminal.

I prefer to place trades myself through the trading terminal. If you are new to the trading terminal, I suggest you read through the chapter on the  Trading terminal.  Once TCS Futures is loaded on my market watch, all I need to do is press F1 and buy the contract.

The moment I press the F1 key (expressing my interest to buy TCS futures) on my trading terminal, a couple of things happen in the background.

1. Margin Validation  – Remember, whenever we enter into a futures agreement, we need to deposit a margin amount (sort of a token advance), which is simply a percentage of the contract value. We will discuss margins shortly. If there is insufficient margin, we cannot agree. So as the first step, the broker’s risk management system/ software checks if I have sufficient money in my trading account (to suffice the margin requirement) to enter into a futures agreement.
1. The counterparty search  – After validating the margins, the system scouts for a relevant counterparty match. The match has to be made between me – the buyer of the TCS futures and the TCS futures seller. Remember, the stock exchange is a ‘Financial supermarket’ where one can find many participants with different views on an asset’s price. The seller of TCS futures obviously thinks TCS futures price will go further down. Like my rationale as to why the TCS stock price will go higher, the seller has his own rationale for his directional view. Hence he wants to be a seller.
1. The signoff –  Once Step 1 and 2 are through, i.e. the margin validation and finding the counterparty, the buyer and the seller digitally sign the futures agreement. This is mainly a symbolic process. By agreeing to buy (or sell) the futures agreement, one gives the other consent to honour the contract specifications.
1. The margin block –  After the signoff is done, the required margin is blocked in our trading account. We cannot use the blocked margin for any other purpose. The money will be blocked as long as we hold the futures contract.

With the completion of these 4 steps,  I now own 1 lot of TCS Futures Contract . You may be surprised to know, in the real markets, all the above-mentioned steps happen sequentially in a matter of a few seconds!

Here is a critical question – What does it mean by “I now own 1 lot of TCS Futures Contract”? Well, it simply means by purchasing TCS futures on 15 th  Dec 2014, I have digitally agreed with a certain counterparty agreeing to buy 125 TCS shares from me (the counterparty) at Rs.2374.9/- per share. This futures agreement between me and the counterparty expires on 24 th  Dec 2014.




### 3.3 –The 3 possible scenarios post the agreement

After agreeing, 3 possible scenarios can pan out by 24 th  Dec 2014. We know what these scenarios are (we studied them in chapter 1) – the price of TCS can go up, the price of TCS can come down, or the price of TCS could stay the same. Let us arbitrarily take up a few possible price situations and see the price’s impact on both the parties involved.

Scenario 1 – TCS stock price goes up by 24 th  Dec.

This is a case where my directional view on TCS shares has come true. Therefore I stand to benefit.

Assume on 24 th  Dec 2014, the stock price of TCS has gone up from Rs.2374.9/- to Rs.2450/- per share; by the increase in the spot price, the futures price would also increase. This means, as per the agreement, I am entitled to buy the TCS shares at Rs.2374.9/- per share, which is a much lower price compared to what is available in the market. My profit will be Rs.75.1/- per share (Rs.2450 – Rs.2374.9). Since the deal is for 125 shares, my overall profit will be Rs.9387.5/- (Rs.75.1/- * 125).

The seller obviously incurs a loss, as he is forced to sell TCS shares at Rs.2374.9 per share instead of selling it in the open market at a much higher price of Rs.2450/- per share. Clearly, the buyer’s gain is the seller loss.

Scenario 2 – TCS stock price goes down by 24 th  Dec.

This is a case where my directional view on TCS shares has gone wrong. Therefore I would stand to lose.

Assume on 24 th  Dec 2014, the stock price of TCS goes down from Rs.2374.9/- to Rs.2300/- per share; by this decrease, the futures price will also be around the same level. This means, as per the agreement, I am obligated to buy the TCS shares at Rs.2374.9/- per share, which is a much higher price compared to what is available in the market. My loss will be Rs.75./- per share (Rs.2374.9 – Rs.2300). Since the deal is for 125 shares, my overall loss will be Rs.9375/- (Rs.75/- * 125).

I would obviously incur a loss as I’m forced to buy the TCS shares at Rs.2374.9/- per share instead of buying it in the open market at a much lower price of Rs.2300/- per share. Clearly, the sellers gain is the buyer’s loss.

Scenario 3 – TCS stock price remains unchanged.

Under such a situation, neither the buyer nor the seller benefit, hence there is no financial impact on either party.




### 3.3 – Exploiting a trading opportunity

So here is a situation – after buying the TCS futures on 15 th  Dec 2014 at Rs.2374.9/- the next day, i.e. 16 th  Dec 2014, TCS price shot up. It is now trading at Rs.2460/-. What do I do? Clearly, with the price increase, I stand to benefit significantly. To be precise, at the time of taking the snapshot, I am sitting at a profit of Rs.85.1/- per share or Rs.10,637.5/- (Rs.85.1/- * 125) as an overall profit.

Suppose I am happy with the money that I have made overnight. Can I close out the agreement? Or rather, at Rs.2460 per share, what if my view changes? What if I no longer feel bullish about TCS at Rs.2460? Do I really need to hold on to the agreement until the contract expiry date, i.e. 24 th  Dec 2014, by which time if the price goes down, it could lead to a loss?

Well, as I had mentioned in the previous chapter, the futures agreement is tradable. Meaning, at any point after entering into a futures agreement, I can easily get out of the agreement by transferring the agreement to someone else. This means I can close the existing TCS futures position and book a profit of Rs.10,637.5/-. Not bad for a 1-day job, right? J

Closing an existing futures position is called “square off”. By squaring off, I offset an existing open position.  In the case of the TCS example, I initially bought 1 lot of TCS futures, and when I square off, I have to sell 1 lot of TCS futures (so that my initial buy position is offset). The following table summarizes the concept of square off in general –


Serial No | Initial Leg | View at the time of initial leg | Square off leg | View at the time of squaring off
--- | --- | --- | --- | ---
01 | Buy / Long | Expect the price to go higher – Bullish | Sell | No longer expect the price to go higher, or one wants to get out of the existing position (for whatever reason)
02 | Sell/Short | Expect the price to go lower – Bearish | Buy | No longer expect the price to go lower, or one wants to get out of the existing position (for whatever reason)


When I intend to square off a position, I can either call my broker asking him to square off the open position or do it myself on the trading terminal. In the example, we have a buy open position in TCS futures (1 lot). To offset this open position, the square off position would be to “sell 1 lot of TCS futures”. The following things happen when I opt to square off the TCS position –

1. The broker (via trading terminal) scouts for a counterparty that would be willing to buy the futures position from me. In simpler words, “my existing buy position will simply be transferred to someone else”. That ‘someone else’ by buying the contract from me now bears the TCS price’s risk going up or down. Hence this is referred to as the “Risk Transfer.”
1. Note, the transfer will happen at the current futures price in the market, i.e. 2460/- per share.
1. My position is considered to offset (or squared off) after the trade is executed.
1. Once the trade is executed, the margins that were initially blocked would now be unblocked. I can utilize this cash for other transactions.
1. The profit or loss made on the transaction will be credited or debited to my trading account the same evening itself.

And with this, the futures trade is now set to be complete.

Note, if at Rs.2460 I develop a view that the price will be much higher; I could continue to hold the stock futures. In fact, I can continue to hold the futures till the contract’s expiry, i.e. 24 th  Dec 2014. As long as I continue to hold the futures, I continue to hold the risk of TCS price fluctuation. In fact, here is the snapshot of TCS futures taken on 23 rd  Dec 2014, just 1 day before the expiry of the contract. Had I opted to hold the futures till 23 rd  Dec, my profits would have been much higher – TCS futures is trading at Rs.2519.25/- per share.

In fact, on 16 th  Dec 2014, when I decided to book profits at Rs.2460/-, ‘someone else’ bought the TCS futures from me. In other words, I transferred my buy position to someone else, and even that ‘someone else’ (the counterparty) would also have made money on this contract by buying the contract at Rs.2460/- from me and holding it until 23 rd  Dec 2014. Now here are two simple questions for you –

1. What would be my Profit & Loss (P&L) on a per share and an overall basis had I held the TCS futures from 15 th  Dec 2014 (Rs.2374.9) to 23 rd  Dec 2015 (Rs.2519.25)
1. On 16 th  Dec 2014, I squared off my position at Rs.2460/-, obviously by the contract’s square was transferred to a counterparty. Assuming the counterparty held on to the TCS futures position until 23 rd  Dec 2014, what would be his Profit & Loss (P&L) on a per-share basis and overall?

If you cannot answer the above two questions, you can drop in a query in the comment box below, and I will be happy to explain the answer. But I sincerely hope you get the answers to the questions above yourself 🙂

In the next chapter, we will discuss margins, an essential aspect of futures trading.

- If you have a directional view on an assets price, you can financially benefit from it by entering into a futures agreement.
- To transact in a futures contract, one needs to deposit a token advance called the margin.
- When we transact in a futures contract, we digitally sign the agreement with the counterparty; this obligates us to honour the contract.
- The futures price and the spot price of an asset are different; this is attributable to the futures pricing formula (we will discuss this topic later)
- One lot refers to the minimum number of shares that needs to be transacted.
- Once we enter into a futures agreement, there is no obligation to stick to the agreement until the contract expires.
- Every futures trade requires a margin amount; the margins are blocked when you enter a futures trade.
- We can exit the agreement anytime, which means you can exit the agreement within seconds of entering the agreement.
- When we square off an agreement, we are essentially transferring the risk to someone else.
- Once we square off the futures position, margins are unblocked.
- The money that you make or lose in a futures transaction is credited or debited to your trading account the same day.
- In a futures contract, the buyer’s gain is the seller’s loss and vice versa.


