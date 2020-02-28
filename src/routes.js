import Parameters from "@/components/Parameters";
import HelloWorld from "@/components/HelloWorld";
import MainScreen from "@/components/MainScreen";
import ContactForm from "@/components/ContactForm";
import Message from "@/components/Message";
import apiTest from "@/components/apiTest";
import ChosenSensor from "@/components/ChosenSensor";
import FinalScreen from "@/components/FinalScreen";
import testFilter from "@/components/testFilter";
import Dealer from "@/components/Dealer";
import testAxio from "@/components/testAxio";


export default [
    { path: '/', component: Parameters },
    { path: '/hello', component: HelloWorld},
    { path: '/index', component: MainScreen},
    { path: '/contact', component: ContactForm},
    { path: '/msg', component: Message},
    { path: '/test', component: apiTest},
    { path: '/chosen', component: ChosenSensor},
    { path: '/final', component: FinalScreen},
    { path: '/filter', component: testFilter},
    { path: '/dealer', component: Dealer},
    { path: '/axio', component: testAxio}

]
