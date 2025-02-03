## The main motive of this mobile application is to monitor the FlyWatch Flight Tracking server 24x7 . 
Context : I have a flight tracker server running on a static ip, Monitoring my favourite aircraft movements and alerting me via Voip Call if its within certain radius of my city 

Problem: Since the flight tracker tracks movements at regular intervals, On some occasions my internet does experience connection issues, or sometimes bot check test returns a long timeout error.
In such occasions I need to go home and manually restart the server in case of any mischap. This becomes quite an issue when I'm somewhere out and occasionally on a false pretext that the server is on and 
running when it has actually stopped. And once the server has stopped. VoIP Call alerts for the specified aircrafts are no longer possible. 
FlyWatch Mobile Application allows me to ping my server every 10 seconds to ensure if its up and running.

It also provides the current status of flight tracking mechanism. Which are as follows
1. Active : The code is actively tracking the latitude and longitude information of the specified aircrafts
2. Sleeping : The code had tracked the latitude and longitude information and will resume again at a randomized interval between 12-15minutes
3. Error : There's some error and the server needs to be restarted
4. Unable to fetch : Server is down

The server logs and flight tracking logs are available on corresponding API endpoints from the server.
The Screen and API Integration for flight tracker logs has been completed.

The refresh functionality has been added to refresh the server status

Login screen UI and authentication has been done.  
