export const dynamic = "force-dynamic";

import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Home = async () => {
    const loggedIn = await getLoggedInUser();

    function mockdata(balance: number): Bank & Account {
  return {
    // --- Bank fields ---
    $id: "mock_bank_id",
    accountId: "mock_account_id",
    bankId: "mock_bank_id",
    accessToken: "mock_access_token",
    fundingSourceUrl: "https://example.com/funding",
    userId: "mock_user_id",
    sharableId: "mock_sharable_id", // Bank also has this field
    currentBalance: balance, // Bank's currentBalance (same as Account's)

    // --- Account fields ---
    id: "mock_account_id",
    availableBalance: balance - 100, // Example difference
    officialName: "Mock Official Bank Account",
    mask: "1234",
    institutionId: "mock_institution_id",
    name: "Mock Checking Account",
    type: "depository",
    subtype: "checking",
    appwriteItemId: "mock_appwrite_item_id",
    // sharableId already filled above (shared property)
  };
}



    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox 
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.name || 'Guest' }
                        subtext="Access and manage your account and transactions efficiently."
                    /> 

                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.35}
                    />
                </header>

                RECENT TRANSACTIONS
            </div>

            <RightSideBar 
                user={loggedIn}
                transactions={[]}
                banks={[mockdata(142.34), mockdata(657.37)]}

            />
        </section>
    )
}

export default Home