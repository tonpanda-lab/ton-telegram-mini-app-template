
import { BasicInfo } from '../components/BasicInfo';
import { Footer } from '../components/Footer';
import { SavingInfo } from '../components/SavingInfo';

export function Home() {

    return (

        <>
            <div className="flex-grow bg-[#f7f8f8]  relative top-glow z-0">

                {/* <div className="absolute top-[2px] left-0 right-0 bottom-0 bg-gradient-to-t from-cyan-500 to-blue-500"> */}
                <div className="absolute top-[2px] left-0 right-0 bottom-0 " >

                    <BasicInfo />
                    <SavingInfo />

                </div>


            </div>

            <Footer />
        </>
    );

}