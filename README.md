avotecado
===
## Quick Summary:
Avotecado is a web application that helps residents keep track of municipal politics.

Using Avotecado’s political aggregation toolkit, users can follow elected officials, track how they vote on issues, and uncover voting patterns that can get lost in the daily news cycle.

The goal is to foster engagement beyond election cycles by making political data accessible, easy to understand, and free of spin.

---

## Table of Contents
* [Project Requirements](#Project-Requirements--avotecado)
    * [Who is it for?](#Who-is-it-for)
    * [What will it do?](#What-will-it-do-What-“human-activity”-will-it-support)
    * [What type of data will it store?](#What-type-of-data-will-it-store)
    * [What will users be able to do with this data?](#What-will-users-be-able-to-do-with-this-data)
    * [What is some additional functionality you can add/remove based on time constraints?](#What-is-some-additional-functionality-you-can-addremove-based-on-time-constraints)
    * [Project task requirements](#Project-task-requirements)
        * [3-5 minimal requirements (will definitely complete)](#3-5-minimal-requirements-will-definitely-complete)
        * [3-7 “standard” requirements (will most likely complete)](#3-7-%E2%80%9Cstandard%E2%80%9D-requirements-will-most-likely-complete)
        * [2-3 stretch requirements (hope to complete 1!)](#2-3-stretch-requirements-hope-to-complete-1)
        * [Pick 2 of your minimal requirements and break each of them down into ~2-5 smaller tasks](#Pick-2-of-your-minimal-requirements-and-break-each-of-them-down-into-2-5-smaller-tasks)
    * [Prototype sketches](#Prototype-sketches)
* [Approach](#approach--avotecado)
    * [PURPOSE](#PURPOSE)
    * [USER-Centered Design](#USER-Centered-Design)
    * [Problem-Solving Orientation](#Problem-Solving-Orientation)

----

## Project Requirements @ avotecado
### Who is it for?
avotecado is for people in a certain geographic location who want to learn more about local politics. In our demo case, it'll be for Vancouverites who want to learn about Vancouver politics.

### What will it do? (What "human activity" will it support?)
Keep track of political issues/votes (pieces of legislation or other decisions that get voted on) --- within a specific level of government (municipal, provincial, federal)

### What type of data will it store?
* Politicians\Elected Officials:
    * Bio
    * Contact Information
    * Their voting record: Legislation/Votes voted on / will vote on
    * Party affiliation
* Users
    * Profile
        * Username
        * Email
        * Password
    * Entities the user follows
        * i.e. issues, politicians, bills/votes
* Votes/Legislation
* Summary of bills
    * Official Text - that will be voted on
    * Link to minutes / official government page
   * Tags
   * User votes (What the people think)
   * Dictionary/Glossary for relevant keywords - breakdown hard to understand jargon.

### What will users be able to do with this data?
* Politician Data:
    * View vote history in visual form (graphics, etc)
    * Follow the politicians
    * (Potentially) view politician social media feeds
* User Data:
    * Modify their profile
        * Email
        * Password
        * Delete account
* Vote/Legislation Data:
    * Search tags
    * Vote on votes

### What is some additional functionality you can add/remove based on time constraints?
* Web scraping
* Graphics to display results - in interactive ways

### Project task requirements
#### 3-5 minimal requirements (will definitely complete)
1. Vote history information is loaded into database
2. Profile page for each councillor, with contact data
3. Councillor profile page has their recent voting history
4. Vote history page by date, with all councillor votes

#### 3-7 "standard" requirements (will most likely complete)
1. Councilor profile page has photo & twitter feed
2. User Profiles
3. Users can vote anonymously on Bills
4. Follow feature
    * Ability to follow politicians
5. Ability to search/filter for specific Bills
6. App is responsive - displays well on smaller screens such as phones

#### 2-3 stretch requirements (hope to complete 1!)
1. Automatic web scraping of new data into the database
2. Interactive graphics to display results
3. Bills tagged with a category for filtering and collation

#### Pick 2 of your minimal requirements and break each of them down into ~2-5 smaller tasks:
* Profile page for councilor
    * Standardized profile page with data taken from the database
    * Info about each politician can be shown by selecting from a list
    * Formatted/organized in a usable and logical manner -- divided into sections
* Councilor profile page has voting history
    * Recent votes for a single politician formatted into a single collection by date
    * Include overall results of the vote compared with chosen politician
    * Eventually include category indicators for each of the vote items
    * Dates etc are links to related information, such as all votes from a particular date

### Prototype sketches

#### Flowchart
![](https://raw.githubusercontent.com/avotecado/avotecado/old-master/project-info/AvoteCado%20Flow%20Chart.png)

Prototype "sketch" flow chart of designer and user conceptual models.

----

#### Landing page
![](https://raw.githubusercontent.com/avotecado/avotecado/old-master/project-info/landing2.jpg)
![](https://raw.githubusercontent.com/avotecado/avotecado/old-master/project-info/landing_desktop_.png)

The current idea is to have an initial page that asks the user for their location and then proceeds into a selection page. The selection page is either the most recent city votes, a politician selection page, or a party selection page. The default 'home' can be selected by the user.

The appearance will be very similar in both mobile and desktop forms.

*(There is a mention of a dark mode, which would be nice to eventually implement.)*

----

#### Selection Page
![](https://raw.githubusercontent.com/avotecado/avotecado/old-master/project-info/politician_party_select.jpg)

As per the flow chart, we will go into some sort of selection page (either for party, politician, or vote records). We will likely be able to sort by alphabetical or most recent (for vote records, at least). This will be the same basic idea for party / politician selection.

----

#### Politician Profile Voting Record Page 

![](https://raw.githubusercontent.com/avotecado/avotecado/old-master/project-info/politician_profile.jpg)
![](https://raw.githubusercontent.com/avotecado/avotecado/old-master/project-info/profile_desktop.png)
![](https://raw.githubusercontent.com/avotecado/avotecado/old-master/project-info/Sketch1.jpg)

Various (similar) styles of politician profile pages. Both have overall similar layouts with the tabbed (and collapisble) information organization. The second has a quick access to other politicians. 

The voting record page will also have a very similar appearance, and potentially interaction style on both mobile and desktop.


----

#### User Profile

![](https://raw.githubusercontent.com/avotecado/avotecado/old-master/project-info/user_profile.jpg)

While a 'stretch goal', it was something that was fun to think about. The layout is somewhat based on current social media styles in which the user has a follow list (but not a followers list!) that consists of issues/politicians, possibly parties as well. 

----

approach @ avotecado
===
## PURPOSE
1. To help think through the project with user-centered approach
2. Have a space that allows us to think short-term (realistic scope for project) and long-term: are there ways for us to make a useable, innovative app that could have use in real-life (more specifically - can we bake this long-term perspective into the project as we work on it for class?).


## USER-Centered Design
* Build from Task examples - http://hcibib.org/tcuid/ - A link that explains this better than I can
    * **Tasks**: what are the core Tasks your design will support ?
    * **Task Examples** - have a few “imagined” real users and think through why they would want the app we are designing.
    * **Conceptual Models**: 
        * See this example(in reference folder) https://drive.google.com/open?id=1Tf0dOoQ_aBMM8zUG3FAPm8qax-c-CUBkYcqX7ShLo-o

## Problem-Solving Orientation
### 1. It is difficult to track what politicians are doing
For the average voter, following the news is the best way that we can “track” what elected officials are doing and what they are saying (often not the same thing) & to “track” the decisions (bills/votes) they are making & maybe more.
* There isn’t a technologically convenient way for voters/people to simply pull up a track record of the items described above.
    * We want to give users STATS on elected officials --- with a level of ease that resembles Sports stats/checking the weather/following stocks.

### 2. Legislation/Votes are also difficult to track
* It is difficult to parse through the jargon filled language that comes with legislation/bill/votes given their legal framework.
* Can we present these items in an easily digestible, non-biased (***qualitatively*** and ***quantitatively***) way?
* Is there a way to provide voters with the some of the data the elected offcials are using to make their decisions, so that they can also have informed opinions on those matters or at least judge for themselves how effectively the politicians are following their mandates?
* Is there a way to develop a consistent set of basic metrics that are easily viewed in an app that can give app users an at glance way to view:
    * The data informing the need to pass a certain vote.
    * The data that will be used to judge the effectiveness/impact of a bill/vote.
    * *FINANCIAL*: total cost / percentage of budget this will cost / cost per resident.
    * *ACCOUNTABILITY / IMPACT*: when will the vote’s actions take effect?
    * What metrics is the government going to use to measure effectiveness / impact?

### 3. Why municipal first?
* **High degree of apathy**: This level of government has the lowest percentages of people voting (vs. provincial or federal).
* **Party Discipline**: Due to the pariliamentary-style (whipped votes) of provincial and federal politics, elected officials tend to vote with their party - thus tracking bills and polticians at these levels of government may require a different set of metrics to track how well polticians reflect their ridings views vs. following the party.
