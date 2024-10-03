import { fromNano } from "ton-core";
import { useTonConnect } from "../hooks/useTonConnect";
import { useTonClient } from "../hooks/useTonClient";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { logo_dark, twitter_logo_dark } from "../images";
export function Header() {

    const { connected, sender } = useTonConnect();
    const { client } = useTonClient();

    const userBalanceQuery = useQuery(
        ["getUserBalance"],
        async () => {
            if (!client) return null;
            const userBalance = await client.getBalance(sender.address);
            return (Number(fromNano(userBalance)).toFixed(2));
        },
        { refetchInterval: 2000 }
    );

    return (
        <div className="px-4 z-100 bg-dark">
            <div className="flex items-center space-x-2 pt-4">

                {/* <Button>
                    {network
                        ? network === CHAIN.MAINNET
                            ? "mainnet"
                            : "testnet"
                        : "N/A"}
                </Button> */}
                <div className="p-1 ">
                    <Link to={"https://tonpanda.com/"} target="_blank">
                        <img src={logo_dark} alt="Dollar Coin" className="w-10 h-10 mx-auto mb-[-10px]" />
                    </Link>
                </div>
                <div>
                    {/* <p className="text-sm">{wallet}</p> */}

                    <Link to={"https://x.com/ton_org"} target="_blank">
                        <img src={twitter_logo_dark} alt="Dollar Coin" className="w-10 h-10 mx-auto mb-[-10px]" />
                    </Link>

                </div>
                {/* <Ellipsis>{wallet}</Ellipsis> */}


                <div className="flex-1 text-center">
                    {/* <p className="text-xs text-[#85827d] font-medium">Wallet Balance:</p>
                    <div className="flex items-center justify-center space-x-1">
                        <p className="text-sm">{(userBalanceQuery.data) ? userBalanceQuery.data : "..."} TON</p>
                    </div> */}
                </div>
                {(connected && <TonConnectButton />)}

            </div>

            <div className="flex items-center justify-between space-x-4 mt-3 mb-3 ">

            </div>

            <dialog id="login" className={`modal ` + (connected ? `` : `modal-open`)}>
                <div className="modal-box content-center bg-gray-800 z-20">
                    <div className="text-center">
                        <div className="mx-auto my-4 w-60">
                            <h3 className="text-lg font-black content-center  text-gray-200">Connect your TON wallet</h3>
                            <p className="text-xs content-center  text-gray-300 pt-2">
                                {!connected && <TonConnectButton className="mx-auto " />}
                            </p>
                            <div>
                            </div>
                        </div>
                        <div className="grid gap-4 grid-cols-1 pt-2">
                        </div>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop backdrop-blur z-10">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
}