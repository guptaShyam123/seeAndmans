import React from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Logins from "./Components/Home/Logins";
// import Mobilelogin from "./Components/phone/Mobilelogin";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Banner from "./Components/Home/Banner";
import Cabs from "./Components/cab/Cabs";
import Tabferry from "./Components/Ferry/Tabferry";
import Upper from "./Components/Hotel/Upper";
import Forgotpass from "./Components/Home/Forgotpass";
import "./App.css";
import Signin from "./Components/Home/Signin";
import Tabcruise from "./Components/Cruise/Tabcruise";
import Headers from "./Components/Headers";
import Cabsdetail from "./Components/cab/Cabsdetail";
import FerryLists from "./Components/Ferry/FerryLists";
import Aboutbanner from "./Components/About/Aboutbanner";
import Ourpackage from "./Components/packeges/Ourpackage";
import Tabwater from "./Components/water/Tabwater";
import Packagesdetail from "./Components/packeges/Packagesdetail";
import HotelSelection from "./Components/Hotel/HotelSelection";
import HotelPaymentDetail from "./Components/Hotel/HotelPaymentDetail";
import FerryInputComponent from "./Components/Ferry/FerryInputComponent";
import Packmodel from "./Components/packeges/Packmodel";
import Packmodel2 from "./Components/packeges/Packmodel2";
import WaterActivitymain from "./Components/Wateractivity/WaterActivitymain";
import Scubadetail from "./Components/Scubadiving/Scubadetail";
import Scubadiving from "./Components/Scubadiving/Scubadiving";
import Waterbook from "./Components/Wateractivity/Waterbook";
import Sightseeingpage from "./Components/Sightseeing/Sightseeingpage";
import Sightbook from "./Components/Sightseeing/Sightbook";
import Destinationwed from "./Components/wedding/Destinationwed";
import Weddingform from "./Components/wedding/Weddingform";
import Testimonials from "./Components/Reviews/Testmonials";
import Blog2 from "./Components/blog/Blog2";
import Blogdetail from "./Components/blog/Blogdetail";
import CabDetail1 from "./Components/cab/Cabdetail1";
import Adduserdetail from "./Components/packeges/Adduserdetail";
import Hotelpackegebook from "./Components/packeges/Hotelpackegebook";
import EditFerryTravelDetail from "./Components/Ferry/EditFerryTravelDetail";
import Homecard from "./Components/Home/Homecard";
import IslandDetails from "./Components/Islanddetail/IslandDetails";
import Checkapi from "./Components/Checkapi";
import FerryTravelDetail from "./Components/Ferry/FerryTravelDetail";
import BannerInput from "./Components/cab/BannerInput";
import Profile from "./Components/Userprofiles/Profile";
import Package1 from "./Components/Customizepackage/Package1";
import Package2 from "./Components/Customizepackage/Package2";
import Package3 from "./Components/Customizepackage/Package3";
import Mainheader from "./Mobileview/Mainheader";
import MobileHotelList from "./Mobileview/Mobilehotellist/MobileHotelList";
import Mobilelogin from "./Mobileview/Auth/Mobilelogin";
import Signuplogin from "./Mobileview/Auth/Signuplogin";
import Mobilebloglist from "./Mobileview/Mobileblogs/Mobilebloglist";
import Mobilemonial from "./Mobileview/Mobiletestimonail/Mobilmonial";
import Mobilewed from "./Mobileview/Mobilewedding/Mobilewed";
import Mobileabout from "./Mobileview/Mobileabout";
import Mobilecablist from "./Mobileview/Mobilecablist/Mobilecablist";
import Mobileferrylist from "./Mobileview/Mobileferrylists/Mobileferrylist";
import Packagemobilelists from "./Mobileview/Packagemobilelist/Packagemobilelists";
import Mobileactivitylist from "./Mobileview/Mobileactivity/Mobileactivitylist";
import Sightseeinglist from "./Mobileview/Sightseeingphone/Sightseeinglist";
import Mobilecabhome from "./Mobileview/Homepage/Mobilecabhome";
import Mobileferryhome from "./Mobileview/Homepage/Mobileferryhome";
import Hoteldetail from "./Mobileview/Mobilephonedetail/Hoteldetail";
import Mobilecabdetail from "./Mobileview/Mobilephonedetail/Mobilecabdetail";
import Mobileactivitydetail from "./Mobileview/Mobilephonedetail/Mobileactivitydetail";
import Hotelbookingpage from "./Mobileview/Mobilebooking/Hotelbookingpage";
import Sightbooking from "./Mobileview/Mobilebooking/Sightbooking";
import Mobileinfo from "./Mobileview/Mobileuserinfo/Mobileinfo";
import Drawernav from "./Mobileview/Phonenavbar/Drawernav";
import Packagedetail from "./Mobileview/Packagemobilelist/Packagedetail";
import Mobilefooter from "./Mobileview/Mobilefooter";
import Packagehome from "./Mobileview/Homepage/Packagehome";
import Waterhome from "./Mobileview/Homepage/Waterhome";
import Mobilepackagecustomzie from "./Mobileview/Customizepackage/Mobilepackagecustomzie";
import Mobilepackbook from "./Mobileview/Mobilepackbook";
import Packbookform from "./Mobileview/Packbookform";
import Scroll from "./Scrool";
import Package4 from "./Components/Customizepackage/Package4";
import Customaziepackage from "./Components/Customizepackage/Customaziepackage";
import Floatingbutton from "./Components/Floatingbutton";
import Ferrryform from "./Mobileview/Mobileferrylists/Ferrryform";
import Phonefloating from "./Mobileview/Phonenavbar/Phonefloating";
import Mobileferrydetail from "./Mobileview/Mobileferrylists/Mobileferrydetail";
import Bookingpage from "./Mobileview/Bookingpage";
import Mobilecustome2 from "./Mobileview/Customizepackage/Mobilecustome2";
import Mobilecustom3 from "./Mobileview/Customizepackage/Mobilecustom3";
const App = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {isMobile ? (
        <BrowserRouter>
          <Scroll />
          <Phonefloating />
          <Drawernav />

          <Routes>
            <Route path="/" element={<Mainheader />} />
            <Route path="/login" element={<Mobilelogin />} />
            <Route path="/signup" element={<Signuplogin />} />
            <Route path="/cabs" element={<Mobilecabhome />} />
            <Route path="/ferry" element={<Mobileferryhome />} />
            <Route path="/packagehome" element={<Packagehome />} />
            <Route path="/cablist" element={<Mobilecablist />} />
            <Route path="/ferrylist" element={<Mobileferrylist />} />
            <Route path="/aboutus" element={<Mobileabout />} />
            <Route path="/packages" element={<Packagemobilelists />} />
            <Route path="/packagebook/:id" element={<Mobilepackbook />} />
            <Route path="/water" element={<Waterhome />} />
            <Route path="/hotelselection/:id" element={<Hoteldetail />} />
            <Route path="/hotelpayment/:id" element={<Hotelbookingpage />} />

            <Route path="/wateractivity" element={<Mobileactivitylist />} />
            <Route path="/waterbook/:id" element={<Mobileactivitydetail />} />
            <Route path="/sightseeing" element={<Sightseeinglist />} />
            <Route path="/sightbook/:id" element={<Sightbooking />} />
            <Route path="/wedding" element={<Mobilewed />} />
            <Route path="/weddingform/:id" element={<Weddingform />} />
            <Route path="/testimonial" element={<Mobilemonial />} />
            <Route path="/blogs" element={<Mobilebloglist />} />

            <Route path="/cabsdetail/:id" element={<Mobilecabdetail />} />

            <Route path="/hotels" element={<MobileHotelList />} />

            <Route path="/profile" element={<Mobileinfo data="shyam" />} />
            <Route path="/packagedetails1/:id" element={<Packagedetail />} />
            <Route path="/custom" element={<Mobilepackagecustomzie />} />
            <Route path="/packageform/:id" element={<Packbookform />} />
            <Route path="/bookferry/:id" element={<Ferrryform />} />
            <Route path="/ferrydetail/:id" element={<Mobileferrydetail />} />
            <Route path="/checkbooking" element={<Bookingpage />} />
            <Route path="/custom2" element={<Mobilecustome2 />} />
            <Route path="/custom3" element={<Mobilecustom3 />} />
          </Routes>
          <Mobilefooter />
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Scroll />
          <Headers />
          <Floatingbutton />
          <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/login" element={<Logins />} />
            <Route path="/signup" element={<Signin />} />
            <Route path="/cabs" element={<Cabs />} />
            <Route path="/ferry" element={<Tabferry />} />
            <Route path="/cruise" element={<Tabcruise />} />
            <Route path="/water" element={<Tabwater />} />
            <Route path="/hotels" element={<Upper />} />
            <Route path="navbar" element={<Headers />} />
            <Route path="/cablist" element={<Cabsdetail />} />
            <Route path="/ferrylist" element={<FerryLists />} />
            <Route path="/aboutus" element={<Aboutbanner />} />
            <Route path="/packages" element={<Ourpackage />} />

            <Route path="/hotelselection/:id" element={<HotelSelection />} />
            <Route path="/hotelpayment/:id" element={<HotelPaymentDetail />} />
            <Route path="/bookferry" element={<FerryInputComponent />} />
            <Route path="selectferry" element={<FerryLists />} />
            <Route path="/packagedetail/:id" element={<Packagesdetail />} />
            <Route path="/model" element={<Packmodel />} />
            <Route path="/model2" element={<Packmodel2 />} />
            <Route path="/wateractivity" element={<WaterActivitymain />} />
            <Route path="/scubadetail/:id" element={<Scubadetail />} />
            <Route path="/scubacard" element={<Scubadiving />} />
            <Route path="/waterbook/:id" element={<Waterbook />} />
            <Route path="/sightseeing" element={<Sightseeingpage />} />
            <Route path="/sightbook/:id" element={<Sightbook />} />
            <Route path="/wedding" element={<Destinationwed />} />
            <Route path="/weddingform/:id" element={<Weddingform />} />
            <Route path="/testimonial" element={<Testimonials />} />
            <Route path="/blogs" element={<Blog2 />} />
            <Route path="/blogdetail/:id" element={<Blogdetail />} />
            <Route path="/cabsdetail/:id" element={<CabDetail1 />} />
            <Route path="/userdetail" element={<Adduserdetail />} />
            <Route
              path="/hotelpackagebook/:id"
              element={<Hotelpackegebook />}
            />
            <Route path="/editferry" element={<EditFerryTravelDetail />} />
            <Route path="/homecard" element={<Homecard />} />
            <Route path="/island/:id" element={<IslandDetails />} />
            <Route path="/check" element={<Checkapi />} />
            <Route path="/ferrydetail" element={<FerryTravelDetail />} />
            <Route path="/bannerinput" element={<BannerInput />} />
            <Route path="/forgotpass" element={<Forgotpass />} />
            <Route path="/profile" element={<Profile data="shyam" />} />

            <Route path="/custom1" element={<Package1 />} />
            <Route path="/package2" element={<Package2 />} />
            <Route path="/package3" element={<Package3 />} />
            <Route path="/package4" element={<Package4 />} />
            <Route path="/customazie" element={<Customaziepackage />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
