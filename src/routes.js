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
import LoadingTest from "@/components/LoadingTest";
import Parameter from "@/components/Parameter";
import parametersTest from "@/components/parametersTest";
import NavHeader from "@/components/NavHeader";
import search from "@/components/search";
import Guide from "@/components/Guide";



export default [
    { path: '/', component: Parameters },
    { path: '/parameter', component: Parameter },
    { path: '/paramtest', component: parametersTest },
    { path: '/hello', component: HelloWorld},
    { path: '/index', component: MainScreen},
    { path: '/contact', component: ContactForm},
    { path: '/msg', component: Message},
    { path: '/test', component: apiTest},
    { path: '/chosen', component: ChosenSensor},
    { path: '/final', component: FinalScreen},
    { path: '/filter', component: testFilter},
    { path: '/dealer', component: Dealer},
    { path: '/axio', component: testAxio},
    { path: '/loader', component: LoadingTest},
    { path: '/nav', component: NavHeader},
    { path: '/search', component: search},
    { path: '/guide', component: Guide}


]
