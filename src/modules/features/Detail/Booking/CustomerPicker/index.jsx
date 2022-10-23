import {
  CaretDownOutlined,
  CaretUpOutlined,
  PlusOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import ClickAwayListener from "hooks/ClickAwayListener";
import { useEffect, useState } from "react";
import "./styles.scss";

const CustomerPicker = ({ maxQuanity = 0, onChange = () => {} }) => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [numberAdult, setNumberAdult] = useState(1);
  const [numberChildren, setNumberChildren] = useState(0);
  const [numberInfant, setNumberInfant] = useState(0);
  const [numberPet, setNumberPet] = useState(0);
  const [totalCustomer, setTotalCustomer] = useState(1);

  useEffect(() => {
    setTotalCustomer(numberAdult + numberChildren);
  }, [numberAdult, numberChildren]);

  useEffect(() => {
    onChange(totalCustomer);
  }, [onChange, totalCustomer]);
  return (
    <div>
      <ClickAwayListener onClickAway={() => setIsShowMenu(false)}>
        <div className="relative">
          <div className="wrapper" onClick={() => setIsShowMenu(!isShowMenu)}>
            <div className="resultPick">
              <h1 className="!mb-0 text-[10px] font-bold">GUEST</h1>
              <h1 className="!mb-0 font-light">
                {totalCustomer} guest {numberInfant > 0 && `, ${numberInfant} infants`}
                {numberPet > 0 && `, ${numberPet} pets`}
              </h1>
            </div>
            <div className="flex items-center">
              {!isShowMenu && (
                <CaretDownOutlined
                  className="text-[15px] cursor-pointer hover:text-[#FF385B]"
                  onClick={() => setIsShowMenu(true)}
                />
              )}
              {isShowMenu && (
                <CaretUpOutlined
                  className="text-[15px] cursor-pointer hover:text-[#FF385B]"
                  onClick={() => setIsShowMenu(false)}
                />
              )}
            </div>
          </div>

          <div className="menuWrapper">
            {isShowMenu && (
              <div className="menuDropdown">
                <div className="menuItem">
                  <div>
                    <h1 className="text-[16px] font-bold !mb-0">Adults</h1>
                    <h1 className="text-[14px] font-light">Ages 13+</h1>
                  </div>
                  <div className="flex items-center justify-between w-[40%]">
                    <button
                      disabled={numberAdult <= 0 || totalCustomer <= 1 ? true : false}
                      className="minusBtn"
                      onClick={() => setNumberAdult((prev) => prev - 1)}
                    >
                      <MinusOutlined />
                    </button>
                    <span className="px-2 text-[18px] flex-[1_2_1]">{numberAdult}</span>
                    <button
                      className="plusBtn"
                      disabled={totalCustomer >= maxQuanity ? true : false}
                      onClick={() => setNumberAdult((prev) => prev + 1)}
                    >
                      <PlusOutlined />
                    </button>
                  </div>
                </div>

                <div className="menuItem">
                  <div>
                    <h1 className="text-[16px] font-bold !mb-0">Children</h1>
                    <h1 className="text-[14px] font-light">Ages 2-12</h1>
                  </div>
                  <div className="flex items-center justify-between w-[40%]">
                    <button
                      disabled={numberChildren <= 0 || totalCustomer <= 1 ? true : false}
                      className="minusBtn"
                      onClick={() => setNumberChildren((prev) => prev - 1)}
                    >
                      <MinusOutlined />
                    </button>
                    <span className="px-2 text-[18px] flex-[1_1_1]">
                      {numberChildren}
                    </span>
                    <button
                      className="plusBtn"
                      disabled={totalCustomer >= maxQuanity ? true : false}
                      onClick={() => setNumberChildren((prev) => prev + 1)}
                    >
                      <PlusOutlined />
                    </button>
                  </div>
                </div>

                <div className="menuItem">
                  <div>
                    <h1 className="text-[16px] font-bold !mb-0">Infants</h1>
                    <h1 className="text-[14px] font-light">Under 2</h1>
                  </div>
                  <div className="flex items-center justify-between w-[40%]">
                    <button
                      disabled={numberInfant <= 0 ? true : false}
                      className="minusBtn"
                      onClick={() => setNumberInfant((prev) => prev - 1)}
                    >
                      <MinusOutlined />
                    </button>
                    <span className="px-2 text-[18px] flex-[1_1_1]">{numberInfant}</span>
                    <button
                      className="plusBtn"
                      onClick={() => setNumberInfant((prev) => prev + 1)}
                    >
                      <PlusOutlined />
                    </button>
                  </div>
                </div>

                <div className="menuItem">
                  <div>
                    <h1 className="text-[16px] font-bold !mb-0">Pets</h1>
                    <h1 className="text-[12px] font-bold underline cursor-pointer hover:text-[blue]">
                      Bringing a service animal?
                    </h1>
                  </div>
                  <div className="flex items-center justify-between w-[40%]">
                    <button
                      disabled={numberPet <= 0 ? true : false}
                      className="minusBtn"
                      onClick={() => setNumberPet((prev) => prev - 1)}
                    >
                      <MinusOutlined />
                    </button>
                    <span className="px-2 text-[18px] flex-[1_1_1]">{numberPet}</span>
                    <button
                      className="plusBtn"
                      onClick={() => setNumberPet((prev) => prev + 1)}
                    >
                      <PlusOutlined />
                    </button>
                  </div>
                </div>

                <p className="text-[12px]">
                  This place has a maximum of <b>{maxQuanity} guests</b>, not including
                  infants.
                </p>
              </div>
            )}
          </div>
        </div>
      </ClickAwayListener>
    </div>
  );
};

export default CustomerPicker;
