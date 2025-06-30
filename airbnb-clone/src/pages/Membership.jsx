import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

function Membership() {
    const { isMember, setIsMember, isLoggedIn } = useAuth();
    const navigate = useNavigate();
    const [plan, setPlan] = useState(null);

    const monthlyPrice = 299;
    const yearlyPrice = 2999;

    const handleConfirm = () => {
        if (!isLoggedIn) {
            alert("Please login to proceed");
            return;
        }
        setIsMember(true);
    };

    return (
        <div className="max-w-3xl mx-auto p-8 mt-24 text-gray-700">
            <h1 className="text-3xl font-bold mb-4 text-cyan-700">WanderIn Plus Membership</h1>
            <p className="mb-6 text-sm">Upgrade your travel with exclusive benefits:</p>

            <table className="w-full border border-gray-200 mb-6 text-sm">
                <thead>
                    <tr className="bg-gray-100 text-left">
                        <th className="p-3 border-b">Feature</th>
                        <th className="p-3 border-b">Free</th>
                        <th className="p-3 border-b text-emerald-600">WanderIn Plus</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-3 border-t">Access all listings</td>
                        <td className="p-3 border-t">✅</td>
                        <td className="p-3 border-t">✅</td>
                    </tr>
                    <tr>
                        <td className="p-3">10% discount on stays</td>
                        <td className="p-3">❌</td>
                        <td className="p-3 text-emerald-600">✅</td>
                    </tr>
                    <tr>
                        <td className="p-3">Priority support</td>
                        <td className="p-3">❌</td>
                        <td className="p-3 text-emerald-600">✅</td>
                    </tr>
                </tbody>
            </table>

            {!isMember ? (
                <>
                    <div className="mb-4">
                        <h2 className="text-md font-semibold mb-2">Choose your plan:</h2>
                        <div className="flex gap-4">
                            <button
                                onClick={() => setPlan("monthly")}
                                className={`px-4 py-2 rounded cursor-pointer ${plan === "monthly"
                                    ? "bg-cyan-600 text-white"
                                    : "bg-gray-100"
                                    }`}
                            >
                                Monthly ₹{monthlyPrice}
                            </button>
                            <button
                                onClick={() => setPlan("yearly")}
                                className={`px-4 py-2 rounded cursor-pointer ${plan === "yearly"
                                    ? "bg-cyan-600 text-white"
                                    : "bg-gray-100"
                                    }`}
                            >
                                Yearly ₹{yearlyPrice}
                            </button>
                        </div>
                    </div>

                    {plan && (
                        <div>
                            <p className="text-sm mb-2">
                                Selected Plan:{" "}
                                <span className="font-semibold text-emerald-600">
                                    {plan === "monthly"
                                        ? `Monthly - ₹${monthlyPrice}`
                                        : `Yearly - ₹${yearlyPrice}`}
                                </span>
                            </p>
                            <button
                                onClick={handleConfirm}
                                className="bg-emerald-500 text-white px-6 py-2 rounded hover:bg-emerald-600 transition cursor-pointer"
                            >
                                Confirm Payment
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <div className="text-center">
                    <p className="text-emerald-600 font-bold text-lg mb-4">
                        You're now a WanderIn Plus member! 🎉
                    </p>
                    <button
                        onClick={() => navigate("/")}
                        className="bg-cyan-600 text-white px-5 py-2 rounded hover:bg-cyan-700 transition cursor-pointer"
                    >
                        Return Home
                    </button>
                </div>
            )}
        </div>
    );
}

export default Membership