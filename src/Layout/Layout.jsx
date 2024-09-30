import { Outlet } from 'react-router-dom';
import ListOfRoutes from './components/ListOfRoutes';
import LiftInfo from './components/LiftInfo';
import Label from './components/Label';
import Line from './components/Line';
import Header from './components/Header';

export default function Layout() {
    return (
        <div className="font-Montserrat">
            <main className="h-screen overflow-hidden flex flex-col relative w-screen p-12 bg-gradient-to-br from-[#18181A] via-25% via-[#18181A] to-red-900 ">
                <div className="absolute opacity-50 w-screen h-screen top-0 left-0 bg-no-repeat bg-[url('../../public/forbg2.png')] bg-right-bottom "></div>
                <div className="absolute opacity-30 w-screen h-screen top-0 left-0 bg-no-repeat bg-[url('../../public/forbg22.png')] bg-left-top "></div>
                <div className="absolute w-screen h-screen opacity-50 bg-repeat top-0 left-0 bg-[url('../../public/noise.png')] bg-center "></div>
                <div className="z-10 flex flex-col grow relative">
                    <Header />
                    <div className="grow w-full pl-9 flex justify-between">
                        <LiftInfo />
                        <div className="p-5 w-[90%] mx-auto ">
                            <Outlet />
                        </div>
                        <ListOfRoutes />
                    </div>
                </div>
                <Label />
                <Line />
            </main>
        </div>
    );
}
