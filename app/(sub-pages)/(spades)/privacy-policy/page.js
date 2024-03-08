
import Link from "next/link";
import { CgArrowRight } from "react-icons/cg";


export default function Page() {

    return (
        <>
            <div className="mt-4 ml-4">
                <Link href={"/terms"} className="flex items-center w-fit bg-amber-600 text-black rounded px-6 py-2 hover:shadow-md hover:bg-wheat hover:shadow-amber-600 transition duration-300 ease-in-out font-bold text-lg">T & C <CgArrowRight className="text-xl ml-2" /></Link>
            </div>
            <h1 className="text-center font-bold text-lg underline mt-8">Privacy Policy</h1>
            <p className="text-lg p-3 text-center">
                When using the service information regarding your habits,
                products and services (purchased or sold), information or
                advertisement you read, the pages viewed, the offers and
                services of interest to you, payment method you used may
                accumulate. Information will be used only under this
                Privacy Policy.
                The Provider will avoid as much as possible providing your
                personal information to third parties unless required to do
                so on - by court order, or if he faces the threat of legal
                action (criminal or civil) in respect of acts done by you in
                the service. In this case, the Provider may provide the
                information to the party claiming to have been damaged by
                you or in accordance with a judicial order. The Provider
                may use your information in order to improve the services
                offered by the system and adjust the system to your needs
                and preferences, as well as to contact you.
            </p>
            <p className="text-xl p-5 text-center">
                <b>External components & Third party sites:</b>
                <br />The Provider may rely on external components supplied by
                third parties to provide a certain level of functionality. The
                Provider may bring an end to the use of these components
                at any time for any reason or no reason and the client will
                have no claim or demand against the Provider in
                connection therewith.
                The use of these components are in accordance with the
                terms of use of the above stated and therefore any change
                in policy and terms of use can bring a policy change by the
                Provider including stopping using these components
                completely and the client will have no claim or demand
                against the Provider in connection therewith.
                These sites are not controlled and / or owned by the
                Provider and he is not responsible for the contents of any
                linked site. These sites are property of the third party and
                may be protected by copyright and / or intellectual
                property laws and / or any other protection. The Provider
                is providing these services only as a convenience and he
                does not approve or assume any responsibility for the
                content, security, functionality or practices of such sites.
                Also, the inclusion does not imply support of the Provider        
            </p>
        </>
    )
}