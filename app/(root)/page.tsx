import RightSideBAr from '@/components/RightSideBAr';
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import React from 'react'


const Home = () => {
  const loggedIn={ firstName :'Miloud',lastName:'Bendjedda',email:'contacte.miloud@gmail.com'};
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title="welcome"
            user={loggedIn?.firstName || 'Guest'}
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
