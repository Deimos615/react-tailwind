import React from "react";
import phone from '../assets/Image.png'
import mark1 from '../assets/01.png'
import mark2 from '../assets/02.png'
import mark3 from '../assets/03.png'
import mark4 from '../assets/04.png'
import mark5 from '../assets/05.png'
import mark6 from '../assets/Lorem Ipsum.png'
import phone_image2 from '../assets/Frame 28.png'
import photo1 from '../assets/Photo.jpg'
import photo2 from '../assets/Photo.png'
import photo3 from '../assets/Photo (1).png'
import android_download from '../assets/Android_download.png'


const Homepage = () => {
  return (
    <div className="homepage">
      <div className="sm:p-vw7">
        <div className="gap-4 mb-7vw sm:flex">
          <div className="main_heading w-full sm:w-2/5">
            <div className="main_heading_title capitalize text-center sm:text-left">
              Swipe Right on Success
            </div>
            <button className='go_home_btn text-white w-full sm:w-fit flex items-center sm:justify-between justify-center space-x-3' >
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none" className=' ml-3'>
                <path d="M8.53846 1L15 7L8.53846 13M14.1026 7H1" stroke="#29A0F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className="main_heading_img relative w-full sm:w-3/5">
            <img src={phone} className="phone_image" />
          </div>
        </div>
        <div className="sm:px-7">
          <div className="feature_div hidden sm:block">
            <div className=" font-sans font-bold feature_title">
              As featured on
            </div>
            <div className="grid grid-cols-6 gap-16 mt-3 mb-5vw">
              <div className="flex items-center">
                <img src={mark1} />
              </div>
              <div className="flex items-center">
                <img src={mark2} />
              </div>
              <div className="flex items-center">
                <img src={mark3} />
              </div>
              <div className="flex items-center">
                <img src={mark4} />
              </div>
              <div className="flex items-center">
                <img src={mark5} />
              </div>
              <div className="flex items-center">
                <img src={mark6} />
              </div>
            </div>
          </div>
          <div className="work_div">
            <div className="text-center font-sans text-40 sm:text-4vw font-extrabold capitalize work_title_color mx-7vw">
              how does Due Diligence <span className="work_color">work</span>?
            </div>
            <div className="work_content flex px-5 sm:px-5vw py-vw7 gap-12">
              <div className="sm:w-2/5 w-full h-fit hidden sm:block">
                <img src={phone_image2} />
              </div>
              <div className="sm:w-3/5 w-full h-fit">
                <div className="work_item_content">
                  <div className="work_item_svg bg-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                      <path d="M21.25 10.8042H22.5C23.8261 10.8042 25.0979 11.331 26.0355 12.2687C26.9732 13.2063 27.5 14.4781 27.5 15.8042C27.5 17.1303 26.9732 18.4021 26.0355 19.3397C25.0979 20.2774 23.8261 20.8042 22.5 20.8042H21.25M7.5 3.3042V5.8042M12.5 3.3042V5.8042M17.5 3.3042V5.8042M3.75 10.8042H21.25V22.0542C21.25 23.3803 20.7232 24.6521 19.7855 25.5897C18.8479 26.5274 17.5761 27.0542 16.25 27.0542H8.75C7.42392 27.0542 6.15215 26.5274 5.21447 25.5897C4.27678 24.6521 3.75 23.3803 3.75 22.0542V10.8042Z" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="work_item_title">
                    Home
                  </div>
                  <div className="work_item_description">
                    Home you can find different profiles from anywhere in the world, and filter between different categories: Developers, Designers, Entrepreneurs...&nbsp;or by skills to find the profile that best fit with you.
                  </div>
                </div>
                <div className="work_item_content">
                  <div className="work_item_svg bg-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                      <path d="M2.5 5.5542V23.0542L8.5 18.5542C8.9325 18.2292 9.45875 18.0542 10 18.0542H20C20.663 18.0542 21.2989 17.7908 21.7678 17.322C22.2366 16.8531 22.5 16.2172 22.5 15.5542V5.5542C22.5 4.89116 22.2366 4.25527 21.7678 3.78643C21.2989 3.31759 20.663 3.0542 20 3.0542H5C4.33696 3.0542 3.70107 3.31759 3.23223 3.78643C2.76339 4.25527 2.5 4.89116 2.5 5.5542ZM5 18.0542V5.5542H20V15.5542H9.1675C8.62634 15.5527 8.09956 15.7283 7.6675 16.0542L5 18.0542Z" fill="#111111" />
                      <path d="M27.5 28.0542V11.8042C27.5 11.1412 27.2366 10.5053 26.7678 10.0364C26.2989 9.56759 25.663 9.3042 25 9.3042V23.0542L22.3325 21.0542C21.9004 20.7283 21.3737 20.5527 20.8325 20.5542H8.75C8.75 20.8825 8.81466 21.2076 8.9403 21.5109C9.06594 21.8142 9.25009 22.0898 9.48223 22.322C9.71438 22.5541 9.98998 22.7383 10.2933 22.8639C10.5966 22.9895 10.9217 23.0542 11.25 23.0542H20C20.5413 23.0542 21.0675 23.2292 21.5 23.5542L27.5 28.0542Z" fill="#111111" />
                    </svg>
                  </div>
                  <div className="work_item_title">
                    Chat
                  </div>
                  <div className="work_item_description">
                    Talk to potential partners or investors who support your project, for new entrepreneurs choose your colleagues to create a Dream Team to succeed
                  </div>
                </div>
                <div className="work_item_content">
                  <div className="work_item_svg bg-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 35 36" fill="none">
                      <path d="M27.7084 2.92218H7.29175C4.87966 2.92218 2.91675 4.8851 2.91675 7.29718V11.4257C2.91675 12.9613 3.47383 14.357 4.37508 15.4303V29.1722C4.37508 29.559 4.52873 29.9299 4.80222 30.2034C5.07571 30.4769 5.44664 30.6305 5.83341 30.6305H17.5001C17.8869 30.6305 18.2578 30.4769 18.5313 30.2034C18.8048 29.9299 18.9584 29.559 18.9584 29.1722V21.8805H24.7917V29.1722C24.7917 29.559 24.9454 29.9299 25.2189 30.2034C25.4924 30.4769 25.8633 30.6305 26.2501 30.6305H29.1667C29.5535 30.6305 29.9245 30.4769 30.1979 30.2034C30.4714 29.9299 30.6251 29.559 30.6251 29.1722V15.4288C31.5263 14.357 32.0834 12.9613 32.0834 11.4243V7.29718C32.0834 4.8851 30.1205 2.92218 27.7084 2.92218ZM29.1667 7.29718V11.4257C29.1667 13.0882 27.9286 14.5057 26.409 14.5859L26.2501 14.5888C24.6415 14.5888 23.3334 13.2807 23.3334 11.6722V5.83885H27.7084C28.5134 5.83885 29.1667 6.49364 29.1667 7.29718ZM14.5834 11.6722V5.83885H20.4167V11.6722C20.4167 13.2807 19.1086 14.5888 17.5001 14.5888C15.8915 14.5888 14.5834 13.2807 14.5834 11.6722ZM5.83341 7.29718C5.83341 6.49364 6.48675 5.83885 7.29175 5.83885H11.6667V11.6722C11.6667 13.2807 10.3586 14.5888 8.75008 14.5888L8.59112 14.5845C7.07154 14.5057 5.83341 13.0882 5.83341 11.4257V7.29718ZM14.5834 23.3388H8.75008V18.9638H14.5834V23.3388Z" fill="#111111" />
                    </svg>
                  </div>
                  <div className="work_item_title">
                    Subcription
                  </div>
                  <div className="work_item_description">
                    With the Subscription, your profile will be prioritized in the matching queue. This means you'll have a better chance of connecting with like-minded individuals who share your entrepreneurial drive and ambitions.
                  </div>
                </div>
                <div className="work_item_content">
                  <div className="work_item_svg bg-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M20 11.7068C20 13.0329 19.4732 14.3046 18.5355 15.2423C17.5979 16.18 16.3261 16.7068 15 16.7068C13.6739 16.7068 12.4021 16.18 11.4645 15.2423C10.5268 14.3046 10 13.0329 10 11.7068C10 10.3807 10.5268 9.10893 11.4645 8.17125C12.4021 7.23357 13.6739 6.70679 15 6.70679C16.3261 6.70679 17.5979 7.23357 18.5355 8.17125C19.4732 9.10893 20 10.3807 20 11.7068ZM17.5 11.7068C17.5 12.3698 17.2366 13.0057 16.7678 13.4746C16.2989 13.9434 15.663 14.2068 15 14.2068C14.337 14.2068 13.7011 13.9434 13.2322 13.4746C12.7634 13.0057 12.5 12.3698 12.5 11.7068C12.5 11.0437 12.7634 10.4079 13.2322 9.93902C13.7011 9.47018 14.337 9.20679 15 9.20679C15.663 9.20679 16.2989 9.47018 16.7678 9.93902C17.2366 10.4079 17.5 11.0437 17.5 11.7068Z" fill="#111111" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M15 1.70679C7.40625 1.70679 1.25 7.86304 1.25 15.4568C1.25 23.0505 7.40625 29.2068 15 29.2068C22.5938 29.2068 28.75 23.0505 28.75 15.4568C28.75 7.86304 22.5938 1.70679 15 1.70679ZM3.75 15.4568C3.75 18.0693 4.64125 20.4743 6.135 22.3843C7.18404 21.0067 8.53737 19.8902 10.0893 19.1222C11.6412 18.3541 13.3497 17.9553 15.0812 17.9568C16.7904 17.9552 18.4774 18.3437 20.0137 19.0928C21.5499 19.8418 22.895 20.9317 23.9462 22.2793C25.0293 20.8588 25.7585 19.2008 26.0736 17.4425C26.3887 15.6842 26.2805 13.8762 25.7581 12.168C25.2357 10.4598 24.314 8.9006 23.0694 7.61933C21.8247 6.33807 20.2928 5.37161 18.6005 4.79992C16.9081 4.22823 15.104 4.06775 13.3373 4.33175C11.5707 4.59576 9.89224 5.27665 8.44096 6.3181C6.98968 7.35956 5.80726 8.73163 4.99154 10.3208C4.17581 11.9099 3.75023 13.6705 3.75 15.4568ZM15 26.7068C12.4174 26.7107 9.91283 25.8222 7.91 24.1918C8.71616 23.0377 9.78917 22.0954 11.0377 21.4451C12.2863 20.7949 13.6735 20.4558 15.0812 20.4568C16.4715 20.4557 17.8419 20.7863 19.0787 21.4211C20.3155 22.0559 21.383 22.9766 22.1925 24.1068C20.1741 25.7902 17.6282 26.7105 15 26.7068Z" fill="#111111" />
                    </svg>
                  </div>
                  <div className="work_item_title">
                    Settings
                  </div>
                  <div className="work_item_description">
                    Edit and update your profile to show the best of you. Add your engaging portfolio, an interesting description, and relevant details about your interests and passions.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="work_div hidden sm:block">
            <div className="text-center font-sans text-4vw font-extrabold capitalize work_title_color">
              Hear from our <span className="work_color">customers</span>
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-14 mt-10 px-3vw">
              <div className="customer">
                <div className=" flex items-end justify-between">
                  <div className="customer_title font-sans">
                    “
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="7rem" height="1.8rem" viewBox="0 0 139 29" fill="none">
                    <path d="M12.1078 6.83434C12.7065 4.99172 15.3133 4.99172 15.912 6.83434L16.7063 9.27886C16.974 10.1029 17.7419 10.6608 18.6084 10.6608H21.1787C23.1161 10.6608 23.9217 13.1401 22.3543 14.2789L20.2748 15.7897C19.5739 16.2989 19.2805 17.2017 19.5483 18.0257L20.3426 20.4702C20.9413 22.3129 18.8323 23.8451 17.2649 22.7063L15.1855 21.1955C14.4845 20.6862 13.5353 20.6862 12.8343 21.1955L10.7549 22.7063C9.18745 23.8451 7.07849 22.3129 7.67719 20.4703L8.47147 18.0257C8.73921 17.2017 8.4459 16.2989 7.74492 15.7897L5.66549 14.2789C4.09806 13.1401 4.90361 10.6608 6.84106 10.6608H9.41138C10.2778 10.6608 11.0457 10.1029 11.3135 9.27886L12.1078 6.83434Z" fill="#FFC226" />
                    <path d="M39.8491 6.96253C40.4407 5.10525 43.0687 5.10525 43.6604 6.96252L44.3947 9.26787C44.659 10.0975 45.4297 10.6608 46.3004 10.6608H48.7598C50.6876 10.6608 51.4995 13.1199 49.9506 14.2677L47.8932 15.7924C47.206 16.3016 46.9187 17.1914 47.1783 18.0063L47.948 20.4225C48.5372 22.2721 46.4112 23.7922 44.8516 22.6364L42.9455 21.2239C42.2382 20.6997 41.2712 20.6997 40.5639 21.2239L38.6578 22.6364C37.0982 23.7922 34.9722 22.2721 35.5614 20.4225L36.3311 18.0063C36.5907 17.1914 36.3034 16.3016 35.6162 15.7924L33.5589 14.2677C32.01 13.1199 32.8218 10.6608 34.7497 10.6608H37.209C38.0798 10.6608 38.8504 10.0975 39.1147 9.26787L39.8491 6.96253Z" fill="#FFC226" />
                    <path d="M67.598 6.83434C68.1967 4.99172 70.8035 4.99172 71.4022 6.83434L72.1965 9.27886C72.4643 10.1029 73.2322 10.6608 74.0986 10.6608H76.6689C78.6064 10.6608 79.4119 13.1401 77.8445 14.2789L75.7651 15.7897C75.0641 16.2989 74.7708 17.2017 75.0385 18.0257L75.8328 20.4702C76.4315 22.3129 74.3225 23.8451 72.7551 22.7063L70.6757 21.1955C69.9747 20.6862 69.0255 20.6862 68.3245 21.1955L66.2451 22.7063C64.6777 23.8451 62.5687 22.3129 63.1674 20.4703L63.9617 18.0257C64.2294 17.2017 63.9361 16.2989 63.2352 15.7897L61.1557 14.2789C59.5883 13.1401 60.3938 10.6608 62.3313 10.6608H64.9016C65.7681 10.6608 66.536 10.1029 66.8037 9.27886L67.598 6.83434Z" fill="#FFC226" />
                    <path d="M95.3393 6.96253C95.9309 5.10525 98.559 5.10525 99.1506 6.96252L99.885 9.26787C100.149 10.0975 100.92 10.6608 101.791 10.6608H104.25C106.178 10.6608 106.99 13.1199 105.441 14.2677L103.383 15.7924C102.696 16.3016 102.409 17.1914 102.669 18.0063L103.438 20.4225C104.027 22.2721 101.901 23.7922 100.342 22.6364L98.4357 21.2239C97.7284 20.6997 96.7615 20.6997 96.0541 21.2239L94.1481 22.6364C92.5885 23.7922 90.4624 22.2721 91.0516 20.4225L91.8213 18.0063C92.0809 17.1914 91.7936 16.3016 91.1065 15.7924L89.0491 14.2677C87.5002 13.1199 88.312 10.6608 90.2399 10.6608H92.6993C93.57 10.6608 94.3406 10.0975 94.6049 9.26787L95.3393 6.96253Z" fill="#FFC226" />
                    <path d="M123.564 6.98885C124.013 5.60688 125.968 5.60688 126.417 6.98885L127.211 9.43337C127.546 10.4634 128.506 11.1608 129.589 11.1608H132.159C133.612 11.1608 134.216 13.0203 133.041 13.8744L130.961 15.3852C130.085 16.0218 129.719 17.1502 130.053 18.1802L130.848 20.6248C131.297 22.0067 129.715 23.1559 128.539 22.3018L126.46 20.791C125.584 20.1544 124.397 20.1544 123.521 20.791L121.441 22.3018C120.266 23.1559 118.684 22.0067 119.133 20.6248L119.927 18.1802C120.262 17.1502 119.896 16.0218 119.019 15.3852L116.94 13.8744C115.764 13.0203 116.368 11.1608 117.822 11.1608H120.392C121.475 11.1608 122.435 10.4634 122.769 9.43337L123.564 6.98885Z" stroke="#FFC226" />
                    <mask id="mask0_249_331" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="115" y="5" width="20" height="19">
                      <path d="M123.088 6.83434C123.687 4.99172 126.294 4.99172 126.892 6.83434L127.687 9.27886C127.954 10.1029 128.722 10.6608 129.589 10.6608H132.159C134.097 10.6608 134.902 13.1401 133.335 14.2789L131.255 15.7897C130.554 16.2989 130.261 17.2017 130.529 18.0257L131.323 20.4702C131.922 22.3129 129.813 23.8451 128.245 22.7063L126.166 21.1955C125.465 20.6862 124.516 20.6862 123.815 21.1955L121.735 22.7063C120.168 23.8451 118.059 22.3129 118.658 20.4703L119.452 18.0257C119.72 17.2017 119.426 16.2989 118.725 15.7897L116.646 14.2789C115.079 13.1401 115.884 10.6608 117.822 10.6608H120.392C121.258 10.6608 122.026 10.1029 122.294 9.27886L123.088 6.83434Z" fill="#FFC226" />
                    </mask>
                    <g mask="url(#mask0_249_331)">
                      <rect x="113" y="1.98024" width="12" height="25" fill="#FFC226" />
                    </g>
                  </svg>
                </div>
                <div className="customer_content font-sans">
                  Lorem Ipsum is simply dummy text of the print typesetndustry. Lorem Ipsum <span className=" font-bold">dummy simply</span> dummyunknown
                </div>
                <hr className=" my-2vw" />
                <div className="flex items-center">
                  <img src={photo1} className="user_photo" />
                  <div className="pl-2">
                    <div className="user_name font-sans font-bold">
                      Carolyn
                    </div>
                    <div className="user_detail text-1vw">
                      Designer, New York
                    </div>
                  </div>
                </div>
              </div>
              <div className="customer">
                <div className=" flex items-end justify-between">
                  <div className="customer_title font-sans">
                    “
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="7rem" height="1.8rem" viewBox="0 0 139 29" fill="none">
                    <path d="M12.1078 6.83434C12.7065 4.99172 15.3133 4.99172 15.912 6.83434L16.7063 9.27886C16.974 10.1029 17.7419 10.6608 18.6084 10.6608H21.1787C23.1161 10.6608 23.9217 13.1401 22.3543 14.2789L20.2748 15.7897C19.5739 16.2989 19.2805 17.2017 19.5483 18.0257L20.3426 20.4702C20.9413 22.3129 18.8323 23.8451 17.2649 22.7063L15.1855 21.1955C14.4845 20.6862 13.5353 20.6862 12.8343 21.1955L10.7549 22.7063C9.18745 23.8451 7.07849 22.3129 7.67719 20.4703L8.47147 18.0257C8.73921 17.2017 8.4459 16.2989 7.74492 15.7897L5.66549 14.2789C4.09806 13.1401 4.90361 10.6608 6.84106 10.6608H9.41138C10.2778 10.6608 11.0457 10.1029 11.3135 9.27886L12.1078 6.83434Z" fill="#FFC226" />
                    <path d="M39.8491 6.96253C40.4407 5.10525 43.0687 5.10525 43.6604 6.96252L44.3947 9.26787C44.659 10.0975 45.4297 10.6608 46.3004 10.6608H48.7598C50.6876 10.6608 51.4995 13.1199 49.9506 14.2677L47.8932 15.7924C47.206 16.3016 46.9187 17.1914 47.1783 18.0063L47.948 20.4225C48.5372 22.2721 46.4112 23.7922 44.8516 22.6364L42.9455 21.2239C42.2382 20.6997 41.2712 20.6997 40.5639 21.2239L38.6578 22.6364C37.0982 23.7922 34.9722 22.2721 35.5614 20.4225L36.3311 18.0063C36.5907 17.1914 36.3034 16.3016 35.6162 15.7924L33.5589 14.2677C32.01 13.1199 32.8218 10.6608 34.7497 10.6608H37.209C38.0798 10.6608 38.8504 10.0975 39.1147 9.26787L39.8491 6.96253Z" fill="#FFC226" />
                    <path d="M67.598 6.83434C68.1967 4.99172 70.8035 4.99172 71.4022 6.83434L72.1965 9.27886C72.4643 10.1029 73.2322 10.6608 74.0986 10.6608H76.6689C78.6064 10.6608 79.4119 13.1401 77.8445 14.2789L75.7651 15.7897C75.0641 16.2989 74.7708 17.2017 75.0385 18.0257L75.8328 20.4702C76.4315 22.3129 74.3225 23.8451 72.7551 22.7063L70.6757 21.1955C69.9747 20.6862 69.0255 20.6862 68.3245 21.1955L66.2451 22.7063C64.6777 23.8451 62.5687 22.3129 63.1674 20.4703L63.9617 18.0257C64.2294 17.2017 63.9361 16.2989 63.2352 15.7897L61.1557 14.2789C59.5883 13.1401 60.3938 10.6608 62.3313 10.6608H64.9016C65.7681 10.6608 66.536 10.1029 66.8037 9.27886L67.598 6.83434Z" fill="#FFC226" />
                    <path d="M95.3393 6.96253C95.9309 5.10525 98.559 5.10525 99.1506 6.96252L99.885 9.26787C100.149 10.0975 100.92 10.6608 101.791 10.6608H104.25C106.178 10.6608 106.99 13.1199 105.441 14.2677L103.383 15.7924C102.696 16.3016 102.409 17.1914 102.669 18.0063L103.438 20.4225C104.027 22.2721 101.901 23.7922 100.342 22.6364L98.4357 21.2239C97.7284 20.6997 96.7615 20.6997 96.0541 21.2239L94.1481 22.6364C92.5885 23.7922 90.4624 22.2721 91.0516 20.4225L91.8213 18.0063C92.0809 17.1914 91.7936 16.3016 91.1065 15.7924L89.0491 14.2677C87.5002 13.1199 88.312 10.6608 90.2399 10.6608H92.6993C93.57 10.6608 94.3406 10.0975 94.6049 9.26787L95.3393 6.96253Z" fill="#FFC226" />
                    <path d="M123.564 6.98885C124.013 5.60688 125.968 5.60688 126.417 6.98885L127.211 9.43337C127.546 10.4634 128.506 11.1608 129.589 11.1608H132.159C133.612 11.1608 134.216 13.0203 133.041 13.8744L130.961 15.3852C130.085 16.0218 129.719 17.1502 130.053 18.1802L130.848 20.6248C131.297 22.0067 129.715 23.1559 128.539 22.3018L126.46 20.791C125.584 20.1544 124.397 20.1544 123.521 20.791L121.441 22.3018C120.266 23.1559 118.684 22.0067 119.133 20.6248L119.927 18.1802C120.262 17.1502 119.896 16.0218 119.019 15.3852L116.94 13.8744C115.764 13.0203 116.368 11.1608 117.822 11.1608H120.392C121.475 11.1608 122.435 10.4634 122.769 9.43337L123.564 6.98885Z" stroke="#FFC226" />
                    <mask id="mask0_249_331" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="115" y="5" width="20" height="19">
                      <path d="M123.088 6.83434C123.687 4.99172 126.294 4.99172 126.892 6.83434L127.687 9.27886C127.954 10.1029 128.722 10.6608 129.589 10.6608H132.159C134.097 10.6608 134.902 13.1401 133.335 14.2789L131.255 15.7897C130.554 16.2989 130.261 17.2017 130.529 18.0257L131.323 20.4702C131.922 22.3129 129.813 23.8451 128.245 22.7063L126.166 21.1955C125.465 20.6862 124.516 20.6862 123.815 21.1955L121.735 22.7063C120.168 23.8451 118.059 22.3129 118.658 20.4703L119.452 18.0257C119.72 17.2017 119.426 16.2989 118.725 15.7897L116.646 14.2789C115.079 13.1401 115.884 10.6608 117.822 10.6608H120.392C121.258 10.6608 122.026 10.1029 122.294 9.27886L123.088 6.83434Z" fill="#FFC226" />
                    </mask>
                    <g mask="url(#mask0_249_331)">
                      <rect x="113" y="1.98024" width="12" height="25" fill="#FFC226" />
                    </g>
                  </svg>
                </div>
                <div className="customer_content font-sans">
                  Lorem Ipsum is simply dummy text of the print typesetndustry. Lorem Ipsum <span className=" font-bold text_user2">has been standard</span> dummy  unknown
                </div>
                <hr className=" my-2vw" />
                <div className="flex items-center">
                  <img src={photo2} className="user_photo" />
                  <div className="pl-2">
                    <div className="user_name font-sans font-bold">
                      David William
                    </div>
                    <div className="user_detail text-1vw">
                      Developer, Australia
                    </div>
                  </div>
                </div>
              </div>
              <div className="customer">
                <div className=" flex items-end justify-between">
                  <div className="customer_title font-sans">
                    “
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="7rem" height="1.8rem" viewBox="0 0 139 29" fill="none">
                    <path d="M12.1078 6.83434C12.7065 4.99172 15.3133 4.99172 15.912 6.83434L16.7063 9.27886C16.974 10.1029 17.7419 10.6608 18.6084 10.6608H21.1787C23.1161 10.6608 23.9217 13.1401 22.3543 14.2789L20.2748 15.7897C19.5739 16.2989 19.2805 17.2017 19.5483 18.0257L20.3426 20.4702C20.9413 22.3129 18.8323 23.8451 17.2649 22.7063L15.1855 21.1955C14.4845 20.6862 13.5353 20.6862 12.8343 21.1955L10.7549 22.7063C9.18745 23.8451 7.07849 22.3129 7.67719 20.4703L8.47147 18.0257C8.73921 17.2017 8.4459 16.2989 7.74492 15.7897L5.66549 14.2789C4.09806 13.1401 4.90361 10.6608 6.84106 10.6608H9.41138C10.2778 10.6608 11.0457 10.1029 11.3135 9.27886L12.1078 6.83434Z" fill="#FFC226" />
                    <path d="M39.8491 6.96253C40.4407 5.10525 43.0687 5.10525 43.6604 6.96252L44.3947 9.26787C44.659 10.0975 45.4297 10.6608 46.3004 10.6608H48.7598C50.6876 10.6608 51.4995 13.1199 49.9506 14.2677L47.8932 15.7924C47.206 16.3016 46.9187 17.1914 47.1783 18.0063L47.948 20.4225C48.5372 22.2721 46.4112 23.7922 44.8516 22.6364L42.9455 21.2239C42.2382 20.6997 41.2712 20.6997 40.5639 21.2239L38.6578 22.6364C37.0982 23.7922 34.9722 22.2721 35.5614 20.4225L36.3311 18.0063C36.5907 17.1914 36.3034 16.3016 35.6162 15.7924L33.5589 14.2677C32.01 13.1199 32.8218 10.6608 34.7497 10.6608H37.209C38.0798 10.6608 38.8504 10.0975 39.1147 9.26787L39.8491 6.96253Z" fill="#FFC226" />
                    <path d="M67.598 6.83434C68.1967 4.99172 70.8035 4.99172 71.4022 6.83434L72.1965 9.27886C72.4643 10.1029 73.2322 10.6608 74.0986 10.6608H76.6689C78.6064 10.6608 79.4119 13.1401 77.8445 14.2789L75.7651 15.7897C75.0641 16.2989 74.7708 17.2017 75.0385 18.0257L75.8328 20.4702C76.4315 22.3129 74.3225 23.8451 72.7551 22.7063L70.6757 21.1955C69.9747 20.6862 69.0255 20.6862 68.3245 21.1955L66.2451 22.7063C64.6777 23.8451 62.5687 22.3129 63.1674 20.4703L63.9617 18.0257C64.2294 17.2017 63.9361 16.2989 63.2352 15.7897L61.1557 14.2789C59.5883 13.1401 60.3938 10.6608 62.3313 10.6608H64.9016C65.7681 10.6608 66.536 10.1029 66.8037 9.27886L67.598 6.83434Z" fill="#FFC226" />
                    <path d="M95.3393 6.96253C95.9309 5.10525 98.559 5.10525 99.1506 6.96252L99.885 9.26787C100.149 10.0975 100.92 10.6608 101.791 10.6608H104.25C106.178 10.6608 106.99 13.1199 105.441 14.2677L103.383 15.7924C102.696 16.3016 102.409 17.1914 102.669 18.0063L103.438 20.4225C104.027 22.2721 101.901 23.7922 100.342 22.6364L98.4357 21.2239C97.7284 20.6997 96.7615 20.6997 96.0541 21.2239L94.1481 22.6364C92.5885 23.7922 90.4624 22.2721 91.0516 20.4225L91.8213 18.0063C92.0809 17.1914 91.7936 16.3016 91.1065 15.7924L89.0491 14.2677C87.5002 13.1199 88.312 10.6608 90.2399 10.6608H92.6993C93.57 10.6608 94.3406 10.0975 94.6049 9.26787L95.3393 6.96253Z" fill="#FFC226" />
                    <path d="M123.564 6.98885C124.013 5.60688 125.968 5.60688 126.417 6.98885L127.211 9.43337C127.546 10.4634 128.506 11.1608 129.589 11.1608H132.159C133.612 11.1608 134.216 13.0203 133.041 13.8744L130.961 15.3852C130.085 16.0218 129.719 17.1502 130.053 18.1802L130.848 20.6248C131.297 22.0067 129.715 23.1559 128.539 22.3018L126.46 20.791C125.584 20.1544 124.397 20.1544 123.521 20.791L121.441 22.3018C120.266 23.1559 118.684 22.0067 119.133 20.6248L119.927 18.1802C120.262 17.1502 119.896 16.0218 119.019 15.3852L116.94 13.8744C115.764 13.0203 116.368 11.1608 117.822 11.1608H120.392C121.475 11.1608 122.435 10.4634 122.769 9.43337L123.564 6.98885Z" stroke="#FFC226" />
                    <mask id="mask0_249_331" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="115" y="5" width="20" height="19">
                      <path d="M123.088 6.83434C123.687 4.99172 126.294 4.99172 126.892 6.83434L127.687 9.27886C127.954 10.1029 128.722 10.6608 129.589 10.6608H132.159C134.097 10.6608 134.902 13.1401 133.335 14.2789L131.255 15.7897C130.554 16.2989 130.261 17.2017 130.529 18.0257L131.323 20.4702C131.922 22.3129 129.813 23.8451 128.245 22.7063L126.166 21.1955C125.465 20.6862 124.516 20.6862 123.815 21.1955L121.735 22.7063C120.168 23.8451 118.059 22.3129 118.658 20.4703L119.452 18.0257C119.72 17.2017 119.426 16.2989 118.725 15.7897L116.646 14.2789C115.079 13.1401 115.884 10.6608 117.822 10.6608H120.392C121.258 10.6608 122.026 10.1029 122.294 9.27886L123.088 6.83434Z" fill="#FFC226" />
                    </mask>
                    <g mask="url(#mask0_249_331)">
                      <rect x="113" y="1.98024" width="12" height="25" fill="#FFC226" />
                    </g>
                  </svg>
                </div>
                <div className="customer_content font-sans">
                  Lorem Ipsum is simply dummy text of the print typesetndustry. Lorem Ipsum  <span className="font-bold">been standard</span> dummy  unknown
                </div>
                <hr className=" my-2vw" />
                <div className="flex items-center">
                  <img src={photo3} className="user_photo" />
                  <div className="pl-2">
                    <div className="user_name font-sans font-bold">
                      Emma Shrly
                    </div>
                    <div className="user_detail text-1vw">
                      Blogger, USA
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="download_section">
          <div className=" grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-10">
            <div className="flex flex-row sm:flex-col justify-center p-5vw">
              <div className="pt-2vw">
                <div className="download_title font-sans capitalize text-center sm:text-left p-5 sm:p-0 text-4xl sm:text-5xl">
                  Get started with <span className="text-white">Due Diligenze</span> today
                </div>
                <div className='go_home_btn w-fit text-white hidden sm:flex items-center sm:justify-between justify-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.8rem" height="1rem" viewBox="0 0 29 17" fill="none" className="mr-3">
                    <path d="M21.3009 5.1229L23.6759 0.765884C23.7395 0.648926 23.7569 0.510041 23.7242 0.379554C23.6915 0.249066 23.6114 0.137575 23.5014 0.069425C23.447 0.035634 23.3869 0.013602 23.3244 0.00460458C23.262 -0.00439281 23.1984 -0.000176755 23.1375 0.0170092C23.0766 0.0341952 23.0195 0.0640093 22.9696 0.104724C22.9196 0.145439 22.8778 0.196245 22.8465 0.2542L20.4419 4.66747C18.6061 3.77913 16.5398 3.28462 14.3175 3.28462C12.0952 3.28462 10.0289 3.77973 8.19299 4.66747L5.78839 0.2542C5.72432 0.137341 5.61904 0.0522233 5.49571 0.0175713C5.37238 -0.0170807 5.2411 0.0015715 5.13076 0.069425C5.02041 0.137278 4.94004 0.248775 4.90732 0.379386C4.8746 0.509997 4.89221 0.649025 4.95628 0.765884L7.32566 5.1229C3.23224 7.47048 0.457993 11.8607 0 17H28.6316C28.1736 11.8607 25.3993 7.47048 21.3009 5.1229ZM7.74227 12.7419C7.50492 12.7419 7.2729 12.6674 7.07555 12.5277C6.8782 12.3881 6.72438 12.1896 6.63355 11.9573C6.54272 11.7251 6.51896 11.4696 6.56526 11.223C6.61157 10.9765 6.72586 10.75 6.89369 10.5723C7.06153 10.3946 7.27536 10.2735 7.50815 10.2245C7.74094 10.1754 7.98223 10.2006 8.20152 10.2968C8.4208 10.393 8.60822 10.5559 8.74009 10.7649C8.87195 10.9739 8.94234 11.2196 8.94234 11.471C8.94219 11.808 8.8157 12.1312 8.59068 12.3695C8.36566 12.6078 8.0605 12.7417 7.74227 12.7419ZM20.8837 12.7419C20.6466 12.7408 20.4151 12.6654 20.2184 12.5251C20.0217 12.3848 19.8687 12.186 19.7786 11.9537C19.6885 11.7213 19.6655 11.466 19.7124 11.2198C19.7592 10.9736 19.8739 10.7476 20.042 10.5704C20.21 10.3932 20.4238 10.2727 20.6565 10.2241C20.8891 10.1755 21.1302 10.201 21.3491 10.2973C21.5681 10.3937 21.7553 10.5566 21.8869 10.7654C22.0186 10.9743 22.0888 11.2198 22.0888 11.471C22.0887 11.6381 22.0576 11.8036 21.997 11.9579C21.9365 12.1123 21.8479 12.2525 21.7362 12.3705C21.6245 12.4886 21.4919 12.5821 21.346 12.6458C21.2001 12.7096 21.0438 12.7422 20.886 12.7419H20.8837Z" fill="white" />
                  </svg>
                  Download For Android
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center pt-4vw pb-3vw">
              <img src={android_download} className="download_photo" />
            </div>
            <div className='go_home_btn w-fit text-white flex sm:hidden items-center sm:justify-between justify-center m-auto sm:m-none mb-7'>
              <svg xmlns="http://www.w3.org/2000/svg" width="1.8rem" height="1rem" viewBox="0 0 29 17" fill="none" className="mr-3">
                <path d="M21.3009 5.1229L23.6759 0.765884C23.7395 0.648926 23.7569 0.510041 23.7242 0.379554C23.6915 0.249066 23.6114 0.137575 23.5014 0.069425C23.447 0.035634 23.3869 0.013602 23.3244 0.00460458C23.262 -0.00439281 23.1984 -0.000176755 23.1375 0.0170092C23.0766 0.0341952 23.0195 0.0640093 22.9696 0.104724C22.9196 0.145439 22.8778 0.196245 22.8465 0.2542L20.4419 4.66747C18.6061 3.77913 16.5398 3.28462 14.3175 3.28462C12.0952 3.28462 10.0289 3.77973 8.19299 4.66747L5.78839 0.2542C5.72432 0.137341 5.61904 0.0522233 5.49571 0.0175713C5.37238 -0.0170807 5.2411 0.0015715 5.13076 0.069425C5.02041 0.137278 4.94004 0.248775 4.90732 0.379386C4.8746 0.509997 4.89221 0.649025 4.95628 0.765884L7.32566 5.1229C3.23224 7.47048 0.457993 11.8607 0 17H28.6316C28.1736 11.8607 25.3993 7.47048 21.3009 5.1229ZM7.74227 12.7419C7.50492 12.7419 7.2729 12.6674 7.07555 12.5277C6.8782 12.3881 6.72438 12.1896 6.63355 11.9573C6.54272 11.7251 6.51896 11.4696 6.56526 11.223C6.61157 10.9765 6.72586 10.75 6.89369 10.5723C7.06153 10.3946 7.27536 10.2735 7.50815 10.2245C7.74094 10.1754 7.98223 10.2006 8.20152 10.2968C8.4208 10.393 8.60822 10.5559 8.74009 10.7649C8.87195 10.9739 8.94234 11.2196 8.94234 11.471C8.94219 11.808 8.8157 12.1312 8.59068 12.3695C8.36566 12.6078 8.0605 12.7417 7.74227 12.7419ZM20.8837 12.7419C20.6466 12.7408 20.4151 12.6654 20.2184 12.5251C20.0217 12.3848 19.8687 12.186 19.7786 11.9537C19.6885 11.7213 19.6655 11.466 19.7124 11.2198C19.7592 10.9736 19.8739 10.7476 20.042 10.5704C20.21 10.3932 20.4238 10.2727 20.6565 10.2241C20.8891 10.1755 21.1302 10.201 21.3491 10.2973C21.5681 10.3937 21.7553 10.5566 21.8869 10.7654C22.0186 10.9743 22.0888 11.2198 22.0888 11.471C22.0887 11.6381 22.0576 11.8036 21.997 11.9579C21.9365 12.1123 21.8479 12.2525 21.7362 12.3705C21.6245 12.4886 21.4919 12.5821 21.346 12.6458C21.2001 12.7096 21.0438 12.7422 20.886 12.7419H20.8837Z" fill="white" />
              </svg>
              Download For Android
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
