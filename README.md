# Expense Tracker
An expense tracker with multiple user role login and JWT RESTful api implementation. 

Online Demo: http://us.ypseek.com/labs/2017/gigster/

Two roles:
* Admin
* User

Test accounts:
* admin@gigster.com abc123456
* feynman@gigster.com abc123456
---------------
* user@gigster.com zz
* iris@gigster.com abc123456
* ibio@gigster.com abc123456

Admin
* Can read all the saved expenses, including those which they do not own
* Can not create, update, or delete expenses they do not own (you can click to edit your posts which have darker background)
* Add a new one on the right pane

User
* Can edit every post (click the post to edit and it will update immediately)
* Add a new one on the right pane


Run locally
### frontend
```
git clone https://github.com/ibio/expense-tracker.git
cd expense-tracker/frontend
npm install
grunt (you may need to install grunt first)
```
Or use any local http server to visit it.

### backend
```
git clone https://github.com/ibio/expense-tracker.git
cd expense-tracker/interface
composer install (you may need to install composer first)
```

## Main features:
* ajax json api to get backend RESTful Data
* standard JWT RESTFul token API architecture
* multiple role login implement
* responsive design (mobile friendly)
* React JS single page application


### Browser Compatibility:
* Chrome: Version 56.0.2924.87 (64-bit)
* Safari: Version 10.0.3 (12602.4.8)
* Firefox: 51.0.1 (64-bit)
* iPHone 6


## Some TODO list
* report with time range
* time-series plot
* aggregate spending per hour, day,month, and year (in addition to per week)
* logout
* frontend delete response (I didn't have time for it but the backend is done)

