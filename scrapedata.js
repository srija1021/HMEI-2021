let macro;

macro =  "CODE:";

macro += "VERSION BUILD=1011 RECORDER=CR" + "\n" +
"URL GOTO=https://app.cpcbccr.com/ccr/#/caaqm-dashboard-all/caaqm-landing/data" + "\n" +
"WAIT SECONDS=5" + "\n" +
"TAG POS=1 TYPE=DIV ATTR=TXT:Select<SP>..." + "\n" +
"TAG POS=1 TYPE=LI ATTR=TXT:Delhi" + "\n" +
"TAG POS=1 TYPE=DIV ATTR=TXT:Select<SP>..." + "\n" +
"TAG POS=1 TYPE=LI ATTR=TXT:Delhi" + "\n" +
"TAG POS=1 TYPE=DIV ATTR=TXT:24<SP>Hours" + "\n" +
"TAG POS=1 TYPE=LI ATTR=TXT:15<SP>Minute" + "\n" +
"TAG POS=1 TYPE=DIV ATTR=TXT:07-Jun-2021<SP>24:00" + "\n" +
"TAG POS=4 TYPE=DIV ATTR=TXT:June" + "\n" +
"TAG POS=1 TYPE=SPAN ATTR=ID:JAN" + "\n" +
"TAG POS=4 TYPE=DIV ATTR=TXT:2021" + "\n" +
"TAG POS=1 TYPE=SPAN ATTR=ID:2020" + "\n" +
"TAG POS=1 TYPE=SPAN ATTR=TXT:1" + "\n" +
"TAG POS=1 TYPE=DIV ATTR=TXT:Select<SP>..." + "\n" +
"TAG XPATH=\"/html/body/app-root/app-caaqm-dashboard/div/div/main/section/app-caaqm-view-data/div/div/div[2]/div/div/ng-select/select-dropdown/div/div[2]/ul/li[{{!LOOP}}]\"" + "\n" +
"TAG POS=1 TYPE=SPAN ATTR=TXT:Select<SP>Parameter" + "\n" +
"TAG POS=1 TYPE=LABEL ATTR=TXT:PM2.5" + "\n" +
"TAG POS=1 TYPE=LABEL ATTR=TXT:PM10" + "\n" +
"TAG POS=1 TYPE=LI ATTR=TXT:NO2" + "\n" +
"TAG POS=1 TYPE=LI ATTR=TXT:NOx" + "\n" +
"TAG POS=1 TYPE=LI ATTR=TXT:SO2" + "\n" +
"TAG POS=1 TYPE=LI ATTR=TXT:Ozone" + "\n" +
"TAG POS=1 TYPE=MAIN ATTR=TXT:Average<SP>Report<SP>Criteria<SP>State<SP>Name<SP>:<SP>Delhi*" + "\n" +
"TAG POS=1 TYPE=BUTTON ATTR=TXT:Submit" + "\n" +
"WAIT SECONDS=5" + "\n";

iRet = iimPlay(macro)


