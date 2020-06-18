import Parameters from "@/components/Parameters";
import MainScreen from "@/components/MainScreen";
import ContactForm from "@/components/ContactForm";
import ChosenSensor from "@/components/ChosenSensor";
import FinalScreen from "@/components/FinalScreen";
import Dealer from "@/components/Dealer";
import Parameter from "@/components/Parameter";
import NavHeader from "@/components/NavHeader";
import search from "@/components/search";
import Guide from "@/components/Guide";



export default [
    { path: '/', component: Parameters },
    { path: '/parameter', component: Parameter },
    { path: '/index', component: MainScreen},
    { path: '/contact', component: ContactForm},
    { path: '/chosen', component: ChosenSensor},
    { path: '/final', component: FinalScreen},
    { path: '/dealer', component: Dealer},
    { path: '/nav', component: NavHeader},
    { path: '/search', component: search},
    { path: '/guide', component: Guide}


]
