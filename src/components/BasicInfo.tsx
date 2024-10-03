import trump_vs_harris_bk from '../images/trump_vs_harris_bk.jpg';

export function BasicInfo() {


    return (
        <div className="static pb-1">
            <div className="px-4 pt-4  justify-center bg-cover" >

                <div className="flex grid-cols-1 gap-2 md:gap-4 mb-1 text-center auto-cols-max">
                    <div className="flex flex-col p-3 px-4 md:px-5  bg-[#fff] shadow rounded text-neutral-content w-full">
                        <div className="flex mt-2 items-center w-full">

                            <div className="h-[32px] w-[2px]"></div>
                            <div className="flex-1 text-center border-r  border-gray-400" >
                                <div className="flex items-center justify-center space-x-1">
                                    <p className={`md:text-lg text-sm text-center  text-black`}> 1,000</p>
                                </div>
                                <p className="text-center text-gray-400"> <span className="md:text-xs text-[10px]  ">Saving Plans</span></p>

                            </div>
                            <div className="flex-1 text-center border-r  border-gray-400" >
                                <div className="flex items-center justify-center space-x-1">
                                    <p className={`md:text-lg text-sm text-center  text-black`}> 1,000 TON</p>
                                </div>
                                <p className="text-center text-gray-400"> <span className="md:text-xs text-[10px]  ">Total Saving</span></p>

                            </div>
                            <div className="flex-1 text-center" >
                                <div className="flex items-center justify-center space-x-1">
                                    <p className={`md:text-lg text-sm text-center  text-black`}> 3,650 days</p>
                                </div>
                                <p className="text-center text-gray-400"> <span className="md:text-xs text-[10px]  ">Longest Plan</span></p>

                            </div>


                        </div>
                    </div>
                </div>
                {/* some other data */}

            </div >


        </div >
    );

}

