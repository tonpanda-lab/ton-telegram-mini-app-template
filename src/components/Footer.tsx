
import { Link } from "react-router-dom";
import { MdAdminPanelSettings, MdSettings, MdWallet } from "react-icons/md";
import { Address } from 'ton-core';
import { FaHome } from 'react-icons/fa';
import { useTonConnect } from "../hooks/useTonConnect";

export function Footer() {

    const ADMIN_ADDRESS = __ADMIN_ADDRESS__;
    const { wallet } = useTonConnect();

    const isAdmin = () => {
        return false

        if (wallet && (Address.parse(ADMIN_ADDRESS).equals(Address.parse(wallet)))) {
            return true
        } else {
            return false

        }
    }
    return (
        <div>
            <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] w-full md:max-w-xl bg-[#272a2f] flex justify-around items-center z-50 text-xs">

                <div className="text-center text-gray-300 w-1/4 p-2 m-1 ">

                    <Link to="/">
                        <FaHome size={25} className="w-8 h-8 mx-auto" />
                        <p className="mt-1">HOME </p>
                    </Link>
                </div>

                <div className="text-center text-gray-300 w-1/4 p-2 m-1 ">
                    <Link to="/plan">
                        <MdWallet className="w-8 h-8 mx-auto" />
                        <p className="mt-1">WALLET</p>
                    </Link>

                </div>
                <div className="text-center text-gray-300 w-1/4 p-2 m-1 ">
                    <Link to="/plan">
                        <MdSettings className="w-8 h-8 mx-auto" />
                        <p className="mt-1">SETTING</p>
                    </Link>

                </div>

                {isAdmin() && <div className="text-center text-gray-300 w-1/4 p-2 m-1 ">
                    <Link to="/admin">
                        <MdAdminPanelSettings className="w-8 h-8 mx-auto" />
                        <p className="mt-1">Admin</p>
                    </Link>

                </div>}
            </div>


        </div >
    );

}