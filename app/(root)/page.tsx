import RecentsTransactions from "@/components/RecentsTransactions";
import RightSideBAr from "@/components/RightSideBAr";
import HeaderBox from "@/components/ui/HeaderBox";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import { getAccounts, getAccount } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
  const currentPage = Number(page as string) || 1;

  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({
    userId: loggedIn.$id,
  });

  // if (!accounts) return;

  const accountsData = accounts?.data;
  const appwriteItemId =
    (id as string) ||
    (accountsData?.length ? accountsData[0]?.appwriteItemId : undefined);

  const account = await getAccount({ appwriteItemId });

  console.log({
    accountsData,
    account,
  });

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="welcome"
            user={loggedIn?.firstName || "user"}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[accountsData]}
            totalBanks={accounts?.totalBanks}
            totalCurrentBalance={accounts?.totalCurrentBalance}
          />
        </header>
        <RecentsTransactions
          accounts={accountsData}
          transactions={account?.transactions}
          appwriteItemId={appwriteItemId}
          page={currentPage}
        />
      </div>
      <RightSideBAr
        user={loggedIn}
        transactions={[accounts?.transactions]}
        banks={accountsData?.slice(0, 2)}
      />
    </section>
  );
};

export default Home;
