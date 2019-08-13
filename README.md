# avotecado

View the project at: <https://avotecado.herokuapp.com/>

Avotecado is a web application that helps residents keep track of municipal politics.

Using Avotecado’s political aggregation toolkit, users can follow elected officials, track how they vote on issues, and uncover voting  patterns that can get lost in the daily news cycle.

The goal is to foster engagement beyond election cycles by making  political data accessible, easy to understand, and free of spin.

# Reflection

## Original Goals, Future Evolution

### Goals

Our plans changed quite a bit, though we did meet our minimal goals, most of our standard requirements and some of our stretch requirements. We’ll discuss each goal, point by point.

#### Councilor profiles with individual voting history

* Status: *Met*

#### Twitter feeds for each politician

* Status: *Unmet (sort of)*
* We were unaware of the long waits that twitter had for their API access, as well as their very stringent application process. We ended up going with a library that allowed us to instead embed a single aggregate twitter feed.

#### Aggregate voting history

* Status: *Met*

#### Ability for users to vote on issues

* Status: *Dropped due to project design change*
* This was something we discussed as a standard requirement. However, to us, it actually ended up being outside of the scope of our data set as we wanted it to be for *future* bills. We quickly realized that proposed bills 

#### Ability to search/filter for specific Bills

* Status: *Met*
* This is handled in the data table.

#### App is responsive 

* Status: *Unmet*
* This (specifically Material-UI) was one of our main issues… so much so, that it actually caused us to re-write the project after the 3rd sprint. Unfortunately, time constraints did not allow for better app responsiveness.

#### Automatic web scraping of new data into the database

* Status: *Unmet*
* Worked out the process and began development, but did not complete this.

#### Interactive graphics to display results

* Status: *Met*
* This was actually quite easy once we had our data set up.

#### Bills tagged with a category for filtering and collation

* Status: *Met*
* Similar to above, this became more obvious in its execution as we figured out the vote data.

### Future Evolution

Right now the user can get raw data and do a further deeper analysis, but for the future, we’d like to provide more functionality for further analysis. We would like to make a way to integrate non-biased data analysis, in order for us to provide something that’s just that one layer deeper. 

We’re still just learning a lot of the technologies, such as data visualization, and in regards to that, we feel in the future we could (and *should*) improve the dataviz aspect of the project.

We’d like to do automated analysis as well; items like meeting minutes, summaries, etc. For example, we've been considering how to connect future meeting agenda items with past meeting minutes, and have some ideas, but the data is not really connected in an apparent way. (Motions don't get a voteId until they've been voted on.)

Something we discuss every now and then is scaling it to different cities. This was *kind* of a stretch goal, but would require further investigation into data sources of other cities. We did however consider such expansion in our data and app design.

## Team Contribution/Leadership Roles

Jason handled the data; he pulled and formatted the main data (councillors and vote history) from [the CoV's open data catalogue](https://data.vancouver.ca/datacatalogue/council-voting-record.htm), and setup an algorithm the team came up with to ‘tag’ each entry using its agenda description.

Mike built the home page / landing page, and assisted in project design.

Shabab handled most of the code, assisted with the data design, and kept things moving along.

Everyone contributed to overall design and direction discussions.