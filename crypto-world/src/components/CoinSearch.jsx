import React, { useState } from 'react';
import CoinItem from './CoinItem';
import {Pagination} from '@material-ui/lab';
import { makeStyles } from "@material-ui/core/styles";

const CoinSearch = ({ coins }) => {
    const [searchText, setSearchText] = useState([]);
    const [page, setPage] = useState(1);
    const useStyles = makeStyles({
      pagination: {
        "& .MuiPaginationItem-root": {
          color: "gold",
        },
      },
    });

    const classes = useStyles();

  return (
  <>
    <div className='rounded-div my-4'>
        <div className='flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right'> 
            <h1 className='text-2xl font-bold my-2 ml-60 '>Cryptocurrency Prices by Market Cap</h1>
            <form>
                <input 
                  onChange={(e) => setSearchText(e.target.value)} 
                  className='w-full bg-primary border-input px-4 py-2 rounded-2xl shadow-xl' 
                  type="text" 
                  placeholder='Search a coin' 
                />
            </form>
        </div>

        <table className='w-full border-collapse text-center'>
            <thead>
                <tr className='border-b'>
                    <th></th>
                    <th className='px-4'>#</th>
                    <th className='text-left'>Coin</th>
                    <th></th>
                    <th>Price</th>
                    <th>24h</th>
                    <th className='hidden md:table-cell'>24h Volume</th>
                    <th className='hidden sm:table-cell'>Mkt</th>
                    <th>Last 7 Days</th>
                </tr>
            </thead>
            <tbody>
            {coins
            .slice((page - 1) * 10, (page - 1) * 10 + 10)
            .filter((value) => {
              if (searchText === '') {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchText.toString().toLowerCase())
              ) {
                return value;
              }
            })
            .map((coin) => (
              <CoinItem key={coin.id} coin={coin} />
            ))}
            </tbody>
        </table>

        <Pagination 
          style={{
            padding: 20,
            width: "100%",
            display: "flex",
            justifyContent: "center"
          }}
          classes={{ ul: classes.pagination }}
          count={(coins?.length/10).toFixed(0)}
          onChange={(_, value) => {
            setPage(value);
            window.scroll(0, 1200);
          }}
        /> 
    </div>
  </>
  );
};

export default CoinSearch