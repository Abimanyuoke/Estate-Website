import { useState, useEffect, useContext } from "react";
import { RiArrowDownSLine, RiWallet3Line } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";
import { Menu } from '@headlessui/react'
import { HouseContext } from "./HouseContext";

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  const prices = [
    {
      value: 'Price range (any)',
    },
    {
      value: '100000 - 130000',
    },
    {
      value: '130000 - 160000',
    },
    {
      value: '190000 - 220000',
    },
    {
      value: '10000 - 30000',
    },
    {
      value: '30000 - 40000',
    },
  ]


  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
        <RiWallet3Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{price}</div>
          <div className="text-[13px]">Chosse price range</div>
        </div>
        {
          isOpen ? (
            <RiArrowUpSLine className="dropdown-icon-secondary" />
          ) : (
            <RiArrowDownSLine className="dropdown-icon-secondary" />
          )
        }
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {
          prices.map((price, index) => {
            return (
              <Menu.Item onClick={() => setPrice(price.value)} className='cursor-pointer hover:text-violet-700 transition-all' as='li' key={index}>
                {price.value}
              </Menu.Item>
            )
          })
        }
      </Menu.Items>

    </Menu>
  );
};

export default PriceRangeDropdown;