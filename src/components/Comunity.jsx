import React from 'react'
import icon01 from '../assets/img/icon-01.png'
import icon02 from '../assets/img/icon-02.png'
import icon03 from '../assets/img/icon-03.png'

const Comunity = () => {
  return (
    <div className='container mx-auto max-w-[1329ox] text-center'>
        <h2 className='text-[2.25rem] font-semibold text-[#4D4D4D]'>Manage your entire community in a single system</h2>
        <p className='text-[#717171]'>Who is Nextcent suitable for?</p>
        <div>
            <div>
                <img src={icon01} alt='' />
                <h3>Membership<br/> Organisations</h3>
                <p>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
            <div>
                <img src={icon02} alt='' />
                <h3>National<br/> Associations</h3>
                <p>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
            <div>
                <img src={icon03} alt='' />
                <h3>Clubs And <br/> Groups</h3>
                <p>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
        </div>
    </div>
  )
}

export default Comunity