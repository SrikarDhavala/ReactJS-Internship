import { useAuth } from "../context/AuthContext";

function Membership() {
    const { isMember, setIsMember } = useAuth();

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
                <button
                    onClick={() => setIsMember(true)}
                    className="bg-emerald-500 text-white px-6 py-2 rounded hover:bg-emerald-600 transition cursor-pointer"
                >
                    Get Membership
                </button>
            ) : (
                <p className="text-emerald-600 font-bold text-lg">You're now a WanderIn Plus member!</p>
            )}
        </div>
    );
}

export default Membership