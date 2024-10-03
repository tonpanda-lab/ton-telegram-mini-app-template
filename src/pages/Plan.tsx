import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Switch } from '@headlessui/react'
import Toast from '../components/ui_components/Toast';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export function Plan() {
    const [step, setStep] = useState(1);
    const [enabled, setEnabled] = useState(false)
    const [confirmedPlanNoti, setConfirmedPlanNoti] = useState(false);

    return (

        <>
            <div className="flex-grow bg-[#f7f8f8]  relative top-glow z-0">


                <div className="static pb-1">
                    <div className="px-4 pt-4  justify-center bg-cover" >

                        <div className="flex grid-cols-1 gap-2 md:gap-4 mb-1 text-center auto-cols-max">
                            <div className="flex flex-col p-3 px-4 md:px-5  rounded text-neutral-content w-full">
                                <div className="flex mt-2 items-center w-full mx-auto">

                                    <ul className="steps  w-full ">
                                        <li className={(`step step-neutral text-xs text-black`)}>Saving Goal</li>
                                        <li className={((step == 2) || (step == 3)) && (`step-neutral step text-xs text-black`) || `step text-xs text-black`}>Target Amount</li>
                                        <li className={(step == 3) && (`step-neutral step text-xs text-black`) || `step text-xs text-black`}>Plan Details</li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        {/* some other data */}

                    </div >

                    {(step == 1) && (
                        <div className="px-16 pt-10  justify-center bg-cover" >
                            <div className='text-black text-center mb-2'>Saving Goal</div>
                            <div className="relative rounded-md shadow-sm ">
                                <textarea
                                    rows={4}
                                    id="goal"
                                    name="goal"
                                    type="text"
                                    placeholder="What's your saving goal? E.g. buying a new car"
                                    className="block w-full rounded-md border-0 py-1.5 pl-3 text-center text-gray-900 bg-gray-100 ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>

                            {/* some other data */}

                            <div className="grid gap-4 grid-cols-1 pt-4 ">
                                <button className="py-2 rounded-sm font-normal text-white btn bg-[#36474f]" onClick={() => { setStep(2) }}>Next</button>
                                <Link className="py-2 rounded-sm font-normal btn btn-outline border-gray-800 text-gray-800" onClick={() => {

                                }} to={`/`}>Cancel</Link>
                            </div>

                        </div >
                    )}
                    {(step == 2) && (

                        <div className="px-16 pt-10  justify-center bg-cover" >
                            <div className='text-black text-center mb-2'>Target Amount</div>
                            <div className="relative rounded-md shadow-sm ">
                                <input
                                    id="ton"
                                    name="ton"
                                    type="text"
                                    placeholder="0.00"
                                    onChange={(event) => {
                                        console.log(event.target.value)
                                    }}
                                    className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 bg-white text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center border-l">
                                    <div className='px-2 text-gray-800 text-xs'>TON</div>
                                </div>
                            </div>

                            {/* some other data */}

                            <div className="grid gap-4 grid-cols-1 pt-4 ">
                                <button className="py-2 rounded-sm font-normal text-white btn bg-[#36474f]" onClick={() => { setStep(3) }}>Next</button>
                                <Link className="py-2 rounded-sm font-normal btn btn-outline border-gray-800 text-gray-800" onClick={() => {
                                    setStep(1)
                                }}>Previous Step</Link>
                            </div>

                        </div >
                    )}

                    {(step == 3) && (

                        <div className="px-16 pt-10  justify-center bg-cover" >
                            <div className='text-black text-center mb-2'>Plan Detail</div>
                            <p className="text-xs text-gray-900 px-1">
                                Target deadline
                            </p>
                            <div className="relative rounded-md shadow-sm mb-2">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <span className="text-gray-500 sm:text-sm"></span>
                                </div>
                                <input
                                    type="date"
                                    className="input input-bordered w-full text-black"
                                />
                            </div>

                            <p className="text-xs text-gray-900 px-1">
                                Weekly saving
                            </p>
                            <div className="relative rounded-md shadow-sm ">
                                <input
                                    id="ton"
                                    name="ton"
                                    type="text"
                                    readOnly="true"
                                    placeholder="0.00"
                                    onChange={(event) => {
                                        console.log(event.target.value)
                                    }}
                                    className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 bg-white text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center border-l">
                                    <div className='px-2 text-gray-800 text-xs'>TON</div>
                                </div>
                            </div>
                            <div className="relative rounded-md mt-4 mb-2 px-2">

                                <Switch.Group as="div" className="flex items-center justify-between">
                                    <span className="flex flex-grow flex-col">
                                        <Switch.Label as="span" className="text-sm font-large leading-6 text-gray-900" passive>
                                            Forced lockup
                                        </Switch.Label>
                                        <Switch.Description as="span" className="text-xs font-medium text-gray-500">
                                            This will give you extra score but it cannot be undone
                                        </Switch.Description>
                                    </span>
                                    <Switch
                                        checked={enabled}
                                        onChange={setEnabled}
                                        className={classNames(
                                            enabled ? 'bg-[#42897d]' : 'bg-gray-200',
                                            'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#42897d] focus:ring-offset-2'
                                        )}
                                    >
                                        <span
                                            aria-hidden="true"
                                            className={classNames(
                                                enabled ? 'translate-x-5' : 'translate-x-0',
                                                'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                            )}
                                        />
                                    </Switch>
                                </Switch.Group>
                            </div>
                            {/* some other data */}

                            <div className="grid gap-4 grid-cols-1 pt-4 ">
                                <button className="py-2 rounded-sm font-normal text-white btn bg-[#36474f]" onClick={() => document.getElementById('confirm_plan_modal').showModal()}>Finish</button>
                                <Link className="py-2 rounded-sm font-normal btn btn-outline border-gray-800 text-gray-800" onClick={() => {
                                    setStep(2)
                                }}>Previous Step</Link>
                            </div>

                        </div >
                    )}
                </div >


            </div >

            <Toast show={confirmedPlanNoti} onClose={() => setConfirmedPlanNoti(false)}>
                <p className="text-sm font-medium text-gray-900 z-50">Link Copied!</p>
            </Toast>
            <dialog id="confirm_plan_modal" className="modal ">
                <div className="modal-box content-center bg-[#36474f] z-20">
                    <div className="text-center ">
                        <div className="mx-auto my-4 w-80">
                            <h3 className="text-xl font-black text-white">Confirm Your Saving Plan</h3>
                            <p className="text-md justify-center text-gray-300 font-normal pt-2">
                                You are saving for {"buying an Anon number"} by the end of {"2024-10-05"}
                            </p>
                            <div>

                                <p className="text-xs text-left mt-4 text-white px-1">
                                    Target Saving
                                </p>
                                <div className="relative  mt-2 rounded-md shadow-sm ">
                                    <input
                                        id="ton"
                                        name="ton"
                                        type="text"
                                        readOnly
                                        value="1000"
                                        onChange={(event) => {
                                            console.log(event.target.value)
                                        }}
                                        className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 bg-gray-300 text-gray-500 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center border-l">
                                        <div className='px-2 bg-gray-300 text-gray-500 text-xs'>TON</div>
                                    </div>
                                </div>

                                <p className="text-xs text-left mt-4 text-white px-1">
                                    Weekly Saving
                                </p>
                                <div className="relative mt-2 rounded-md shadow-sm ">
                                    <input
                                        id="ton"
                                        name="ton"
                                        type="text"
                                        readOnly
                                        value="1000"
                                        onChange={(event) => {
                                            console.log(event.target.value)
                                        }}
                                        className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 bg-gray-300 text-gray-500 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center border-l">
                                        <div className='px-2 bg-gray-300 text-gray-500 text-xs'>TON</div>
                                    </div>
                                </div>
                                {<p className="mt-2 text-pink-600 text-xs">
                                    You chose to lock your saving until the deadline, you cannot withdraw anything before that.
                                </p>}
                            </div>
                        </div>
                        <div className="grid gap-4 grid-cols-1 pt-2 ">
                            <button className="py-2 rounded-sm font-normal bg-[#42897d]  hover:bg-cyan-600 text-sm py-3 text-white" onClick={() => {

                            }} >Confirm</button>
                            <button className="py-2 rounded-sm font-normal btn btn-outline border-white text-white" onClick={() => {
                                document.getElementById('confirm_plan_modal').close()

                            }}>Cancel</button>
                        </div>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop backdrop-blur z-10">
                    <button>close</button>
                </form>
            </dialog>

        </>
    );

}