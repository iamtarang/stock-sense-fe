# Currency, Commodity, and Government Securities

[Read more](https://zerodha.com/varsity/module/commodities-currency-government-securities/)

---


## 18.Cross_Currency_Pairs

[Read more](https://zerodha.com/varsity/chapter/cross-currency-pairs/)



### 18.1 – All hail the king of Forex

Outside India, the biggest market people trade-in is the Forex futures market. Right from the retail to institutional segment, everybody trades the forex futures markets. If you look at this more closely, you will realize that the biggest currency futures which are traded are –

1. Euro against the US Dollar – EUR USD
1. GBP against the US Dollar – GBP USD also called ‘The Cable.’
1. US Dollar against the Japanese Yen – USD JPY

Till recently, if you wanted to trade any of these international currency pairs, you’d have to open an account with some obscure broker outside India, probably domiciled in Cyprus or Isle of Man, wire funds to the broker’s bank account, and trade based on the rate he relayed. There was no regulatory framework here, which made the whole affair a bit shady.

Now, none of that is required. The National Stock Exchange, under the full regulatory framework, has finally allowed cross-currency futures and options to be traded on the exchanges.

All the above-mentioned currency futures are available to trade on NSE. In this chapter, I’ll try and give you information on how these contracts are structured so that you can trade them effortlessly.

By the way, here is a quick trivia for you – according to  BIS survey , about 88% of the International Forex trades happen with USD on one side of which, 50% of the trades are on EUR USD, GBP USD, and USD JPY. So this should give you a sense of how massive these contracts are.

Anyway, let us brush through some basics before we proceed.

When you see a currency pair – say EUR/USD, the first currency is called the Base Currency and the 2 nd  is called the Quote Currency, and the currency pair is always quoted in the quote currency.

So for example, if you see the price of EUR/USD = 1.23421, then this means 1 EUR is equal to 1.23421 US Dollars.

Have a look at the table below –


Currency Pair | Base Currency | Quote Currency
--- | --- | ---
EUR USD | EUR | USD
GBP USD | GBP | USD
USD JPY | USD | JPY


Also, here is a typical order book, assume this is for EUR USD,


Bid Price (price at which you buy) | Ask Price (price at which you sell)
--- | ---
1.2431 | 1.2429
1.2429 | 1.2427
1.2425 | 1.2222
1.2420 | 1.2418
1.2418 | 1.2416


So if you wish to buy the EUR USD, that means you are willing to pay USD 1.2431 for 1 EUR. Likewise, if you want to sell, you are willing to sell 1 EUR to 1.2429 USD.




### 18.2 – The Futures Contracts

NSE has introduced both futures and options on these international currencies. I think it will be a while for the options will pick up steam; however, I think the near month futures will attract traders on an immediate basis.

The best part is the  lot size  across all the three currency pairs is fixed to 1000 units of Base currency. Here is how the lot size is fixed –


Currency Pair | Base Currency | Quote Currency | Lot Size
--- | --- | --- | ---
EUR USD | EUR | USD | 1000 EUR
GBP USD | GBP | USD | 1000 GBP
USD JPY | USD | JPY | 1000 USD


The lot size convention is important to remember, and you will understand why a little later. 
The tick/pip that will trade on the exchange is 0.0001 for EURUSD/GBPUSD and 0.01 for USDJPY.

There will be 12 monthly contracts available for trading. Near month contracts will expire 2 days before the last trading day of the month.




### 18.3 A Future Trade

The Profit and Loss for cross-currency contracts will be shown in the quote currency and not in INR like it is for normal equity, commodities and currencies traded in India. Let’s understand this with an example of all the 3 contracts.

The Profit and Loss for the position are converted to the INR using the Reference rate (released by RBI at 12.30 PM) at the end of the trading day. P&L for EURUSD and GBPUSD will be converted using USDINR and USDJPY with JPYINR rate.

For carryforward positions, the daily ‘marked to market’ settlement will be at the daily settlement price (weighted average price of the last half hour of trading)




### 18.4 The Options Contract

The options contract follow suit to USDINR options, that are already traded on the exchange. Here are the contract specifications.

Option expiry style  – European

Premium  – Quoted in the quote currency (USD for GBPUSD EURUSD and JPY for USD JPY)

Contract cycle  – There will be 3 monthly and 3 quarterly contracts. There will be three continuous monthly contracts, followed by a quarterly contract every 3 months.

Strikes available  – 12 In the Money, 12 Out of the Money, and 1 Near the money option. So this is roughly 25 strikes available for you to pick and choose from.


Underlying | Euro US Dollar | Pound – US Dollar | US Dollar – Japanese Yen
--- | --- | --- | ---
Strike Price Interval | 0.005 | 0.005 | 0.50





### 18.5 Expiry

All near-month contracts will expire 2 days before the last trading day of the month at 12.30 PM and will be settled at the final settlement price.

Let’s look at how the final settlement price is calculated. The cross-currency rate for the pair will be calculated using the reference rate of the individual currency quoted in INR.


Currency Pair | USDINR | EURINR | GBPINR | JPYINR
--- | --- | --- | --- | ---
RBI Reference Rate | 65.2261 | 79.5041 | 89.7055 | 0.6107


Futures contracts will be marked to market at the final settlement price, and cash-settled in T+2 days. 
The intrinsic value of all in-the-money contracts will be calculated at the final settlement price. Let us understand this with an example.


Final Settlement Price for GBPUSD | 1.3753
--- | ---
Put Strike Price | 1.3760
Exercise amount per contract(USD) | 0.7
RBI Reference rate for USD at 12.30 PM | 65.2261
Exercise Amount for the contract(INR) | ₹45.65827





### 18.6 Margins

All contracts traded will have an initial margin of 2% of the contract value and an extreme loss margin of 1%. Margin blocked will be in Indian Rupees, but the currencies will be traded in the quote currency (USD or JPY), the margin blocked will be converted to the quote currency. All trades placed before 02:00 PM will block margins as per the previous trading day’s reference rate, and trades placed after 02:00 PM will use the trading day’s reference rate.




### 18.7 Calendar Spreads

A futures position in one expiry month which is hedged by an offsetting position in a different expiry month is a calendar spread and the same is explained in detail in  this chapter . The margins blocked for the spread are fixed by the exchange and are


Spread duration | Margins
--- | ---
1 month | ₹ 1500
2 month | ₹ 1800
3 month | ₹ 2100
4 month | ₹ 2400


1. Cross-currency pairs are allowed to trade in NSE for the first time
1. Lot size of $1000 for EUR/USD, £1000 GBP/USD and $1,000 for USD/JPY
1. The pairs will be traded in quote currency but will be settled in Indian Rupees
1. Daily and Final M2M settlement will be based on the RBI reference rates.
1. Near month contracts will expire 2 days before the last trading day of the month at 12.30 PM



## 16.Natural_Gas

[Read more](https://zerodha.com/varsity/chapter/natural-gas/)



### 16.1 – History and background

I know this chapter on Natural Gas is coming in late; we should have discussed this much earlier, probably when we discussed Crude oil. Unfortunately, I missed doing this; but anyway, better late than never!

We will discuss Natural Gas in this chapter, and with that, we will conclude this module on Currencies and Commodities.

As usual, let us start our discussion with some background information, history, and how natural gas is extracted.

Natural gas is a naturally occurring, non-renewable, hydrocarbon gas mixture, primarily consisting of methane. Natural Gas is a fossil fuel and is used as an energy source. Natural gas has many applications in our day to day lives, including electricity (generation process), heating, and cooking. Besides, natural gas also has a wide variety of application in the fertilizer and plastics industry.

Apparently, way back in 1000, B.C., natural gas seeped from the ground, on Mount Parnassus in ancient Greece, caught fire and a flame was lit.

The Greeks believed this was the Oracle at Delphi, and a temple was built. This has to be the first-ever reference to Natural Gas. By the way, do you wonder how natural gas can seep through the land surface? Well, have a look at this picture of natural gas seeping from the ground and catching fire –

Source: Daily mail online, UK .

The Chinese discovered Natural Gas around 500 B.C., and they put this to better use – they started using bamboo “pipelines” to transport natural gas that seeped to the surface and to use it to boil seawater to get drinkable water.

However, the first commercialized application of natural gas occurred in Great Britain. Around 1785, the British used natural gas produced from coal to lighthouses and streets.

By now, you must have guessed that ‘Natural Gas’ is somewhere hidden deep below the earth’s surface. The question is – how and why is natural gas present there?

Millions of years ago, when plants and animals died, the remains were buried in sand and silt. The buried remains mixed further with sand and silt, got buried deeper, and decayed further. Pressure and heat converted these materials into coal, oil, and natural gas. This entire process panned across millions of years. In some places, natural gas moved into large cracks and spaces between layers of overlying rocks, while in other places natural gas just settled on the porous surface of rocks. Natural Gas, in its original form, is colourless, odourless, and tasteless. Now, practically this can be an issue – imagine if natural gas leaks and spreads, there is no way one can identify its presence in the atmosphere, which is a highly hazardous situation. Hence, producer of natural gas adds a substance called ‘mercaptan’, which gives natural gas a pungent, sulfuric odour, making it easier to detect in case of a leak.

The search for natural gas is quite similar to the search for crude oil. Geologists identify land parcels which are likely to contain natural gas. Sometimes, these land parcels are on the surface of the earth, and sometimes this can be offshore, deep inside, on the ocean floor. Geologists use the seismic surveys to identify the right place to drill to maximize the probability of finding natural gas. If the site seems promising, then an exploratory well is drilled to investigate further. Further, if the economics favour, then more wells are drilled, and the natural gas is extracted from the ground.

India is the 7th largest producer of natural gas in the world, accounting for nearly 2.5% of the natural gas production in the world. The bulk of the natural gas produced in India is used towards power generation, industrial fuel, and LPG. A large chunk is also used in the fertilizer industry as feedstock.

Needless to say, this discussion on Natural Gas – production and application can get quite vast, but I guess we are good to stop here, considering we are looking at Natural gas from a short-term trading approach.

We will move ahead to discuss the contract specification.

However, no discussion on Natural gas is complete without talking about the ‘Amarant Natural Gas gamble’. J




### 16.2 – Amaranth Natural gas gamble

Amaranth Advisors, established around 2000, was a US-based multi-strategy hedge fund operating from Greenwich, Connecticut. The fund had its interest in various hedge fund strategies ranging from convertible bonds, merger arbitrage, leveraged assets, and energy trading. By mid-2006, the fund had become a $9 Billion behemoth; this included the profits that were ploughed back to the fund. This positioned Amaranth as one of US’s top-performing hedge fund.

Amaranth’s energy trading desk picked up activity (and a lot of attention) when a star trader named Brain Hunter joined Amaranth’s trading team. Hunter had previously gained a lot of popularity for his energy trading strategies (mainly natural gas) at Deutsche Bank. Apparently, he made few millions of dollars as annual bonuses. His success continued when he joined Amaranth to head the energy desk – where he traded natural gas for obvious reasons. Hunter ensured profits rolled for Amaranth and its clients, so much so that Amaranth netted close to $2 Billion by April 2006.  Hunter’s trading skills quite seduced both Amaranth’s clients and management .

At this stage, I have to mention this – although an international commodity, natural gas trading was highly vulnerable. Any midsized hedge fund could easily corner the market by taking positions in a few thousands of contracts. This made Amaranth one of the largest hedge funds operating in the natural gas market.

Anyway, here is what happened post-April 2006 –

1. Hunter noticed a surplus inventory of natural gas in the US, which would drive the price of natural gas lower in the US.
1. Inventory of Natural gas, unlike oil, cannot be easily moved to cater to supply-demand pressures.
1. He also expected a harsh winter (or perhaps a hurricane) to ensue, which quite obviously would exert pressure on the supplies and push the price of Natural gas higher.
1. Apparently, Hunter had profited when hurricane Katrina and Rita had hit the US coastlines in 2005
1. He set up complex strategies at multiple points across multiple contracts to benefit from his staggering point of view. These were highly leveraged, speculative futures positions.
1. However, nature had a different game plan for Hunter and Amaranth – the possibilities of a hurricane diminished, supplies continued to pour.
1. Bulls started to unwind, triggering the price of Natural Gas below the psychological support of $5.5
1. This further triggered a panic sell leading to a single day fall of 20% Natural gas’s price.
1. Amaranth was hit quite hard, but Hunter’s conviction and reputation were still intact. They now borrowed money and doubled down on their positions.
1. The leverage was as high as 1 to 8, meaning for every 1 USD of their own capital, they had 8 USD in borrowed capital.
1. This didn’t stop natural gas prices to tank. Further, prices continued to crash, and along with the price Amaranth too crashed.
1. Amaranth was forced to liquidate and take a hit of USD 6 Billion, making it one of the largest hedge fund fiascos in the world.

If there is one key lesson you get to learn from the Amaranth’s episode, then it has to be (yet again) the importance of risk management. Risk management sits above all and has the authority to question every aspect of your trade.

Respect risk and risk respect you back, ignore it, and it will show you the corner.

For this reason, we will dedicate the whole of the next module to Risk and trading psychology.

For now, let us proceed to discuss the contract specs of Natural Gas.




### 16.3 – Contract specifications

The contact specs for Natural Gas are as below –

- Price Quote – Rupee per Million British Thermal Unit (mmBtu)
- Lot size – 1250 mmBtu
- Tick size – Rs. 0.10
- P&L per tick – Rs. 125/-
- Expiry – 25 th  of every month
- Delivery units – 10,000 mmBtu

Here is the snap quote of the Natural gas expiring in Feb 2017 –

The price, as seen here, is Rs. 217.3 per mmBtu. Therefore the contract value would be –

Lot size * price

= 1250 * 217.3

=  Rs. 271,625/-

The NRML margin is as shown below –

As you can see, the NRML (for overnight positions) margin is  Rs. 40,644/- . This makes it about 15% margin for NRML orders (probably one of the highest in the markets) and MIS margin is  Rs.20,322/-  which makes it about 7% for MIS positions.

The contract introduction and expiry logic is quite straightforward, have a look at the table below –

Every 4 months, a new contract is introduced. For example, the January 2017 contract was introduced in Oct 2016, and this contract expires on 25th of Jan 2017.

Here is something that you need to know – although, Natural Gas in an international commodity, its spot price in India is also dependent on how the domestic demand and supply situation pans out. However, the futures contract listed on MCX closely mirrors the Natural gas listed on NYMEX.

Have a look at the image below –

This is the graph of the Natural Gas futures contract on MCX overlaid with NYMEX – quite evidently, both the futures contracts move in unison. Given this, the following events have a significant impact on the natural gas prices on NYMEX and therefore MCX natural gas futures –

- Natural Gas inventory data  – an increase in inventory tends to lower the futures price and a decrease in inventory data tends to increase the futures price.
- US weather conditions  – the US is the biggest natural gas market, so US weather conditions really matter. A harsh winter in the US leads to more natural gas consumption (as people use natural gas to heat homes) and therefore the inventory is consumed rapidly, leading to an increase in price.
- Hurricane in the US  – Hurricane besides disrupting the weather conditions also tends to disrupt inventories. Hence, if you see a hurricane approaching the US coast, be prepared to go long in Natural Gas or at least, do not short natural gas contracts.
- The price of Crude oil  – Natural gas is not only a cleaner fuel compared to crude but also costs much lower. Historically, the two contracts are highly correlated, although the correlation is not holding up over the recent few months.  Check this!

So, next time you are trading natural gas, make sure to check how the sun is shining in the US!

And with this, folks, we will conclude this chapter on Natural Gas and this module on Currencies and commodities. We hope you liked reading this module as much as we enjoyed writing it for you.

Onwards to Risk and Trading psychology!

1. Natural gas occurs naturally and is found deep underground.
1. Natural Gas has been in use since ancient times.
1. The primary use of natural gas includes power generation, heating, cooking etc.,
1. India is the 7th largest natural producer of natural gas.
1. Lot size of natural gas is 1250 MMBtu, price quote if for 100 mmBtu.
1. P&L per tick is Rs.125/- per tick.
1. Natural gas futures on MCX mimic s the price movement of Natural gas on NYMEX.



## 14.Lead_&_Nickel

[Read more](https://zerodha.com/varsity/chapter/lead-nickel/)



### 14.1 – Lead – some history, some basics.

Would you believe, if I said that ‘Lead’, as in the metal Lead, played a role in bringing down the Roman Empire? Not Gold nor Silver, not diamonds or rubies – but lead, which is found in abundance.

Don’t worry; I don’t intend to make this a history lesson! However, lead and the Roman Empire are somewhat related, and I’d like to take this opportunity to share this interesting information with you.

I don’t intend to take too much of your time – here is an interesting perspective of how lead could have acted as a catalyst to the fall of the mighty Roman Empire.

The characteristics of Lead make it a unique metal –

- It’s a lustrous heavy metal.
- Highly malleable and ductile
- Poor conductor of electricity
- Quite resistant to corrosion
- Very dense
- Reasonably available

The lead was discovered and has been in use since prehistoric times. In fact, lead is the earliest metal discovered. Lead figurines found in Egypt that date back to 4,000 BC are testimony to this. Perhaps, the most popular use of lead and therefore the peak of lead production was during the Roman Empire. Romans used lead extensively, especially as water pipes, aqueducts, tank linings, cooking pots, and even as cosmetics.

In fact here is a picture on a Roman-era water pipe –

Source: Welcome Images, UK.

Apparently, during the Roman era, it was a considered ‘aristo’ to have water pipes running into the residence, directly plumbing water. The owner’s name was inscribed on the lead water pipe (you can notice this on the picture as well), to showcase the aristocracy. Talk about customized water pipes. ☺

Romans gradually paid the price for such extensive use of lead. Lead, unlike iron, has no use for the human body. It is toxic and carcinogenic. The extensive use of lead, especially as water pipes proved to be fatal. Lead poisoning eventually claimed the lives of many people – especially people from the higher strata, involved in decision making. This mass loss of lives is believed to have played a crucial role in the eventual collapse of the Roman Empire.

Well, there you go, that’s about it – I’m not a historian, so if you want to know more, I’d advise you to do your research on this, and here is an  interesting link  to get started.

Humans have evolved since the Roman era, and we have put lead to better use since then. Here is a wide variety of uses for lead –

- Solders
- The industrial lining of sinks, tanks, chambers
- Protective shield against radiation
- Lead-acid storage batteries (largest application of lead)
- The lead foil used for covering cables
- Pigments and compounds
- Shipbuilding

By the way, many people think of ‘lead’ and immediately imagine the pencil lead found at the tip of the pencil. Although the one found in a pencil is called a lead, it is not lead. It is graphite.

The supply-demand of lead has more or less been stable over the last few years, have a look at the data below –

Source:  www.ilzsg.org

In fact, the price of lead has more or less remained range-bound over these years. Have a look at the long term chart of Lead; do pay attention to the last few years –

If you intend to trade Lead futures on MCX, then it pretty much has to be a play on price action. I would personally refrain from setting up trades based on news or fundamentals for Lead.

However, if you do plan to set up trades based on fundamentals,  click here  to get all the fundamental data –




### 14.2 – Contract Specifications

Let’s take a quick look at the contract specifications. Like many other commodities listed on MCX, Lead to comes in two variants – Lead (big contract) and Lead Mini. Let me list down the contract specs of the big Lead first and then look into Lead Mini.

The specs are as below –

- Price Quote – Per kilogram
- Lot size – 5 metric tonnes (5000 kgs)
- Tick size – Rs. 0.05
- P&L per tick – Rs. 0.05 * 5,000 = Rs. 250/-
- Expiry – Last day of the month
- Delivery units – 10 MT

Here is the snap quote of the Lead contract expiring in Jan 2017 –

The price, as seen here, is Rs. 137.05 per Kg. Therefore the contract value would be –

Lot size * price

= 5,000 * 137.05

=  Rs. 685,250/-

The NRML margin is as shown below –

As you can see, the NRML (for overnight positions) margin is Rs. 80,482/-and MIS (for intraday) margin is Rs. 40,241/-.

This makes it about 11.7% for NRML and about 5.9% for MIS, clearly one of the highest margin requirements in the commodities market.

And now for the Lead Mini contract –

- Price Quote – Per kilogram
- Lot size – 1 metric ton (1000 kgs)
- Tick size – Rs. 0.05
- P&L per tick – Rs. 0.05 * 1,000 = Rs. 50/-
- Expiry –Last day of the month
- Delivery units – 10 MT

Here is the snap quote of Lead Mini, expiring in Jan 2017 –

The price, as seen here, is Rs.137.50 per Kg. The contract value, therefore, would be –

Lot size * price

= 1,000 * 137.50

=  Rs. 137,500/-

The NRML margin is as shown below –

As you can see, the NRML margin is Rs. 16,442/-and MIS margin is Rs. 8,221/-.

This makes it about 11.7% for NRML and about 5.9% for MIS. The margin for Lead Mini (for both NRML & MIS) is similar to the margins charged for a Lead big contract. However, because the lot size is smaller, the financial outlay towards margins is a lot lesser.




### 14.3 – Lead contract logic

MCX introduces new contracts every month, and each new contract introduced expires on the last day of the 5 th  month. For example, in January 2017, MCX will introduce May 2017 contract. The May 2017 contract will expire on the last working day of May 2017.

Note, the January 2017 contract would itself expire on the last working day of January 2017. Further, as you can see in the table below, the January contract would have been introduced 5 months prior, i.e., in September 2016.

This introduction pattern ensures that there is a current month contract available at any point in the system.

Have a look at the table below –

Although the contract is commissioned 5 months before expiry, it gains liquidity only in its last month. Therefore, it makes sense always to trade the current month contract. Remember, higher liquidity means tighter bid-ask spreads, tighter spreads means lower impact cost, lower impact cost means, less damage, especially when you place market orders.




### 14.4 – Nickel basics

Nickel and its alloys find extensive used in our day to day lives. Be it kitchenware, mobile phones, medical equipment, building, power generation, or even transport – Nickel is almost always used, either directly or as an alloy. The largest application of Nickel has to be in the manufacturing of stainless steel. In fact, about 65% of nickel produced is used towards the manufacturing of stainless steel.

Here is the ‘demand-supply’ situation of Nickel –

As you can see, Nickel production has overtaken demand. This probably explains why Nickel prices have been down over the year –

Again, my advice when it comes to trading Nickel would be the same – trade the price and not really the fundamentals.




### 14.5 – Contract Specifications of Nickel

No prize for guessing, Nickel to comes in two variants – Nickel (big contract) and Nickel Mini. Let me list down the contract specs of the big Nickel first and then look into Nickel Mini.

Nickel (big) specs are as below –

- Price Quote – Per kilogram
- Lot size – 250 Kgs
- Tick size – Rs. 0.10
- P&L per tick – Rs. 0.10 * 250 = Rs. 25/-
- Expiry – Last day of the month
- Delivery units – 3 MT

Here is the snap quote of Nickel, expiring in Jan 2017 –

The price as seen here is Rs. 685.50 per Kg. The contract value, therefore, would be –

Lot size * price

= 250 * 686.5

=  Rs. 1,71,625/-

The NRML margin is as shown below –

As you can see, the NRML (for overnight positions) margin is Rs. 16,924/-and MIS (for intraday) margin is Rs. 8,462/-.

This makes it about 10% for NRML and about 5% for MIS.

And now for the Nickel Mini contract –

- Price Quote – Per kilogram
- Lot size – 100 kgs
- Tick size – Rs. 0.10
- P&L per tick – Rs. 0.10 * 100 = Rs. 10/-
- Expiry – Last day of the month
- Delivery units – 3 MT

Here is the snap quote of Nickel Mini, expiring in Jan 2017 –

The price as seen here is Rs. 686/- per Kg. The contract value, therefore, would be –

Lot size * price

= 100 * 686

=  Rs. 68,600/-

The NRML margin is as shown below –

As you can see, the NRML (for overnight positions) margin is Rs. 6,694/-and MIS (for intraday) margin is Rs. 3,347/-.

This is consistent with the big contract – works out to 10% for NRML and about 5.0% for MIS.

The contracts are introduced every month, in the same way as Lead. I’d suggest you stick to the current month contract for trading as these contracts have the highest liquidity.

1. There are two contracts for Lead Futures; Lead and Lead Mini.
1. Lot size of Lead is 5000 MT, and Lead Mini is 1000 MT.
1. P&L per tick is Rs. 250 for Lead and Rs. 50 for Lead Mini.
1. ‘Demand supply’ has remained stable for Lead over the last few years.
1. There are two contracts for Nickel futures; Nickel and Nickel Mini.
1. Lot size of Nickel is 250 Kgs and 100 kgs for Nickel Mini.
1. P&L per tick is Rs. 25 for Nickel and Rs. 10 for Nickel Mini.
1. Nickel production has outstripped its demand.
1. It is advisable to stick to the current month futures of both Lead and Nickel.
1. It makes sense to look at price data to place short term trades in both Lead and Nickel.



## 13.Copper_&_Aluminium

[Read more](https://zerodha.com/varsity/chapter/copper-aluminium/)



### 13.1 – Sumitomo Copper scandal

If you are remotely connected to the commodity world, then this is one story you must have heard of – ‘The Sumitomo Copper Scandal’. This scandal unfolded in Japan, around 1995, but the severity of this event sent a ripple down the spine of the entire commodity trading world. So much so, that it’s talked about even today and it gets a special mention whenever the financial world talks about ‘rogue trading’.

Sumitomo Corporation is a huge conglomerate, incorporated and listed in Japan. The company is involved in general trading of goods and commodities. Back in the days, Sumitomo had a significant copper trading division. Sumitomo’s copper trading involved buying of copper in the spot market and physically storing them in its warehouses. The company also had a large exposure to copper futures on the London Metals Exchange (LME). Yasuo Hamanaka was Sumitomo’s chief ‘Copper Trader’. He was Sumitomo’s go-to man for anything related to Copper.

So here is what happened –

- Yasuo Hamanaka bought copper in physical form (spot market) and hoarded them in warehouses.
- He bought copper not just in Japan, but across the world and stored it at different locations/ports.
- Essentially, he was long copper in the spot market.
- His exposure in the spot market was around 5% of the entire world’s outstanding reserves. At that point, he was probably the only man on the planet with so much copper. This meant he could control the prices of copper, quite literally.
- At the same time, he also bought Copper Futures at LME.
- Every trader knew that Yasuo Hamanaka was copper bull, but nobody knew the extent of his exposure (as LME wasn’t publishing open interest data at the time).
- Whenever traders or trading firms shorted copper, Hamanaka would buy. He could buy because Sumitomo was cash-rich and funded these trades.
- Since he bought in such large quantities, copper prices went up.
- Remember, copper is an international commodity, and the price is market-driven (LME futures).
- So LME prices went up – short traders were squeezed, Hamanaka made profits on futures.
- Short traders would eventually default, which meant they had to deliver copper upon expiry.
- Invariably these traders would end up buying copper from Sumitomo at a premium, which meant Sumitomo minted crisp profits on their spot position as well.
- The profits snowballed, and Yasuo Hamanaka became the undisputed king of copper.

This set up functioned really well for over a decade. However, sometime around the early 90s, China upped its copper production, to an extent where they flooded the market with excess supply. Naturally, the prices started to cool off, and Yasuo Hamanaka started feeling the heat. His exposure was so large that it was difficult for him to offload the contracts (especially since he was doing most of the buying)! He went to the extent of borrowing funds to maintain his long positions. Remember, these were all leveraged positions, and when you have super large quantities of any leveraged positions, a small move against you can result in massive losses.

This is exactly what happened – copper prices crashed, and Yasuo Hamanaka’s copper kingdom collapsed. Losses piled to the extent that the Sumitomo Corporation filed for bankruptcy. The estimated losses were close to a whopping $5 billion, in 1995!

What followed next were the routine blame games, lawsuits, denials, and all the resulting drama. However, the key take away from this story is the importance of  risk management . We will talk about this soon in a separate module altogether.

Anyway, that was that; let’s move ahead to copper basics.




### 13.2 – Copper Basics

Copper is a base metal, highly traded on MCX. A metal is classified as a ‘base’ if it is not precious like gold and silver.

The daily traded value is approximated at INR 2,050 crores across an average of 55,000 lots. So, as you can imagine, copper on MCX is a very liquid contract. The liquidity matches that of crude oil and gold.

Copper is an exciting metal. It is the 3 rd  most consumed metal after steel and aluminium. The price of copper (much like aluminium) is directly dependent on global economics. You may know, copper is one of the best conductors of electricity, and therefore, copper is the preferred choice of metal in electrical wires. In fact, did you know, at the core of Tesla’s hybrid car there is a copper motor as opposed a regular engine motor (permanent magnet motor)?

Check this  article.

Of course, apart from this, copper finds its application in a whole host of other things such as –

- Building and construction
- Copper alloy moulds
- Electrical and electronics
- Plumbing solutions
- Industrial uses
- Telecom
- Railways

But my favourite application of copper has to be this –

Can you guess what this is? If you can, then probably you and I have a common interest. J

The demand – consumption of copper, showcases similar trends as aluminium. Have a look at this snapshot –

Source: Hindalco annual Report (2015-16)

In 2015, the global demand for refined copper was 24 million tons; half of this demand was from China and Japan. The supply was higher than the demand (look at the last two bars from right), and thanks to the recent commodity glut, the price has considerably cooled off over the last few years.

It’s good to know fundamentals, but like any other commodity; I’d rely on charts to trade copper. Given this, let’s focus on the contract specifications. Of course, both aluminium and copper have two contracts – the big copper contract and its mini version. Let me list down the contract specs of the big copper contract.

- Price Quote – Per kilogram
- Lot size – 1 metric ton
- Tick size – Rs.0.05
- P&L per tick – Rs.0.05 * 1000 = Rs.50/-
- Expiry –Last day of the month
- Delivery units – 10 MT

Here is the snap quote of copper, expiring in Feb 2017 –

The price as seen here is Rs.389.1 per Kg. The contract value, therefore, would be –

Lot size * price

= 1000 * 389.1

=  Rs.389,100/-

The NRML margin is as shown below –

Rs.30,544/-, which works out to 7.8%. MIS margin is half this amount.

The Copper Mini contract has a lesser lot size, therefore lesser P&L per tick, and lesser margins.

- Price Quote – Per kilogram
- Lot size – 250 Kgs
- Tick size – Rs.0.05
- P&L per tick – Rs.0.05 * 250 = Rs.12.5/-
- Expiry –Last day of the month
- Delivery units – 10 MT

I’d suggest you look at technical analysis to trade copper, and commodities in general. They work really well on liquid commodities such as copper. So essentially, you need to know the contract details to get started.

Onwards to Aluminium!




### 13.3 – Aluminium Basics

Remember, our objective here is to understand basic information. We are not going deep into the subject, simply because most of us would be trading this commodity with an average holding period of not more than 2-3 days. When this is the objective, it makes more sense to spend time on the price dynamics rather than the fundamentals. Hence, I’ll stick to basics, and for ease of reading, highlights of the chapter are presented as bullet points. Post this; we will dig deeper into contract specifications.

Talk about Aluminium and chances are you will think about that wafer-thin, silvery foil, which wraps your leftover food in your refrigerator. Well, Aluminium’s applications go beyond that.

Here are a few things you need to know (have collected this information from various online sources) –

1. There is plenty of Aluminium (supply is not an issue) – roughly 8% of the earth’s crust is made up of Aluminium. This makes aluminium the third most abundant, after oxygen and silicon. 
 The fact that aluminium resists corrosion makes it a very desirable metal. 
 Aluminium manufacturing is power-intensive – it takes a whopping 17.4-megawatt-hour of power to manufacture 1 metric ton of Aluminium. Check this –
1. There is plenty of Aluminium (supply is not an issue) – roughly 8% of the earth’s crust is made up of Aluminium. This makes aluminium the third most abundant, after oxygen and silicon.
1. The fact that aluminium resists corrosion makes it a very desirable metal.
1. Aluminium manufacturing is power-intensive – it takes a whopping 17.4-megawatt-hour of power to manufacture 1 metric ton of Aluminium. Check this –

This is power and fuel cost of Hindalco (the leading manufacturer of Aluminium), and as you can see, nearly 10% of the expense is on power and fuel. Remember, Hindalco has its own captive power units. So, I’m guessing this power is consumed over and above what Hindalco generated internally.

1. That said, recycling aluminium is a power-friendly affair. It requires just about 5% of the power to recycle.
1. Aluminium has a wide range of applications – right from a smartphone to a Boeing 747. Did you know you need approximately 70,000 kilograms of aluminium is used up in a single Boeing 747?
1. Aluminium is also used up in other industries – automotive, building & construction, defence, electrical, electronic, pharmaceuticals, white goods, etc.,
1. Aluminium is one metal that has abundant supply and demand.
1. Aluminium prices on MCX closely follow the international prices of aluminium which is traded on the London Metal Exchange (LME).

In fact, here is a snapshot which gives you the trends in production, supply, and the average price of aluminium on LME –

Source: Hindalco Annual Report (2015-2016)

This is a fascinating chart; in fact, based on this chart alone, a few basic trading principles can be formulated. Let’s break this graph up in smaller bits –

1. The global production (blue bar) of aluminium in 2015 stands at 56 million tones. This represents a growth of about 4% from the previous year.
1. The global production nets a CAGR of 6% over the last 8 years.
1. The demand (yellow bar) on the other side matches up to global production – this implies that there are no supply-demand disruptions.
1. In fact, demand and supply have remained more or less stable over the years.
1. The price of aluminium over the last few years has declined. Its averages to $1,500/- per ton, which is a decline from its recent peak of $2,500/- per ton. You must have heard about the global commodity glut. Clearly, the Chinese demand plays a key role in the aluminium’s global pricing.
1. The Indian demand, on the other hand, is better than the global demand (in percentage terms). Hindalco, in its annual report, claims the demand for aluminium in India is about 2 million tonnes. Much of this demand is met by importing aluminium.

I guess these basic points should help you get started on Aluminium fundamentals. However, I’d be happy to trade aluminium based on technical analysis, simply because of my short holding period, usually not exceeding a few trading sessions.

So, with this, I’d like to move ahead and discuss contract specifications, which will help you understand the practicality of trading aluminium on MCX.




### 13.4 – Aluminium contract specifications

As you may have guessed, there are two main aluminium contracts to trade on MCX. They are the big aluminium contract and the aluminium mini contract. Clearly, both of them differ on the lot size and therefore contract value. We will discuss the big aluminium contract first.

The daily average traded value of big aluminium is roughly about INR 375 Cr. On a good day, the volume could reach a little over INR 500 crores.  As you may have realized, the value is not as high as commodities such as gold and crude oil.

The contract details are as follows –

- Price Quote – Per kilogram
- Lot size – 5 metric ton

At this point, you may have realized that this is a huge contract. A  metric ton is 1000 kilograms, so 5MT makes it 5000 kgs. Since the price is quoted per kg, and the lot size is 5000 kgs, each tick will cause a P&L of Rs.5000/- PROVIDED the tick is Rs.1/-. Since this would be very large, especially for retail trading, MCX has reduced the tick size to the lowest possible value, i.e. Rs.0.05

- Tick size – Rs.0.05
- P&L per tick – Rs.0.05 * 5000 = Rs.250/-
- Expiry –Last day of the month
- Delivery units – 10 MT

Let’s understand this information in better detail. Aluminium on MCX is quoted on a per kilogram basis. Have a look at the image below; this is the snapshot of Aluminium’s market depth –

As you can see, the aluminium expiring in Dec 2016 is trading at Rs.118.4/- per kg/

The  lot size is 5 MT (5000 kgs) , which means to say that if you want to buy (or go long) on Aluminium, the value of such a contract will be –

Lot size * price quote

= 5000 * 118.4 (offer price to go long)

=  Rs.592,000/-

The price movement in aluminium is 0.05, which means, if aluminium moves from 118.4 to 118.45, the profit will be –

118.45 – 118.4

=0.05

=0.05*5000

=Rs.250/-

What about the margins? Have a look at the following snapshot –

The NRML margin charged is Rs.33,719/- which works out to 5.6%. However, MIS margin is almost half of the NRML margin.

Here are the contact details of Aluminium mini –

- Price Quote – Per kilogram
- Lot size – 1 metric ton
- Tick size – Rs.0.05
- P&L per tick – Rs.0.05 * 1000 = Rs.50/-
- Expiry –Last day of the month
- Delivery units – 10 MT

The contract value is quite small –

= 1000 * 118.4

=Rs.118,400/-

NRML margin is Rs.6,779/-,, which is 5.7%. MIS margin is much lesser at Rs.3,389 or just about 2.8% of the contract value.

P&L per tick is Rs.50/-, a value which is much ‘deal-able’ while trading.

I guess this info is good enough to get started on trading with Aluminium. Frankly, you need to look at the chart, develop a point of view, and place trades based on the chart pattern. If you are keen on digging deeper into aluminium, I’d recommend you spend time reading up on  www.world-aluminium.org  and  www.aluminium.org.

1. Both Copper and Aluminium are base metals.
1. Aluminium is found in abundance (next only to silicon and oxygen).
1. The demand-consumption of aluminium and copper seem to have some equilibrium.
1. The prices of both aluminium and copper have declined over the years.
1. The prices of aluminium and copper on the London Metal Exchange (LME) act as a reference price for these international commodities.
1. Both copper and aluminium have two contracts – the big one and mini.
1. The contracts vary in lot size and therefore contract values and margins.



## 15.Cardamom_&_Mentha_Oil

[Read more](https://zerodha.com/varsity/chapter/cardamom-mentha-oil/)



### 15.1 – Monsoon blues

Back in the day, I traded stocks with ICICI Direct. Around the same time, MCX had just started operations, and ICICI was one of the first brokers to get a membership.  MCX was aggressively campaigning and were conducting workshops and seminars to educate market participants, hoping to get more activity on the exchange. I was in the discovery phase, curious to know about everything tradable in India. I attended some of these sessions and, for some reason, believed I would be far more efficient trading an alternate asset like commodities as opposed to trading equities.

I was quite excited to start trading commodities. I quickly showed up at my broker’s office with all the necessary documents to open my commodities trading account. To my surprise, I was one of their earliest clients from Bangalore to open an account with MCX. It took about 12 days (that seemed like an eternity) to set up my account with MCX.

Finally, my broker called me to say I’m good to go live and place trades the next day. I actually took a day off from work to trade commodities! I was thrilled to put my new found commodities knowledge (although half-baked) to practice.

I chose to trade ‘Pepper futures’. Though the rationale behind this choice eludes memory, Pepper futures it was!

So, my first commodities trade was ‘Long pepper’, 10 lots (I guess it was a 1 metric tonne contract), I don’t remember the exact price, but I suppose it was somewhere around Rs.7,500/- per quintal. I had bet my entire trading account on Pepper futures!

What followed through was quite predictable. To my dismay, Pepper hit its 52-week low over the next two days, I brought in additional capital, but Pepper continued to crash, as did my account until there was nothing left in it.

Dejected, I did some post-mortem analysis to figure out what went wrong and realised the monsoons were expected to be great in Kochi, which would result in an outstanding harvest of Pepper.

Only now did I understand that one really needs to have some understanding of monsoons and harvest cycles before trading agri commodities. Unfortunately, I learnt this lesson at a very high price. No wonder I remember it to this day. J

Anyway, considering this, we will spend a little time understanding a bit of this topic, and hopefully, you will not make the same mistakes I did in the past.

And, just so you know – right after I burnt my trading account with my first commodities trade, what happened next is easy to guess – Pepper futures bottomed out and rallied nonstop to Rs.12,500/- per quintal!




### 15.2 – Understanding Rainfall

The Indian economy’s dependence on agriculture has reduced over the years. A few decades ago, agriculture contributed to over 30% to our GDP, but this has now reduced to about 10%. However, agriculture and allied services are still the largest employers in India. This perhaps explains why the Central Government most often takes a populist stance when it comes to reforms and policies in this sector.

Have a look at the snapshot below; this gives you an idea of which sector contributes how much to the Indian economy –

This data is published by RBI and is freely available on the RBI website. The data is available for as long back as the 50s. I’ve just manipulated the data to show the percentage contribution of each sector. As you can see, the percentage contribution of agriculture has declined over the years, while the % contribution of services (mainly software and allied services) has steadily increased.

But, like I just mentioned, agriculture is still the largest employer in India, and this entire industry and workforce is dependent on how the yearly rainfall pans out. This is quite natural as 2/3rd of India’s arable land is rain-fed.

There are two main rainfalls seasons (monsoons) in India –

1. The Southwest Monsoon (principal rainfall season), and
1. The Northeast Monsoon

I will not get into the technicalities of how these spells are caused, clearly not my area of expertise. However, these are the things you need to know about these two seasons –

1. The south-west monsoon occurs from southern India and covers all the regions up to central India. This spell is expected to start around June/July through September/October.
1. The Northeastern monsoon covers northeastern India, North India, Himalayas, and the western parts, and a large part of Tamil Nadu. This spell occurs from early December through March.

During each of these monsoon seasons, seeds are sown and crops harvested. Based on how good or bad the monsoon is, the harvest can be estimated.

- Crops sown during the south-west monsoons is called the  Kharif Crop  (it is even referred to as the monsoon crops). These are mainly pulses, millets, rice, urad dal, moong dal, cotton etc. The sowing of Kharif crop takes placed around end May-early June (before the south-west spell), and harvesting is done post the monsoons, i.e. around October.
- Crops sown during the northeast monsoons is called the  Rabi Crop  (it is even referred to as the winter crops). Rabi crops are mainly  wheat , gram, coriander, mustard, oats etc. The sowing of rabi crop occurs at the onset of winter, and harvest of Rabi crops are around end April.

Rice and Wheat are India’s staple, contributes close to 40% of the food grain production, and hence plays a crucial role in India’s food security. Do note; they are harvested and sown in Karif and Rabi season respectively.

The progress of sowing and harvesting is continuously monitored and is reported across leading publications. Have a look at this –

This one reports the progress of Rabi crops –

In fact, with whatever basic knowledge we have gathered so far, I’d request you to read this  news piece .

The idea is to make sure; we understand what is being discussed here and relate to the news article. If you are a serious agri trader, I’d expect you to continuously keep track of such news pieces and strategies your trades.

The following agri commodities are available to trade on MCX –

1. Cardamom
1. Castor Seed
1. Cotton
1. Crude Palm Oil
1. Kapas
1. Mentha Oil

Of all these agri commodities, I’d recommend you trade Cardamom and Mentha Oil, simply because of the liquidity reasons.

Let’s discuss these two commodities. Also, note that agri commodities  (especially the Indian agri commodities) are traded till 5:00 PM.




### 15.3 – Cardamom

Cardamom is a spice mainly grown in Southern India (Karnataka & Kerala). The cardamom variety grown in India is called ‘Small Cardamom’. India is the 2 nd  largest producer and 1 st  largest consumer of Cardamom, while Guatemala is the world’s largest producer of Cardamom. The Cardamom produced by Guatemala is mainly for export.

Cardamom, as you may know, is mainly used in India sweets. It also has few therapeutic applications like skin and dental care – not that savouring sweets are less therapeutic. ☺

Cardamom is a Kharif crop; the demand-supply dynamics mainly depends on –

1. The southwest monsoons
1. The quality – flavour, colour, size, and aroma of the harvest
1. Production parameters – like inset attack on plantation
1. Stock available at both India and Guatemala
1. Domestic consumption patterns (although this is quite steady over the years)

Let’s take a quick look at the contract specifications. Unlike other commodities listed on MCX, Cardamom does not have two variants. So don’t go looking for Cardamom and Cardamom mini.

The supply and demand for cardamom is kind of steady. Coincidentally, I read a news piece today related to this, and I thought it would be interesting to shares the same here –

The contact specs for Cardamom are as below –

- Price Quote – Per kilogram
- Lot size – 100 kgs
- Tick size – Rs. 0.10
- P&L per tick – Rs. 10/-
- Expiry – 15 th  of every month
- Delivery units – 100 Kgs

Here is the snap quote of the Cardamom expiring in Feb 2017 –

The price, as seen here, is Rs. 1,564 per Kg. Therefore the contract value would be –

Lot size * price

= 100 * 1564

=  Rs. 156,400/-

The NRML margin is as shown below –

As you can see, the NRML (for overnight positions) margin is Rs. 16,237/-. This makes it about 10.5% margin for NRML orders.

Further, as you can notice, the MIS margin for Cardamom is not available. In fact, there is no MIS margin for any agri commodities. There is a reason for this – agri commodities are quite volatile, and they tend to hit the circuit limits frequently, and therefore unwinding the position by the end of the day would not easy. For this reason, a trader is better off trading NRML for intraday as well.

Here is the contract introduction table of Cardamom –

As you can see, every month, a six-month futures contract is introduced. For example, in January, June futures are introduced. Hence, June futures will continue to stay in the system till the 15 th  of June (remember, expiry is on 15 th  of every month). For all practical purposes, it makes sense always to trade the current month contract for liquidity.

For example, as I write this article (it is 17 th  Jan 2017), if I were to trade Cardamom, I’d opt to trade Feb 2017 Cardamom contract (Jan 2017 contract expired on 15 th  Jan).




### 15.4 – Mentha Oil

Mentha is an aromatic herb which is used in its raw form for Indian cooking.  Besides, it distilled and filtered to produce the Mentha oil. It is Mentha Oil. It is traded on MCX. Mentha oil is used in food, pharmaceutical, perfumery, and flavouring industry.

Mentha oil is also imported to countries such as the US, China, and Singapore. This clearly indicates that Mentha Oil contract is sensitive to fluctuations in USD-INR rates. Besides this, other factors such as rainfall, insect attack, and crop acreage also exert its influence on the contract.

The contact specs for Mentha Oil are as below –

- Price Quote – Per kilogram
- Lot size – 360 kgs
- Tick size – Rs. 0.10
- P&L per tick – Rs. 36/-
- Expiry – Last day
- Delivery units – 360 Kgs

Of all the things listed in India, probably Mentha Oil is the only asset which has Rs.36/- P&L per tick ☺

Here is the snap quote of the Mentha Oil, expiring 2017 –

The price, as seen here, is Rs. 1,023.2 per Kg. Therefore the contract value would be –

Lot size * price

= 360 * 1023.2

=  Rs. 368,352/-

The NRML margin is as shown below –

As you can see, the NRML (for overnight positions) margin is Rs. 29,893/-. This makes it about 8.5% margin for NRML orders. For reasons mentioned earlier, there is no MIS margin for Mentha Oil as well.

The contracts are introduced every month, 5 months forward. As usual, I’d suggest you stick to the current month contract to trade.

1. Agriculture as an industry contributes close to 10% to the Indian economy, but it is still the largest employer in India.
1. India is still very dependent on rainfall when it comes to agriculture.
1. There are two main rainfalls – Southwest monsoon (principal rainfall) and northeast monsoon.
1. Crops sowed and harvested in southwest monsoon is called Kharif. Rice is a major Kharif crop.
1. Crops sowed and harvested in northeast monsoon is called Rabi. Wheat is a major Rabi crop.
1. Agri commodities are traded till 5:00 PM on MCX.
1. India is the largest consumer of cardamom and 2 nd  largest producer of Cardamom, stands 2 nd  to Guatemala in production.
1. Demand supply for cardamom is quite stable.
1. MIS margin is not available for agri commodities.
1. Mentha oil is distilled and filtered from Mentha leaves.



## 12.Crude_Oil_(Part_3),_the_crude_oil_contract

[Read more](https://zerodha.com/varsity/chapter/crude-oil-part-3-the-crude-oil-contract/)



### 12.1 – The contract

Crude oil is the most actively traded commodity on MCX. The combined value of crude oil (across all contracts) traded on MCX, on average, exceeds Rupees 3000 crores daily. This translates to roughly 8500 barrels of crude oil traded daily. Active market participation in crude oil comes in from both corporate and retail individual traders. On any given day, you can expect both upstream companies (ONGC, CAIRN, Reliance) and downstream companies (IOC, BPCL, HPCL) placing orders on MCX. If I were to guess, these institutional orders are mainly to hedge their exposure in the spot (physical) market. On the other hand, retail traders mostly speculate on crude oil prices.

I’d encourage you to check the  MCX ‘Bhav Copy’.  This gives you a perspective on a particular contract’s liquidity and volume.

There are two main Crude oil contracts which are traded on the MCX –

1. Crude Oil (the big crude or the main contract)
1. Crude Oil Mini (the baby version)

In this chapter, we will learn how these contracts are structured – right from expiry to margins to P&L per tick.




### 12.2 – Crude Oil, the big contract

With an average daily traded value of Rupees 2500 Cr, the big crude oil contract is certainly one of the biggest contracts (value-wise) that gets traded on MCX.  Without wasting much time, let’s get straight to the contact details of the big crude.

The contract details are as follows –

- Price Quote – Per barrel
- Lot size – 100 barrels
- Tick Size – Rs.1/-
- P&L per tick – Rs.100/-
- Expiry -19/20 th  of every month
- Delivery units – 50,000 barrels
- Physical Delivery – Mumbai / JNPT Port

Let’s understand this information in better detail. The crude oil on MCX is quoted on a per-barrel basis (one barrel is equal to 42 gallons or about 159 litres). Have a look at the image below; this is the snapshot of Crude oil’s market depth –

As you can see, the Crude Oil contract expiring on 19 th  Dec 2016 is trading at Rs.3197/- per barrel, quite obviously as we know price quote is  on a per-barrel basis .

The  lot size is 100 barrels , which means to say that if you want to buy (or go long) on crude oil, the value of such a contract will be –

Lot size * price quote

= 100 * 3198 (offer price to go long)

=  Rs.319,800/-

This is the contract value of the crude oil, but what about the margins? Unlike the margins on other commodities, the margin on crude oil is slightly higher. If you wish to carry the position forward overnight, then the margin requirement is roughly 9%.

This means, 1 lot of crude oil (100 barrels) requires a margin deposit of –

9% * 319800

= Rs.28,782/-

In fact, you can use the  margin calculator  on Zerodha’s website to get a ready reference of approximate margin requirement. Here is the snapshot of the same –

The margin requirement under NRLM (for an overnight position) is Rs.29,114/-, assuming the price of Crude is Rs.3,253/-. However, if you wish to make an intraday trade using MIS, then the margin requirement is roughly 4.5%. Clearly, as you can see from the snapshot above, margin under MIS is just Rs.14,557/-.




### 12.3 – Selecting the right contractor to trade (expiry logic)

New crude oil contracts are launched every month. The newly introduced crude oil contracts have an expiry scheduled six months later. For example, the contract introduced in November 2016, will have its expiry in 6 months, i.e., May 2017. MCX puts up this information regularly in their circulars, but I find it a little confusing to interpret the expiry table. Here is what MCX intends to convey –


Current month | Contract Introduced | Expiry on
--- | --- | ---
November 2016 | May 2017 | 19
December 2016 | June 2017 | 19
January 2017 | July 2017 | 19
February 2017 | August 2017 | 21
March 2017 | September 2017 | 19
April 2017 | October 2017 | 18
May 2017 | November 2017 | 17


And this is how the table in the circular reads –

So, as I write this, its November 2016, which means to say the November 2016 contract must have been introduced in May 2016.

Anyway, the point to note here is this –

1. Every month a new contract, 6 months in advance is launched (long-dated contracts).
1. These contracts expire on or around 19 th  of the expiry month, 6 months later.
1. Given this, each contract lasts for 6 months in the market.

For active trading, always choose the near month contract. Now, assuming today is November 5 th  2016, I’d choose the November 2016 contract expiring on 19 th  November to trade. Maybe around 15 th  or 16 th  November (as we progress closer to expiry), I’d shift to the December 2016 contract. The reason for this is simple. Liquidity is highest for the current month contract (November 2016 in this example). Liquidity picks up in the next month’s contract (i.e. December 2016) as we move closer to the expiry of the current month’s contract.

All the other contracts, even though exist in the market, pretty much lead a meaningless life, until they become current.




### 12.3 – The Crude Oil Mini contract

The Crude Oil mini is quite a favourite amongst the trading community. The reason for this is straightforward –

1. The margin required is lesser
1. The P&L per tick is a lot lesser –  did you know people prefer to see lesser loss than seeing higher profits?

Here are the contract details –

- Price Quote – Per barrel
- Lot size – 10 barrels
- Tick Size – Rs.1/-
- P&L per tick – Rs.10/-
- Expiry -19/20 th  of every month
- Delivery units – 50,000 barrels
- Physical Delivery – Mumbai / JNPT Port

Have a look at the quote below –

The Crude Oil Mini, December future is trading at Rupees 3,210/- per barrel. The contract value for this would be –

Rs.3,210 * 10

= Rs.32,100/-

The margin required in percentage terms is a little higher – around 9.5% for NRML and 4.8% for MIS.

This puts the margin requirement for NRML at Rs.3,049/- and Rs.1,540/- for MIS. Clearly, way lower compared to the margin required for the big Crude oil.

Except for lot size, and therefore the margins, the other remaining features don’t change for both the crude oil contract contracts.




### 12.4 – Crude Oil Arbitrage

Have a look at the image below –

The first part of the snapshot captures Crude Oil December future (big crude contract) along with its market depth. The second part of the snapshot captures the Crude Oil Mini December contract, along with its market depth.

All else equal, both these contracts at the same time should trade at the same price. They are not supposed to trade at different prices, since the underlying is the same. In fact, this is what we notice here – both Crude oil contracts trade at Rs.3,221/-.

But what if they don’t?

Let’s say, for whatever reason, both these contracts trade at different prices? For example, Crude Oil is trading at Rs.3,221/- and the Crude Oil Mini is trading at Rs.3,217/-. Do we have a trading opportunity here? Yes, of course, we do have an arbitrage opportunity here, and here is how we can trade this.

Crude Oil – 3221

Crude Oil Mini = 3217

Risk free profit potential (arbitrage) = 3221-3217 = 4 points

Trade Setup  –

We know the rule of thumb in any arbitrage trade – always buy the cheaper asset and sell the expensive one. So in this case –

We buy the crude oil mini at 3217 and sell the crude oil at 3221. However, please note, for a perfect arbitrage opportunity, we should always trade similar values.

The contract value of Crude oil is – 3221 * 100 = Rs.3,22,100/-

The contract value of Crude oil mini is 3217 * 10 = Rs.32,170/-

Given this, one should buy 10 lots of Crude oil mini at 3217 and sell 1 lot of crude oil at 3221. By doing so, the contract sizes are similar, and therefore the arbitrage holds.

Once we execute this trade (efficiently), the arbitrage profit is locked in. Remember, in all arbitrage cases, and the price will converge to a single price point. So assume the price finally converges to 3230 –

We make +13 points on the crude oil mini, and we lose -9 points on crude oil, and on a net basis, we make 4 points.

In fact, irrespective of where the price heads the 4 points are guaranteed.

It is unlikely you will find such sweet opportunities daily, and even if you do, algorithms grab them. However, I have occasionally witnessed such opportunities lasting for several minutes.

So do watch out for such trading opportunities, and if it indeed comes by, you know what to do.

This brings us to the end of our conversation on Crude Oil. Over the next few chapters, we will focus our attention on ‘Metals’.

1. There are two crude oil contracts available – Crude Oil and Crude Oil mini.
1. Both the contracts vary in the lot size. Lot size of the big crude is 100 barrels while the crude mini’s lot size is 10 barrels.
1. Price quote is on a per-barrel basis.
1. Every month new crude oil contracts are introduced which expire 6 months later.
1. Expiry is on the 19 th  of every month.
1. The current month contract attracts maximum liquidity.
1. Arbitrage between the two crude contracts can be executed – but one has to ensure contract values are similar.



## 19.Government_Securities

[Read more](https://zerodha.com/varsity/chapter/government-securities/)



### 19.1 – The new beginning

In a fascinating new development, NSE in collaboration with RBI has recently made it possible for retail investors to start investing in Government Securities, mainly the long-dated bonds and the treasury bills (T-bills).

These were products which were available only to banks and the large financial institution, but now we can invest in them and take advantage of attractive and guaranteed returns. However, since these are new financial instruments (at least to the retail participants), understanding the nuances before investing is important. For this reason, we have put the following conversational FAQs with a hope that you will be able to figure out the basics.

Do read on and post your comments below.




### 19.2 – FAQs on G-Sec

What am I investing in?

You are investing in Bonds/T-bills issued by the Government of India. Since the Government of India backs these, these are virtually risk-free investments. The guarantee from the Government is also called ‘Sovereign Guarantee’.

What are bonds/T-bills?? Tell me more.

Whenever you and I need money, we go to the bank to avail a loan. Against this loan, we promise to pay the bank periodic interest and also return the money after a certain amount of time. This is common practice, where the interest and principal are repaid to the bank.

Likewise, the Government of India also needs money to build roads, bridges, dams, hospitals, etc. When they run short of money, they approach their bank for a loan, which is the RBI. The RBI, in turn, auctions the loan in the form of bonds/T-bills that you can purchase. Essentially, you are lending a part of the overall loan the government is seeking.  Against this loan, the Government of India, promises to pay periodic interest and also repay the principal at the end of the tenure.

The loan which the government intends to repay within a year is called the Treasury Bills or T-bills. Loans which the Government intends to repay over many years are called the Bonds.

What should I choose? T-Bills or Bonds?

Both are great investments if you seek the safety of your capital. There are a few easy to understand variables that you need to look at before deciding on an investment in these two G-Sec instruments.

Variables like what? Start with T-bills, please.

There are three T-bills variants, and they vary based on the maturity period. They are 91 days, 182 days, and 364 days. T-bills do not carry an interest component; in fact, this is one of the biggest difference between T-bills and Bonds. T-bills are issued at a discount to their true (PAR) value, and upon expiry, it’s redeemed at its true value.

Woah! That sounds complex. Give me an example, please!

Ok, consider a 91-day T-bill. Assume the true value (also called the Par value), is Rs.100. This T-bill is issued to you at a discount to its par value, Say Rs.97. After 91 days, you will get back Rs.100, and therefore you make a return of Rs.3. Think of it; this is as good as buying a stock at Rs.97 and selling it after 91 days at Rs.100.  The only difference is that this is a guaranteed transaction, meaning, there is no risk of you selling below 100 (or above 100).

This sounds quite straightforward, is there anything else I need to know about T-bills?

That’s it pretty much. You need to remember that t-bills are issued at a discount to par, and upon maturity, you get the Par value. Of course, you can get a little technical and measure the yield of this investment if you want.

I’m all ears, let’s get technical!

Yield essentially measures the return on your investment on an annualized basis. After all, all investments should be measured by its returns on an annualized basis. So if you have made 3 bucks over 91 days on investment of Rs.97, then at this rate, how much would you have made every year?

The formula is –

Yield = [Discount Value]/[Bond Price] * [365/number of days to maturity]

= [3/97]*[365/91]

= 0.0309*4.010989

= 12.4052%

So in other words, the T-bill offers a return on investment of 12.4052%, but since you held it for 91 days, you will enjoy this return on a pro-rata basis.

Typical 91-day yields are around 6-7.5%. Needless to say, the higher the yield, the better it is.

What happens upon maturity of a T-bill?

Upon the maturity, the Government debits the T-bill from your DEMAT automatically, this is called ‘Extinguishment of Securities’ and the par value gets paid to the bank account linked to your DEMAT account.

Is that all about T-bills? Is there anything else that I need to know?

Nope, that’s it. You are all good to start 🙂

Alright, tell me how the bonds work.

Bonds differ from T-bills on 2 counts. Bonds have long-dated maturities, and they pay interest twice a year.

Sounds, interesting. Can you give me an example?

Every bond issued will have a unique name or symbol. The symbol contains all the information you’d need. For example here is a symbol –  740 GS 2035 A , and here is what this really means –

Annualized interest  – 7.40%

Type  – Government Securities (GS)

Maturity  – 2035

Issue  – ‘A’  means it’s a fresh issue (don’t worry much about this, be aware that this is NSE’s internal nomenclature for their own book-keeping )

This issue is expiring in 2035 or 17 years from now (we were in 2018). If you were to invest in this bond, you would receive a 7.4% interest every year until its maturity in 2035. Please note, the interest will be paid semi-annually so that you will get 3.7% interest twice a year. Finally, upon maturity, you will also get back your principal amount.

Here are few more government security (GS) symbols –


Symbol | Annualized Interest | Semi-annual interest | Maturity Year | # years to Mature
--- | --- | --- | --- | ---
662GS2051 | 6.62% | 3.31% | 2051 | 33
668GS2031 | 6.68% | 3.34% | 2031 | 13
737GS2023 | 7.37% | 3.68% | 2023 | 5


Can you give me an illustration to help me understand how much I earn if I were to invest in a bond?

Fair enough, but before we get into the details, you need to know one more thing.

Every bond has a Par value, of say Rs.100. When you invest in a bond, you usually invest either at a discount (ex: 98, 97 etc.) or par (100), or a premium to par (101,102 etc.). The price at which you invest in a bond depends on something called an  ‘auction process’ . More on that later, but for now, you need to be aware that you can invest in a bond at par, at a discount, or a premium.

Now, consider you invest in 700GS2020 (7% with a maturity of 2020 or 2 years from now) at a discount price of 98.4. Assume, you invested in 150 of these bonds, so you’d pay –

150*98.4

=  Rs. 14,760/-

From the time you invest, the interest cycle starts. The interest is paid on the face value of the bond. The total amount you earn is as follows –


Time Period | Interest | Cash flow | Remarks
--- | --- | --- | ---
0 – 6 Months | 3.5% | 3.5% * 100 * 150 = Rs.525 | Half year interest
6 months  – 1 year | 3.5% | 3.5% * 100 * 150 = Rs.525 | Half year interest
1 – 1.5 years | 3.5% | 3.5% * 100 * 150 = Rs.525 | Half year interest
1.5 – 2 years | 3.5% | 3.5% * 100 * 150 = Rs.525 | Half-year interest
At Maturity (2 years) | Principal repayment at Par | 150 * 100 = 15,000 | Additional Rs.240


So on an investment of Rs.14,760/- you will earn –

525 + 525 + 525 + 525 + 15,000

= 2100 + 15,000

=  Rs.17,100/-

If you do the math, the yield on this works out to approximately 7.88%. RBI has beautifully explained the  calculation of yield  here, do check this if you are keen to know more.

I’ve heard the term ‘   Yield to Maturity’ ,  is this the same?

Hmm, not really. The concept of ‘Yield to Maturity’ or YTM is a little tricky. The YTM calculation assumes that you reinvest the interest payment back into a similar bond, which further generates interest on interest. Bond traders and institutional investors only look at YTM because this is the true comparable value between two different bonds.

This is similar to reinvesting the dividends from a stock back into the stock.

Alright, tell me about the interest payment? How does it get paid?

The interest payment gets credited directly to your bank account linked to your DEMAT account, just like the way you receive the dividends from a company.

Can you give me some insights into the auction process?

Till recently, investment in G-Sec bonds/T-bills was restricted to banks and large financial institutions with a minimum ticket size of 5 Cr. However, recently NSE and RBI have opened it up to retail investors with a minimum of Rs.10,000/- investment.

However, the price you pay for the bonds is still decided by the banks and other major financial institutions. They place bids on RBI’s auction platform, and RBI decides the price of the bonds based on these bids placed on their platform. So the auction process is basically a process to discover the price you’d pay for the bond, also called the weighted average price of the bond.

So it is the weighted average price of the bond, the price I need to pay to purchase the bonds?

Yes and no.

At the time of placing your order, you pay a slightly higher amount. This amount is called the ‘amount payable’. Once all the orders are placed, the auction process starts and RBI evaluates the weighted average price. Any difference between the ‘amount payable’ and ‘weighted average price’,  is credited back to your account the very next day.

Wait for a second, what do you mean by ‘option to sell in secondary market’?

This works exactly like how you buy and sell stocks.

Let’s say you decide to invest in 740GS2035A. This means you will continue to enjoy a semi-annual interest payment of 3.7% every 6 months for the next 17 years, till 2035.

Now, after a few years, you no longer wish to hold this bond. In such an event, you can decide to sell this bond in the secondary market, pretty much like how you buy and sell stocks on NSE.

Check this post on TradingQ&A to know more about  selling G-Sec in the secondary market .

Great! It looks like I’ve got my basics right. Is there anything else that I need to know?

Think of the whole thing as applying for an IPO followed by the stock getting listed on the exchanges. It’s pretty much the same. The auction process is like the IPO, and once the bidding is done, the Bond (or T-bill) will get listed on the exchange. You can sell the bond whenever you want, or you can even trade the bond once it gets listed!

The minimum ticket size is Rs.10,000/- and its multiples and a maximum of Rs. 2 Cr. You can place the orders when there are new auctions (just like an IPO). However, the good part is that RBI notifies the auction dates and schedule well in advance.

Here is the calendar for the upcoming  t-bills  auctions.

Here is the calendar for the upcoming  bond  auctions.

Here is the  link of all the bonds that have been issued by RBI . Do pay particular attention to the nomenclature, coupon rate, and year of maturity.

What are SDLs?

To meet the budgetary requirements, State Governments also raise loans from the market, and these loans are called State Development Loans (SDLs). These loans are similar to the dated securities issued by the Central Government, the interest is credited half-yearly, and the principal amount is repaid at the time of maturity. SDLs also qualify for Statutory Liquidity Ratio (SLR), and they are also eligible as collaterals for borrowing through market repo as well as borrowing by eligible entities from the RBI under the Liquidity Adjustment Facility (LAF) and special repo conducted under market repo by CCIL. You may read this  FAQ from RBI  for more information.

Here is the calendar for the upcoming  SDLs  auctions.

How does the Floatation and Yield of SDLs  work?

RBI facilitates the issue of SDL securities in the Market, and the auctions are generally held every fort-night. These are traded electronically on the RBI managed NDS-OM (Negotiated Dealing System-Order Matching). Below is the snapshot of some securities floating for auction as on October 12th, 2020 on the NDS-OM managed by RBI.

Like every other Government Security SDLs also have a unique name or symbol. For example, let’s take  05.75 AP SDL 2024  Security from the above snapshot. And, here is what it really means:

Annualized Interest  – 05.75

State Code  –  AP (Andhra Pradesh in this case)

Type  – SDL

Maturity  – 2024

This issue is expiring in 2024, i.e. 4 years from now (we are in 2020). If you were to invest in this bond, you would receive 5.7% interest semi-annually until maturity, which is 2024.  Please note, similar to other G-Secs the interest for SDLs will also be paid semi-annually so that you will receive 2.8% interest twice a year. Finally, upon maturity, you will also get back your principal amount.

What about the Risk Assessment?

Unlike most G-Secs that have Implicit Sovereign Guarantee ( High Risk or  significant funding cost advantages for the institutions that benefit from them), SDLs are associated under Explicit Sovereign Guarantee, which basically means, according to  CRAR prudential norm  released by RBI the risk accompanied with SDLs is weighted as zero. Banks are not required to keep any capital for investing in SDLs. Hence, making it the risk-free instrument to invest in than most of the other Central Government Securities.

What about taxes?

Bonds – Interest income is credited to your bank account. It is considered as income from other sources and taxes have to be paid as per the income tax slab. If there is any appreciation in the bond price, it is considered capital gains. Long-term (LTCG) is 10% flat or 20% with indexation. STCG is as per the applicable slab rate.

T-bills – You buy at a discount and sell it at par. This appreciation is considered as short-term capital gain, and taxes as is per the applicable slab rate.

In the case of G-Secs, the gain is considered long-term (LTCG) if held for more than 3 years. Otherwise, it is short term capital gain (STCG).

Will I get assured allotment if I place my order?

These securities are issued for limited amounts, and there is no guarantee of allotment if the number of bids received is higher than the issue size. However, if you fail to get an allotment, you can try again next week. RBI carries out multiple issues a month.

This sounds good. How do  I  start?

Start Investing Now!

Happy investing!

Post your comments below.



## 17.Commodity_Options

[Read more](https://zerodha.com/varsity/chapter/commodity-options/)



### 17.1 – Commodity options, finally!

My first commodity trade was on pepper futures, and this was sometime towards the end of 2005 or early 2006. Since then, I’ve closely tracked the developments of the commodities market and the commodities exchanges in India. MCX has done a tremendous job in promoting commodities market in India. They have continuously introduced new contracts and enhanced market depth. Liquidity too has improved much fold since then. If I remember right, sometime around 2009, there was an attempt to introduce options in the commodity market. Needless to say, when I first heard about this, I was quite excited thinking about all the possibilities that one would have trading commodity options.

But unfortunately, this never came through, and the commodities options were never introduced in the market. Since then, this topic on commodities options has surfaced a couple of times, but each time, it just remained a market rumour.

However, it now appears that options on commodities will finally hit the market sometime soon. Around June 2017, SEBI cleared the files to permit commodities options.

You can read the new article  here.

Since then, commodities exchanges have been working hard to build a good framework to introduce commodities options. Given this, I thought it would be good to have this quick note on what to expect and what to look for in the commodities options market.

For those who are not too familiar about options, I’d suggest you start reading the module on Options  here.

Just like futures, the options theory for commodities would remain the same. You have just to pay attention to logistics, and that’s the objective of this chapter.




### 17.2 – Black 76

One of the important bits that you need to note with commodity options is that  these are options on Futures  and not really the spot market.

For example, if you look at a call option on Biocon, the underlying for this option is the spot price of Biocon. Likewise, if you look at Nifty options, the underlying is the spot Nifty 50 index value. However, if you were to look at an option on Crude Oil, the underlying here is not the spot price of Crude Oil. This is quite intuitive as we do not have a spot market for Crude Oil or for that matter, any commodities in India. However, we do have a vibrant futures market. Hence the commodity options are based on the commodity futures market.

If one were to talk about the crude oil options, then you need to remember the following –

1. The underlying for Crude oil option is Crude oil Futures.
1. The underlying for crude oil futures is the price of Crude Oil on NYMEX.

So in a sense, this can be considered a derivative on a derivative. For all practical purpose, this should not really matter to you while trading. The only technical difference between a regular option (with spot as underlying) and option on futures is how the premium is calculated. For the former, the premium can be calculated by using a regular Black & Scholes model, and for the latter, a model called Black 76 is used.

The difference between these two models is how the continuous compounded risk-free rate is treated. I will not get into the details at this point. But do remember this – there are plenty of Black & Scholes calculators online, so don’t be in a hurry to punch in the commodities variables in a standard B&S calculator to extract the premium value and Greeks. It simply won’t work. ☺




### 17.3 – Contract Specifications

We still do not know how the exchanges will set up the framework for these options. However, we did take a look at the mock framework, and I’m guessing it won’t be too different from that.

To begin with, exchanges may roll out Gold options, and would slowly but for surely introduce options on other commodities. Here is the highlight.

Option Type  – Call and Puts

Lot size  – Since these are options on futures, the lot size will be similar to the futures lot size

Order Types  – All order types would be permitted (IOC, SL, SLM, GTC, Regular, Limit)

Exercise style  – Options are likely to be European in nature.

Margins  – SPAN + Exposure margin applicable for option writing and full premium to be paid for option buying. A concept of devilment margin will come into play, I’ve discussed this towards the end.

Last trading day (for Gold)  – 3 days before the last tender day

Strikes  – Considering one ‘At the money strike’ (ATM), there would be 15 strikes above and 15 strikes below ATM, taking the total to 31 strikes.

This is where it gets a little tricky. Equity option traders are used to the following ‘Option Moneyness’ convention –

1. At the Money (ATM) Options = This is when the spot is in and around the strike. So in a given series, only 1 strike is considered ATM.
1. In the Money (ITM) = All call option strike below the ATM and call put option strikes above the ATM are considered ITM options.
1. Out of the Money (OTM) = All call option strike above the ATM and call put option strikes below the ATM are considered Out of the Money (OTM) options.

However, the commodities options will introduce us to a new terminology – ‘Close to Money’ (CTM) and this is how it will work –

1. ATM – The strikes closest to the settlement price is considered ATM
1. CTM – Two strikes above and two strikes below ATM are considered CTM
1. OTM and ITM – The definition remains the same as in Equity.

Settlement –  For daily M2M settlement in Futures, the exchange considers the commodities daily settlement price (DSP) as the reference value. The DSP of the commodity on the expiry day will therefore be the reference value for the options series as well.

Let’s quickly understand how the settlement works. Consider this example – Assume the DSP of a commodity is 100. Assume this commodity has a strike interval at every 10 points. Given this, let’s identify the moneyness of strikes –

1. ATM = 100
1. CTM = 80, 90, 100, 110, and 120. Note, we have included two strikes above and below ATM
1. OTM = All Call option above 100 and all Put options below 100 are considered OTM and therefore worthless
1. ITM = All Call options below 100 (including 80 and 90, which are CTM) are ITM, and all Put options above 100 (including 110 and 120, which are CTM) are ITM.

All long option holders which are ‘CTM’, will have to give something called as an ‘explicit instruction’. An explicit instruction will devolve the option into a futures contract. The futures contract will be at the strike. For example, if I hold 80 call option, then upon an ‘explicit instruction’, the call option will be devolved into a long futures position at 80. I’m guessing the ‘explicit instruction’, will be tendered via the trading terminal.

Now, here is an important thing that you need to remember – If you do not give an explicit instruction to devolve your CTM option, then the option will be deemed worthless.

All ITM option, except CTM, will get automatically settled. You need to be aware that settlement in the options market is using devolving the option into an equivalent futures position. If you are holding a non-CTM, ITM option and  you wish not to settle this automatically , then you need to give a ‘Contrary instruction’. In the absence of which, the contract will be automatically settled using devolvement.

Now, the question is, why would you not want to exercise an ITM option?

There could be an instance where the ITM option that you have may not be worth exercising given the taxation and other applicable charges. So, in this case, you are better off not exercising your ITM option rather than exercising it. So, this is when you use the ‘Contrary instruction’, privilege and opt not to exercise your ITM option.




### 17.4 – Devolvement into a Futures contract

So assume you have an ITM (including CTM) option, and upon expiry, the option will be converted (or devolved) into a Futures position. Now, we all know that a futures position requires margins to be parked with the broker. How do we account for this? I mean, when I go long on option, I have to pay for the premium right? Naturally, at the time of buying the option, I would not park additional margin anticipating that the option ‘might’ get devolved into a futures position.

To circumvent this, there is a concept of ‘Devolvement Margin’. I will cut through the technicalities and let you know what you should know and expect –

1. Commodity options will expire a few days before the first tender date of the futures contract. This means, there will be a few days gap between the expiry of the futures contract and the options contract.
1. Few days before the options can expire, exchanges will conduct a ‘What if scenario’ and generates a ‘Sensitivity Report’ to identify strikes which are likely to be ITM and CTM.
1. For all such options, exchanges will start assigning ‘Devolvement Margin’, this means you will have to fund your account with enough margin money to carry forward the option position. Half of the required margin needs to be available a day before the expiry and the remaining half on the day of expiry of the options contract to convert the position to a futures contract. 
For example, The Expiry of the Gold option contract is on 28 November 2017, and the futures contract expires on 5 December 2017. Half of the margin needs to be added to the account on 27 November and the remaining on 28 November
1. If you are holding a deep ITM option, then the profits arising out of this position will be considered to offset a portion of the margins required
1. Given the above point, the deeper the option, lesser, would be the margin required. This also means CTM options will attract higher margins.
1. In simpler words, if you are holding a commodity option, and it’s likely to expire ITM, and you intend to carry to expiry, then you need to ensure you bring in margin money as you approach expiry.
1. How much margin, expiry dates, tender date etc. will vary based on the commodity

Here is a quick note on how the options position will be devolved.


Option Position | Devolved into
--- | ---
Long Call | Long Futures
Short Call | Short Futures
Long Put | Short Futures
Shot Put | Long Futures.


I guess as, and when the option contracts roll out, we will have greater insight into the structure. I will update this chapter when the commodity options roll out with the exact information.

Stay tuned.

1. Options on commodities will be on Futures as underlying.
1. One cannot use the regular Black & Scholes Calculator for identifying the premium and Greeks.
1. Black 76 is the model used for Options on futures.
1. Upon exercising the option devolves into a futures position.
1. CTM options are two strikes above and below ATM
1. If a CTM option holder does not give explicit instruction, then the option is deemed worthless.
1. An ITM option holder can give a ‘contrary instruction’, to choose not to exercise the option. You will opt for this if you know that the position is not going to be profitable owing to taxes and applicable charges



## 6.EUR,_GBP,_and_JPY

[Read more](https://zerodha.com/varsity/chapter/eur-gbp-and-jpy/)



### 6.1 – The other currency pairs

We focused on the USD INR pair extensively over the last few chapters, and we now look into the other currency pairs that are traded in the Indian markets, namely the EUR INR, GBP INR, and JPY INR. The functioning of the other currency pairs is very similar to the USD INR. Think about it this way – you know how the Nifty 50 contracts work, then you pretty much know or are capable of knowing how Bank Nifty works.

Given this, the agenda for this chapter is to quickly run through the contract specifications of the other three crosses available for us to trade. In the 2 nd  part of this chapter, we’ll dwell on some of the common trading techniques, mainly employing technical analysis. With this, we will conclude our discussion on currencies and start looking into commodities.

So let’s get started.

EUR INR

Globally the EUR USD is one of the most actively traded currencies. However we do not have that contract yet in India, but RBI has given the exchanges a nod to list these crosses as well. So I guess it is a matter of time before we have the EUR USD pair along with GBP USD, JPY USD etc. But for now, we do have EUR INR to trade.

The EUR, as we know, is the currency of the European Union. Unlike other currencies, the EURO is backed by the economy of many European countries and not just one economy.

The EUR INR contract structure is quite similar to the USD INR contract. Here are the key details that you need to know –


Particular | EUR INR | Remarks
--- | --- | ---
Lot Size | € 1,000 | In equity derivatives lot is the number of shares, but here it’s a Euro amount
Underlying | The rate of Indian Rupee against 1 EUR | 
Tick Size | 0.25 Paise or in Rupee terms INR 0.0025 | 
Trading Hours | Monday to Friday between 9:00 AM to 5:00 PM | 
Expiry Cycle | Upto 12 month contracts | Note, equity derivatives have an expiry upto 3 months.
Last trading day | Contracts trade till 12:30 PM, 2 days before the last working day. | Equity derivatives continue to trade till 3:30 PM of the expiry day.
Final Settlement day | Last working day of the month | 
Margin | SPAN + Exposure | Usually, SAPN is about 1.5%, and exposure is around 1%. Hence roughly about 2.5% is the overall margin requirement.
Settlement Price | RBI Reference rate on the day of Final settlement | The closing price of spot


So as you see, the contract specifications are similar to that of the USD INR pair. The only difference is that the lot size in EUR INR is € 1,000 as opposed to $1,000 in USD INR.

Let’s see how this would impact the margins; here is the snapshot of the EUR INR futures –

As you can see, the last traded price of the contract is 74.8950, with this we can estimate the contract value –

Contract Value = Lot size * Contract price

= 1000 * 74.8950

=74,895.0

Assuming the margin is approximately 2.5%, the margin should be in the vicinity if Rs.1,870/-, in fact, one can use the margin calculator on Zerodha to get the exact value of the margin required.

So the margins are slightly higher than the USD INR pair, but still way lower compared to what is required for any equity derivative contract.

GBP INR

The GBP INR contract is probably the 2 nd  most popular currency contract after the USD INR pair. On the contract specification side of things, everything remains the same except for the lot size and the underlying. The underlying is the exchange rate of 1 GBP in Indian Rupees. The lot size is £1,000, which makes the contract value approximately Rs.89,345/- considering the futures are trading at 89.3450 as of 5 th  August 2016.

As you see below, the margin required for this slightly higher compared to the other two contracts we’ve already discussed–

By the way, did you know in the international markets that the GBP USD pair is also called the ‘Cable’?. So, when you hear a currency trader says he is short cable, he means he is short GBP USD cross.

JPY INR

The JPY INR contracts are a bit tricky compared to the other currency contracts. The lot size is not the usual 1000 units, but 100000 and the underlying here is the exchange rate for 100 Japanese Yen in Indian Rupees.

So when we look at this –

We are essentially looking at the rate of 100 Japanese Yen, stated in Indian Rupees. In other words, it costs Rs.66.2750 to buy 100 Japanese Yen. Since the lot size is 100,000 the contract value is –

= (100000 *66.2750) / 100

= Rs.66,275/-

The P&L for one pip(tick) movement of the currency will be 0.0025*1000= Rs 2.5 which is the same for all INR pairs

The margin required for the JPY INR contract is Rs.2,808/-,, which translates to about 4.2%.

Clearly, the margins required for JPY INR contract is the highest in the currency segment, and I guess this is because this contract could be the most volatile (owing to lower liquidity). Of course, this is just a casual observation, and I’d encourage you to calculate the actual value on Excel to get a perspective on the volatility of JPY INR.

Spread contracts are available on all the currency pairs across all the expiries. Here is the snapshot of the same form NSE’s website –

But as you can see, the spread contracts (apart from USD INR) are not really liquid.

Finally, if you were to select contracts to trade based on liquidity, here is what I’d suggest you look at, in order of preference–

1. USD INR Futures
1. USD INR ATM Options
1. GBP INR Futures
1. EUR INR Futures
1. JPY INR Futures

With this, I’m assuming that you are clear with the logistics involved in currency trading. We now focus on developing some basic trading approach.




### 6.2 – The test for seasonality

There is often a lot of debate on the seasonality involved in currencies. By seasonality I mean things like “USD INR always goes down in December” or something like “USD INR always goes up a week before expiry”. In fact, many people base their trades based on this expectation without actually validating for seasonality. Given this, we thought we should check for the seasonality in currencies, and needless to say, we picked the USD INR spot data to run the required test.

** Warning**

The following discussion can get a bit technical, and this is not meant for regular Varsity readers. If you want a direct answer for whether any seasonality exists in the USD INR pair, then the straight forward answer is – no, there is the seasonality of any sort across any time frame. With this conclusion, you can jump directly to the next section. However, if you have a statistical approach to things, then you may want to read through. Of course, I’ll try my best to keep it brief.

Also, this section is contributed by our good friend Prakash; any queries regarding this should be directed to  [email protected] .

Seasonality in any time series can be checked by employing a statistical test called “Holt-Winters test”. A typical Holt-Winters method has 3 components –

- Level
- Trend
- Seasonality

Level : this indicator measures the average change in USD INR on a YOY basis

Trend : This indicator measures the average change in USD INR on a month on month basis

Seasonality : This indicator measures if there is any seasonal impact on price change. For example – USD INR almost always rises in January, and almost always falls in April etc.

There are two possibilities for components (level, trend, and seasonality)

- Additive
- Multiplicative

I guess the details of this are beyond the scope of this discussion.

Holt-Winters test for seasonality:

In Holt-Winters test, we check for seasonality in a time series by building a forecast model (let us call it Model 1) and study its residuals. Model 1 does not have any seasonality component inbuilt. We then build another forecast model with a seasonality component (Model 2) and check for the errors of this model.

We compare the errors of both the models and compare to check if model 2 gives us a better forecast when compared to Model 1. We do this by employing ‘Chi-Square’ test to determine if accuracies are better. If Model 2 is statistically better than Model 1, then we conclude that there is some seasonal pattern in data. However, if the accuracies are the same for both models or if Model 1 has better accuracy, there is no seasonality in data.

Seasonality results for USD INR

Check for weekly seasonality:

Model 1 (without seasonality component): The best model is (M, N, N) with coefficients 0.9999

This model indicates that weekly data has only a level component and no trend component. The coefficient of “level” is 0.9999, i.e. next week’s price is about 0.9999 times this week’s price.

For readers who are aware of the Random Walk Theory will be able to appreciate these parameters. The model is suggesting that every week USD INR price movement is a random walk.

Model 2 (with seasonality component):  The best model is (M, N, M) with coefficients 0.7 and 0.0786

This model indicates that weekly data have a level and seasonality component. The interpretation is that next week’s price is 0.7 times of this week’s price and the remaining price is contributed by seasonality.

Conclusion: Chi-square test concluded that there is a 100% chance that model 2 accuracy is the same as model 1 accuracy, i.e. forcing a seasonality model on USD INR isn’t increasing its accuracy.

This can only happen when there is no seasonality in the data. As the data is prepared for weekly analysis, we can conclude that there is no seasonality on weekly a basis.

Monthly seasonality:

Model 1: The best model is (A, N, N) with coefficients 0.9999

Like in the case of a weekly model, model on monthly data also suggests a random walk.

Model 2: The best model is (A, N, A) with coefficients 0.9999 and 0.0001

This model indicates that next month closing price is almost the same as this month’s closing price with a small impact of seasonality.

Conclusion: Chi-square test concluded that there is a 20% chance that model 2 accuracy is better than model 1 accuracy. In statistical terms, such improvement in accuracy might happen due to randomness, like the window period you choose, the sample data etc.

Typically in statistics, the norm is to look for at least 95% chance that model 2’s accuracy is better than model 1’s to conclude there is seasonality in data. So in the case of USD-INR, we can conclude that there is neither monthly nor weekly seasonality.

The last 8 years USD INR spot data for this is taken from  RBI’s website.

So the next time you hear someone make a random statement like “the USD INR pair almost always goes down before Christmas”, then you know he is just trying to sound smart with no real insights. ☺




### 6.3 – Classic TA

Think about conducting a fundamental analysis of a company, for example – Hindustan Unilever Limited. Typically, you would study its business, financial statements, corporate governance, study its peers, and perhaps build a financial model to identify if the stock is worth investing in. Fundamental analysis is a straight forward affair when it comes to equities. However when you look at currency pairs, USD INR for example, they’re a lot more fundamental dimensions – the macroeconomics of the USA which is dependent on multiple domestic and international factors and the macroeconomics of India which is again dependent on multiple domestic and international factors. Once you understand these, you need to weigh each one of these against another and build a relative view.

This is no easy task, and not many are capable of doing this. It would help if you were an economist with a trader’s mindset to pull off quality fundamental analysis on currency pairs. Perhaps, this is the reason why Technical Analysis (TA) is so much more popular when it comes to trading currencies and commodities. As you are probably aware, Technical Analysis assumes that the price that you see on the screen discounts everything, including all the complex fundamental views that are panning out at the moment. With this assumption, you go ahead and analyze the charts and develop a viewpoint.

TA on currencies and commodities works just like it does on equities. If you are not conversant on how to use Technical Analysis, I’d strongly suggest you read through this  module on TA .

I’ll post few snapshots of TA based trade setups –

The two encircled candles form a classic candlestick pattern called ‘Piercing pattern’. The piercing pattern suggests the trader go long on the USD INR pair. As you can see, the trade panned out well without triggering the stop loss.

Here is a bearish Marubozu on GBP INR –

The bearish Marubozu suggests you short the underlying with an expectation that the asset will continue to slide down.

Naturally, the trade setups can be endless. I know many people are under the belief that currency and commodities require one to know a different set of technical analysis, but this is not true. TA works the same way on any time series data, be it – stocks, commodities, currencies, or bonds.

And with this, I would like to end our discussion on Currencies and would like to start our discussion on the 2 nd  part of this module, i.e. commodity trading.

1. The underlying for EUR INR is the spot rate of 1 Euro in Indian Rupees.
1. The lot size for EUR INR is €
1. The underlying for GBP INR is the spot rate of 1 GBP in Indian Rupees. GBP INR is the 2 nd  most traded contract in the currency segment.
1. The lot size for GBP INR is £.
1. Internationally GBP USD is also referred to as the ‘Cable’.
1. JPY INR has the highest margin requirement in the currency segment, perhaps due to the higher volatility.
1. Lot size in JPY INR is 100000.
1. The underlying in JPY INR is the rate of 100 Japanese Yen in Indian Rupees.
1. As opposed to popular belief, there is no seasonality in the USD INR pair – either every week or every month.
1. TA can be applied to currencies just like the way it can be applied to stocks.



## 8.Gold_(Part_2)

[Read more](https://zerodha.com/varsity/chapter/gold-part-2/)



### 8.1 – The London fix

In the previous chapter, we discussed the various Gold contracts that are available on MCX. I want to begin this chapter by discussing how the prices of Gold in the spot market are arrived at internationally and in India.  However, I have to mention this – this method to ‘fix’ gold prices is merely symbolic and holds very little relevance to trading gold futures at MCX. I’m discussing this simply because it is an interesting thing to know. J

Internationally, the price of Gold is fixed in London daily, twice a day in two different sessions. The morning session at 10:30 AM is referred to as ‘AM Fix’ and the evening session at 3:00 PM is called the ‘PM Fix’. The prices are fixed by the gold dealers from London’s biggest bullion desk. The whole process is facilitated by Nathan Mayer Rothschild & Sons.

There are about 10-11 participating banks, which include names like JP Morgan, Standard Chartered, ScotiaMocatta (Scotiabank), Société Générale etc.  Do note, the general public and other banks are not permitted to participate in this process. The dealers from these banks call the dedicated conference line at the designated time and submit their bids to buy and sell gold. From all the bids and offers an average price is arrived at, and the same price is relayed to the market, which then becomes the benchmark for gold trading. The whole process lasts for about 10-15 minutes. The process is again repeated in the ‘PM session’, and the gold prices are again discovered and relayed to the markets.

The gold price that is fixed by the AM and PM sessions is very close to the actual price of gold that is traded in London and other international markets. So in a sense, the price that is relayed holds no surprise to traders or bullion dealers, in fact, some participants even believe that like many things in England, even this is conducted more to keep up with tradition.

India too follows a somewhat similar practice, but less elaborate. India, being one of the biggest consumers of Gold, imports the yellow metal. The gold is imported by designated banks and the banks in turn supply this gold to bullion dealers (after adding the necessary charges; more on this a little later). The Indian Bullion Association then bids for the gold through its network of bullion dealers. These dealers mainly base their quotes on how much gold they would like to buy or sell at a given price, the rates are averaged out, and this roughly sets the floor for the Gold prices in India. In fact, there is some circularity here because dealers tend to look at the Gold futures price traded on MCX before placing their bids with the Indian bullion association. Anyway, this price is relayed to the dealers’ and jewellers’ network, and the price for the day is set.




### 8.2 – Gold price disparity

Traders tend to compare the Gold futures rate in Chicago Mercantile Exchange (CME) and the Gold Futures rate on MCX and assume there is an arbitrage opportunity lurking around. The rationale for this is that Gold being an international commodity should often trade at around the same price, in the absence of which an arbitrage opportunity arises. So for example, if 10 grams of 995 purity Gold in CME is quoted at $430, then on MCX the price of 10 grams of 995 purity should be in and around $ 430.

But this is often not the case, they trade at a significantly different price, and due to this a disparity between gold futures in CME and MCX always exists. The question however is, why does this disparity between the two gold futures contracts exist?

Let us figure this out –

To understand the disparity between the two futures contracts, one should understand how the Gold spot rate evolves in India.

Remember, India is a net importer of gold. In the international markets, US especially, Gold is quoted on a per troy ounce basis. One troy ounce is approximately 31.1035 grams. Assume Gold in the US spot market is traded at $1320 per troy ounce – given this, what do you think should be the spot price of gold in India. Assume $ 1 = Rs 65.

The general tendency is to identify the cost for 10 gram of gold in USD and multiply the same with the current USD INR rate and figure out the price. Let us do this math quickly –

31.1 Grams = $1320, therefore 10 grams = $424.43. Since USD INR is at 65, the price of Gold in India should be approximate = Rs.27,588/-.

Unfortunately, in reality, this is not so straightforward. Gold when imported (remember it is the banks which import gold) attracts duties and taxes. The spot price of Gold in India should include all these charges. In fact, let me list down all the costs that are applicable when a bank imports gold –

1. CIF applicable in Dollars (CIF stands for cost, insurance, and freight)
1. Custom duty
1. Cess
1. Bank cost

With all these charges, the landed price of Gold tends to increase. In fact,  this post on TradingQ&A  beautifully illustrates how the cost adds up.

So for example, if the rate of spot Gold in the US is $420 per 10 grams, then in India after adding all the additional costs, the spot rate will be much higher. For the sake of this discussion, let us assume the rate in India is $435 – leading to a $15 disparity in spot rates.

Now, this explains the disparity in spot rates, but what about the futures price? Remember the futures prices is a derived from spot rates, the formula linking futures price with spot price is –

F = S*e (rt)

You can read more on  futures pricing .

So in the US markets, the basis for the future pricing will be the spot price of Gold in the US, i.e. $420, while at the same time the basis for the future price in India will be the spot price of gold in India, i.e. $435. Given this, naturally, the futures price of gold in CME and MCX will differ. This difference should not be mistaken for an arbitrage opportunity.




### 8.3 – What drives the gold price?

Investors across the world have this strange, but predictable behaviour – at times of uncertainties, well at least economic uncertainties, they are all in a hurry to buy gold. Gold has always been considered a haven capable of safeguarding investments against any economic meltdown.

Consider the Brexit (June 2016) event, the most recent event which kind of shook the world, and here is how Gold behaved before and after the event –

There was a clear run-up in Gold before the event and post the event, in fact, the big candle that you see during this period is on 24 th  June, the day after the Brexit verdict was out. Naturally, gold rallied owing to the outcome of Brexit. In fact, every time there is any global/domestic uncertainty, investors flock to buy gold. This is mainly driven by the fact that Gold is considered a haven, capable of preserving your wealth.

Almost all the major events in the past have had an impact on Gold, think about it – Oil crisis, middle eastern uprising, Israel-Palestine, EU migrant crisis, Greek economy, Euro crisis, Lehman Brothers; the list is never-ending. But the point to note is that every world event impacts the prices of gold.

This leads us to an important conclusion – Gold tends to increase in value in the backdrop of economic uncertainties. In fact, in the backdrop of economic uncertainties, demand for risky assets such as equities goes down, and the demand for safe-haven assets such as Gold tends to increase.

Now besides the uncertain events, even on a day to day basis, investors tend to buy gold considering it a safe hedge against inflation. They believe, in the long run, the value of gold will continue to rise. This perception is justified if you look at a very long term chart of gold –

Source:  http://www.lbma.org.uk/pricing-and-statistics

Take a look at the chart above, in 1970 Gold was at roughly $35 and today in 2016, Gold is at $1360, translating to a 37x return. However, when you look at it from a CARG perspective, this translates to about 8% year on year growth. The world average inflation is roughly between 5-6%. This means if you are an investor in gold, on the one hand, you are expected to make 8%, and on the other, you lose about 6% (owing to inflation) netting you with an outperformance of 2%. However, in countries such as India where inflation is high, investment in Gold does not really fetch much.




### 8.4 – Gold, Dollar, Rupee, and Interest rates

The movement in gold is also related to how the currencies and interest rate of the economy moves. So if you are a trader in Gold, then it is not only important to keep track of world economics, but also important to keep track of currencies and interest rates. The equations are simple; let us start with the dollar and build on it.

Have a look at this graph below –

Source: https://fred.stlouisfed.org/graph/?g=33vD

This is the graph of USD versus Gold. The inverse relation between the two is quite evident. This inverse relation can broadly be attributed to two reasons –

1. When the dollar decreases in values concerning another currency, then the value of the other currency increases. With the increase in the currency value, the demand for commodities, including Gold tends to increase. As the demand for gold increases, the prices too tend to increase.
1. A falling US dollar becomes less attractive to investors; the investors tend to look at parking their money in safer havens such as gold.

Having said this, one should be aware that this may not always be true. There could be instances when both gold and USD tends to increase. For example, think about a crisis in Saudi Arabia (declining oil prices), domestic investors may want to move away from investments in Saudi and park it in safer assets such as Gold and USD, thereby increasing the value of both these assets.

Either way, it must be clear to you now that USD has a role to play in the directional movement of Gold. Having said, one must study the correlations between various variables and gold to see if any correlations actually exist. For example, an increase in the US federal rates tends to strengthen the US Dollar. Under this Gold, price should reduce. But this does not necessarily happen all the time, and if I’m right, the correlation between Gold and Federal rates is just under 0.3.

I understand the discussion above is counter-intuitive, as in earlier I mentioned a strong dollar tends to push gold prices down. Still, the factors that influence USD may not actually have a strong bearing on Gold itself.

Confusing? Yes, it is, I agree.

So how would one actually trade gold? One of the best ways to trade gold is by studying its demand and supply. Demand and supply factors are many and complex, especially for an international commodity such as Gold. However, the demand and supply pressures reflect themselves in prices and a sense manifest themselves in the form of charts, and charts can be read using ‘Technical Analysis’, and this is how you can develop trading insights in gold.

I’m a huge fan of Fundamental Analysis when it comes equities, but when it comes to commodities and currencies, I resort to charts.




### 8.5 – Technical Analysis of Gold

If you are not familiar with Technical Analysis (TA), then I’d suggest you read the  module on TA .

One of the key attributes of TA is that TA can be applied to any asset class, including currencies and commodities. Let me develop some trading notes on Gold by employing TA. Hopefully, this will give you a sense of how to apply TA on Gold.

When I trade Gold, the objective is obvious – it is a short term trade, and there are no intentions to carry the trade for say more than a few days.

The very first thing that I do when developing a trading view is to look at the long term chart of the asset; by long term, I mean at least 2 years. I’ll do the same here; I’ll look at the end of day Gold Bees (ETF) chart for this. Do note, and I will use this chart to develop a rough idea on the primary trend of Gold and also observe critical price points if any.

From the chart above, I note the following points –

1. Gold declined to start from late 2013, all the way to late 2015.
1. Prices bottomed over the last few months of 2015.
1. Gold in fact formed a double bottom between Sept-Dec 2015.
1. Prices have been trending up since early 2016.
1. Traders have bought Gold at every decline starting from early 2016.
1. Clearly, the bearishness in gold is no longer there, and this is evident given the fact that gold has scaled back to 2013 prices.

With all this, I can conclude that I’d be more comfortable with long trades than short, but this does not mean that I will not short Gold. I would if the risk to reward is enticing enough. However, if I short Gold, I will always be aware that traders out there are looking for opportunities to buy gold at every dip; hence I will be quick to cover my short position. I was hoping you could do note, until this stage, I have only developed a broad-based view on Gold and have not ventured into any specific price levels.

I would now be interested in looking at a short term chart of Gold, in identifying trading opportunities if any. Please have a look at the chart below, before we get into identifying trading opportunities (for which we will have to look at the right side of the chart), let’s spend a little time on the left side of the chart.

The starting point of this chart is sometime in late 2015, and till about the end of June 2016; there is pretty much no activity. This is evident when you look at both the price and volume. The volume is almost non-existent, and the prices tend to gap up and down. Can you guess why?

Well, remember Gold contracts are introduced almost a year in advance, for example, the Oct 2016 contract (which we are looking at), would have been introduced around Oct 2015. However, this contract does not attract any liquidity till it nears its actual expiry, i.e. October 2016. If on the other hand, our markets were very vibrant with lots of liquidity, then probably this contract would have attracted liquidity much earlier.

Anyway, let us now look into the left side of the chart and identify trading opportunities if any. I’ll repost the chart emphasizing the recent candles; I have overlaid 9 and 21-day exponential moving averages on the prices –

1. The current market price is below both the short term averages.
1. There are three price action zones in the recent past at around 30956 (I’ve encircled the same in blue circles), and since the current market price is below this level, 30956 becomes an immediate resistance.
1. In the recent past, we can see a Bearish Marubuzo formed (circled in black), which has played out well. Traders may be booking profits on this one.

Considering all the above, I would be looking at buying opportunities in Gold, the moment it crosses the resistance level of 30956. Notice, this also coincides with the two short term moving averages, which further encourages me to go long. However, if the price of gold stays below the resistance level, I would hesitate to short for reasons we discussed earlier. So, in summary, my trade would be something like this –

- Position: Long
- Price: Above 30956
- Target: 31418 (have placed a short blue line)
- Stoploss: 30700 (current market price)
- Reward to risk assuming I’m going long at 30956: 1.8
- % move from entry – 1.5%

Not a bad trade from a reward to risk perspective I’d think. Also, since we are looking a 1.5% move, this may pretty much happen in a single day.

Anyway, the whole point here is to elaborately explain to you that TA can easily be applied to commodities such as Gold.

I hope the last two chapters have given you enough information on Gold, this, in my opinion, is put you in a good spot to get started in trading Gold.

Onwards to Silver!

1. The price of Gold if fixed twice a day in the AM & PM session in London
1. Only designated banks can participate in the London fix.
1. India too has a gold fix, similar to London fix – however, there is some circularity here as traders tend to look at the prices of MCX.
1. The spot price of gold in US and India differs mainly owing to the additions duties, taxes, and charges that get added in India.
1. Since spot prices vary, so does futures price.
1. Dollar and Gold are inversely related.
1. Commodity fundamentals are complex to understand. Hence traders tend to look at demand and supply.
1. Demand & supply reflects in the current price, and also manifests itself in charts.
1. You can apply technical analysis on Gold and other commodities



## 7.Gold_(Part_1)

[Read more](https://zerodha.com/varsity/chapter/gold-part-1/)



### 7.1 – Orientation

As you know, there are two commodity exchanges in India – Multi Commodity Exchange (MCX) and National Commodity and Derivative Exchange (NCDEX). MCX is particularly popular for the Metals and Energy commodities while NCDEX for all the agri commodities. However, there is a lot of activity picking up on MCX for agri commodities as well. My job over the next few chapters is to discuss these commodities which are traded on the exchanges and get you familiar with the commodity contracts.

We will look into every commodity that is actively traded on the commodity exchanges. The idea is to know how the commodity contract works (contract specification), figure out which contract to trade and identify the factor which influences the commodity. I will skip the usual background to commodities market part, the one which talks about the history, forwards markets, the farmers in the US, the Chicago Mercantile Exchange etc. You will find this in almost any material on the Commodity market. I want to get straight to the heart of the topic by slicing and dicing the contract specifications of commodities and other details around them.

Here is the list of commodities available on MCX to trade; of course I got this list from the MCX website –

The idea is to cover all the major commodities that one can trade. Needless to say, one has to know how ‘Derivative Futures’ function before attempting to understand Commodities. So if you are not familiar with Futures, I’d encourage you to read the module on  futures trading.

Anyway, assuming you are familiar with Futures, we will now start with Gold.




### 7.2 – The Gold Contract

Gold is a very actively traded contract in MCX. It has ample liquidity, with daily trades of roughly 15,000 contracts translating to a Rupee value of over 4500 Crore. Note, these numbers belong to just one type of Gold contract, often nicknamed “Big Gold”.

Gold comes in quite a few variants that one can choose to trade-in. Newbie and sometimes even the experienced commodity traders often get confused with these contracts, not knowing which one to trade and the difference between them. To begin with, let me list down all the different types of Gold contracts –

1. Gold (The Big Gold)
1. Gold Mini
1. Gold Guinea
1. Gold Petal

All these variants belong to the same underlying, i.e. Gold. I guess the best way to understand the difference is by understanding the contract specification of each of these variants. We will start with the big boy first, i.e. ‘The Gold’.

Here is the contract specification as per MCX, let me list the important things first, and then we will understand them one by one –


Particular | Value
--- | ---
Price Quotation | Rupee per 10 grams inclusive of all taxes and levies relating to import duty
Lot Size | 1 kilogram
Tick Size | 1 rupee
P&L per tick | Rs. 100
Expiry Date | 5
Delivery Logic | Compulsory
Delivery Unit | 1 kilogram


Let me discuss these details in the same sequential order so that it becomes easy for you to understand the subsequent contracts. We’ll start with the price quotation.

The price quotation, as you can see, is for 10 grams of Gold. This price includes all the import duties and taxes; of course, we will talk more about this at a later stage. For now, be aware that the price of MCX is all-inclusive. Have a look at the following snapshot, and it shows the last traded price of gold futures on MCX –

As you can see, the last traded price of Gold is Rs.31,331/-. Do note; this is the quote for 10 grams of gold. Since the lot size is 1 Kg (1000 Grams), we can calculate the contract value –

(1000 * 31331) / 10

= Rs.31,33,100/-

So what is the margin required to trade this? We can check this from Zerodha’s margin calculator –

The margin amount required is Rs.1,25,868/-, which means the margin percentage is roughly –

1,25,868 / 31,33,100

=  4.017%

As you can see, the margin percentage is just about 4%, which is pretty much similar to the currency contracts. However, the Rupee value of the margin is way too high, and it, therefore, prohibits many retail traders from initiating positions in Gold. In fact, this is the reason we have contracts like Gold Mini and Gold Petal, where the Rupee value of the margins is lower. We will talk about these contracts a little later.

Now assume you buy 1 lot of Gold on MCX, this means you have to park close to 1.25 lakhs as margin, and with each tick, you will either make Rs.100 or lose Rs.100 and how did we arrive at that? Well, it is fairly simple –

P&L per tick = (Lot Size / Quotation) * Tick Size

Let us apply this on Gold –

= (1000 Grams / 10 Grams) * 1 Rupee

= 100 Rupees

In fact, you can apply this formula to any futures and options contract to calculate the P&L per tick. Let me demonstrate this formula for the JPY INR contract. If you recollect the lot size for this contract is 100000 JPY, and the quotation was for 100 JPY, and the tick size is 0.0025, using this we can calculate the P&L per tick –

(100000/100)*0.0025

= 2.5 Rupees

Anyway, let us now focus on expiry. If you look at the expiry of Gold, it simply says 5 th  day of the contract month. Gold contracts are introduced every 2 months, and each contract stays in the system for a year, and at any point, you will have 6 contracts to choose from. Considering we were in August 2016, the following table should give you an idea of how this works –


Currently available contract | Expires on
--- | ---
October 2016 | 5
December 2016 | 5
February 2017 | 5
April 2017 | 5
June 2017 | 5
August 2017 | 5


Needless to say, the most recent contract is the most liquid contract to trade; in this case, it would be October 2016 contract. Now when the October 2016 contract expires on 5 th  Oct 2016, September 2017 contract will be introduced, and the most active contract from 5 th  Oct 2016 would now be the December 2016 contract.

Do recall, settlement in equities is always in cash and not physical. However, when it comes to commodities, the settlement is physical and therefore ‘delivery’ is compulsory. This means if you hold 10 lots of gold and you opt for delivery, then you will get 10 kg of gold. To get the delivery of the commodity, one has to express his intention to do so. This has to be done any time before 4 days to expiry. So given that the expiry is on 5 th , one has to express his intent to take delivery anytime on or before the 4 th  (1 st , 2 nd , 3 rd , 4 th ).

If you are trading with Zerodha then do note, we do not allow you to get into the physical delivery of commodities. So you will be forced to close the position before 1 st  of the expiry month. In fact, I personally prefer to close the positions early on and not really get into the physical delivery of commodities.

For all practical purposes, if you know these things about the Gold contract, you pretty much know what is really required before you trade the big Gold contract.

We will now move on to know the other variants of gold that gets traded on the exchange.




### 7.3 – The other contracts (Gold Mini, Gold Guinea, Gold Petal)

The big gold contract, as you realize demands a heavy margin requirement in terms of Rupee value. This prevents a lot of traders from trading the big gold contract, and perhaps this is the reason the exchanges introduced contracts with much lesser margin requirement.

The other gold contracts that are available to trade is –

- Gold Mini
- Gold Guinea
- Gold Petal

The details for the other gold contracts are as follows –


 | Price Quote | Lot Size | Tick Size | P&L/tick | Expiry | Delivery Logic | Delivery Unit
--- | --- | --- | --- | --- | --- | --- | ---
Gold Mini | Rs. per 10 gm | 100 gm | 1 rupee | Rs.10 | 5 | Compulsory | 100 gm
Gold Guinea | Rs. per  8 gm | 8 gm | 1 Rupee | Rs.1 | Last day | Compulsory | 8 gm
Gold Petal | Rs. per  1 gm | 1 gm | 1 Rupee | Rs.1 | Last day | Compulsory | 8 gm


I’m assuming the table above is a lot easier to understand now considering we have discussed these details earlier. Let’s dig straight into the margin details.

As you can see, Gold Mini (GoldM) contract requires a margin of Rs.15,682/-. In terms of percentage –

= Margin / Contract Value

Contract Value = (Price * Lot size)/Price Quotation

= (31365 * 100)/10

= Rs.313,650

=15682/313650

=  5%

In terms of margin percentage, this is roughly the same as big Gold. For the sake of completeness let us quickly calculate the P&L per tick for Gold Mini. We know –

P&L per tick = (Lot Size / Quotation) * Tick Size

= (100/10)*1

= Rs.10/- per tick.

Beyond the Gold Mini contract, we have Gold Guinea and Gold Petal contract. These are extremely tiny contracts which demand a shallow margin, as low as Rs.1251 (Gold Guinea) and Rs.154 (Gold Petal). The lot size is small, and therefore the contract value is small as well. You will find a few variants like Gold Petal (Delhi), Gold Guinea (Ahmadabad) etc., and I would suggest you ignore these, especially if your idea is to trade Gold.

Here is my honest opinion – if you are trading Gold stick to either the Big Gold contract or the Gold Mini contract, simply because the liquidity is quite bad in all the other contracts. To give you a perspective on liquidity on a regular trading day (on MCX) –

- 12 – 13K lots of big gold contracts get traded
- 14-15K lots of Gold mini contracts get traded
- 1-1.5K lots of Gold Guinea contracts get traded
- 8-9K lots of Gold Petal contracts get traded

The number of lots in Gold Petal should not entice you to believe that the liquidity is high, do remember Gold Petal lot size is just 8 grams, and therefore 8-9K lots translates to roughly 2-2.5 Crs.

Another important thing to note – liquidity is highest in the nearest month contract, so always stick to these. The thumb rule here is – farther the contract expiry, lower is the liquidity.

With this, I assume you are familiar with the Gold contracts and logistics. In the next chapter, we will discuss a few interesting topics such as the parity in domestic and International gold contracts, factors influencing Gold, the relationship between gold, equities, and dollar etc.

1. Gold is one of the most popular bullion contracts that gets traded on MCX.
1. The gold contract comes in a few variants – Big Gold, Gold Mini, Gold Guinea, and Gold Petal.
1. Big Gold is the most popular contract, but requires a margin over Rs.1,25,000/-.
1. The P&L per tick for the big Gold is Rs.100.
1. P&L per tick can be calculated as = (Lot Size / Quotation) * Tick Size.
1. Gold Mini is the 2 nd  most popular Gold contract, requires a margin of roughly 15K.
1. Gold Petal and Guinea are other variants demanding much lower margin requirement. However, the liquidity in these contracts is quite low.
1. It is always a good idea to stick to the nearest month contract as liquidity is high in these contracts.
1. Delivery is compulsory for all these contracts; therefore, it makes sense to close these contracts at least 4 days before the expiry of the contract.



## 9.Silver

[Read more](https://zerodha.com/varsity/chapter/silver/)



### 9.1 – The Bullion Twins

To begin with, I need to apologise for the delay in putting up this chapter. Perhaps this is the longest ‘in-between chapter’ break I’ve taken from the time I have started writing for Varsity. I’ve been working on another high priority project which required my time and attention, hence the delay.

Anyway, let us get straight to work and discuss Silver. Precious metals such as Gold, Silver, and Platinum are collectively referred to as ‘Bullion’. There is a common perception that the market price of gold and silver makes similar moves. If this is true, then it gives rise to many trading opportunities such a ‘pair trading’. We will discuss pair trading in detail, perhaps in a different module altogether. However, let us go ahead and investigate if Gold and Silver move in tandem. I did run a correlation check on Gold and Silver using 30 minutes intraday data for the last 3 months (note this is over a 1000 data points) and here are the results –

The correlation on an intraday basis is  0.7 , which is quite remarkable. I’m guessing the correlation at the end of day basis would be even better. So what does this mean? Well, the correlation suggests that the two metals make similar moves on an intraday basis. If you recall, we discussed the concept of correlation in detail in the USD INR chapter. I’d suggest you read up  section 5.3  of chapter 5 if you haven’t already done so.

If the intraday correlation is as tight as 0.7, then we can think about exploring trading ideas of going long on gold and short on silver or vice versa. This will be a kind of hedged strategy as you are long and short (on similar assets) at the same time. The idea here is just to let you know that building such a trading strategy is a possibility; please don’t jump in and set up a trade just with this information. J

There are lots of other things to take care of when you initiate such trades; more on pair trading at a later point. Meanwhile, have a look at the intraday graph of both gold and silver; I’ve normalized it to start at 100 so that the graphs are more comparable –

If you were to look at the graph and take a call on how closely the two metals move, then chances are you would disregard any correlation between them J, but the actual numbers paint a completely different picture!

Anyway, as I mentioned earlier, I’ve used intraday data here to develop both the correlation and the graph. Longer-term data will portray more meaningful information. In fact, I dug up the correlation data between silver and gold from a recent survey by Thomson Reuters, and here is what they suggest –

The correlations are broken down every quarter (clearly a longer-term approach here) and as you can see the correlation between Gold and Silver is on average is about 0.8, which is why traders prefer to call this pair the ‘Bullion Twins’.

The tight EOD correlation implies that traders and investors consider both gold and silver as safe havens in times of economic crisis. This further implies that any global geopolitical tensions tend to drive the price of not just gold, but silver as well.

Also, please do note the correlation of Silver with Oil, it is quite erratic and gives a sense on unreliability here.




### 9.2 – The Silver Basics

Silver has applications in industrial fabrication, photography, fashion, electrical, and electronics industries. Hence, there is always a demand for silver. In fact, the recent survey from ‘‘The Silver Institute’ in the United States suggests that the global silver demand stands at 1170.5 million ounces. Historically, the demand for silver has grown at roughly 2.5% year on year. Out of the total global demand, the bulk of it comes from industrial fabrication and manufacturing. This directly suggests that the price of silver is influenced by the growth of manufacturing and industrial economies such as China and, to some extent, India.

On the supply side, global mining production along with scarp and sovereign sales stands at 1040.6 million ounces, clearly indicating that silver as a commodity is under slight deficit. The supply has not really improved over the years; in fact, the data suggest that supply growth has just been about 1.4%.

Here is the table which gives you the complete demand-supply scenario in silver –

You can read the complete  survey report.

Given how the supply and demand scenario plays out, there is a lot of scopes to trade silver as a commodity. This leads us back to the most important question – who decides the rate of silver? Well, silver rates are fixed the same way as that of gold, in London, by a pool of participating banks. To know how gold/silver rates are fixed, I’d recommend you  read this .




### 9.3 – The Silver contracts

There are four variants of silver contracts that are available for you to trade on MCX. They differ mainly in terms of the contract value, and therefore the margin required. These contracts are as follows –


Contracts | Price Quote | Lot Size | Tick Size | P&L/tick | Expiry | Delivery Units
--- | --- | --- | --- | --- | --- | ---
Silver | 1 kilogram | 30 kgs | Rs.1/tick | Rs.30/tick | 5th day of the expiry month | 30 kgs
Silver Mini | 1 kilogram | 5 kgs | Rs.1/tick | Rs.5/tick | Last day of the expiry month | 30 kgs
Silver Micro | 1 kilogram | 1 kg | Rs.1/tick | Rs.1/tick | Last day of the expiry month | 30 kgs
Silver 1000 | 1 kilogram | 1 kg | Rs.1/tick | Rs.1/tick | Last day of the expiry month | 1 kg


Of all the four contracts, the ‘Silver’ 30 kg contract and ‘Silver Mini’ are most actively traded on MCX; we shall discuss both these contracts detail. Let us begin with the main Silver contract.

The price quotation for the Silver contract is 1 kilogram. This means when you check the price of Silver on MCX or your trading terminal, the price that you see is for 1 kg of silver. This price includes the import duties, taxes, and all the other applicable duties. Have a look at the screenshot below (taken from Kite) –

The current price of Silver December Future is Rs.42,266/-, note this is quoted on a per kg basis. Since the contract is for 30 kgs (lot size), the contract value will be –

= 30 * 42,266

=  Rs.12,67,980/-

The margins on Silver is roughly 5%, in fact here is the snapshot of the margin required to trade these contracts –

This works out to –

= 68619/1267980

=  5.41%

The P&L per tick can be calculated using the following formula –

P&L per tick = (Lot Size / Quotation) * Tick Size

= (30 kgs /1 kg) * Rs.1/-

=  Rs .  30/-

So for every tick on Silver, you either make Rs.30/- or lose Rs.30/-.

As far as the contracts expiries are concerned, here are the set of contracts that are available to trade as of now (as of Oct 2016), note all contracts expire on the 5 th  of the contract month –

- December 2016
- March 2017
- May 2017
- July 2017
- September 2017

When the December 2016 contract expires, the December 2017 contract gets introduced to the market. You must be aware by now that the most liquid contract to trade would be the one which has the closest expiry date. For example, we were now in Oct 2016, and if I were to trade Silver, I’d choose the December 2016 contract.

Do recall, settlement in equities is always in cash and not physical. However, when it comes to commodities, the settlement is physical and therefore ‘delivery’ is compulsory. This means if you hold 10 lots of Silver and you opt for delivery, then you will get delivery on 30 kg of Silver. To get the delivery of the commodity, one has to express his intention to do so. This has to be done any time before 4 days to expiry. So given that the expiry is on 5th, one has to express his intent to take delivery anytime on or before the 4th (1st, 2nd, 3rd, 4th).

If you are trading with Zerodha, note that we do not allow you to get into the physical delivery of commodities. So you will be forced to close the position before 1st of the expiry month. In fact, I personally prefer to close the positions early on and not really get into the physical delivery of commodities just because of the logistics involved.

Another important point to note here – while the delivery is mandatory for Silver (30 kgs) contract, delivery is not mandatory for the Silver Mini and Silver Micro contracts. This means to say that you can let the Silver Mini/Micro contract expire and settle for cash (or opt for delivery). However, you do not have the option to cash settle the Silver 30 kg contract.

Finally, here is something else you should know. Have a look at this snapshot below –

The table above maps a commodity with a location; for example, Silver Micro is mapped to Ahmedabad. Ever wondered what this really means?

We all know that upon expiry, the price of the underlying in the spot market and its futures price converge to a single price point. Now in case of equities, the underlying and its futures are traded on the same platform, i.e. NSE (and now BSE as well). So, for example, Infosys Spot in NSE will converge with Infosys Futures on NSE. However, in the case of commodities, there are many different spot markets. For example, Pepper and Rubber are prominently traded in Kochi. Gold is traded in both Mumbai and Ahmedabad and so on. Given this, upon expiry, the futures of Gold should merge with which spot price? Should it be the one in Mumbai or the one in Ahmedabad? For this exact reason, MCX has mapped each commodity with a spot market, and upon expiry, the futures price will converge with the price of the designated spot market.




### 9.4 – The other Silver contracts

If you are comfortable with the contract details of Silver mentioned above, then it is fairly easy to understand the other silver contracts that are traded on MCX. They vary mainly in terms of the lot size and therefore the margin requirement.

I’ll skip working out the math, but instead, put up the margin numbers and the delivery option directly for you. The delivery option helps you decided whether you would like to take delivery of the contract or simply cash settle.


Contract | Margin Required | Margin as a % | Delivery options
--- | --- | --- | ---
Silver Mini | Rs.13,158/- | 6.27% | Cash/Physical
Silver Micro | Rs.2,618/- | 5.1% | Cash/Physical
Silver 1000 | Rs.2,711/- | 6.2% | Physical only


As you can see, the margins required are much lesser (quite naturally) compared to the big silver contract.

As far as trading is concerned, similar to Gold, the Silver Fundamentals are quite complex – tracking them on a day to day basis may not really be possible and in fact, is not really required. Most traders I know trade commodities based on technical analysis. I personally think this a much better way to go about active commodity trading.

Apart from technical analysis, one can even choose to trade based on quantitative techniques such as ‘Pair Trading’. As stated earlier in this chapter, we’ll discuss this technique in a separate module altogether.

Key takeaways from this chapter

1. Gold and Silver are correlated both on an intraday basis and on an end of day basis.
1. Gold and Silver make a good pair for trading based on the ‘Pair trading technique’.
1. Silver does not have a great correlation with crude oil.
1. There are 4 variants of silver traded on MCX.
1. The main Silver contract has a lot size of 30 kgs and requires a margin close to Rs.75,000/-.
1. The average margin requirement for silver is roughly between 5-6% of the contract value.
1. Technical analysis works quite well on Silver.



## 11.Crude_Oil_(Part_2),_the_crude_oil_eco_system

[Read more](https://zerodha.com/varsity/chapter/crude-oil-part-2-the-crude-oil-eco-system/)



### 11.1 – Mapping companies

I’m hoping that the previous chapter gave you some insight into the current situation of the crude oil fundamentals. Some of you may also be interested in learning how crude oil is extracted from the ground and supplied to various stakeholders such as the refineries. The ‘Oil and Gas videos’ channel on YouTube, has done a stellar job in putting up short animated videos on this topic. If not all the videos, I’d encourage you to at least  watch this one .

This animated video gives a beautiful, high-level understanding of how oil is extracted from the ground and ocean beds. You will also understand what ‘oil rigs’ are in this video. They are those important pad-like things, floating in the ocean, with flames spewing out of the exhaust. Companies such as Aban Offshore, Selan Exploration, Cairn India etc., are involved in setting this infrastructure up. I know a lot of traders and even investors investing in these asset-heavy companies, without knowing the operational core of such companies. I think this is not a great idea; one should always know what they are dealing with. Given this, and the relevance of crude oil on many listed companies, I would like to discuss how the oil industry is structured briefly.




### 11.2 – Upstream, Downstream, and Midstream

A note of warning here – I’m no oil and gas expert; my knowledge is limited to just the basics. As a crude oil trader, I do think it is essential to know the industry dynamics simply because the trading opportunities may not always be presented to you directly. For example, there could be some fundamental change brewing in crude oil, it may not manifest into a trade-in crude oil now, but instead, a trade opportunity may come about in the downstream companies. For you to benefit from this, it becomes imperative to know the layout of the industry and identify areas of opportunity. My objective here is to familiarise you with the industry layout and help you map companies and how they fit into the overall oil and gas ecosystem.

So let us get started.

The oil and gas industry can be segregated into three sections –

1. The upstream industry
1. The downstream industry
1. The midstream industry

Let us briefly discuss each one of them starting from the upstream companies.

Upstream companies

The upstream companies  are the ones that do the dirty work – they take on geological surveys, dig up bore wells to get a sense of what’s in the ground underneath, and if they find oil reserves, they then begin the drilling and extraction of crude oil. It takes many years for upstream companies to identify an asset (potential oil well) and convert it into a fully functional, profitable oil well. Upstream companies manufacture and store crude oil in barrels (millions of barrels are produced every day). These companies do R&D and engineering and are asset-heavy. Therefore, they end up spending a lot of money (read as capital expenditure) to extract oil.

However, the price at which they can sell this oil in the open market is not really in their control. The price is determined by the markets in which market participants like you and I participate and influence the international oil price. Every upstream company has a breakeven point – defined as the cost of producing one barrel of oil. The breakeven point is also referred to as the ‘full-cycle cost’. Naturally, these companies would strive hard to keep their costs low and bring down the full-cycle cost.

Companies such as ONGC, Carin India, Reliance Industries, Oil India are some of the Indian upstream companies. Internationally, companies such as Shell, BP, Chevron etc., fall in this category.

The key point to note here is that low oil prices do not really favour upstream companies in general, especially the ones which have high economies of scale (the ones which have high full cost cycle). Obviously, the higher oil price is good for these companies as their efforts to extract oil remain the same, but margins improve drastically.

Downstream companies

We will talk about the  downstream industry  first and then discuss the midstream industry. Generally speaking, the job of the upstream companies ends at producing crude oil. ‘Crude oil’ as you realize is produced in its raw form. If we have to use it as petrol or diesel, then the crude oil has to be refined. This is where the downstream industry comes into the picture. These companies purchase the crude oil from upstream companies and refine the crude oil to various forms such as – petrol, diesel, aviation fuel, marine oil, kerosene, lubricants, waxes, asphalt, liquefied petroleum gas etc.,

Companies in this sector also go the extent of distributing these products across the value chain, right from business to business (B2B distribution) to business to consumer (B2C) distribution. In fact, petrol bunks are a good example of this phenomenon. Petrol bunks are nothing but a retail outlet, retailing petroleum products and owned by downstream companies.

Good examples of downstream companies in the Indian context are – BPCL, HPCL, IOC etc. Some companies try and integrate and operate across the value chain, i.e., they try and do both upstream and downstream operations. Companies that successfully combine these operations are often referred to as the ‘Super Major’. A classic example of this is the US-based ‘Exxon Mobil Corp’. They produce close to 4 million oil barrels per day and operate around 40 oil refineries across 21 countries. An operation of this scale is mammoth management and operational undertaking; not everybody’s cup of tea.

So, if the oil prices cool off, then it implies that the downstream companies can buy oil at lower prices from the upstream company (which is not so good for upstream boys as their efforts to produce oil is still the same). However, the benefit of lower oil price is not passed on to the end-user, i.e. you and me, but in developed countries like US and UK, this benefit is passed on to the end-users quite quickly.

Anyway, here is what you need to remember at this stage –

- Upstream and downstream companies share a see-saw relationship.
- Low oil prices are bad for the upstream boys but suitable for the downstream fellows.
- Higher oil price is right for upstream fellows but bad for downstream boys.

So the next time you see oil prices going down, don’t be in a hurry to short ONGC or BPCL. Take a minute to understand whether the company is a downstream or upstream company, and analyse the impact of oil prices on the company.

Midstream companies

We will quickly discuss the  midstream companies  before looking into other aspects.

In very loose terms, midstream companies are the ones act as a courier between the upstream and downstream companies. They are responsible for the transport of oil from the oil well to the refineries. They do this via pipelines, road transportation (oil takers), and by ocean shipments. Consider them as the wholesalers of crude oil. Some midstream companies try to deliver more on the value chain by refining the crude oil to some extent. Hence their operations sometimes overlap with downstream companies. Since midstream companies deal with both up and downstream companies, they are caught in the middle, they neither want oil prices to increase or decrease, but seek stability in oil prices. If oil price decreases, then upstream companies are affected, this is not good for them. Likewise, if the prices increase downstream companies are affected, this is again not so great for them.

Some of the top players in this segment are TransCanada, Spectra Energy, Willams and Company etc.

Here is a snapshot which gives you a quick overview of all the three industries –




### 11.2 – Difference between WTI Crude and Brent

Many people tend to speak about ‘Crude Oil’ as if it is a single uniform entity, something like Gold. However, this is not true. Did you know there are many varieties of crude oil that can be extracted from the ground below? The difference comes in mainly from the geographic variation and its unique characteristics. The impact of geography is so much that the characteristics of crude oil, right from thickness, color (light yellow, golden yellow, deep black), viscosity, sulfur content, volatility etc., change drastically.

Given this, naturally, there are many different types of Crude oil. I’ll not get into details,  not that I don’t want to; it’s simply because I don’t know them myself 🙂 . I know the fundamental difference between to West Texas Intermediate (WTI) and Brent Blend, which is what matters to most of the crude oil traders and hence we will stick to it.

Before we get into the difference between the two, let us touch upon two distinct characteristics of crude oil, which define the variation of crude.

API Gravity  – API here stands for ‘American Petroleum Institute’, which is essentially a metric to compare the lightness of crude oil with that of water. If the ‘API Gravity’ of a particular variety of oil is higher than 10, it merely indicates that the oil is lighter than water. Therefore the oil can float on water. API gravity less than 10 means that the oil is heavier than water; hence the oil will sink in water.

Sweetness  – Crude oil of any form will naturally contain sulfur. The lesser the content (I was told sub 0.5%) the ‘sweeter’ the oil is considered. Higher the content of sulfur, then the oil is not considered ‘not so sweet’.

The difference between WTI and Brent mainly comes from the API Gravity and its sweetness.

West Texas Intermediate (WTI)  – This is considered a very superior quality of crude; hence the final refined products are also meant to be of superior quality. The API gravity is 39.6 (recall higher than 10, then it’s lighter than water); therefore, WTI is considered super light. Further, the sulfur content is just 0.26 per cent, making it a lovely crude oil.

Brent Blend –  Much like blended scotch, crude oil can also be blended to create variants with certain properties. Apparently, the Brent blend is created by blending oil from over 15 oil wells. Brent has a sulfur content of 0.37%, which makes it sweet, but not as sweet as WTI. The API gravity is around 38.06, which makes Brent quite ‘light’.

Clearly, due to the variation in the characteristics, the two are traded at different prices. Have a look at the price quote for these two variants –

Source: Bloomberg

Most importantly, you need to know that crude oil traded on MCX follows the WTI and not Brent crude.

By the way, you may also be interested to note, that Brent Crude has an optional delivery meaning, upon the derivative contract expiry, you can choose to either physically settle or cash settle the contract. WTI on other hand is physically settled. Probably this explains why Brent crude is priced higher compared to WTI




### 11.3 – Crude oil inventory levels

Supply-demand effects crude oil prices and therefore, the profitability of many companies linked at various points in the oil and gas ecosystem. This makes tracking the inventory levels of crude oil prices important on several counts. You can use this information to trade not just crude at MCX, but also set up trades on companies such as BPCL, HPCL, IOC, ONGC etc.

There are two organizations that put out the inventory details –

1. US Energy Information Administration (US EIA)  – They report the inventory levels every week. You can track the  information here.  Remember, inventories tend to increase when the demand is low, or there is an oversupply, either which way, it isn’t good for oil prices, and hence the upstream companies. Likewise, lower inventories mean either there is a lot of demand, or there is a production cut, both ways it’s good for crude prices and upstream companies.
1. OECD Crude Oil inventory  – OECD stands for ‘Organization of Economic Co-operation and Development’. OECD also gives out crude oil inventory (but not at a weekly forecast like EIA). You can track the inventory position on  OECD’s website.




### 11.4 – The relationship between the US Dollar and Crude Oil

The crude oil and US Dollar share an inverse relationship. A strengthening US Dollar tends to drive the price of crude oil down. Likewise, weakening USD tends to drive the prices of crude oil higher. At this point, it is essential to note that both these assets have their own supply-demand dynamics influencing their price movement; however, they are also somewhat linked to one another.

If you do an image search for ‘Crude Oil versus Dollar’, you will find many charts which display this inverse relationship. Here is one for example –

The interesting thing to note here is, the dollar used in these charts is not the “USD Dollar Spot” but instead the ‘Dollar index’, which is a representation of dollar against major world currencies. This makes absolute sense as crude oil is an international currency priced in dollars, therefore irrespective of who is buying crude oil, payments happen in US dollars.

Given this, if the Dollar increases (for whatever reasons), then countries tend to purchase more oil for the same level of the dollar (more oil can be purchased for the same dollar level). This leads to quicker depletion of inventory levels, therefore the price of oil increases.

The argument above is generally true over long time periods. However, please do remember that both these assets have their own fundamental dynamics playing. So there could be instances where both of them may break their inverse correlation and head in the same direction.

Also, remember the inverse correlation only suggests that the two assets move in the opposite direction but does not say anything in magnitude. So, for example, if the dollar declines 10%, this does not imply that the Crude oil will increase by 10%.

In the next chapter, we will discuss the contract specification of Crude oil on MCX.

1. It is important to understand the Oil & Gas ecosystem and map how companies are mapped under this ecosystem.
1. Upstream companies are asset-heavy and are involved in extracting oil from the ground.
1. Increase in oil price is good for upstream companies, while a decrease is not.
1. Downstream companies mainly consist of refineries. Higher oil price is not good for them while lower oil prices are good (as their margins tend to increase).
1. Midstream companies are involved in oil and gas logistics. They prefer stability in oil prices as they do business with both upstream and downstream companies.
1. WTI and Brent are two variants of crude oil varying mostly in terms of API gravity and sweetness.
1. Brent Crude is the international benchmark.
1. Keeping track of inventory levels is critical. Increase in inventory tends to decrease the crude oil price, and drop inventory tends to increase the prices of crude oil.
1. The USD index and crude oil share an inverse correlation over longer periods. However, this relationship may break over short time frames owing to their own supply-demand dynamics.



## 10.Crude_Oil_(Part_1),_digging_the_past

[Read more](https://zerodha.com/varsity/chapter/crude-oil-part-1-digging-the-past/)



### 10.1 – The Commodities superstar

If I have to pick one international commodity which can give you all the dramatic ups and downs of stock markets as portrayed in the movies, then it has to be the ‘Crude Oil’. Wonder why? Have a look at the chart below –

The dramatic rise to $140 per barrel to the immediate sharp correction, then a recovery back to near $110 to a merciless crash to sub $30, the crude oil chart can invoke all human emotions, just like a perfectly well-directed movie! The fact that this is an international commodity, actively traded by hundreds of thousands of traders across the globe only adds to the complexity of it all.

So what is really going on in crude? Why did crude crack from the highs of $115 all the way down to $28? What caused this manic panic? What is happening to crude now? Where are we headed now? To understand this fully, we need to rewind and dig into the recent history of 2014 – 15.

This is exactly what we will do in this chapter. For the sake of this chapter, let us go back to the first half of 2015 and see how things looked back then.




### 10.2 – The crisis revisited

From over $110 per barrel in January 2014 to a low of $28 per barrel in January 2016, the Brent Crude oil has perhaps seen the worst decline in prices over the recent 5 years. While this dramatic price decline has brought cheer to a few corporate and perhaps few countries, it has disrupted oil producing economies. Literally, nobody saw this coming; even if someone did, the magnitude of this fall (over 75%) was beyond everybody’s wildest imagination. Is this the bottom of the crash? Well, your guess is as good as mine, but the intensity of the crash in crude oil is so severe, it would be hard to believe the bottom is in sight.

So what really went wrong?

To understand what went wrong, we need to understand the dynamics of crude oil and how business was carried out before the recent crash. This discussion also doubles up as ‘oil basics’ for you. Oil rich countries produced several million barrels of crude oil which were exported to The US, China, India, and European countries daily. The oil-producing countries are split into two baskets –

1. “Organization of the Petroleum Exporting Countries  (OPEC) ” nations which include countries like Saudi Arabia, Qatar, Kuwait, UAE, etc., and
1. Other oil-producing countries such as – Brazil, Canada, Russia, Mexico, Norway, etc., choose not to be part of the oil cartel, i.e. OPEC. Hence they are just referred to as ‘ Non-OPEC  countries”.

Between the OPEC and non-OPEC countries, close to 90 million barrels of oil were pumped daily. The graph below shows the daily oil production split between OPEC and non OPEC countries –

The Trigger

Different countries produce oil at different rates; this rate at which they produce mainly depends on the individual country’s finances and technology. While production depends on internal factors, the sale of oil has always been driven by markets. Clearly, the breakeven point (expressed on a per barrel basis), is the rate at which countries need to sell per barrel of oil to cover the expense of producing the same, varies from country to country. Naturally, selling oil below the breakeven point implies that the country cannot balance its state budget. The table below shows the breakeven points for the OPEC countries –


Country | The breakeven point on a per barrel basis*
--- | ---
Iran | $130.7
Algeria | $130.5
Nigeria | $122.5
Venezuela | $117.5
Saudi Arabia | $106.0
Iraq | $100.6
UAE | $77.3
Qatar | $60.0
Kuwait | $54.0


In the backdrop of these trade dynamics, a triple digit oil price till early 2013 worked really well for the oil producing economies. However, recent developments changed the landscape of crude oil business dynamics. Specifically, the following three major events turned the tables around for crude oil prices –

1. American Shale Oil  – The American shale oil, which comes from oil shale (sedimentary rocks containing bituminous material), which is an alternate to crude oil became technologically viable, and the cost of producing the same became relatively cheaper. The output from the American Shale oil production increased, flooding the market with cheaper oil. By current estimates, it is believed that the US has enough shale oil reserves to last generations. Shale oil from Texas and North Dakota displaced exports from OPEC members to The USA. This set the stage for a collapse in crude oil prices.
1. Lack of co-ordinate action  – In the backdrop of increased shale oil production in The USA and the ongoing slide in crude oil price, one of the methods for oil producing countries to control the situation was to lower the supplies and regulate the demand supply situation. However, OPEC was not really successful in convincing OPEC and other non-OPEC oil producing countries to cut the crude oil production to support the crude price. In fact, cutting oil production is considered more expensive than pumping oil.
1. China Factor –  China has been one of the largest consumers of major international commodities, including iron ore, coal, and crude oil. In fact, in 2013, China surpassed The US in oil imports. However, reports suggest that the Chinese economy is not growing at the same pace as it used to, resulting in lower demand for international commodities. Needless to say, this has a significant impact on the spiraling crude oil prices.
1. Market Dynamics  – The above three points triggered a steep sell off in crude oil, adding fire to this sell off was the heavy short positions built upon Crude Oil contracts.

Generally, when the price of crude oil falls, the US dollar tends to get stronger, especially over the currencies of the emerging economies. This is quite natural as  an increase in oil  price widens the US current account deficit (remember the US also imports oil from the Middle East), which obviously is not a great factor for the US Dollar, and the reverse helps the dollar strengthen.  Hence the Dollar and oil share an inverse relation . Do recollect, in 2008 when Oil hit a peak of $148, the US Dollar was trading at 1.6 to the EURO.

The Russian Episode

Russia is one of the largest (non OPEC) producers and exporters of oil. The Russian federation’s oil exports contribute nearly 40% of the total exports. With a slump in oil prices, the Russian economy seems considerably weakened. Three factors are working against Russia, two of which can be directly attributed to the oil prices –

1. Oil Price  – Russia needs the oil prices to be approximately in the region of $105 – $107 to balance its budget and keep its finances in order; clearly, with oil at $50, Russia gets a severe blow on its budget.
1. Rubble Trouble  – Remember, Russia is an emerging economy. With the slide in oil price, the Russian Ruble has massively weakened against the US Dollar. So much so, that the Russian Central Bank increased the interest rate overnight by 7.5% to defend the Ruble (yes, this did happen back in 2015).
1. Crimea Curse  – Western countries continue to impose sanction cuts on Russia for its aggression on Ukraine. This means access to external capital is extremely difficult (especially when it’s most required) for Russia.

Add to this the Syrian crisis, and a host of other local factors, there is little hope that Russia may not actually slip into a financial coma dragging the federation into a recession.

The India macro angle

On the face of it, the fall in crude oil seems to benefit India as the pressure on petroleum subsidy eases significantly. India is a net oil importer (nearly two-thirds of India’s oil is imported), pays a heavy bill for its oil imports. Naturally, the fall in crude oil means an improvement in the fiscal deficit, easing of inflation and the possibility of an interest rate cut.  All of which is desirable for India in the backdrop of the current economic situation.

But there is another angle to low oil prices. While low oil prices help the domestic import bill, it will also impact our exports receipts. Most of the exports from India are to countries whose economy depends on oil – UAE, US, Saudi Arabia, Kuwait, Iran, China etc. Quite naturally, with low oil prices, the spending by these countries also decreases, thereby impacting business with India.

In fact, if you go back and look at the October 2014 import & export data from RBI, it clearly suggests the same – while the oil import bill reduced by 19% (y-o-y), the exports also declined by 5%. Clearly, the advantage of low oil price is not the boon it seems to be. In fact, on 6 th  January 2015, we got a glimpse into what can happen if the oil price continues its fall – the NSE Nifty fell over 255 (~ 3.0% decline) points creating a ruckus on the street.

Impact on the Indian Companies

State owned oil marketing companies (OMC) such as HPCL, BPCL, and IOC are a direct beneficiary of low oil prices. The low oil price has a positive impact on oil marketing companies (OMC) in terms of reducing the stress on their working capital requirements. In fact, both BPCL and HPCL have retired over 50% and 30% of their short term borrowings over the last two years, respectively. If the price of crude oil prices stabilizes around the current level of $50 per barrel, then naturally it will be great for these companies in term of cleaning up their balance sheets and improving their bottom line.

Is this the end?

Well, this just depends on the supply-demand situation. Clearly, as Saudi Prince Al-Waleed Bin Talal says, “If the supply stays where it is, and the demand continues to be where it is, then there is little hope for the oil prices to bottom out here”. Besides, the US has withdrawn the 40-year ban on the export of oil– which means more supply to the market, thereby putting more pressure on prices.

Last month, i.e., September 2016, OPEC has finally agreed to cut the production to support the oil price. You can read the  article on Bloomberg.

American shale oil has no doubt created a ripple in the market, but there is another angle to this – how strong are the balance sheet of these companies fracking shale oil? Are they over-leveraged? Are they overstating the reserves?  These are things the market will learn sooner or later; which will again impact crude oil prices.

However, at this stage, if you ask me – is this the bottom of the oil price crash? Well, your guess is as good as mine.

Please note, unlike all the previous chapters on Varsity, this chapter will not have any key take away points as I’ve just narrated what really happened to crude. What we have discussed today could just be a piece of irrelevant history going forward!

PS: I have taken all the inputs for this chapter form  The special report  on the oil crisis was published by Dalal Street Investment Journal, authored by me.



## 5.The_USD_INR_Pair_(Part_2)

[Read more](https://zerodha.com/varsity/chapter/the-usd-inr-pair-part-2/)



### 5.1 – Futures Calendar spread

All else equal, the futures contract is always supposed to trade at a premium to the spot. This, as we know, can be attributed to the interest rate factor (cost of carrying) in the Futures pricing formula. We have discussed this earlier in the  Futures module.  Any variation in this equation leads to an arbitrage opportunity.

For a quick low-level recap on that, consider this scenario where there is arbitrage opportunity between Spot and Futures –

Futures trade at a lower price  – Assume the spot price is at 100, and the fair value of its future is at 105. The fair value of the future can be calculated using the futures pricing formula. The ‘no-arbitrage spread’ is the difference between spot and Future’s fair value, i.e. 105 – 100 = 5

Given this, for whatever reasons (read as market mispricing) assume the future is trading at 98, this leads to a spread of 7 (105-98) between the spot and future, which can be captured.

All one has to do is buy the future at 98, and simultaneously sell the spot at 100. We know upon expiry, the futures and the spot will converge, and therefore the spread gets captured.

If you are unable to understand the above clearly, I will encourage you to read the chapter from the Futures module (link posted above).

Likewise, if the futures trade at a higher price (over and above its fair value), then one can capture the spread by selling the futures and buying the spot.

We have learnt this before, and this is quite straight forward. However, when it comes to the USDINR contract, for practical reasons such as arbitrage trades involving spot and futures cannot be executed. This is because the USDINR spot market is not really accessible to the retail.

So how does one trade the spreads in the currency segment? Well, this is fairly easy – as opposed to spot-future spread, one has to identify the spread between two different futures contracts expiring over two different dates. This is also known as the ‘Calendar Spread’.

In a calendar spread, you decide whether the spread between two futures contract is considered normal or otherwise. All else equal, the long-dated futures contract will always trade at a premium over the ‘short term’ dated futures contract. For example, the August month futures contract is expected to trade at a premium when compared to July month. Therefore a certain amount of spread between these two contracts is deemed ‘normal’. However, there could be situations where the spread goes beyond normal (either higher or lower), and this is when opportunities arise.

As of today the USD INR July Futures is trading at 67.3075, and the August contract is trading at 67.6900.

The spread is calculated as the difference between the two futures contract –

67.6900 – 67.3075

= 0.3825

Now assume, for whatever reason you think this spread of 0.3825 high, and it should ideally be 0.2000 as opposed to 0.3825. This means you have an arbitrage opportunity here, and you stand to make –

0.3825 – 0.2000

= 0.1825

To capture the spread, you are required to buy the July Futures and simultaneously sell the Aug futures –

Long July Futures at 67.3075

Short August Futures at 67.6900

When you set up a trade wherein you are long current expiry and short further term expiry; it is also called a “ Future Bull Spread ”. Likewise, a ‘ Futures Bear spread ’ is when you are required to short the current month expiry and go long on the further month expiry.

Anyway, once you set up the ‘Future Bull Spread’, you will have to monitor the trade and close the position when the spread converges to 0.2000 or lower. You will profit when one of the following things happen –

1. When the July (long) leg rises and Aug (short) leg falls
1. When the long leg raises, and the short leg remains unchanged
1. When the long leg raises, and short leg rises, albeit at a lower rate.
1. When the short leg falls faster than the long leg
1. When the long leg remains unchanged and short leg falls

Will the spread converge? If yes, then when will it converge? Why should it converge? Will one of the above situations really pan out? Well, the answer to this really depends on how well you know the spread, and for you to know the spread really well, you need to backtest it. Techniques of backtesting are perhaps a topic for another day; however, I’d like to show you how easy it is to buy sell the spread from your trading terminal.




### 5.2 – Executing the spread

How would it be if you could directly buy or sell the spread? For example, in the above case, we concluded 0.3825 is an overpriced spread, to capture this spread you execute two orders, i.e. buy July Futures and sell August futures.

Executing these trades has some inefficiency mainly in terms of execution risk – by the time you buy/sell both the contracts, the prices could move, and thereby the spread may no longer look attractive.

Given this, it would be really convenient to buy the spreads directly and not really deal with two different contracts. If you are a Zerodha customer, you have access to NEST trader, from which you can trade the spread directly. Of course, in the future, this will also be available in both Pi and Kite.

Here is a series of snapshots which will help you trade the spreads directly.

Look at the part highlighted in red, as you may have realized; this snapshot is from the market watch. Starting from the left –

1. We select ‘Spread’ from the dropdown, which specifies that we are looking at spread contracts.
1. After selecting spreads, we choose CDS from the dropdown to indicate currency derivatives as the segment.
1. FUTCUR indicates that within CDS spreads; we are interested in Future contracts.
1. USDINR indicates that we are interested in the USDINR contracts.
1. The full view of the dropdown menu is visible here, as you can see, there are many different spreads available. However, we are only interested in the July-August spread, which is what we have selected.

Once we configure the above-market watch, we submit this to load the spread, here is how it looks like –

I’ve highlighted the spread’s last traded price. As you can see, this particular spread instrument denotes the spread between July and August contract.

Note – the spread should be trading at 0.3825 and not really 0.3700 right? Why do you think there is a price difference?

I’ll try and explain this from as per my own understanding, and I could be wrong; therefore, comments are more than welcome! Also, we are digressing a bit here, so try not to lose focus on the main topic, i.e. how to trade the spreads.

Have a look at the snapshot below –

The market watch has July, August and the July-August spread contract loaded.

Forget about the spread contract, for now, assume you want to set up a Future Bull Spread (buy July, sell Aug) contract, then you essentially –

Buy July contract at the Ask Rate – 67.3100

Sell Aug contract at the Bid Rate – 67.6775

Spread = 67.6775 – 67.3100 = 0.3675

Now, if you were to set up a Future Bear Spread, then you essentially –

Buy August contract at Ask Rate – 67.6850

Sell July contract at Bid Rate – 67.3075

Spread = 67.6850 – 67.3075 = 0.3775

As you can see, there are two spreads possible based on what you intend to do, i.e. future bull/bear spread.

Now the question is – which price should the spread reflect? Would it be that of the Future Bull Spread or the Future Bear spread?

I guess that the spread trades close to the average of the two spreads. In this case, the average is 0.3725, and the actual market spread is 0.3700. Why 0.3700 and not really 0.3725? I’d attribute this to one of the two things – the latest quote has not been captured by the terminal or lack of liquidity.

A different explanation here could be that the spread itself is mispriced!

Anyway, back to the main topic, i.e. buying/selling the spread. Once the spread instrument is loaded, all you need to do is select the instrument from your market watch and press F1 or F2 for buying and selling respectively.

This is what you see upon invoking the buy order window –

The window is pre-populated with the spread details; you may want to edit the quantity bit to suit your lot size requirement. Press submit to place the order.

As simple as that!




### 5.3 – USD INR Stats

I thought it would be interesting to study some statistics on the USD INR pair; I downloaded the  USD INR spot data  from the RBI site.

Let us start by looking at the long term chart of the USD INR over the last 8 years (July 2008 to July 2016) –

Clearly, the US Dollar has strengthened against the Indian Rupee over the last 8 years. Quite intuitive as our economy has literally stagnated over these years. ☺

Have a look at the daily return plot of the USD INR –

We can observe a few interesting parameters from this –

The average daily return of USD INR is about 0.025%. The maximum and minimum daily return stands at +4.01% and -2.962%, contrast this with Nifty 50’s maximum and minimum daily return of +3.81% and -5.92%, you will realize that the USD INR pair is a lot less volatility compared to Nifty 50 or in fact any other indices. This fact is further manifested in the volatility numbers –

- Daily Standard deviation (last 8 years) – 0.567%
- Daily standard deviation (2015) – 0.311%
- Annualized standard deviation (2015) – 4.94%

These numbers are clearly much lower compared to the Nifty 50’s daily volatility and annualized volatility number of 0.82% and 15.71% respectively.

Further, I also ran a correlation function on Nifty 50 and USD INR, before I tell you the answer I want you to guess what this correlation would be like.

For those of you who don’t know what correlation is, here is a quick explanation –

Correlation between two variables gives us a sense of how two variables move concerning each other. Correlation is measured as a number which varies between -1 to +1. For example, if the correlation between the two variables is +0.75, then it tells us two things –

1. The plus preceding the number tells us that they both are positively correlated, i.e. they move in the same direction.
1. The actual number gives us a sense of the strength of this movement. In a loose sense, the closer it is to +1 (or -1) the higher is the tendency for the two variables to move in tandem.
1. A correlation of 0 suggests that the two variables are not related to each other.

From the above, we know a correlation of +0.75 suggests that the two variables move not only in the same direction but also tend to move together closely. Note, the correlation does not suggest the extent of the move; all suggest is that the move in the same direction is likely to happen. For example, if Stock A moves 3%, and the correlation between stock A and stock B is +0.75, then it does not mean that Stock B will also move by 3%, all that the correlation suggests is that Stock B will move up positively, just like Stock A.

But, there is another twist here – suppose stock A and Stock B are correlated at 0.75, and the daily average return of Stock A and Stock B is 0.9% a 1.2%. It can be said that on any given day, if Stock A moves above its daily average return of 0.9%, then stock B is also likely to move higher than its daily average return of 1.2%.

Likewise, a correlation of -0.75 indicates that the two variables move in opposite directions (indicated by the -ve sign). Suppose stock A moves up by +2.5%, then under a correlation, we know that Stock B is likely to come down, but by what degree will it come down isn’t known.

While we are at it, one more point on correlation. This bit is only for those interested in the maths of correlation. The correlation data makes sense only if the data series is ‘stationary around the mean’. What does this mean? – Well, it simply means that the data set should be sticking close to the average values. Take another look at the graph of the daily returns of the USD INR, reposting the same for your convenience –

The daily average return here is 0.025%. If you notice the daily returns, it is mean reverting in nature, meaning even if the returns shoots up, or comes down, it eventually sticks back to the average value. A data series which exhibits such property is said to be “stationary around the mean”. Stock/commodity/currency returns are invariably stationary, but the Stock/commodity/currency prices are not stationary as they tend to trend.

Confusing? Well, the key point that you need to remember here is that when you run a correlation test, make sure you run it on the daily returns (as they are stationary) and not really on the daily prices (as they tend to trend).

Calculating the correlation between two variables is quite easy, in fact, has just 2 steps –

1. Calculate the daily returns
1. Use the ‘=Correl’ function in excel.

Press enter, and you get the correlation between the two variables.

Remember the correlation between stock A and Stock B is the same as the correlation between Stock B and Stock A.

I hope you’ve had a decent understanding of correlation, its time I repost the question asked earlier.

If you were to guess the correlation between USDINR and Nifty 50, what would it be? Forget about the number, can you at least guess whether they are positively correlated or negatively correlated?

Let us try and deduce this – If the markets (as a representation of the whole economy) are doing good, then the markets tend to attract investments from overseas. This means dollars are coming into the country. The dollars get sold to get converted to Rupee. Essentially this translates to dollars being sold for Rupees, naturally the Rupee strengths. This means the USDINR goes down while the Nifty 50 increases. The same logic can be applied when you look at it from the other way, i.e. market going down while USDINR increases.

This means Nifty 50 and the USDINR should be inversely correlated. In fact, this is true, and the correlation value is -0.12267 (2015 data).

You can  download  the excel sheet.

In the next chapter, we will briefly look into other currency contracts and the role of Technical Analysis while trading currencies. With this discussion, we will wrap up currencies and start exploring the world oh commodities!

- The classic future – spot arbitrage is not really accessible to the retail market. Hence traders tend to look at calendar spreads.
- In a calendar spread you simultaneously buy and sell contracts belonging to two different expires.
- A future Bull spread is when you buy near month futures and sell the further month expiry.
- Futures bear spread when you sell near month futures and buy the further month expiry.
- You can directly trade the spread from your trading terminal; these are called the ‘Spread contracts’
- The USD INR pair tends to have lower volatility when compared to Nifty 50
- The USD INR and Nifty 50 are inversely correlated



## 1.Currency_Basics

[Read more](https://zerodha.com/varsity/chapter/currency-basics/)



### 1.1 – Module Orientation

At the onset, let me give you a quick orientation so that you can set your expectations for this module. The focus of this module will be on three main topics –

1. Currencies and currency trading
1. Understanding Commodities
1. Interest Rate Futures

I agree that each of these topics is vast, and commands an entire module on its own. However, these assets are not as liquid as equities. We are still at a very nascent stage when it comes to trading these alternate assets in India. Given this, the idea here would introduce these assets, familiarize you with what drives these assets, and what you need to watch out for before placing your trades. So, in a sense, you could consider this module as a ‘thought-starter’ of sorts for trading these alternative assets. Needless to say, we will try and discuss these topics to a reasonable depth, ensuring you have more than just the bare basics on these topics.

We’ll begin the module by discussing Currencies. We’ll discuss some of the popular currency pairs traded in India such as USD-INR, GBP-INR, and INR-JPY. We also discuss other (non INR) currency pairs such as EUR-USD, GBP-USD, and USD-JPY. The discussion on currencies would be spread across a few chapters. The objective here would be to introduce these currency pairs and familiarize with not just the contract specification but also with a few fundamental factors that affect these currencies.

Once this is done, we’ll move on to the next part of the module. This deal with Commodities. We’ll follow a similar template here – i.e. introduce the commodities (both agri and non-Agri) and get familiarize you with not just the contract specifications but also a few fundamental factors which would influence the movement of these commodities. Some of the commodities we’ll be discussing would be – Gold, Silver, Zinc, Aluminum, Crude oil, Natural Gas, Turmeric, Cardamom, Pepper, Cotton, etc. Of course, the formula to calculate the price of commodities such as Gold, based on the price of Gold in International markets will also be discussed.

Lastly, this module will discuss ‘Interest Rate Futures (IFR)’, which I think is an inspiring space. The discussion would deal with topics related to RBI’s borrowing pattern, issuance of sovereign bonds, listing on NSE, and eventually trading them. Based on how we progress, we can even touch topics related to bond trading and bond trading strategies.

As you see, we have some fascinating stuff lined up. I believe this will be a great learning experience for you, and me!

Please note, the prerequisites for this course –

1. Futures Trading
1. Options Theory
1. Technical Analysis

The above-mentioned topics are essential before learning about currencies. I’d suggest you brush up these topics before proceeding.

Let’s now begin this module by discussing a few basics about currencies.




### 1.2 – Currency (in)equality

Before we get started on currencies, let me share with you an interesting conversation I had with my 6-year-old daughter. Perhaps this could set a good starting point for our discussion on currencies. 🙂

I had recently been to Austria with my family on vacation. As you can imagine, the country is wonderful. It was my daughter’s first visit to Europe, and she was in complete awe. Needless to say, she was attracted to all the small little stores selling pretty little things. On one of the days while we were there, she forcibly took me to this toy store she spotted off the street, and I knew I was in for trouble. After spending about 5-10 minutes scanning through the shop, she finally picked up a colourful wooden caterpillar, and she wanted me to buy her that. It looked really nice, and I was willing to buy her that until I saw the price! The wooden caterpillar had a 25 Euro price tag. I thought I’d negotiate with her and buy her something else.

I tried telling her that it was 25 Euros, and 25 Euros was quite steep, especially for a tiny wooden caterpillar! She obviously didn’t understand my point and refused to budge from her stance. In fact, she said ‘it’s just 25 Euros’, and I realised that she equated 25 Euros to 25 Rupees, completely oblivious to the fact that she needs to multiply each Euro with 78 to get the exact Rupee equivalent.

However, this got me thinking – why isn’t one Euro or for that matter, one Dollar equal to one Rupee? More generally, why isn’t one unit of currency belonging to country A equivalent to another unit of currency belonging to country B? I understand this may sound very basic, and some of you may already know the answer. Still, I think it is essential to discuss this and understand why the inequality between currencies exists. After all, it is this inequality which allows us to trade the currency pairs.

To understand this, we need to brush up a bit on the history of currencies and how currency trading evolved. Don’t worry; I won’t get into history lessons here; will restrict this to a quick recap :).  For the sake of simplicity, let me break this down into different stages for you based on my own understanding of the evolution of currency.

Stage 1 – The Barter era

Before the advent of currencies, transactions occurred through something called the ‘barter system’. A barter system is a ‘method of exchange’ which has existed for many centuries. In a typical barter, people exchange goods for other goods (or services). A classic example would be – say a farmer has harvested cotton, he could exchange (or barter) cotton with another farmer giving him wheat. Similarly, a farmer who has oranges could exchange the oranges he has harvested with someone who agrees to wash his cows and sheep.

The problem with the barter system was the scale and divisibility of the system. For example assume a farmer had 5 bales of cotton and he wants to barter cotton with someone selling cattle, assuming 2 bales for 1 cow, after the barter he’d be left with 2 cows and a bale of cotton. He would certainly not get half a cow for 1 bale of cotton. This caused a divisibility issue within the system.

The scalability was also an issue with the barter system – it required our farmer to travel from one part of the country (with all his produce) to another part of the country to barter for goods of his choice.

Both these issues were eventually overcome with an improved system – Goods for metal.

Stage 2 – Goods for the Metal era

The problems that plagued the barter system eventually paved the way to the next transaction methodology. People tried to invent a common denominator for the ‘exchange’. The common denominator ranged from food grains to metals. But eventually, metals thrived for obvious reasons. The metal was divisible, easily movable, and metal had no issue with shelf life. Further, of all the metals, Gold and Silver were the most popular; therefore, eventually, these metals became the standard for transactions. The direct exchange between gold/silver and goods lasted for many centuries; however, things started to change when people deposited gold and silver coins in safe havens and issued a ‘paper’ against the value of gold. This paper derived its value based on the gold/silver coins deposited in haven.

With time, safe havens evolved to banks and the paper transformed to different currencies. Perhaps this was the start of the book-entry of the currency system.

Stage 3 – The Gold Standard era

Over time, as domestic trade flourished, trading across borders also flourished. Economic sense prevailed, and merchants realized producing everything locally did not make sense. Merchants started exploring cross border trade – simple import and export of goods thrived. This also meant merchants transacting across the border also required to pay for it in a currency that was acceptable across borders. Banking systems also evolved, and somewhere around the late 19 th  Century exchanging goods for Gold (not silver) became the norm. Valuing the local currency against the value of gold was called the  ‘Gold Standard’ .

As things progressed, the geopolitical situation changed (world wars, civil wars, cold wars etc.) and so did the economic situation across the world. When it came to cross border transactions, there was an urgent need for merchants to trust one currency and value their own currency against that currency. This was when the ‘Bretton Woods System’ came to the picture. You can read more on the  Bretton Woods System .

However, here is a simplified version of the Bretton Woods System (BWS). The BWS was a way of defining the monetary relationship between countries, where the currencies were pegged to USD at a fixed rate while the value of the USD itself was marked against the value of Gold. Countries accepted this system with a room for 1% variation either side (against the pegged value). Needless to say, with BWS in place the USD became the currency the world transacted in, as USD was backed by Gold!

Developed countries slowly withdrew from the BWS system, and eventually, BWS became history. Countries adopted a more market-driven approach, where the market decided the value of one currency against the other. The market drives the value of currencies based on the political and economic landscape of a country versus the other.

This brings us to where we are now.




### 1.3 – International Currency market (Forex)

Internationally, the national currency trading volume is massive and needs a moment to digest the figure. As per the April 2013 survey conducted by ‘Bank of International Settlement’ (BIS) the size of International Markets stands at $5.4 Trillion! Here is the  link  for the detailed report. My guess is we could be close to $5.8 – 6 Trillion as of April 2016. If you can imagine, this is roughly 20% higher than the entire Indian annual GDP that gets traded daily!

Probably what really contributes to such massive trading is the fact that currency markets chase the Sun. Currencies are traded across all the major markets, and information flows seamlessly.

To understand what I mean, keep the Indian markets as a reference and think about it. Before Indian markets are open, the Australian, Japanese, Hong Kong, and Singapore markets are open. In fact, we get some overlap with these markets. While the Southeast market closes, Indian markets would have just warmed up with Middle Eastern markets opening up. This leads to the European markets opening up – London, Frankfurt, and Paris being the financial nerve centre of Europe. In fact, Indian markets are situated in a sweet spot as our time zone overlaps with major Southeast Asian markets and the European markets. Finally, the US markets open, followed by the Japanese markets, and the cycle continues 24 hours a day, 6 days a week!

Having said that, the most active time for currencies is when the US, UK, Japanese, and Australian markets are open. This is when the order flow gets brimful.

This leads us to an interesting question – who are these people trading currencies, and why are the notional values so crazy? More importantly, how are currencies traded?

Unlike Equity markets, participation in Forex is not just restricted to investors and traders. The participants in the Foreign Exchange (Forex) markets are many – Central Banks, Corporate, Banks, Travelers, and of course, traders. Each of these participants has their own agenda while participating in the Forex markets. For example, the corporate may be buying/selling USD to hedge their order book, and a traveller maybe buying USD for his travel expense. At the same time, the trader may be just speculating on the movement of the currency.  Obviously, since participation comes in from many quarters, the volumes are driven up. More so, Forex trading is highly leveraged, hence the notional value appears large.

There is no centralized International exchange where the Forex transactions take place. Transactions occur at different financial institutions (like NSE in India), and information flows from one platform to another, making it borderless.




### 1.4 – Currency Pairs and quotes

The standard practice while trading currencies is to trade the currency as a ‘pair’. The value of the pair keeps fluctuating as the trades flow through. An example of the pair could be USD INR or GBP INR. The currency pair has a standard format, as shown below –

Base Currency / Quotation Currency = value

There are three parts here, let’s figure out each one of them –

Base Currency –  Base Currency is always fixed to 1 unit of a currency (like 1 US Dollar, 1 Indian Rupee, 1 Euro etc.)

Quotation Currency  – Refers to another currency which equates to the base currency (obviously it can be any currency apart from the base currency)

Value  – Indicates the value of the Quotation Currency against the Base Currency.

Confusing? Let take an example to make it clearer. Assume  USD/INR = 67 .

The Base Currency here is USD, and as I mentioned earlier, the Base Currency is always fixed to 1 unit. Hence this is fixed to 1 US Dollar.

Quotation Currency is in Indian Rupees (INR)

Value is 67, which means for 1 unit of Base Currency, i.e. 1 USD, the equivalent quotation currency is 67. In simpler terms $1 = Rs.67.

The most active currency pairs that get traded across the world and its current value as on 3 rd  June 3, 2016, are as follows –


SL No | Base Currency | Quotation Currency | Pair | Pair Value
--- | --- | --- | --- | ---
1 | Euro | US Dollar | EUR/USD | 1.11
2 | US Dollar | Japanese Yen | USD/JPY | 108.94
3 | Great Britain Pound | US Dollar | GBP/USD | 1.44
4 | Australian Dollar | US Dollar | AUD/USD | 0.72
5 | UD Dollar | Canadian Dollar | USD/CAD | 1.31
6 | US Dollar | Swiss Franc | USD/CHF | 0.99


Now here is the big question – what makes the pairs move? Why do they move? Are there events that influence the pairs?

We will explore this in the next chapter.

1. The Gold Standard system of evaluating currencies existed for a long time, but eventually got phased out.
1. The currency inequality between currencies exists because of political and economic differences between the two countries.
1. By volumes, the currency markets are easily one of the largest.
1. The currency markets are open 24 hours, 6 days a week.
1. Currency is traded as pairs.
1. Currency Pairs have a standard format to include Base Currency and Quotation Currency.
1. The Base Currency is always fixed to 1 unit



## 3.Impact_of_events_(Brexit)_&_Interest_Rate_Parity

[Read more](https://zerodha.com/varsity/chapter/impact-of-events-brexit-interest-rate-parity/)



### 3.1 – Brexit, the event extraordinaire!

I originally planned to dedicate this entire chapter to the USD INR pair, which as you may know is the largest traded currency contract in India. But then, the BREXIT issue happened today, and I can’t help writing about it as it has huge relevance to what we just discussed in the previous chapter – events and their impact on currency pairs.

To give you a sense of what happened, have a look at how the Great Britain Pound (GBP) reacted to the event. It was down a massive 8.64%, which you will eventually realize is a big deal in currencies.

The Guardian UK had this to say about the event –

Here is the  article.

My objective here is to simplify Brexit to the best of my knowledge and help you understand why the pound reacted the way it did. Obviously, the bigger agenda here is to help you understand the potential impact of such events on currencies. By doing so, you’ll get a grip on how to summarize global events such as Brexit and understand what kind of impact they could have on currencies.

For the sake of simplicity and brevity, let me bullet point Brexit for you. We start with a bit of history –

1. After World War 2, Germany and France debated the idea of forming a union of sorts. The thought process was that if countries traded and did business together, then they are less likely to wage war against each other.
1. This laid the foundation for forming a bigger union called the ‘European Union’ (EU) with more European countries agreeing to join the EU.
1. The EU formed a single market of sorts where goods, service, and people moved easily across countries. So much so that the EU decided to have its own currency called the ‘Euro’.
1. The UK, although was a part of the EU, never accepted the Euro as their currency. Note there are many other countries in the EU which still have their own currency, example – Switzerland, Chez Republic, Denmark etc…
1. There was a growing debate in the UK in recent times on whether the UK should remain in the EU. Many of UK’s citizens believed that the UK was better off outside the union as the rules laid out by the EU commission was more taxing on the UK’s citizen than actually benefiting them. In simpler words – they believe they would progress faster and better economically and as a society being outside the EU.
1. Br itain option to  exit  from the EU was called ‘Brexit’.
1. The UK decided to formally seek its citizens’ vote on 23 rd  June 2016, wherein the citizen would vote for being in or leaving the EU. This is called a ‘referendum.’
1. The outcome of the referendum was a bit of shocker with the UK actually deciding to opt-out of the EU. In fact, many in the UK and the world believed that the UK would vote to stay in the EU.

The referendum’s outcome sent a shiver down the spine for traders and investors around the globe. The GBP crashed to a 31 year low, the major European indices dove close to 8-10%.

Now, why did this happen? Why did the markets fall? What is the connection between the Brexit and the currency markets and the work markets?

Now here is where I’m hoping the previous chapter comes to help us J

Recall in the previous chapter; we discussed how a strong economy (defied by inflation, interest rates, trade deficit etc.) leads to a strong currency.

Given this, think about the UK – clearly, the UK is one of the strongest economies in the world and contributes significantly to the EU. Now with UK opting out of the EU, things are set to change both economically and politically.

While the UK has a trade deficit with the rest of the world, it maintains a trade surplus with the EU. This should give you a sense of how strongly the UK’s economy is coupled with the EU.  With UK opting out of the EU, its finances are certainly going to take a hit.

Further, the problem is with clarity. Everyone knows that the economic situation is bound to change, but to what extent is something no one really knows. How will the Bank of England react? Will, they cut the rates near zero?

Uncertainty is one thing that the market despises, and given its nature, Brexit has many. Therefore, as a result, the markets cracked.

You, as a currency trader, should be in a position to study the event and understand some basics. From my experience, sometimes the best trades are set up backed by simple common sense and basic knowledge.

Remember if you had studied the event and arrived at a conclusion not to take on a trade, then that in itself would have been a good trade, as the rule of thumb says “when in confusion, do nothing”.

The point is – when you have events of this magnitude around the corner, it is mandatory for you to know what is happening. Taking on a trade without the prerequisite knowledge is equivalent to a blind speculative bet!

So, that’s about Brexit and how events like this can impact the currencies.

Let us move ahead to figure out a few other currency concepts.




### 3.2 – Fairy Trade

Imagine a perfect world, wherein you can borrow money at a certain interest rate, invest the borrowed money at a higher rate, and earn the differential in the rates.  Confusing? Let me give you an example to simplify this.

The interest rate in the United States is about 0.5%, arguably one of the lowest in the world. Assume you borrow $10,000 from a bank in the United States at 0.5%; invest this borrowed money in a country like India where the interest rate is about 6-7%.

To do this, you will have to convert the borrowed money (which is in USD), to INR. At today’s conversion rate, a US dollar gets you 67 INR. Therefore $10,000 fetches Rs.670,000/-. We invest the converted money in India at say 7%.

At the end of the invested year, we get back 7% interest plus the initial capital. This would be –

670000 + 670000*(7%)

= 670000 + 46900

= Rs.716,900/-

We convert this money to USD, assume the conversion rate is 67; we get back $10,700. We now have to repay the principal amount plus 0.5% in interest. This would be $10000 plus $50.

So after repaying $10,050, we get to retain $650, which if you realize is a risk-free gain!

If you realize, $650 is the interest rate differential times the borrowed money –

10000*(7%-0.5%)

10000*(6.5%)

650

This is a simple case of arbitrage, quite easy to implement, don’t you think so?

Given this, imagine a situation where you could borrow large amounts of money from the US and invest this large amount in India and make pot loads of money year on year, right?

Well, sorry to burst the bubble, such trades happen only in fairy tales J. In the world we live in, such easy risk-free profits does not exist. Even if it did, it would vanish before even you realize.

However, the bigger question we need to answer is – why is this ‘fair trade’ not possible?




### 3.3 – Forward Premia & Interest Rate parity

The problem with the above trade is that there are one too many assumptions, we assumed–

1. We could borrow unlimited amounts of money in the US
1. We could deposit unlimited amounts of money in India
1. There is no cost of the transaction, no taxes
1. Easy movement of currency between countries
1. Most importantly we assumed the conversion rate stayed flat at 67 after 1 year

Given that such arbitrage cannot exist for long, the currency rate a year later should be such that it would prohibit the arbitrage from existing.  In other words,

The money we receive from India a year later = Money we repay to banks in the US a year later

From the example we discussed above, we borrowed $10,000 from the US, invested the same in India and a year later we received Rs.716,900/-.

For the arbitrage to NOT exist, at the end of 1 year,  Rs.716,900/- should be equal to $10,050.

This means the conversion rate should be –

716900/10050

=  71.33

This is called the ‘ Forward Premia ’ in the currency world. The approximate formula to calculate the Forward Premia is –

F = S * ( 1+ R oc  * N) / (1 + R bc  * N)

Where,

F = Future Rate

S = Today’s spot rate

N = Period in years

R oc  = Interest rate in quotation currency

R bc  = Interest rate in base currency

Let’s apply this formula to check if we get the forward rate right for the above situation. Remember the spot rate is 67,

F = 67*(1+7%*1) / (1+0.5%*1)

=  71.33

Further, note that the forward premia rate is approximately equal to the spot rate plus spot times the difference in interest rate i.e. –

F = S*(1+difference in interest rates)

= 67*(1+ 7% – 0.5%)

= 67*(1+6.5%)

= 71.35

This is called the ‘ Interest rate parity ’.

Think about this – Indian Rupees is trading at 67 today compared to 71.35 in the future. Therefore the Rupee is considered to be at a discount  now.  Generally speaking, the future value of any currency which has a higher interest rate is at a discount to a currency which has a lower interest rate.

So why are we discussing all this and what is the relevance to currency trading? Well, the forward premia play an important role in determining the futures price!

We will discuss more on this going forward.

1. Events like Brexit tend to have an extraordinary influence on currencies.
1. A country whose economy is expected to suffer tends to have a weaker currency.
1. Forward premia are the expected spot rate over a given period.
1. Forward premia = S * ( 1+ R oc  * N) / (1 + R bc  * N)
1. Interest Rate parity indicated that the forward premia are approximately equal to the spot rate plus spot times the difference in interest rate.
1. Future value of any currency which has a higher interest rate is at a discount to a currency which has a lower interest rate



## 4.The_USD_INR_Pair_(Part_1)

[Read more](https://zerodha.com/varsity/chapter/the-usd-inr-pair/)



### 4.1 – The contract

We make an extremely critical assumption at this stage – we will assume you are familiar with how  Future  and  Options contracts  work.

Technical Analysis plays an important role in setting up short term currency trades, so we’ll assume you know  Technical Analysis  as well.

If you are not familiar with these topics, then I’d strongly suggest you read through these modules before proceeding further. The currency and commodities market is largely a Futures market; hence a working knowledge of these derivative instruments is the key.

Now, assuming you understand these concepts fairly well, let us begin by slicing and dicing the USD INR futures contract. The contract specification of the USD INR futures gives us insights on trade logistics.

Here are the salient features of the USD INR pair –


Particular | Details | Remark
--- | --- | ---
Lot Size | $1,000 | Inequity derivatives, the lot is number of shares, but here it’s a dollar amount
Underlying | The rate of Indian Rupee against 1 USD | 
Tick Size | 0.25 Paise or in Rupee terms INR 0.0025 | 
Trading Hours | Monday to Friday between 9:00 AM to 5:00 PM | 
Expiry Cycle | Upto 11 weekly expires and 12 monthly expiries | Note, equity derivatives have an expiry upto 3 months.
Last trading day |  | All contracts other than weekly, will expire Two working days prior to the last business day of the expiry month at 12:30 pm
Final Settlement day | Last working day of the month | 
Quantity Freeze Limit | 10,001 or greater | 
Margin | SPAN + Exposure | Usually, SPAN is about 2%, and exposure is around 0.5%. Hence roughly about 2.5% is the overall margin requirement.
Settlement Price | RBI Reference rate on the day of Final settlement | The closing price of spot


To give you a sense of how this works, let’s take an example –

This is the 15-minute chart of the USD INR pair, as you can see the encircled candle has formed a bearish Marubuzo. One can initiate a short trade based on this, keeping the high of the Marubuzo as the stoploss.

Note that I’m not trying to justify a trade here, my objective is to showcase how the USD INR contract works.

The trade details are as below –

Date: 1 st  July 2016

Position – Short

Entry – 67.6900

SL – 67.7500

Number of lots to short – 10

1 lot of USD INR = $ 1000

The contract value of 1 lot of USD INR = Lot size * price

=1000 * 67.7000

=67,700

The margin required for this can be fetched from Zerodha’s margin calculator; here is the snapshot of the same.

As you can see, the margin required to initiate a fresh position in USD INR is about Rs.1,524/-. Therefore on a contract size of 67700, this works out to –

1525/67700

= 2.251%

Out of this, I’m guessing about 1.5% would be SAPN margin requirement (read as the minimum margin required as per exchange) and the rest as exposure margin.

Further, the idea is to short 10 lots, hence total margin required is –

10 * 1525

= 15,250/-

A point to note here – when trading equity futures, one has to earmark anywhere between 15% and 65% of the contract value as margins, this obviously varies from stock to stock. In contrast to equities, the margin charged in currencies is way lower. This should give you a sense of how leveraged currency trading really is.

On the other hand, currency sticks to a tight trading range compared to equities—hence higher leverage.




### 4.2 – The contract logistics

Notice how the currency futures are quoted – they go upto the 4 th  decimal digit. There is a reason for this – when it comes to currency futures, a number as small as this – 0.0025 is considered big.

When RBI states the reference rate, they quote upto the 4 th  decimal. Even a minor difference at the 4 th  decimal can alter the foreign reserves by a large degree. In fact, it is a norm world over to quote the currency to 4 th  decimal – in case of USD INR, this is 0.0025. This is called the tick size or in currency parlance, a ‘pip’. A pip/tick is the minimum number of points by which a currency can move.

So when the USD INR moved from 67.9000 to 67.9025, it is said that the currency has moved up by a pip.

How much money would you make per pip in the USD INR pair? Well, this should be easy to figure out –

Lot Size * pip (tick size)

= 1000 * 0.0025

= 2.5

This means to say, for every pip or every tick movement you make Rs.2.5/-.

Going back to the short trade, here is how the Marubuzo panned out –

After initiating the short, the currency pair declined 67.6000. If I choose to close this position, he is how much I would make –

Entry = 67.6900

CMP = 67.6000

Total number of points = 67.6900 – 67.6000 = 0.0900

Position – Short

This could be a bit tricky, do pay attention. A pip as you know is the minimum number of points the currency can move. To know how many pips a currency had moved when it moved by 0.09 paise, we divide the total number of points moved by the pip size.

Number of pips = 0.0900/0.0025

= 36

As you can see the trade managed to capture 36 pips, let us now calculate how much money one would make –

Lot size * number of lots * number of pips * tick size

We know,  Number of pips * tick size  is as good as the  total number of points  caught with this trade. Therefore we can restate the above formula –

Lot Size * Number of lots * total number of points

= 1000 * 10 * 0.0900

=  900

Remember this is an intraday trade. What if you were to carry this forward to expiry? Well, we can carry this forward as long as we maintain the adequate margin requirements. The July contract will stay in series 2 days before the last working day of the month.

Here is the calendar –

So 29 th  July happens to be the last working day of the month. Hence 27 th  July will be the expiry of this series. In fact, you can hold the contract only till 12:30 PM on 27 th  July.

Of course, you can always look at the contract to see the exact date of the expiry.

Another question at this stage – at what price will the settlement happen?

The settlement will happen at the RBI reference rate set for 27 th  July, and it is important to note that the P&L will be settled in INR.

So for example, if I hold this position till 12:30 PM on 27 th  July and let it expiry, assume the price is 67.4000, then I’d stand to make –

= 1000 * 0.29 * 10

=2900/-

And this money will be credited to my trading account on 28 th  July 2016. Needless to say, as long as you hold the contract, your position will be marked to market (M2M). This is similar to the way it works for equity futures.

Hopefully, this example should give you a sense of how the logistics for the currency futures work.

Let us quickly run through the USDINR options contract.




### 4.3 – USD INR options contract

Let us have a look at how the USDINR option contract is structured. You may be interested to know that the option contract is made available only for the USD INR pair. Hopefully, in the future, we could see option contracts on other currency pairs as well. While most of the parameters are similar to the futures contract, there are few features specific to option contracts.

Option expiry style  – European

Premium  – Quoted in INR

Contract cycle  – While the future contracts are available for 12 months forward, the options contracts are available just 3 months forward. This is similar to equity derivatives. So, since we are in July, contracts are available for July, August, and September.

Strikes available  – 12 In the Money, 12 Out of the Money, and 1 Near the money option. So this is roughly 25 strikes available for you to pick and choose from. Of course, more options are added based on how the market behaves. Strikes are available at every 0.25 paisa intervals.

Settlement  – Settled in INR based on the settlement price (RBI reference rate on expiry date).

Let’s have a look at the USD INR option contract and figure out the logistics. Have a look at the following image –

From the option quote, we know the following –

Option type – Call option

Strike – 67.0000

Spot price (see RBI reference rate)  –  67.1848

Expiry Date – 27 th  July 2016

Position – Long

Premium – 0.7400 (quoted in INR)

We know the lot size is $1000, although the lot size has not been mentioned in the quote above.  Usually, this information is made available in the quote for equity derivatives. So if you are seeing this for the first time, be aware that the lot size is $1000.

Now, if you were to buy this option, what would be the premium outlay? Well, this is fairly easy to calculate –

Premium to be paid = lot size * premium

= 1000 * 0.7400

=  740

The option contract works similar to the equity derivative contracts. Here is another snapshot I captured –

As you can see, the premium has shot up, and I can choose to close my trade right away. If I did, here is how much I would make –

= 1000 * 0.7750

=775

This translated to a profit of 775 – 740 = 35 per lot.

What if you were to sell/write this option instead? Well, you know that option selling requires you to deposit margins. You can use Zerodha’s  F&O Margin calculator  to get an estimate on the margin required.

Have a look at the snapshot below; I’ve used the calculator to identify the margin required to write (short) this option –

As you can see, the margin required is Rs.2,390/-.

I hope this chapter has given you a basic sense of how the USD INR contracts are designed. In the next chapter, we will try and discuss some quantitative aspects of the USD INR pair and perhaps look at the contract specification of other currency pairs.

- The contract specification specs out the logistics of the USD INR derivative.
- The lot size is fixed to $1,000, but this can be changed by the exchange anytime.
- Expiry of the USD INR contract is 2 days before the last working day of the month. The contract can be held/traded till 12:30 PM.
- Margins applicable = SPAN + Exposure, usually the margins add upto 2.25 – 2.5%.
- Currency pairs are quoted upto the 4 th  decimal place.
- A pip is the minimum price moment allowed in a currency.
- Currency options are European in nature.
- The premium quoted in currency options is in INR.
- Strikes are available at every 25 paisa price difference.
- Margins are blocked when you intend to write currency options.



## 2.Reference_Rates_&_Impact_of_events

[Read more](https://zerodha.com/varsity/chapter/reference-rates-impact-of-events/)



### 2.1 – Dual View

Think about a stock, Infosys for example, when you buy or sell Infosys – your view on the stock is straightforward – you are either bullish or bearish on Infosys. Therefore, you buy or sell Infosys. Now think about a currency pair – say USD INR, when you buy or sell USD INR, whether you know or not, you have a dual view on the pair. For instance, when you buy USD INR; it implies you are bullish on the US Dollar and bearish on the Indian currency.

Why is it this way you may ask?

Well, the value of a currency is always quoted against another. Recall from the previous chapter – the currency pair is quoted as –

Base Currency / Quotation Currency = Value

In other words, this format tells us how many units of quotation currency one can buy for 1 unit of the base currency.

If you buy a currency pair, clearly it implies that you expect the value of the pair to go up. Consider this example – USD INR = 65, one would buy the pair, hoping for the price of the pair to hit 68.

Now if the price of the pair is expected to increase, then it implies that in the future 1 unit of base currency can buy more units of quotation currency, i.e. 1 USD to buy more INR.

In other words, if the value of the pair goes up, then the power of the Base currency goes up while at the same time, the quotation currency weakens. This translates to you being bullish on the Base currency and bearish on the quotation currency at the same time.

Similarly, if you sell the USD INR pair, it implies that you anticipate the Base Currency to buy a lesser amount of quotation currency. This translates to you being bearish on base currency and bullish on the quotation currency.

Given this, “strengthening/weakening of a currency” refers to the following situations –

1. Base currency strengthens when it can  buy more units of quotation currency . For example, USD INR moves from 67 to 68; it means the base currency (USD) strengths and the quotation currency (INR) weakens.
1. Quotation currency strengths when the base currency  buys lesser units of quotation currency.  For example, USD INR moves from 66 to 65; it means the base currency (USD) weakens and the quotation currency (INR) strengthens.

Note that strengthening and weakening of a currency are equivalent to a currency appreciating and depreciating. These terminologies are often used interchangeably.

Before we proceed, here is something you need to know. Just like a stock, the currency (and the currency pair) has a ‘two-way quote’. The two-way quote enables one to identify the rate at which one can buy and sell the currency (and currency pair).

Don’t get thinking on the ‘two-way quote’, it simply refers to ‘Bid and Ask’ rates J, but we do need to touch upon this as its vital to know how the two-way quote works.

Have a look at the image below –

This is a snapshot of the currency spot rates, as quoted on a Forex trading site. For the sake of this discussion, I’ve highlighted the two-way quote for EUR USD and GBP USD. The quote gives you the rate at which you can buy and sell the currency pair.

For example, if you want to buy the EUR/USD – you will have to buy the pair at the ‘Ask’ price, i.e. 1.1270. When you buy the pair, technically you are long EUR and short USD. Likewise, if you want to sell the EUR/USD, then you would do so at 1.1269 (Bid price), and here you would be short EUR and long USD (remember the dual view concept).

The pairs are sometimes quoted in a short form, which is actually quite a popular way to quote currencies internationally. The shortened two-way quote would be something like this for the EUR/USD pair –

EUR/USD – 1.1269/70.

If you notice in the shortened version, the ‘bid’ price is stated in full, but only the last two digits of ‘ask’ is stated.

Further, in the Forex lingo, digits are referred to as ‘ pips ’. Therefore, if the EURUSD moves from 1.1270 to 1.1272, then it means that the pair has moved 2 pips.




### 2.2 – Rate fixing and conversion path

As of today, the USD/INR rate stands at 67.0737. This rate is fixed by the RBI daily, and is called RBI’s  ‘Reference Rate’ ; in fact, RBI publishes these rates daily on their website. The Reference rate acts as a crucial input for the currency futures trading as all settlements are based on this Reference rate.

Have a look at this –

The above is a snapshot from the RBI’s site showing the reference rate for 14 th  June 2016. Do note; these are  spot rates  and not future rates. Future rates are as seen on NSE’s website.

Anyway, the obvious question is – how does the RBI arrive at this rate?

Well, nothing hi-tech here, RBI follows the age-old method of polling to arrive at the spot rate!  Click here  to see the RBI circular that explains the rate-fixing procedure, but if you are in no mood to read the circular, you could read the following points that summarize the procedure.

1. RBI has identified a list of banks based on their market share in the foreign exchange market. RBI calls them the ‘contributing banks’
1. Every day between 11:30 AM and 12:30 PM RBI calls a set of banks (randomly selected) listed under the contributing banks and ask them to give a two-way quote on USD INR
1. RBI collates these rates and averages out the rate based on the bid and ask
1. The average rate is set as the USD INR rate for the day.
1. The same process is repeated every day except for weekends and bank holidays.

It’s as simple as that!

The procedure is quite simple; however, RBI polls only for the USD INR rates. For the other major rates, i.e. EUR INR, GBP INR, JPY INR RBI adopts a technique called ‘Crossing’ also referred to as the cross rate mechanism.

While crossing, the direct rate of one currency is not available concerning another. For example, the direct rate of Euro concerning INR is not readily available; one needs to cross these rates with a common denominator to arrive at the rates.

Let me take the example of deriving the EUR INR rate by crossing, keeping USD as the common denominator. Hopefully, this will give you better clarity on the crossing technique.

Let us begin with getting the spot rate for USD INR, as we can see from the snapshot above, the USD INR spot is –

USD INR – 67.0737

This is the spot rate; the two-way quote for this would be something like this –

USD INR – 67.0730 / 67.0740

This means if I have to buy 1 USD, I need to pay INR 67.0740 and if I have to sell 1 USD, I will receive INR 67.0730.

Let’s keep this information aside. We now focus on EUR USD spot rates from the international markets.

The two-way quote from Bloomberg suggests –

EUR USD – 1.1134/40

This means I need USD 1.1140 (Ask price) to buy 1 Euro. In other words, the cost of 1 Euro in terms of the US Dollar is 1.1140. Hence if I convert the price of 1.1140 USD to INR, then I will have enough INR to buy 1 Euro, and by doing so, I will also get the EUR/INR rate.

Now going back to the USD INR rate –

1 USD = Rs.67.0740

1.1140 USD = How many Rupees?

= 67.0740 * 1.1140

= 74.72044

Hence to buy 1 Euro I need 74.72400 INR, or  EUR INR = 74.72400

Notice how the USD acts as a pivot in the crossing technique.

Now here is a simple task for you – using the crossing technique, we have calculated the ASK price of the EUR INR pair, can you extend this logic to calculate the Bid price for the EUR INR pair? Feel free to post your answers in the comments section below.

If you think about this, it’s now clear that the reference rates and the cross rates change every day based the sentiments of the contributing banks. This leads us to a bigger question – what influences the sentiment of the contributing banks?

The answer is quite simple – domestic and international events.




### 2.3 – Events that matter

Think about an event that can potentially change the sentiment on a stock. Quarterly result of the company is one such event. Estimating the change in sentiment based on this event is quite straightforward. If the quarterly result is good, the sentiment is positive; therefore, the stock price is expected to go up. Alternatively, if the quarterly result is not great, the sentiment is hurt, and therefore the stock price is expected to go down. The point here is, there is some linearity between the event and the expected outcome.

However, when it comes to currency pairs, there is no such linearity, which makes it a herculean task to assess the impact of events, a.k.a. fundamentals on currencies. The complexity mainly stems from the fact that currencies are quoted as pairs. While some factors lead to the strengthening of a pair, an event could occur at the same time that weakens the pair.

Let me give you an example to illustrate this – imagine two economic events running in parallel.  Event 1  –   India receives a continuous inflow of Foreign Direct Investments (FDI) geared towards long term investments. Clearly, this is a big positive for the economy, and therefore it tends to strengthen the INR.  Event 2  – There is an uptick in the US economy (or a fear of a crash in commodities) leading to an appreciation in the US Dollar.

Given these two events occur in parallel – which direction will the USD INR currency pair move? Well, the answer to this is not straightforward. Eventually, the currency pair will take cues from the more dominant of the two factors and head in that direction, but until this happens, the pair invariably exhibits volatile behaviour. Hence, to successfully trade currencies, it becomes essential to track world events and assess their impact on the currency pair in question.

Here are few such events and data that you should track –

Import/Export Data  – These numbers are highly significant, especially for a country like India, whose economy is susceptible to trade deficits. India exports goods and services such as rice and software and imports commodities such as crude oil and bullion.  In general, an increase in exports tends to strong domestic currency, and an increase in imports tends to weaken the domestic currency. Why do you may ask?

When imports are made (crude oil, for example), the purchase has to be made in the International market, which requires one to pay in USD. Therefore one has to sell INR and buy USD to facilitate this purchase, which in turn causes a demand for USD and hence USD strengths.

We can extend the same logic to exports. When we export goods, we receive USD; we sell the USD received and convert to INR. This causes the INR to strength.

The Trade Deficit  – the excess of imports over exports is a key factor to track as it influences the direction in which the currency trades. In general, narrowing the trade deficit is positive for the domestic currency. The trade deficit is also referred to as the ‘Current account deficit’. I’d suggest you read this  news piece  to reinforce your understanding of this topic.

Interest Rates  –  Typically, investors borrow money from countries where the interest rate is low and invest in countries where the interest rates are high and profit from the interest rate difference. This is called the ‘ carry trade’ . Clearly, the country offering higher interest attracts a lot more foreign investment into the country. Naturally, this leads to the strengthening of the domestic currency. This clearly implies that the ‘Interest rate’ is one big number of currency traders watch out for.

The monetary policy review conducted by the central banks (RBI in India, Federal Reserves in the US, and ECB in the Euro region) reviews the interest rates of the country. This is the reason why there is so much attention paid for the policy review. Besides tracking the actual change in numbers in the on-going review, the market participants look for cues regarding the policy stance. The monetary stance helps the participants understand the future course of action concerning the interest rate.

Dovish  –  Dovish is a term used to describe the central bank’s stance wherein they are likely to lower the interest rate in the future. Remember, lower interest rate weakens the domestic currency. Here is a new headline talking about the relationship between a dovish stance and the currency.

Click here  to see the article.

Hawkish  –  Hawkish is a term used to describe the central bank’s stance wherein they are likely to increase the interest rate in the future. Remember, higher interest rates attract foreign investments to the country and therefore strengthens the domestic currency.

And here is another new headline which talks about hawkish stance.

Inflation  –  Inflation, as you may know, is the rate at which the prices of basic goods and services increase over time. If inflation increases, then it means the cost of necessities is increasing, therefore this affects the day to day living of the common man. Given this, the central bank strives hard to keep inflation in control. The link between inflation and currency movement is a bit tricky.

One of the direct mechanisms to curb inflation is by tweaking the interest rates. If the inflation is perceived as high, then the central bank is likely to take a hawkish stance and increase the interest rates.

What do you think is the logic here?

Well, easy money in the hands-on consumers and corporates increases spending; when spending increase merchants smell an opportunity to make higher margins, and therefore this leads to a rapid increase in prices, and thus the inflation increases. When inflation increases, the central banks tend to curb the spending by cutting access to easy money. And how do they do that? Well, they increase interest rates!

Therefore, when inflation is on the rise, expect the central banks to take a hawkish stance and increase the interest rates when interest rates increase, the domestic currency strengths!

Therefore, as I mentioned earlier, the relationship between interest rates and currencies is a little tricky. So traders eagerly track inflation data to figure out what the central banks are likely to do and accordingly take positions on the currency pair.

Remember this – if the inflation is high, expect a hawkish stance by the central government and therefore expect the domestic currency to strengthen. Likewise, if inflation is low, expect a dovish stance (as the central bankers want to encourage spending). Therefore the interest rates are likely to come down. This leads to domestic currency weakening.

Consumer Price Index (CPI)  – The CPI is a time-series data, averaged out to capture the prices of basic goods and services. Hence the CPI is a measure for inflation. A rising CPI means inflation is increasing, and vice versa. For the most accurate Indian CPI data and information check this  website .

Gross Domestic Product (GDP) –  The GDP of a country represents the total Rupee value (for Indian GDP of course) of all the goods and services produced in the country for a given year.    As you can imagine, the GDP would be a massive number, and it does not make sense to repeat the GDP number while making estimates or during conversations. Therefore one always refers to the GDP as a growth rate. For example, if the GDP of a country is 7.1%, it means that the GPD number is growing at a rate of 7.1%.

Higher the GDP growth rate, higher is the investor confidence in that country, and therefore the stronger the countries domestic currency.

The list of events that matter while trading currencies is virtually endless. At some point, you will realize that every piece of data you can look at is interconnected with one another. Honestly, it would help if you had not known the unknowns of each event the way an economist would. Understanding the cause and effect relationship is good enough. I’ve listed some of the key events/data points that matter while trading currencies. I guess this would serve as a good start If nothing more.

1. The base currency is said to strengthen/appreciate against the quotation currency when it can buy more units of quotation currency.
1. The base currency is said to weaken/depreciate against the quotation currency when it buys lesser units of the quotation currency.
1. When you go long on a currency pair, you are essentially going long on the base currency and short on the quotation currency.
1. When you go short on a currency pair, you are essentially going short on the base currency and long on the quotation currency.
1. The RBI sets the reference rate of USD INR daily by conducting a poll; the ‘contributing banks’ participate in this poll.
1. The reference rates for other currency pairs are derived by crossing technique.
1. Understanding events and its impact on currencies are complicated, simply because of the currency is quoted in pairs and impact on the pair could be similar.
1. Eventually, the more dominating event will set the direction for the pair.
1. Countries with higher interest rates tend to have stringer currencies and vice versa.
1. Lower the trade deficit of the country; stronger is the country’s currency.
1. Higher inflation leads to the strengthening of currency and vice versa.
1. Knowing the cause and effect of events on currencies helps while trading currencies.


