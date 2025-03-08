# Option Strategies

[Read more](https://zerodha.com/varsity/module/option-strategies/)

---


## 12.The_Long_&_Short_Strangle

[Read more](https://zerodha.com/varsity/chapter/the-long-short-strangle/)



### 12.1 – Background

If you have understood the straddle, then understanding the ‘Strangle’ is quite straightforward. For all practical purposes, the thought process behind the straddle and strangle is quite similar. Strangle is an improvisation over the straddle, mainly to reduce the cost of implementation. Let me explain this further.

Consider this – Nifty is trading at 5921, which would make 5900 the ATM strike. If you were to set up the long straddle here, you would be required to buy the 5900 CE and 5900 PE. The premiums for both these options are 66 and 57 respectively.

Net cash outlay = 66 + 57 = 123

Upper breakeven = 5921+123 = 6044

Lower breakeven = 5921 – 123 = 5798

Therefore to set up a straddle, you spend 123 and the breakeven on either side is 2.07% away.  As you know the straddle is delta neutral, meaning the strategy is insulated to the directional movement of the market. The idea here is that you know that the market will move to a large extent, but the direction is unknown.

Consider this – from your research you know that the market will move (direction unknown) hence you have set up the straddle. However the straddle requires you to make an upfront payment of 123.

How would it be if you were to set up a market neutral strategy – similar to the straddle, but at a much lower cost?

Well, the ‘Strangle’ does just that.




### 12.2 – Strategy Notes

The strangle is an improvisation over the straddle. The improvisation mainly helps in terms of reduction of the strategy cost, however as a tradeoff the points required to breakeven increases.

In a straddle you are required to buy call and put options of the ATM strike. However the strangle requires you to buy OTM call and put options. Remember when compared to the ATM strike, the OTM will always trade cheap, therefore this implies setting up a strangle is cheaper than setting up a straddle.

Let’s take an example to explain this better –

Nifty is trading at 7921, to set up a strangle we need to buy OTM Call and Put options. Do note, both the options should belong to the same expiry and same underlying. Also the execution should happen in the same ratio (missed this point while discussing straddle).

Same ratio here means – one should buy the same number of call option as that of put option. For instance it can be 1:1 ratio meaning 1 lot of call, 1 lot of put option. Or it can be 5:5, meaning buy 5 lots of call and 5 lots of put option. Something like 2:3 is not considered strangle (or straddle) as in this case you would be buying 2 lots of call options and 3 lots of put options.

Going back to the example, considering Nifty is at 7921, we need to buy OTM Call and Put options. I’d prefer to buy strikes which are 200 points either way (note, there is no particular reason for choosing strikes 200 points away). So this would mean I would buy 7700 Put option and 8100 Call option. These options are trading at 28 and 32 respectively.

The combined premium paid to execute the ‘strangle’ is 60. Let’s figure out how the strategies behave under various scenarios. I’ll keep this discussion brief as I do believe you are now comfortable accessing the P&L across various market scenarios.

Scenario 1 – Market expires at 7500 (much below the PE strike)

At 7500, the premium paid for the call option i.e. 32 will go worthless. However the put option will have an intrinsic value of 200 points. The premium paid for the Put option is 28, hence the total profit from the put option will be 200 – 28 =  +172

We can further deduct for the premium paid for call option i.e. 32 from the profits of Put option and arrive at the overall profitability i.e. 172 – 32 =  +140

Scenario 2 – Market expires at 7640 (lower breakeven)

At 7640, the 7700 put option will have an intrinsic value of 60. The put option’s intrinsic value offsets the combined premium paid towards both the call and put option i.e. 32+28 = 60. Hence at 7640, the strangle neither makes money nor losses money.

Scenario 3 – Market expires at 7700 (at PE strike)

At 7700, both the call and put options would expire worthless, hence we would lose the entire premium paid i.e. 32 + 28 = 60. Do note, this also happens to be the maximum loss the strategy would suffer.

Scenario 4 – Market expires at 7900, 8100 (ATM and CE strike respectively)

Both the options expire worthless at 7900 and 8100. Hence we would lose the entire premium paid i.e. 60.

Scenarios 5 – Market expires at 8160 (upper breakeven)

At 8160, the 8100 Call option has an intrinsic value of 60, the gains in the call option would offset the loss incurred against the premium paid towards the call and put options.

Scenarios 6 – Market expires at 8300 (much higher than the CE strike)

Clearly at 8300, the 8100 call option would have an intrinsic value of 200 points; therefore the option would make 200 points. After adjusting for the combined premium paid of 60 points, we would be left with 140 points profit. Notice the symmetry of payoff above the upper and below the lower breakeven points.

Here is a table which contains various other market expiry scenarios and the eventual payoff at these expiry levels –

We can plot the strategy payoff to visualize the payoff diagram of the strangle –

We can generalize a few things about the ‘Strangle’ –

1. The maximum loss is restricted to the net premium paid
1. The loss would be maximum between the two strike prices
1. Upper Breakeven point = CE strike + net premium paid
1. Lower Breakeven point = PE strike – net premium paid
1. Profit potentially is unlimited

So as long as the market moves (irrespective of the direction) the profits are expected to follow.




### 12.3 – Delta and Vega

Both straddles and strangles are similar strategies, therefore the Greeks have a similar effect on strangle and straddles.

Since we are dealing with OTM options (remember we chose strikes that are equidistant from ATM), the delta of both CE and PE would be around 0.3, or lesser. We could add the deltas of each option and get a sense of how the overall position deltas behave.

- 7700 PE Delta @ – 0.3
- 8100 CE Delta @ + 0.3
- Combined delta would be -0.3 + 0.3 = 0

Of course, I’ve just assumed 0.3 for both the options for convenience; however both the deltas could be slightly different, hence we could not be delta neutral in a strict sense. But then the deltas will certainly not be too high such that it renders a directional bias on the strategy. Anyway, the combined delta indicates that the strategy is directional neutral.

The volatility has similar effect on both straddles and strangles. I’d suggest you refer  Chapter 10, section 10.3  to get a sense of how the volatility impacts the strangles.

To summarize the effect of Greeks on strangles –

1. The volatility should be relatively low at the time of strategy execution
1. The volatility should increase during the holding period of the strategy
1. The market should make a large move – the direction of the move does not matter
1. The expected large move is time bound, should happen quickly – well within the expiry
1. Long strangle is to be setup around major events, and the outcome of these events have to be drastically different from the general market expectation

I suppose you understand why long strangles have to be set up around major market events; we have discussed this point earlier as well. If you are confused, I’d request you to read Chapter 10.




### 12.4 – Short Strangle

The execution of a short strangle is the exact opposite of the long strangle. One needs to sell OTM Call and Put options which are equidistant from the ATM strike. In fact you would short the ‘strangle’ for the exact opposite reasons as to why you go long strangle. I will skip discussing the different expiry scenarios as I assume you are fairly comfortable with establishing the payoff by now.

I’ve used the same strikes (the one used in long strangle example) for the short strangle example. Instead of buying these options, you would sell these OTM options to set up a short strangle. Here is the payoff table of the short strangle –

As you can notice, the strategy results in a loss as and when the market moves in any particular direction. However the strategy remains profitable between the lower and upper breakeven points. Recall –

- Upper breakeven point is at 8160
- Lower breakeven point is at 7640
- Max profit is net premium received, which is 60 points

In other words you get to take home 60 points as long as the market stays within 7640 and 8160. In my opinion this is a fantastic proposition. More often than not market stays within certain trading ranges and therefore the market presents such beautiful trading opportunities.

So here is something for you to think about – identify stocks which are in a trading range, typically stocks in a trading range form double/triple tops and bottom. Setup the ‘strangle’ by writing strikes which are outside the upper and lower range. When you write strangles in this backdrop make sure you watch closely for breakouts or breakdowns.

I remember setting up this trade over and over again in Reliance couple of years ago – Reliance was stuck between 850 and 1000 for the longest time.

Anyway, here is the payoff graph of the short strangle –

As you can notice –

1. The payoff of the short strangle looks exactly opposite of the long strangle
1. The profits are restricted to the extent of the net premium received
1. The profits are maximum as long as the stock stays within the two strike prices
1. The losses are potentially unlimited

The breakeven point calculation is the same as the breakeven points of a long strangle, which we have discussed earlier.

1. The strangle is an improvisation over the straddle, the improvisation helps in the strategy cost reduction
1. Strangles are delta neutral and is insulated against any directional risk
1. To set up a long strangle one needs to buy OTM Call and Put option
1. The maximum loss in a long strangle is restricted to the extent of the premium received
1. The profit potential is virtually unlimited in the long strangle
1. The short strangle is the exact opposite of the long strangle. You are required to sell the OTM call and put option in a short strangle
1. The Greeks have the same effect on strangles and straddles

Download Long Short Strangle Excel Sheet



## 13.Max_Pain_&_PCR_Ratio

[Read more](https://zerodha.com/varsity/chapter/max-pain-pcr-ratio/)



### 13.1 – My experience with Option Pain theory

In the never ending list of controversial market theories, the theory of ‘Option Pain’ certainly finds a spot. Option Pain, or sometimes referred to as ‘Max Pain’ has a significant fan following and probably an equal number of people who despise it. I’ll be honest; I’ve been in both camps! In the initial days of following Option Pain, I was never able to make money consistently. However, overtime I found methods to improvise on this theory to suit my own risk appetite, and that yielded a decent result. Later in the chapter I will discuss this as well.

Anyway, now this is my attempt to present you the Option Pain theory and talk to you about what I like and what I don’t about Max Pain. You can take cues from this chapter and decide for yourself which camp you want to be in.

Option Pain theory requires you to be familiar with the concept of  ‘Open Interest’ .

So, let’s get started.




### 13.2 – Max Pain Theory

The origins of Option Pain dates back to 2004. So, in a sense, this is still a very young theory. As far as I know there are no academic/scholastic papers on it, which makes one wonder why the academia has ignored this concept.

The theory of options pain stems as a corollary to the belief – “90% of the options expire worthless, hence option writers/sellers tend to make money more often, more consistently than the option buyers”.

Now if this statement is true, then we can make a bunch of logical deductions –

1. At any point only one party can make money i.e either the option buyers or option sellers, but not both. From the above statement, it is clear that the sellers are the ones making money.
1. If option sellers tend to make maximum money, then it also means that the price of the option on expiry day should be driven to a point where it would cause least amount of loss to option writers.
1. If point 2 is true, then it further implies that option prices can be manipulated, at least on the day of expiry.
1. If point 3 is true, then it further implies that there exists a group of traders who can manipulate the option prices, at least on the day of expiry.
1. If such a group exists then it must be the option writers/sellers since it is believed that they are the ones who make maximum money/consistently make money trading options.

Now considering all the above points, there must exist a single price point at which, if the market expires, then it would cause least amount of pain to the option writers (or cause maximum amount of pain to option buyers).

If one can identify this price point, then it’s most likely that this is the point at which markets will expire. The ‘Option Pain’ theory does just this – identify the price at which the market is likely to expire considering least amount of pain is caused to option writers.

Here is how optionspain.com formally defines Option Pain – “ In the options market, wealth transfer between option buyers and sellers is a zero sum game. On option expiration days, the underlying stock price often moves toward a point that brings maximum loss to option buyers. This specific price, calculated based on all outstanding options in the markets, is called Option Pain. Option Pain is a proxy for the stock price manipulation target by the option selling group ”.




### 13.3 – Max Pain Calculation

Here is a step by step guide to calculate the Max Pain value. At this stage, you may find this a bit confusing, but I recommend you read through it all the same. Things ill get clearer once we take up an example –

Step 1  – List down the various strikes on the exchange and note down the open interest of both calls and puts for these strikes.

Step 2  – For each of the strike price that you have noted, assume that the market expires at that strike.

Step 3  – Calculate how much money is lost by option writers (both call option and put option writers) assuming the market expires as per the assumption in step 2.

Step 4  – Add up the money lost by call and put option writers.

Step 5  – Identify the strike at which the money lost by option writers is least.

This level, at which least amount of money is lost by option writers is the point at which maximum pain is caused to option buyers. Therefore this is the price at which the market is most likely to expire.

Let us take up a very simple example to understand this. For the sake of this example, I’ll assume there are only 3 Nifty strikes available in the market. I have made a note of the open interest for both call and put options for the respective strike.


Strike | Call Option OI | Put option OI
--- | --- | ---
7700 | 1823400 | 5783025
7800 | 3448575 | 4864125
7900 | 5367450 | 2559375


Scenario 1 – Assume markets expires at 7700

Remember when you write a  Call  option, you will lose money only if the market moves above the strike. Likewise, when you write a  Put  option you will lose money only when the market moves below the strike price.

Therefore if the market expires at 7700, none of the call option writers will lose money. Which means call option writers of 7700, 7800, and 7900 strikes will retain the premiums received.

However, the put option writers will be in trouble. Let’s start with the 7900 PE writers –

At 7700 expiry, 7900 PE writers would lose 200 points. Since the OI is 2559375, the Rupee value of loss would be –

= 200 * 2559375 = Rs.5,11,875,000/-

7800 PE writers would lose 100 points, the Rupee value would be

= 100 * 4864125 = Rs.4,864,125,000/-

7700 PE writers will not lose any money.

So the combined money lost by option writers if the markets expire at 7700 would be –

Total money lost by Call Option writers + Total money lost by Put Option writers

= 0 + Rs.511875000 + 4,864125000 =  Rs.9,98,287,500 /-

Keep in mind that total money lost by Call Option writers = money lost by 7700 CE writer + money lost by 7800 CE + money lost by 7900 CE

Likewise the Total money lost by Put Option writers = money lost by 7700 PE writer + money lost by 7800 PE + money lost by 7900 PE

Scenario 2 – Assume markets expires at 7800

At 7800, the following call option writers would lose money –

7700 CE writers would lose 100 points, multiplying with its Open Interest we get the Rupee value of the loss.

100*1823400 = Rs.1,82,340,000/-

Both 7800 CE and 7900 CE seller would not lose money.

The 7700 and 7800 PE seller wouldn’t lose money

The 7900 PE would lose 100 points, multiplying with the Open Interest, we get the Rupee value of the loss.

100*2559375 = Rs.2,55,937,500/-

So the combined loss for Options writers when market expires at 7800 would be –

= 182340000 + 255937500

=  Rs.4,38,277,500/-

Scenario 3 – Assume markets expires at 7900

At 7900, the following call option writers would lose money –

7700 CE writer would lose 200 points, the Rupee value of this loss would be –

200 *1823400 = Rs.3,646,800,000/-

7800 CE writer would lose 100 points, the Rupee value of this loss would be –

100*3448575 = Rs.3,44,857,500/-

7900 CE writers would retain the premiums received.

Since market expires at 7900, all the put option writers would retain the premiums received.

So therefore the combined loss of option writers would be –

= 3646800000 + 344857500 =  Rs. 7,095,375,000/-

So at this stage, we have calculated the total Rupee value loss for option writers at every possible expiry level. Let me tabulated the same for you –


Strike | Call Option OI | Put option OI | Loss value of calls | Loss value of Puts | Total loss
--- | --- | --- | --- | --- | ---
7700 | 1823400 | 5783025 | 0 | 998287500 | 998287500
7800 | 3448575 | 4864125 | 182340000 | 255937500 | 438277500
7900 | 5367450 | 2559375 | 7095375000 | 0 | 7095375000


Now that we have identified the combined loss the option writers would experience at various expiry level, we can easily identify the point at which the market is likely to expire.

As per the option pain theory, the market will expire at such a point where there is least amount of pain (read it as least amount of loss) to Option  sellers .

Clearly, from the table above, this point happens to be 7800, where the combined loss is around  438277500  or about 43.82 Crores, which is much lesser compared to the combined loss at 7700 and 7900.

The calculation is as simple as that. However, I’ve used only 3 strikes in the example for simplicity. But in reality there are many strikes for a given underlying, especially Nifty. Calculations become a bit cumbersome and confusing, hence one would have to resort to a tool like excel.

I’ve calculated the option pain value as of today (10 th  May 2016) on excel, have a look at the image –

For all the available strikes, we assume market would expire at that point and then compute the Rupee value of the loss for CE and PE option writers. This value is shown in the last column titled “Total Value”.  Once you calculate the total value, we simply have to identify the point at which the least amount of money is lost by the option writer. You can identify this by plotting the ‘bar graph’ of the total value. The bar graph would look like this –

As you can see, the 7800 strike is the point at which option writers would lose the least amount of money, so as per the option pain theory, 7800 is where the market is likely to expire for the May series.

Now that you have established the expiry level, how can you use this information? Well, there are multiple ways you can use this information.

Most traders use this max pain level to identity the strikes which they can write. In this case, since 7800 is the expected expiry level, one can choose to write call options above 7800 or put options below 7800 and collect all the premiums.

13.4 – A Few Modifications

In the initial days, I was very eager to learn about Option Pain. Everything about it made absolute sense. I remember crunching numbers, identifying the expiry level, and writing options to glory. But shockingly the market would expire at some other point leaving me booking a loss and I wondering if I was wrong with my calculations or if the entire theory is flawed!

So I eventually improvised on the classic option pain theory to suit my risk appetite. Here is what I did –

1. The OI values change every day. This means the option pain could suggest 7800 as the expiry level on 10 th  of May and may very well suggest 8000 on 20 th  of May. I froze on a particular day of the month to run this computation. I preferred doing this when there were 15 days to expiry.
1. I identified the expiry value as per the regular option pain method.
1. I would add a 5% ‘safety buffer’. So at 15 days to expiry, the theory suggest 7800 as expiry, then I’d add a 5% safety buffer. This would make the expiry value as 7800 + 5% of 7800 = 8190 or 8200 strike.
1. I would expect the market to expire at any point between 7800 to 8200.
1. I would set up strategies keeping this expiry range in mind, my most favorite being to write call options beyond 8200.
1. I would avoid writing Put option for this simple belief – panic spreads faster than greed. This means markets can fall faster than it can go up.
1. I would hold the options sold up to expiry, and would usually avoid averaging during this period.

The results were much better when I followed this method. Unfortunately, I never tabulated the results, hence I cannot quantify my gains. However if you come from a programming background, you can easily back test this logic and share the results with the rest of community here. Anyway, at a much later stage I realized the 5% buffer was essentially taking to strikes which were approximately 1.5 to 2% standard deviations away, which meant the probability of markets moving beyond the expected expiry level was about 34%.

If you are not sure what this means, I’d suggest you read this chapter on  standard deviation and distribution of returns .

You can  download  the Option Pain computation excel.

13.5 – The Put Call Ratio

The Put Call Ratio is a fairly simple ratio to calculate. The ratio helps us identify extreme bullishness or bearishness in the market. PCR is usually considered a contrarian indicator. Meaning, if the PCR indicates extreme bearishness, then we expect the market to reverse, hence the trader turns bullish. Likewise if PCR indicates extreme bullishness, then traders expect markets to reverse and decline.

To calculate PCR, all one needs to do is divide the total open interest of Puts by the total open interest of the Calls. The resulting value usually varies in and around one. Have a look at the image below –

As on 10 th  May, the total OI of both Calls and Puts has been calculated. Dividing the Put OI by Call OI gives us the PCR ratio –

37016925 / 42874200  = 0.863385

The interpretation is as follows –

- If the PCR value is above 1, say 1.3 – then it suggests that there are more Puts being bought compared to Calls. This suggests that the markets have turned extremely bearish, and therefore sort of oversold. One can look for reversals and expect the markets to go up.
- Low PCR values such as 0.5 and below indicates that there are more calls being bought compared to puts. This suggests that the markets have turned extremely bullish, and therefore sort of overbought. One can look for reversals and expect the markets to go down.
- All values between 0.5 and 1 can be attributed to regular trading activity and can be ignored.

Needless to say, this is a generic approach to PCR. What would really make sense is to historically plot the daily PCR values for say 1 or 2 years and identify these extreme values. For example for Nifty value such as 1.3 can indicate extreme bearishness, but for say Infy something like 1.2 could be extreme bearishness. So you need to be clear about this, hence back testing helps.

You may wonder why the PCR is used as a contrarian indicator. Well, the explanation to this is rather tricky, but the general opinion is this – if the traders are bearish/bullish, then most of them have already taken their respective position (hence a high/low PCR) and therefore there aren’t many other players who can come in and drive the positions in the desired direction. Hence the position will eventually be squared off which would drive the stock/index in the opposite direction.

So that’s PCR for you. You may come across many variants of this – some prefer to take the total traded value instead of OI, some even prefer to take the volumes. But I personally don’t think it is required to over-think PCR.




### 13.6 – Final thoughts

And with this, I’d like to end this module on Options, which has spread across 2 modules and 36 chapters!

We have discussed close to 15 different option strategies in this module, which I personally think is more than sufficient for retail traders to trade options professionally. Yes, going forward you will encounter many fancy option strategies, perhaps your friend will suggest a fancy option strategy and show off the technicalities of the strategy, but do remember – ‘fancy’ does not really translate to profit. Some of the best strategies are simple , elegant and easy to implement.

The content we have presented in both, Module 5 and Module 6, is written with an intention of giving you a clear picture on options trading – what is possible to be achieve with options trading and what is not possible. We have thought through and discussed what is required and what isn’t. Frankly these two modules are more than sufficient to answer most of your concerns/doubts related to options.

So please do take some time to read through the contents here, at your own pace, and I’m certain you will you will start trading options the way it is supposed to be done.

Finally, I hope you will enjoy reading this as much as I enjoyed writing this for you.

Good luck and stay profitable!

1. Option Pain theory assumes that the option writers tend to make more money consistently compared to option buyers.
1. Option pain assumes that option writers can influence the price of options on the day of expiry.
1. One can use the theory of option pain to identify the price at which the stock/index is likely to expiry.
1. The strike at which the option writers would experience least amount of loss is the strike at which the stock/index likely to expire.
1. The PCR is calculated by dividing the total open interest of Puts by the total open interest of the Calls.
1. The PCR is considered as a contrarian indicator.
1. Generally a PCR value of over 1.3 is considered bearish and a PCR value of less than 0.5 is considered bullish.



## 14.Iron_Condor

[Read more](https://zerodha.com/varsity/chapter/iron-condor/)



### 14.1 – New margin framework

These are fascinating times we are living in, especially if you are an options trader in India 🙂

Starting 1 st  June 2020, NSE’s new margin framework is live, which essentially brings down the margin requirement for the hedged position.

What is a hedged position you may ask? Well, we have discussed this several times in this module, but for the sake of completeness of this chapter, we will quickly discuss this again.

Assume you are riding a bike at 75Kms per hour, without wearing a helmet. Suddenly you come across a pothole, you slam the breaks to cut speed, but it’s too late, you crash and fall.  What is the probability of injuring your head? Quite high given the fact that you are not wearing a helmet.

Now imagine the same situation, but instead of being carefree, you decide to wear a helmet. Given the crash, what is the probability of injuring your head? Low probability, right? Because the helmet protects you from an injury.

The helmet acts as a hedge against a potential disaster.

In the same way, a naked futures or options position in the market is like riding a bike without wearing a helmet. The risk of market-moving against your position, causing capital erosion is high.

However, if you hedge your position, then the risk of losing capital reduces drastically.

Now, think about this – if your capital loss is minimal, then it implies that the risk for your broker is also minimum right? Now, if the risk for the broker reduces, it also means the risk for the exchange reduces.

So what does this mean to you as a trader?

Remember, the critical margin dynamics – the lesser the risk you carry, the lower the margin requirement. Higher the risk, higher the margin requirement.

Therefore, this means whenever you initiate a hedged strategy, the margins blocked by your broker is less compared to the margin required for a naked position.

In essence, NSE has proposed the same in the new margin framework.

You can check this  presentation by NSE for more details.

The presentation is quite technical; you do not have to crack your head to understand this unless you really want to.

From a trader’s point of view, there are three key takeaways from the new margin policy; all the three highlighted in 1 slide of this presentation, here is a snapshot –

Starting from the top –

- Portfolio 1 – Margins have increased for naked unhedged positions to 18.5% from the current 16.7%.
- Portfolio 2 – 70% reduction in margins for market-neutral positions
- Portfolio 3 – 80% reduction in margins for spread positions

What does this mean to you as an options trader?

Well, some of the useful strategies, which looked great on paper but were prohibitive to implement due to excessive margin requirement, now look enticing.

A trick question for you here – why do you think the margin reduction is higher for spread position compared to a neutral market position?.

Do think about it and post your response in the comment section.

So given this, I want to discuss one more options strategy in this module, I had not discussed it earlier since the margin requirement was very high, but now, it’s no longer the case.




### 14.2 – Iron Condor

The iron condor is a four-legged option setup. The iron condor is an improvisation over the short strangle.

Have a look at this –

I’ve taken this snapshot from  Sensibull’s Options Strategy Builder . As you can see, Nifty is at 9972.9, and I’m trying to set up a short strangle by shorting OTM calls and puts –

- 9800 Put at 165.25
- 10100 Call at 145.25

Since both the options are written/sold, I get to collect a total premium of 164.25+145.25 = 309.5.

For those of you not familiar with the strangles, I’d suggest you read through  this chapter .

The pay off for this short strangle set up is as follows –

I love this strategy because it lets me retain the premium as long as Nifty stays within a range, which most often it does. Besides, this is also a great way to trade volatility. Whenever you think the volatility has shot up (usually it does around big market events) and therefore the option premiums, then you’d want to be an options seller and pocket the high premiums. Short strangles is perfect for such trades.

In a short strangle, since you sell/write options, it results in a net premium credit. In this case, you get a premium of Rs.23,288/-.

The only issue with short strangles is the exposed ends. The strategy bleeds if the underlying asset moves in either direction.

For example, this particular short strangle has a range of safety between 9490 and 10411.

I agree this is a wide enough range, but markets have taught that it can make crazy moves within a short period. Most recent being the COVID-19 crash in early 2020 followed by quick recovery from the lows.

If you are caught with such a rapid market move, the potential loss can be colossal and can wipe your account clean. Now, because the possible loss is unlimited, this means the risk to you and the broker is quite high. Eventually, this translates to  higher margins  as well –

The margin to set up a short strangle is nearly 1.45L, which is quite prohibitive for many traders.

However, this does not mean that you have to say goodbye to a short strangle. You can improvise on the short strangle and set up an iron condor, which in my opinion is a far better strategy.

An iron condor improvises a short strangle by plugging in the open ends. Think of an iron condor in 3 parts –

- Part 1 – Set up a short strangle by selling a slightly OTM Call and Put option
- Part 2 – Buy a further OTM Call to protect the short call against a massive market rally
- Part 3 – Buy a further OTM Put to protect the short Put against a massive market decline

This makes an iron condor a four-leg option strategy. Let us see how this looks –

- Part 1 – Sell 9800 PE at 165.25 and sell a 10100CE at 145.25, collect a premium of 310.5 or Rs.23,288/-.
- Part 2 – Buy 10300 CE at 77 to protect the short 10100 CE
- Part 3 – Buy 9600 PE at 105.05 to protect the short 9800 PE

The trade setup looks like this –

If you think about this, the short option premium collected finances the long option positions.

Since you buy two options to protect against two short options, the profit potential reduces to a certain extent –

As you can see, the max profit is now Rs.9,634/-, but the reduced profit comes with reduced stress 🙂

The max loss is no longer unlimited but restricted to Rs.5,366, which in my opinion is awesome because I now have visibility on risk and it is not open-ended.

The profit is restricted, as long as Nifty stays within a range, in this case between 9672 and 10228. Notice, the range has shrunk compared to the short strangle.

The payoff of an iron condor looks like this –

Now, what do you think about the risk? The risk here is completely defined. You have clear visibility on the worst-case scenario. So what does it mean to you as a trader, and what does it mean to the broker?

You guessed it right since the risk is defined, the margins are lesser.

This is where the new margin framework of NSE comes into play. An iron condor requires you to pay an upfront margin of only Rs.44,303/-, contrast this with the short strangle’s margin requirement of Rs.1.45L.

Besides, before the new margin framework, executing an iron condor was not very viable for a retail trader. For these strikes and premiums, the margin requirement for an Iron Condor was roughly in the range of 2 to 2.2L.




### 14.3 – Max P&L

There are a few important things you need to remember while executing an iron condor –

1. The PE and CE that you buy should have even strike distribution from the sold strike. For example, here we have sold 9800 PE and 10,100 CE. We have protected the sold strikes by going long on 9600 PE and 10,300 CE. The difference between 9800 PE and 9600 PE is 200 and 10,100 CE and 10,300 CE is 200. The spread should be even. I cannot protect 9800 PE by buying 9700 PE (difference of 100) and then protect 10,100 CE with 10,300 CE (difference of 200).
1. The Max loss occurs when the market moves either above long CE i.e. 10,300 CE or moves below long PE i.e. 9,600PE
1. Spread  = 200 i.e. the difference between the sold strike and its protective strike.
1. Max Profit  = Net premium received. In this case, it is 128.45 (9634/75)
1. Max loss  = Spread – Net premium received. In this case, it is 200 – 128.45 = 71.54.

I’d suggest you look at the excel sheet at the end of this chapter for detail working of this. Please note, I have updated the excel sheet 2 days after I wrote this chapter, hence the values are different.




### 14.4 – ROI and Logistics

By setting up a short strangle, you receive a premium of Rs.23,288/- and for the iron condor, the premium receivable is Rs.9,643/-. Agreed, in terms of absolute Rupees, the iron condor offers a far lesser premium inflow. But when you measure this against the margin requirement, the ROI flips in favour of the Iron condor.

Short strangle requires a margin of Rs.1,45,090/-. Therefore the ROI is –

23,288/1,45,090

=16%.

The margin requirement for iron condor is Rs.44,303/-. Therefore the ROI is –

9,643/44,303

= 21%

As a trader, you need to think in terms of ROI and not absolute numbers, and the margin benefit makes a significant difference here.

The sequence of trade execution makes a big difference here. If you are considering an iron condor, then here is the trade sequence –

- Buy the far OTM call option
- Sell the OTM Call option
- Buy the far OTM PUT
- Sell the OTM PUT option

The point here is that you need to have a long position first before initiating the short position.

Why? Because short option position is a margin guzzler, so when you have a long position, the system knows the risk is contained and hence will ask you for lesser margins for the short position.

Please note, I’ve only considered the margin blocked for the ROI calculation, I’ve not considered the money paid to buy the options and the money received when you write an option.

So traders, as a next step, I’d urge you to select different strikes for the long positions and see what happens to the premium receivable, breakeven points, and the max loss.

Do post your observation and queries below.

- NSE’s new margin framework reduces the margin requirement for market neutral and hedged strategies
- While the short strangle is an excellent strategy, it has open ends with potentially unlimited losses
- The iron condor is an improvisation over the short strangle
- In an iron condor, the long OTM calls and puts protect the open ends of the  short strangle
- Margin required for an iron condor is far lesser compared to a short strangle

Download Iron Condor Excel Sheet



## 4.Call_Ratio_Back_Spread

[Read more](https://zerodha.com/varsity/chapter/call-ratio-back-spread/)



### 4.1 – Background

The Call Ratio Back Spread is an interesting options strategy. I call this interesting keeping in mind the simplicity of implementation and the kind of pay off it offers the trader. This should certainly have a spot in your strategy arsenal. The strategy is deployed when one is out rightly bullish on a stock (or index), unlike the bull call spread or bull put spread where one is moderately bullish.

At a broad level this is what you will experience when you implement the Call Ratio Back Spread-

1. Unlimited profit if the market goes up
1. Limited profit if market goes down
1. A predefined loss if the market stay within a range

In simpler words you can get to make money as long as the market moves in either direction.

Usually, the Call Ratio Back Spread is deployed for a ‘net credit’, meaning money flows into your account as soon as you execute Call Ratio Back Spread. The ‘net credit’ is what you make if the market goes down, as opposed to your expectation (i.e market going up). On the other hand, if the market indeed goes up, then you stand to make an unlimited profit. I suppose this should also explain why the call ratio spread is better than buying a plain vanilla call option.

So let’s go ahead and figure out how this works.




### 4.2 – Strategy Notes

The Call Ratio Back Spread is a 3 leg option strategy as it involves  buying two OTM  call option and  selling one ITM  Call option. This is the classic 2:1 combo. In fact the call ratio back spread has to be executed in the 2:1 ratio meaning 2 options bought for every one option sold, or 4 options bought for every 2 option sold, so on and so forth.

Let take an example – assume Nifty Spot is at 7743 and you expect Nifty to hit 8100 by the end of expiry. This is clearly a bullish outlook on the market. To implement the Call Ratio Back Spread –

1. Sell  one  lot of 7600 CE (ITM)
1. Buy  two  lots of 7800 CE (OTM)

Make sure –

1. The Call options belong to the same expiry
1. Belongs to the same underlying
1. The ratio is maintained

The trade set up looks like this –

1. 7600 CE, one lot short, the premium received for this is Rs.201/-
1. 7800 CE, two lots long, the premium paid is Rs.78/- per lot, so Rs.156/- for 2 lots
1. Net Cash flow is = Premium Received – Premium Paid i.e 201 – 156 =  45  (Net Credit)

With these trades, the call ratio back spread is executed. Let us check what would happen to the overall cash flow of the strategies at different levels of expiry.

Do note we need to evaluate the strategy payoff at various levels of expiry as the strategy payoff is quite versatile.

Scenario 1 – Market expires at 7400 (below the lower strike price)

We know the intrinsic value of a call option (upon expiry) is –

Max [Spot – Strike, 0]

The 7600 would have an intrinsic value of

Max [7400 – 7600, 0]

= 0

Since we have sold this option, we get to retain the premium received i.e Rs.201

The intrinsic value of 7800 call option would also be zero; hence we lose the total premium paid i.e Rs.78 per lot or Rs.156 for two lots.

Net cash flow would Premium Received – Premium paid

= 201 – 156

=  45

Scenario 2 – Market expires at 7600 (at the lower strike price)

The intrinsic value of both the call options i.e 7600 and 7800 would be zero, hence both of them expire worthless.

We get to retain the premium received i.e Rs.201 towards the 7600 CE however we lose Rs.156 on the 7800 CE resulting in a net payoff of  Rs.45.

Scenario 3 – Market expires at 7645 (at the lower strike price plus net credit)

You must be wondering why I picked the 7645 level, well this is to showcase the fact that the strategy break even is at this level.

The intrinsic value of 7600 CE would be –

Max [Spot – Strike, 0]

= [7645 – 7600, 0]

= 45

Since, we have sold this option for 201 the net pay off from the option would be

201 – 45

= 156

On the other hand we have bought two 7800 CE by paying a premium of 156. Clearly the 7800 CE would expire worthless hence, we lose the entire premium.

Net payoff would be –

156 – 156

=  0

So at 7645 the strategy neither makes money or loses any money for the trader, hence 7645 is treated as a breakeven point for this trade.

Scenario 4 – Market expires at 7700 (half way between the lower and higher strike price)

The 7600 CE would have an intrinsic value of 100, and the 7800 would have no intrinsic value.

On the 7600 CE we get to retain 101, as we would lose 100 from the premium received of 201 i.e 201 – 100 = 101.

We lose the entire premium of Rs.156 on the 7800 CE, hence the total payoff from the strategy would be

= 101 – 156

=  – 55

Scenario 5 – Market expires at 7800 (at the higher strike price)

This is an interesting market expiry level, think about it –

1. At 7800 the 7600 CE would have an intrinsic value of 200, and hence we have to let go of the entire premium received i.e 201
1. At 7800, the 7800 CE would expire worthless hence we lose the entire premium paid for the 7800 CE i.e Rs.78 per lot, since we have 2 of these we lose Rs.156

So this is like a ‘double whammy’ point for the strategy!

The net pay off for the strategy is –

Premium Received for 7600 CE – Intrinsic value of 7600 CE – Premium Paid for 7800 CE

= 201 – 200 – 156

=  -155

This also happens to be the maximum loss of this strategy.

Scenario 6 – Market expires at 7955 (higher strike i.e 7800 + Max loss)

I’ve deliberately selected this strike to showcase the fact that at 7955 the strategy breakeven!

But we dealt with a breakeven earlier, you may ask?

Well, this strategy has two breakeven points – one on the lower side (7645) and another one on the upper side i.e 7955.

At 7955 the net payoff from the strategy is –

Premium Received for 7600 CE – Intrinsic value of 7600 CE + (2* Intrinsic value of 7800 CE) – Premium Paid for 7800 CE

= 201 – 355 + (2*155) – 156

= 201 – 355 + 310 – 156

=  0

Scenario 7 – Market expires at 8100 (higher than the higher strike price, your expected target)

The 7600 CE will have an intrinsic value of 500, and the 7800 CE will have an intrinsic value of 300.

The net payoff would be –

Premium Received for 7600 CE – Intrinsic value of 7600 CE + (2* Intrinsic value of 7800 CE) – Premium Paid for 7800 CE

= 201 – 500 + (2*300) – 156

= 201 – 500 + 600 -156

=  145

Here are various other levels of expiry, and the eventual payoff from the strategy. Do note, as the market goes up, so does the profits, but when the market goes down, you still make some money, although limited.




### 4.3 – Strategy Generalization

Going by the above discussed scenarios we can make few generalizations –

- Spread = Higher Strike – Lower Strike
- Net Credit = Premium Received for lower strike – 2*Premium of higher strike
- Max Loss = Spread – Net Credit
- Max Loss occurs at = Higher Strike
- The payoff when market goes down = Net Credit
- Lower Breakeven = Lower Strike + Net Credit
- Upper Breakeven = Higher Strike + Max Loss

Here is a graph that highlights all these important points –

Notice how the payoff remains flat even when the market goes down, the maximum loss at 7800, and the way the payoff takes off beyond 7955.




### 4.4 – Welcome back the Greeks

I suppose you are familiar with these graphs by now. The following graphs show the profitability of the strategy considering the time to expiry and therefore these graphs help the trader select the right strikes.

Before understanding the graphs above, note the following –

1. Nifty spot is assumed to be at 8000
1. Start of the series is defined as anytime during the first 15 days of the series
1. End of the series is defined as anytime during the last 15 days of the series
1. The Call Ratio Back Spread is optimized and the spread is created with 300 points difference

The thought here is that the market will move up by about 6.25% i.e from 8000 to 8500. So considering the move and the time to expiry, the graphs above suggest –

1. Graph 1 (top left) and Graph 2 (top right)  – You are at the start of the expiry series and you expect the move over the next 5 days (and 15 days in case of Graph 2), then a Call Ratio Spread with 7800 CE (ITM) and 8100 CE (OTM) is the  most profitable  wherein you would sell 7800 CE and buy 2 8100 CE. Do note – even though you would be right on the direction of movement, selecting other far OTM strikes call options tend to lose money
1. Graph 3 (bottom left) and Graph 4 (bottom right)  – You are at the start of the expiry series and you expect the move in  25 days  (and expiry day in case of Graph 3), then a Call Ratio Spread with 7800 CE (ITM) and 8100 CE (OTM) is the most profitable wherein you would sell 7800 CE and buy 2 8100 CE.

You must be wondering that the selection of strikes is same irrespective of time to expiry. Well yes, in fact this is the point – Call ratio back spread works best when you sell slightly ITM option and buy slightly OTM option  when there is ample time to expiry . In fact all other combinations lose money, especially the ones with far OTM options and especially when you expect the target to be achieved closer to the expiry.

Here are another bunch of charts; the only difference is that the move (i.e 6.25%) occurs during the 2 nd  half of the series –

1. Graph 1 (top left) & Graph 2 (top right)  – If you expect the move during the 2 nd  half of the series, and you expect the move to happen within  a day (or within 5 days, graph 2)  then the best strikes to opt are deep ITM and slightly ITM i.e 7600 (lower strike short) and 7900 (higher strike long). Do note, this is not the classic combo of an ITM + OTM spread, instead this is an ITM and ITM spread! In fact all other combinations don’t work.
1. Graph 3 (bottom right) & Graph 4 (bottom left)  – If you expect the move during the 2 nd  half of the series, and you expect the move to happen within  10 days (or on expiry day, graph 4)  then the best strikes to opt are deep ITM and slightly ITM i.e 7600 (lower strike short) and 7900 (higher strike long). This is similar to what graph 1 and graph 2 suggest.

Again, the point to note here is besides getting the direction right, the strike selection is the key to the profitability of this strategy. One needs to be diligent enough to map the time to expiry to the right strike to make sure that the strategy works in your favor.

What about the effect of volatility on this strategy? Well, volatility plays a key role here, have a look at the image below –

There are three colored lines depicting the change of “net premium” aka the strategy payoff versus change in volatility. These lines help us understand the effect of increase in volatility on the strategy keeping time to expiry in perspective.

1. Blue Line  – This line suggests that an increase in volatility when there is ample time to expiry (30 days) is beneficial for the Call ratio back spread. As we can see the strategy payoff increases from -67 to +43 when the volatility increase from 15% to 30%. Clearly this means that when there is ample time to expiry, besides being right on the direction of stock/index you also need to have a view on volatility. For this reason, even though I’m bullish on the stock, I would be a bit hesitant to deploy this strategy at the start of the series if the volatility is on the higher side (say more than double of the usual volatility reading)
1. Green line  – This line suggests that an increase in volatility when there are about 15 days time to expiry is beneficial, although not as much as in the previous case. As we can see the strategy payoff increases from -77 to -47 when the volatility increase from 15% to 30%.
1. Red line –  This is an interesting, counter intuitive outcome. When there are very few days to expiry, increase in volatility has a negative impact on the strategy! Think about it, increase in volatility when there are few days to expiry enhances the possibility of the option to expiry OTM, hence the premium decreases. So, if you are bullish on a stock / index with few days to expiry, and you also expect the volatility to increase during this period then thread cautiously.

1. The Call Ratio Backspread is best executed when your outlook on the stock/index is bullish
1. The strategy requires you to sell 1 ITM CE and buy 2 OTM CE, and this is to be executed in the same ratio i.e for every 1 sold option, 2 options have to be purchased
1. The strategy is usually executed for a ‘net Credit’
1. The strategy makes limited money if the stock price goes down, and unlimited profit if the stock price goes up. The loss is pre defined
1. There are two break even points – lower breakeven and upper breakeven points
1. Spread = Higher Strike – Lower Strike
1. Net Credit = Premium Received for lower strike – 2*Premium of higher strike
1. Max Loss = Spread – Net Credit
1. Max Loss occurs at = Higher Strike
1. The payoff when market goes down = Net Credit
1. Lower Breakeven = Lower Strike + Net Credit
1. Upper Breakeven = Higher Strike + Max Loss
1. Irrespective of the time to expiry opt for slightly ITM + Slightly OTM combination of strikes
1. Increase in volatility is good for this strategy when there is more time to expiry, but when there is less time to expiry, increase in volatility is not really good for this strategy.

Download Call Ratio Back Spread Excel Sheet



## 10.The_Long_Straddle

[Read more](https://zerodha.com/varsity/chapter/the-long-straddle/)



### 10.1 – The directional dilemma

How many times have you been in a situation wherein you take a trade after much conviction, either long or short and right after you initiate the trade the market moves just the other way round? All your strategy, planning, efforts, and capital go for a toss. I’m certain this is one situation all of us have been in. In fact this is one of the reasons why most professional traders go beyond the regular directional bets and set up strategies which are insulated against the unpredictable market direction.

Strategies whose profitability does not really depend on the market direction are called “Market Neutral” or “Delta Neutral” strategies. Over the next few chapters we will understand some of the market neutral strategies and how a regular retail trader can execute such strategies. Let us begin with a ‘Long Straddle’.




### 10.2 – Long Straddle

Long straddle is perhaps the simplest market neutral strategy to implement. Once implemented, the P&L is not affected by the direction in which the market moves. The market can move in any direction, but it has to move. As long as the market moves (irrespective of its direction), a positive P&L is generated. To implement a long straddle all one has to do is –

1. Buy a Call option
1. Buy a Put option

Ensure –

1. Both the options belong to the same underlying
1. Both the options belong to the same expiry
1. Belong to the same strike

Here is an example which explains the execution of a long straddle and the eventual strategy payoff. As I write this, the market is trading at 7579, which would make the strike 7600 ‘At the money’. Long straddle would require us to simultaneously purchase the ATM call and put options.   As you can see from the snapshot above, 7600CE is trading at 77 and 7600 PE is trading at 88. The simultaneous purchase of both these options would result in a net debit of Rs.165. The idea here is – the trader is long on both the call and put options belonging to the ATM strike. Hence the trader is not really worried about which direction the market would move.

If the market goes up, the trader would expect to see gains in Call options far higher than the loss made (read premium paid) on the put option. Similarly, if the market goes down, the gains in the Put option far exceeds the loss on the call option. Hence irrespective of the direction, the gain in one option is good enough to offset the loss in the other and still yield a positive P&L.  Hence the market direction here is meaningless. Let us break this down further and evaluate different expiry scenarios.

Scenario 1 – Market expires at 7200, put option makes money  This is a scenario where the gain in the put option not only offsets the loss made in the call option but also yields a positive P&L over and above. At 7200 –

- 7600 CE will expire worthless, hence we lose the premium paid i.e  Rs. 77
- 7600 PE will have an intrinsic value of 400. After adjusting for the premium paid i.e Rs.88, we get to retain 400 – 88 = 312
- The net payoff would be 312 – 77 =  +   235

As you can see, the gain in put option after adjusting for the premium paid for put option and after adjusting for the premium paid for the call option still yields a positive P&L.

Scenario 2 – Market expires at 7435 (lower breakeven)  This is a situation where the strategy neither makes money nor loses any money.

- 7600 CE would expire worthless; hence the premium paid has to be written off. Loss would be Rs.77
- 7600 PE would have an intrinsic value of 165, hence this is the gain in the put option
- However the net premium paid for the call and put option is Rs.165, which gets adjusted with the gain in the put option

If you think about it, with respect to the ATM strike, market has indeed expired at a lesser value. So therefore the put option makes money. However, the gains made in the put option adjusts itself against the premium paid for both the call and put option, eventually leaving no money on the table.

Scenario 3 – Market expires at 7600 (at the ATM strike)  At 7600, the situation is quite straight forward as both the call and put option would expire worthless and hence the premium paid would be gone. The loss here would be equivalent to the net premium paid i.e Rs.165.

Scenario 4 – Market expires at 7765 (upper breakeven)  This is similar to the 2 nd  scenario we discussed. This is a point at which the strategy breaks even at a point higher than the ATM strike.

- 7600 CE would have an intrinsic value of 165, hence this is the gain in Call option
- 7600 PE would expire worthless, hence the premium paid towards the option is lost
- The gain made in the 7600 CE is offset against the combined premium paid

Hence the strategy would breakeven at this point.

Scenario 5 – Market expires at 8000, call option makes money  Clearly the market in this scenario is way above the 7600 ATM mark. The call option premiums would swell, so much so that the gains in call option will more than offset the premiums paid. Let us check the numbers –

- 7600 PE will expire worthless, hence the premium paid i.e Rs.88 is to be written off
- At 8000, the 7600 CE will have an intrinsic value of 400
- The net payoff here is 400 – 88 – 77 =  +235

So as you can see, the gain in call option is significant enough to offset the combined premiums paid. Here is the payoff table at different market expiry levels.   As you can observe –

1. The maximum loss (165) occurs at 7600, which is the ATM strike
1. The profits are unlimited in either direction of the market

We can visualize these points in the payoff structure here –   From the V shaped payoff graph, the following things are quite clear –

1. With reference to the ATM strike, the strategy makes money in either direction
1. Maximum loss is experienced when markets don’t move and stay at ATM
 
 Max loss = Net premium paid
1. Max loss = Net premium paid
1. There are two breakevens – on either side, equidistant from ATM
 
 Upper Breakeven = ATM + Net premium 
 Lower Breakeven = ATM – Net premium
1. Upper Breakeven = ATM + Net premium
1. Lower Breakeven = ATM – Net premium

I’m certain, you find this strategy quite straight forward to understand and implement. In summary, you buy calls and puts, each leg has a limited down side, hence the combined position also has a limited downside and an unlimited profit potential. So in essence, a long straddle is like placing a bet on the price action each-way  – you make money if the market goes up or down. Hence the direction does not matter here. But let me ask you this – if the direction does not matter, what else matters for this strategy?




### 10.3 – Volatility Matters

Yes, volatility matters quite a bit when you implement the straddle. I would not be exaggerating if I said that volatility makes or breaks the straddle. Hence a fair assessment on volatility serves as the backbone for the straddle’s success. Have a look at this graph below –   The y-axis represents the cost of the strategy, which is simply the combined premium of both the options and the x-axis represents volatility. The blue, green, and red line represents how the premium increases when the volatility increases given that there is 30, 15, and 5 days to expiry respectively. As you can see, this is a linear graph and irrespective of time to expiry, the strategy cost increases as and when the volatility increases. Likewise the strategy costs decreases when the volatility decreases.

Have a look at the blue line; it suggests when volatility is 15%, the cost of setting up a long straddle is 160. Remember the cost of a long straddle represents the combined premium required to buy both call and put options. So at 15% volatility it costs Rs.160 to set up the long straddle, however keeping all else equal, when volatility increases to 30% it costs Rs.340 to set up the same long straddle. In other words, you are likely to double your money in the straddle provided –

1. You set up the long straddle at the start of the month
1. The volatility at the time of setting up the long straddle is relatively low
1. After you set up the long straddle, the volatility doubles

You can make similar observations with the green and red line which represents the ‘price to volatility’ behavior when the time to expiry is 15 and 5 days respectively. Now, this also means you will lose money if you execute the straddle when the volatility is high which starts to decline after you execute the long straddle.  This is an extremely crucial point to remember.  At this point, let us have a quick discussion on the overall strategy’s delta. Since we are long on ATM strike, the delta of both the options is close to 0.5.

- The call option has a delta of + 0.5
- The put option has a delta of – 0.5

The delta of call option offsets the delta of put option thereby resulting in a net ‘0’ overall delta. Recall, delta shows the direction bias of the position. A +ve delta indicates a bullish bias and a -ve delta indicates a bearish bias. Given this, a 0 delta indicates that there is no bias whatsoever to the direction of the market. So all strategies which have zero deltas are called ‘Delta Neutral’ and Delta Neutral strategies are insulated against the market direction.




### 10.4 – What can go wrong with the straddle?

On the face of it a long straddle looks great. Think about it – you get to make money whichever way the market decides to move. All you need is the right volatility estimate. Therefore, what can really go wrong with a straddle? Well, two things come in between you and the profitability of a long straddle –

1. Theta Decay  – All else equal, options are depreciating assets and this particularly hurts long positions. The closer you get to expiration, the lesser time value of the option. Time decay accelerates exponentially during the last week before expiration, so you do not want to hold onto out-of-the-money or at-the-money options into the last week and lose premiums rapidly.
1. Large breakevens  – Recollect, in the example we discussed earlier, the breakeven points were 165 points away from the ATM strike. The lower breakeven point was 7435 and the upper breakeven was 7765, considering the ATM strike was 7600. In percentage terms, the market has to move 2.2% (either ways) to achieve breakeven.This means that from the time you initiate the straddle, the market or the stock has to move atleast 2.2% either ways for you to start making money…and this move has to happen within a maximum of 30 days. Further if you want to make a profit of atleast 1% on this trade, then we are talking about a 1% move over and above 2.2% on the index. Such large move on the index is quite a challenge in my opinion and I will explain why in the next chapter.

Keeping the above two points plus the impact on volatility in perspective, we can summarize what really needs to work in your favor for the straddle to be profitable –

1. The volatility should be relatively low at the time of strategy execution
1. The volatility should increase during the holding period of the strategy
1. The market should make a large move – the direction of the move does not matter
1. The expected large move is time bound, should happen quickly – well within the expiry

From my experience trading long straddles, they are profitable when setup around major market events and the impact of such events should exceed over and above what the market expects. Let me explain the ‘event and expectation’ part a bit more, please do read the following carefully. Let us take the Infosys results as an example here.

Event  – Quarterly results of Infosys

Expectation  – ‘Muted to flat’ revenue guideline for the coming few quarters.

Actual Outcome  – As expected Infosys announces ‘muted to flat’ revenue guideline for the coming few quarters. If you were the set up a long straddle in the backdrop of such an event (and its expectation), and eventually the expectation is matched, then chances are that the straddle would fall apart. This is because around major events, volatility tends to increase which tends to drive the premium high.

So if you are to buy ATM call and put options just around the corner of an event, then you are essentially buying options when the volatility is high. When events are announced and the outcome is known, the volatility drops like a ball, and therefore the premiums. This naturally breaks the straddle down and the trader would lose money owing to the ‘bought at high volatility and sold at low volatility’ phenomena. I’ve noticed this happening over and over again, and unfortunately have seen many traders lose money exactly for this reason.

Favorable Outcome  – However imagine, instead of ‘muted to flat’ guideline they announce an ‘aggressive’ guideline. This would essentially take the market by surprise and drive premiums much higher, resulting in a profitable straddle trade. This means there is another angle to straddles – your assessment of the event’s outcome should be couple of notches better than the general market’s assessment.

You cannot setup a straddle with a mediocre assessment of events and its outcome. This may seem like a difficult proposition but you will have to trust me here – few quality years of trading experience will actually get you to assess situations way better than the rest of the market. So, just for clarity, I’d like to repost all the angles which need to be aligned for the straddle to be profitable –

1. The volatility should be relatively low at the time of strategy execution
1. The volatility should increase during the holding period of the strategy
1. The market should make a large move – the direction of the move does not matter
1. The expected large move is time bound, should happen quickly – well within the expiry
1. Long straddles are to be set around major events, and the outcome of these events to be drastically different from the general market expectation.

You may be wondering there are far too many points that come in between you and the long straddle’s profitability. But worry not, I’ll share an antidote in the next chapter  – The Short Straddle, and why it makes sense.

1. Strategies which are insulated to market direction are called ‘Market Neutral’ or ‘Delta neutral’
1. Market neutral strategies such as long straddle makes money either which way the market moves
1. Long straddle requires you to simultaneously buy the ATM Call and Put option. The options should belong to the same underlying, same strike, and same expiry
1. By buying the CE and PE – the trader is placing the bet on either direction
1. The maximum loss is equal to the net premium paid, and it occurs at the strike at which the long straddle has been initiated
1. The upper breakeven is ‘strike + net premium’. The lower breakeven is ‘strike – net premium’
1. The deltas in a long straddle adds up to zero
1. The volatility should be relatively low at the time of strategy execution
1. The volatility should increase during the holding period of the strategy
1. The market should make a large move – the direction of the move does not matter
1. The expected large move is time bound, should happen quickly – well within the expiry
1. Long straddles are to be set around major events, and the outcome of these events to be drastically different from the general market expectation.

Download Bull Call Spread Excel Sheet



## 9.Put_Ratio_Back_spread

[Read more](https://zerodha.com/varsity/chapter/put-ratio-back-spread/)



### 9.1 – Background

We discussed the “Call Ratio Back spread” strategy extensively in chapter 4 of this module. The Put ratio back spread is similar except that the trader invokes this when he is bearish on the market or stock.

At a broad level this is what you will experience when you implement the Put Ratio Back Spread

1. Unlimited profit if the market goes down
1. Limited profit if market goes up
1. A predefined loss if the market stays within a range

In simpler words you make money as long as the market moves in either direction, of course the strategy is more favorable if market goes down.

Usually, the Put Ratio Back Spread is deployed for a ‘net credit’, meaning money flows into your account as soon as you execute Put Ratio Back Spread. The ‘net credit’ is what you make if the market goes up, as opposed to your expectation (i.e market going down). On the other hand if the market indeed goes down, then you stand to make an unlimited profit.

I suppose this should also explain why the put ratio back spread is better than buying a plain vanilla put option.




### 9.2 – Strategy Notes

The Put Ratio Back Spread is a 3 leg option strategy as it involves  buying two OTM  Put options and  selling one ITM  Put option. This is the classic 2:1 combo. In fact the put ratio back spread has to be executed in the 2:1 ratio meaning 2 options bought for every one option sold, or 3 options bought for every 2 options sold, so on and so forth.

Let take an example – Nifty Spot is at 7506 and you expect Nifty to hit 7000 by the end of expiry. This is clearly a bearish expectation. To implement the Put Ratio Back Spread –

1. Sell  one  lot of 7500 PE (ITM)
1. Buy  two  lots of 7200 PE (OTM)

Make sure –

1. The Put options belong to the same expiry
1. Belong to the same underlying
1. The ratio is maintained

The trade set up looks like this –

1. 7500 PE, one lot short, the premium received for this is Rs.134/-
1. 7200 PE, two lots long, the premium paid is Rs.46/- per lot, so Rs.92/- for 2 lots
1. Net Cash flow is = Premium Received – Premium Paid i.e 134 – 92 =  42  (Net Credit)

With these trades, the Put ratio back spread is executed. Let us check what would happen to the overall cash flow of the strategies at different levels of expiry.

Do note we need to evaluate the strategy payoff at various levels of expiry, as the strategy payoff is quite versatile.

Scenario 1 – Market expires at 7600 (above the ITM option)

At 7600, both the Put options would expire worthless. The intrinsic value of options and the eventual strategy payoff is as below –

- 7200 PE, would expire worthless, since we are long 2 lots of this option at Rs.46 per lot, we would  lose  the entire premium of Rs.92 paid
- 7500 PE would also expire worthless, but we have written this option and received a premium of Rs.134, which in this case can be retained back
- The net payoff from the strategy is 134 – 92 =  42

Do note, the net payoff of the strategy at 7600 (higher than the ITM strike) is equivalent to the net credit.

Scenario 2 – Market expires at 7500 (at the higher strike i.e the ITM option)

At 7500 both the options would have no intrinsic value, hence they both would expire worthless. Hence the payoff would be similar to the payoff we discussed at 7600. Hence the net strategy payoff would be equal to Rs.42 (net credit).

In fact as you may have guessed, the payoff of the strategy at any point above 7500 is equal to the net credit.

Scenario 3 – Market expires at 7458 (higher break even)

Like in the call ratio back spread strategy, the put ratio back spread too has two breakeven points i.e the upper breakeven and the lower breakeven point. 7458 marks the upper breakeven level; of course we will discuss how we arrived at the upper breakeven point a little later in the chapter.

- At 7458, the 7500 PE will have an intrinsic value. As you may recall, the put option intrinsic value can be calculated as Max[Strike – Spot, 0] i.e Max[7500 – 7458, 0] hence 42
- Since we have sold 7500 PE at 134, we will lose a portion of the premium received and retain the rest. Hence the payoff would be 134 – 42 =  92
- The 7200 PE will not have any intrinsic value, hence the entire premium paid i.e 92 is lost
- So on one hand we made 92 on the 7500 PE and on the other we would lose 92 on the 7200 PE resulting in no loss, no gain. Thus, 7458 marks as one of the breakeven points.

Scenario 4 – Market expires at 7200 (Point of maximum pain)

This is the point at which the strategy causes maximum pain, let us figure out why.

- At 7200, 7500 PE would have an intrinsic value of 300 (7500 – 7200). Since we have sold this option and received a premium of Rs.134, we would lose the entire premium received and more. The payoff on this would be 134 – 300 =  – 166
- 7200 PE would expire worthless as it has no intrinsic value. Hence the entire premium paid of Rs.92 would be lost
- The net strategy payoff would be -166 – 92 =  – 258
- This is a point where both the options would turn against us, hence is considered as the point of maximum pain

Scenario 5 – Market expires at 6942 (lower break even)

At 6942, both the options would have an intrinsic value; however this is the lower breakeven point. Let’s figure out how this works –

- At 6942, 7500 PE will have an intrinsic value equivalent of 7500 – 6942 = 558. Since have sold this option at 134, the payoff would be 134 – 558 =  – 424
- The 7200 PE will also have an intrinsic value equivalent of 7200 – 6942 = 258 per lot, since we are long two lots the intrinsic value adds upto 516. We have initially paid a premium of Rs.92 (both lots included), hence this needs to be deducted to arrive at the payoff would be 516 – 92 = +424
- So on one hand we make 424 on the 7200 PE and on the other we would lose 424 on the 7500 PE resulting in no loss, no gain. Thus, 6942 marks as one of the breakeven points.

Scenario 6 – Market expires at 6800 (below the lower strike price)

Remember, the put ratio backspread is a bearish strategy. It is supposed to make money once the market goes below the lower breakeven point. So lets understand how the pay off behaves at a point lower than the lower breakeven point.

- At 6800, 7500 PE will have an intrinsic value of 700 and since we are short 7500PE at 134, we would lose 134 -700 =  – 566
- 7200 PE will have an intrinsic value of 400. Since we are long 2 lots, the intrinsic value would be 800. Premium paid for two lots is Rs.92, hence after adjusting for the premium paid, we get to make 800 – 92 = +708
- Net strategy payoff would be 708 – 566 = +142

Likewise, you can evaluate the strategy payoff at different levels of market expiry and you will realize that the profits are uncapped as long as the market continues to slide. The following table showcases the same –

Plotting the different payoff points, gives us the strategy payoff graph –

Clearly from the graph above, we can conclude –

1. If markets go down, then the profits are unlimited
1. There are two breakeven points
1. The point at which maximum loss occurs is at 7200
1. If markets goes up, then the profits are limited




### 9.3 – Strategy generalization

We can generalize the key strategy levels as below –

1. Spread = Higher Strike – lower strike 
 
 7500 – 7200 = 300
1. 7500 – 7200 = 300
1. Max loss = Spread – Net credit 
 
 300 – 42 = 258
1. 300 – 42 = 258
1. Max Loss occurs at = Lower strike price
1. Lower Breakeven point = Lower strike – Max loss 
 
 7200 – 258 = 6942
1. 7200 – 258 = 6942
1. Upper breakeven point = Lower strike + Max loss 
 
 7200 + 258 = 7458
1. 7200 + 258 = 7458




### 9.4 – Delta, strike selection, and effect of volatility

As we know, the strategy gets more profitable as and when the market falls. In other words this is a directional strategy (profitable when markets go down) and therefore the delta at overall strategy level should reflect this. Let us do the math to figure this out –

- 7500 PE is ITM option, delta is – 0.55. However since we have written the option, the delta is –(-0.55) = +0.55
- 7200 PE is OTM, has a delta of – 0.29, remember we are long two lots here
- The overall position delta would be +0.55 + (-0.29) +(-0.29) =  – 0.03

The non zero Delta value clearly indicates that the strategy is sensitive to the directional movement (although negligible). The negative sign indicates that the strategy makes money when the market goes down.

As far as the strikes are concerned, I’d suggest you stick to the classic combination of ITM and OTM options. Remember the trade needs to be executed for a ‘Net Credit’. Do not initiate this strategy if there is a net outflow of cash at the time of execution.

Let’s look at the variation in volatility and its effect on the strategy –

There are three colored lines depicting the change of “premium value” versus change in volatility. These lines help us understand the effect of increase in volatility on the strategy keeping time to expiry in perspective.

1. Blue Line  – This line suggests that an increase in volatility when there is ample time to expiry (30 days) is beneficial for the Put ratio back spread. As we can see the strategy payoff increases from -57 to +10 when the volatility increase from 15% to 30%. Clearly this means that when there is ample time to expiry, besides being right on the direction of stock/index you also need to have a view on volatility. For this reason, even though I’m bearish on the stock, I would be a bit hesitant to deploy this strategy at the start of the series if the volatility is on the higher side (say more than double of the usual volatility reading)
1. Green line  – This line suggests that an increase in volatility when there are about 15 days time to expiry is beneficial, although not as much as in the previous case. As we can see the strategy payoff increases from -77 to -47 when the volatility increase from 15% to 30%.
1. Red line  – Clearly increase in volatility when we have a few days to expiry does not have much impact on the premium value. This means, when you are close to expiry you only need to worry about the directional movement and need not really worry much about the variation in volatility.

1. The Put Ratio Back spread is best executed when your outlook on the stock/index is bearish
1. The strategy requires you to sell 1 ITM PE and buy 2 OTM PE, and this is to be executed in the same ratio i.e for every 1 option sold, 2 options have to be purchased
1. The strategy is usually executed for a ‘Net Credit’
1. The strategy makes limited money if the stock price goes up, and unlimited profit when the stock price goes down
1. There are two break even points – lower breakeven and upper breakeven
1. Spread = Higher Strike – Lower Strike
1. Net Credit = Premium Received for Higher strike – 2*Premium paid for lower strike
1. Max Loss = Spread – Net Credit
1. Max Loss occurs at = Lower Strike
1. The payoff when market goes up = Net Credit
1. Lower Breakeven = Lower Strike – Max Loss
1. Upper Breakeven = Lower Strike + Max Loss
1. Irrespective of the time to expiry opt for ITM and OTM strike combination
1. Increase in volatility is good for this strategy when there is more time to expiry

Download Put Ratio Back Spread Excel Sheet



## 8.Bear_Call_Spread

[Read more](https://zerodha.com/varsity/chapter/bear-call-spread/)



### 8.1 – Choosing Calls over Puts

Similar to the Bear Put Spread, the Bear Call Spread is a two leg option strategy invoked when the view on the market is ‘moderately bearish’. The Bear Call Spread is similar to the Bear Put Spread in terms of the payoff structure; however there are a few differences in terms of strategy execution and strike selection. The Bear Call spread involves creating a spread by employing ‘Call options’ rather than ‘Put options’ (as is the case in bear put spread).

You may have a fundamental question at this stage – when the payoffs from both Bear Put spread and Bear Call spread are similar, why should one choose a Bear Call spread over a Bear Put spread?

Well, this really depends on how attractive the premiums are. While the Bear Put spread is executed for a  debit , the Bear Call spread is executed for a  credit . So if you are at a point in the market where –

1. The markets have rallied considerably (therefore CALL premiums have swelled)
1. The volatility is favorable
1. Ample time to expiry

And you have a moderately bearish outlook going forward, then it makes sense to invoke a Bear Call Spread for a net credit as opposed to invoking a Bear Put Spread for a net debit. Personally I do prefer strategies which offer net credit rather than strategies which offer net debit.




### 8.2 – Strategy Notes

The Bear Call Spread is a two leg spread strategy traditionally involving ITM and OTM Call options. However you can create the spread using other strikes as well. Do remember, the higher the difference between the two selected strikes (spread), larger is the profit potential.

To implement the bear call spread –

1. Buy 1 OTM Call option (leg 1)
1. Sell 1 ITM Call option (leg 2)

Ensure –

1. All strikes belong to the same underlying
1. Belong to the same expiry series
1. Each leg involves the same number of options

Let us take up example to understand this better –

Date – February 2016

Outlook – Moderately bearish

Nifty Spot – 7222

Bear Call Spread, trade set up –

1. Buy 7400 CE  by paying Rs.38/- as premium; do note this is an OTM option. Since money is going out of my account this is a debit transaction
1. Sell 7100 CE  and receive Rs.136/- as premium, do note this is an ITM option. Since I receive money, this is a credit transaction
1. The net cash flow is the difference between the debit and credit i.e 136 – 38 =  +98,  since this is a positive cashflow, there is a net credit to my account.

Generally speaking in a bear call spread there is always a ‘net credit’, hence the bear call spread is also called referred to as a ‘credit spread’. After we initiate the trade, the market can move in any direction and expiry at any level. Therefore let us take up a few scenarios to get a sense of what would happen to the bear put spread for different levels of expiry.

Scenario 1 – Market expires at 7500 (above the long Call)

At 7500, both the Call options would have an intrinsic value and hence they both would expire in the money.

- 7400 CE would have an intrinsic value of 100, since we have paid a premium of Rs.38, we would be in a profit of 100 – 38 = 62
- 7100 CE would have an intrinsic value of 400, since we have sold this option at Ra.136, we would incur a loss of 400 – 136 =  -264
- Net loss would be -264 + 62 =  – 202

Scenario 2 – Market expires at 7400 (at the long call)

At 7400, the 7100 CE would have an intrinsic value and hence would expire in the money. The 7400 CE would expire worthless.

- 7400 CE would expire worthless, hence the entire premium of Rs.38 would be written of as a loss.
- 7100 CE would have an intrinsic value of 300, since we have sold this option at Ra.136, we would incur a loss of 300 – 136 =  -164
- Net loss would be -164 -38 =  – 202

Do note, the loss at 7400 is similar to the loss at 7500 pointing to the fact that above a certain point loss is capped to 202.

Scenario 3 – Market expires at 7198 (breakeven)

At 7198, the trade neither makes money or losses money, hence this is considered a breakeven point. Let us see how the numbers play out here –

- At 7198, the 7100CE would expire with an intrinsic value of 98. Since we have sold the option at Rs.136, we get to retain a portion of the premium i.e 136 – 98 =  +38
- 7400 CE would expire worthless, hence we will lose the premium paid i.e 38
- Net payoff would -38 + 38 = 0

This clearly indicates that the strategy neither makes money or losses money at 7198.

Scenario 4 – Market expires at 7100 (at the short call)

At 7100, both the Call options would expire worthless, hence it would be out of the money.

- 7400 would not have any value, hence the premium paid would be a complete loss, i.e Rs.38
- 7100 will also not have any intrinsic value, hence the entire premium received i.e Rs.136 would be retained back
- Net profit would be 136 – 38 =  98

Clearly, as and when the market falls, the strategy makes a profit.

Scenario 5 – Market expires at 7000 (below the short call)

This scenario tests the profitability of the strategy when the market falls further. At 7000, both the call options would expire worthless. While we treat the premium paid for 7400 CE i.e Rs.38 as a loss , we will retain the entire premium received for 7100 CE i.e Rs.136 as a profit. Hence the net profit from the strategy would be 136-38 =  98.  Clearly, as and when the market falls, the strategy tends to make money, but it is capped to Rs.98.

Here is the payoff for the strategy at different expiries –

These payoffs can be plotted to get the graph of the strategy payoff –

As you can observe, the payoff is similar to a bear put spread where both the profits under best case scenario and losses under worst case scenario is pre defined.




### 8.3 – Strategy Generalization

Going by the above payoff we can generalize the key trigger points for the strategy –

- Spread = Difference between the strikes
 
 7400 – 7100 = 300
- 7400 – 7100 = 300
- Net Credit =  Premium Received – Premium Paid
 
 136 – 38 = 98
- 136 – 38 = 98
- Breakeven = Lower strike + Net Credit
 
 7100 + 98 = 7198
- 7100 + 98 = 7198
- Max Profit = Net Credit
- Max Loss = Spread – Net Credit
 
 300 – 98 = 202
- 300 – 98 = 202

At this stage, we can add up the Deltas to get the overall position delta to know the strategy’s sensitivity to the directional movement.

From the BS calculator I got the Delta values as follows –

- 7400 CE is OTM option and has a delta of +0.32
- 7100 CE is ITM option and has a delta of +0.89
- Since we are short 7100 CE, the delta is –(+0.89) = -0.89
- Overall position delta is = +0.32 + (-0.89) =  -0.57

The delta of the strategy is negative, and it indicates that the strategy makes money when the underlying goes down, and makes a loss when the underlying goes up.




### 8.4 – Strike Selection and impact of Volatility

The following images help us identify the best call option strikes to choose, given the time to expiry. We have discussed the split up of time frame (1 st  and 2 nd  half of the series) several times before, hence for this reason I will just post the graphs and the summary table.

Strikes to select when we are in the 1 st  half of the series –


Expect 4% move to happen within | Higher strike | Lower strike | Refer graph on
--- | --- | --- | ---
5 days | Far OTM | ATM+2 strikes | Top left
15 days | Far OTM | ATM + 2 strikes | Top right
25 days | OTM | ATM + 1 strike | Bottom left
At expiry | OTM | ATM | Bottom right


Strikes to select when we are in the 2 nd  half of the series –


Expect 4% move to happen within | Higher strike | Lower strike | Refer graph on
--- | --- | --- | ---
5 days | Far OTM | Far OTM | Top left
15 days | Far OTM | Slightly OTM | Top right
25 days | Slightly OTM | ATM | Bottom left
At expiry | OTM | ATM/ITM | Bottom right


The following graph talks about the variation in strategy cost with respect to changes in the volatility –

The graph above explains how the premium varies with respect to variation in volatility and time.

- The blue line suggests that the cost of the strategy  does not vary much  with the increase in volatility when there is  ample time to expiry  (30 days)
- The green line suggests that the cost of the strategy  varies moderately  with the increase in volatility when there is about  15 days to expiry
- The red line suggests that the cost of the strategy  varies significantly  with the increase in volatility when there is about  5 days to expiry

From these graphs it is clear that one should not really be worried about the changes in the volatility when there is ample time to expiry. However one should have a view on volatility between midway and expiry of the series. It is advisable to take the bear call spread only when the volatility is expected to increase, alternatively if you expect the volatility to decrease, its best to avoid the strategy.

1. Bear call spread is best invoked when you are moderately bearish on the markets
1. You choose a bear call spread over a bear put spread when the call option premiums are more attractive than put options.
1. Both the profits and losses are capped
1. Classic bear call spread involves simultaneously purchasing OTM call options and selling ITM call options
1. Bear call spread usually results in a net credit, in fact this is another key reason to invoke a bear call spread versus a bear put spread
1. Net Credit = Premium Received – Premium Paid
1. Breakeven = Lower strike + Net Credit
1. Max profit = Net Credit
1. Max Loss = Spread – Net Credit
1. Select strikes based on the time to expiry
1. Implement the strategy only when you expect the volatility to increase (especially in the 2 nd  half of the series)

Download Bear Call Spread Excel Sheet



## 5.Bear_Call_Ladder

[Read more](https://zerodha.com/varsity/chapter/bear-call-ladder/)



### 5.1 – Background

The ‘Bear’ in the “Bear Call Ladder” should not deceive you to believe that this is a bearish strategy. The Bear Call Ladder is an improvisation over the Call ratio back spread; this clearly means you implement this strategy when you are out rightly bullish on the stock/index.

In a Bear Call Ladder, the cost of purchasing call options is financed by selling an ‘in the money’ call option. Further, the Bear Call Ladder is also usually setup for a ‘net credit’, where the cash flow is invariably better than the cash flow of the call ratio back spread. However, do note that both these strategies showcase similar payoff structures but differ slightly in terms of the risk structure.




### 5.2 – Strategy Notes

The Bear Call Ladder is a 3 leg option strategy, usually setup for a “net credit”, and it involves –

1. Selling 1 ITM call option
1. Buying 1 ATM call option
1. Buying 1 OTM call option

This is the classic Bear Call Ladder setup, executed in a 1:1:1 combination. The bear Call Ladder has to be executed in the 1:1:1 ratio meaning for every 1 ITM Call option sold, 1 ATM and 1 OTM Call option has to be bought. Other combination like 2:2:2 or 3:3:3 (so on and so forth) is possible.

Let’s take an example – assume Nifty Spot is at 7790 and you expect Nifty to hit 8100 by the end of expiry. This is clearly a bullish outlook on the market. To implement the Bear Call Ladder –

1. Sell 1 ITM Call option
1. Buy 1 ATM Call option
1. Buy 1 OTM Call option

Make sure –

1. The Call options belong to the same expiry
1. Belongs to the same underlying
1. The ratio is maintained

The trade set up looks like this –

1. 7600 CE, one lot short, the premium received for this is Rs.247/-
1. 7800 CE, one lot long, the premium paid for this option is Rs.117/-
1. 7900 CE, one lot long, the premium paid for this option is Rs.70/-
1. The  net credit  would be 247-117-70 =  60

With these trades, the bear call ladder is executed. Let us check what would happen to the overall cash flow of the strategies at different levels of expiry.

Do note we need to evaluate the strategy payoff at various levels of expiry as the strategy payoff is quite versatile.

Scenario 1 – Market expires at 7600 (below the lower strike price)

We know the intrinsic value of a call option (upon expiry) is –

Max [Spot – Strike, 0]

The 7600 would have an intrinsic value of

Max [7600 – 7600, 0]

= 0

Since we have sold this option, we get to retain the premium received i.e Rs.247/-

Likewise the intrinsic value of 7800 CE and 7900 CE would also be zero; hence we lose the premium paid i.e Rs.117 and Rs.70 respectively.

Net cash flow would Premium Received – Premium paid

= 247 – 117 – 70

=  60

Scenario 2 – Market expires at 7660 (lower strike + net premium received)

The 7600 CE would have an intrinsic value of –

Max [Spot – Strike, 0]

The 7600 would have an intrinsic value of

Max [7660 – 7600, 0]

= 60

Since the 7600 CE is short, we will lose 60 from 247 and retain the balance

= 247 – 60

= 187

The 7800 and 7900 CE would expire worthless, hence we lose the premium paid i.e 117 and 70 respectively.

The total strategy payoff would be –

= 187 – 117 – 70

= 0

Hence at 7660, the strategy would neither make money nor lose money. Hence this is considered a (lower) breakeven point.

Scenario 3 – Market expires at 7700 (between the breakeven point and middle strike i.e 7660 and 7800)

The intrinsic value of 7600 CE would be –

Max [Spot – Strike, 0]

= [7700 – 7600, 0]

= 100

Since, we have sold this option for 247 the net pay off from the option would be

247 – 100

= 147

On the other hand we have bought 7800 CE and 7900 CE, both of which would expire worthless, hence we lose the premium paid for these options i.e 117 and 70 respectively –

Net payoff from the strategy would be –

147 – 117 – 70

=  – 40

Scenario 4 – Market expires at 7800 (at the middle strike price)

Pay attention here, as this is where the tragedy strikes!

The 7600 CE would have an intrinsic value of 200, considering we have written this option for a premium of Rs.247, we stand to lose the intrinsic value which is Rs.200.

Hence on the 7600 CE, we lose 200 and retain –

247 – 200

= 47/-

Both 7800 CE and 7900 CE would expire worthless, hence the premium that we paid goes waste, i.e 117 and 70 respectively. Hence our total payoff would be –

47 – 117 – 70

=  -140

Scenario 5 – Market expires at 7900 (at the higher strike price)

Pay attention again, tragedy strikes again ☺

The 7600 CE would have an intrinsic value of 300, considering we have written this option for a premium of Rs.247, we stand to lose all the premium value plus more.

Hence on the 7600 CE, we lose –

247 – 300

= -53

Both 7800 CE would have an intrinsic value of 100, considering we have paid a premium of Rs.117, the pay off for this option would be –

100 – 117

= – 17

Finally 7900 CE would expire worthless, hence the premium paid i.e 70 would go waste. The final strategy payoff would be –

-53 – 17 – 70

=  -140

Do note, the loss at both 7800 and 7900 is the same.

Scenario 6 – Market expires at 8040 (sum of long strike minus short strike minus net premium)

Similar to the call ratio back spread, the bear call ladder has two breakeven points i.e the upper and lower breakeven. We evaluated the lower breakeven earlier (scenario 2), and this is the upper breakeven point. The upper breakeven is estimated as –

(7900 + 7800) – 7600 – 60

= 15700 – 7600 – 60

= 8100 – 60

= 8040

Do note, both 7900 and 7800 are strikes we are long on, and 7600 is the strike we are short on. 60 is the net credit.

So at 8040, all the call options would have an intrinsic value –

7600 CE would have an intrinsic value of 8040 – 7600 = 440, since we are short on this at 247, we stand to lose 247 – 440 =  -193.

7800 CE would have an intrinsic value of 8040 – 7800 = 240, since we are long on this at 117, we make 240 – 117 =  +123

7900 CE would have an intrinsic value of 8040 – 7900 = 140, since we are long on this at 70, we make 140 – 70 =  +70

Hence the total payoff from the Bear Call Ladder would be –

-193 + 123 + 70

=  0

Hence at 8040, the strategy would neither make money nor lose money. Hence this is considered a (upper) breakeven point.

Do note, at 7800 and 7900 the strategy was making a loss and at 8040 the strategy broke even. This should give you a sense that beyond 8040, the strategy would make money. Lets just validate this with another scenario.

Scenario 7 – Market expires at 8300

At 8300 all the call options would have an intrinsic value.

7600 CE would have an intrinsic value of 8300 – 7600 = 700, since we are short on this at 247, we stand to lose 247 – 700 =  -453.

7800 CE would have an intrinsic value of 8300 – 7800 = 500, since we are long on this at 117, we make 500 – 117 =  +383

7900 CE would have an intrinsic value of 8300 – 7900 = 400, since we are long on this at 70, we make 400 – 70 =  +330

Hence the total payoff from the Bear Call Ladder would be –

-453 + 383 + 330

=  260

As you can imagine, the higher the market move, the higher is the profit potential. Here is a table that gives you the payoffs at various levels.

Do notice, when the market goes below you stand to make a modest gain of 60 points, but when the market moves up the profits are uncapped.




### 5.3 – Strategy Generalization

Going by the above discussed scenarios we can make few generalizations –

- Spread = technically this is a ladder and not really a spread. However the 1 st  two option legs creates a classic “spread” wherein we sell ITM and buy ATM. Hence the spread could be taken as the difference between the ITM and ITM options. In this case it would be 200 (7800 – 7600)
- Net Credit = Premium Received from ITM CE – Premium paid to ATM & OTM CE
- Max Loss = Spread (difference between the ITM and ITM options) – Net Credit
- Max Loss occurs at = ATM and OTM  Strike
- The payoff when market goes down = Net Credit
- Lower Breakeven = Lower Strike + Net Credit
- Upper Breakeven = Sum of Long strike minus short strike minus net premium

Here is a graph that highlights all these important points –

Notice how the strategy makes a loss between 7660 and 8040, but ends up making a huge profit if the market moves past 8040. Even if the market goes down you still end up making a modest profit. But you are badly hit if the market does not move at all. Given this characteristics of the Bear Call Ladder, I would suggest you implement the strategy only when you are absolutely sure that the market will move, irrespective of the direction.

From my experience, I believe this strategy is best executed on stocks (rather than index) when the quarterly results are due.




### 5.4 – Effect of Greeks

The effect of Greeks on this strategy is very similar to the effect of Greeks on Call Ratio Back spread, especially the volatility bit. For your easy reference, I’m reproducing the discussion on volatility we had in the previous chapter.

There are three colored lines depicting the change of “net premium” aka the strategy payoff versus change in volatility. These lines help us understand the effect of increase in volatility on the strategy keeping time to expiry in perspective.

1. Blue Line  – This line suggests that an increase in volatility when there is ample time to expiry (30 days) is beneficial for the Bear Call Ladder spread. As we can see the strategy payoff increases from -67 to +43 when the volatility increase from 15% to 30%. Clearly this means that when there is ample time to expiry, besides being right on the direction of stock/index you also need to have a view on volatility. For this reason, even though I’m bullish on the stock, I would be a bit hesitant to deploy this strategy at the start of the series if the volatility is on the higher side (say more than double of the usual volatility reading)
1. Green line  – This line suggests that an increase in volatility when there are about 15 days time to expiry is beneficial, although not as much as in the previous case. As we can see the strategy payoff increases from -77 to -47 when the volatility increase from 15% to 30%.
1. Red line –  This is an interesting, counter intuitive outcome. When there are very few days to expiry, increase in volatility has a negative impact on the strategy! Think about it, increase in volatility when there are few days to expiry enhances the possibility of the option to expiry OTM, hence the premium decreases. So, if you are bullish on a stock / index with few days to expiry, and you also expect the volatility to increase during this period then thread cautiously.

1. Bear Call Ladder is an improvisation over the Call Ratio Spread
1. Invariably the cost of executing a bear call ladder is better than the Call Ratio Spread, but the range above which the market has to move also becomes large
1. The Bear Call Ladder is executed by selling 1 ITM CE, buying 1 ATM CE, and 1 OTM CE
1. Net Credit = Premium Received from ITM CE – Premium paid to ATM & OTM CE
1. Max Loss = Spread (difference between the ITM and ITM options) – Net Credit
1. Max Loss occurs at = ATM and OTM  Strike
1. The payoff when market goes down = Net Credit
1. Lower Breakeven = Lower Strike + Net Credit
1. Upper Breakeven = Sum of Long strike minus short strike minus net premium
1. Execute the strategy only when you are convinced that the market will move significantly higher.

Download Bear Call Ladder Excel Sheet



## 7.Bear_Put_Spread

[Read more](https://zerodha.com/varsity/chapter/bear-put-spread/)



### 7.1 – Spreads versus naked positions

Over the last five chapters we’ve discussed various multi leg bullish strategies. These strategies ranged to suit an assortment of market outlook – from an outrightly bullish market outlook to moderately bullish market outlook. Reading through the last 5 chapters you must have realised that most professional options traders prefer initiating a spread strategy versus taking on naked option positions. No doubt, spreads tend to shrink the overall profitability, but at the same time spreads give you a greater visibility on risk. Professional traders value ‘risk visibility’ more than the profits. In simple words, it’s a much better deal to take on smaller profits as long as you know what would be your maximum loss under worst case scenarios.

Another interesting aspect of spreads is that invariably there is some sort of financing involved, wherein the purchase of an option is funded by the sale of another option. In fact, financing is one of the key aspects that differentiate a spread versus a normal naked directional position. Over the next few chapters we will discuss strategies which you can deploy when your outlook ranges from moderately bearish to out rightly bearish. The composition of these strategies is similar to the bullish strategies that we discussed earlier in the module.

The first bearish strategy we will look into is the Bear Put Spread, which as you may have guessed is the equivalent of the Bull Call Spread.




### 7.2 – Strategy notes

Similar to the Bull Call Spread, the Bear Put Spread is quite easy to implement. One would implement a bear put spread when the market outlook is moderately bearish, i.e you expect the market to go down in the near term while at the same time you don’t expect it to go down much. If I were to quantify ‘moderately bearish’, a 4-5% correction would be apt. By invoking a bear put spread one would make a modest gain if the markets correct (go down) as expected but on the other hand if the markets were to go up, the trader will end up with a limited loss.

A conservative trader (read as risk averse trader) would implement Bear Put Spread strategy by simultaneously –

1. Buying an In the money Put option
1. Selling an Out of the Money Put option

There is no compulsion that the Bear Put Spread has to be created with an ITM and OTM option. The Bear Put spread can be created employing any two put options. The choice of strike depends on the aggressiveness of the trade. However do note that both the options should belong to the same expiry and same underlying. To understand the implementation better, let’s take up an example and see how the strategy behaves under different scenarios.

As of today Nifty is at 7485, this would make 7600 PE In the money and 7400 PE Out of the money. The ‘Bear Put Spread’ would require one to sell 7400 PE, the premium received from the sale would partially finance the purchase of the 7600 PE. The premium paid (PP) for the 7600 PE is Rs.165, and the premium received (PR) for the 7400 PE is Rs.73/-. The net debit for this transaction would be –

73 – 165

=  -92

To understand how the payoff of the strategy works under different expiry circumstances, we need to consider different scenarios. Please do bear in mind the payoff is upon expiry, which means to say that the trader is expected to hold these positions till expiry.

Scenario 1 – Market expires at 7800 (above long put option i.e 7600)

This is a case where the market has gone up as opposed to the expectation that it would go down. At 7800 both the put option i.e 7600 and 7400 would not have any intrinsic value, hence they would expire worthless.

- The premium paid for 7600 PE i.e Rs.165 would go to 0, hence we retain nothing
- The premium received for 7400 PE i.e Rs.73 would be retained entirely
- Hence at 7800, we would lose Rs.165 on one hand but this would be partially offset by the premium received i.e Rs.73
- The overall loss would be -165 + 73 =  -92

Do note the ‘-ve’ sign associated with 165 indicates that this is a money outflow from the account, and the ‘+ve’ sign associated with 73 indicates that the money is received into the account.

Also, the net loss of 92 is equivalent to the net debit of the strategy.

Scenario 2 – Market expired at 7600 (at long put option)

In this scenario we assume the market expires at 7600, where we have purchased a Put option. But then, at 7600 both 7600 and 7400 PE would expire worthless (similar to scenario 1) resulting in a loss of  -92.

Scenario 3 – Market expires at 7508 (breakeven)

7508 is half way through 7600 and 7400, and as you may have guessed I’ve picked 7508 specifically to showcase that the strategy neither makes money nor loses any money at this specific point.

- The 7600 PE would have an intrinsic value equivalent to Max [7600 -7508, 0], which is 92.
- Since we have paid Rs.165 as premium for the 7600 PE, some of the premium paid would be recovered. That would be 165 – 92 = 73, which means to say the net loss on 7600 PE at this stage would be Rs.73 and not Rs.165
- The 7400 PE would expire worthless, hence we get to retain the entire premium of Rs.73
- So on hand we make 73 (7400 PE) and on the other we lose 73 (7600 PE) resulting in a no loss no profit situation

Hence, 7508 would be the breakeven point for this strategy.

Scenario 4 – Market expires at 7400 (at short put option)

This is an interesting level, do recall when we initiated the position the spot was at 7485, and now the market has gone down as expected. At this point both the options would have interesting outcomes.

- The 7600 PE would have an intrinsic value equivalent to Max [7600 -7400, 0], which is 200
- We have paid a premium of Rs.165, which would be recovered from the intrinsic value of Rs.200, hence after compensating for the premium paid one would retain Rs.35/-
- The 7400 PE would expire worthless, hence the entire premium of Rs.73 would be retained
- The net profit at this level would be 35+73 = 108

The net payoff from the strategy is in line with the overall expectation from the strategy i.e the trader gets to make a modest profit when the market goes down.

Scenario 5 – Market expires at 7200 (below the short put option)

This is again an interesting level as both the options would have an intrinsic value. Lets figure out how the numbers add up –

- The 7600 PE would have an intrinsic value equivalent to Max [7600 -7200, 0], which is 400
- We have paid a premium of Rs.165, which would be recovered from the intrinsic value of Rs.400, hence after compensating for the premium paid one would retain Rs.235/-
- The 7400 PE would have an intrinsic value equivalent to Max [7400 -7200, 0], which is 200
- We received a premium of Rs.73, however we will have to let go of the premium and bear a loss over and above 73. This would be 200 -73 = 127
- On one hand we make a profit of Rs.235 and on the other we lose 127, therefore the net payoff of the strategy would be 235 – 127 = 108.

Summarizing all the scenarios (I’ve put up the payoff values directly after considering the premiums)


Market Expiry | Long Put (7600)_IV | Short Put (7400)_IV | Net payoff
--- | --- | --- | ---
7800 | 0 | 0 | -92
7600 | 0 | 0 | -92
7508 | 92 | 0 | 0
7200 | 400 | 200 | +108


Do note, the net payoff from the strategy is in line with the overall expectation from the strategy i.e the trader gets to make a modest profit when the market goes down while at the same time the losses are capped in case the market goes up.

Have a look at the table below –

The table below shows the strategy payoff at different expiry levels. The losses are capped to 92 (when markets go up) and the profits are capped to 108 (when markets go down).




### 7.3 – Strategy critical levels

From the above discussed scenarios we can generalize a few things –

1. Strategy makes a loss if the spot moves above the breakeven point, and makes a profit below the breakeven point
1. Both the profits and loss are capped
1. Spread is  difference between the two strike prices .
 
 In this example spread would be 7600 – 7400 = 200
1. In this example spread would be 7600 – 7400 = 200
1. Net Debit = Premium Paid – Premium Received
 
 165 – 73 = 92
1. 165 – 73 = 92
1. Breakeven = Higher strike – Net Debit
 
 7600 – 92 = 7508
1. 7600 – 92 = 7508
1. Max profit = Spread – Net Debit
 
 200 – 92 = 108
1. 200 – 92 = 108
1. Max Loss = Net Debit
 
 92
1. 92

You can note all these critical points in the strategy payoff diagram –




### 7.4 – Quick note on Delta

This is something I missed talking about in the earlier chapters, but its better late than never :-). Whenever you implement an options strategy always add up the deltas. I used the  B&S calculator  to calculate the deltas.

The delta of 7600 PE is -0.618

The delta of 7400 PE is – 0.342

The negative sign indicates that the put option premium will go down if the markets go up, and premium gains value if the markets go down. But do note, we have written the 7400 PE, hence the Delta would be

-(-0.342)

+ 0.342

Now, since deltas are additive in nature we can add up the deltas to give the combined delta of the position. In this case it would be –

-0.618 + (+0.342)

= – 0.276

This means the strategy has an overall delta of 0.276 and the ‘–ve’ indicates that the premiums will go up if the markets go down. Similarly you can add up the deltas of other strategies we’ve discussed earlier – Bull Call Spread, Call Ratio Back spread etc and you will realize they all have a positive delta indicating that the strategy is bullish.

When you have more than 2 option legs it gets really difficult to estimate the overall bias of the strategy (whether the strategy is bullish or bearish), in such cases you can quickly add up the deltas to know the bias. Further, if in case the deltas add to zero, then it means that the strategy is not really biased to any direction. Such strategies are called ‘Delta Neutral’. We will eventually discuss these strategies at a later point in this module.

Also, you may be interested to know that while the delta neutral strategies are immune to market’s directional move, they react to changes in volatility and time, hence these are also sometime called “Volatility based strategies”.




### 7.5 – Strike selection and effect of volatility

The strike selection for a bear put spread is very similar to the strike selection methodology of a bull call spread. I hope you are familiar with the ‘1 st  half of the series’ and ‘2 nd  half of the series’ methodology. If not I’d suggest you to kindly read through  section 2.3 .

Have a look at the graph below –

If we are in the first half of the series (ample time to expiry) and we expect the market to go down by about 4% from present levels, choose the following strikes to create the spread


Expect 4% move to happen within | Higher strike | Lower strike | Refer graph on
--- | --- | --- | ---
5 days | Far OTM | Far OTM | Top left
15 days | ATM | Slightly OTM | Top right
25 days | ATM | OTM | Bottom left
At expiry | ATM | OTM | Bottom right


Now assuming we are in the 2 nd  half of the series, selecting the following strikes to create the spread would make sense –


Expect 4% move to happen within | Higher strike | Lower strike | Refer graph on
--- | --- | --- | ---
Same day (even specific) | OTM | OTM | Top left
5 days | ITM/OTM | OTM | Top right
10 days | ITM/OTM | OTM | Bottom left
At expiry | ITM/OTM | OTM | Bottom right


I hope you will find the above two tables useful while selecting the strikes for the bear put spread.

We will now shift our focus on the effect of volatility on the bear put spread. Have a look at the following image –

The graph above explains how the premium varies with respect to variation in volatility and time.

- The blue line suggests that the cost of the strategy  does not vary much  with the increase in volatility when there is  ample time to expiry  (30 days)
- The green line suggests that the cost of the strategy  varies moderately  with the increase in volatility when there is about  15 days to expiry
- The red line suggests that the cost of the strategy  varies significantly  with the increase in volatility when there is about  5 days to expiry

From these graphs it is clear that one should not really be worried about the changes in the volatility when there is ample time to expiry. However one should have a view on volatility between midway and expiry of the series. It is advisable to take the bear put spread only when the volatility is expected to increase, alternatively if you expect the volatility to decrease, its best to avoid the strategy.

1. Spread offers visibility on risk but at the same time shrinks the reward
1. When you create a spread, the proceeds from the sale of an option offsets the purchase of an option
1. Bear put spread is best invoked when you are moderately bearish on the markets
1. Both the profits and losses are capped
1. Classic bear put spread involves simultaneously purchasing ITM put options and selling OTM put options
1. Bear put spread usually results in a net debit
1. Net Debit = Premium Paid – Premium Received
1. Breakeven = Higher strike – Net Debit
1. Max profit = Spread – Net Debit
1. Max Loss = Net Debit
1. Select strikes based on the time to expiry
1. Implement the strategy only when you expect the volatility to increase (especially in the 2 nd  half of the series)

Download Bear Put Spread Excel Sheet



## 6.Synthetic_Long_&_Arbitrage

[Read more](https://zerodha.com/varsity/chapter/synthetic-long-arbitrage/)



### 6.1 – Background

Imagine a situation where you would be required to simultaneously establish a long and short position on Nifty Futures, expiring in the same series. How would you do this and more importantly why would you do this?

We will address both these questions in this chapter. To begin with let us understand how this can be done and later move ahead to understand why one would want to do this (if you are curious, arbitrage is the obvious answer).

Options as you may have realized by now, are highly versatile derivative instruments; you can use these instruments to create any kind of payoff structure including that of the futures (both long and short futures payoff).

In this chapter we will understand how we can artificially replicate a long futures pay off using options. However before we proceed, you may want to just review the long Future’s ‘linear’ payoff  here

Alternatively, here is a quick overview –

As you can see, the long futures position has been initiated at 2360, and at that point you neither make money nor lose money, hence the point at which you initiate the position becomes the breakeven point. You make a profit as the futures move higher than the breakeven point and you make a loss the lower the futures move below the breakeven point. The amount of profit you make for a 10 point up move is exactly the same as the amount of loss you’d make for a 10 point down move. Because of this linearity in payoff, the future is also called a linear instrument.

The idea with a Synthetic Long is to build a similar long Future’s payoff using options.




### 6.2 – Strategy Notes

Executing a Synthetic Long is fairly simple; all that one has to do is –

1. Buy the ATM Call Option
1. Sell the ATM Put Option

When you do this, you need to make sure –

1. The options belong to the same underlying
1. Belongs to the same expiry

Let us take an example to understand this better. Assume Nifty is at 7389, which would make 7400 the ATM strike. Synthetic Long would require us to go long on 7400 CE, the premium for this is Rs.107 and we would short the 7400 PE at 80.

The net cash outflow would be the difference between the two premiums i.e 107 – 80 =  27.

Let us consider a few market expiry scenarios –

Scenario 1 – Market expires at 7200 (below ATM)

At 7200, the 7400 CE would expire worthless, hence we would lose the premium paid i.e Rs.107/-. However the 7400 PE would have an intrinsic value, which can be calculated as follows –

Intrinsic value of Put Option = Max [Strike-Spot, 0]

= Max [7400 – 7200, 0]

=Max [200, 0]

= 200.

Clearly, since we are short on this option, we would lose money from the premium we have received. The loss would be –

80 – 200 = -120

Total payoff from the long Call and short Put position would be –

= -107 – 120

=  -227

Scenario 2 – Market expires at 7400 (At ATM)

If the market expires exactly at 7400, both the options would expire worthless and hence –

1. We lose the premium paid for the 7400 CE option i.e 107
1. We get the retain the premium for the 7400 PE option i.e 80
1. Net payoff from both the positions would be  -27 e 80 – 107

Do note, 27 also happens to be the net cash outflow of the strategy, which is also the difference between the two premiums

Scenario 3 – Market expires at 7427 (ATM + Difference between the two premiums)

7427 is an interesting level, this is the breakeven point for the strategy, where we neither make money nor lose money.

1. 7400 CE – the option is ITM and has an intrinsic value of 27. However we have paid 107 as premium hence we experience a total loss of 80
1. 7400 PE – the option would expire OTM, hence we get to retain the entire premium of 80.
1. On one hand we make 80 and the other we lose 80. Hence we neither make nor lose any money, making 7427 the  breakeven point  for this strategy.

Scenario 4 – Market expires at 7600 (above ATM)

At 7600, the 7400 CE would have an intrinsic value of 200, we would make –

Intrinsic value – Premium

= 200 – 107

= 93

The 7400 PE would expire worthless; hence we get to retain the entire premium of Rs.80.

Total payoff from the strategy would be –

= 93 + 80

= 173

With the above 4 scenarios, we can conclude that the strategy makes money while the market moves higher and loses money while the market goes lower, similar to futures. However this still does not necessarily mean that the payoff is similar to that of futures. To establish that the synthetic long payoff behaves similar to futures, we need evaluate the payoff of the strategy with reference to the breakeven point; let’s say 200 point above and below the breakeven point. If the payoff is identical, then clearly there is linearity in the payoff, similar to futures.

So let’s figure this out.

We know the breakeven point for this is –

ATM + difference between the premiums

= 7400 + 27

=  7427

The payoff around this point should be symmetric. We will consider  7427 + 200 = 7627  and  7427-200 = 7227  for this.

At 7627 –

1. The 7400 CE would have an intrinsic value of 227, hence we get to make 227 – 107 = 120
1. The 7400 PE would expire worthless, hence we get to keep the entire premium of 80
1. In all we experience a payoff of 120 + 80 =  200

At 7227 –

1. The 7400 CE would not have any intrinsic value, hence we lose the entire premium paid i.e 107
1. The 7400 PE would have an intrinsic value of 7400 – 7227 = 173, since we have received 80 as premium the net loss would be 80 – 173 = -93.
1. In all we experience a payoff of -93-107 =  -200

Clearly, there is payoff symmetry around the breakeven, and for this reason, the  Synthetic Long mimics the payoff of the long futures instrument.

Further, here is the payoff at various expiry levels –

And when you plot the Net Payoff, we get the payoff structure which is similar to the long call futures.

Having figured out how to set up a Synthetic long, we need to figure out the typical circumstances under which setting up a synthetic long is required.




### 6.3 – The Fish market Arbitrage

I’ll assume that you have a basic understanding on Arbitrage. In easy words, arbitrage is an opportunity to buy goods/asset in a cheaper market and sell the same in expensive markets and pocket the difference in prices. If executed well, arbitrage trades are almost risk free. Let me attempt to give you a simple example of an arbitrage opportunity.

Assume you live by a coastal city with abundant supply of fresh sea fish, hence the rate at which fish is sold in your city is very low, let’s say Rs.100 per Kg. The neighboring city which is 125 kms away has a huge demand for the same fresh sea fish. However, in this neighboring city the same fish is sold at Rs.150 per Kg.

Given this if you can manage to buy the fish from your city at Rs.100 and manage to sell the same in the neighboring city at Rs.150, then in process you clearly get to pocket the price differential i.e Rs.50. Maybe you will have to account for transportation and other logistics, and instead of Rs.50, you get to keep Rs.30/- per Kg. This is still a beautiful deal and this is a typical arbitrage in the fish market!

It looks perfect, think about it – if you can do this everyday i.e buy fish from your city at Rs.100 and sell in the neighboring city at Rs.150, adjust Rs.20 towards expenses then Rs.30 per KG is guaranteed risk free profit.

This is indeed risk free, provides nothing changes. But if things change, so will your profitability, let me list few things that could change –

1. No Fish (opportunity risk)  – Assume one day you go to the market to buy fish at Rs.100, and you realize there is no fish in the market. Then you have no opportunity to make Rs.30/-.
1. No Buyers (liquidity risk)  – You buy the fish at Rs.100 and go to the neighboring town to sell the same at Rs.150, but you realize that there are no buyers. You are left holding a bag full of dead fish, literally worthless!
1. Bad bargaining (execution risk)  – The entire arbitrage opportunity hinges upon the fact that you can ‘always’ bargain to buy at Rs.100 and sell at Rs.150. What if on a bad day you happen to buy at 110 and sell at 140? You still have to pay 20 for transport, this means instead of the regular 30 Rupees profit you get to make only 10 Rupees, and if this continues, then the arbitrage opportunity would become less attractive and you may not want to do this at all.
1. Transport becomes expensive (cost of transaction) –  This is another crucial factor for the profitability of the arbitrage trade. Imagine if the cost of transportation increases from Rs.20 to Rs.30? Clearly the arbitrage opportunity starts looking less attractive as the cost of execution goes higher and higher. Cost of transaction is a critical factor that makes or breaks an arbitrage opportunity
1. Competition   kicks in   (who can drop lower?)  – Given that the world is inherently competitive you are likely to attract some competition who would also like to make that risk free Rs.30. Now imagine this –
 
 So far you are the only one doing this trade i.e buy fish at Rs.100 and sell at Rs.150 
 Your friend notices you are making a risk free profit, and he now wants to copy you. You can’t really prevent his as this is a free market. 
 Both of you buy at Rs.100, transport it at Rs.20, and attempt to sell it in the neighboring town 
 A potential buyer walks in, sees there is a new seller, selling the same quality of fish. Who between the two of you is likely to sell the fish to the buyer? 
 Clearly given the fish is of the same quality the buyer will buy it from the one selling the fish at a cheaper rate. Assume you want to acquire the client, and therefore drop the price to Rs.145/- 
 Next day your friend also drops the price, and offers to sell fish at Rs.140 per KG, and therefore igniting a price war. In the whole process the price keeps dropping and the arbitrage opportunity just evaporates. 
 How low can the price drop? Obviously it can drop to Rs.120 (cost of buying fish plus transport). Beyond 120, it does not makes sense to run the business 
 Eventually in a perfectly competitive world, competition kicks in and arbitrage opportunity just ceases to exist. In this case, the cost of fish in neighboring town would drop to Rs.120 or a price point in that vicinity.
1. So far you are the only one doing this trade i.e buy fish at Rs.100 and sell at Rs.150
1. Your friend notices you are making a risk free profit, and he now wants to copy you. You can’t really prevent his as this is a free market.
1. Both of you buy at Rs.100, transport it at Rs.20, and attempt to sell it in the neighboring town
1. A potential buyer walks in, sees there is a new seller, selling the same quality of fish. Who between the two of you is likely to sell the fish to the buyer?
1. Clearly given the fish is of the same quality the buyer will buy it from the one selling the fish at a cheaper rate. Assume you want to acquire the client, and therefore drop the price to Rs.145/-
1. Next day your friend also drops the price, and offers to sell fish at Rs.140 per KG, and therefore igniting a price war. In the whole process the price keeps dropping and the arbitrage opportunity just evaporates.
1. How low can the price drop? Obviously it can drop to Rs.120 (cost of buying fish plus transport). Beyond 120, it does not makes sense to run the business
1. Eventually in a perfectly competitive world, competition kicks in and arbitrage opportunity just ceases to exist. In this case, the cost of fish in neighboring town would drop to Rs.120 or a price point in that vicinity.

I hope the above discussion gave you a quick overview on arbitrage. In fact we can define any arbitrage opportunity in terms of a simple mathematical expression, for example with respect to the fish example, here is the mathematical equation –

[Cost of selling fish in town B – Cost of buying fish in town A] = 20

If there is an imbalance in the above equation, then we essentially have an arbitrage opportunity. In all types of markets – fish market, agri market, currency market, and stock market such arbitrage opportunities exist and they are all governed by simple arithmetic equations.




### 6.4 – The Options arbitrage

Arbitrage opportunities exist in almost every market, one needs to be a keen observer of the market to spot it and profit from it. Typically stock market based arbitrage opportunities allow you to lock in a certain profit (small but guaranteed) and carry this profit irrespective of which direction the market moves. For this reason arbitrage trades are quite a favorite with risk intolerant traders.

I would like to discuss a simple arbitrage case here, the roots of which lie in the concept of  ‘Put Call Parity’ . I will skip discussing the Put Call Parity theory but would instead jump to illustrate one of its applications.

However I’d suggest you watch this beautiful video from Khan Academy to understand the Put Call Parity –

So based on Put Call Parity, here is an arbitrage equation –

Long Synthetic long + Short Futures = 0

You can elaborate this to –

Long ATM Call + Short ATM Put + Short Futures = 0

The equation states that the P&L upon expiry by virtue of holding a long synthetic long and short future should be zero. Why should this position result in a zero P&L, well the answer to this is attributable to the Put Call Parity.

However, if the P&L is a non zero value, then we have an arbitrage opportunity.

Here is an example that will help you understand this well.

On 21 st  Jan, Nifty spot was at 7304, and the Nifty Futures was trading at 7316.

The 7300 CE and PE (ATM options) were trading at 79.5 and 73.85 respectively. Do note, all the contracts belong to the January 2016 series.

Going by the arbitrage equation stated above, if one were to execute the trade, the positions would be –

1. Long 7300 CE @ 79.5
1. Short 7300 PE @ 73.85
1. Short Nifty futures @ 7316

Do note, the first two positions together form a long synthetic long. Now as per the arbitrage equation, upon expiry the positions should result in a zero P&L.  Let’s evaluate if this holds true.

Scenario 1 – Expiry at 7200

- The 7300 CE would expire worthless, hence we lose the premium paid i.e  79.5
- The 7300 PE would have an intrinsic value of 100, but since we are short at 73.85, the net payoff would be 73.85 – 100 =  -26.15
- We are short on futures at 7316, which would result in a profit of 116 points (7316 – 7200)
- Net payoff would be -79.5 – 26.15 + 116 =  +10.35

Clearly, instead of a 0 payoff, we are experiencing a positive non zero P&L.

Scenario 2 – Expiry at 7300

- The 7300 CE would expire worthless, hence we lose the premium paid i.e  79.5
- The 7300 PE would expire worthless, hence we get to retain 73.85
- We are short on futures at 7316, which would result in a profit of 16 points (7316 – 7300)
- Net payoff would be -79.5 +73.85+16 =  +10.35

Scenario 3 – Expiry at 7400

- The 7300 CE would have an intrinsic value of 100, and therefore the payoff would be 100 – 79.5 = 20.5
- The 7300 PE would expire worthless, hence we get to retain 73.85
- We are short on futures at 7316, which would result in loss of 84 points (7316 – 7400)
- Net payoff would be 20.5 + 73.85 – 84 =  +10.35

You could test this across any expiry value (in other words the markets can move in any direction) but you are likely to pocket 10.35 points,  upon expiry.  I’d like to stress this again; this arbitrage lets you make 10.35, upon expiry.

Here is the payoff structure at different expiry values –

Interesting isn’t it? But what’s the catch you may ask?

Transaction charges!

One has to account for the cost of execution of this trade and figure out if it still makes sense to take up the trade. Consider this –

- Brokerage  – if you are trading with a traditional broker, then you will be charged on a percentage basis which will eat away your profits. So on one hand you make 10 points, but you may end up paying 8 – 10 points as brokerage. However if you were to do this trade with a discount broker like Zerodha, your breakeven on this trade would be around 4-5 points. This should give you more reason to open your account with Zerodha ☺

- STT  – Do remember the P&L is realised upon expiry; hence you would have to carry forward your positions to expiry. If you are long on an ITM option (which you will be) then upon expiry you will have to pay a hefty STT, which will further eat away your profits. Please do  read this  to know more.
- Other applicable taxes –  Besides you also have to account for service tax, stamp duty etc

So considering these costs, the efforts to carry an arbitrage trade for 10 points may not make sense. But it certainly would, if the payoff was something better, maybe like 15 or 20 points. With 15 or 20 points you can even maneuver the STT trap by squaring off the positions just before expiry – although it will shave off a few points.

1. You can use options to replicate futures payoff
1. A synthetic long replicates the long futures payoff
1. Simultaneously buying ATM call and selling ATM Put creates a synthetic long
1. The breakeven point for the synthetic long is the  ATM strike + net premium paid
1. An arbitrage opportunity is created when Synthetic long + short futures yields a positive non zero P&L upon expiry
1. Execute the arbitrage trade only if the P&L upon expiry makes sense after accounting for expenses.

Download Synthetic Long & Arbitrage Excel Sheet



## 3.Bull_Put_Spread

[Read more](https://zerodha.com/varsity/chapter/bull-put-spread/)



### 3.1 – Why Bull Put Spread?

Similar to the Bull Call Spread, the Bull Put Spread is a two leg option strategy invoked when the view on the market is ‘moderately bullish’. The Bull Put Spread is similar to the Bull Call Spread in terms of the payoff structure; however there are a few differences in terms of strategy execution and strike selection. The bull put spread involves creating a spread by employing ‘Put options’ rather than ‘Call options’ (as is the case in bull call spread).

You may have a fundamental question at this stage – when the payoffs from both Bull call spread and Bull Put spread are similar, why should one choose a certain strategy over the other?

Well, this really depends on how attractive the premiums are. While the Bull Call spread is executed for a  debit , the bull put spread is executed for a  credit . So if you are at a point in the market where –

1. The markets have declined considerably (therefore PUT premiums have swelled)
1. The volatility is on the higher side
1. There is plenty of time to expiry

And you have a moderately bullish outlook looking ahead, then it makes sense to invoke a Bull Put Spread for a net credit as opposed to invoking a Bull Call Spread for a net debit. Personally I do prefer strategies which offer net credit rather than strategies which offer net debit.




### 3.2 – Strategy Notes

The bull put spread is a two leg spread strategy traditionally involving ITM and OTM Put options. However you can create the spread using other strikes as well.

To implement the bull put spread –

1. Buy 1 OTM Put option (leg 1)
1. Sell 1 ITM Put option (leg 2)

When you do this ensure –

1. All strikes belong to the same underlying
1. Belong to the same expiry series
1. Each leg involves the same number of options

For example –

Date – 7 th  December 2015

Outlook – Moderately bullish (expect the market to go higher)

Nifty Spot – 7805

Bull Put Spread, trade set up –

1. Buy 7700 PE  by paying Rs.72/- as premium; do note this is an OTM option. Since money is going out of my account this is a debit transaction
1. Sell 7900 PE  and receive Rs.163/- as premium, do note this is an ITM option. Since I receive money, this is a credit transaction
1. The net cash flow is the difference between the debit and credit i.e 163 – 72 =  +91,  since this is a positive cashflow, there is a net credit to my account.

Generally speaking in a bull put spread there is always a ‘net credit’, hence the bull put spread is also called referred to as a ‘Credit spread’.

After we initiate the trade, the market can move in any direction and expiry at any level. Therefore let us take up a few scenarios to get a sense of what would happen to the bull put spread for different levels of expiry.

Scenario 1 – Market expires at 7600 (below the lower strike price i.e OTM option)

The value of the Put options at expiry depends upon its intrinsic value. If you recall from the previous module, the intrinsic value of a put option upon expiry is –

Max [Strike-Spot, o]

In case of 7700 PE, the intrinsic value would be –

Max [7700 – 7600 – 0]

= Max [100, 0]

= 100

Since we are long on the 7700 PE by paying a premium of Rs.72, we would make

= Intrinsic Value – Premium Paid

= 100 – 72

= 28

Likewise, in case of the 7900 PE option it has an intrinsic value of 300, but since we have sold/written this option at Rs.163

Payoff from 7900 PE this would be –

163 – 300

= –  137

Overall strategy payoff would be –

+ 28 – 137

=  – 109

Scenario 2 – Market expires at 7700 (at the lower strike price i.e the OTM option)

The 7700 PE will not have any intrinsic value, hence we will lose all the premium that we have paid i.e Rs.72.

The 7900 PE’s intrinsic value will be Rs.200.

Net Payoff from the strategy would be –

Premium received from selling 7900PE – Intrinsic value of  7900 PE – Premium lost on 7700 PE

= 163 – 200 – 72

=  – 109

Scenario 3 – Market expires at 7900 (at the higher strike price, i.e ITM option)

The intrinsic value of both 7700 PE and 7900 PE would be 0, hence both the potions would expire worthless.

Net Payoff from the strategy would be –

Premium received for 7900 PE – Premium Paid for 7700 PE

= 163 – 72

=  + 91

Scenario 4 – Market expires at 8000 (above the higher strike price, i.e the ITM option)

Both the options i.e 7700 PE and 7900 PE would expire worthless, hence the total strategy payoff would be

Premium received for 7900 PE – Premium Paid for 7700 PE

= 163 – 72

=  + 91

To summarize –


Market Expiry | 7700 PE (intrinsic value) | 7900 PE (intrinsic value) | Net pay off
--- | --- | --- | ---
7600 | 100 | 300 | -109
7700 | 0 | 200 | -109
7900 | 0 | 0 | 91
8000 | 0 | 0 | 91


From this analysis, 3 things should be clear to you –

1. The strategy is profitable as and when the market moves higher
1. Irrespective of the down move in the market, the loss is restricted to Rs.109, the maximum loss also happens to be the difference between “ Spread and net credit ’ of the strategy
1. The maximum profit is capped to 91. This also happens to be the  net credit  of the strategy.

We can define the ‘ Spread ’ as –

Spread = Difference between the higher and lower strike price

We can calculate the overall profitability of the strategy for any given expiry value. Here is screenshot of the calculations that I made on the excel sheet –

- LS – IV — Lower Strike – Intrinsic value (7700 PE, OTM)
- PP — Premium Paid
- LS Payoff — Lower Strike Payoff
- HS-IV — Higher strike – Intrinsic Value (7900 PE, ITM)
- PR — Premium Received
- HS Payoff — Higher Strike Payoff

As you can notice, the loss is restricted to Rs.109, and the profit is capped to Rs.91. Given this, we can generalize the Bull Put Spread to identify the Max loss and Max profit levels as –

Bull PUT Spread Max loss = Spread – Net Credit

Net Credit = Premium Received for higher strike – Premium Paid for lower strike

Bull Put Spread Max Profit = Net Credit

This is how the pay off diagram of the Bull Put Spread looks like –

There are three important points to note from the payoff diagram –

1. The strategy makes a loss if Nifty expires below 7700. However, the loss is restricted to Rs.109.
1. The breakeven point (where the strategy neither makes a profit or loss) is achieved when the market expires at 7809. Therefore we can generalize the breakeven point for a Bull Put spread as  Higher Strike – Net Credit
1. The strategy makes money if the market moves above 7809, however the maximum profit achievable is Rs.91 i.e the difference between the Premium Received for ITM PE and the Premium Paid for the OTM PE
 
 Premium Paid for 7700 PE = 72 
 Premium Received for 7900 PE = 163 
 Net Credit = 163 – 72 = 91
1. Premium Paid for 7700 PE = 72
1. Premium Received for 7900 PE = 163
1. Net Credit = 163 – 72 = 91




### 3.3 – Other Strike combinations

Remember the  spread  is defined as the difference between the two strike prices. The Bull Put Spread is always created with 1 OTM Put and 1 ITM Put option, however, the strikes that you choose can be any OTM and any ITM strike. The further these strikes are the larger the spread, the larger the spread the larger is the possible reward.

Let us take some examples considering spot is at 7612 –

Bull Put spread with 7500 PE (OTM) and 7700 PE (ITM)


Lower Strike (OTM, Long) | 7500
--- | ---
Higher Strike (ITM, short) | 7700
Spread | 7700 – 7500 =
Lower Strike Premium Paid | 62
Higher Strike Premium Received | 137
Net Credit | 137 – 62 =
Max Loss (Spread – Net Credit) | 200 – 75 =
Max Profit (Net Credit) | 75
Breakeven (Higher Strike – Net Credit) | 7700 – 75 =


Bull Put spread with 7400 PE (OTM) and 7800 PE (ITM)


Lower Strike (OTM, Long) | 7400
--- | ---
Higher Strike (ITM, short) | 7800
Spread | 7800 – 7400 =
Lower Strike Premium Paid | 40
Higher Strike Premium Received | 198
Net Credit | 198 – 40 =
Max Loss (Spread – Net Credit) | 400 – 158 = 242
Max Profit (Net Credit) | 158
Breakeven (Higher Strike – Net Credit) | 7800 – 158 =


Bull Put spread with 7500 PE (OTM) and 7800 PE (ITM)


Lower Strike (OTM, Long) | 7500
--- | ---
Higher Strike (ITM, short) | 7800
Spread | 7800 – 7500 =
Lower Strike Premium Paid | 62
Higher Strike Premium Received | 198
Net Credit | 198 – 62 =
Max Loss (Spread – Net Credit) | 300 – 136 = 164
Max Profit (Net Credit) | 136
Breakeven (Higher Strike – Net Credit) | 7800 – 136 =


So the point here is that, you can create the spread with any combination of OTM and ITM option. However based on the strikes that you choose (and therefore the spread you create), the risk reward ratio changes. In general, if you have a high conviction on a ‘moderately bullish’ view then go ahead and create a larger spread; else stick to a smaller spread.

1. The Bull Put Spread is an alternative to the Bull Call Spread. Its best executed when the outlook on the market is ‘moderately bullish’
1. Bull Put Spread results in a net credit
1. The Bull Put Spread is best executed when the market has cracked, put premiums are high, the volatility is on the higher side, and you expect the market to hold up (without cracking further)
1. The Bull Put strategy involves simultaneously buying an OTM Put option and selling an ITM Put option
1. Maximum profit is limited to the extent of the net credit
1. Maximum loss is limited to the Spread minus Net credit
1. Breakeven is calculated as Higher Strike – Net Credit
1. One can create the spread by employing any OTM and ITM strikes
1. Higher the spread, higher the profit potential, and higher the breakeven point.

Download Bull Put Spread Excel Sheet



## 1.Orientation

[Read more](https://zerodha.com/varsity/chapter/orientation/)



### 1.1 – Setting the context

Before we start this module on Option Strategy, I would like to share with you a Behavioral Finance article I read couple of years ago. The article was titled “Why winning is addictive”.

Here is the article, authored by B.Venkatesh (a regular columnist for HBL) –

“ To buy and bet on a lottery ticket – a game that you typically avoid because you understand the odds of winning the jackpot is really low. However, if you do win the ticket, you will be most likely tempted to buy a lottery ticket regularly thereafter!

We exhibit similar behavior when it comes to our investments as well. What drives such behavior? As humans, our life is governed by anticipation. So, looking forward to winning a lottery is exciting and so is realizing that expectation.

Research in neuroscience has however shown that anticipating a win is more exciting than actual winning! Nevertheless, once you experience the excitement of winning a lottery you feel the need to indulge. That is, your brain compels you to buy a lottery ticket, even though you are aware of the odds of winning the second one.

This happens because we tend to use more of reflexive brain than reflective brain. The reflective brain performs calculation that helps you analyze and think. The reflexive brain helps you feel and is more intuitive. When you feel an urge to buy a lottery ticket, it is your reflexive brain that is pushing you to do so. Your reflective brain is likely to tell you that the odds of winning the jackpot for the second time are low!

Now consider trading in equity options. You know that buying calls and puts has its risk, as options often expire worthless. Yet we may choose to buy them regularly, especially if we have already experienced large gains from such investments, for it is the reflexive brain in action. With trading options there is another factor at play. We know that options carry the risk of losing capital when our view on the underlying stock or the index turns wrong.

The fact that we can lose money makes our experience of winning against such odds even more exciting! This is not so much true of lottery because a lottery is a game of chance while investments, we believe, require some degree of skill ”

–End of article–

You maybe be wondering, why I chose to post the above article right at the beginning of this module. Well, this article echoes some of my own thoughts; in fact it goes a step further to put things in the behavioral finance context. From the many interactions that I’ve have had with both experienced and aspiring options traders, one point is quite common – most options traders  treat options trading as a ‘hit or miss” kind of a trade. There is always a sense of amusement when one initiates an option trade, many don’t realize how fatal this naïve amusement can be.

Traders buy options (month after month) with a hope they would double their investment. Trading options with such a mindset is a perfect recipe for a P&L disaster. The bottom line is this – if you aspire to trade options, you need to do it the right way and follow the right approach. Else you can be rest assured the gambling attitude will eventually consume your entire trading capital and you will end up having a short, self destructive option trading career.

I do have to mention this now – the common phrase that goes like this (w.r.t options) “limited risk, unlimited profit potential” is a silent P&L killer. Newbie traders are disillusioned by this ‘theoretically correct’ but practically disastrous fact and thereby end up blowing up their books, slowly and steadily. Hence I do believe that trading options blindly without a strategy is a “dangerous but irresistible pass time”  ☺ (courtesy – Pink Floyd).

I don’t intend to scare you with this note; I’m only trying to set the context here. With the previous module on Options Theory, I’m sure you would have realized that unlike other topics in the markets, the science involved in Options is heavy duty. It can be quite overwhelming, but you will have to trust me here – the only way to understand and master options trading is by structuring your learning path with a good judicious mix of theory and practice.

In this module, I will attempt to give you a good overview of what you really need to know about some of the popular options strategies. Like always, I will try and stick to the practical aspect and ignore the unwanted (and confusing) theory part.

As far as I’m aware, there are close to 475 options strategies out there in the public domain and I’m sure at least another 100 odd strategies are hidden in the proprietary books of brokers, bankers, and traders. Given this should you know all these strategies put up in the public domain?

Answer is a simple no.




### 1.2 – What should you know?

You only need to know a handful of strategies but you need to know them really well. Once you know these strategies all you need to do is analyze the current state of markets (or the stock) and map it with the right option strategy from your strategy quiver.

Keeping this in perspective we will discuss certain strategies.

Besides discussing the above strategies I also intend to discuss –

1. Max Pain for option writing – (some key observations and practical aspects)
1. Volatility Arbitrage employing Dynamic Delta hedging

The plan is to discuss one option strategy per chapter so that there is ample clarity about the strategy, without any mix up or confusion. This means to say we will have roughly about 20 chapters in this module, although I suppose each chapter would not be too lengthy. For each of the strategy I will discuss the background, implementation, payoff, breakeven, and perhaps the right strikes to use considering the time to expiry. I also intend to share a working excel model which would come handy if you intent to employ the strategy.

Do note, while I will discuss all these strategies keeping the Nifty Index as reference, you can use the same for any stock options.

Now here is the most important thing I want you to be aware of – do not expect a holy grail in this module. None of the strategies that we discuss here in the module is sure shot money making machine; in fact nothing is in the markets. The objective here in this module is to ensure that we discuss few basic but important strategies, if you deploy them right you can make money.

Think about this way – if you have a nice car and drive it properly, you can use it to commute and ensure comfort of yourself and your family. However if you are rash with the car, then it can be dangerous to you and everyone else around you.

Likewise these strategies make money if you use it right; if you don’t then they can create a hole in your P&L. My job here is to help you understand these strategies (help you learn how to drive the car) and I will also attempt to explain the best condition under which you can use these strategies. But making sure it works for you is in your control, this really depends on your discipline and reading of markets. Having said this, I’m reasonably certain your application of strategies will improve as and when you spend more ‘quality’ time in the markets.

So starting from the next chapter we focus on the Bullish strategies with the ‘Bull Call Spread’ making its debut.

Stay tuned.



## 11.The_Short_Straddle

[Read more](https://zerodha.com/varsity/chapter/the-short-straddle/)



### 11.1 – Context

In the previous chapter we understood that for the long straddle to be profitable, we need a set of things to work in our favor, reposting the same for your quick reference –

1. The volatility should be relatively low at the time of strategy execution
1. The volatility should increase during the holding period of the strategy
1. The market should make a large move – the direction of the move does not matter
1. The expected large move is time bound, should happen quickly – well within the expiry
1. Long straddles are to be setup around major events, and the outcome of these events to be drastically different from the general market expectation.

Agreed that the directional movement of the market does not matter in the long straddle, but the bargain here is quite hard. Considering the 5 points list, getting the long straddle to work in you favor is quite a challenge.  Do recall, in the previous chapter the breakdown was at 2%, add to this another 1% as desired profits and we are essentially looking for, at least a 3% move on the index. From my experience expecting the market to make such moves regularly is quite a challenge. In fact for this reason alone, I think twice each and every time I need to initiate a long straddle.

I have witnessed many traders recklessly set up long straddles thinking they are insulated to the market’s directional movement. But in reality they end up losing money in a long straddle – time delay and the general movement in the market (or the lack of it) works against them. Please note, I’m not trying to discourage you from employing the long straddle, no one denies the simplicity and elegance of a long straddle. It works extremely well when all the 5 points above are aligned. My only issue with long straddle is the probability of these 5 points aligning with each other.

Now think about this – there are quite a few factors which prevents the long straddle to be profitable. So as an extension of this – the same set of factors  ‘should’  favor the opposite of a long straddle, i.e the ‘Short Straddle’.




### 11.2 – The Short Straddle

Although many traders fear the short straddle (as losses are uncapped), I personally prefer trading the short straddle on certain occasions over its peer strategies. Anyway let us quickly understand the set up of a short straddle, and how its P&L behaves across various scenarios.

Setting up a short straddle is quite straight forward – as opposed to buying the ATM Call and Put options (like in long straddle) you just have to sell the ATM Call and Put option. Obviously the short strategy is set up for a net credit, as when you sell the ATM options, you receive the premium in your account.

Here is an example, consider Nifty is at 7589, so this would make the 7600 strike ATM. The option premiums are as follows –

- 7600 CE is trading at 77
- 7600 PE is trading at 88

So the short straddle will require us to sell both these options and collect the net premium of 77 + 88 = 165.

Please do note – the options should belong to the same underlying, same expiry, and of course same strike. So assuming you have executed this short straddle, let’s figure out the P&L at various market expiry scenarios.

Scenario 1 – Market expires at 7200 (we lose money on put option)

This is a scenario where the loss in the put option is so large that it eats away the premium collected by both the CE and PE, resulting in an overall loss. At 7200 –

- 7600 CE will expire worthless, hence we get the retain the premium received i.e  77
- 7600 PE will have an intrinsic value of 400. After adjusting for the premium received i.e Rs.88, we lose 400 – 88 =  – 312
- The net loss would be 312 – 77 =  – 235

As you can see, the gain in call option is offset by the loss in the put option.

Scenario 2 – Market expires at 7435 (lower breakdown)

This is a situation where the strategy neither makes money nor loses any money.

- 7600 CE would expire worthless; hence the premium received is retained. Profit here is Rs.77
- 7600 PE would have an intrinsic value of 165, out of which we have received Rs.88 as premium, hence our loss would be 165 – 88 =  -77
- The gain in the call option is completely offset by the loss in the put option. Hence we neither make money nor lose money at 7435.

Scenario 3 – Market expires at 7600 (at the ATM strike, maximum profit)

This is the most favorable outcome for a short straddle. At 7600, the situation is quite straight forward as both the call and put option would expire worthless and hence the premium received from both the call and put option will be retained. The gain here would be equivalent to the net premium received i.e Rs.165.

So this means, in a short straddle you make maximum money when the markets don’t move!

Scenario 4 – Market expires at 7765 (upper breakdown)

This is similar to the 2 nd  scenario we discussed. This is a point at which the strategy breaks even at a point higher than the ATM strike.

- 7600 CE would have an intrinsic value of 165, hence after adjusting for the premium received of Rs. 77, we stand to lose Rs.88 (165 – 77)
- 7600 PE would expire worthless, hence the premium received i.e Rs.88 is retained
- The gain made in the 7600 PE is offset against the loss on the 7600 CE, hence we neither make money nor lose money.

Clearly this is the upper breakdown point.

Scenario 5 – Market expires at 8000 (we lose money on call option)

Clearly the market in this scenario is way above the 7600 ATM mark. The call option premium would swell, so would the loss –

- 7600 PE will expire worthless, hence the premium received i.e Rs.88 is retained
- At 8000, the 7600 CE will have an intrinsic value of 400, hence after adjusting for the premium received of Rs. 77, we stand to lose Rs. 323( 400 -77)
- We have received Rs.88 as premium for the Put option, therefore the loss would be 88- 323 =  -235

So as you can see, the loss in the call option is significant enough to offset the combined premiums received.

Here is the payoff table at different market expiry levels.

As you can observe –

1. The maximum profit 165 occurs at 7600, which is the ATM strike
1. The strategy remains profitable only between the lower and higher breakdown numbers
1. The losses are unlimited in either direction of the market

We can visualize these points in the payoff structure here –

From the inverted V shaped payoff graph, the following things are quite clear –

1. The point at which you can experience maximum profits is at ATM, the profits shrink as you move away from the ATM mark
1. The strategy is profitable as long as the market stays within the breakdown points
1. Maximum loss is experienced when markets move further away from the breakdown point. The further away the market moves from the breakdown point, higher the loss
 
 Max loss = Unlimited
1. Max loss = Unlimited
1. There are two breakdown points – on either side, equidistant from ATM
 
 Upper Breakdown = ATM + Net premium 
 Lower Breakdown = ATM – Net premium
1. Upper Breakdown = ATM + Net premium
1. Lower Breakdown = ATM – Net premium

As you may have realized by now, the short straddle works exactly opposite to the long straddle. Short straddle works best when markets are expected to be in a range and not really expected to make a large move.

Many traders fear short straddle considering the fact that short straddles have unlimited losses on either side. However from my experience, short straddles work really well if you know how exactly to deploy this. In fact in the last chapter of the previous module, I had posted a case study involving short straddle. Probably that was one of the best examples of when to implement the short straddle.

I will repost the same again here and I hope you will be able to appreciate the case study better.




### 11.3 – Case Study (repost from previous module)

The following case study was a part of  Module 5, Chapter 23 .  I’m reposting the same here as I assume you would appreciate the example better at this stage. To get the complete context, I’d request you to read the chapter.

Infosys was expected to announce their Q2 results on 12 th  October. The idea was simple – news drives volatility up, so short options with an expectation that you can buy it back when the volatility cools off. The trade was well planned and the position was initiated on 8 th  Oct – 4 days prior to the event.

Infosys was trading close to Rs.1142/- per share, so he decided to go ahead with the 1140 strike (ATM).

Here is the snapshot at the time of initiating the trade –

On 8 th  October around 10:35 AM the 1140 CE was trading at 48/- and the implied volatility was at 40.26%. The 1140 PE was trading at 47/- and the implied volatility was at 48%. The combined premium received was 95 per lot.

Market’s expectation was that Infosys would announce fairly decent set of numbers. In fact the numbers were better than expected, here are the details –

“For the July-September quarter, Infosys posted a net profit of $519 million, compared with $511 million in the year-ago period. Revenue jumped 8.7 % to $2.39 billion. On a sequential basis, revenue grew 6%, comfortably eclipsing market expectations of 4- 4.5% growth.

In rupee terms, net profit rose 9.8% to Rs.3398 crore on revenue of Rs. 15,635 crore, which was up 17.2% from last year”.  Source: Economic Times.

The announcement came in around 9:18 AM, 3 minutes after the market opened, and this trader did manage to close the trade around the same time.

Here is the snapshot –

The 1140 CE was trading at 55/- and the implied volatility had dropped to 28%. The 1140 PE was trading at 20/- and the implied volatility had dropped to 40%.

Do pay attention to this – the speed at which the call option shot up was lesser than the speed at which the Put option dropped its value. The combined premium was 75 per lot, and he made a 20 point profit per lot.




### 11.4 – The Greeks

Since we are dealing with ATM options, the delta of both CE and PE would be around 0.5. We could add the deltas of each option and get a sense of how the overall position deltas behave.

- 7600 CE Delta @ 0.5, since we are short, the delta would be -0.5
- 7600 PE Delta @ – 0.5, since we are short, the delta would be + 0.5
- Combined delta would be -0.5 + 0.5 = 0

The combined delta indicates that the strategy is directional neutral. Remember both long and short straddle is delta neutral. In case of long straddle, delta neutral suggests that the profits are uncapped and in case of short straddle, the losses are uncapped.

Now here is something for you to think about – When you initiate a straddle you are obviously delta neutral. But as the markets move, will your position still remain delta neutral? If yes, why do you think so? If no, then is there a way to keep the position delta neutral?

If you can build your thoughts around these points, then I can guarantee you that your options knowledge is far greater than 90% of the market participants. To answer these simple questions, you will need to step a little deeper and get into 2 nd  level of thinking.

Do post your comments below.




### Key takeaways from this chapter

1. Short straddle requires you to simultaneously Sell the ATM Call and Put option. The options should belong to the same underlying, same strike, and same expiry
1. By selling the CE and PE – the trader is placing the bet that the market wont move and would essentially stay in a range
1. The maximum profit is equal to the net premium paid, and it occurs at the strike at which the long straddle has been initiated
1. The upper breakdown is ‘strike + net premium’. The lower breakdown is ‘strike – net premium’
1. The deltas in a short straddle adds up to zero
1. The volatility should be relatively high at the time of strategy execution
1. The volatility should decrease during the holding period of the strategy
1. Short straddles can be set around major events, wherein before the event, the volatility would drive the premiums up and just after the announcement, the volatility would cool off, and so would the premiums.

Download Short Straddle Excel Sheet



## 2.Bull_Call_Spread

[Read more](https://zerodha.com/varsity/chapter/bull-call-spread/)



### 2.1 – Background

The spread strategies are some of the simplest option strategies that a trader can implement. Spreads are multi leg strategies involving 2 or more options. When I say multi leg strategies, it implies the strategy requires 2 or more option transactions.

Spread strategy such as the ‘Bull Call Spread’ is best implemented when your outlook on the stock/index is ‘moderate’ and not really ‘aggressive’. For example the outlook on a particular stock could be ‘moderately bullish’ or ‘moderately bearish’.

Some of the typical scenarios where your outlook can turn ‘moderately bullish’ are outlined as below –

Fundamental perspective  – Reliance Industries is expected to make its Q3 quarterly results announcement. From the management’s Q2 quarterly guidance you know that the Q3 results are expected to be better than both Q2 and Q3 of last year. However you do not know by how many basis points the results will be better. This is clearly the missing part of the puzzle.

Given this you expect the stock price to react positively to the result announcement. However because the guidance was laid out in Q2 the market could have kind of factored in the news. This leads you to think that the stock can go up, but with a limited upside.

Technical Perspective  – The stock that you are tracking has been in the down trend for a while, so much so that it is at a 52 week low, testing the 200 day moving average, and also near a multi-year support. Given all this there is a high probability that the stock could stage a relief rally. However you are not completely bullish as whatever said and done the stock is still in a downtrend.

Quantitative Perspective –  The stock is consistently trading between the 1 st  standard deviation both ways (+1 SD & -1 SD), exhibiting a consistent mean reverting behavior. However there has been a sudden decline in the stock price, so much so that the stock price is now at the 2 nd  standard deviation. There is no fundamental reason backing the stock price decline, hence there is a good chance that the stock price could revert to mean. This makes you bullish on the stock, but the fact that it there is a chance that it could spend more time near the 2 nd  SD before reverting to mean caps your bullish outlook on the stock.

The point here is – your perspective could be developed from any theory (fundamental, technical, or quantitative) and you could find yourself in a ‘moderately bullish’ stance. In fact this is true for a ‘moderately bearish’ stance as well. In such a situation you can simply invoke a spread strategy wherein you can set up option positions in such a way that

1. You protect yourself on the downside (in case you are proved wrong)
1. The amount of profit that you make is also predefined (capped)
1. As a trade off (for capping your profits) you get to participate in the market for a lesser cost

The 3 rd  point could be a little confusing at this stage; you will get clarity on it as we proceed.




### 2.2 – Strategy notes

Amongst all the spread strategies, the bull call spread is one the most popular one. The strategy comes handy when you have a moderately bullish view on the stock/index.

The bull call spread is a two leg spread strategy traditionally involving ATM and OTM options. However you can create the bull call spread using other strikes as well.

To implement the bull call spread –

1. Buy 1 ATM call option (leg 1)
1. Sell 1 OTM call option (leg 2)

When you do this ensure –

1. All strikes belong to the same underlying
1. Belong to the same expiry series
1. Each leg involves the same number of options

For example –

Date – 23 rd  November 2015

Outlook – Moderately bullish (expect the market to go higher but the expiry around the corner could limit the upside)

Nifty Spot – 7846

ATM – 7800 CE, premium – Rs.79/-

OTM – 7900 CE, premium – Rs.25/-

Bull Call Spread, trade set up –

1. Buy 7800 CE by paying 79 towards the premium. Since money is going out of my account this is a debit transaction
1. Sell 7900 CE and receive 25 as premium. Since I receive money, this is a credit transaction
1. The net cash flow is the difference between the debit and credit i.e 79 – 25 =  54 .

Generally speaking in a bull call spread there is always a ‘net debit’, hence the bull call spread is also called referred to as a ‘debit bull spread’.

After we initiate the trade, the market can move in any direction and expiry at any level. Therefore let us take up a few scenarios to get a sense of what would happen to the bull call spread for different levels of expiry.

Scenario 1 – Market expires at 7700 (below the lower strike price i.e ATM option)

The value of the call options would depend upon its intrinsic value. If you recall from the previous module, the intrinsic value of a call option upon expiry is –

Max [0, Spot-Strike]

In case of 7800 CE, the intrinsic value would be –

Max [0, 7700 – 7800]

= Max [0, -100]

= 0

Since the 7800 (ATM) call option has 0 intrinsic value we would lose the entire premium paid i.e  Rs.79/-

The 7900 CE option also has 0 intrinsic value, but since we have sold/written this option we get to retain the premium of Rs.25.

So our net payoff from this would be –

-79 + 25

=  54

Do note, this is also the  net debit  of the overall strategy.

Scenario 2 – Market expires at 7800 (at the lower strike price i.e the ATM option)

I will skip the math here, but you need to know that both 7800 and 7900 would have 0 intrinsic value, therefore the net loss would be 54.

Scenario 3 – Market expires at 7900 (at the higher strike price, i.e the OTM option)

The intrinsic value of the 7800 CE would be –

Max [0, Spot-Strike]

= Max [0, 7900 – 7800]

= 100

Since we are long on this option by paying a premium of 79, we would make a profit of –

100 -79

= 21

The intrinsic value of 7900 CE would be 0, therefore we get to retain the premium Rs.25/-

Net profit would be 21 + 25 =  46

Scenario 4 – Market expires at 8000 (above the higher strike price, i.e the OTM option)

Both the options would have a positive intrinsic value

7800 CE would have an intrinsic value of 200, and the 7900 CE would have an intrinsic value of 100.

On the 7800 CE we would make 200 – 79 = 121 in profit

And on the 7900 CE we would lose 100 – 25 = 75

The overall profit would be

121 – 75

=  46

To summarize –


Market Expiry | LS – IV | HS – IV | Net pay off
--- | --- | --- | ---
7700 | 0 | 0 | (54)
7800 | 0 | 0 | (54)
7900 | 100 | 0 | +46
8000 | 200 | 100 | +46


From this, 2 things should be clear to you –

1. Irrespective of the down move in the market, the loss is restricted to Rs.54, the maximum loss also happens to be the ‘ net debit ’ of the strategy
1. The maximum profit is capped to 46. This also happens to be the difference between the spread and strategy’s net debit

We can define the ‘ Spread ’ as –

Spread = Difference between the higher and lower strike price

We can calculate the overall profitability of the strategy for any given expiry value. Here is screenshot of the calculations that I made on the excel sheet –

- LS – IV – Lower Strike – Intrinsic value (7800 CE, ATM)
- PP – Premium Paid
- LS Payoff – Lower Strike Payoff
- HS-IV – Higher strike – Intrinsic Value (7900 CE, OTM)
- PR – Premium Received
- HS Payoff – Higher Strike Payoff

As you can notice, the loss is restricted to Rs.54, and the profit is capped to 46. Given this,we can generalize the Bull Call Spread to identify the Max loss and Max profit levels  as –

Bull Call Spread Max loss = Net Debit of the Strategy

Net Debit = Premium Paid for lower strike – Premium Received for higher strike

Bull Call Spread Max Profit = Spread – Net Debit

This is how the pay off diagram of the Bull Call Spread looks like –

There are three important points to note from the payoff diagram –

1. The strategy makes a loss in Nifty expires below 7800. However the loss is restricted to Rs.54.
1. The breakeven point (where the strategy neither make a profit or loss) is achieved when the market expires at 7854 (7800 + 54). Therefore we can generalize the breakeven point for a bull call spread as  Lower Strike + Net Debit
1. The strategy makes money if the market moves above 7854, however the maximum profit achievable is Rs.46 i.e the difference between the strikes minus the net debit
 
 7900 – 7800 = 100 
 100 – 54 = 46
1. 7900 – 7800 = 100
1. 100 – 54 = 46

I suppose at this stage you may be wondering why anyone would choose to implement a bull call spread versus buying a plain vanilla call option. Well, the main reason is the reduced strategy cost.

Do remember your outlook is ‘moderately bullish’. Given this buying an OTM option is ruled out. If you were to buy the ATM option you would have to pay Rs.79 as the option premium and if the market proves you wrong, you stand to lose Rs.79. However by implementing a bull call spread you reduce the overall cost to Rs.54 from Rs.79. As a tradeoff you also cap your upside. In my view this is a fair deal considering you are not aggressively bullish on the stock/index.




### 2.3 – Strike Selection

How would you quantify moderately bullish/bearish? Would you consider a 5% move on Infosys as moderately bullish move, or should it be 10% and above? What about the index such as Bank Nifty and Nifty 50? What about mid caps stocks such as Yes Bank, Mindtree, Strides Arcolab etc? Well, clearly there is no one shoe fits all solution here. One can attempt to quantify the ‘moderate-ness’ of the move by evaluating the stock/index volatility.

Based on volatility I have devised a few rules (works alright for me) you may want to improvise on it further – If the stock is highly volatile, then I would consider a move of 5-8% as ‘moderate’. However if the stock is not very volatile I would consider sub 5% as ‘moderate’. For indices I would consider sub 5% as moderate.

Now consider this – you have a ‘moderately bullish’ view on Nifty 50 (sub 5% move), given this which are the strikes to select for the bull call spread? Is the ATM + OTM combo the best possible spread?

The answer to this depends on good old Theta!

Here are a bunch of graphs that will help you identify the best possible strikes based on time to expiry.

Before understanding the graphs above a few things to note –

1. Nifty spot is assumed to be at 8000
1. Start of the series is defined as anytime during the first 15 days of the series
1. End of the series is defined as anytime during the last 15 days of the series
1. The bull call spread is optimized and the spread is created with 300 points difference

The thought here is that the market will move up moderately by about 3.75% i.e from 8000 to 8300. So considering the move and the time to expiry, the graphs above suggest –

1. Graph 1 (top left)  – You are at the start of the expiry series and you expect the move over the next  5 days , then a bull spread with far OTM is most profitable i.e 8600 (lower strike long) and 8900 (higher strike short)
1. Graph 2 (top right)  – You are at the start of the expiry series and you expect the move over the next  15 days , then a bull spread with slightly OTM is most profitable i.e 8200 and 8500
1. Graph 3 (bottom left)  – You are at the start of the expiry series and you expect the move in  25 days , then a bull spread with ATM is most profitable i.e 8000 and 8300. It is also interesting to note that the strikes above 8200 (OTM options) make a loss.
1. Graph 4 (bottom right)  – You are at the start of the expiry series and you expect the move to occur  by expiry , then a bull spread with ATM is most profitable i.e 8000 and 8300. Do note, the losses with OTM and far OTM options deepen.

Here are another bunch of charts; the only difference is that for the same move (i.e 3.75%) these charts suggest the best possible strikes to select assuming you are in the 2 nd  half of the series.

1. Graph 1 (top left)  – If you expect a moderate move during the 2 nd  half of the series, and you expect the move to happen within  a day (or two)  then the best strikes to opt are far OTM i.e 8600 (lower strike long) and 8900 (higher strike short)
1. Graph 2 (top right)  – If you expect a moderate move during the 2 nd  half of the series, and you expect the move to happen over the next  5 days  then the best strikes to opt are far OTM i.e 8600 (lower strike long) and 8900 (higher strike short). Do note, both Graph 1 and 2 are suggesting the same strikes, but the profitability of the strategy reduces, thanks to the effect of Theta!
1. Graph 3 (bottom right)  – If you expect a moderate move during the 2 nd  half of the series, and you expect the move to happen over the next  10 days  then the best strikes to opt are slightly OTM (1 strike away from ATM)
1. Graph 4 (bottom left)  – If you expect a moderate move during the 2 nd  half of the series, and you expect the move to happen on  expiry day , then the best strikes to opt are ATM i.e 8000 (lower strike, long) and 8300 (higher strike, short). Do note, far OTM options lose money even if the market moves up.

2.3 – Creating Spreads

Here is something you should know, wider the spread, higher is the amount of money you can potentially make, but as a trade off the breakeven also increases.

To illustrate –

Today is 28 th  November, the first day of the December series. Nifty spot is at 7883, consider 3 different bull call spreads –

Set 1 – Bull call spread with ITM and ATM strikes


Lower Strike (ITM, Long) | 7700
--- | ---
Higher Strike (ATM, short) | 7800
Spread | 7800 – 7700 = 100
Lower Strike Premium Paid | 296
Higher Strike Premium Received | 227
Net Debit | 296 – 227 = 69
Max Loss (same as net debit) | 69
Max Profit (Spread – Net Debit) | 100 – 69 = 31
Breakeven | 7700 + 69 = 7769
Remarks | Considering the outlook is moderately bullish,


Set 2 – Bull call spread with ATM and OTM strikes (classic combo)


Lower Strike (ATM, Long) | 7800
--- | ---
Higher Strike (ATM, short) | 7900
Spread | 7900 – 7800 = 100
Lower Strike Premium Paid | 227
Higher Strike Premium Received | 167
Net Debit | 227 – 167 = 60
Max Loss (same as net debit) | 60
Max Profit (Spread – Net Debit) | 100 – 60 = 40
Breakeven | 7800 + 60 = 7860
Remarks | Risk reward is better, but the breakeven is higher


Set 3 – Bull call spread with OTM and OTM strikes


Lower Strike (ATM, Long) | 7900
--- | ---
Higher Strike (ATM, short) | 8000
Spread | 8000 – 7900 = 100
Lower Strike Premium Paid | 167
Higher Strike Premium Received | 116
Net Debit | 167 – 116 = 51
Max Loss (same as net debit) | 51
Max Profit (Spread – Net Debit) | 100 – 51 = 49
Breakeven | 7900 + 51 = 7951
Remarks | Risk reward is attractive, but the breakeven is higher


So the point is that, the risk reward changes based on the strikes that you choose. However don’t just let the risk reward dictate the strikes that you choose. Do note you can create a bull call spread with 2 options, for example – buy 2 ATM options and sell 2 OTM options.

Like other things in options trading,  do consider the Greeks, Theta in particular!

I suppose this chapter has laid a foundation for understanding basic ‘spreads’. Going forward I will assume you are familiar with what a moderately bullish/bearish move would mean, hence I would probably start directly with the strategy notes.

1. A moderate move would mean you expect a movement in the stock/index but the outlook is not too aggressive
1. One has to quantify ‘moderate’ by evaluating the volatility of the  stock/index
1. Bull Call spread is a basic spread that you can set up when the outlook is moderately bullish
1. Classic bull call spread involves buying ATM option and selling OTM option – all belonging to same expiry, same underlying, and equal quantity
1. The theta plays an important role in strike selection
1. The risk reward gets skewed based on the strikes you choose

Download Bull Call Spread Excel Sheet


