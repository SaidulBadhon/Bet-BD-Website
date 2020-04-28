import background1 from "../../../../../Assets/HomePage/Background/background1.jpg";
import background2 from "../../../../../Assets/HomePage/Background/background2.jpg";
import background3 from "../../../../../Assets/HomePage/Background/background3.jpg";
import background4 from "../../../../../Assets/HomePage/Background/background4.jpg";
import background5 from "../../../../../Assets/HomePage/Background/background5.jpg";
import background6 from "../../../../../Assets/HomePage/Background/background6.jpg";
import background7 from "../../../../../Assets/HomePage/Background/background7.jpg";
import background8 from "../../../../../Assets/HomePage/Background/background8.jpg";
import background9 from "../../../../../Assets/HomePage/Background/background9.jpg";
import background10 from "../../../../../Assets/HomePage/Background/background10.jpg";
import background11 from "../../../../../Assets/HomePage/Background/background11.jpg";
import background12 from "../../../../../Assets/HomePage/Background/background12.jpg";
import background13 from "../../../../../Assets/HomePage/Background/background13.jpg";
import background14 from "../../../../../Assets/HomePage/Background/background14.jpg";
import background15 from "../../../../../Assets/HomePage/Background/background15.jpg";

import Australia from "../../../../../Assets/Countrys/Australia.svg";
import Bangladesh from "../../../../../Assets/Countrys/Bangladesh.svg";
import England from "../../../../../Assets/Countrys/England.svg";
import India from "../../../../../Assets/Countrys/India.svg";
import Pakistan from "../../../../../Assets/Countrys/Pakistan.svg";

const LiveMatchData = [
  {
    id: 1,
    backgroundImg: background3,
    team1Name: "Bangladesh",
    team1Img: Bangladesh,

    team2Name: "India",
    team2Img: India,

    date: "6 Apr 2020",
    time: "6:00 PM",
    isLive: true,
    liveState: "Live",
  },
  {
    id: 2,
    backgroundImg: background12,
    team1Name: "India",
    team1Img: India,

    team2Name: "Pakistan",
    team2Img: Pakistan,

    date: "8 Apr 2020",
    time: "9:30 PM",

    isLive: true,
    liveState: "Upcoming",
  },

  {
    id: 3,
    backgroundImg: background14,
    team1Name: "Australia",
    team1Img: Australia,

    team2Name: "England",
    team2Img: England,

    date: "4 Apr 2020",
    time: "3:45 AM",

    isLive: false,
    liveState: "Inactive",
  },

  {
    id: 4,
    backgroundImg: background7,
    team1Name: "Australia",
    team1Img: Australia,

    team2Name: "Bangladesh",
    team2Img: Bangladesh,

    date: "9 Apr 2020",
    time: "11:00 PM",

    isLive: true,
    liveState: "Upcoming",
  },

];

export default LiveMatchData;
