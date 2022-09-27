import React, {useState, useEffect} from 'react'
import '../styles/IssuesList.css'
import  {SingleIssue}  from '../components/SingleIssue'
import axios from 'axios';

export const IssuesList = () => {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

useEffect(() => {
        axios
        .get(
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
        )
        .then(res => {
            setCoins(res.data);
            console.log(res.data);
        })
        .catch(error => console.log(error));
}, []);

const handleChange = e => {
    setSearch(e.target.value);
};

const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
);

    return (
        <div className='issueList-container'>
            <div className='search-component'>
                <h1 className='issue-text'>Search Issues</h1>
                <form>
                    <input type='text' className='search-issue' placeholder='Search'/>
                </form>
            </div>
            {/* <div className='singleIssue-container'>
                <div className='issueList-row'>
                <div className='user'>
                    <img className="user-img" src='' alt='user'/>
                    <h1 className='username-text'>user</h1>
                </div>
                <div className='issue-data'>
                    <p className='issue-title'>title</p>
                    <p className='issue-description'>description</p>
                    <p className='issue-priority'>priority</p>
                </div>
                <div className='issueList-btns'>
                    <button id='resolve-btn'>Resolve</button>
                    <button id='discuss-btn'>Discuss</button>
                </div>
                </div>
            </div> */}
            <SingleIssue/>
    </div>
    )
}
