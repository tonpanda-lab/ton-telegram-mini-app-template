import { useState } from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Toast from './ui_components/Toast';

export function SavingInfo() {

    const [confirmedContributionNoti, setConfirmedContributionNoti] = useState(false);

    return (
        <div className="static pb-10">
            <div className="px-4  pt-4 justify-center" >

                <div className="flex grid-cols-1 gap-2 md:gap-4 mb-1 text-center auto-cols-max">
                    <div className="flex flex-col p-3 px-4 md:px-5  bg-[#36474f] shadow rounded text-neutral-content w-full py-6">
                        <div className="flex mt-2 items-center w-full">

                            <div className="flex-2 text-center\" >
                                <p className="text-left text-gray-200"> <span className="md:text-md text-[14px]  ">Your Balance:</span></p>
                                <div className="flex space-x-1">
                                    <p className={`md:text-xlg text-xl text-left  text-white`}>1,000.5 TON</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div >
            {false && (
                <div className="px-4 pt-4 justify-center" >
                    <Link to="/plan">

                        <div className="flex grid-cols-1 gap-2 md:gap-4 mb-1 text-center auto-cols-max">
                            <div className="flex flex-col p-3 px-4 md:px-5  bg-[#87b4ca] shadow rounded text-neutral-content w-full py-4">
                                <div className="flex mt-2 items-center w-full">

                                    <div className="flex-2 text-center" >
                                        <div className="flex space-x-1">
                                            <p className={`md:text-xlg text-xl text-left  text-white`}>Create New Saving Plan!</p>
                                        </div>
                                        <p className="text-left text-gray-100"> <span className="md:text-xs text-[10px]  ">Start saving and earn your on-chain score</span></p>

                                    </div>

                                    <div className="flex-1 text-right" >
                                        <div className="flex space-x-1  text-right float-end">
                                            <FaArrowAltCircleRight className="md:text-5xl text-[40px]  text-right text-white " />

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </Link>
                    {/* some other data */}
                </div >
            )}


            {true && (<div className="px-4 pt-4 justify-center" onClick={() => document.getElementById('confirm_contribution_modal').showModal()}>

                <div className="flex grid-cols-1 gap-2 md:gap-4 mb-1 text-center auto-cols-max">
                    <div className="flex flex-col p-3 px-4 md:px-5  bg-gray-100 shadow rounded text-neutral-content w-full py-4">
                        <div className="flex mt-2 items-center w-full">

                            <div className="flex-2 text-center" >
                                <div className="flex space-x-1">
                                    <p className={`md:text-xlg text-xl text-left  text-black`}>Saving 100 TON / Week</p>
                                </div>
                                <p className="text-left text-gray-400"> <span className="md:text-xs text-[10px]  ">You are saving for {"buying an anon-number"}</span></p>

                            </div>

                            <div className="flex-1 text-right" >
                                <div className="flex space-x-1  text-right float-end">
                                    <div className="radial-progress text-[#ca8182] " style={{ "--value": 70, "--size": "8rem", "--thickness": "0.5rem" }} role="progressbar">
                                        70%
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                {/* some other data */}
            </div >)}
            {/* <div className="px-4 pt-4 justify-center" >

                <div className="flex grid-cols-1 gap-2 md:gap-4 mb-1 text-center auto-cols-max">
                    <div className="flex flex-col p-3 px-4 md:px-5  bg-[#fff] shadow rounded text-neutral-content w-full py-4">

                        <div className="flex mt-2 items-center w-full">
                            <div className="flex-2 text-center" >
                                <div className="flex space-x-1">
                                    <p className={`md:text-xlg text-xl text-left  text-black`}>View Your Saving Plan</p>
                                </div>
                                <p className="text-left text-gray-400"> <span className="md:text-xs text-[10px]  ">Together we will reach your financial goals</span></p>

                            </div>

                            <div className="flex-1 text-right" >
                                <div className="flex space-x-1  text-right float-end">
                                    <FaArrowAltCircleRight className="md:text-5xl text-[40px]  text-right text-[#87b4ca] " />

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div > */}
            <div className="px-4 pt-4 justify-center" >

                <div className="flex grid-cols-1 gap-3 md:gap-4 mb-1 text-center auto-cols-max">

                    <div className='flex-1'>

                        <div className="flex space-x-1">
                            <p className={`md:text-sm text-xs text-left text-black mb-2`}>TON Saved</p>
                        </div>
                        <div className="flex flex-col p-3 px-4 md:px-5  bg-[#d9e8e5] shadow rounded text-neutral-content w-full py-8">

                            <div className="flex space-x-1">
                                <p className={`md:text-md text-md text-left  text-black`}>100 TON</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex-2 text-center" >
                                    <p className="text-left text-gray-400"> <span className="md:text-xs text-[10px]  ">TON saved for your future</span></p>

                                </div>

                            </div>
                        </div>
                    </div>


                    <div className='flex-1'>

                        <div className="flex space-x-1">
                            <p className={`md:text-sm text-xs text-left text-black mb-2`}>Score Earned</p>
                        </div>
                        <div className="flex flex-col p-3 px-4 md:px-5  bg-[#e3ecef] shadow rounded text-neutral-content w-full py-8">

                            <div className="flex space-x-1">
                                <p className={`md:text-md text-md text-left  text-black`}>1,115,987</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex-2 text-center" >
                                    <p className="text-left text-gray-400"> <span className="md:text-xs text-[10px]  ">Your on-chain financial score</span></p>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <div className='h-10' />
                {/* some other data */}

            </div >

            <Toast show={confirmedContributionNoti} onClose={() => setConfirmedContributionNoti(false)}>
                <p className="text-sm font-medium text-gray-900 z-50">Link Copied!</p>
            </Toast>
            <dialog id="confirm_contribution_modal" className="modal ">
                <div className="modal-box content-center bg-gray-100 z-20">
                    <div className="text-center ">
                        <div className="mx-auto my-4 w-80">
                            <h3 className="text-xl font-black text-gray-800">Saving for the future</h3>
                            <p className="text-md justify-center text-gray-800 font-normal pt-2">
                                You are saving for {"buying an Anon number"} by the end of {"2024-10-05"}
                            </p>
                            <div className='grid grid-cols-1 place-content-center my-4'>
                                <div className="flex space-x-1  text-center m-auto">
                                    <div className="radial-progress text-[#ca8182] " style={{ "--value": 70, "--size": "13rem", "--thickness": "0.7rem" }} role="progressbar">
                                        <p className='text-md'>80,000 / 1,000,000</p>
                                        <p className='text-md'> TON</p>
                                    </div>
                                </div>
                            </div>
                            <div>


                                <p className="text-xs text-left mt-4 text-gray-700 px-1">
                                    Weekly Saving
                                </p>
                                <div className="relative rounded-md shadow-sm ">
                                    <input
                                        type="text"
                                        readOnly
                                        value="1000"
                                        onChange={(event) => {
                                            console.log(event.target.value)
                                        }}
                                        className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 bg-gray-300 text-gray-500 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center border-l">
                                        <div className='px-2 text-gray-500 text-xs'>TON</div>
                                    </div>
                                </div>
                                <p className="text-xs text-left mt-4 text-gray-700 px-1">
                                    Multiple Saving
                                </p>
                                <div className="relative rounded-md shadow-sm">
                                    {/* Button at the front */}
                                    <div className="absolute left-0 inset-y-0 flex items-center border-r z-50">
                                        <button className="px-5 text-gray-800 text-xl">-</button>
                                    </div>

                                    {/* Input field */}
                                    <div className="relative inset-x-0 top-0 rounded-md shadow-sm">
                                        <input
                                            id="ton"
                                            name="ton"
                                            type="number"
                                            placeholder="1"
                                            step="1"
                                            onChange={(event) => {
                                                console.log(event.target.value);
                                            }}
                                            className="block w-full text-center rounded-md border-0 py-1.5 pl-10 pr-10 bg-white text-gray-800 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                        />
                                    </div>

                                    {/* Button at the end */}
                                    <div className="absolute inset-y-0 right-0 flex items-center border-l">
                                        <button className="px-5 text-gray-800 text-xl">+</button>
                                    </div>
                                </div>
                                {<p className="mt-2 text-pink-600 text-xs">
                                    Due to a missed schedule, you'll have a shortfall of 200 TON. If you continue saving 100 TON each week, you won't reach your goal. Increase your savings now to ensure you stay on track!
                                </p>}
                            </div>
                        </div>
                        <div className="grid gap-4 grid-cols-1 pt-2 ">
                            <button className="py-2 rounded-sm font-normal bg-[#42897d]  hover:bg-cyan-600 text-sm py-3 text-white" onClick={() => {

                            }} >Contribute</button>
                        </div>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop backdrop-blur z-10">
                    <button>close</button>
                </form>
            </dialog>

        </div >
    );

}

