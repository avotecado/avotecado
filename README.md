# avotecado
View the project at: <https://avotecado.herokuapp.com/>

Avotecado is a web application that helps residents keep track of municipal politics.

Using Avotecado’s political aggregation toolkit, users can follow elected officials, track how they vote on issues, and uncover voting patterns that can get lost in the daily news cycle.

The goal is to foster engagement beyond election cycles by making political data accessible, easy to understand, and free of spin.

# Table of Contents
* [Documentation / Final Project](#Documentation--Final-Project)
  * [Rubric 3: Basic Contribution Requirements](#Rubric-3-Basic-Contribution-Requirements)
  * [Rubric 4: Basic Functionality Requirements](#Rubric-4-Basic-Functionality-Requirements)
    * [The problems we wanted to tackle:](#The-problems-we-wanted-to-tackle)
      * [1. *Tracking politicians is difficult once they get elected.*](#1-Tracking-politicians-is-difficult-once-they-get-elected)
      * [2. *Legislation/Votes are also difficult to track.*](#2-LegislationVotes-are-also-difficult-to-track)
      * [3. *Why municipal politics?*](#3-Why-municipal-politics)
    * [Our Results](#Our-Results)
    * [Original Goals / Goal Status](#Original-Goals--Goal-Status)
        * [1. *Councilor profiles with individual voting history*](#Councilor-profiles-with-individual-voting-history)
        * [2. *Twitter feeds for each politician*](#Twitter-feeds-for-each-politician)
        * [3. *Aggregate voting history*](#Aggregate-voting-history)
        * [4. *Ability for users to vote on issues*](#Ability-for-users-to-vote-on-issues)
        * [5. *Ability to search/filter for specific Bills*](#Ability-to-searchfilter-for-specific-Bills)
        * [6. *App is responsive*](#App-is-responsive)
        * [7. *Automatic web scraping of new data into the database*](#Automatic-web-scraping-of-new-data-into-the-database)
        * [8. *Interactive graphics to display results*](#Interactive-graphics-to-display-results)
        * [9. *Bills tagged with a category for filtering and collation*](#Bills-tagged-with-a-category-for-filtering-and-collation)
  * [Rubric 5: Challenges, Learning, and Future Directions](#Rubric-5-Challenges-Learning-and-Future-Directions)
    * [Challenges / Learning](#Challenges--Learning)
      * [Challenge 1: *Aesthetic and Code/File Structure Issues.*](#Challenge-1-Aesthetic-and-CodeFile-Structure-Issues)
      * [Challenge 2: *'External' Issues.*](#Challenge-2-External-Issues)
      * [Challenge 3: *Data Issues.*](#Challenge-3-Data-Issues)
    * [Future Direction](#Future-Direction)
  * [Rubric 6: Initiative and additional contributions](#Rubric-6-Initiative-and-additional-contributions)
* [References](#References)
    * [Data / Source Material](#Data--Source-Material)
    * [Data Visualiztion](#Data-Visualiztion)
    * [Front/Back End & Data Integration](#frontback-end--data-integration)
    * [Significant libraries & API](#significant-libraries--api)
    * [Deployment](#Deployment)

# Documentation / Final Project 
## Rubric 3: Basic Contribution Requirements
Mike developed the original concept for the project, worked on the project design, background research on the subject, worked on frontend (home page), and the twitter integration for the site.

Jason set up the initial project, handled the data; pulled and formatted the councilors and vote history data to JSON from [the CoV's open data catalogue](https://data.vancouver.ca/datacatalogue/council-voting-record.htm), and setup the ‘tagging’ process for vote entries. He also handled deployment.

Shabab acted as team manager, did aesthetic-related stuff, the majority of the programming, helped out with data design.

Everyone contributed to the overall project design, direction in meetings, documentation, and implementation in general.

## Rubric 4: Basic Functionality Requirements

### The problems we wanted to tackle:
With Avotecado, we had quite a few goals (some lofty) that we wanted to tackle. They all centered around making politics accessible for the lay person. We explain the general idea in the following 3 sub sections, then we reflect on our progress in the [section after](#Our-Results), and finally talk about [the specific goals and their statuses](#Original-Goals--Goal-Status).


#### 1. *Tracking politicians is difficult once they get elected.*

For the average voter, following the news is the best way to “track” what elected officials are doing & saying (often not the same thing). We want to help users track the day-to-day decisions politicians make & provide tools that allow users to see patterns in voting behaviour (if and when they exist).

* There isn’t a technologically convenient way for voters/people to simply pull up a track record of the items described above. 
* We wanted to give users statistics on elected officials, with a level of ease that resembles sports stats/checking the weather/following stocks.

#### 2. *Legislation/Votes are also difficult to track.*
* It is difficult to parse through the legal language that comes with legislation and their pathways to becoming law are difficult to follow.
    * We wanted to present these items to average voters in ways that are easily understood, both qualitatively and quantitatively.
* Is there a way to provide voters with some of the data elected officials use to make their decisions, so that they can have their own informed opinions on those matters **or** at least judge for themselves how well politicians follow their mandates?
* We wanted to develop a consistent set of metrics easily viewed in the app. These metrics were to show the following, in a quick manner:
  * The information politicians were going to use to base their voting decisions on: for example: staff reports and community forums
  * Voting patterns: voting with party / ideological bias when voting on issues
  * Impact of vote on City - individual, neighbourhood, and city-wide levels for instance

#### *3. Why municipal politics?*
* **High degree of apathy**: Municipal politics has some of the lowest percentages of political participation (vs. provincial or federal).
* **Party Discipline**: The parliamentary form of provincial and federal politics leads to politicians almost always voting along party lines. Municipal politics offers an opportunity to see what types of issues cause politicians to vote against party lines.

### Our Results
We were able to create an app that allows users to track municipal politicians and built a searchable record of all the votes the recently elected Vancouver City council made since November 2018 - with some added features (user profiles, voting records organized by party for instance).

We think this project established a useful base on which to expand. We implemented functionality that addressed problems 1 and 2 (from above) at a foundational level, but found implementing political analysis as we first intended beyond our reach.

Generating the political analysis from the data we aggregated turned out to be a significantly more complex problem that we hope to work on in the future. We speak about this in greater detail in the following section and in the [Future Direction section](#Future-Direction).


### Original Goals / Goal Status
Our plans changed quite a bit, though we did meet our minimal goals, most of our standard requirements and some of our stretch goals. We’ll discuss each goal, point by point.

##### 1. *Councilor profiles with individual voting history*
* Status: *Met*
* This was pretty simple once we got the "overall history" going.

##### 2. *Twitter feeds for each politician*
* Status: *Somewhat met*
* We were unaware of the long waits that twitter had for their API access, as well as their very stringent application process. We ended up going with a library that allowed us to instead embed an aggregated twitter list that contains the accounts of Vancouver City Council members.

##### 3. *Aggregate voting history*
* Status: *Met*
* This originally applied to *everyone's* (aggregate) vote history, but then it was extended to party vote history as well. Both of these were completed.

##### 4. *Ability for users to vote on issues*
* Status: *Dropped due to project design change*
* This was something we discussed as a standard requirement. However, to us, it actually ended up being outside of the scope of our data set as we wanted it to be for *future* bills. We quickly realized that proposed bills and voted on bills often do not share any identifying information, and if we were to link them together, it would take an incredible amount of manual labour, or a more sophisticated form of automation.
* We replaced this functionality with the ability for users to comment on and rate the councilors, rather than the bills.

##### 5. *Ability to search/filter for specific Bills*
* Status: *Met*
* This is handled in the data table.

##### 6. *App is responsive *
* Status: *Unmet*
* This (specifically Material-UI) was one of our main issues… so much so, that it actually caused us to re-write the project after the 3rd sprint. Unfortunately, time constraints did not allow for better app responsiveness. On desktop and tablet, it will load fine. However, in smaller screen resolutions, there are issues that could/should have been solved by proper responsive design.

##### 7. *Automatic web scraping of new data into the database*
* Status: *Unmet*
* We started to work out the process to aquire, format, and tag new data, and began development, but currently this functionality remains incomplete.

##### 8. *Interactive graphics to display results*
* Status: *Met*
* This was actually quite easy once we had our data set up.

##### 9. *Bills tagged with a category for filtering and collation*
* Status: *Met*
* Similar to above, this became more obvious in its execution as we figured out the vote data.

## Rubric 5: Challenges, Learning, and Future Directions
### Challenges / Learning
#### Challenge 1. *Aesthetic and Code/File Structure Issues.*
A great deal of challenges came in the form of styling. The [App Is Responsive](#App-is-responsive) goal lays out the issue somewhat. To explain further, our initial design was made in Adobe XD and when we tried to bring that design to life, we quickly realized we (at the time) had no where near enough skill with CSS/React to make it happen. We instead used a poorly modified Material-UI base theme; it was quite unmotivating, inspiring no progress and overall dreadful to look at.

This "version" had an incorrect (and a little less organized) file structure as well.

After term 1 finished, an aesthetic re-design was implemented. While this re-design took up a big chunk of time, we did get better with Material-UI/React during this process (but, of course, there is still lots to learn); we had a chance to restructure the code layout/file directories. Essentially, we revamped the project.

#### Challenge 2. *'External' Issues.*
We could not account, nor compensate, for unexpected external events that took time away from the project, our team had at least one person busy, and not being able to commit as much time, in both the first and second half of the term.

#### Challenge 3. *Data Issues.*
*Preface:* This was more so a challenge of political data analysis than one of app building, insofar as class requirements were concerned.

Our voting data functionality is fully implemented. However, our analysis of political data did not reach as far as we hoped when drafting our original goals.

We generated data visualizations based on the data we were able to gather from City Hall's dataset. This meant each vote only contained a brief description for a vote, providing little contextual information.

We eventually had a realization that votes for/against something didn’t necessarily mean anything consistent, so doing analysis or charting on that data was not entirely feasible. For example, one vote categorized as environment might mean something entirely different than the next. Nevertheless, we did find the data gave us useful information to show **how** councilors voted (at a high-level) alongside analysis of data that showed **what** council was voting on. 

A future iteration would try to generate data based on the details of each issue being voted on. This would require data scraping functionality to scour each set of meeting minutes and staff reports (both currently in highly variated PDF format) and pull relevant data. Finally, this data would be presented to users in a way that was contextual and meaningful - text and data visualization.

We had some functionality that auto-generated links back to associated pages on the City Hall website for each issue, but some data inconsistencies resulted in broken links so the functionality was removed until it could be perfected.

### Future Direction

**Currently**: a user can get raw voting record data and conduct a preliminary analysis. For the future, we aim to provide more functionality for deeper, context-based analysis that works with the details of each vote (financial cost of yes vote or no vote, other impacts on city (social and cultural), number of housing units approved/lost, and so on). 

**Future Iterations of Avotecado will:**

*Improve Analysis / Help users see patterns:*
* We would like to integrate non-biased data analysis, in order for us to provide users with the ability to see how a particular vote connects to other votes and a broader context in-general (such as the examples just listed).

*More Data Visualization:*
* We’re still just learning a lot about the related technologies, such as data visualization, and in regards to that, we feel in the future we could (and *should*) improve the dataviz aspects of the project.

*Automate Analysis:*
* We’d like to do automated analysis as well; items like meeting minutes, summaries, etc. For example, we've been considering how to connect future meeting agenda items with past meeting minutes, and have some ideas, but the data is not really connected in an apparent way. (ie. Motions don't get a voteId until they've been voted on.)

*Scale to other Cities:*
* Something we discussed every now and then is scaling to other cities. This was *kind* of a stretch goal, but would require further investigation into data sources of other cities. We did however try to consider such expansion in our data and app design.

## Rubric 6: Initiative and additional contributions
* Regarding going "above and beyond simply incorporating each learned technology," I think this was a more difficult and iffy aspect. I (SK) had my hands full with the re-design. I think our use of data/data display was neat however.
* Perhaps a minor point, but we tested deployment on a personal server as well and compared the speed differences with our Heroku deployment. The result was that Heroku was marginally faster.

# References

### Data / Source Material
* [City of Vancouver's open data catalogue](https://data.vancouver.ca/datacatalogue/council-voting-record.htm) 
    * Council voting records
* [City of Vancouver's election results](https://data.vancouver.ca/datacatalogue/municipalElectionResults.htm)
* [Open Parliament](https://openparliament.ca)
    * Inspiration for the project - political tracking site for federal politics - demonstrates how an open and extensive dataset allows for lots of content, but with limited-to-none political analysis.

### Data Visualiztion
* https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
    * `pages/PartiesMain.jsx, removeDuplicates()` references this stackoverflow post, granted it’s a bit modified from that.
    * `utils/setupArrayForReCharts.js` also references the same stackoverflow post. Specifically for the `(count[value] || 0) + 1` line; I thought it was a nice and clever way of seeing if something existed or not.

### Front/Back End & Data Integration
* Material-UI Docs.
    * `utils/VoteDescriptionDialog.jsx`: this file uses a somewhat modified version of a Material-UI example modal. 
* https://joshtronic.com/2016/02/14/how-to-capitalize-the-first-letter-in-a-string-in-javascript/
    * `utils/userValidation.js`: I had a bit of a brain lapse where I forgot how to convert the first letter of a string to capital, and thus I used this as a reference.
* https://guide.meteor.com/react.html#using-withTracker
    * `withTracker` usage 
* [validator.js](https://github.com/validatorjs/validator.js)
    * `server.js`: I used one of their specific regex strings (` /^[0-9A-Z]+$/i`) when my own wasn't completely working; the `/i` is something I missed on my own attempt and so this helped fix my errors.
* Home page - main image:
    *  http://kevinlanthier.com/the-special/

### Significant libraries & API
  * `recharts`
  * `material-table`
  * [Twitter - Embedded Lists](https://developer.twitter.com/en/docs/twitter-for-websites/timelines/overview.html)
    * [React Twitter Embed Component](https://www.npmjs.com/package/react-twitter-embed)

### Deployment
* https://medium.com/@leonardykris/how-to-run-a-meteor-js-application-on-heroku-in-10-steps-7aceb12de234
    * helpful in figuring out the steps needed for deployment
