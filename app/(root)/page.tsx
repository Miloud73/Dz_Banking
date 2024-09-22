import RightSideBAr from '@/components/RightSideBAr';
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'


const Home = async () => {
  const loggedIn= await getLoggedInUser();
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title="welcome"
            user={loggedIn?.name || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={12500.12}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
        <RightSideBAr
          user={loggedIn}
          transactions={
            []
          }
          banks={[{currentBalance:21000},{currentBalance:5000}]}
        />
    </section>
  )
}

export default Home
