import Parameters from "@/components/Parameters";
import HelloWorld from "@/components/HelloWorld";
import MainScreen from "@/components/MainScreen";

export default [
    { path: '/', component: Parameters },
    { path: '/hello', component: HelloWorld},
    { path: '/index', component: MainScreen}
]