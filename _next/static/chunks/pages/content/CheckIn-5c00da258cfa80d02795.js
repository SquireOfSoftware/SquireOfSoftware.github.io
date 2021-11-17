(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{7189:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return a}});s(7294);var n=s(1973),o=s.n(n),i=s(5893);function a(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"A local church has an interesting problem, they don't really really know who is coming to their services. Attendance is marked on paper, and a lot of the elderly are unable to read English, migrating from China due to their children being present in Australia."}),(0,i.jsx)("p",{children:'A key problem with this is that, because the church does not know who is entering their services, they are unable to plan "accurately" how much food to prepare as part of the free lunch, or even plan outings like camps and stuff because they are unable to accurately predict who would even be keen to attend.'}),(0,i.jsx)("p",{children:"Or even the distribution of the people that come to the church, if there are more mandarin speaking people, then perhaps the church should look into setting up services that cater for this demographic."}),(0,i.jsx)("p",{children:"Throw human forgetfulness and duplicated sign ins with bad handwriting, the administration of planning events and things for the community becomes increasingly difficult."}),(0,i.jsx)("p",{children:"So an automated means of recording this information was desired (this was pre-COVID) at around late-2019."}),(0,i.jsx)("p",{children:"The key requirements were (from the people who asked me to set this whole project up):"}),(0,i.jsx)("p",{children:"- People must receive a QR code and use it to sign in via a scan of some sort."}),(0,i.jsx)("p",{children:"- Administrators must be able to pull the stats down in the CSV format."}),(0,i.jsx)("h3",{className:o().sticky_heading,children:"What was the solution?"}),(0,i.jsx)("p",{children:"There was a lot of back and forth regarding the actual requirements and the workflow of a scan or even the use of a QR code. They wanted it to work similarly to like how the NSW Government sign in QR code works in contact tracing for Covid."}),(0,i.jsx)("p",{children:'However we ended up concluding that we could have a workflow where the church issues out a QR code which has some sort of non-valuable secret on it, like an id. We give this QR code to people, via email, text or print it out on a piece of paper. Then we set up some sort of scanning station and we just have people "scan" in.'}),(0,i.jsx)("p",{children:"If they were new then one of the ushers could set up the new QR Code for the person."}),(0,i.jsx)("h3",{className:o().sticky_heading,children:"The web front end"}),(0,i.jsx)("p",{children:"The scanner could be a laptop camera or one of the usher's phone and either people scan themselves in or the usher could use their camera to scan the person in."}),(0,i.jsx)("p",{children:"Using my knowledge of Spring Boot and Docker, I decided to try and solve the situation like so:"}),(0,i.jsx)("img",{src:"images/check_in/Architectural_Diagram.png"}),(0,i.jsx)("p",{children:'So the set up is that you have a QR Code, embedded in it, is a random hash generated at the time that the person "signed up" for the QR Code, this of course can be regenerated at any time, in case the QR code is lost or stolen.'}),(0,i.jsx)("p",{children:"The device that scans people in, can be a camera or a laptop, and it just visits an internal web site which has some Javascript that uses the web cam of the device."}),(0,i.jsx)("p",{children:"Here is a picture of the scanner web site:"}),(0,i.jsx)("img",{src:"images/check_in/scanner_screen.png"}),(0,i.jsx)("p",{children:"This website is just a self-signed https website (so you will need the certificate to ensure that the browser allows access to the web cam) and is hosted on an nginx web server."}),(0,i.jsx)("p",{children:'When a scan request is made, it checks the QR Code hash against what is in the database (which is postgres database) and then records when that person "signed in".'}),(0,i.jsx)("p",{children:"The other entry point is the administration web page where it would have a table like structure, that would allow ushers to create new people or sign in someone without a QR Code (if they have forgotten it) or dump the data of all the people that signed in at that given point in time."}),(0,i.jsx)("p",{children:"You can see this here, on this report screen:"}),(0,i.jsx)("img",{src:"images/check_in/report_screen.png"}),(0,i.jsx)("p",{children:"And here is what a qr code print out looks like:"}),(0,i.jsx)("img",{src:"images/check_in/qr_code_print_out.png"}),(0,i.jsx)("p",{children:"And here is what adding a new person looks like:"}),(0,i.jsx)("img",{src:"images/check_in/adding_a_person.png"}),(0,i.jsx)("p",{children:"And here is what updating a person's details look like:"}),(0,i.jsx)("img",{src:"images/check_in/details_of_person.png"}),(0,i.jsx)("h3",{className:o().sticky_heading,children:"The backend"}),(0,i.jsx)("p",{children:"The backend is a Spring boot application sitting on top of a Postgres database."}),(0,i.jsx)("p",{children:"The workflow is that these scanners and report screens would talk to the REST endpoints exposed by the Spring Boot application. This in turn would trigger all the business logic held inside the application to create/update /delete all the necessary database entries that would be needed."}),(0,i.jsx)("p",{children:"For example:"}),(0,i.jsxs)("p",{children:["This is to sign someone in: ",(0,i.jsx)("a",{href:"http://localhost:8080/people-service/checkin/signin",target:"_blank",children:"http://localhost:8080/people-service/checkin/signin"})," (it is a POST request)"]}),(0,i.jsxs)("p",{children:["This is to see all the sign-ins from a person: ",(0,i.jsx)("a",{href:"http://localhost:8080/people-service/checkin/people/log/hash/b0471635-5bc1-4d6a-94d9-c6459a663c08",target:"_blank",children:"http://localhost:8080/people-service/checkin/people/log/hash/b0471635-5bc1-4d6a-94d9-c6459a663c08"})]}),(0,i.jsxs)("p",{children:["This is how you can recreate someone's hash and subsequently their qr-code: ",(0,i.jsx)("a",{href:"http://localhost:8080/people-service/people/id/103/qrcode:recreate",target:"_blank",children:"http://localhost:8080/people-service/people/id/103/qrcode:recreate"})]}),(0,i.jsxs)("p",{children:["And this is how you can get all the sign-ins from a given date in a CSV format: ",(0,i.jsx)("a",{href:"http://localhost:8080/people-service/checkin/signins/from/2021-04-17T09:00:00/csv",target:"_blank",children:"http://localhost:8080/people-service/checkin/signins/from/2021-04-17T09:00:00/csv"})]}),(0,i.jsxs)("p",{children:["There are more REST call examples ",(0,i.jsx)("a",{href:"https://github.com/SquireOfSoftware/check-in/blob/master/people-service/People%20Service.postman_collection.json",target:"_blank",children:"here"}),"."]}),(0,i.jsxs)("p",{children:["If you are curious, the docker compose file has been set up ",(0,i.jsx)("a",{href:"https://github.com/SquireOfSoftware/check-in/blob/master/checkin/docker-compose.yml",target:"_blank",children:"here"}),"."]}),(0,i.jsx)("p",{children:"You can copy the docker compose file and then run `docker compose -d up` and it will spin up your cluster."}),(0,i.jsx)("p",{children:"Your entry point should be `http://localhost:8000/qr-scanner` once spun up."}),(0,i.jsx)("h3",{className:o().sticky_heading,children:"Did you have any challenges?"}),(0,i.jsx)("p",{children:"There were some challenges in this architecture as I only use self signed certs to enable the js to use the web camera (as there was a push by Chrome to enable the web cam API only if you were on https). However this has meant that sites accessing this site, would need a special certificate otherwise it would not work. A DNS was considered, but it would be far too much work for a small project running off a small laptop."}),(0,i.jsx)("p",{children:"And yes, the entire project is running off a single laptop, no dedicated server or RAM to keep things up, its just a laptop. Hence why I made the push for docker, I could develop on my machine and when I was ready, I would make docker images, push them publicly and then pull them down and use them."}),(0,i.jsx)("p",{children:"I did not want to concern myself with a Windows operating system too much, so I opted for an abstraction layer mainly docker containers to do my production deployment."}),(0,i.jsx)("p",{children:"There were also many challenges regarding the encoding scheme since there was a requirement to hold the mandarin name of people inside the database. So I needed to make sure that the database could hold the values but also that the CSV dumper could read and export it out properly (apparently there are different encoding schemes for CSV as well)."}),(0,i.jsx)("h3",{className:o().sticky_heading,children:"Where can I find the source code?"}),(0,i.jsxs)("p",{children:["So this is one of my more polished projects, here is the source code: ",(0,i.jsx)("a",{href:"https://github.com/SquireOfSoftware/check-in/",target:"_blank",children:"https://github.com/SquireOfSoftware/check-in/"}),"."]}),(0,i.jsxs)("p",{children:["And here is the docker hub repository: ",(0,i.jsx)("a",{href:"https://hub.docker.com/r/rhinoflower/checkin-service/tags",target:"_blank",children:"https://hub.docker.com/r/rhinoflower/checkin-service/tags"})]})]})}},3976:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/content/CheckIn",function(){return s(7189)}])},1973:function(e){e.exports={sticky_heading:"CheckIn_sticky_heading__3G_8K"}}},function(e){e.O(0,[774,888,179],(function(){return t=3976,e(e.s=t);var t}));var t=e.O();_N_E=t}]);