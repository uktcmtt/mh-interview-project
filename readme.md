Overview
========

This is an opportunity for you to demonstrate your capabilities in an actual project. You can choose the pace that you work at, and unless otherwise noted in the requirements, you have the freedom to choose how to approach the project. Whenever you are ready please submit a link to your own repository where you cloned the project.

Project Requirements
====================

1.  Create a single-page app to display and manage profile listings. Use the sample app from this repository as a starting point.

1.  Please refer to the provided designs and the requirements below for details. Designs can be accessed in Zeplin - we will send you an invite to access the project. You will need you to create a free account at Zeplin, if you don't have one.

	1. You will receive an email to the Zeplin project containing the project designs and assetts.

	1.  In Zeplin you can:

		1.  Download all assets as PNG and SVG as needed. To download assets go to the desired artboard/screen and click the knife icon in the upper right corner.

		2.  Inspect each element to determine colors, font sizes and names, relative distance of each element to other elements, shadows, border radiuses, etc.

1.  The app user must be able to:

	1.  See an initial list of profiles

	2.  Add new profiles

	3.  Remove profiles

	4.  Filter the results via a simple search

1.  You must determine how to divide the designs into appropriate React components.

1.  Feel free to add and use any libraries that you want (e.g. lodash).

1.  Do not write a backend REST API for the data and actions.

1.  You should manage the app state using Redux (i.e. adding, removing, etc., actions should flow through Redux).

1.  Clicking/tapping on the logo should use a smooth animation to scroll the page to the top.

1.  Search: as soon as a user starts typing in the search box the results should automatically start filtering after each keystroke. The fields to search are name and bio. Just display the profiles that match the criteria.

1.  The list of profiles should be sorted alphabetically by name.

1.  New Profile / Edit Profile form:

	1.  All fields are required

	2.  The name field should require that at least two names are entered to be valid input.

	3.  When an image URL is entered the image should load in the area in front of it.

	4.  Auto capitalization - auto capitalize the first letter of each of these fields:

		1.  Name

		2.  Occupation

		3.  City

	6.  Social profiles - for the purpose of this project these are just toggle buttons. When clicked/tapped their state should change as shown in the designs. Only the social icons for the activated buttons will show in the profile view.

	7.  The save button should be disabled unless all the required fields are entered.

1.  Profile card sizing:

	1. The card width should be: 

		1. flexible depnding on the browser width
	
		1. no more than 660px
	
		1. at least 580px

	2.  There should be two cards per row, unless the screen size is too narrow to fit them at their minimum width

	4.  For mobile devices the cards should stretch to the screen width, less any margins. You can see those from the Zeplin designs.

	5.  The short bio inside the card should never be taller than 3 lines regardless of its width. The third line, if present, should be fading to white (see design screen 01).


Constraints
===========

-   The app must be using React (babel) and Redux store

-   Make the app responsive so it works both on mobile and desktop devices.

-   For CSS use SCSS


Deliverables
============

-   A full project that we can build and run on a localhost machine using only npm.

-   Submit your final work as a repository on your Github account.


Questions / Comments
====================

If you run into any issues or come up with any questions during the project, make note of it and decide on a direction. We can discuss these during the follow-up interview, where you can explain your reasoning for going in the direction you did. If you run into a roadblock or come across a major issue with the requirements please email George.
